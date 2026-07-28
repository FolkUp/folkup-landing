# folkup-landing

Hub landing page for the FolkUp ecosystem — [folkup.app](https://folkup.app).

> **Long-form writing. One person, a team of AI fornits.**

This is the front door for FolkUp: a small workshop that publishes long-form
texts, open encyclopedias, and methodology notes. Run by Команданте FolkUp
([editorial@folkup.app](mailto:editorial@folkup.app)) together with a named
team of AI fornits. Every publication is signed: who wrote, who verified, who edited.

## Stack

- **Vue 3.5** + **Vite 6** + **vite-ssg 0.24** — Static Site Generation
- **Tailwind CSS v4** (@tailwindcss/vite, `@theme` tokens) + scoped CSS
- **TypeScript strict** with `vue-tsc --noEmit` as the lint gate
- **Playwright** for responsive end-to-end (mobile / tablet / desktop)
- **Three languages** — English, Russian, European Portuguese (AO1990)
- **Self-hosted fonts** (Pacifico, Playfair Display, Cinzel, EB Garamond, Inter)
  — no Google Fonts requests, no third-party trackers

## Routes

22 prerendered static HTML routes:

- `/`, `/ru`, `/pt` — home (per-language)
- `/{en,ru,pt}/projects` — encyclopedia portfolio
- `/{en,ru,pt}/services` — seven directions for commissions (RU + EN + PT EU LIVE per commit `d1b36eb`; DE draft persist, awaits `LAND-DE-EPIC-001`)
- `/{en,ru,pt}/about/ai-use` — UCPD AI-use transparency disclosure
- `/{en,ru,pt}/privacy`, `/terms`, `/cookies` — legal pages (Lev compliance)
- `/404` — localized fallback

Brand canon: warm steampunk, lantern (фонарь), roots (корни), workshop
(мастерская). No emoji, no marketing slop, no fake urgency.

## Local development

```bash
npm install
npm run dev               # http://localhost:5173
npm run build             # build + sitemap regen + validate-build gate
npm run test              # Vitest unit tests
npm run test:e2e          # Playwright responsive (mobile/tablet/desktop)
npm run test:e2e:prod     # Playwright against https://folkup.app
npm run lint              # vue-tsc --noEmit
npm run indexnow:ping     # ping Bing + Yandex IndexNow on deploy
```

`npm run build` chains three things in order:
1. `vite-ssg build` — Vue SSG render to `dist/`
2. `node scripts/generate-sitemap.mjs` — sitemap.xml with hreflang
3. `node scripts/validate-build.mjs` — html lang, canonical, JSON-LD,
   bundle size gate (≤60 KB gzip), hreflang completeness

## Deploy

Production runs on **Cloudflare Pages** (post-INC-006 canonical, per
`~/.claude/rules/inc006-cf-deploy-active.md`). Push to `master` triggers
`.github/workflows/deploy-cf-backup.yml` — full build chain executes,
sitemap regenerates, validate-build gate runs, then `wrangler pages deploy`.

DNS canonical: see
`vault/memory/folkup-domains-registry-canonical.md` for the authoritative
domain × stack × status table.

## Compliance and standards

- **WCAG 2.1 AA** — focus-visible, 44px touch targets, prefers-reduced-motion
- **GDPR** — self-hosted fonts, no analytics by default, no IP logging
- **Schema.org JSON-LD** — Organization + WebSite + per-page WebPage type
- **Hreflang** — en / ru / pt / x-default (root = EN)
- **EU AI Act Art. 50** — `/about/ai-use` transparency disclosure
  ([details](https://folkup.app/en/about/ai-use))

## Repository layout

```
src/
  components/        Vue components (SiteHeader, SiteFooter, sections)
  content/           Sections-as-data: typed page schemas (en/ru/pt)
  pages/             Vue route components
  composables/       useHead, useGertruda triptych
  lib/               schema.ts (JSON-LD generator)
  locales/           Legacy i18n JSON (migration to content/ ongoing)
scripts/             generate-sitemap.mjs, validate-build.mjs, indexnow-ping.mjs
public/              Static assets — robots.txt, llms.txt, IndexNow key,
                     fonts/, images/, sitemap.xml
tests/               Vitest unit + Playwright responsive
_meta/               Historical baselines, archived configs, courier protocol
```

## Contact

- Site: [folkup.app](https://folkup.app)
- Author: Команданте FolkUp — [editorial@folkup.app](mailto:editorial@folkup.app)
- Repo issues: <https://github.com/FolkUp/folkup-landing/issues>

## License

See [LICENSE](./LICENSE).
