<script setup lang="ts">
import { ref } from 'vue'
import { useStickyHeader } from '@/composables/useStickyHeader'
import { useFadeIn } from '@/composables/useFadeIn'
import SiteHeader from '@/components/SiteHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import MissionSection from '@/components/MissionSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import FrameworkSection from '@/components/FrameworkSection.vue'
import TeamSection from '@/components/TeamSection.vue'
import StatsSection from '@/components/StatsSection.vue'
import RoadmapSection from '@/components/RoadmapSection.vue'
import SupportSection from '@/components/SupportSection.vue'
import SiteFooter from '@/components/SiteFooter.vue'

const heroEl = ref<HTMLElement | null>(null)
const { visible: headerVisible } = useStickyHeader(() => heroEl.value)
useFadeIn()
</script>

<template>
  <SiteHeader :visible="headerVisible" />
  <main>
    <div ref="heroEl">
      <HeroSection />
    </div>
    <MissionSection />
    <ProjectsSection />
    <FrameworkSection />
    <TeamSection />
    <StatsSection />
    <RoadmapSection />
    <SupportSection />
  </main>
  <SiteFooter />
</template>
