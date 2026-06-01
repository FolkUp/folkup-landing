// precommit:allow-ai-mentions
/**
 * Schema.org JSON-LD generator for folkup.app.
 *
 * LAND-008 (B4) — provides per-page Schema.org graph for AI-era visibility
 * (Knowledge Graph, ChatGPT/Perplexity/Claude search, Bing IndexNow).
 *
 * Strategy:
 *  - Organization + WebSite emitted on every page (constant identity).
 *  - BreadcrumbList emitted for non-home pages.
 *  - Per-section mappers return null by default; types that map to canonical
 *    Schema.org (`ProjectsSection` → ItemList, `TeamSection` → Person list)
 *    return concrete schemas; types marked `schemaType: 'none'`
 *    (Hero/Stats/Roadmap) intentionally emit nothing.
 *
 * Anti-bloat: each schema object is <200 bytes minified average; the homepage
 * graph stays under 2 KB JSON, well within the bundle budget headroom.
 */

import type { Page, Section, LangCode } from '@/content/types'
import { resolveLocalized } from '@/content/types'

const HOST = 'https://folkup.app'

// ---------------------------------------------------------------------------
// Constant schemas — same across all pages, hoisted to module scope
// ---------------------------------------------------------------------------

/**
 * Organization — primary entity for Knowledge Graph attribution.
 * `sameAs` will be populated once the public socials are confirmed; left as
 * an empty array (rather than omitted) to make the shape obvious.
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FolkUp',
  url: HOST,
  logo: `${HOST}/icon.png`,
  sameAs: [] as string[],
}

/**
 * WebSite — declares the publication and its supported locales.
 * `inLanguage` matches the prerendered language set (EN/RU/PT).
 */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'FolkUp',
  url: HOST,
  inLanguage: ['en', 'ru', 'pt'],
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * BreadcrumbList for non-home pages. Items are language-resolved at call site
 * so this helper stays locale-agnostic.
 */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Per-section schema mapper. Returns null for sections whose `schemaType` is
 * `'none'` OR for which a concrete mapping isn't implemented yet (Phase 2
 * scope per Фонарщик: hero/stats/roadmap intentionally omitted).
 */
export function sectionSchema(section: Section, lang: LangCode): object | null {
  if (section.schemaType === 'none') return null

  switch (section.type) {
    case 'projects': {
      // ItemList of CreativeWork/WebSite per project — each project has its
      // own canonical URL, so we emit an ItemListElement -> WebSite chain.
      return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: section.items.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'WebSite',
            name: resolveLocalized(p.name, lang) ?? p.key,
            url: p.url,
            description: resolveLocalized(p.description, lang) ?? '',
          },
        })),
      }
    }

    case 'trilogy': {
      // ItemList of Books — three-book series. Live entries get a `url`,
      // coming entries are listed without it so search engines still surface
      // the series as a coherent set rather than presenting AGIL in isolation.
      // `inLanguage` per resolved locale; Schema.org Book is the canonical
      // type for our long-form publications (Agile Sapiens is a real book,
      // not just a blog post).
      return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: section.items.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Book',
            name: resolveLocalized(b.title, lang) ?? b.key,
            description: resolveLocalized(b.pitch, lang) ?? '',
            inLanguage: lang,
            ...(b.url ? { url: b.url } : {}),
            bookFormat: 'https://schema.org/EBook',
          },
        })),
      }
    }

    case 'team': {
      // Each member as schema:Person under a containing ItemList — useful for
      // Knowledge Graph person-attribution against Organization.
      return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: section.members.map((m, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Person',
            name: resolveLocalized(m.name, lang) ?? m.key,
            jobTitle: resolveLocalized(m.role, lang) ?? '',
            description: resolveLocalized(m.oneliner, lang) ?? '',
          },
        })),
      }
    }

    default:
      // Hero, mission, framework, decl-hero, pro-lab, services, open-code,
      // footer, legal — either explicitly `schemaType: 'none'` (handled
      // above) or not yet mapped. WebPage schema for legal pages is emitted
      // via pageSchemas() wrapper below.
      return null
  }
}

/**
 * Combine all schemas for a given page in a given language. Returns an array
 * of plain objects ready to be JSON.stringified into <script type="application/ld+json">
 * blocks.
 */
export function pageSchemas(page: Page, lang: LangCode): object[] {
  const schemas: object[] = [organizationSchema, websiteSchema]

  // Non-home pages get a BreadcrumbList rooted at the language home.
  if (page.path !== '/') {
    const homeLabel = lang === 'ru' ? 'Главная' : lang === 'pt' ? 'Início' : 'Home'
    const pageLabel = resolveLocalized(page.meta.title, lang) ?? page.id
    schemas.push(
      breadcrumbSchema([
        { name: homeLabel, url: `${HOST}/` },
        { name: pageLabel, url: `${HOST}${page.path}` },
      ]),
    )
  }

  // Legal pages map to WebPage (Privacy/Terms/Cookies). The content layer
  // sets `schemaType: 'WebPage'` on the LegalPageSection — keep this in sync.
  for (const section of page.sections) {
    if (section.type === 'legal') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: resolveLocalized(section.title, lang) ?? page.id,
        url: `${HOST}${page.path}`,
        inLanguage: lang,
        ...(page.meta.dateModified ? { dateModified: page.meta.dateModified } : {}),
      })
    }
  }

  // Per-section schemas (projects → ItemList, team → Person list, etc.)
  for (const section of page.sections) {
    const s = sectionSchema(section, lang)
    if (s) schemas.push(s)
  }

  return schemas
}
