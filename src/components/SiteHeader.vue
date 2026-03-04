<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'
import LangToggle from './LangToggle.vue'

defineProps<{ visible: boolean }>()

const { t } = useI18n()
</script>

<template>
  <header
    class="site-header"
    :class="{ visible }"
    role="banner"
  >
    <div class="header-inner">
      <a href="#hero" class="header-logo" aria-label="FolkUp">FolkUp</a>
      <nav class="header-nav" aria-label="Main navigation">
        <a href="#projects">{{ t('navProjects') }}</a>
        <a href="#support">{{ t('navSupport') }}</a>
      </nav>
      <LangToggle />
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: color-mix(in srgb, var(--color-bg) 85%, transparent);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-border);
  transform: translateY(-100%);
  transition: transform 0.3s ease;
}

.site-header.visible {
  transform: translateY(0);
}

.header-inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.header-logo {
  font-family: var(--font-brand);
  font-size: 1.3rem;
  color: var(--color-bordo);
  text-decoration: none;
}

.header-nav {
  display: flex;
  gap: 1.25rem;
  margin-left: auto;
}

.header-nav a {
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-muted);
  text-decoration: none;
  padding: 0.5rem 0;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  transition: color 0.15s ease;
}

.header-nav a:hover {
  color: var(--color-bordo);
}
</style>
