/**
 * Sections-as-data schema for FolkUp landing.
 *
 * LAND-004 (B1) — additive only. Existing components still consume
 * `useI18n().t(key)` from `src/locales/*.json`. Consumer migration to this
 * Page manifest happens in LAND-007 (B2).
 *
 * Notes for Враг stress-testing:
 *  - `LocalizedString` is Partial so DE can be absent during Phase 2
 *    (resolveLocalized handles fallback chain at render time).
 *  - Discriminated union on `type` literal — narrow exhaustiveness in
 *    consumers via `never`-default in switch.
 *  - `schemaType: 'none'` for sections that do not map to canonical
 *    Schema.org types (Hero/Stats/Roadmap per Враг #2).
 *  - Brand mark `HeroSection.title` is plain string (untranslated) —
 *    intentional, not LocalizedString.
 */

// ---------------------------------------------------------------------------
// Languages & localisation primitives
// ---------------------------------------------------------------------------

/**
 * Supported language codes. DE is present for future-proofing (Враг #4) but
 * actual DE content is not required for Phase 2 — pages may set
 * `availableLangs` to a subset and `resolveLocalized` will fall back.
 */
export type LangCode = 'en' | 'ru' | 'pt' | 'de'

export const ALL_LANG_CODES: readonly LangCode[] = ['en', 'ru', 'pt', 'de'] as const

/**
 * A localised string keyed by language. Partial because not every language
 * is guaranteed to exist for every field during the migration window.
 *
 * Render-time consumers MUST go through `resolveLocalized()` to apply the
 * fallback chain rather than indexing directly.
 */
export type LocalizedString = Partial<Record<LangCode, string>>

/**
 * Same shape as LocalizedString but for array fields (e.g. supportFormulas).
 */
export type LocalizedStringArray = Partial<Record<LangCode, string[]>>

// ---------------------------------------------------------------------------
// Section primitives
// ---------------------------------------------------------------------------

/**
 * Schema.org types we actually use. Not every section maps to one — those
 * that don't set `schemaType: 'none'` explicitly so the absence is intentional
 * rather than forgotten.
 */
export type SchemaOrgType =
  | 'none'
  | 'WebPage'
  | 'WebSite'
  | 'Organization'
  | 'CollectionPage'
  | 'ItemList'
  | 'Article'
  | 'Book'
  | 'FAQPage'

export interface SectionBase {
  /** Stable DOM-id-safe identifier, unique within a page (used for anchors and keying). */
  id: string
  /** Discriminator for the union. */
  type: string
  /**
   * Schema.org @type the section maps to, or 'none' if it has no canonical
   * mapping (Hero/Stats/Roadmap per Враг #2).
   */
  schemaType?: SchemaOrgType
}

// ---------------------------------------------------------------------------
// Section-specific helpers
// ---------------------------------------------------------------------------

export interface Principle {
  id: string
  title: LocalizedString
  text: LocalizedString
}

export interface ProjectCard {
  /** Stable key matching legacy locale keys (padel/setubal/cogumelos/tarot). */
  key: string
  name: LocalizedString
  /** "243 articles" — already localised string. */
  count: LocalizedString
  description: LocalizedString
  /** "EN · RU · PT" — string list rendered as-is. */
  langs: LocalizedString
  /** Category label, e.g. "Sport"/"City"/"Nature"/"Culture". */
  category: LocalizedString
  /** Public URL of the project. */
  url: string
  /** Path to icon under /public. */
  icon: string
  /** CSS custom property accent for the card. */
  accent: string
}

export interface Feature {
  id: string
  title: LocalizedString
  text: LocalizedString
}

export interface TeamMember {
  /** Stable key matching legacy locale keys (alice/gonzo/cooper/lantern/lev). */
  key: string
  name: LocalizedString
  role: LocalizedString
  oneliner: LocalizedString
}

export interface StatItem {
  id: string
  /** Already a string ("7", "1,500+"), kept as LocalizedString because RU/PT
   * use different thousand separators ("1 500+" vs "1.500+"). */
  value: LocalizedString
  label: LocalizedString
}

export interface RoadmapPhase {
  /** done | now | next | future */
  id: string
  title: LocalizedString
  text: LocalizedString
}

export interface FooterLink {
  /** privacy | terms | cookies */
  id: string
  label: LocalizedString
  /** Route path or absolute URL. */
  href: string
}

