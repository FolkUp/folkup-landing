<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'
import TeamCard from './TeamCard.vue'

const { t } = useI18n()

const members = [
  { key: 'alice' },
  { key: 'gonzo' },
  { key: 'cooper' },
  { key: 'lantern' },
  { key: 'lev' },
]
</script>

<template>
  <section id="team" class="section fade-in">
    <span class="section-label">{{ t('teamLabel') }}</span>
    <h2 class="section-title">{{ t('teamTitle') }}</h2>
    <p class="team-subtitle">{{ t('teamSubtitle') }}</p>
    <div class="team-grid">
      <TeamCard
        v-for="m in members"
        :key="m.key"
        :name="t(`${m.key}Name`)"
        :role="t(`${m.key}Role`)"
        :oneliner="t(`${m.key}Oneliner`)"
      />
    </div>
  </section>
</template>

<style scoped>
.team-subtitle {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: 1.05rem;
  color: var(--color-muted);
  margin: -0.5rem 0 2rem;
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 480px) {
  .team-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 800px) {
  .team-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1000px) {
  .team-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
