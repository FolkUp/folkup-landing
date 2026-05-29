import { homePage } from './index'
import { methodPage } from './method'
import { projectsPage } from './projects'
import { servicesPage } from './services'
import { codePage } from './code'
import { teamPage } from './team'
import { privacyPage } from './privacy'
import { termsPage } from './terms'
import { cookiesPage } from './cookies'
import type { Page } from '../types'

export {
  homePage,
  methodPage,
  projectsPage,
  servicesPage,
  codePage,
  teamPage,
  privacyPage,
  termsPage,
  cookiesPage,
}

/**
 * All pages in canonical order. Source of truth for router registration and
 * sitemap generation (LAND-007 / LAND-005).
 */
export const ALL_PAGES: readonly Page[] = [
  homePage,
  methodPage,
  projectsPage,
  servicesPage,
  codePage,
  teamPage,
  privacyPage,
  termsPage,
  cookiesPage,
] as const

/**
 * Path-indexed lookup for fast resolution from a route. Built once at module
 * load — pages are static.
 */
export const PAGES_BY_PATH: Readonly<Record<string, Page>> = Object.freeze(
  Object.fromEntries(ALL_PAGES.map((p) => [p.path, p])),
)

/**
 * Id-indexed lookup for internal references (e.g. cross-page links).
 */
export const PAGES_BY_ID: Readonly<Record<string, Page>> = Object.freeze(
  Object.fromEntries(ALL_PAGES.map((p) => [p.id, p])),
)
