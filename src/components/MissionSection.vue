<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <section id="mission" class="section fade-in">
    <span class="section-label">{{ t('missionLabel') }}</span>
    <h2 class="section-title">{{ t('missionTitle') }}</h2>
    <p class="mission-text">{{ t('missionText') }}</p>
    <div class="principles">
      <div class="principle principle--wide">
        <h3>{{ t('missionPrinciple1Title') }}</h3>
        <p>{{ t('missionPrinciple1Text') }}</p>
      </div>
      <div class="principle">
        <h3>{{ t('missionPrinciple2Title') }}</h3>
        <p>{{ t('missionPrinciple2Text') }}</p>
      </div>
      <div class="principle">
        <h3>{{ t('missionPrinciple3Title') }}</h3>
        <p>{{ t('missionPrinciple3Text') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mission-text {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--color-text);
  max-width: 680px;
}

.principles {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 2.5rem;
}

@media (min-width: 640px) {
  .principles {
    grid-template-columns: 1fr 1fr;
  }
  .principle--wide {
    grid-column: 1 / -1;
  }
}

.principle {
  padding: 1.25rem 1.5rem;
  background: var(--color-surface);
  border-radius: 8px;
  border-left: 3px solid var(--color-amber);
}

.principle h3 {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-bordo);
  margin: 0 0 0.5rem;
}

.principle p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text);
  margin: 0;
}
</style>
