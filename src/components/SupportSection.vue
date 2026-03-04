<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t, tArray } = useI18n()

const formula = computed(() => {
  const formulas = tArray('supportFormulas')
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  )
  return formulas[dayOfYear % formulas.length]
})
</script>

<template>
  <section id="support" class="section fade-in">
    <span class="section-label">{{ t('supportLabel') }}</span>
    <h2 class="section-title">{{ t('supportTitle') }}</h2>
    <p class="support-text">{{ t('supportText') }}</p>
    <p class="support-how">{{ t('supportHow') }}</p>
    <p class="support-stats">{{ t('supportStats') }}</p>
    <p class="support-formula">{{ formula }}</p>
    <a
      href="https://ko-fi.com/folkup"
      class="support-cta"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ t('supportCta') }}
    </a>
  </section>
</template>

<style scoped>
.support-text {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--color-text);
  max-width: 600px;
}

.support-how {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-muted);
  max-width: 600px;
  margin-top: 0.75rem;
}

.support-stats {
  font-size: 0.9rem;
  color: var(--color-muted);
  margin-top: 1.5rem;
}

.support-formula {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: 1.1rem;
  color: var(--color-bordo);
  margin: 1.5rem 0;
  padding: 1rem 1.5rem;
  background: var(--color-surface);
  border-radius: 8px;
  border-left: 3px solid var(--color-amber);
  max-width: 500px;
}

.support-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 1rem;
  color: #fff;
  background: var(--color-sage);
  padding: 0.75rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  min-height: 44px;
  transition: background 0.15s ease;
}

.support-cta:hover {
  background: var(--color-sage-hover);
}

</style>
