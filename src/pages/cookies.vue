<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'

const { locale } = useI18n()
</script>

<template>
  <SiteHeader :visible="true" />
  <main class="legal-page">
    <article v-if="locale === 'ru'">
      <h1>Политика в отношении cookie</h1>
      <p><strong>Последнее обновление:</strong> март 2026</p>

      <h2>Используем ли мы cookie?</h2>
      <p>Нет. folkup.app не использует cookie-файлы — ни для отслеживания, ни для рекламы, ни для аналитики.</p>

      <h2>localStorage</h2>
      <p>Мы сохраняем один элемент в localStorage вашего браузера: ваши языковые предпочтения (<code>folkup-lang</code>). Это не cookie-файл и не передаётся на сервер. Вы можете очистить его в любое время через настройки браузера.</p>

      <h2>Аналитика</h2>
      <p>Мы можем использовать инструмент аналитики без cookie-файлов, ориентированный на конфиденциальность, размещённый на нашей собственной инфраструктуре. При активации он не использует cookie, не отслеживает персональные данные и не сохраняет IP-адреса. По состоянию на март 2026 года аналитика на этой странице ещё не активирована.</p>

      <h2>Cookie третьих сторон</h2>
      <p>Мы не загружаем сторонние скрипты, устанавливающие cookie. Все шрифты размещены на нашем сервере. Виджеты социальных сетей и рекламные сети не используются.</p>

      <h2>Контакты</h2>
      <p>По вопросам нашей политики в отношении cookie: <a href="mailto:privacy@folkup.app">privacy@folkup.app</a></p>
    </article>

    <article v-else-if="locale === 'pt'">
      <h1>Política de Cookies</h1>
      <p><strong>Última atualização:</strong> março de 2026</p>

      <h2>Utilizamos cookies?</h2>
      <p>Não. O folkup.app não utiliza cookies de qualquer tipo — nem para rastreio, nem para publicidade, nem para análise.</p>

      <h2>localStorage</h2>
      <p>Armazenamos um item no localStorage do seu navegador: a sua preferência de idioma (<code>folkup-lang</code>). Isto não é um cookie e não é transmitido a nenhum servidor. Pode limpá-lo a qualquer momento nas definições do navegador.</p>

      <h2>Análise</h2>
      <p>Podemos utilizar uma ferramenta de análise sem cookies, focada na privacidade, alojada na nossa própria infraestrutura. Quando ativa, não utiliza cookies, não rastreia dados pessoais e não armazena endereços IP. Em março de 2026, a análise ainda não está ativa nesta página.</p>

      <h2>Cookies de terceiros</h2>
      <p>Não carregamos scripts de terceiros que definam cookies. Todas as fontes tipográficas são auto-alojadas. Não são utilizados widgets de redes sociais nem redes de publicidade.</p>

      <h2>Contacto</h2>
      <p>Para questões sobre a nossa política de cookies: <a href="mailto:privacy@folkup.app">privacy@folkup.app</a></p>
    </article>

    <article v-else>
      <h1>Cookie Policy</h1>
      <p><strong>Last updated:</strong> March 2026</p>

      <h2>Do we use cookies?</h2>
      <p>No. folkup.app does not use cookies of any kind — neither for tracking, nor for advertising, nor for analytics.</p>

      <h2>localStorage</h2>
      <p>We store one item in your browser's localStorage: your language preference (<code>folkup-lang</code>). This is not a cookie and is not transmitted to any server. You can clear it at any time via your browser settings.</p>

      <h2>Analytics</h2>
      <p>We may use a cookie-free, privacy-focused analytics tool hosted on our own infrastructure. When active, it does not use cookies, does not track personal data, and does not store IP addresses. As of March 2026, analytics are not yet enabled on this landing page.</p>

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
