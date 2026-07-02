#!/usr/bin/env node
/**
 * IndexNow ping script — notifies Bing + Yandex about URL changes.
 *
 * IndexNow is an open protocol that lets sites push URL changes к search
 * engines instantly, instead of waiting for crawlers to find them. Free,
 * no auth — just URL ownership verification via a key file в public/.
 *
 * Spec: https://www.indexnow.org/documentation
 *
 * Usage:
 *   npm run indexnow:ping              # ping all prerendered URLs
 *   INDEXNOW_DRY_RUN=1 npm run indexnow:ping   # print payload, don't POST
 *
 * Key rotation: replace `public/<old-key>.txt` с new generated file. Both
 * remain valid until search engines re-verify (~7 days).
 *
 * Hook integration: invoke manually after deploy OR add к GitHub Action
 * post-deploy step. NOT wired в npm run build chain (build runs locally —
 * не каждая local build = production deploy).
 */

import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const HOST = 'https://folkup.app'
const HOSTNAME = 'folkup.app'

// Discover IndexNow key file in public/. Convention: <hex-key>.txt с the key
// inside матches filename (without .txt). Allows easy rotation.
const PUBLIC_DIR = 'public'
const candidates = readdirSync(PUBLIC_DIR).filter((f) =>
  /^[a-f0-9]{8,128}\.txt$/i.test(f),
)
if (candidates.length === 0) {
  console.error('✗ No IndexNow key file found in public/<hex>.txt')
  console.error('  Generate one: node -e "require(\'fs\').writeFileSync(\'public/\'+require(\'crypto\').randomBytes(16).toString(\'hex\')+\'.txt\', require(\'crypto\').randomBytes(16).toString(\'hex\'))"')
  process.exit(1)
}
if (candidates.length > 1) {
  console.warn(`! Multiple key files found (${candidates.join(', ')}) — using first lexically: ${candidates[0]}`)
}
const keyFile = candidates.sort()[0]
const key = readFileSync(join(PUBLIC_DIR, keyFile), 'utf8').trim()
const keyLocation = `${HOST}/${keyFile}`

// URL list — все prerendered routes per src/main.ts.
// Кroутинг alternate canonical URLs (localized homes /ru, /pt) + legal pages.
const URLS = [
  `${HOST}/`,
  `${HOST}/ru`,
  `${HOST}/pt`,
  `${HOST}/en/projects`,
  `${HOST}/ru/projects`,
  `${HOST}/pt/projects`,
  `${HOST}/en/services`,
  `${HOST}/ru/services`,
  `${HOST}/pt/services`,
  `${HOST}/en/privacy`,
  `${HOST}/en/terms`,
  `${HOST}/en/cookies`,
  `${HOST}/en/about/ai-use`,
  `${HOST}/ru/privacy`,
  `${HOST}/ru/terms`,
  `${HOST}/ru/cookies`,
  `${HOST}/ru/about/ai-use`,
  `${HOST}/pt/privacy`,
  `${HOST}/pt/terms`,
  `${HOST}/pt/cookies`,
  `${HOST}/pt/about/ai-use`,
]

const payload = {
  host: HOSTNAME,
  key,
  keyLocation,
  urlList: URLS,
}

if (process.env.INDEXNOW_DRY_RUN === '1' || process.argv.includes('--dry-run')) {
  console.log('[DRY RUN] would POST to IndexNow endpoints:')
  console.log(JSON.stringify({ ...payload, key: `${key.slice(0, 4)}...${key.slice(-4)}` }, null, 2))
  process.exit(0)
}

// Generic IndexNow endpoint propagates к all participating engines
// (Bing, Yandex, Seznam, Naver). Plus direct ping к Bing + Yandex для
// belt-and-suspenders coverage в case generic propagation lags.
const ENDPOINTS = [
  'https://api.indexnow.org/IndexNow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
]

let successCount = 0
for (const endpoint of ENDPOINTS) {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    })
    const ok = res.status >= 200 && res.status < 300
    console.log(`${ok ? '✓' : '!'} ${endpoint}: HTTP ${res.status} ${res.statusText}`)
    if (ok) successCount++
  } catch (e) {
    console.error(`✗ ${endpoint}: ${e.message}`)
  }
}

console.log(`\n${successCount}/${ENDPOINTS.length} endpoints accepted (${URLS.length} URLs)`)
process.exit(successCount > 0 ? 0 : 1)
