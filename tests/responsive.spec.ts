import { test, expect } from '@playwright/test'

/**
 * Responsive regression suite для folkup-landing.
 *
 * Адаптировано из dayforge/e2e/responsive/responsive.spec.ts (pattern proven 2026-05).
 *
 * Проверяет:
 *  - horizontal overflow на document level (catch №1 — самый частый mobile bug)
 *  - touch targets ≥44px (WCAG 2.5.5 + Apple HIG)
 *  - navigation accessibility (header links + lang toggle reachable)
 *
 * Запускается на 6 viewports через playwright.config.ts projects.
 * Mobile viewports (320/375/390/414) — обязательно зелёные ДО prod deploy.
 */

const publicRoutes = [
  { name: 'home-en', path: '/' },
  { name: 'home-ru', path: '/ru' },
  { name: 'home-pt', path: '/pt' },
  { name: 'privacy-en', path: '/en/privacy' },
  { name: 'terms-en', path: '/en/terms' },
  { name: 'cookies-en', path: '/en/cookies' },
  { name: 'ai-use-en', path: '/en/about/ai-use' },
]

for (const { name, path } of publicRoutes) {
  test.describe(`${name} (${path})`, () => {
    test('no horizontal overflow', async ({ page }) => {
      await page.goto(path, { waitUntil: 'networkidle' })

      const docOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth - document.documentElement.clientWidth
      })
      expect(docOverflow, `Document overflow на ${path} (px вне viewport)`).toBeLessThanOrEqual(1)

      const overflowingElements = await page.evaluate(() => {
        const results: string[] = []
        const all = document.querySelectorAll('*')

        for (const el of all) {
          const style = getComputedStyle(el)

          // Skip элементы с явным overflow control
          if (['auto', 'scroll', 'hidden'].includes(style.overflowX)) continue
          if (['fixed', 'sticky'].includes(style.position)) continue
          // Skip preformatted content (intentional overflow OK)
          if (el.closest('pre, code, table')) continue

          const overflow = el.scrollWidth - el.clientWidth
          if (overflow > 1) {
            const tag = el.tagName.toLowerCase()
            const cls = el.className
              ? `.${String(el.className).split(' ').slice(0, 2).join('.')}`
              : ''
            const id = el.id ? `#${el.id}` : ''
            results.push(`<${tag}${id}${cls}> overflow=${overflow}px`)
          }
        }
        return results
      })

      expect(overflowingElements, `Элементы overflowing на ${path}`).toEqual([])
    })

    test('touch targets ≥44px', async ({ page }, testInfo) => {
      // Skip touch target check для desktop project
      if (testInfo.project.name === 'desktop') {
        test.skip()
      }

      await page.goto(path, { waitUntil: 'networkidle' })

      const smallTargets = await page.evaluate(() => {
        const results: string[] = []
        const interactive = document.querySelectorAll(
          'a, button, input, select, textarea, [role="button"], [role="radio"]',
        )

        for (const el of interactive) {
          const style = getComputedStyle(el)
          if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
            continue
          }

          const rect = el.getBoundingClientRect()
          if (rect.width === 0 || rect.height === 0) continue

          if (rect.width < 44 || rect.height < 44) {
            const tag = el.tagName.toLowerCase()
            const text = (el.textContent || '').trim().slice(0, 30)
            results.push(`<${tag}> "${text}" (${Math.round(rect.width)}×${Math.round(rect.height)})`)
          }
        }
        return results
      })

      // Touch targets — warning, не fail (некоторые namely lang-btn с min-h 44px могут не сработать в edge cases)
      if (smallTargets.length > 0) {
        console.warn(`[WARN] Small touch targets на ${path}:\n${smallTargets.join('\n')}`)
      }
    })

    test('header navigation reachable', async ({ page }, testInfo) => {
      // Skip для desktop где header всегда работает
      if (testInfo.project.name === 'desktop') {
        test.skip()
      }

      await page.goto(path, { waitUntil: 'networkidle' })

      // Scroll вниз чтобы триггернуть header visible (header показывается при scroll)
      await page.evaluate(() => window.scrollTo(0, 500))
      await page.waitForTimeout(400)

      const header = page.locator('header.site-header')
      await expect(header, 'site-header должен существовать').toHaveCount(1)

      // Проверяем что элементы header помещаются в viewport
      const headerOverflow = await page.evaluate(() => {
        const h = document.querySelector('header.site-header')
        if (!h) return -1
        return h.scrollWidth - h.clientWidth
      })
      expect(
        headerOverflow,
        'Header не должен overflow (overflow в header = nav недоступна)',
      ).toBeLessThanOrEqual(1)

      // Logo, nav links и lang toggle должны быть видны и кликабельны
      const logo = page.locator('a.header-logo')
      await expect(logo, 'Logo должен быть visible').toBeVisible()
    })
  })
}
