<script setup lang="ts">
import { ref } from 'vue'
import { useStickyHeader } from '@/composables/useStickyHeader'
import { useFadeIn } from '@/composables/useFadeIn'
import SiteHeader from '@/components/SiteHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
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
    <AboutSection />
    <ProjectsSection />
    <RoadmapSection />
    <SupportSection />
  </main>
  <SiteFooter />
</template>
