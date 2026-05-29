import { ViteSSG } from 'vite-ssg'
import type { RouteRecordRaw } from 'vue-router'
import App from './App.vue'
import './assets/main.css'

const LANGS = ['en', 'ru', 'pt'] as const

const routes: RouteRecordRaw[] = [
  { path: '/:lang(en|ru|pt)?', component: () => import('./pages/index.vue') },
  { path: '/:lang(en|ru|pt)?/privacy', component: () => import('./pages/privacy.vue') },
  { path: '/:lang(en|ru|pt)?/terms', component: () => import('./pages/terms.vue') },
  { path: '/:lang(en|ru|pt)?/cookies', component: () => import('./pages/cookies.vue') },
  // 404 — locale-neutral, served by CF Pages for any unmatched URL via
  // dist/404.html convention. Prerendered from /404 route below.
  { path: '/404', component: () => import('./pages/404.vue') },
  // SPA-side catch-all so a hydration mismatch on an unknown route still
  // renders the 404 page instead of a blank screen.
  { path: '/:pathMatch(.*)*', component: () => import('./pages/404.vue') },
]

export const createApp = ViteSSG(App, { routes })

/**
 * Build-time route expansion for vite-ssg prerender.
 *
 * URL strategy (Q6 Honor URL — no auto-redirect):
 * - `/` serves EN as x-default
 * - `/ru`, `/pt` — explicit per-language landing
 * - `/en/privacy`, `/ru/privacy`, `/pt/privacy` — legal pages get explicit lang prefix
 *   (including `/en/...` so all three locales have parity for legal content)
 * - `/404` — locale-neutral 404 page; CF Pages serves dist/404.html on any
 *   unmatched URL. Unprefixed legacy paths (/privacy etc.) 301 to /en/...
 *   via public/_redirects.
 *
 * Generated routes:
 *   /  /ru  /pt
 *   /en/privacy  /ru/privacy  /pt/privacy
 *   /en/terms    /ru/terms    /pt/terms
 *   /en/cookies  /ru/cookies  /pt/cookies
 *   /404
 *
 * Note: `/privacy`, `/terms`, `/cookies` (no lang prefix) remain reachable at runtime
 * via the optional `:lang?` param but are NOT prerendered — public/_redirects
 * 301s them to the /en/... canonical path before they ever hit Vue.
 */
export const includedRoutes = async (
  _paths: string[],
  _routes: Readonly<RouteRecordRaw[]>,
): Promise<string[]> => {
  const homePaths = LANGS.map((l) => (l === 'en' ? '/' : `/${l}`))
  const legalBasePaths = ['/privacy', '/terms', '/cookies']
  const legalPaths = legalBasePaths.flatMap((p) => LANGS.map((l) => `/${l}${p}`))
  return [...homePaths, ...legalPaths, '/404']
}
