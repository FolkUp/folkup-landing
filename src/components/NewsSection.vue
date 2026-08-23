<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { homePage } from '@/content/pages'
import { resolveLocalized } from '@/content/types'
import type { NewsSection as NewsSectionType } from '@/content/types'

// «Что нового» section — recent updates list.
// Added cont+2 S8SCOOP per Andrey verdict item #10 landing refresh 2026-08-23.
// Manual authoring in @/content/pages/index.ts (news section items).
// No-numbers rule applies (per Andrey «мы нигде не указываем точного количества»).
const { locale } = useI18n()

const section = homePage.sections.find((s) => s.type === 'news') as NewsSectionType | undefined
if (!section) throw new Error('News section missing from homePage manifest')
const news = section

const label = computed(() => resolveLocalized(news.label, locale.value) ?? '')
const title = computed(() => resolveLocalized(news.title, locale.value) ?? '')
const items = computed(() =>
  news.items.map((item) => ({
    id: item.id,
    text: resolveLocalized(item.text, locale.value) ?? '',
    link: item.link,
  })),
)
</script>

<template>
  <section id="news" class="section fade-in">
    <span class="section-label">{{ label }}</span>
    <h2 class="section-title">{{ title }}</h2>
    <ul class="news-list">
      <li v-for="item in items" :key="item.id">
        <a
          v-if="item.link"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
          class="news-link"
        >
          {{ item.text }}<span class="external-icon" aria-hidden="true"> ↗</span>
          <span class="sr-only"> (opens in new tab)</span>
        </a>
        <span v-else>{{ item.text }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.news-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
  max-width: 720px;
}

.news-list li {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text);
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--color-border);
}

.news-list li:last-child {
  border-bottom: none;
}

.news-list a {
  color: var(--color-text);
  text-decoration: none;
  /* WCAG 1.4.1 (Use of Color): persistent underline distinguishes link от text
     without relying only on color/hover. Vraga cont+2 catch. */
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 1px;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.news-list a:hover {
  color: var(--color-bordo);
  border-bottom-color: var(--color-amber);
}

.news-list a:focus-visible {
  outline: 2px solid var(--color-bordo);
  outline-offset: 2px;
  border-radius: 2px;
}

/* External-link ↗ affordance: visual «opens in new tab» indicator per WCAG 3.2.5.
   sr-only span provides screen-reader label «(opens in new tab)». */
.external-icon {
  font-size: 0.85em;
  color: var(--color-muted);
  margin-left: 0.15em;
}

.news-list a:hover .external-icon {
  color: var(--color-bordo);
}

/* Screen-reader-only pattern (WCAG hidden but announced). */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
