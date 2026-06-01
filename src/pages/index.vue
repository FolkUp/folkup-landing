<script setup lang="ts">
import { ref } from 'vue'
import { useStickyHeader } from '@/composables/useStickyHeader'
import { useFadeIn } from '@/composables/useFadeIn'
import SiteHeader from '@/components/SiteHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import MissionSection from '@/components/MissionSection.vue'
import TrilogySection from '@/components/TrilogySection.vue'
import DeclHeroSection from '@/components/DeclHeroSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
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
    <MissionSection />
    <TrilogySection />
    <DeclHeroSection />
    <ProjectsSection />
    <ProLabSection />
    <FrameworkSection />
    <TeamSection />
    <AnchorsSection />
  </main>
  <SiteFooter />
</template>
