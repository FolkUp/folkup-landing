import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

/**
 * WCAG audit suite — covers все 4 themes × home routes.
 *
 * BRAND-WM-THEME-A11Y-001 MINOR-3 (Враг SettingsPanel post-batch verdict):
 * verify все 4 themes × viewports соответствуют WCAG 2.1 AA через axe-core.
 *
 * Themes: folkup-default / folkup-steampunk / bw-light / bw-dark
 * Routes: /, /ru, /pt (3 locales)
 *
 * Виолейшены critical + serious tracked. Minor/moderate logged как warnings,
 * не блокируют CI пока baseline не установлен.
 */

const THEMES = ['folkup-default', 'folkup-steampunk', 'bw-light', 'bw-dark'] as const
const ROUTES = [
  { name: 'home-en', path: '/' },
  { name: 'home-ru', path: '/ru' },
  { name: 'home-pt', path: '/pt' },
]

for (const theme of THEMES) {
  for (const { name, path } of ROUTES) {
    test(`a11y / ${theme} / ${name}`, async ({ page }, testInfo) => {
      // Set theme via localStorage BEFORE page load (anti-FOUC script reads it)
      await page.addInitScript((th) => {
        localStorage.setItem('folkup-theme', th)
      }, theme)

      await page.goto(path, { waitUntil: 'networkidle' })

      // Run axe scan with WCAG 2.1 AA tags
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze()

      const critical = results.violations.filter((v) => v.impact === 'critical')
      const serious = results.violations.filter((v) => v.impact === 'serious')
      const moderate = results.violations.filter((v) => v.impact === 'moderate')
      const minor = results.violations.filter((v) => v.impact === 'minor')

      // Log all violations к test output для debugging
      if (results.violations.length > 0) {
        const summary = results.violations.map((v) => ({
          id: v.id,
          impact: v.impact,
          help: v.help,
          nodes: v.nodes.length,
        }))
        await testInfo.attach('axe-violations.json', {
          body: JSON.stringify(summary, null, 2),
          contentType: 'application/json',
        })
      }

      // Critical + Serious = BLOCK. Moderate + Minor = warn only (logged).
      expect(critical, `Critical WCAG violations on ${theme}/${path}:\n${JSON.stringify(critical, null, 2)}`).toEqual([])
      expect(serious, `Serious WCAG violations on ${theme}/${path}:\n${JSON.stringify(serious, null, 2)}`).toEqual([])

      if (moderate.length > 0) {
        console.warn(`[a11y] ${theme}/${path}: ${moderate.length} moderate violations (non-blocking):`)
        moderate.forEach((v) => console.warn(`  - ${v.id}: ${v.help} (${v.nodes.length} nodes)`))
      }
      if (minor.length > 0) {
        console.warn(`[a11y] ${theme}/${path}: ${minor.length} minor violations (non-blocking):`)
        minor.forEach((v) => console.warn(`  - ${v.id}: ${v.help} (${v.nodes.length} nodes)`))
      }
    })
  }
}
