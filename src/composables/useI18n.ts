import { computed } from 'vue'
import { useRoute } from 'vue-router'
import en from '@/locales/en.json'
import ru from '@/locales/ru.json'
import pt from '@/locales/pt.json'

export type Locale = 'en' | 'ru' | 'pt'

const messages: Record<Locale, Record<string, string | string[]>> = { en, ru, pt }
const STORAGE_KEY = 'folkup-lang'

/**
 * i18n composable — locale source = `useRoute().params.lang` (per-language URLs).
 *
 * Strategy (Q6 Honor URL):
 * - Root `/` and any path without `:lang` prefix → EN (x-default)
 * - `/ru/...`, `/pt/...` → explicit per-language
 * - localStorage is NO LONGER the locale source. It is kept only as a
 *   "remember user preference" hint via `rememberLocale()` for future use
 *   (e.g. landing page redirect on second visit — currently disabled per Q6).
 */
export function useI18n() {
  const route = useRoute()

  const locale = computed<Locale>(() => {
    const param = route.params.lang as string | undefined
    if (param && param in messages) return param as Locale
    return 'en'
  })

  function t(key: string): string {
    const val = messages[locale.value]?.[key]
    if (Array.isArray(val)) return val[0]
    return val ?? key
  }

  function tArray(key: string): string[] {
    const val = messages[locale.value]?.[key]
    if (Array.isArray(val)) return val
    return val ? [val] : [key]
  }

  /**
   * Persist user's last explicit language choice. Called by LangToggle
   * after `router.push` so we remember preference without auto-redirecting.
   */
  function rememberLocale(l: Locale) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, l)
    }
  }

  return {
    locale,
    t,
    tArray,
    rememberLocale,
    locales: ['en', 'ru', 'pt'] as const,
  }
}
