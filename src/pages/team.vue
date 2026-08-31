<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { useFadeIn } from '@/composables/useFadeIn'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import TeamSection from '@/components/TeamSection.vue'
import { teamPage } from '@/content/pages/team'
import { resolveLocalized } from '@/content/types'

// T4 FIX-2 SITE-TEAM-001 (Andrey ratified B/C/C/A/B via Iskra S295-12 2026-08-23):
// Full /team page — hero AI disclosure first screen (Q2=C, Q3=C) + full team
// roster (reuses TeamSection.vue без compact prop → all 14 members per Iskra
// v5.1 canon S302-02 + S302-03 + S303-01 + S304-01 shipped cont+4 Batch A).
//
// 2026-08-31 S1UMBR cont+4 hotfix — added useFadeIn() call. TeamSection renders
// <section class="section fade-in"> — .fade-in has opacity:0 initially, IntersectionObserver
// triggers .visible class via useFadeIn composable. Without this call, team-section stays
// invisible на /team page (server HTML present, browser не renders cards). Pre-existing bug
// since team.vue creation 2026-08-23 — surfaced by Andrey visual report /team empty page.
// Fix aligns team.vue с pattern used в other page components (index.vue etc).
const { locale, t } = useI18n()
useFadeIn()

const pageDescription = computed(
  () => resolveLocalized(teamPage.meta.description, locale.value) ?? '',
)

const aiUseUrl = computed(() =>
  locale.value === 'en' ? '/about/ai-use' : `/${locale.value}/about/ai-use`,
)
</script>

<template>
  <a href="#main" class="skip-to-content">Skip to content</a>
  <SiteHeader :visible="true" />
  <main id="main" class="team-page">
    <article>
      <header class="team-hero">
        <h1>{{ t('teamPageTitle') }}</h1>
        <p class="team-hero-intro">{{ t('teamPageIntro') }}</p>
        <p class="team-hero-link">
          <a :href="aiUseUrl">{{ t('teamPageAiLinkLabel') }}</a>
        </p>
      </header>
      <TeamSection />
    </article>
  </main>
  <SiteFooter />
</template>

<style scoped>
.team-page {
  max-width: 960px;
  margin: 0 auto;
  padding: 6rem 1.5rem 4rem;
}

.team-hero {
  max-width: 760px;
  margin: 0 auto 3rem;
  text-align: center;
}

.team-hero h1 {
  font-family: var(--font-heading);
  font-size: 2.25rem;
  color: var(--color-bordo);
  margin: 0 0 1rem;
  line-height: 1.2;
}

.team-hero-intro {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-text);
  margin: 0 0 1.25rem;
}

.team-hero-link {
  margin: 0;
  font-family: var(--font-heading);
  font-size: 0.95rem;
}

.team-hero-link a {
  color: var(--color-bordo);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
  transition: border-color 0.15s ease;
}

.team-hero-link a:hover {
  border-bottom-color: var(--color-amber);
}

.team-hero-link a:focus-visible {
  outline: 2px solid var(--color-bordo);
  outline-offset: 4px;
  border-radius: 2px;
}

@media (max-width: 480px) {
  .team-page {
    padding: 5rem 1rem 3rem;
  }

  .team-hero {
    margin-bottom: 2rem;
  }

  .team-hero h1 {
    font-size: 1.75rem;
  }

  .team-hero-intro {
    font-size: 0.95rem;
  }
}
</style>
