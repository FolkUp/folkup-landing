import { computed, type ComputedRef } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { wasFallback } from '@/content/types'
import type { LangCode } from '@/content/types'

/**
 * Fallback notice composable (Iskra S308-10 §1 item 1, 2026-08-31 S1UMBR cont+5).
 *
 * Detects when a localised record misses the current locale key and returns
 * a computed flag + translated notice string suitable для inline badge above
 * the section/block/page.
 *
 * Design: consumer passes any `Partial<Record<LangCode, T>>` record (usually
 * section title OR primary content field); composable returns computed flag
 * + message. Badge auto-hides when translation arrives (e.g., Bolik LAND-DE-
 * EPIC-001 lands per-section DE — no manual cleanup needed here).
 *
 * i18n key: `fallbackNotice` — must exist in all 4 locale JSONs.
 *
 * @example
 *   const { isFallback, message } = useFallbackNotice(section.title)
 *   // template: <FallbackNoticeBadge v-if="isFallback" :message="message" />
 */
export function useFallbackNotice<T>(
  localized: Partial<Record<LangCode, T>> | undefined | ComputedRef<Partial<Record<LangCode, T>> | undefined>,
): { isFallback: ComputedRef<boolean>; message: ComputedRef<string> } {
  const { locale, t } = useI18n()

  const isFallback = computed(() => {
    const rec = typeof localized === 'object' && localized !== null && 'value' in localized
      ? (localized as ComputedRef<Partial<Record<LangCode, T>> | undefined>).value
      : (localized as Partial<Record<LangCode, T>> | undefined)
    return wasFallback(rec, locale.value)
  })

  const message = computed(() => t('fallbackNotice'))

  return { isFallback, message }
}
