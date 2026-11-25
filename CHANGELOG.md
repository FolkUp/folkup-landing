# Changelog

All notable changes to `folkup-landing` are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Prior releases (`1.4.1` and earlier) are not retroactively documented here — the git log at
`https://github.com/FolkUp/folkup-landing/commits/master` is the authoritative source for
historical changes. This file begins with `1.4.2` and will be maintained forward.

## [Unreleased]

## [1.4.2] — 2026-11-25

### Fixed

- `services.ts` RU (line 265): `aquarium` + `ретротехника` promoted from «В подготовке» to «Открытые» — reality drift closure, both encyclopedias were already live. Primary-source verified HTTP 200. PR #80, commit `179da67`.
- `services.ts` EN/PT/DE: identical structural mirror of RU L-11 for 4-locale consistency. PR #81, commit `c8288c4`.
- `/about/ai-use` EN/PT/DE: content refresh to match 2026-09-07 RU canonical version — EU AI Act Art. 50(4) voluntary disclosure framing with 6 sections (editorial responsibility / the human / AI assistants / verifiability / why voluntarily / license). Prior EN/PT/DE versions were stale «May 2026» drafts with outdated «AI fornits» framing. PR #82, commit `7c5c0c6`.
- `public/_redirects`: added 301 permanent redirects for no-locale main routes to `/en/` equivalents — `/services`, `/projects`, `/team`, `/about/ai-use` (previously returned 404 or inconsistent behaviour). PR #82.

### Changed

- `package-lock.json` root and `packages[""]` version strings realigned from `1.2.0` to match `package.json` — pre-existing 2-version drift (predates `1.4.0`) closed.

### Notes

- GitHub Actions org-wide billing lock active since approximately 2026-11-16. All PR merges contributing to this release were deployed via manual `wrangler pages deploy dist --project-name=folkup-app-backup` with inline SOPS-decrypted credentials (scrubbed after each use).
- No breaking changes. No API, routing, or component contract changes beyond new `/about/ai-use` canonical URLs (which are additive / drift closures, not regressions).

[Unreleased]: https://github.com/FolkUp/folkup-landing/compare/master...HEAD
[1.4.2]: https://github.com/FolkUp/folkup-landing/compare/179da67...master
