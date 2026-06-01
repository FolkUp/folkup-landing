<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { homePage } from '@/content/pages'
import { resolveLocalized } from '@/content/types'
import type { AnchorSection as AnchorSectionType } from '@/content/types'

const { locale } = useI18n()

const services = homePage.sections.find((s) => s.type === 'services') as AnchorSectionType | undefined
const openCode = homePage.sections.find((s) => s.type === 'open-code') as AnchorSectionType | undefined
if (!services) throw new Error('Services section missing from homePage manifest')
if (!openCode) throw new Error('Open Code section missing from homePage manifest')

const anchors = computed(() =>
  [services, openCode].map((a) => ({
    id: a.id,
    label: resolveLocalized(a.label, locale.value) ?? '',
    title: resolveLocalized(a.title, locale.value) ?? '',
    body: resolveLocalized(a.body, locale.value) ?? '',
  })),
)
</script>

<template>
  <section class="section anchors-section fade-in">
    <div class="anchors-row">
      <article v-for="a in anchors" :key="a.id" :id="a.id" class="anchor-block">
        <span class="section-label">{{ a.label }}</span>
        <h3 class="anchor-title">{{ a.title }}</h3>
        <p class="anchor-body">{{ a.body }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.anchors-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 760px) {
  .anchors-row {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}

.anchor-block {
  min-width: 0;
  overflow-wrap: break-word;
}

.anchor-title {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-bordo);
  margin: 0.5rem 0 0.75rem;
  line-height: 1.3;
  min-width: 0;
  overflow-wrap: break-word;
}

.anchor-body {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--color-text);
  margin: 0;
  overflow-wrap: break-word;
}
</style>
