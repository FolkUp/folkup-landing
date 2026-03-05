<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'

const { locale } = useI18n()
</script>

<template>
  <a href="#main" class="skip-to-content">Skip to content</a>
  <SiteHeader :visible="true" />
  <main id="main" class="legal-page">
    <article v-if="locale === 'ru'">
      <h1>Политика конфиденциальности</h1>
      <p><strong>Последнее обновление:</strong> март 2026</p>

      <h2>Кто мы</h2>
      <p>FolkUp — независимый проект, создающий бесплатные энциклопедии. Этот сайт работает на folkup.app.</p>

      <h2>Какие данные мы собираем</h2>
      <p>Мы можем собирать анонимную статистику использования с помощью инструмента аналитики, ориентированного на конфиденциальность, без файлов cookie, размещённого на нашей собственной инфраструктуре. При активации персональные данные, файлы cookie и IP-адреса не сохраняются. По состоянию на март 2026 года аналитика на этой странице ещё не активирована.</p>

      <h2>Файлы cookie</h2>
      <p>Мы сохраняем ваши языковые предпочтения в localStorage (это не cookie-файл). Отслеживающие cookie не используются.</p>

      <h2>Третьи стороны</h2>
      <p>Мы не передаём данные третьим лицам. Шрифты размещены на нашем сервере. Сторонние отслеживающие скрипты не загружаются.</p>

      <h2>Ваши права</h2>
      <p>В соответствии с GDPR вы имеете право на доступ, исправление или удаление ваших персональных данных. Поскольку мы не собираем персональные данные, нечего запрашивать или удалять.</p>

      <h2>Контакты</h2>
      <p>По вопросам конфиденциальности: <a href="mailto:privacy@folkup.app">privacy@folkup.app</a></p>
    </article>

    <article v-else-if="locale === 'pt'">
      <h1>Política de Privacidade</h1>
      <p><strong>Última atualização:</strong> março de 2026</p>

      <h2>Quem somos</h2>
      <p>O FolkUp é um projeto independente que cria enciclopédias gratuitas. Este site opera em folkup.app.</p>

      <h2>Que dados recolhemos</h2>
      <p>Podemos recolher estatísticas de utilização anónimas através de uma ferramenta de análise focada na privacidade, sem cookies, alojada na nossa própria infraestrutura. Quando ativa, não são armazenados dados pessoais, cookies ou endereços IP. Em março de 2026, a análise ainda não está ativa nesta página.</p>

      <h2>Cookies</h2>
      <p>Armazenamos a sua preferência de idioma no localStorage (não é um cookie). Não são utilizados cookies de rastreio.</p>

      <h2>Terceiros</h2>
      <p>Não partilhamos dados com terceiros. As fontes tipográficas são auto-alojadas. Não são carregados scripts de rastreio externos.</p>

      <h2>Os seus direitos</h2>
      <p>Ao abrigo do RGPD, tem o direito de aceder, retificar ou apagar os seus dados pessoais. Como não recolhemos dados pessoais, não há nada para aceder ou apagar.</p>

      <h2>Contacto</h2>
      <p>Para questões de privacidade: <a href="mailto:privacy@folkup.app">privacy@folkup.app</a></p>
    </article>

    <article v-else>
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> March 2026</p>

      <h2>Who we are</h2>
      <p>FolkUp is an independent project that creates free encyclopedias. This website is operated at folkup.app.</p>

      <h2>What data we collect</h2>
      <p>We may collect anonymous usage statistics using a privacy-focused, cookie-free analytics tool hosted on our own infrastructure. When active, no personal data, cookies, or IP addresses are stored. As of March 2026, analytics are not yet enabled on this landing page.</p>

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
