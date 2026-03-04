# folkup-landing

Landing page for folkup.app — FolkUp ecosystem hub.

## Stack
- Vue 3.5 + Vite 6 + vite-ssg (Static Site Generation)
- Tailwind CSS v4 (@tailwindcss/vite, @theme tokens)
- TypeScript strict
- Cloudflare Pages deployment

## Architecture
- SSG: output = pre-rendered static HTML (NOT SPA)
- 6 sections: Hero, About, Projects, Roadmap, Support, Footer
- 3 languages: EN, RU, PT (lightweight composable, localStorage)
- Gertruda hero illustrations: 17 styles, random on mount (WebP, 26-197KB each)

## Deploy
- Build: `npm run build` → `dist/`
- Deploy: `npx wrangler pages deploy dist/ --project-name=folkup-deck`
- Worker: `_worker.js` (security headers, CSP, HSTS)
- Rollback: `cd ../folkup-docs/deck && npx wrangler pages deploy . --project-name=folkup-deck`

## Performance Budget
- Lighthouse >= 95, LCP < 1.5s, bundle < 60KB gzip
- Current: app.js = 44.24KB gzip

## Compliance
- WCAG 2.1 AA (focus-visible, 44px touch targets, prefers-reduced-motion)
- GDPR: self-hosted fonts, cookie-free analytics, no IP logging
- Legal pages: /privacy, /terms, /cookies (static HTML)

## Remaining Work
- Phase 4: Storybook (4 stories)
- Phase 5: Tests (Vitest + axe-core)
- Phase 6: OG Image + favicon + sitemap + deploy
- Legal pages i18n (3 languages)
