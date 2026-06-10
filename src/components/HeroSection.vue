<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { useGertrudaTriptych } from '@/composables/useGertruda'
import { homePage } from '@/content/pages'
import { resolveLocalized } from '@/content/types'
import type { HeroSection as HeroSectionType } from '@/content/types'

const { locale } = useI18n()
const { left, center, right } = useGertrudaTriptych()

// LAND-007 (B2b): read from typed content layer instead of locale JSONs.
const section = homePage.sections.find((s) => s.type === 'hero') as HeroSectionType | undefined
if (!section) throw new Error('Hero section missing from homePage manifest')
const hero = section

const subtitle = computed(() => resolveLocalized(hero.subtitle, locale.value) ?? '')
const tagline = computed(() => resolveLocalized(hero.tagline, locale.value) ?? '')
const ctaPrimary = computed(() => resolveLocalized(hero.ctaPrimary, locale.value) ?? '')
const ctaSecondary = computed(() => resolveLocalized(hero.ctaSecondary, locale.value) ?? '')
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero-gertruda-triptych" aria-hidden="true">
      <img
        class="gertruda-side gertruda-left"
        :src="left.src"
        alt=""
        width="200"
        height="200"
        loading="lazy"
        decoding="async"
        :data-style="left.style"
      />
      <img
        class="gertruda-center"
        :src="center.src"
        alt=""
        width="320"
        height="320"
        loading="eager"
        fetchpriority="high"
        :data-style="center.style"
      />
      <img
        class="gertruda-side gertruda-right"
        :src="right.src"
        alt=""
        width="200"
        height="200"
        loading="lazy"
        decoding="async"
        :data-style="right.style"
      />
    </div>
    <h1 class="hero-subtitle">{{ subtitle }}</h1>
    <p class="hero-tagline">{{ tagline }}</p>
    <div class="hero-actions">
      <a href="#projects" class="hero-cta">{{ ctaPrimary }}</a>
      <a href="#framework" class="hero-cta hero-cta--secondary">{{ ctaSecondary }}</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 1.5rem 3rem;
  position: relative;
}

/* Гертруда триптих — three illustrations simultaneously.
   D verdict 2026-06-10: «очень одинок этот квадратик» → 3 Гертруд layered.
   Mobile ≤640px: vertical stack (center на top large, 2 sides below row).
   Tablet+Desktop ≥641px: horizontal triptych (sides flank center). */
.hero-gertruda-triptych {
  display: grid;
  align-items: center;
  justify-items: center;
  margin-bottom: 1.5rem;
  gap: 0.75rem;
  /* Mobile-first: vertical stack with center on top */
  grid-template-areas:
    'center'
    'sides';
  grid-template-columns: minmax(0, 1fr);
}

.gertruda-center {
  grid-area: center;
  width: clamp(180px, 60vw, 320px);
  height: auto;
  opacity: 0.95;
  filter: drop-shadow(0 6px 16px var(--color-shadow));
  transition: opacity 0.5s ease;
}

.gertruda-side {
  width: clamp(96px, 28vw, 200px);
  height: auto;
  opacity: 0.75;
  filter: drop-shadow(0 3px 10px var(--color-shadow));
  transition: opacity 0.5s ease;
}

/* Mobile: side images live в row below center */
.gertruda-left,
.gertruda-right {
  grid-area: sides;
}
.gertruda-left {
  justify-self: end;
  margin-right: 0.5rem;
}
.gertruda-right {
  justify-self: start;
  margin-left: 0.5rem;
}

/* Tablet + Desktop: horizontal triptych с center middle */
@media (min-width: 641px) {
  .hero-gertruda-triptych {
    grid-template-areas: 'left center right';
    grid-template-columns: auto auto auto;
    gap: 1.25rem;
  }
  .gertruda-left {
    grid-area: left;
    justify-self: end;
    margin-right: 0;
  }
  .gertruda-right {
    grid-area: right;
    justify-self: start;
    margin-left: 0;
  }
}

@media (min-width: 1025px) {
  .hero-gertruda-triptych {
    gap: 2rem;
  }
}

/* Phase 2c-γ: hero-title removed per Q2=A verdict («убрать большой текст
   FolkUp, h1 → subtitle, Гертруда сама»). SiteHeader wordmark + Гертруда
   carry brand identity. Subtitle promoted к h1 для SEO/a11y heading. */
.hero-subtitle {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 500;
  color: var(--color-bordo);
  margin: 0 0 0.5rem;
  max-width: 620px;
  line-height: 1.2;
}

.hero-tagline {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: clamp(0.9rem, 2vw, 1.05rem);
  color: var(--color-muted);
  margin: 0 0 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-style: italic;
  font-size: clamp(0.9rem, 2vw, 1.05rem);
  color: var(--color-on-primary);
  background: var(--color-bordo);
  padding: 0.75rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  min-height: 44px;
  transition: background 0.15s ease, color 0.15s ease;
}

.hero-cta:hover {
  background: var(--color-bordo-hover);
}

.hero-cta--secondary {
  background: transparent;
  color: var(--color-bordo);
  border: 1.5px solid var(--color-bordo);
}

.hero-cta--secondary:hover {
  background: var(--color-bordo);
  color: var(--color-on-primary);
}
</style>
