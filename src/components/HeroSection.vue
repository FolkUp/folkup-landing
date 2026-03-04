<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'
import { useGertruda } from '@/composables/useGertruda'

const { t } = useI18n()
const { src, style } = useGertruda()
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
    <h1 class="hero-title">FolkUp</h1>
    <p class="hero-subtitle">{{ t('heroSubtitle') }}</p>
    <p class="hero-tagline">{{ t('heroTagline') }}</p>
    <a href="#projects" class="hero-cta">{{ t('heroCta') }}</a>
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
  transition: background 0.15s ease;
}

.hero-cta:hover {
  background: var(--color-bordo-hover);
}
</style>
