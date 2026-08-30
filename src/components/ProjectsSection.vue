<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { homePage } from '@/content/pages'
import { resolveLocalized } from '@/content/types'
import type { ProjectsSection as ProjectsSectionType } from '@/content/types'
import ProjectCard from './ProjectCard.vue'

const props = withDefaults(defineProps<{
  sectionId?: string
}>(), {
  sectionId: 'projects',
})

const { locale } = useI18n()

// LAND-007 (B2b): read from typed content layer instead of locale JSONs.
// LAND cont+8 КОММИТ-1 2026-08-11: refactored к section-id-based lookup
// (было .type === 'projects' — returned first match; now supports multiple
// type:'projects' instances differentiated по id). Enables BOOKS + ECOSYSTEM
// dual-rendering per Iskra PRIKAZ-ISPOLNIT §4 apply-ready.
const section = homePage.sections.find((s) => s.id === props.sectionId) as ProjectsSectionType | undefined
if (!section) throw new Error(`Projects section missing from homePage manifest: id="${props.sectionId}"`)
const projectsSection = section

const label = computed(() => resolveLocalized(projectsSection.label, locale.value) ?? '')
const title = computed(() => resolveLocalized(projectsSection.title, locale.value) ?? '')
const subtitle = computed(() =>
  projectsSection.subtitle ? resolveLocalized(projectsSection.subtitle, locale.value) ?? '' : '',
)

const projects = computed(() =>
  projectsSection.items.map((item) => ({
    key: item.key,
    name: resolveLocalized(item.name, locale.value) ?? '',
    icon: item.icon,
    hero: item.hero,
    count: resolveLocalized(item.count, locale.value) ?? '',
    description: resolveLocalized(item.description, locale.value) ?? '',
    // 2026-08-30 S1UMBR cont+4 §2.4 fix (Iskra S307-02) — prefer urlByLang[locale]
    // if populated, fall back к static url. Enables per-locale portal routing
    // for book cards (kn1/kn2/kn7) while keeping encyclopedias locale-neutral.
    url: resolveLocalized(item.urlByLang, locale.value) ?? item.url,
    accent: item.accent,
    langs: resolveLocalized(item.langs, locale.value) ?? '',
    category: resolveLocalized(item.category, locale.value) ?? '',
  })),
)
</script>

<template>
  <section :id="sectionId" class="section fade-in">
    <span class="section-label">{{ label }}</span>
    <h2 class="section-title">{{ title }}</h2>
    <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
    <div class="projects-grid">
      <ProjectCard
        v-for="p in projects"
        :key="p.key"
        :name="p.name"
        :icon="p.icon"
        :hero="p.hero"
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
.section-subtitle {
  font-family: var(--font-body, 'EB Garamond', Georgia, serif);
  font-size: 1.0625rem;
  line-height: 1.55;
  color: var(--color-text-muted, #6b6259);
  max-width: 60ch;
  margin: 0.5rem 0 1.5rem;
}

@media (min-width: 800px) {
  .section-subtitle { font-size: 1.125rem; }
}

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
