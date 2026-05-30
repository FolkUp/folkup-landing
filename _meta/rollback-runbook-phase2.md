# Rollback Runbook — Phase 2 Redesign (VPS-corrected 2026-05-30)

**Created:** 2026-05-29 by Кочегар (initial — CF Pages phantom)
**Rewritten:** 2026-05-30 by Кочегар (VPS-corrected per `server: nginx` dispositive evidence)
**Baseline:** commit `3938cee` / tag `pre-phase2-baseline`
**Production target:** `https://folkup.app` served from VPS nginx (NOT Cloudflare Pages)

## ⚠️ PHANTOM NOTICE (banking-level)

**Previous version of this runbook assumed Cloudflare Pages deployment — this was PHANTOM.**

Dispositive evidence (curl `https://folkup.app/`):
- `server: nginx` (CF Pages always returns `server: cloudflare`)
- No `cf-ray`, no `cf-cache-status`, no `cf-request-id`
- `etag: "69babf88-22ef9"` = nginx weak ETag (inode_hex-size_hex)
- Verified 2026-05-30 by Кочегар DevOps verdict

Supporting infrastructure evidence:
- `folkup-infra/monitoring/ARCHITECTURE.md:272` — folkup.app listed under VPS-served domains
- `folkup-infra/monitoring/setup/uptimerobot-setup.sh:18` — VPS endpoint monitoring
- `folkup-infra/docker/folkup.yml` — nginx-proxy + acme-companion stack

## Pre-Phase-2 Baseline state

- Git tag: `pre-phase2-baseline` (annotated на commit `3938cee`)
- Snapshot tarball: `_meta/dist-pre-phase2-baseline.tar.gz` (9.6 MB)
- Pre-Phase-2 production `last-modified`: 2026-03-18 15:06 UTC

## PRIMARY rollback — tarball restore (~3 min RTO)

**Production layout reality (per Probe A 2026-05-30):** direct-mount `/home/deploy/folkup-landing/` (NOT `/sites/<name>/releases/<ts>/current` symlink layout). Sections below corrected from original CF Pages phantom + atomic-symlink phantom.

### Pre-Phase-2 deploy backup tarball

Path: `/home/deploy/backups/folkup-landing/pre-phase2_20260530-135018.tar.gz` (475M)
Contents: full `/home/deploy/folkup-landing/` state immediately before Phase 2 deploy 2026-05-30 12:50 UTC
Created BY this deploy via atomic chain (backup && tar+ssh upload && nginx-reload).

### Restore procedure

```bash
ssh deploy@46.225.107.2

# 1. Capture current state (in case rollback also fails)
cd /home/deploy
tar czf ~/backups/folkup-landing_rollback-from_$(date +%Y%m%d-%H%M%S).tar.gz folkup-landing/

# 2. Wipe current content (preserving docker-compose.yml + nginx.conf? — depends on rollback target)
# If full rollback to pre-Phase-2: nginx.conf at the time was different (no try_files $uri.html)
# If just content rollback: preserve docker-compose.yml + nginx.conf
rm -rf folkup-landing/*

# 3. Restore from tarball (extracts full folkup-landing/ dir, including its nginx.conf)
tar xzf /home/deploy/backups/folkup-landing/pre-phase2_20260530-135018.tar.gz -C /home/deploy

# 4. Restart container (full restart — reload может быть insufficient после try_files changes)
docker restart folkup-landing

# 5. Verify
curl -sI https://folkup.app/ | grep -iE "^server:|^last-modified:|^content-length:"
# Expect: last-modified Wed, 18 Mar 2026, content-length 143097 (pre-Phase-2 state)
```

NOTE: original runbook described AGIL-106 atomic-symlink switch, but folkup-landing production never used that layout. Direct-mount + tarball restore is the correct procedure.

## SECONDARY rollback — rebuild from baseline tag + redeploy (~15 min RTO)

Same as TERTIARY below — kept here as alternative if tarball corrupted/missing.

