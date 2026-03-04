import { describe, it, expect, beforeEach, vi } from 'vitest'

// Reset module state between tests
let useI18n: typeof import('../useI18n').useI18n

describe('useI18n', () => {
  beforeEach(async () => {
    localStorage.clear()
    // Re-import to reset singleton locale ref
    vi.resetModules()
    const mod = await import('../useI18n')
    useI18n = mod.useI18n
  })

  it('returns t, tArray, setLocale, locale, locales', () => {
    const i18n = useI18n()
    expect(i18n.t).toBeTypeOf('function')
    expect(i18n.tArray).toBeTypeOf('function')
    expect(i18n.setLocale).toBeTypeOf('function')
    expect(i18n.locale.value).toBeTypeOf('string')
    expect(i18n.locales).toEqual(['en', 'ru', 'pt'])
  })

  it('defaults to en when no localStorage and browser is en', () => {
    const i18n = useI18n()
    expect(i18n.locale.value).toBe('en')
  })

  it('t() returns translated string for known key', () => {
    const i18n = useI18n()
    expect(i18n.t('navProjects')).toBe('Projects')
  })

  it('t() returns key itself for unknown key', () => {
    const i18n = useI18n()
    expect(i18n.t('nonExistentKey')).toBe('nonExistentKey')
  })

  it('setLocale changes the active locale', () => {
    const i18n = useI18n()
    i18n.setLocale('ru')
    expect(i18n.locale.value).toBe('ru')
    expect(i18n.t('navProjects')).toBe('Проекты')
  })

  it('setLocale persists to localStorage', () => {
    const i18n = useI18n()
    i18n.setLocale('pt')
    expect(localStorage.getItem('folkup-lang')).toBe('pt')
  })

  it('setLocale updates document.documentElement.lang', () => {
    const i18n = useI18n()
    i18n.setLocale('ru')
    expect(document.documentElement.lang).toBe('ru')
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

  it('reads saved locale from localStorage', async () => {
    localStorage.setItem('folkup-lang', 'pt')
    vi.resetModules()
    const mod = await import('../useI18n')
    const i18n = mod.useI18n()
    expect(i18n.locale.value).toBe('pt')
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
