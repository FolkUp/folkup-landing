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

const methodTitle = computed(() =>
  mission.method ? resolveLocalized(mission.method.title, locale.value) ?? '' : '',
)
const methodSteps = computed(() =>
  mission.method
    ? mission.method.steps.map((s) => ({
        id: s.id,
        verb: resolveLocalized(s.verb, locale.value) ?? '',
        qualifier: resolveLocalized(s.qualifier, locale.value) ?? '',
      }))
    : [],
)

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

    <div v-if="mission.method" class="method">
      <h3 class="method-title">{{ methodTitle }}</h3>
      <ol class="method-steps">
        <li v-for="s in methodSteps" :key="s.id" class="method-step">
          <span class="method-verb">{{ s.verb }}</span>
          <span class="method-qualifier">{{ s.qualifier }}</span>
        </li>
      </ol>
    </div>

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

.method {
  margin-top: 2rem;
  padding: 1.5rem 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.method-title {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-sage);
  margin: 0 0 1rem;
}

.method-steps {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: method-step;
}

.method-step {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.15rem;
  padding: 0.5rem 0;
  min-width: 0;
  overflow-wrap: break-word;
}

@media (min-width: 720px) {
  .method-steps {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .method-step {
    padding: 0;
  }
}

.method-verb {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-bordo);
  line-height: 1.2;
}

.method-qualifier {
  font-size: 0.95rem;
  color: var(--color-muted);
  font-style: italic;
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
