<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useI18n, type Locale } from '@/composables/useI18n'

const { locale, locales, rememberLocale } = useI18n()
const route = useRoute()
const router = useRouter()

const labels: Record<string, string> = { en: 'EN', ru: 'RU', pt: 'PT' }

const LANG_PREFIX = /^\/(en|ru|pt)(?=\/|$)/

function switchLocale(l: Locale) {
  if (l === locale.value) return
  rememberLocale(l)

  // Strip any existing lang prefix from the current path.
  const stripped = route.path.replace(LANG_PREFIX, '') || '/'

  // EN → root (`/`) or unprefixed (`/privacy`).
  // RU/PT → `/<lang>` or `/<lang>/<rest>`.
  const newPath = l === 'en' ? stripped : `/${l}${stripped === '/' ? '' : stripped}`

  router.push(newPath)
}
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
      @click="switchLocale(l)"
    >
      {{ labels[l] }}
    </button>
  </div>
</template>

<style scoped>
.lang-btn {
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-muted);
  cursor: pointer;
  transition: all 0.15s ease;
  min-width: 36px;
  min-height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 768px) {
  .lang-btn {
    font-size: 0.8rem;
    padding: 0.35rem 0.65rem;
    min-width: 44px;
    min-height: 44px;
  }
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
