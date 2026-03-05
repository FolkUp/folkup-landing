<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'
import { PROJECT_URLS } from '@/constants/projects'
import ProjectCard from './ProjectCard.vue'

const { t } = useI18n()

const projects = [
  { key: 'barnes', icon: '/images/project-icons/barnes.webp', accent: 'var(--color-accent-barnes)', url: PROJECT_URLS.barnes, categoryKey: 'projectsCategoryCity' },
  { key: 'padel', icon: '/images/project-icons/padel.webp', accent: 'var(--color-accent-padel)', url: PROJECT_URLS.padel, categoryKey: 'projectsCategorySport' },
  { key: 'setubal', icon: '/images/project-icons/setubal.webp', accent: 'var(--color-accent-setubal)', url: PROJECT_URLS.setubal, categoryKey: 'projectsCategoryCity' },
  { key: 'cogumelos', icon: '/images/project-icons/cogumelos.webp', accent: 'var(--color-accent-cogumelos)', url: PROJECT_URLS.cogumelos, categoryKey: 'projectsCategoryNature' },
  { key: 'tarot', icon: '/images/project-icons/tarot.webp', accent: 'var(--color-accent-tarot)', url: PROJECT_URLS.tarot, categoryKey: 'projectsCategoryCulture' },
]
</script>

<template>
  <section id="projects" class="section fade-in">
    <span class="section-label">{{ t('projectsLabel') }}</span>
    <h2 class="section-title">{{ t('projectsTitle') }}</h2>
    <div class="projects-grid">
      <ProjectCard
        v-for="p in projects"
        :key="p.key"
        :name="t(`${p.key}Name`)"
        :icon="p.icon"
        :count="t(`${p.key}Count`)"
        :description="t(`${p.key}Desc`)"
        :url="p.url"
        :accent="p.accent"
        :langs="t(`${p.key}Langs`)"
        :category="t(p.categoryKey)"
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
