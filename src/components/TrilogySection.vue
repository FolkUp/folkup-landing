<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { homePage } from '@/content/pages'
import { resolveLocalized } from '@/content/types'
import type { TrilogySection as TrilogySectionType } from '@/content/types'

const { locale } = useI18n()

const section = homePage.sections.find((s) => s.type === 'trilogy') as TrilogySectionType | undefined
if (!section) throw new Error('Trilogy section missing from homePage manifest')
const trilogy = section

const label = computed(() => resolveLocalized(trilogy.label, locale.value) ?? '')
const title = computed(() => resolveLocalized(trilogy.title, locale.value) ?? '')

const books = computed(() =>
  trilogy.items.map((b) => ({
    key: b.key,
    title: resolveLocalized(b.title, locale.value) ?? '',
    pitch: resolveLocalized(b.pitch, locale.value) ?? '',
    badge: resolveLocalized(b.badge, locale.value) ?? '',
    status: b.status,
    url: b.url,
  })),
)

const plates = computed(() =>
  (trilogy.plates ?? []).map((p) => ({
    src: p.src,
    caption: resolveLocalized(p.caption, locale.value) ?? '',
  })),
)
</script>

<template>
  <section id="trilogy" class="section fade-in">
    <span class="section-label">{{ label }}</span>
    <h2 class="section-title">{{ title }}</h2>
    <div class="trilogy-grid">
      <component
        :is="b.url ? 'a' : 'div'"
        v-for="b in books"
        :key="b.key"
        :href="b.url"
        :target="b.url ? '_blank' : undefined"
        :rel="b.url ? 'noopener noreferrer' : undefined"
        class="book-card"
        :class="`book-card--${b.status}`"
      >
        <h3 class="book-title">{{ b.title }}</h3>
        <p class="book-pitch">{{ b.pitch }}</p>
        <span class="book-badge" :class="`book-badge--${b.status}`">{{ b.badge }}</span>
      </component>
    </div>

    <a
      v-if="plates.length > 0"
      href="https://sapiens.folkup.life"
      target="_blank"
      rel="noopener noreferrer"
      class="plates-strip"
      aria-label="Agile Sapiens — illustrated chapters"
    >
      <figure
        v-for="p in plates"
        :key="p.src"
        class="plate"
      >
        <img
          :src="p.src"
          :alt="p.caption"
          loading="lazy"
          decoding="async"
        />
        <figcaption>{{ p.caption }}</figcaption>
      </figure>
    </a>
  </section>
</template>

<style scoped>
.trilogy-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-top: 1.5rem;
}

@media (min-width: 640px) {
  .trilogy-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 900px) {
  .trilogy-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.book-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: var(--color-surface);
  border-radius: 8px;
  color: var(--color-text);
  text-decoration: none;
  min-width: 0;
  overflow-wrap: break-word;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.book-card--live {
  border-left: 3px solid var(--color-amber);
}

.book-card--coming {
  border-left: 3px solid var(--color-sage);
}

a.book-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px var(--color-shadow);
}

.book-title {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-bordo);
  margin: 0 0 0.5rem;
  min-width: 0;
  overflow-wrap: break-word;
}

.book-pitch {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text);
  margin: 0 0 1rem;
  flex: 1;
  overflow-wrap: break-word;
}

.book-badge {
  align-self: flex-start;
  font-family: var(--font-heading);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
}

.book-badge--live {
  background: var(--color-sage);
  color: var(--color-on-primary);
}

.book-badge--coming {
  background: var(--color-amber);
  color: var(--color-on-amber);
}

/* Decorative chapter-plate strip — clickable к sapiens.folkup.life.
   Added 2026-06-10: replaces tarot project tile с book program preview. */
.plates-strip {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
  margin-top: 2rem;
  padding: 1rem;
  background: var(--color-surface);
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.plates-strip:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px var(--color-shadow);
}

.plates-strip:focus-visible {
  outline: 2px solid var(--color-bordo);
  outline-offset: 4px;
}

.plate {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.plate img {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 4px;
  background: var(--color-bg);
}

.plate figcaption {
  font-family: var(--font-heading);
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-muted);
  text-align: center;
}
</style>
