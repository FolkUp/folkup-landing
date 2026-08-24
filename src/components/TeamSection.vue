<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { homePage } from '@/content/pages'
import { resolveLocalized } from '@/content/types'
import type { TeamSection as TeamSectionType } from '@/content/types'
import TeamCard from './TeamCard.vue'

// T4 FIX-2 SITE-TEAM-001 (Andrey ratified B/C/C/A/B via Iskra S295-12 2026-08-23):
// compact=true → 4 members preview + «View all N →» link к /team (home usage)
// compact=false (default) → full roster (used by /team page).
const props = defineProps<{ compact?: boolean }>()

const { locale, t } = useI18n()

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
  iskra: '/images/team/iskra.webp',
  frida: '/images/team/frida.webp',
  lyolik: '/images/team/lyolik.webp',
  bolik: '/images/team/bolik.webp',
  zeka: '/images/team/zeka.webp',
}

const label = computed(() => resolveLocalized(team.label, locale.value) ?? '')
const title = computed(() => resolveLocalized(team.title, locale.value) ?? '')
const subtitle = computed(() => resolveLocalized(team.subtitle, locale.value) ?? '')

const allMembers = computed(() =>
  team.members.map((m) => ({
    key: m.key,
    name: resolveLocalized(m.name, locale.value) ?? '',
    role: resolveLocalized(m.role, locale.value) ?? '',
    oneliner: resolveLocalized(m.oneliner, locale.value) ?? '',
    avatar: MEMBER_AVATARS[m.key] ?? '',
  })),
)

// Home teaser roster per Iskra KANON S299-13 TEAM-COMPOSITION + PRIKAZ S299-16 §2.3
// (LANDING-FANTOMY P1 2026-08-24): Alice + Iskra + Lolik + Frida в этом порядке.
// Прежде было first-4-slice: alice/gonzo/cooper/lantern — заменено explicit keys list.
// /team page (compact=false) preserves full editorial ordering members[] intact.
const HOME_TEASER_KEYS = ['alice', 'iskra', 'lyolik', 'frida']

const members = computed(() => {
  if (!props.compact) return allMembers.value
  const memberByKey = new Map(allMembers.value.map((m) => [m.key, m]))
  return HOME_TEASER_KEYS.map((k) => memberByKey.get(k)).filter(
    (m): m is NonNullable<typeof m> => m !== undefined,
  )
})

const teamPageUrl = computed(() =>
  locale.value === 'en' ? '/team' : `/${locale.value}/team`,
)
</script>

<template>
  <section id="team" class="section fade-in">
    <span class="section-label">{{ label }}</span>
    <h2 class="section-title">{{ title }}</h2>
    <p class="team-subtitle">{{ subtitle }}</p>
    <div class="team-grid" :class="{ 'team-grid--compact': compact }">
      <TeamCard
        v-for="m in members"
        :key="m.key"
        :name="m.name"
        :role="m.role"
        :oneliner="m.oneliner"
        :avatar="m.avatar"
      />
    </div>
    <p v-if="compact" class="team-view-all">
      <a :href="teamPageUrl">{{ t('teamViewAll') }}</a>
    </p>
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

/* Compact preview (home): cap grid at 4 columns even on wide viewports
   so all 4 members фit one row cleanly. */
@media (min-width: 800px) {
  .team-grid--compact {
    grid-template-columns: repeat(4, 1fr);
  }
}

.team-view-all {
  margin: 2rem 0 0;
  text-align: center;
  font-family: var(--font-heading);
  font-size: 1rem;
}

.team-view-all a {
  color: var(--color-bordo);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
  transition: border-color 0.15s ease;
}

.team-view-all a:hover {
  border-bottom-color: var(--color-amber);
}

.team-view-all a:focus-visible {
  outline: 2px solid var(--color-bordo);
  outline-offset: 4px;
  border-radius: 2px;
}
</style>
