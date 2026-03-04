<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

const steps = [
  { key: 'Done', icon: '✓', status: 'done' as const },
  { key: 'Now', icon: '→', status: 'now' as const },
  { key: 'Next', icon: '○', status: 'next' as const },
  { key: 'Future', icon: '◇', status: 'future' as const },
]
</script>

<template>
  <section id="roadmap" class="section fade-in">
    <span class="section-label">{{ t('roadmapLabel') }}</span>
    <h2 class="section-title">{{ t('roadmapTitle') }}</h2>
    <div class="timeline">
      <div
        v-for="step in steps"
        :key="step.key"
        class="timeline-step"
        :class="step.status"
      >
        <span class="timeline-icon" aria-hidden="true">{{ step.icon }}</span>
        <div class="timeline-content">
          <h3>{{ t(`roadmap${step.key}Title`) }}</h3>
          <p>{{ t(`roadmap${step.key}Text`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0.95rem;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 2px;
  background: var(--color-border);
}

.timeline-step {
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  position: relative;
}

.timeline-icon {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
  margin-left: -2rem;
}

.done .timeline-icon {
  background: var(--color-sage);
  color: #fff;
}

.now .timeline-icon {
  background: var(--color-amber);
  color: var(--color-text);
}

.next .timeline-icon,
.future .timeline-icon {
  background: var(--color-surface);
  color: var(--color-muted);
  border: 2px solid var(--color-border);
}

.timeline-content h3 {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
  color: var(--color-text);
}

.timeline-content p {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--color-muted);
  margin: 0;
}
</style>
