<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const capabilities = [
  { key: 'Verify', icon: '✓' },
  { key: 'I18n', icon: '🌐' },
  { key: 'Safety', icon: '⚠' },
  { key: 'Deploy', icon: '⚡' },
  { key: 'Compliance', icon: '🔒' },
]
</script>

<template>
  <section id="framework" class="section fade-in">
    <span class="section-label">{{ t('frameworkLabel') }}</span>
    <h2 class="section-title">{{ t('frameworkTitle') }}</h2>
    <div class="capabilities-grid">
      <div v-for="cap in capabilities" :key="cap.key" class="capability">
        <span class="capability-icon" aria-hidden="true">{{ cap.icon }}</span>
        <div class="capability-body">
          <h3>{{ t(`framework${cap.key}Title`) }}</h3>
          <p>{{ t(`framework${cap.key}Text`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.capabilities-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .capabilities-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.capability {
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--color-surface);
  border-radius: 10px;
}

.capability-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  background: var(--color-bg);
  border-radius: 8px;
  border: 1px solid var(--color-border);
}

.capability-body {
  min-width: 0;
}

.capability-body h3 {
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 700;
  margin: 0 0 0.35rem;
  color: var(--color-text);
}

.capability-body p {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--color-muted);
  margin: 0;
}
</style>
