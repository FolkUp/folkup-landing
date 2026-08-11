<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { useGertruda } from '@/composables/useGertruda'
import { homePage } from '@/content/pages'
import { resolveLocalized } from '@/content/types'
import type { HeroSection as HeroSectionType } from '@/content/types'

const { locale } = useI18n()
// Гертруда one-not-three per Iskra PRIKAZ-ISPOLNIT-КОММИТ-1 2026-08-11:
// BRAND-HERO-REDESIGN-001 (июнь S57) — «одна Гертруда во всю ширину» вернуть.
// Первый экран = заголовок+CTA, не галерея. Triptych function preserved
// в useGertruda.ts для потенциального future restoration, но hero использует
// single center per Andrey визы volunteers volumes S243+S274 apply-волна ratified.
const { src, style } = useGertruda()

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
    <div class="hero-gertruda-single" aria-hidden="true">
      <img
        class="gertruda-center"
        :src="src"
        alt=""
        width="320"
        height="320"
        loading="eager"
        fetchpriority="high"
        :data-style="style"
      />
    </div>
    <h1 class="hero-subtitle">{{ subtitle }}</h1>
    <p class="hero-tagline">{{ tagline }}</p>
    <div class="hero-actions">
      <a href="#books" class="hero-cta">{{ ctaPrimary }}</a>
      <a v-if="ctaSecondary" href="#framework" class="hero-cta hero-cta--secondary">{{ ctaSecondary }}</a>
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

/* Гертруда single-center per Iskra PRIKAZ-ISPOLNIT-КОММИТ-1 2026-08-11:
   restored BRAND-HERO-REDESIGN-001 (июнь S57) — одна Гертруда во всю ширину.
   Первый экран = заголовок+CTA, не галерея. Triptych CSS removed 2026-08-11
   cont+8 batch B1; useGertrudaTriptych() function preserved в useGertruda.ts
   для потенциального future restoration. */
.hero-gertruda-single {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.gertruda-center {
  width: clamp(200px, 65vw, 360px);
  height: auto;
  opacity: 0.95;
  filter: drop-shadow(0 6px 16px var(--color-shadow));
  transition: opacity 0.5s ease;
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

/* GLAVNAYA v1.1 FINAL-VIZA Iskra S238 2026-07-30: tagline semantics shifted к
   body-paragraph (5-sentence workshop introduction). Removed italic + smaller
   font, widened max-width + left-align для reading pattern. Anti-busy-work:
   preserve field name «tagline» rather than schema rename (single consumer). */
.hero-tagline {
  font-family: var(--font-heading);
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.6;
  color: var(--color-muted);
  max-width: 640px;
  margin: 0 auto 2rem;
  text-align: left;
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