## TERTIARY rollback — rebuild from baseline tag + redeploy (~15 min RTO)

If VPS data lost / serious infrastructure failure / need clean Phase-2-baseline state.

```bash
# Локально на dev machine:
cd C:\JOHNDOE_CLAUDE\folkup-landing
git stash                          # preserve in-flight Phase 2 work
git checkout pre-phase2-baseline   # tag annotated на commit 3938cee
npm ci                             # clean install matching package-lock
npm run build                      # вуte-ssg build + sitemap + validator

# Deploy via VPS script
./scripts/deploy-to-vps.sh         # автоматически atomic switch к новому release

# Restore work-in-progress
git checkout master
git stash pop
```

**RTO:** ~15 min (npm ci + build + deploy + verify).

## OR Tertiary alternative — pre-Phase-2 snapshot tarball

Если git tag corrupted/lost:

```bash
ssh ${VPS_USER}@${VPS_HOST}

# Upload tarball
scp -i ${SSH_KEY} _meta/dist-pre-phase2-baseline.tar.gz \
    ${VPS_USER}@${VPS_HOST}:/tmp/

# On VPS
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
RESTORE_PATH="/home/deploy/sites/folkup-landing/releases/baseline_${TIMESTAMP}"
mkdir -p ${RESTORE_PATH}
tar -xzf /tmp/dist-pre-phase2-baseline.tar.gz -C ${RESTORE_PATH}

ln -sfn ${RESTORE_PATH} /home/deploy/sites/folkup-landing/current
# Restart container / nginx reload per primary
```

## Post-rollback verification

```bash
# ETag должен сменяться от post-rollback target's etag
curl -sI https://folkup.app/ | grep -iE "etag|last-modified"

# Critical content checks (Phase 2 markers)
# If rolled back FROM Phase 2 → these markers should DISAPPEAR
curl -s https://folkup.app/ | grep -c "Семь сайтов\|Seven sites"

# DECL-008 illustrations must persist (pre-Phase-2 content):
curl -s https://folkup.app/declaration/ | grep -c "illustrations-gallery"
# Expect >0

# Health check
for url in https://folkup.app/ https://folkup.app/declaration/ https://folkup.app/declaration/guide/; do
  status=$(curl -o /dev/null -s -w "%{http_code}" "$url")
  echo "$status $url"
done
# Expect 200 для всех
```

## What NOT to do

- ❌ `wrangler pages rollback folkup-deck` — wrong target (CF Pages project orphan от production)
- ❌ `cd ../folkup-docs/deck && wrangler pages deploy` — это original phantom hint, fully invalid
- ❌ CF Pages dashboard "Rollback to deployment" — affects orphan, not production
- ❌ Push к origin/master expecting deploy — `.github/workflows/deploy.yml` was DISABLED 2026-05-30 (renamed `.PHANTOM_DISABLED`)

## Cleanup completed 2026-05-30

- `_meta/rollback-runbook-phase2.md` ← this file (rewritten)
- `.github/workflows/deploy.yml` → renamed `deploy.yml.PHANTOM_DISABLED`
- `scripts/deploy-to-vps.sh` ← authored (template based на agile-sapiens)
- `.claude/CLAUDE.md` — pending update
- `vault/contexts/folkup-landing.md` — pending update
- Alice memory files — pending update

## Pending Андрей confirmation

VPS specifics needed для canonical deploy:
1. **`VPS_HOST`** — IP или hostname
2. **`VPS_USER`** — deploy user (`deploy`?)
3. **SSH key path** — `deployment_key` location в репо? Или ~/.ssh/?
4. **Docker OR host nginx** — folkup-landing запускается в Docker container или served direct by nginx site-config?
5. **`docker-compose.yml`** path если containerized — `/home/deploy/folkup-landing/docker-compose.yml`?
6. **nginx site-config name** если host — `/etc/nginx/sites-available/folkup-landing`?

После confirmation — `scripts/deploy-to-vps.sh` готова к execute (build уже PASS, dist/ ready).
