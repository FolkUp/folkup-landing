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
 *
 * Generated routes:
 *   /  /ru  /pt
 *   /en/privacy  /ru/privacy  /pt/privacy
 *   /en/terms    /ru/terms    /pt/terms
 *   /en/cookies  /ru/cookies  /pt/cookies
 *
 * Note: `/privacy`, `/terms`, `/cookies` (no lang prefix) remain reachable at runtime
 * via the optional `:lang?` param but are NOT prerendered. Hosting layer can serve
 * `/en/privacy` for `/privacy` requests (or rely on SPA fallback).
 */
export const includedRoutes = async (
  _paths: string[],
  _routes: Readonly<RouteRecordRaw[]>,
): Promise<string[]> => {
  const homePaths = LANGS.map((l) => (l === 'en' ? '/' : `/${l}`))
  const legalBasePaths = ['/privacy', '/terms', '/cookies']
  const legalPaths = legalBasePaths.flatMap((p) => LANGS.map((l) => `/${l}${p}`))
  return [...homePaths, ...legalPaths]
}
