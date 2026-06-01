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
      <details class="nav-wrapper">
        <summary class="nav-toggle" aria-label="Menu">❦</summary>
        <nav class="header-nav" aria-label="Main navigation">
          <a href="#projects">{{ t('navProjects') }}</a>
          <a href="#team">{{ t('navTeam') }}</a>
          <a href="#support">{{ t('navSupport') }}</a>
        </nav>
      </details>
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
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.header-logo {
  font-family: var(--font-brand);
  font-size: 1.3rem;
  color: var(--color-bordo);
  text-decoration: none;
}

.nav-wrapper {
  position: relative;
  margin-left: auto;
}

.nav-toggle {
  list-style: none;
  cursor: pointer;
  font-family: var(--font-heading), Georgia, serif;
  font-size: 1.35rem;
  line-height: 1;
  color: var(--color-bordo);
  padding: 0.5rem 0.75rem;
  min-width: 44px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  user-select: none;
  transition: color 0.15s ease, background 0.15s ease;
}

.nav-toggle::-webkit-details-marker {
  display: none;
}

.nav-toggle::marker {
  content: '';
}

.nav-toggle:hover {
  color: var(--color-bordo-hover);
  background: var(--color-surface);
}

.nav-toggle:focus-visible {
  outline: 2px solid var(--color-bordo);
  outline-offset: 2px;
}

.header-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: absolute;
  top: 100%;
  right: 0;
  left: auto;
  margin-top: 0.5rem;
  padding: 0.75rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  min-width: 200px;
  box-shadow: 0 4px 12px rgba(125, 68, 80, 0.08);
  animation: ink-reveal 220ms ease-out;
}

.header-nav a {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text);
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  border-left: 2px solid transparent;
  padding-left: calc(0.75rem - 2px);
  transition: color 0.15s ease, border-color 0.15s ease;
}

.header-nav a:hover {
  color: var(--color-bordo);
  border-left-color: var(--color-amber);
}

.header-nav a:focus-visible {
  outline: 2px solid var(--color-bordo);
  outline-offset: 2px;
}

@keyframes ink-reveal {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-wrapper:not([open]) .header-nav {
  display: none;
}

@media (min-width: 768px) {
  .header-inner {
    padding: 0.75rem 1.5rem;
    gap: 1.5rem;
  }

  .nav-toggle {
    display: none;
  }

  .header-nav {
    display: flex !important;
    flex-direction: row;
    position: static;
    margin-top: 0;
    padding: 0;
    background: transparent;
    border: none;
    border-radius: 0;
    min-width: 0;
    box-shadow: none;
    animation: none;
    gap: 1.25rem;
  }

  .header-nav a {
    font-family: var(--font-body);
    font-size: 0.85rem;
    color: var(--color-muted);
    padding: 0.5rem 0;
    min-height: 44px;
    border-left: none;
    padding-left: 0;
  }

  .header-nav a:hover {
    color: var(--color-bordo);
    border-left: none;
  }

  .header-nav a:focus-visible {
    outline: none;
    text-decoration: underline;
  }
}
</style>
