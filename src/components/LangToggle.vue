<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { locale, setLocale, locales } = useI18n()

const labels: Record<string, string> = { en: 'EN', ru: 'RU', pt: 'PT' }
</script>

<template>
  <div class="flex gap-1" role="radiogroup" aria-label="Language">
    <button
      v-for="l in locales"
      :key="l"
      :aria-checked="locale === l"
      role="radio"
      class="lang-btn"
      :class="{ active: locale === l }"
      @click="setLocale(l)"
    >
      {{ labels[l] }}
    </button>
  </div>
</template>

<style scoped>
.lang-btn {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  padding: 0.35rem 0.65rem;
  border-radius: 4px;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-muted);
  cursor: pointer;
  transition: all 0.15s ease;
  min-width: 44px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.lang-btn:hover {
  border-color: var(--color-bordo);
  color: var(--color-bordo);
}

.lang-btn.active {
  background: var(--color-bordo);
  border-color: var(--color-bordo);
  color: #fff;
}
</style>
