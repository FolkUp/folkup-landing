<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { homePage } from '@/content/pages'
import { resolveLocalized } from '@/content/types'
import type { TrilogyVisualSection as TrilogyVisualSectionType } from '@/content/types'

const { locale } = useI18n()

const section = homePage.sections.find((s) => s.type === 'trilogy-visual') as TrilogyVisualSectionType | undefined
if (!section) throw new Error('Trilogy visual section missing from homePage manifest')
const trilogyVisual = section

const label = computed(() => resolveLocalized(trilogyVisual.label, locale.value) ?? '')
const title = computed(() => resolveLocalized(trilogyVisual.title, locale.value) ?? '')

const items = computed(() =>
  trilogyVisual.items.map((it) => ({
    key: it.key,
    glyph: it.glyph,
    label: resolveLocalized(it.label, locale.value) ?? '',
    caption: resolveLocalized(it.caption, locale.value) ?? '',
  })),
)
</script>

<template>
  <section id="trilogy-visual" class="section fade-in">
    <span class="section-label">{{ label }}</span>
    <h2 class="section-title">{{ title }}</h2>
    <div class="visual-grid">
      <figure
        v-for="it in items"
        :key="it.key"
        class="visual-item"
      >
        <div class="visual-glyph">
          <img
            :src="it.glyph"
            :alt="it.label"
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption class="visual-caption">
          <h3 class="visual-label">{{ it.label }}</h3>
          <p class="visual-descriptor">{{ it.caption }}</p>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.visual-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

@media (min-width: 640px) {
  .visual-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 900px) {
  .visual-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.visual-item {
  margin: 0;
  padding: 1.25rem;
  background: var(--color-surface);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 0;
}

.visual-glyph {
  width: 100%;
  max-width: 200px;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.visual-glyph img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.visual-caption {
  min-width: 0;
  overflow-wrap: break-word;
}

.visual-label {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-bordo);
  margin: 0 0 0.5rem;
  min-width: 0;
  overflow-wrap: break-word;
}

.visual-descriptor {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--color-muted);
  margin: 0;
  min-width: 0;
  overflow-wrap: break-word;
}
</style>
