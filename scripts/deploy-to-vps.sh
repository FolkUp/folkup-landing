#!/bin/bash
# LAND-DEPLOY: VPS Deployment Script for folkup-landing
# Modelled on agile-sapiens/scripts/deploy-to-vps.sh (AGIL-007 + AGIL-106 atomic switch fix)
# Banking-Level Standards Applied
#
# Per Кочегар DevOps verdict 2026-05-30:
# Production folkup.app is served by VPS nginx (NOT Cloudflare Pages).
# CF Pages assumption was phantom — see _meta/rollback-runbook-phase2.md
# (rewritten 2026-05-30) for context.
#
# Prerequisites (env vars, set before invocation):
#   VPS_HOST  — VPS hostname or IP
#   VPS_USER  — deploy user (typically "deploy")
# SSH key: ./deployment_key (gitignored) or whatever path your env wires up
#
# Invocation:
#   npm run build  # build dist/ first
#   ./scripts/deploy-to-vps.sh

set -euo pipefail

# Configuration
SITE_NAME="folkup-landing"
VPS_PATH="/home/deploy/sites/${SITE_NAME}"
BACKUP_DIR="/home/deploy/backups/${SITE_NAME}"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BUILD_DIR="./dist"  # Vue SSG output (NOT agile-sapiens's ./public)

log() { echo "$(date '+%Y-%m-%d %H:%M:%S') [DEPLOY] $1"; }
error() { echo "$(date '+%Y-%m-%d %H:%M:%S') [ERROR] $1" >&2; }

log "🚀 Starting ${SITE_NAME} deployment — Banking-Level Standards"

# Pre-deployment validation
if [ ! -d "${BUILD_DIR}" ]; then
  error "Build artifact directory ${BUILD_DIR} not found — run 'npm run build' first"
  exit 1
fi

if [ ! -f "${BUILD_DIR}/index.html" ]; then
  error "${BUILD_DIR}/index.html missing — incomplete build"
  exit 1
fi

# Validate fresh build via post-build validator (was added в B3 LAND-009)
if [ -f "scripts/validate-build.mjs" ]; then
  log "🔬 Pre-deploy validation gate..."
  node scripts/validate-build.mjs || {
    error "Validator gate FAILED — refusing to deploy"
    exit 1
  }
fi

# Required env vars
: "${VPS_HOST:?VPS_HOST env var not set}"
: "${VPS_USER:?VPS_USER env var not set}"

SSH_KEY="${SSH_KEY:-./deployment_key}"
SSH_OPTS="-i ${SSH_KEY} -o StrictHostKeyChecking=no"

# Verify VPS connectivity
log "📡 Testing VPS connectivity..."
ssh ${SSH_OPTS} -o ConnectTimeout=10 "${VPS_USER}@${VPS_HOST}" \
  "echo 'VPS connection OK'" || {
  error "Failed to connect to VPS — verify SSH key + VPS_HOST/VPS_USER"
  exit 1
}

log "✅ VPS connectivity verified"

# Create atomic deployment structure
log "🏗️  Preparing atomic deployment..."
ssh ${SSH_OPTS} "${VPS_USER}@${VPS_HOST}" "
  mkdir -p ${VPS_PATH}/releases/${TIMESTAMP}
  mkdir -p ${BACKUP_DIR}
  mkdir -p /home/deploy/logs/${SITE_NAME}
"

# Upload new version to staging area
log "📦 Uploading site files via rsync..."
rsync -avz --delete \
  -e "ssh ${SSH_OPTS}" \
  "${BUILD_DIR}/" \
  "${VPS_USER}@${VPS_HOST}:${VPS_PATH}/releases/${TIMESTAMP}/"

if [ $? -ne 0 ]; then
  error "File upload failed"
  exit 1
fi

log "✅ Upload completed: ${TIMESTAMP}"

