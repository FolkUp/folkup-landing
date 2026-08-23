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
        <a v-if="item.link" :href="item.link" target="_blank" rel="noopener noreferrer">
          {{ item.text }}
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
  border-bottom: 1px solid transparent;
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
</style>