// ---------------------------------------------------------------------------
// Section discriminated union
// ---------------------------------------------------------------------------

export interface HeroSection extends SectionBase {
  type: 'hero'
  schemaType: 'none'
  /** Brand mark — intentionally not localised. */
  title: string
  subtitle: LocalizedString
  tagline: LocalizedString
  ctaPrimary: LocalizedString
  ctaSecondary: LocalizedString
}

export interface MissionSection extends SectionBase {
  type: 'mission'
  label: LocalizedString
  title: LocalizedString
  text: LocalizedString
  principles: Principle[]
}

export interface ProjectsSection extends SectionBase {
  type: 'projects'
  schemaType: 'ItemList'
  label: LocalizedString
  title: LocalizedString
  items: ProjectCard[]
}

export interface FrameworkSection extends SectionBase {
  type: 'framework'
  label: LocalizedString
  title: LocalizedString
  features: Feature[]
}

export interface TeamSection extends SectionBase {
  type: 'team'
  label: LocalizedString
  title: LocalizedString
  subtitle: LocalizedString
  members: TeamMember[]
}

export interface StatsSection extends SectionBase {
  type: 'stats'
  schemaType: 'none'
  label: LocalizedString
  title: LocalizedString
  items: StatItem[]
}

export interface RoadmapSection extends SectionBase {
  type: 'roadmap'
  schemaType: 'none'
  label: LocalizedString
  title: LocalizedString
  phases: RoadmapPhase[]
}

export interface SupportSection extends SectionBase {
  type: 'support'
  label: LocalizedString
  title: LocalizedString
  text: LocalizedString
  how: LocalizedString
  stats: LocalizedString
  formulas: LocalizedStringArray
  cta: LocalizedString
  /** Optional dedication line (currently rendered in footer). */
  dedication?: LocalizedString
}

export interface FooterSection extends SectionBase {
  type: 'footer'
  schemaType: 'none'
  endorsement: LocalizedString
  links: FooterLink[]
}

export type Section =
  | HeroSection
  | MissionSection
  | ProjectsSection
  | FrameworkSection
  | TeamSection
  | StatsSection
  | RoadmapSection
  | SupportSection
  | FooterSection

// ---------------------------------------------------------------------------
// Page envelope
// ---------------------------------------------------------------------------

export interface PageMeta {
  title: LocalizedString
  description: LocalizedString
  og?: {
    image?: string
  }
  canonical?: string
  ogType?: 'website' | 'article' | 'book'
  /** ISO date string for Schema.org dateModified. */
  dateModified?: string
}

export interface Page {
  /** Stable internal identifier (home, method, projects, services, code, team). */
  id: string
  /** Vue-router path the page is mounted at ('/', '/method', ...). */
  path: string
  /** Languages that have been authored for this page. Render-layer should
   *  treat anything outside this list as a candidate for fallback. */
  availableLangs: LangCode[]
  meta: PageMeta
  sections: Section[]
}

// ---------------------------------------------------------------------------
// Resolver utility
// ---------------------------------------------------------------------------

/**
 * Resolve a localised value with a documented fallback chain.
 *
 *  default chain: requested lang → 'en' → first available key
 *
 * Returns `undefined` only if the map is empty (caller decides whether to
 * surface a placeholder, throw, or silently render nothing).
 *
 * @example
 *   resolveLocalized({ en: 'Hello', ru: 'Привет' }, 'de') // → 'Hello'
 *   resolveLocalized({ pt: 'Olá' }, 'de')                  // → 'Olá'
 *   resolveLocalized({}, 'en')                              // → undefined
 */
export function resolveLocalized<T>(
  localized: Partial<Record<LangCode, T>> | undefined,
  lang: LangCode,
  fallbackChain: LangCode[] = [lang, 'en'],
): T | undefined {
  if (!localized) return undefined

  // Try the explicit chain first, deduping while preserving order.
  const seen = new Set<LangCode>()
  for (const code of fallbackChain) {
    if (seen.has(code)) continue
    seen.add(code)
    const v = localized[code]
    if (v !== undefined) return v
  }

  // Final fallback: first non-undefined value in declaration order.
  for (const code of ALL_LANG_CODES) {
    if (seen.has(code)) continue
    const v = localized[code]
    if (v !== undefined) return v
  }

  return undefined
}
