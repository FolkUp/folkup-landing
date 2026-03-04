<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const stats = [
  { valueKey: 'statsProjectsValue', labelKey: 'statsProjects' },
  { valueKey: 'statsArticlesValue', labelKey: 'statsArticles' },
  { valueKey: 'statsPagesValue', labelKey: 'statsPages' },
  { valueKey: 'statsLanguagesValue', labelKey: 'statsLanguages' },
  { valueKey: 'statsAdsValue', labelKey: 'statsAds' },
]
</script>

<template>
  <section id="stats" class="stats-band fade-in" aria-label="Statistics">
    <div class="stats-inner">
      <span class="section-label">{{ t('statsLabel') }}</span>
      <div class="stats-grid">
        <div v-for="s in stats" :key="s.valueKey" class="stat">
          <span class="stat-value">{{ t(s.valueKey) }}</span>
          <span class="stat-label">{{ t(s.labelKey) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-band {
  background: var(--color-surface);
  padding: 3rem 1.5rem;
}

.stats-inner {
  max-width: 960px;
  margin: 0 auto;
}

.stats-inner .section-label {
  display: block;
  margin-bottom: 1.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem 3rem;
}

@media (min-width: 640px) {
  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 800px) {
  .stats-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-value {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--color-bordo);
  line-height: 1.1;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--color-muted);
  text-transform: lowercase;
}
</style>
