<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { useGertruda } from '@/composables/useGertruda'
import { homePage } from '@/content/pages'
import { resolveLocalized } from '@/content/types'
import type { HeroSection as HeroSectionType } from '@/content/types'

const { locale } = useI18n()
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
    <div class="hero-gertruda" aria-hidden="true">
      <img
        :src="src"
        alt=""
        width="280"
        height="280"
        loading="eager"
        :data-style="style"
      />
    </div>
    <h1 class="hero-title">{{ hero.title }}</h1>
    <p class="hero-subtitle">{{ subtitle }}</p>
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

.hero-gertruda {
  margin-bottom: 1.5rem;
}

.hero-gertruda img {
  width: clamp(160px, 30vw, 280px);
  height: auto;
  opacity: 0.92;
  filter: drop-shadow(0 4px 12px rgba(125, 68, 80, 0.15));
  transition: opacity 0.5s ease;
}

.hero-title {
  font-family: var(--font-brand);
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: var(--color-bordo);
  margin: 0 0 0.75rem;
  line-height: 1.1;
}

.hero-subtitle {
  font-family: var(--font-heading);
  font-size: clamp(1rem, 2.5vw, 1.35rem);
  color: var(--color-text);
  margin: 0 0 0.5rem;
  max-width: 520px;
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
  color: #fff;
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
  color: #fff;
}
</style>
