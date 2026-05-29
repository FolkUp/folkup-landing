<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { useI18n } from '@/composables/useI18n'
// IMPORTANT: only `homePage` is imported eagerly here. The PAGES_BY_PATH
// barrel from `_index.ts` would pull every page manifest (including the
// large legal pages and Phase-3 skeletons) into the app chunk and push the
// bundle past the 60 KB gzip hard cap. Legal pages already self-import
// their own manifests from `@/content/pages/{privacy,terms,cookies}` via
// vite-ssg's per-route code split — we synthesize the per-route schema/
// canonical here without re-importing them.
import { homePage } from '@/content/pages'
import { pageSchemas } from '@/lib/schema'

const route = useRoute()
const { locale } = useI18n()

const HOST = 'https://folkup.app'
const LANGS = ['en', 'ru', 'pt'] as const

/** Stable URL-safe page identifier derived from the route path. */
type RouteKind = 'home' | 'privacy' | 'terms' | 'cookies' | 'unknown'

/**
 * Strip the `/en|ru|pt` prefix (if any) from `route.path` and classify the
 * remainder into one of the four known page kinds. Anything else (404,
 * catch-all, Phase-3 skeletons not yet routed) is `unknown` — head injection
 * still emits Organization + WebSite + canonical + hreflang for those.
 */
const routeKind = computed<RouteKind>(() => {
  const stripped = route.path.replace(/^\/(en|ru|pt)(?=\/|$)/, '') || '/'
  if (stripped === '/') return 'home'
  if (stripped === '/privacy') return 'privacy'
  if (stripped === '/terms') return 'terms'
  if (stripped === '/cookies') return 'cookies'
  return 'unknown'
})

/** Base path (lang-stripped) — same shape PAGES_BY_PATH would use. */
const basePath = computed(() =>
  route.path.replace(/^\/(en|ru|pt)(?=\/|$)/, '') || '/',
)

/**
 * Per-language URL builder. `/` is special-cased: EN home is unprefixed
 * (`https://folkup.app/`), RU/PT homes are `/ru` and `/pt`.
 */
function buildUrl(lang: (typeof LANGS)[number], base: string): string {
  if (base === '/') {
    return lang === 'en' ? `${HOST}/` : `${HOST}/${lang}`
  }
  return `${HOST}/${lang}${base}`
}

/** Canonical URL = the current rendered route, fully qualified. */
const canonical = computed(() => {
  if (route.path === '/' || route.path === '') return `${HOST}/`
  return `${HOST}${route.path}`
})

/**
 * hreflang link set: one alternate per supported language + `x-default`
 * pointing at the EN variant (per Q6 — EN is the default audience).
 */
const hreflangLinks = computed(() => {
  const base = basePath.value
  const links: { rel: 'alternate'; hreflang: string; href: string }[] = LANGS.map(
    (lang) => ({
      rel: 'alternate',
      hreflang: lang,
      href: buildUrl(lang, base),
    }),
  )
  links.push({
    rel: 'alternate',
    hreflang: 'x-default',
    href: buildUrl('en', base),
  })
  return links
})

/**
 * Schema.org JSON-LD blocks. Strategy:
 *  - Home → `pageSchemas(homePage, …)` (Organization + WebSite + ItemList
 *    projects + Person list team).
 *  - Legal (privacy/terms/cookies) → Organization + WebSite + Breadcrumb +
 *    WebPage, synthesised inline from the route kind so we don't pull the
 *    legal page manifests into App.vue's chunk.
 *  - Unknown (404, catch-all) → Organization + WebSite only.
 *
 * Keeping all three branches in App.vue (not per-page useHead calls) means
 * Organization + WebSite are emitted exactly once per page with no chunk
 * ordering races.
 */
const schemas = computed<object[]>(() => {
  const kind = routeKind.value
  if (kind === 'home') return pageSchemas(homePage, locale.value)

  // Constant-ish blocks for every other route — kept inline to avoid pulling
  // the legal page manifests into this chunk.
  const base: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'FolkUp',
      url: HOST,
      logo: `${HOST}/icon.png`,
      sameAs: [] as string[],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'FolkUp',
      url: HOST,
      inLanguage: ['en', 'ru', 'pt'],
    },
  ]

  if (kind === 'unknown') return base

  // Breadcrumb + WebPage for legal pages. Labels are intentionally kept in
  // EN (Privacy/Terms/Cookies are de-facto international words) rather than
  // re-importing localisation data; localised titles still appear in
  // <title>/<h1> rendered by the page itself.
  const labelEn: Record<Exclude<RouteKind, 'home' | 'unknown'>, string> = {
    privacy: 'Privacy',
    terms: 'Terms',
    cookies: 'Cookies',
  }
  const homeLabel =
    locale.value === 'ru' ? 'Главная' : locale.value === 'pt' ? 'Início' : 'Home'

  base.push(
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: homeLabel, item: `${HOST}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: labelEn[kind],
          item: `${HOST}${route.path}`,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: labelEn[kind],
      url: `${HOST}${route.path}`,
      inLanguage: locale.value,
    },
  )
  return base
})

// Single useHead call — reactive getters keep <link>/<script> blocks in sync
// with route changes during client-side navigation post-hydration.
useHead({
  htmlAttrs: () => ({ lang: locale.value }),
  link: () => [
    { rel: 'canonical', href: canonical.value },
    ...hreflangLinks.value,
  ],
  script: () =>
    schemas.value.map((s, i) => ({
      type: 'application/ld+json',
      key: `schema-${i}`,
      innerHTML: JSON.stringify(s),
    })),
})
</script>

<template>
  <RouterView />
</template>
