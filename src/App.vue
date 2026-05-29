<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'
import { useI18n } from '@/composables/useI18n'

const { locale } = useI18n()

// Per-route <html lang="…"> auto-set. Reactive: re-runs whenever
// `locale` (derived from `useRoute().params.lang`) changes.
useHead({
  htmlAttrs: {
    lang: () => locale.value,
  },
})
</script>

<template>
  <RouterView />
</template>
