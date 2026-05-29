import { describe, it, expect, beforeEach, vi } from 'vitest'
import { reactive } from 'vue'

// Shared mock route params — tests mutate this to simulate route changes.
// Reset in beforeEach.
const mockRoute = reactive<{ params: { lang?: string } }>({ params: {} })

vi.mock('vue-router', () => ({
  useRoute: () => mockRoute,
}))

// Lazy-imported to allow vi.mock to take effect.
let useI18n: typeof import('../useI18n').useI18n

describe('useI18n', () => {
  beforeEach(async () => {
    localStorage.clear()
    mockRoute.params = {}
    vi.resetModules()
    const mod = await import('../useI18n')
    useI18n = mod.useI18n
  })

  it('returns t, tArray, rememberLocale, locale, locales', () => {
    const i18n = useI18n()
    expect(i18n.t).toBeTypeOf('function')
    expect(i18n.tArray).toBeTypeOf('function')
    expect(i18n.rememberLocale).toBeTypeOf('function')
    expect(i18n.locale.value).toBeTypeOf('string')
    expect(i18n.locales).toEqual(['en', 'ru', 'pt'])
  })

  it('defaults to en when route has no lang param (root `/` is x-default)', () => {
    const i18n = useI18n()
    expect(i18n.locale.value).toBe('en')
  })

  it('t() returns translated string for known key (default en)', () => {
    const i18n = useI18n()
    expect(i18n.t('navProjects')).toBe('Projects')
  })

  it('t() returns key itself for unknown key', () => {
    const i18n = useI18n()
    expect(i18n.t('nonExistentKey')).toBe('nonExistentKey')
  })

  it('locale reflects route.params.lang = ru', () => {
    mockRoute.params = { lang: 'ru' }
    const i18n = useI18n()
    expect(i18n.locale.value).toBe('ru')
    expect(i18n.t('navProjects')).toBe('Проекты')
  })

  it('locale reflects route.params.lang = pt', () => {
    mockRoute.params = { lang: 'pt' }
    const i18n = useI18n()
    expect(i18n.locale.value).toBe('pt')
  })

  it('locale reactively updates when route.params.lang changes', () => {
    const i18n = useI18n()
    expect(i18n.locale.value).toBe('en')
    mockRoute.params = { lang: 'ru' }
    expect(i18n.locale.value).toBe('ru')
    mockRoute.params = { lang: 'pt' }
    expect(i18n.locale.value).toBe('pt')
    mockRoute.params = {}
    expect(i18n.locale.value).toBe('en')
  })

  it('ignores invalid lang param (falls back to en)', () => {
    mockRoute.params = { lang: 'xx' }
    const i18n = useI18n()
    expect(i18n.locale.value).toBe('en')
  })

  it('rememberLocale persists to localStorage', () => {
    const i18n = useI18n()
    i18n.rememberLocale('pt')
    expect(localStorage.getItem('folkup-lang')).toBe('pt')
  })

  it('rememberLocale does NOT change active locale (route is source of truth)', () => {
    const i18n = useI18n()
    expect(i18n.locale.value).toBe('en')
    i18n.rememberLocale('ru')
    // locale unchanged — only route.params.lang can change it
    expect(i18n.locale.value).toBe('en')
  })

  it('tArray returns array for array values', () => {
    const i18n = useI18n()
    const formulas = i18n.tArray('supportFormulas')
    expect(Array.isArray(formulas)).toBe(true)
    expect(formulas.length).toBe(3)
  })

  it('tArray returns single-element array for string values', () => {
    const i18n = useI18n()
    const result = i18n.tArray('navProjects')
    expect(result).toEqual(['Projects'])
  })

  it('all three locale files have the same keys', async () => {
    const en = (await import('../../locales/en.json')).default
    const ru = (await import('../../locales/ru.json')).default
    const pt = (await import('../../locales/pt.json')).default

    const enKeys = Object.keys(en).sort()
    const ruKeys = Object.keys(ru).sort()
    const ptKeys = Object.keys(pt).sort()

    expect(ruKeys).toEqual(enKeys)
    expect(ptKeys).toEqual(enKeys)
  })
})
