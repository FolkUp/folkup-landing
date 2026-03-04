<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <SiteHeader :visible="true" />
  <main class="legal-page">
    <article>
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> March 2026</p>

      <h2>Who we are</h2>
      <p>FolkUp is an independent project that creates free encyclopedias. This website is operated at folkup.app.</p>

      <h2>What data we collect</h2>
      <p>We collect anonymous usage statistics using a privacy-focused, cookie-free analytics tool hosted on our own infrastructure. No personal data, cookies, or IP addresses are stored.</p>

      <h2>Cookies</h2>
      <p>We store your language preference in localStorage (not a cookie). No tracking cookies are used.</p>

      <h2>Third parties</h2>
      <p>We do not share any data with third parties. Fonts are self-hosted. No external tracking scripts are loaded.</p>

      <h2>Your rights</h2>
      <p>Under GDPR, you have the right to access, rectify, or delete your personal data. Since we do not collect personal data, there is nothing to access or delete.</p>

      <h2>Contact</h2>
      <p>For privacy-related inquiries: <a href="mailto:privacy@folkup.app">privacy@folkup.app</a></p>
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
</style>
