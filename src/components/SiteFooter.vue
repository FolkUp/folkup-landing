<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { homePage } from '@/content/pages'
import { resolveLocalized } from '@/content/types'
import type { FooterSection as FooterSectionType } from '@/content/types'

const { locale } = useI18n()

// LAND-007 (B2b): read from typed content layer instead of locale JSONs.
// Phase-4-P1 (2026-06-01): dedication line was removed from the landing
// per concept v1 — it now lives only on the (future) /team/people/andrey page.
// Footer renders endorsement + legal links + social.
const footerSection = homePage.sections.find((s) => s.type === 'footer') as FooterSectionType | undefined
if (!footerSection) throw new Error('Footer section missing from homePage manifest')
const footer = footerSection

const endorsement = computed(() => resolveLocalized(footer.endorsement, locale.value) ?? '')

// Locale-aware href: footer.links manifest uses generic '/privacy' etc;
// prefix with current locale so /ru users go to /ru/privacy (Phase 2 prerendered),
// not /privacy (nginx 301 → docs.folkup.app/legal/* off-site, English content).
//
// Cont +42 fix 2026-06-30: only prefix locale если link starts с '/'.
// Раньше mailto:anklem@folkup.app превращался в /rumailto:anklem@folkup.app
// — broken link для «Написать нам». Now: external/mailto/tel skip prefix,
// rendered as plain <a> instead of router-link.
const links = computed(() =>
  footer.links.map((link) => {
    const isInternal = link.href.startsWith('/')
    return {
      id: link.id,
      label: resolveLocalized(link.label, locale.value) ?? '',
      href: isInternal ? `/${locale.value}${link.href}` : link.href,
      isInternal,
    }
  }),
)

const licenseLabel = computed(() => {
  const l = locale.value
  if (l === 'ru') return 'Контент'
  if (l === 'pt') return 'Conteúdo'
  return 'Content'
})

// Ecosystem dropdown label (Batch D · ECOSYSTEM-NAV-1 · Iskra TIKET-06 §3).
// Native <details> с open-upward CSS (Andrey requirement — не уходит за viewport bottom).
const ecosystemLabel = computed(() => {
  const l = locale.value
  if (l === 'ru') return 'Наши проекты'
  if (l === 'pt') return 'Nossos projetos'
  if (l === 'de') return 'Unsere Projekte'
  return 'Our projects'
})
</script>

<template>
  <footer class="site-footer" role="contentinfo">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="footer-logo">FolkUp</span>
        <p class="footer-endorsement">{{ endorsement }}</p>
      </div>
      <nav class="footer-nav" aria-label="Legal">
        <template v-for="link in links" :key="link.id">
          <router-link
            v-if="link.isInternal"
            :to="link.href"
          >{{ link.label }}</router-link>
          <a
            v-else
            :href="link.href"
          >{{ link.label }}</a>
        </template>
      </nav>
      <details class="footer-ecosystem">
        <summary class="footer-ecosystem-toggle">{{ ecosystemLabel }}</summary>
        <ul class="footer-ecosystem-list">
          <li><a href="https://books.folkup.life" target="_blank" rel="noopener noreferrer">Books</a></li>
          <li><a href="https://declaration.folkup.app" target="_blank" rel="noopener noreferrer">Declaration</a></li>
          <li><a href="https://padel.folkup.fit" target="_blank" rel="noopener noreferrer">Padel</a></li>
          <li><a href="https://setubal.folkup.city" target="_blank" rel="noopener noreferrer">Setúbal</a></li>
          <li><a href="https://cogumelos.folkup.fit" target="_blank" rel="noopener noreferrer">Cogumelos</a></li>
          <li><a href="https://aquarium.folkup.city" target="_blank" rel="noopener noreferrer">Aquarium</a></li>
          <li><a href="https://dialup.folkup.city" target="_blank" rel="noopener noreferrer">Dialup</a></li>
          <li><a href="https://tarot.folkup.life" target="_blank" rel="noopener noreferrer">Tarot</a></li>
          <li><a href="https://lucerna.folkup.app" target="_blank" rel="noopener noreferrer">Lucerna</a></li>
          <li><a href="https://underground.folkup.life" target="_blank" rel="noopener noreferrer">Underground</a></li>
        </ul>
      </details>
      <div class="footer-social">
        <a href="https://t.me/+FKSLu1k3U5IyODZi" target="_blank" rel="noopener noreferrer" aria-label="Telegram">Telegram</a>
        <a href="https://github.com/FolkUp" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
      </div>
    </div>
    <p class="footer-license">
      &copy; 2026 FolkUp contributors &middot; {{ licenseLabel }}:
      <a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license">CC BY-SA 4.0</a>
    </p>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--color-border);
  padding: 3rem 1.5rem;
}

