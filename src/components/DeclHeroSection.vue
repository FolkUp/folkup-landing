<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { homePage } from '@/content/pages'
import { resolveLocalized } from '@/content/types'
import type { DeclHeroSection as DeclHeroSectionType } from '@/content/types'

const { locale } = useI18n()

const section = homePage.sections.find((s) => s.type === 'decl-hero') as DeclHeroSectionType | undefined
if (!section) throw new Error('Decl hero section missing from homePage manifest')
const decl = section

const label = computed(() => resolveLocalized(decl.label, locale.value) ?? '')
const title = computed(() => resolveLocalized(decl.title, locale.value) ?? '')
const body = computed(() => resolveLocalized(decl.body, locale.value) ?? '')
const ctaLabel = computed(() => resolveLocalized(decl.cta.label, locale.value) ?? '')
</script>

<template>
  <section id="declaration" class="section fade-in decl-section">
    <div class="decl-inner">
      <span class="section-label">{{ label }}</span>
      <h2 class="section-title">{{ title }}</h2>
      <p class="decl-body">{{ body }}</p>
      <a :href="decl.cta.href" class="decl-cta" target="_blank" rel="noopener noreferrer">
        {{ ctaLabel }} <span aria-hidden="true">→</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.decl-section {
  background: var(--color-surface);
  border-radius: 10px;
}

.decl-inner {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.decl-body {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-text);
  margin: 1.25rem auto 1.75rem;
  overflow-wrap: break-word;
}

.decl-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-bordo);
  text-decoration: none;
  padding: 0.5rem 0;
  min-height: 44px;
  border-bottom: 1px solid transparent;
  transition: border-color 0.15s ease;
}

.decl-cta:hover {
  border-bottom-color: var(--color-bordo);
}

.decl-cta:focus-visible {
  outline: 2px solid var(--color-bordo);
  outline-offset: 4px;
}
</style>
