<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import SettingsPanel from './SettingsPanel.vue'

defineProps<{ visible: boolean }>()

const { t, locale } = useI18n()

/**
 * Locale-aware home URL + nav anchors.
 *
 * Cont +42 fix 2026-06-30: previously logo + nav used `#hero` / `#trilogy`
 * fragment anchors only. На главной (/ru, /pt, /) работало через смooth scroll;
 * на subroutes (/ru/services, /ru/projects) клики уходили в никуда — нет
 * таких section IDs. Логотип не возвращал на главную.
 *
 * Fix: nav links теперь absolute paths с anchor. На главной → smooth scroll
 * (browser native behavior). На subroute → full navigation к home + scroll.
 */
const homeUrl = computed(() => (locale.value === 'en' ? '/' : `/${locale.value}`))
function navAnchor(anchor: string) {
  return homeUrl.value + anchor
}

// T4 FIX-2 SITE-TEAM-001 (Andrey ratified Q5=B via Iskra S295-12 2026-08-23):
// navTeam → /team on all routes (locale-aware) instead of fragment anchor #team.
// Anchor pattern reserved для navProjects (still page-level scroll target).
const teamUrl = computed(() => (locale.value === 'en' ? '/team' : `/${locale.value}/team`))

// S301-09 §2 Тикет 2 P1 fix (Iskra Vier-Augen 2026-08-24 cont+8 S8SCOOP):
// Locale-aware books.folkup.life URL per S301-08 LOCALE-DEFAULTS-1 table:
// landing EN default → portal /en · landing /ru → portal / · landing /pt → portal /pt · landing /de → portal /de.
// Раньше hardcoded https://books.folkup.life → португалец с /pt уходил в русскую библиотеку.
const booksUrl = computed(() => {
  const lang = locale.value
  if (lang === 'ru') return 'https://books.folkup.life/'
  if (lang === 'en') return 'https://books.folkup.life/en'
  return `https://books.folkup.life/${lang}`
})

/**
 * Hamburger open state for mobile viewports. Phase 4 P1 SiteHeader v3:
 *
 * v1 (Phase 4 P0, 2026-06-01): used native <details>/<summary> hamburger,
 * which solved mobile overflow but introduced a desktop+tablet-768 regression
 * — <details>'s default layout box contributed ~142px of scrollWidth even
 * when summary was display:none. `display: contents` workaround didn't
 * resolve it cleanly across viewports (Vue scoped CSS interaction with the
 * :not([open]) parent selector also got stripped).
 *
 * v3 (Phase 4 P1, 2026-06-01): plain button + reactive ref. Simpler, no UA
 * quirks, scoped-CSS-friendly. Hamburger is visible on mobile only (CSS
 * media-query hides it ≥768px); the nav is always rendered at desktop and
 * conditionally rendered on mobile via the `.nav--open` class.
 */
const navOpen = ref(false)
function toggleNav() {
  navOpen.value = !navOpen.value
}
function closeNav() {
  navOpen.value = false
}
</script>

<template>
  <header
    class="site-header"
    :class="{ visible }"
    role="banner"
  >
    <div class="header-inner">
      <a :href="homeUrl" class="header-logo" aria-label="FolkUp">
        <img
          src="/images/brand/folkup-mark.svg"
          alt=""
          width="48"
          height="48"
          decoding="async"
          fetchpriority="high"
        />
      </a>
      <button
        type="button"
        class="nav-toggle"
        :aria-expanded="navOpen"
        aria-label="Menu"
        aria-controls="primary-nav"
        @click="toggleNav"
      >
        ❦
      </button>
      <nav
        id="primary-nav"
        class="header-nav"
        :class="{ 'header-nav--open': navOpen }"
        aria-label="Main navigation"
      >
        <a :href="booksUrl" @click="closeNav">{{ t('navBooks') }}</a>
        <a :href="navAnchor('#projects')" @click="closeNav">{{ t('navProjects') }}</a>
        <a href="https://declaration.folkup.app" @click="closeNav">{{ t('navDeclaration') }}</a>
        <a :href="teamUrl" @click="closeNav">{{ t('navTeam') }}</a>
      </nav>
      <SettingsPanel />
    </div>
  </header>
</template>

<style scoped>
/* Per Андрей mandate 2026-06-10: шапка с логотипом + переключателями
   доступна сразу, не только после прокрутки. Always-visible header. */
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  min-width: 44px;
  min-height: 44px;
  border-radius: 4px;
}

.header-logo img {
  height: clamp(36px, 5vh, 48px);
  width: auto;
  display: block;
}

.header-logo:focus-visible {
  outline: 2px solid var(--color-bordo);
  outline-offset: 2px;
}

.nav-toggle {
  margin-left: auto;
  cursor: pointer;
  font-family: var(--font-heading), Georgia, serif;
  font-size: 1.35rem;
  line-height: 1;
  color: var(--color-bordo);
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  min-width: 44px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  transition: color 0.15s ease, background 0.15s ease;
}

.nav-toggle:hover {
  color: var(--color-bordo-hover);
  background: var(--color-surface);
}

.nav-toggle:focus-visible {
  outline: 2px solid var(--color-bordo);
  outline-offset: 2px;
}

/* Mobile-first nav: hidden by default, dropdown when --open. */
.header-nav {
  display: none;
  flex-direction: column;
  gap: 0.25rem;
  position: absolute;
  top: 100%;
  right: 1rem;
  margin-top: 0.5rem;
  padding: 0.75rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  min-width: 200px;
  box-shadow: 0 4px 12px var(--color-shadow);
  animation: ink-reveal 220ms ease-out;
}

.header-nav--open {
  display: flex;
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

@media (min-width: 768px) {
  .header-inner {
    padding: 0.75rem 1.5rem;
    gap: 1.5rem;
  }

  .nav-toggle {
    display: none;
  }

  .header-nav {
    display: flex;
    flex-direction: row;
    position: static;
    margin-top: 0;
    margin-left: auto;
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
