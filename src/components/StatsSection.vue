<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { homePage } from '@/content/pages'
import { resolveLocalized } from '@/content/types'
import type { StatsSection as StatsSectionType } from '@/content/types'

const { locale } = useI18n()

// LAND-007 (B2b): read from typed content layer instead of locale JSONs.
const section = homePage.sections.find((s) => s.type === 'stats') as StatsSectionType | undefined
if (!section) throw new Error('Stats section missing from homePage manifest')
const statsSection = section

const label = computed(() => resolveLocalized(statsSection.label, locale.value) ?? '')

const stats = computed(() =>
  statsSection.items.map((item) => ({
    id: item.id,
    value: resolveLocalized(item.value, locale.value) ?? '',
    label: resolveLocalized(item.label, locale.value) ?? '',
  })),
)
</script>

<template>
  <section id="stats" class="stats-band fade-in" aria-label="Statistics">
    <div class="stats-inner">
      <span class="section-label">{{ label }}</span>
      <div class="stats-grid">
        <div v-for="s in stats" :key="s.id" class="stat">
          <span class="stat-value">{{ s.value }}</span>
          <span class="stat-label">{{ s.label }}</span>
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
