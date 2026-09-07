#!/usr/bin/env bash
# Sync canonical series.yaml from folkup-books-portal repo to landing.
#
# Iskra T-315-11 (2026-09-07): series.yaml как источник правды для карточек
# и Publications блока лендинга. Canonical source = folkup-books-portal.
#
# Usage:
#   bash scripts/sync-series-from-portal.sh [portal-path]
# Default portal-path: /c/JOHNDOE_CLAUDE/folkup-books-portal
#
# PR-B MVP (S1ORCH cont+4): canonical snapshot landed. Actual books section
# refactor к read from data/series.yaml — отдельный PR (PR-B2 или integrated в PR-E).

set -euo pipefail

PORTAL="${1:-/c/JOHNDOE_CLAUDE/folkup-books-portal}"
SRC="$PORTAL/data/series.yaml"
DST="$(dirname "$0")/../data/series.yaml"

if [ ! -f "$SRC" ]; then
  echo "ERROR: portal series.yaml not found: $SRC" >&2
  exit 1
fi

cp "$SRC" "$DST"
echo "Synced $SRC → $DST ($(wc -l < "$DST") lines)"

# Post-sync verify: git diff если есть изменения
if command -v git >/dev/null 2>&1; then
  cd "$(dirname "$0")/.."
  if ! git diff --quiet data/series.yaml 2>/dev/null; then
    echo ""
    echo "Changes detected — review with:"
    echo "  git diff data/series.yaml"
    echo ""
    echo "Commit with:"
    echo "  git add data/series.yaml && git commit -m 'chore(data): sync series.yaml from portal'"
  else
    echo "No changes — landing already in sync с portal."
  fi
fi
