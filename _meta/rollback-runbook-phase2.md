# Rollback Runbook — Phase 2 Redesign

**Created:** 2026-05-29 by Кочегар | **Baseline:** commit `3938cee` / tag `pre-phase2-baseline`
**Target:** Cloudflare Pages project `folkup-deck` (folkup.app)

## PRIMARY — Cloudflare Pages deployment rollback (RTO ~2 min)

Fastest path. CF Pages keeps deployment history; "rollback" promotes a prior deployment.

```bash
# 1. List recent deployments, find the last known-good ID (pre-Phase-2)
npx wrangler pages deployment list --project-name=folkup-deck

# 2. Promote that deployment (via Dashboard OR API)
#    Dashboard: Cloudflare → Pages → folkup-deck → Deployments → [...] → "Rollback to this deployment"
#    CLI alternative (if wrangler version supports it):
npx wrangler pages deployment tail --project-name=folkup-deck   # verify after rollback
```

**Why primary:** zero rebuild, atomic switch, instant cache invalidation by CF.
**Caveat:** assumes pre-Phase-2 deployment still in CF history (CF retains ~unlimited but verify before Phase 2 starts).

## SECONDARY — Re-deploy snapshot tarball (RTO ~5 min)

Use if CF deployment history is unavailable or corrupted.

```bash
cd C:\JOHNDOE_CLAUDE\folkup-landing
rm -rf dist-rollback
mkdir dist-rollback
tar -xzf _meta/dist-pre-phase2-baseline.tar.gz -C dist-rollback --strip-components=1
npx wrangler pages deploy dist-rollback --project-name=folkup-deck --branch=main
```

**Snapshot:** `_meta/dist-pre-phase2-baseline.tar.gz` (9.6 MB, frozen 2026-05-29).

## TERTIARY — Rebuild from git tag (RTO ~15 min)

Use only if both above fail (e.g. snapshot corrupted).

```bash
cd C:\JOHNDOE_CLAUDE\folkup-landing
git stash                          # preserve in-flight Phase 2 work
git checkout pre-phase2-baseline
npm ci                             # clean install matching package-lock
npm run build
npx wrangler pages deploy dist/ --project-name=folkup-deck --branch=main
git checkout master                # return to Phase 2 branch when ready
git stash pop
```

## DO NOT USE — `folkup-docs/deck/`

CLAUDE.md mentions `cd ../folkup-docs/deck && wrangler pages deploy` — **this directory is STALE**
(index.html ~40 days older than current dist/, missing DECL-008). Update CLAUDE.md after Phase 2.

## Post-rollback verification

```bash
curl -sI https://folkup.app/ | grep -i "cf-ray\|last-modified"
curl -s https://folkup.app/declaration/ | grep -c "illustrations-gallery"   # DECL-008 marker, expect >0
```
