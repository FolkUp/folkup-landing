<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <SiteHeader :visible="true" />
  <main class="legal-page">
    <article>
      <h1>Terms of Use</h1>
      <p><strong>Last updated:</strong> March 2026</p>

      <h2>Acceptance</h2>
      <p>By accessing folkup.app, you agree to these terms. If you disagree, please do not use the site.</p>

      <h2>Content</h2>
      <p>All encyclopedia content is provided for informational purposes. While we strive for accuracy, we cannot guarantee that all information is complete or up-to-date.</p>

      <h2>Intellectual property</h2>
      <p>The FolkUp name, logo, and brand assets are owned by FolkUp. Encyclopedia content licensing varies by project — see individual project pages for details.</p>

      <h2>User conduct</h2>
      <p>You may browse and share our content freely. Automated scraping, commercial redistribution without permission, or any use that misrepresents affiliation with FolkUp is prohibited.</p>

      <h2>Disclaimer</h2>
      <p>FolkUp is provided "as is" without warranties of any kind. We are not liable for any damages arising from the use of our content.</p>

      <h2>Changes</h2>
      <p>We may update these terms at any time. Continued use constitutes acceptance of the updated terms.</p>

      <h2>Contact</h2>
      <p>For questions: <a href="mailto:legal@folkup.app">legal@folkup.app</a></p>
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
