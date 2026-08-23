<script setup lang="ts">
import { ref } from 'vue'
import { useStickyHeader } from '@/composables/useStickyHeader'
import { useFadeIn } from '@/composables/useFadeIn'
import SiteHeader from '@/components/SiteHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import MissionSection from '@/components/MissionSection.vue'
import DeclHeroSection from '@/components/DeclHeroSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
// TrilogyVisualSection removed cont+2 per Andrey verdict item #4 «Три способа работы» section
// deletion (dublicate content с books section выше). Component file kept on disk
// (per canonical anti-fragility pattern) — no longer imported или rendered.
import ProLabSection from '@/components/ProLabSection.vue'
import FrameworkSection from '@/components/FrameworkSection.vue'
import TeamSection from '@/components/TeamSection.vue'
import AnchorsSection from '@/components/AnchorsSection.vue'
import SiteFooter from '@/components/SiteFooter.vue'

const heroEl = ref<HTMLElement | null>(null)
const { visible: headerVisible } = useStickyHeader(() => heroEl.value)
useFadeIn()
</script>

<template>
  <a href="#main" class="skip-to-content">Skip to content</a>
  <SiteHeader :visible="headerVisible" />
  <main id="main">
    <div ref="heroEl">
      <HeroSection />
    </div>
    <ProjectsSection section-id="books" />
    <MissionSection />
    <DeclHeroSection />
    <ProjectsSection section-id="projects" />
    <ProLabSection />
    <FrameworkSection />
    <TeamSection compact />
    <AnchorsSection />
  </main>
  <SiteFooter />
</template>
