<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { cookiesPage } from '@/content/pages/cookies'
import { resolveLocalized } from '@/content/types'
import type { LegalPageSection } from '@/content/types'

const { locale } = useI18n()

const section = cookiesPage.sections.find(
  (s): s is LegalPageSection => s.type === 'legal',
)
if (!section) throw new Error('cookiesPage: missing legal section')

const title = computed(() => resolveLocalized(section.title, locale.value) ?? '')
const lastUpdated = computed(
  () => resolveLocalized(section.lastUpdated, locale.value) ?? '',
)
const content = computed(() => resolveLocalized(section.content, locale.value) ?? '')
</script>

<template>
  <a href="#main" class="skip-to-content">Skip to content</a>
  <SiteHeader :visible="true" />
  <main id="main" class="legal-page">
    <article>
      <h1>{{ title }}</h1>
      <p><strong>{{ lastUpdated }}</strong></p>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="legal-content" v-html="content"></div>
    </article>
  </main>
  <SiteFooter />
</template>

<style scoped>
.legal-page {
  max-width: 680px;
  margin: 0 auto;
  padding: 6rem 1.5rem 4rem;
}

.legal-page h1 {
  font-family: var(--font-heading);
  font-size: 2rem;
  color: var(--color-bordo);
  margin-bottom: 0.5rem;
}

.legal-page :deep(h2) {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  color: var(--color-text);
  margin: 2rem 0 0.75rem;
}

.legal-page p,
.legal-page :deep(p) {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text);
}

.legal-page a,
.legal-page :deep(a) {
  color: var(--color-bordo);
}

.legal-page :deep(code) {
  font-size: 0.9em;
  background: var(--color-surface);
  padding: 0.15em 0.4em;
  border-radius: 3px;
}
</style>
