<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { homePage } from '@/content/pages'
import { resolveLocalized } from '@/content/types'
import type { ProjectsSection as ProjectsSectionType } from '@/content/types'
import ProjectCard from './ProjectCard.vue'

const { locale } = useI18n()

// LAND-007 (B2b): read from typed content layer instead of locale JSONs.
const section = homePage.sections.find((s) => s.type === 'projects') as ProjectsSectionType | undefined
if (!section) throw new Error('Projects section missing from homePage manifest')
const projectsSection = section

const label = computed(() => resolveLocalized(projectsSection.label, locale.value) ?? '')
const title = computed(() => resolveLocalized(projectsSection.title, locale.value) ?? '')

const projects = computed(() =>
  projectsSection.items.map((item) => ({
    key: item.key,
    name: resolveLocalized(item.name, locale.value) ?? '',
    icon: item.icon,
    count: resolveLocalized(item.count, locale.value) ?? '',
    description: resolveLocalized(item.description, locale.value) ?? '',
    url: item.url,
    accent: item.accent,
    langs: resolveLocalized(item.langs, locale.value) ?? '',
    category: resolveLocalized(item.category, locale.value) ?? '',
  })),
)
</script>

<template>
  <section id="projects" class="section fade-in">
    <span class="section-label">{{ label }}</span>
    <h2 class="section-title">{{ title }}</h2>
    <div class="projects-grid">
      <ProjectCard
        v-for="p in projects"
        :key="p.key"
        :name="p.name"
        :icon="p.icon"
        :count="p.count"
        :description="p.description"
        :url="p.url"
        :accent="p.accent"
        :langs="p.langs"
        :category="p.category"
      />
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 520px) {
  .projects-grid { grid-template-columns: 1fr 1fr; }
}

@media (min-width: 800px) {
  .projects-grid { grid-template-columns: 1fr 1fr 1fr; }
}
</style>
