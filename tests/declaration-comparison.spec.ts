/**
 * cont +37 C-1B Phase A — Declaration visual parity check.
 *
 * Андрей mandate: «На отдельном домене стили и разметка должны быть как в
 * разделе лендинга». Subdomain (declaration.folkup.app) должен match
 * folkup.app/declaration/. Это discovery test — снимаем скриншоты обоих
 * URL на 3 viewport, JohnnyCSS анализирует diff.
 *
 * Output: C:/Transit/decl-comparison-2026-06-23/{viewport}-{url-tag}.png
 */
import { test, devices } from '@playwright/test'

const OUTPUT = 'C:/Transit/decl-comparison-2026-06-23'

const TARGETS = [
  { tag: 'landing', url: 'https://folkup.app/declaration/' },
  { tag: 'subdomain', url: 'https://declaration.folkup.app/' },
]

const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 720 },
]

for (const vp of VIEWPORTS) {
  test.describe(`viewport ${vp.name}`, () => {
    for (const target of TARGETS) {
      test(`screenshot ${target.tag} @ ${vp.name}`, async ({ browser }) => {
        const context = await browser.newContext({
          viewport: { width: vp.width, height: vp.height },
        })
        const page = await context.newPage()
        await page.goto(target.url, { waitUntil: 'networkidle', timeout: 30000 })
        await page.waitForTimeout(2000) // allow fonts/images settle

        await page.screenshot({
          path: `${OUTPUT}/${vp.name}-${target.tag}.png`,
          fullPage: true,
        })

        // Also dump HTML for structural comparison
        const html = await page.content()
        const fs = await import('node:fs/promises')
        await fs.writeFile(`${OUTPUT}/${vp.name}-${target.tag}.html`, html)

        await context.close()
      })
    }
  })
}
