<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { servicesPage } from '@/content/pages/services'
import { resolveLocalized } from '@/content/types'
import type { LegalPageSection } from '@/content/types'

const { locale } = useI18n()

const section = servicesPage.sections.find(
  (s): s is LegalPageSection => s.type === 'legal',
)
if (!section) throw new Error('servicesPage: missing main section')

const title = computed(() => resolveLocalized(section.title, locale.value) ?? '')
const lastUpdated = computed(
  () => resolveLocalized(section.lastUpdated, locale.value) ?? '',
)
const content = computed(() => resolveLocalized(section.content, locale.value) ?? '')
</script>

<template>
  <a href="#main" class="skip-to-content">Skip to content</a>
  <SiteHeader :visible="true" />
  <main id="main" class="services-page">
    <article>
      <h1>{{ title }}</h1>
      <p class="last-updated">{{ lastUpdated }}</p>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="services-content" v-html="content"></div>
    </article>
  </main>
  <SiteFooter />
</template>

<style scoped>
.services-page {
  max-width: 760px;
  margin: 0 auto;
  padding: 6rem 1.5rem 4rem;
}

.services-page h1 {
  font-family: var(--font-heading);
  font-size: 2rem;
  color: var(--color-bordo);
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.last-updated {
  font-size: 0.875rem;
  color: var(--color-text-muted, #666);
  margin-bottom: 2rem;
  font-style: italic;
}

.services-page :deep(h2) {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--color-text);
  margin: 3rem 0 0.5rem;
  border-top: 1px solid var(--color-border, rgba(0, 0, 0, 0.08));
  padding-top: 2rem;
}

.services-page :deep(h2:first-of-type) {
  border-top: none;
  padding-top: 0;
}

.services-page :deep(h3) {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  color: var(--color-bordo);
  margin: 0 0 1rem;
  font-style: italic;
  line-height: 1.3;
}

.services-page :deep(p) {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text);
  margin: 0.75rem 0;
}

.services-page :deep(p em) {
  display: block;
  margin-top: 1.5rem;
  padding: 0.75rem 1rem;
  background: var(--color-surface, rgba(0, 0, 0, 0.02));
  border-left: 2px solid var(--color-text-muted, #999);
  font-style: italic;
  font-size: 0.9375rem;
  color: var(--color-text-muted, #555);
}

.services-page :deep(a) {
  color: var(--color-bordo);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
}

@media (max-width: 480px) {
  .services-page {
    padding: 5rem 1rem 3rem;
  }

  .services-page h1 {
    font-size: 1.625rem;
  }

  .services-page :deep(h2) {
    font-size: 1.25rem;
    margin: 2.5rem 0 0.5rem;
    padding-top: 1.5rem;
  }

  .services-page :deep(h3) {
    font-size: 1.125rem;
  }

  .services-page :deep(p em) {
    padding: 0.625rem 0.875rem;
    font-size: 0.875rem;
  }
}
</style>
