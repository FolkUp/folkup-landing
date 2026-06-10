import { ref, onMounted } from 'vue'

/**
 * Theme composable — 4-theme switcher per Андрей mandate 2026-06-10 Q5=A.
 *
 * Themes (per steampunk-palette-d-variant memo §2):
 *  - folkup-default: current Palette D (bordeaux/sage/amber + ivory) — DEFAULT
 *  - folkup-steampunk: mahogany/verdigris/brass + parchment
 *  - bw-light: pure white/black для WCAG accessibility minimum
 *  - bw-dark: pure black/white для WCAG dark mode
 *
 * Anti-FOUC: index.html inline script applies data-theme before Vue mounts
 * (returning visitors не видят bordeaux-flash перед switch к bw-dark).
 * Mechanism mirror: this composable syncs ref state after mount.
 */

export type Theme = 'folkup-default' | 'folkup-steampunk' | 'bw-light' | 'bw-dark'

export const THEMES: readonly Theme[] = [
  'folkup-default',
  'folkup-steampunk',
  'bw-light',
  'bw-dark',
] as const

const STORAGE_KEY = 'folkup-theme'
const DEFAULT_THEME: Theme = 'folkup-default'

function isValidTheme(value: unknown): value is Theme {
  return typeof value === 'string' && (THEMES as readonly string[]).includes(value)
}

export function useTheme() {
  const theme = ref<Theme>(DEFAULT_THEME)

  function applyAttribute(t: Theme) {
    if (typeof document === 'undefined') return
    if (t === DEFAULT_THEME) {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', t)
    }
  }

  function setTheme(t: Theme) {
    theme.value = t
    applyAttribute(t)
    if (typeof window === 'undefined') return
    try {
      if (t === DEFAULT_THEME) {
        localStorage.removeItem(STORAGE_KEY)
      } else {
        localStorage.setItem(STORAGE_KEY, t)
      }
    } catch {
      /* localStorage blocked (privacy mode / consent gate) — attribute still applied this session */
    }
  }

  onMounted(() => {
    if (typeof window === 'undefined') return
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (isValidTheme(stored)) {
        theme.value = stored
        // anti-FOUC script in index.html already applied attribute — no need
        // to re-apply unless stored is invalid (rare — anti-FOUC validates same list)
      }
    } catch {
      /* localStorage blocked — default theme stays */
    }
  })

  return {
    theme,
    setTheme,
    themes: THEMES,
  }
}
