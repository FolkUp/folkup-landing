<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { homePage } from '@/content/pages'
import { resolveLocalized } from '@/content/types'
import type { ProLabSection as ProLabSectionType } from '@/content/types'

const { locale } = useI18n()

const section = homePage.sections.find((s) => s.type === 'pro-lab') as ProLabSectionType | undefined
if (!section) throw new Error('Pro Lab section missing from homePage manifest')
const proLab = section

const label = computed(() => resolveLocalized(proLab.label, locale.value) ?? '')
const title = computed(() => resolveLocalized(proLab.title, locale.value) ?? '')
const body = computed(() => resolveLocalized(proLab.body, locale.value) ?? '')
const highlightPitch = computed(() => resolveLocalized(proLab.highlight.pitch, locale.value) ?? '')
const ctaLabel = computed(() => resolveLocalized(proLab.cta.label, locale.value) ?? '')
</script>

<template>
  <section id="pro-lab" class="section fade-in">
    <div class="prolab-inner">
      <span class="section-label">{{ label }}</span>
      <h2 class="section-title">{{ title }}</h2>
      <p class="prolab-body">{{ body }}</p>

      <div class="prolab-highlight">
        <p class="highlight-pitch">{{ highlightPitch }}</p>
        <a :href="proLab.cta.href" class="prolab-cta" target="_blank" rel="noopener noreferrer">
          {{ ctaLabel }} <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.prolab-inner {
  max-width: 620px;
  margin: 0 auto;
  text-align: center;
}

.prolab-body {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-text);
  margin: 1.25rem auto 1.5rem;
  overflow-wrap: break-word;
}

.prolab-highlight {
  background: var(--color-surface);
  border-left: 3px solid var(--color-amber);
  border-radius: 6px;
  padding: 1.25rem 1.5rem;
  margin-top: 1.5rem;
  text-align: left;
}

.highlight-pitch {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text);
  margin: 0 0 1rem;
  overflow-wrap: break-word;
}

.prolab-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-bordo);
  text-decoration: none;
  padding: 0.5rem 0;
  min-height: 44px;
  border-bottom: 1px solid transparent;
  transition: border-color 0.15s ease;
}

.prolab-cta:hover {
  border-bottom-color: var(--color-bordo);
}

.prolab-cta:focus-visible {
  outline: 2px solid var(--color-bordo);
  outline-offset: 4px;
}
</style>
