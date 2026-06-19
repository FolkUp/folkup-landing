<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { projectsPage } from '@/content/pages/projects'
import { resolveLocalized } from '@/content/types'
import type { LegalPageSection } from '@/content/types'

const { locale } = useI18n()

const section = projectsPage.sections.find(
  (s): s is LegalPageSection => s.type === 'legal',
)
if (!section) throw new Error('projectsPage: missing main section')

const title = computed(() => resolveLocalized(section.title, locale.value) ?? '')
const lastUpdated = computed(
  () => resolveLocalized(section.lastUpdated, locale.value) ?? '',
)
const content = computed(() => resolveLocalized(section.content, locale.value) ?? '')
</script>

<template>
  <a href="#main" class="skip-to-content">Skip to content</a>
  <SiteHeader :visible="true" />
  <main id="main" class="projects-page">
    <article>
      <h1>{{ title }}</h1>
      <p class="last-updated">{{ lastUpdated }}</p>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="projects-content" v-html="content"></div>
    </article>
  </main>
  <SiteFooter />
</template>

<style scoped>
.projects-page {
  max-width: 760px;
  margin: 0 auto;
  padding: 6rem 1.5rem 4rem;
}

.projects-page h1 {
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

.projects-page :deep(h2) {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--color-text);
  margin: 3rem 0 1rem;
  border-top: 1px solid var(--color-border, rgba(0, 0, 0, 0.08));
  padding-top: 2rem;
}

.projects-page :deep(h2:first-of-type) {
  border-top: none;
  padding-top: 0;
}

.projects-page :deep(h3) {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  margin: 0 0 0.25rem;
}

.projects-page :deep(p) {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text);
  margin: 0.75rem 0;
}

.projects-page :deep(a) {
  color: var(--color-bordo);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
}

.projects-page :deep(.encyclopedia-card) {
  margin: 1.5rem 0;
  padding: 1.25rem 1.5rem;
  background: var(--color-surface, rgba(0, 0, 0, 0.02));
  border-left: 3px solid var(--color-bordo);
  border-radius: 4px;
}

.projects-page :deep(.encyclopedia-card h3) {
  margin-top: 0;
}

.projects-page :deep(.encyclopedia-card h3 a) {
  text-decoration: none;
}

.projects-page :deep(.encyclopedia-card h3 a:hover) {
  text-decoration: underline;
}

.projects-page :deep(.encyclopedia-meta) {
  font-size: 0.875rem;
  color: var(--color-text-muted, #666);
  margin: 0.25rem 0 0.75rem;
  font-style: italic;
}

.projects-page :deep(.encyclopedia-card p:last-child) {
  margin-bottom: 0;
}

.projects-page :deep(.encyclopedia-coming) {
  list-style: none;
  padding: 0;
  margin: 1rem 0 2rem;
}

.projects-page :deep(.encyclopedia-coming li) {
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-border, rgba(0, 0, 0, 0.08));
  font-size: 1rem;
  line-height: 1.6;
}

.projects-page :deep(.encyclopedia-coming li:last-child) {
  border-bottom: none;
}

.projects-page :deep(.encyclopedia-coming a) {
  text-decoration: none;
}

.projects-page :deep(.encyclopedia-coming a:hover) {
  text-decoration: underline;
}

@media (max-width: 480px) {
  .projects-page {
    padding: 5rem 1rem 3rem;
  }

  .projects-page h1 {
    font-size: 1.625rem;
  }

  .projects-page :deep(h2) {
    font-size: 1.25rem;
    margin: 2.5rem 0 0.75rem;
    padding-top: 1.5rem;
  }

  .projects-page :deep(.encyclopedia-card) {
    padding: 1rem 1.125rem;
  }
}
</style>
