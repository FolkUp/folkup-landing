<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { homePage } from '@/content/pages'
import { resolveLocalized } from '@/content/types'
import type { FrameworkSection as FrameworkSectionType } from '@/content/types'

const { locale } = useI18n()

// LAND-007 (B2b): read from typed content layer instead of locale JSONs.
const section = homePage.sections.find((s) => s.type === 'framework') as FrameworkSectionType | undefined
if (!section) throw new Error('Framework section missing from homePage manifest')
const framework = section

// Icons are presentation-only; keyed by feature id from the manifest.
const FEATURE_ICONS: Record<string, string> = {
  verify: '✓',
  i18n: '🌐',
  safety: '⚠',
  deploy: '⚡',
  compliance: '🔒',
}

const label = computed(() => resolveLocalized(framework.label, locale.value) ?? '')
const title = computed(() => resolveLocalized(framework.title, locale.value) ?? '')

const capabilities = computed(() =>
  framework.features.map((feature) => ({
    id: feature.id,
    icon: FEATURE_ICONS[feature.id] ?? '·',
    title: resolveLocalized(feature.title, locale.value) ?? '',
    text: resolveLocalized(feature.text, locale.value) ?? '',
  })),
)
</script>

<template>
  <section id="framework" class="section fade-in">
    <span class="section-label">{{ label }}</span>
    <h2 class="section-title">{{ title }}</h2>
    <div class="capabilities-grid">
      <div v-for="cap in capabilities" :key="cap.id" class="capability">
        <span class="capability-icon" aria-hidden="true">{{ cap.icon }}</span>
        <div class="capability-body">
          <h3>{{ cap.title }}</h3>
          <p>{{ cap.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.capabilities-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .capabilities-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.capability {
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--color-surface);
  border-radius: 10px;
}

.capability-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  background: var(--color-bg);
  border-radius: 8px;
  border: 1px solid var(--color-border);
}

.capability-body {
  min-width: 0;
}

.capability-body h3 {
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  margin: 0 0 0.35rem;
  color: var(--color-text);
}

.capability-body p {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--color-muted);
  margin: 0;
}
</style>
