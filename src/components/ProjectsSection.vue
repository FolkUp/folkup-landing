<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'
import { PROJECT_URLS } from '@/constants/projects'
import ProjectCard from './ProjectCard.vue'

const { t } = useI18n()

const projects = [
  { key: 'barnes', letter: 'B', accent: 'var(--color-accent-barnes)', url: PROJECT_URLS.barnes },
  { key: 'padel', letter: 'P', accent: 'var(--color-accent-padel)', url: PROJECT_URLS.padel },
  { key: 'setubal', letter: 'S', accent: 'var(--color-accent-setubal)', url: PROJECT_URLS.setubal },
  { key: 'cogumelos', letter: 'C', accent: 'var(--color-accent-cogumelos)', url: PROJECT_URLS.cogumelos },
  { key: 'tarot', letter: 'T', accent: 'var(--color-accent-tarot)', url: PROJECT_URLS.tarot },
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
        :letter="p.letter"
        :count="t(`${p.key}Count`)"
        :description="t(`${p.key}Desc`)"
        :url="p.url"
        :accent="p.accent"
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
