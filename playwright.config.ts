import { defineConfig, devices } from '@playwright/test'

/**
 * Playwright config для folkup-landing.
 *
 * Адаптировано из dayforge/playwright.config.ts (pattern proven 2026-05).
 * Отличия:
 * - No auth (public site)
 * - No DB seeding
 * - Tests против vite preview (built dist/), либо BASE_URL env override
 *
 * Запуск:
 *   npm run test:e2e           — all viewports
 *   npm run test:e2e:mobile    — только mobile (320/375/390/414)
 *   BASE_URL=https://folkup.app npx playwright test  — против production
 */

const E2E_PORT = 4173

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? 'github' : 'html',

  use: {
    baseURL: process.env.BASE_URL || `http://localhost:${E2E_PORT}`,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile-320',
      use: { viewport: { width: 320, height: 568 } },
    },
    {
      name: 'mobile-375',
      use: { viewport: { width: 375, height: 812 } },
    },
    {
      name: 'mobile-390',
      use: { viewport: { width: 390, height: 844 } },
    },
    {
      name: 'mobile-414',
      use: { viewport: { width: 414, height: 896 } },
    },
    {
      name: 'tablet-768',
      use: { viewport: { width: 768, height: 1024 } },
    },
  ],

  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: 'npm run build && npx vite preview --port 4173',
        port: E2E_PORT,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
      },
})
