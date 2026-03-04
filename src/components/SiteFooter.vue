<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'
import LangToggle from './LangToggle.vue'

const { t } = useI18n()
</script>

<template>
  <footer class="site-footer" role="contentinfo">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="footer-logo">FolkUp</span>
        <p class="footer-endorsement">{{ t('footerEndorsement') }}</p>
      </div>
      <nav class="footer-nav" aria-label="Legal">
        <router-link to="/privacy">{{ t('footerPrivacy') }}</router-link>
        <router-link to="/terms">{{ t('footerTerms') }}</router-link>
        <router-link to="/cookies">{{ t('footerCookies') }}</router-link>
      </nav>
      <div class="footer-social">
        <a href="https://t.me/folkup" target="_blank" rel="noopener noreferrer" aria-label="Telegram">Telegram</a>
        <a href="https://instagram.com/folkup.app" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
        <a href="https://ko-fi.com/folkup" target="_blank" rel="noopener noreferrer" aria-label="Ko-fi">Ko-fi</a>
      </div>
      <LangToggle />
    </div>
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
