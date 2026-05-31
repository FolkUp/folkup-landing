<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'

/**
 * 404 page — locale-neutral.
 *
 * VPS nginx serves `dist/404.html` for any unmatched URL via try_files
 * fallback. Because the request URL can be in any language, we render
 * English with explicit links to each localised home rather than trying
 * to detect locale from a non-existent route param. Keeps the page useful
 * regardless of where the user landed.
 *
 * Generated at /404 by vite-ssg → dist/404.html (Vite/SSG convention).
 */
</script>

<template>
  <a href="#main" class="skip-to-content">Skip to content</a>
  <SiteHeader :visible="true" />
  <main id="main" class="not-found">
    <article>
      <h1>404 — Page not found</h1>
      <p class="lede">The page you're looking for doesn't exist or has moved.</p>
      <p class="multilingual">
        <span lang="ru">Страница не найдена.</span>
        <span lang="pt">Página não encontrada.</span>
      </p>
      <nav aria-label="Return to homepage">
        <p>
          <a href="/">English home</a>
          <span aria-hidden="true"> · </span>
          <a href="/ru" lang="ru">Русская версия</a>
          <span aria-hidden="true"> · </span>
          <a href="/pt" lang="pt">Versão portuguesa</a>
        </p>
      </nav>
    </article>
  </main>
  <SiteFooter />
</template>

<style scoped>
.not-found {
  max-width: 680px;
  margin: 0 auto;
  padding: 6rem 1.5rem 4rem;
  text-align: center;
}

.not-found h1 {
  font-family: var(--font-heading);
  font-size: 2rem;
  color: var(--color-bordo);
  margin-bottom: 1rem;
}

.not-found .lede {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.not-found .multilingual {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-muted, var(--color-text));
  margin-bottom: 2rem;
}

.not-found .multilingual span + span {
  margin-left: 0.75rem;
}

.not-found nav p {
  font-size: 1rem;
  line-height: 1.75;
}

.not-found a {
  color: var(--color-bordo);
}
</style>
