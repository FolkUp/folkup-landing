<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { homePage } from '@/content/pages'
import { resolveLocalized } from '@/content/types'
import type { MissionSection as MissionSectionType } from '@/content/types'

const { locale } = useI18n()

// LAND-007 (B2b): read from typed content layer instead of locale JSONs.
const section = homePage.sections.find((s) => s.type === 'mission') as MissionSectionType | undefined
if (!section) throw new Error('Mission section missing from homePage manifest')
const mission = section

const label = computed(() => resolveLocalized(mission.label, locale.value) ?? '')
const title = computed(() => resolveLocalized(mission.title, locale.value) ?? '')
const text = computed(() => resolveLocalized(mission.text, locale.value) ?? '')

const principles = computed(() =>
  mission.principles.map((p) => ({
    id: p.id,
    title: resolveLocalized(p.title, locale.value) ?? '',
    text: resolveLocalized(p.text, locale.value) ?? '',
  })),
)
</script>

<template>
  <section id="mission" class="section fade-in">
    <span class="section-label">{{ label }}</span>
    <h2 class="section-title">{{ title }}</h2>
    <p class="mission-text">{{ text }}</p>
    <div class="principles">
      <div
        v-for="(p, idx) in principles"
        :key="p.id"
        class="principle"
        :class="{ 'principle--wide': idx === 0 }"
      >
        <h3>{{ p.title }}</h3>
        <p>{{ p.text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mission-text {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--color-text);
  max-width: 680px;
}

.principles {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 2.5rem;
}

@media (min-width: 640px) {
  .principles {
    grid-template-columns: 1fr 1fr;
  }
  .principle--wide {
    grid-column: 1 / -1;
  }
}

.principle {
  padding: 1.25rem 1.5rem;
  background: var(--color-surface);
  border-radius: 8px;
  border-left: 3px solid var(--color-amber);
}

.principle h3 {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-bordo);
  margin: 0 0 0.5rem;
}

.principle p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text);
  margin: 0;
}
</style>
