<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <SiteHeader :visible="true" />
  <main class="legal-page">
    <article>
      <h1>Cookie Policy</h1>
      <p><strong>Last updated:</strong> March 2026</p>

      <h2>Do we use cookies?</h2>
      <p>No. folkup.app does not use cookies of any kind — neither for tracking, nor for advertising, nor for analytics.</p>

      <h2>localStorage</h2>
      <p>We store one item in your browser's localStorage: your language preference (<code>folkup-lang</code>). This is not a cookie and is not transmitted to any server. You can clear it at any time via your browser settings.</p>

      <h2>Analytics</h2>
      <p>We use a cookie-free, privacy-focused analytics tool. It does not use cookies, does not track personal data, and does not store IP addresses. It is self-hosted on our infrastructure.</p>

      <h2>Third-party cookies</h2>
      <p>We do not load any third-party scripts that set cookies. All fonts are self-hosted. No social media widgets or advertising networks are used.</p>

      <h2>Contact</h2>
      <p>For questions about our cookie policy: <a href="mailto:privacy@folkup.app">privacy@folkup.app</a></p>
    </article>
  </main>
  <SiteFooter />
</template>

<style scoped>
.legal-page {
  max-width: 680px;
  margin: 0 auto;
  padding: 6rem 1.5rem 4rem;
}

.legal-page h1 {
  font-family: var(--font-heading);
  font-size: 2rem;
  color: var(--color-bordo);
  margin-bottom: 0.5rem;
}

.legal-page h2 {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  color: var(--color-text);
  margin: 2rem 0 0.75rem;
}

.legal-page p {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text);
}

.legal-page a {
  color: var(--color-bordo);
}

.legal-page code {
  font-size: 0.9em;
  background: var(--color-surface);
  padding: 0.15em 0.4em;
  border-radius: 3px;
}
</style>
