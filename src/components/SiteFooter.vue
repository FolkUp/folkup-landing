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
