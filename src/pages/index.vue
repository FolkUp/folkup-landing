<script setup lang="ts">
import { ref } from 'vue'
import { useStickyHeader } from '@/composables/useStickyHeader'
import { useFadeIn } from '@/composables/useFadeIn'
import SiteHeader from '@/components/SiteHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import MissionSection from '@/components/MissionSection.vue'
import NewsSection from '@/components/NewsSection.vue'
import DeclHeroSection from '@/components/DeclHeroSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
// TrilogyVisualSection removed cont+2 per Andrey verdict item #4 «Три способа работы» section
// deletion (dublicate content с books section выше). Component file kept on disk
// (per canonical anti-fragility pattern) — no longer imported или rendered.
//
// ProLabSection removed cont+7 S1ORCH per Iskra S319-03 §2 п.4 «Lucerna как медленная
// полка той же мастерской, не отдельный Pro Lab (снимаем стартап-словарь)».
// POPRAVKA-S319-03a §1 «энциклопедии — как есть, три живые карточки» — Lucerna
// не добавляется к grid; упоминание живёт в services block ниже и /services deep.
// Component file kept on disk per anti-fragility.
//
// FrameworkSection removed cont+7 S1ORCH per Iskra POPRAVKA-S319-03a §2 п.8
// «Platform снять или в одно честное предложение» + §1 п.7 «Multilingual by design:
// native-speaker checks — неправда для PT». Одно честное предложение о инфраструктуре
// уже есть в Mission body («Push для публикации, статус каждой статьи виден»).
// Component file kept on disk per anti-fragility.
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
    <NewsSection />
    <DeclHeroSection />
    <ProjectsSection section-id="projects" />
    <!-- ProLabSection removed cont+7 S1ORCH per Iskra S319-03 §2 п.4 «снимаем
         стартап-словарь». Lucerna живёт в /services deep + services block ниже. -->
    <!-- FrameworkSection removed cont+7 S1ORCH per Iskra POPRAVKA-S319-03a §2
         «Platform снять» — SaaS-речь + false-claim «native-speaker checks для PT». -->
    <TeamSection compact />
    <AnchorsSection />
  </main>
  <SiteFooter />
</template>
