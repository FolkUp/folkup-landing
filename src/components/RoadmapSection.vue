<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { homePage } from '@/content/pages'
import { resolveLocalized } from '@/content/types'
import type { RoadmapSection as RoadmapSectionType } from '@/content/types'

const { locale } = useI18n()

// LAND-007 (B2b): read from typed content layer instead of locale JSONs.
const section = homePage.sections.find((s) => s.type === 'roadmap') as RoadmapSectionType | undefined
if (!section) throw new Error('Roadmap section missing from homePage manifest')
const roadmap = section

// Icon and status visuals are presentation-only; keyed by phase id.
const PHASE_VISUALS: Record<string, { icon: string; status: string }> = {
  done: { icon: '✓', status: 'done' },
  now: { icon: '→', status: 'now' },
  next: { icon: '○', status: 'next' },
  future: { icon: '◇', status: 'future' },
}

const label = computed(() => resolveLocalized(roadmap.label, locale.value) ?? '')
const title = computed(() => resolveLocalized(roadmap.title, locale.value) ?? '')

const steps = computed(() =>
  roadmap.phases.map((phase) => {
    const visual = PHASE_VISUALS[phase.id] ?? { icon: '·', status: phase.id }
    return {
      id: phase.id,
      icon: visual.icon,
      status: visual.status,
      title: resolveLocalized(phase.title, locale.value) ?? '',
      text: resolveLocalized(phase.text, locale.value) ?? '',
    }
  }),
)
</script>

<template>
  <section id="roadmap" class="section fade-in">
    <span class="section-label">{{ label }}</span>
    <h2 class="section-title">{{ title }}</h2>
    <div class="timeline">
      <div
        v-for="step in steps"
        :key="step.id"
        class="timeline-step"
        :class="step.status"
      >
        <span class="timeline-icon" aria-hidden="true">{{ step.icon }}</span>
        <div class="timeline-content">
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
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
