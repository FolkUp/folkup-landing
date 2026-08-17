import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    // Terser с 2-pass compression: ~3.6% smaller gzip vs esbuild default
    // (measured cont+1 A2 batch: 60994 → 58812 bytes, headroom 446 → 2628 bytes).
    // Trade-off: build ~2× slower (30-60s vs 15-25s). Acceptable для production.
    minify: 'terser',
    terserOptions: { compress: { passes: 2 } },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    // Playwright e2e tests live in `tests/` and use the @playwright/test
    // runner — vitest must skip that folder, otherwise it tries to invoke
    // `test.describe()` from the Playwright module and aborts.
    exclude: ['tests/**', 'node_modules/**', 'dist/**'],
  },
})
