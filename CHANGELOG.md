# Changelog

All notable changes to `folkup-landing` are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Prior releases (`1.4.1` and earlier) are not retroactively documented here — the git log at
`https://github.com/FolkUp/folkup-landing/commits/master` is the authoritative source for
historical changes. This file begins with `1.4.2` and will be maintained forward.

## [Unreleased]

### Fixed

- Legal pages (`privacy.ts` + `terms.ts` + `cookies.ts` × EN/RU/PT = 9 `lastUpdated` strings): industry-standard reviewed/unchanged split wording per ICO/GDPR legal template pattern. «Last reviewed November 2026 — substantive policy/terms unchanged since March 2026» + native-register RU/PT. Per-file tune: `privacy`/`cookies` use «policy», `terms` uses «terms». PR #84 (S2ORCH cont+2 Q2), commit `63b104a`.
- Services + projects pages (`services.ts` + `projects.ts` × EN/RU/PT = 6 `lastUpdated` strings): simple refresh «Updated November 2026» / «Обновлено в ноябре 2026» / «Atualizado em novembro de 2026». PR #84.
- Inline analytics factual claims (`privacy.ts` + `cookies.ts` × EN/RU/PT = 6 strings): «As of March 2026» → «As of November 2026» — primary-source verified via `curl`, zero analytics scripts active on prod (claim factually TRUE at November 2026). PR #84.

### Added

- DE `lastUpdated` key for 5 schemas (`privacy.ts` + `terms.ts` + `cookies.ts` + `services.ts` + `projects.ts`): Translator-DE module native-register (Heine + Brecht + Tucholsky + Walser; DWDS/Duden/Linguee verified). Legal pattern «Letzte Überprüfung November 2026 — Inhalt der [Datenschutzrichtlinie / Nutzungsbedingungen / Cookie-Richtlinie] unverändert seit März 2026». Services/projects pattern «Aktualisiert im November 2026» (idiomatic adverbial per Duden). Closes EN-fallback gap on `/de/<path>` — GDPR-aware DE readers now see localized date on DE pages. PR #85 (S2ORCH cont+3 Q6), commit `331d0bd`.

### Notes

- Accumulates post-`1.4.2` patch-level fixes (semver 2.0.0 PATCH class — backward-compatible, no API/routing/contract changes). Aggregate release к `1.4.3` at session SEAL closure OR next natural release boundary (per Release Policy below).

## Release Policy (canonical from v1.4.2 forward)

- **Git tags canonical from `v1.4.2` onwards.** Prior releases (`1.4.0` 2026-06-30, `1.4.1` 2026-09-07) documented in CHANGELOG + git log history only.
- **Keep a Changelog 1.1.0 `[Unreleased]` accumulation pattern:** PR-level fixes land in `[Unreleased]` during session arcs; aggregate к `[X.Y.Z]` block upon release ceremony (annotated tag + GitHub Release) at session SEAL closure OR next natural release boundary.
- **Semver 2.0.0 classification:** MAJOR (breaking) / MINOR (additive feature) / PATCH (backward-compatible fix).
- **Release ceremony checklist:** `package.json` + `package-lock.json` version sync bump · CHANGELOG `[Unreleased]` → `[X.Y.Z]` move · annotated tag `git tag -a vX.Y.Z` · push tag · GitHub Release from CHANGELOG block · deploy verify.

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

[Unreleased]: https://github.com/FolkUp/folkup-landing/compare/v1.4.2...HEAD
[1.4.2]: https://github.com/FolkUp/folkup-landing/compare/179da67...v1.4.2
