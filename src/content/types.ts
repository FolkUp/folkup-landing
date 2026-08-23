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

export interface MethodStep {
  /** Imperative verb id — search/verify/publish */
  id: string
  /** Localised verb, e.g. EN "Search" / RU "Ищем" / PT "Procurar" */
  verb: LocalizedString
  /** Localised qualifier clause, e.g. EN "we go look" / RU "идём смотреть" */
  qualifier: LocalizedString
}

export interface TrilogyBook {
  /** Stable key matching projects-registry codes (agil/cwv/cos). */
  key: string
  /** Localised title (some books keep the same Latin/Cyrillic title across langs). */
  title: LocalizedString
  /** 1-2 sentence pitch. */
  pitch: LocalizedString
  /** Lifecycle status — drives badge colour (sage for live, amber for coming). */
  status: 'live' | 'coming'
  /** Localised badge label, e.g. EN "Reading now" / RU "Уже читается". */
  badge: LocalizedString
  /** Public URL if status === 'live', undefined for 'coming'. */
  url?: string
}

export interface ProjectCard {
  /** Stable key matching legacy locale keys (padel/setubal/cogumelos/tarot). */
  key: string
  name: LocalizedString
  /** "a growing encyclopedia" — already localised living-word string per Iskra §3
      (numbers removed cont+38 to avoid drift as encyclopedias grow). */
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
  /**
   * Optional hero-plate under /public/images/encyclopedia-heroes/.
   * When present, card renders in richer top-image variant (icon hidden).
   * Absence = legacy icon-left layout preserved (books section keeps 72px cover icons).
   * Added cont+8 S1IMG (A6 Frida hero-plates integration).
   */
  hero?: string
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

/**
 * News feed item — 1-line update about recent work.
 * Manual authoring (no CMS) — added cont+2 S8SCOOP per Andrey verdict item #10.
 */
export interface NewsItem {
  /** Stable identifier for keying in Vue v-for. */
  id: string
  /** 1-line update text — e.g. «Cogumelos: расширили безопасность». */
  text: LocalizedString
  /** Optional URL to the source (external site, chapter, article). */
  link?: string
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
  /**
   * Short italic sub-line rendered between subtitle and tagline.
   * Added cont+2 S8SCOOP (Hero F variant «short philosophy»): 3 punchy adjectives
   * («Open. Verified. Multilingual.») anchor factual value under philosophy subtitle.
   * Optional — legacy Hero без subline still type-checks (Vue conditional render).
   */
  subline?: LocalizedString
  tagline: LocalizedString
  ctaPrimary: LocalizedString
  ctaSecondary: LocalizedString
}

export interface MissionSection extends SectionBase {
  type: 'mission'
  label: LocalizedString
  title: LocalizedString
  text: LocalizedString
  /**
   * Three-verb method block — "search → verify → publish".
   * Optional so legacy manifests without method still type-check; live
   * homePage always includes it post-Phase-4-P1.
   */
  method?: {
    /** Subsection title, e.g. EN "How it gets made". */
    title: LocalizedString
    steps: MethodStep[]
  }
  principles: Principle[]
}

export interface TrilogyPlate {
  /** Path to chapter illustration under /public/images/agil-chapters/. */
  src: string
  /** Localised caption ("Act I" / "Глава 1" / etc) — purely informational, alt text. */
  caption: LocalizedString
}

/**
 * Frida-fornit trilogy visual identity glyph.
 * Distinct from TrilogyPlate (chapter illustrations) and TrilogyBook (books data).
 * Represents one of three FolkUp methodology archetypes: AGIL / CWV / COS.
 * Added cont+8 S1IMG (A5 Batch C Frida glyphs integration).
 */
export interface TrilogyVisualItem {
  /** Stable key matching projects-registry codes (agil/cwv/cos). */
  key: string
  /** Path to glyph webp under /public/images/trilogy/. */
  glyph: string
  /** Localised short label displayed under glyph (e.g. "By Our Own Means" / "Своими силами"). */
  label: LocalizedString
  /** Localised methodology descriptor (2-4 words) — brand identity subtitle. */
  caption: LocalizedString
}

/**
 * Trilogy visual identity block — 3 Frida glyphs (AGIL / CWV / COS) as brand marks.
 * Non-clickable, no CTA (per Андрей cont +36 mandate 2026-06-22 «книжные ссылки убираем»).
 * Purely visual identity anchor — books текст remains in `type: 'projects'` id='books' section.
 * Added cont+8 S1IMG (Q5 wire-strategy a3 — new dedicated section per Andrey verdict).
 */
export interface TrilogyVisualSection extends SectionBase {
  type: 'trilogy-visual'
  schemaType: 'none'
  label: LocalizedString
  title: LocalizedString
  items: TrilogyVisualItem[]
}

export interface TrilogySection extends SectionBase {
  type: 'trilogy'
  schemaType: 'ItemList'
  label: LocalizedString
  title: LocalizedString
  items: TrilogyBook[]
  /**
   * Optional decorative plate carousel — chapter illustrations from AGIL.
   * Added 2026-06-10 per Андрей mandate: replace tarot tile с book plates,
   * показывает Гутенберг book program live (books.folkup.life/kn1, canonical
   * post-SAPIENS-SUNSET-1; sapiens.folkup.life → 301 redirect).
   */
  plates?: TrilogyPlate[]
}

export interface DeclHeroSection extends SectionBase {
  type: 'decl-hero'
  /**
   * P1 ships 'none' — DECL hero teases the external Declaration Guide; the
   * authoritative WebPage/Article schema lives on declaration.folkup.app
   * itself. P2 can revisit and emit a minimal MentionedBy link if SEO
   * measurement shows value.
   */
  schemaType: 'none'
  label: LocalizedString
  title: LocalizedString
  body: LocalizedString
  cta: {
    label: LocalizedString
    href: string
  }
}

export interface ProLabSection extends SectionBase {
  type: 'pro-lab'
  /** Same rationale as DeclHeroSection — Lucerna emits its own schema. */
  schemaType: 'none'
  label: LocalizedString
  title: LocalizedString
  body: LocalizedString
  /** Highlighted project (Lucerna — first Pro Lab project). */
  highlight: {
    name: string
    pitch: LocalizedString
    url: string
  }
  cta: {
    label: LocalizedString
    href: string
  }
}

/**
 * Anchor block — Services / Open Code.
 * Intentionally no link/cta: per Phase-4-P1 Андрей decision, these are
 * text-anchor blocks announcing capability without driving traffic to
 * pages that don't yet exist (/services, /code Phase-3 deferred).
 */
export interface AnchorSection extends SectionBase {
  type: 'services' | 'open-code'
  schemaType: 'none'
  label: LocalizedString
  title: LocalizedString
  body: LocalizedString
}

export interface ProjectsSection extends SectionBase {
  type: 'projects'
  schemaType: 'ItemList'
  label: LocalizedString
  title: LocalizedString
  subtitle?: LocalizedString
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

/**
 * «Что нового» — recent updates list.
 * Non-CMS static section, 3-5 items typical, manual authoring updates only.
 * Andrey no-numbers rule applies к contents (не «5 новых статей» но «новые статьи»).
 * Added cont+2 S8SCOOP per Andrey verdict item #10 landing refresh 2026-08-23.
 */
export interface NewsSection extends SectionBase {
  type: 'news'
  schemaType: 'none'
  label: LocalizedString
  title: LocalizedString
  items: NewsItem[]
}

export interface FooterSection extends SectionBase {
  type: 'footer'
  schemaType: 'none'
  endorsement: LocalizedString
  links: FooterLink[]
}

/**
 * Legal-page section — privacy / terms / cookies.
 *
 * `content` is raw localised HTML (rendered via `v-html` in the legal page
 * components). Content is internally authored — no untrusted input is ever
 * routed through this field, so the v-html injection is safe.
 *
 * `schemaType: 'WebPage'` — legal pages map to Schema.org WebPage rather than
 * Article (no author/dateModified-driven publishing model, just static policy
 * content). Set per-page in the manifest.
 */
export interface LegalPageSection extends SectionBase {
  type: 'legal'
  title: LocalizedString
  /** e.g. "Last updated: March 2026" — already a full localised phrase. */
  lastUpdated: LocalizedString
  /** Raw localised HTML (h2/p/ul/code allowed). Internally authored only. */
  content: LocalizedString
}

export type Section =
  | HeroSection
  | MissionSection
  | TrilogySection
  | TrilogyVisualSection
  | DeclHeroSection
  | ProjectsSection
  | ProLabSection
  | AnchorSection
  | FrameworkSection
  | NewsSection
  | TeamSection
  | FooterSection
  | LegalPageSection

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
