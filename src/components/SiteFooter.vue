<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { homePage } from '@/content/pages'
import { resolveLocalized } from '@/content/types'
import type { FooterSection as FooterSectionType, SupportSection as SupportSectionType } from '@/content/types'
import LangToggle from './LangToggle.vue'

const { locale } = useI18n()

// LAND-007 (B2b): read from typed content layer instead of locale JSONs.
// Footer pulls from two manifest sections:
//   - `footer` (endorsement, legal links)
//   - `support` (dedication line, currently rendered in the footer)
const footerSection = homePage.sections.find((s) => s.type === 'footer') as FooterSectionType | undefined
if (!footerSection) throw new Error('Footer section missing from homePage manifest')
const footer = footerSection

const supportSection = homePage.sections.find((s) => s.type === 'support') as SupportSectionType | undefined
if (!supportSection) throw new Error('Support section missing from homePage manifest (needed for dedication)')
const support = supportSection

const dedication = computed(() => resolveLocalized(support.dedication, locale.value) ?? '')
const endorsement = computed(() => resolveLocalized(footer.endorsement, locale.value) ?? '')

// Locale-aware href: footer.links manifest uses generic '/privacy' etc;
// prefix with current locale so /ru users go to /ru/privacy (Phase 2 prerendered),
// not /privacy (nginx 301 → docs.folkup.app/legal/* off-site, English content).
const links = computed(() =>
  footer.links.map((link) => ({
    id: link.id,
    label: resolveLocalized(link.label, locale.value) ?? '',
    href: `/${locale.value}${link.href}`,
  })),
)
</script>

<template>
  <footer class="site-footer" role="contentinfo">
    <p class="dedication">{{ dedication }}</p>
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="footer-logo">FolkUp</span>
        <p class="footer-endorsement">{{ endorsement }}</p>
      </div>
      <nav class="footer-nav" aria-label="Legal">
        <router-link
          v-for="link in links"
          :key="link.id"
          :to="link.href"
        >{{ link.label }}</router-link>
      </nav>
      <div class="footer-social">
        <a href="https://t.me/+FKSLu1k3U5IyODZi" target="_blank" rel="noopener noreferrer" aria-label="Telegram">Telegram</a>
        <a href="https://github.com/FolkUp" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
        <a href="https://habr.com/ru/users/anklem/" target="_blank" rel="noopener noreferrer" aria-label="Habr">Habr</a>
      </div>
      <LangToggle />
    </div>
  </footer>
</template>

<style scoped>
.dedication {
  font-style: italic;
  font-size: 0.875rem;
  color: var(--color-muted);
  text-align: center;
  padding: 3rem 1rem 1.5rem;
  margin: 0;
  max-width: 960px;
  margin-inline: auto;
}

.site-footer {
  border-top: 1px solid var(--color-border);
  padding: 3rem 1.5rem;
}

.footer-inner {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: flex-start;
}

.footer-brand {
  flex: 1;
  min-width: 200px;
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
}

.footer-nav {
  display: flex;
  gap: 1.25rem;
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
  gap: 1rem;
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
</style>