.footer-inner {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: flex-start;
}

.footer-inner > * {
  min-width: 0;
}

.footer-brand {
  flex: 1 1 100%;
  min-width: 0;
  overflow-wrap: break-word;
}

@media (min-width: 768px) {
  .footer-inner {
    gap: 2rem;
  }

  .footer-brand {
    flex: 1;
    min-width: 200px;
  }
}

.footer-logo {
  font-family: var(--font-brand);
  font-size: 1.3rem;
  color: var(--color-bordo);
}

.footer-endorsement {
  font-size: 0.8rem;
  color: var(--color-muted);
  margin-top: 0.5rem;
  overflow-wrap: break-word;
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
}

.footer-nav a {
  font-size: 0.85rem;
  color: var(--color-muted);
  text-decoration: none;
  padding: 0.5rem 0;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  transition: color 0.15s ease;
}

.footer-nav a:hover {
  color: var(--color-bordo);
}

.footer-social {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
}

.footer-social a {
  font-size: 0.85rem;
  color: var(--color-muted);
  text-decoration: none;
  padding: 0.5rem 0;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  transition: color 0.15s ease;
}

.footer-social a:hover {
  color: var(--color-bordo);
}

/* Ecosystem dropdown (Batch D · Iskra TIKET-06 §3).
 * Native <details> с open-upward positioning per Andrey requirement — content
 * поднимается вверх при клике, не уходит за viewport bottom. z-index >= 10
 * поверх main content. max-height + overflow-y fallback для tall lists. */
.footer-ecosystem {
  position: relative;
}

.footer-ecosystem-toggle {
  font-size: 0.85rem;
  color: var(--color-muted);
  cursor: pointer;
  padding: 0.5rem 0;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  list-style: none;
  transition: color 0.15s ease;
}

.footer-ecosystem-toggle::-webkit-details-marker { display: none; }

.footer-ecosystem-toggle::before {
  content: '▴';
  margin-right: 0.4rem;
  font-size: 0.75rem;
  color: var(--color-bordo);
  transition: transform 0.15s ease;
}

.footer-ecosystem[open] .footer-ecosystem-toggle::before {
  content: '▾';
}

.footer-ecosystem-toggle:hover {
  color: var(--color-bordo);
}

.footer-ecosystem-list {
  position: absolute;
  bottom: 100%;
  left: 0;
  margin: 0 0 0.5rem;
  padding: 0.5rem 0;
  list-style: none;
  min-width: 180px;
  max-height: 60vh;
  overflow-y: auto;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.08);
  z-index: 20;
}

.footer-ecosystem-list li {
  margin: 0;
}

.footer-ecosystem-list a {
  display: block;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  color: var(--color-muted);
  text-decoration: none;
  min-height: 44px;
  display: flex;
  align-items: center;
  transition: background 0.15s ease, color 0.15s ease;
}

.footer-ecosystem-list a:hover,
.footer-ecosystem-list a:focus-visible {
  background: var(--color-surface);
  color: var(--color-bordo);
  outline: none;
}

.footer-license {
  max-width: 960px;
  margin: 1.5rem auto 0;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
  font-size: 0.8rem;
  color: var(--color-muted);
  text-align: center;
}

.footer-license a {
  color: var(--color-muted);
  text-decoration: underline;
}

.footer-license a:hover {
  color: var(--color-bordo);
}
</style>
