# FolkUp Landing · Entry point экосистемы FolkUp

[![License MIT (code)](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![License CC BY-SA 4.0 (content)](https://img.shields.io/badge/content-CC%20BY--SA%204.0-green.svg)](LICENSE-CONTENT)
[![Site](https://img.shields.io/badge/live-folkup.app-blue.svg)](https://folkup.app)

**Главная страница экосистемы FolkUp — библиотека книг, энциклопедии Португалии, longform-исследования, The Unenclosed Knowledge Declaration. Vue 3 SSG на Cloudflare Pages, три языка (EN / RU / PT EU).**

## About / Manifesto

FolkUp — publishing ecosystem for unenclosed knowledge / экосистема неогороженного знания, построенная на трёх принципах:

1. **CC BY-SA 4.0 везде** — знание не собственность, знание можно распространять с обязательством разделить обратно
2. **Русскоязычный primary** — контент рождается на русском, переводы приходят потом
3. **Не корпоративный publisher** — Команданте FolkUp is a literary pseudonym; legal identification and AI-use disclosure: [/about/ai-use](https://folkup.app/about/ai-use)

Ecosystem includes:

- **Библиотека книг** ([books.folkup.life](https://books.folkup.life)) — семикнижная нон-фикшн серия. kn.1 «Agile Sapiens» LIVE; kn.2–5 publishing pipeline; kn.6–7 in preparation. (Series has no public name per Iskra S238/S239 canon — «серия отдельного публичного имени НЕ имеет».)
- **Городские и предметные энциклопедии** — открыты: Setúbal · Padel · Cogumelos; готовятся: Aquarium · Dial-up; Lucerna — Pro Lab (не энциклопедия).
- **Underground Academia** ([underground.folkup.life](https://underground.folkup.life)) — независимые longform-исследования, essays, циклы «за переплётом»
- **The Unenclosed Knowledge Declaration** ([declaration.folkup.app](https://declaration.folkup.app)) — guide для студентов + civic autonomy toolkit

## Stack

- **Vue 3.5** + **Vite 6** + **vite-ssg 0.24** — Static Site Generation
- **Tailwind CSS v4** (@tailwindcss/vite, `@theme` tokens) + scoped CSS
- **TypeScript strict** с `vue-tsc --noEmit` как lint gate
- **Playwright** — responsive end-to-end (mobile / tablet / desktop)
- **Three languages** — English, Russian, European Portuguese (AO1990)
- **Self-hosted fonts** (Pacifico, Playfair Display, Cinzel, EB Garamond, Inter) — никаких Google Fonts запросов, никаких third-party трекеров

## Routes

22 prerendered static HTML routes:

- `/`, `/ru`, `/pt` — home (per-language)
- `/{en,ru,pt}/projects` — encyclopedia portfolio
- `/{en,ru,pt}/services` — seven directions for commissions
- `/{en,ru,pt}/about/ai-use` — AI-use transparency disclosure
- `/{en,ru,pt}/privacy`, `/terms`, `/cookies` — legal pages
- `/404` — localized fallback

Brand canon: warm steampunk, lantern (фонарь), roots (корни), workshop (мастерская). No emoji, no marketing slop, no fake urgency.

## Development

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
3. `node scripts/validate-build.mjs` — html lang, canonical, JSON-LD, bundle size gate (≤60 KB gzip), hreflang completeness

## Deploy

Production runs on **Cloudflare Pages**. Push to `master` triggers full build chain, sitemap regenerates, validate-build gate runs, then `wrangler pages deploy`.

## Compliance and standards

- **WCAG 2.1 AA** — focus-visible, 44px touch targets, prefers-reduced-motion
- **GDPR** — self-hosted fonts, no analytics by default, no IP logging
- **Schema.org JSON-LD** — Organization + WebSite + per-page WebPage type
- **Hreflang** — en / ru / pt / x-default (root = EN)
- **EU AI Act Art. 50** — [/about/ai-use](https://folkup.app/en/about/ai-use) transparency disclosure

## Repository layout

```
src/
  components/        Vue components (SiteHeader, SiteFooter, sections)
  content/           Sections-as-data: typed page schemas (en/ru/pt)
  pages/             Vue route components
  composables/       useHead composables
  lib/               schema.ts (JSON-LD generator)
  locales/           Legacy i18n JSON (migration к content/ ongoing)
scripts/             generate-sitemap.mjs, validate-build.mjs, indexnow-ping.mjs
public/              Static assets — robots.txt, llms.txt, IndexNow key,
                     fonts/, images/, sitemap.xml
tests/               Vitest unit + Playwright responsive
```

## Related projects (FolkUp Ecosystem)

- [folkup-books-portal](https://github.com/FolkUp/folkup-books-portal) — books.folkup.life
- [agile-sapiens](https://github.com/FolkUp/agile-sapiens) — kn.1 monograph source
- [orga (underground.folkup.life)](https://github.com/FolkUp/orga) — longform research + essay platform

Full ecosystem map: [folkup.app](https://folkup.app).

## Licensing

Dual-licensed following the FolkUp ecosystem canon:

- **Code (Vue 3 components, composables, scripts, config, workflows)** — MIT.
  See [`LICENSE`](./LICENSE).
- **Content (home page section text, legal pages, essays under `src/content/`, translations, Gertruda illustrations)** —
  Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0).
  See [`LICENSE-CONTENT`](./LICENSE-CONTENT).

Attribution format for CC BY-SA content:

> «Section/Page Title» by Команданте FolkUp, licensed under CC BY-SA 4.0.
> Source: https://github.com/FolkUp/folkup-landing/blob/master/src/content/<path>
> Modifications: [describe if any].

Copyright infringement notices → [`DMCA.md`](./DMCA.md) (GitHub referral +
direct contact `info@folkup.app`, subject: DMCA).

## Contributing

Pull requests welcomed. Content edits and code contributions: DCO Signed-off-by required. See `CONTRIBUTING.md` when opening the repository.

## Contact

- Editorial / content: `info@folkup.app`
- DMCA / copyright: `info@folkup.app` (subject: DMCA) — see [`DMCA.md`](./DMCA.md)
- Publisher: Команданте FolkUp / FolkUp Ecosystem

---

**© 2026 Команданте FolkUp · Publisher: FolkUp Ecosystem · Content CC BY-SA 4.0 · Code MIT**
