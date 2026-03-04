import { ref, computed } from 'vue'
import en from '@/locales/en.json'
import ru from '@/locales/ru.json'
import pt from '@/locales/pt.json'

export type Locale = 'en' | 'ru' | 'pt'

const messages: Record<Locale, Record<string, string | string[]>> = { en, ru, pt }
const STORAGE_KEY = 'folkup-lang'

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && saved in messages) return saved as Locale
  const browser = navigator.language.slice(0, 2)
  if (browser in messages) return browser as Locale
  return 'en'
}

const locale = ref<Locale>(detectLocale())

export function useI18n() {
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

  function setLocale(l: Locale) {
    locale.value = l
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, l)
      document.documentElement.lang = l
    }
  }

  return {
    locale: computed(() => locale.value),
    t,
    tArray,
    setLocale,
    locales: ['en', 'ru', 'pt'] as const,
  }
}