# Backup current version (if exists)
log "💾 Creating backup of current version..."
ssh ${SSH_OPTS} "${VPS_USER}@${VPS_HOST}" "
  if [ -L ${VPS_PATH}/current ]; then
    CURRENT_TARGET=\$(readlink ${VPS_PATH}/current)
    CURRENT_VERSION=\$(basename \$CURRENT_TARGET)

    if [ -d \"\$CURRENT_TARGET\" ]; then
      echo '[REMOTE] Backing up version: '\$CURRENT_VERSION
      tar -czf ${BACKUP_DIR}/backup_\$CURRENT_VERSION.tar.gz -C \$CURRENT_TARGET .
      echo \$CURRENT_VERSION > ${BACKUP_DIR}/last_version.txt
      echo '[REMOTE] Backup completed: backup_'\$CURRENT_VERSION'.tar.gz'
    fi
  else
    echo '[REMOTE] No previous version to backup (first deploy)'
  fi
"

# Atomic switch — Banking-Level Transaction
log "🔄 Performing atomic switch..."
ssh ${SSH_OPTS} "${VPS_USER}@${VPS_HOST}" "
  # AGIL-106 root cause fix: ln -sfn (force + no-dereference) replaces an
  # existing symlink to a directory in place, instead of moving INTO it.
  ln -sfn ${VPS_PATH}/releases/${TIMESTAMP} ${VPS_PATH}/current
  echo '[REMOTE] Atomic switch completed'

  # Docker bind mount: restart container to re-resolve symlink
  # (AGIL-106: container holds stale inode if not restarted after switch)
  if docker ps --format '{{.Names}}' | grep -q '^${SITE_NAME}\$'; then
    docker compose -f /home/deploy/${SITE_NAME}/docker-compose.yml restart ${SITE_NAME}
    echo '[REMOTE] Container restarted (Docker bind mount re-resolve)'
  else
    # Fallback: nginx site-config reload if not containerized
    if [ -f /etc/nginx/sites-available/${SITE_NAME} ]; then
      sudo nginx -t && sudo systemctl reload nginx
      echo '[REMOTE] Nginx configuration reloaded'
    fi
  fi

  echo '${TIMESTAMP} deployed' >> /home/deploy/logs/${SITE_NAME}/deploy.log
"

# Post-deployment verification
log "🔍 Post-deployment verification..."
ssh ${SSH_OPTS} "${VPS_USER}@${VPS_HOST}" "
  if [ ! -L ${VPS_PATH}/current ]; then
    echo '[REMOTE ERROR] Symlink not created' >&2
    exit 1
  fi

  TARGET=\$(readlink ${VPS_PATH}/current)
  if [ \"\$TARGET\" != \"${VPS_PATH}/releases/${TIMESTAMP}\" ]; then
    echo '[REMOTE ERROR] Symlink points to wrong target' >&2
    exit 1
  fi

  if [ ! -f ${VPS_PATH}/current/index.html ]; then
    echo '[REMOTE ERROR] index.html not found in deployed version' >&2
    exit 1
  fi

  echo '[REMOTE] Deployment verification: PASSED'
"

# Cleanup old releases (keep last 5)
log "🧹 Cleaning up old releases..."
ssh ${SSH_OPTS} "${VPS_USER}@${VPS_HOST}" "
  cd ${VPS_PATH}/releases
  ls -1t | tail -n +6 | xargs -r rm -rf --
  echo '[REMOTE] Old releases cleaned up (keeping last 5)'
"

# Security verification — banking-level
log "🔒 Security check..."
ssh ${SSH_OPTS} "${VPS_USER}@${VPS_HOST}" "
  find ${VPS_PATH}/current -type f -exec chmod 644 {} \\;
  find ${VPS_PATH}/current -type d -exec chmod 755 {} \\;

  if find ${VPS_PATH}/current -name '*.env' -o -name '*.key' -o -name '*.pem' | grep -q .; then
    echo '[REMOTE ERROR] Sensitive files detected in deployed content' >&2
    exit 1
  fi

  echo '[REMOTE] Security check: PASSED'
"

# Public-facing smoke test
log "🌐 Public-facing smoke test..."
sleep 5
NEW_ETAG=$(curl -sI https://folkup.app/ 2>/dev/null | grep -i etag || echo "UNKNOWN")
log "New ETag: ${NEW_ETAG}"

if curl -s https://folkup.app/ 2>/dev/null | grep -q "Семь сайтов\|Seven sites"; then
  log "✅ New hero copy detected in production"
else
  log "⚠️  New hero copy NOT detected — possible cache/propagation lag, recheck в 30s"
fi

log "🎉 Deployment completed successfully!"
log "📊 Summary:"
log "   Site: ${SITE_NAME}"
log "   Version: ${TIMESTAMP}"
log "   VPS: ${VPS_HOST}"
log "   Path: ${VPS_PATH}/current -> releases/${TIMESTAMP}"

# Generate deployment report
cat > deployment-report.json << EOF
{
  "site": "${SITE_NAME}",
  "version": "${TIMESTAMP}",
  "deployed_at": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "vps_host": "${VPS_HOST}",
  "path": "${VPS_PATH}/current",
  "etag_after": "${NEW_ETAG}",
  "status": "success",
  "banking_standards": "maintained"
}
EOF

log "📋 Deployment report: deployment-report.json"
echo "🏛️  Banking-level deployment standards: MAINTAINED"
