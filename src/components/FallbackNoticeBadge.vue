<script setup lang="ts">
// Iskra S308-10 §1 item 1 (2026-08-31 S1UMBR cont+5): honest one-liner shown
// above a block/page when the guest's language is missing и content falls back
// (typically к EN). Message text lives в i18n key `fallbackNotice` × 4 langs.
// Component is deliberately unstyled beyond minimal — small, muted, non-alarm,
// prefaces content without displacing focus. Auto-hides once translation lands.
defineProps<{
  message: string
}>()
</script>

<template>
  <div class="fallback-notice" role="note">
    <span aria-hidden="true" class="fallback-notice__mark">·</span>
    <span class="fallback-notice__text">{{ message }}</span>
  </div>
</template>

<style scoped>
.fallback-notice {
  display: inline-flex;
  align-items: baseline;
  gap: 0.4rem;
  margin: 0 0 0.75rem;
  padding: 0.35rem 0.6rem;
  font-family: var(--font-body, 'EB Garamond', Georgia, serif);
  font-size: 0.85rem;
  line-height: 1.4;
  color: var(--color-text-muted, #6b6259);
  background: color-mix(in oklab, var(--color-amber, #E8AD4A) 12%, transparent);
  border-left: 2px solid color-mix(in oklab, var(--color-amber, #E8AD4A) 60%, transparent);
  border-radius: 3px;
}

.fallback-notice__mark {
  color: var(--color-amber, #E8AD4A);
  font-weight: 600;
}

.fallback-notice__text {
  font-style: italic;
}
</style>
