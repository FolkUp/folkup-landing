<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { homePage } from '@/content/pages'
import { resolveLocalized } from '@/content/types'
import type { TeamSection as TeamSectionType } from '@/content/types'
import TeamCard from './TeamCard.vue'

const { locale } = useI18n()

// LAND-007 (B2b): read from typed content layer instead of locale JSONs.
const section = homePage.sections.find((s) => s.type === 'team') as TeamSectionType | undefined
if (!section) throw new Error('Team section missing from homePage manifest')
const team = section

// Avatars are presentation-only; keyed by team member key from the manifest.
const MEMBER_AVATARS: Record<string, string> = {
  alice: '/images/team/alice.webp',
  gonzo: '/images/team/gonzo.webp',
  cooper: '/images/team/cooper.webp',
  lantern: '/images/team/lantern.webp',
  lev: '/images/team/lev.webp',
}

const label = computed(() => resolveLocalized(team.label, locale.value) ?? '')
const title = computed(() => resolveLocalized(team.title, locale.value) ?? '')
const subtitle = computed(() => resolveLocalized(team.subtitle, locale.value) ?? '')

const members = computed(() =>
  team.members.map((m) => ({
    key: m.key,
    name: resolveLocalized(m.name, locale.value) ?? '',
    role: resolveLocalized(m.role, locale.value) ?? '',
    oneliner: resolveLocalized(m.oneliner, locale.value) ?? '',
    avatar: MEMBER_AVATARS[m.key] ?? '',
  })),
)
</script>

<template>
  <section id="team" class="section fade-in">
    <span class="section-label">{{ label }}</span>
    <h2 class="section-title">{{ title }}</h2>
    <p class="team-subtitle">{{ subtitle }}</p>
    <div class="team-grid">
      <TeamCard
        v-for="m in members"
        :key="m.key"
        :name="m.name"
        :role="m.role"
        :oneliner="m.oneliner"
        :avatar="m.avatar"
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
