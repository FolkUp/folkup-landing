<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="section fade-in">
    <span class="section-label">{{ t('aboutLabel') }}</span>
    <h2 class="section-title">{{ t('aboutTitle') }}</h2>
    <p class="about-text">{{ t('aboutText') }}</p>
    <div class="values-grid">
      <div v-for="i in 4" :key="i" class="value-card">
        <span class="value-dot" aria-hidden="true"></span>
        <p>{{ t(`value${i}`) }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-text {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--color-text);
  max-width: 680px;
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 2.5rem;
}

@media (min-width: 520px) {
  .values-grid { grid-template-columns: 1fr 1fr; }
}

.value-card {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  padding: 1rem 1.25rem;
  background: var(--color-surface);
  border-radius: 8px;
}

.value-dot {
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  margin-top: 0.5rem;
  border-radius: 50%;
  background: var(--color-amber);
}

.value-card p {
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--color-text);
  margin: 0;
}

</style>
