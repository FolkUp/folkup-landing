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
      <h1>Условия использования</h1>
      <p><strong>Последнее обновление:</strong> март 2026</p>

      <h2>Принятие условий</h2>
      <p>Используя folkup.app, вы соглашаетесь с данными условиями. Если вы не согласны, пожалуйста, не используйте сайт.</p>

      <h2>Контент</h2>
      <p>Весь контент энциклопедий предоставляется в информационных целях. Несмотря на стремление к точности, мы не можем гарантировать полноту или актуальность всей информации.</p>

      <h2>Интеллектуальная собственность</h2>
      <p>Название FolkUp, логотип и брендовые материалы принадлежат FolkUp. Лицензирование контента энциклопедий зависит от проекта — подробности на страницах отдельных проектов.</p>

      <h2>Правила поведения</h2>
      <p>Вы можете свободно просматривать и делиться нашим контентом. Запрещены: автоматический сбор данных, коммерческое распространение без разрешения, а также любое использование, создающее ложное впечатление связи с FolkUp.</p>

      <h2>Отказ от ответственности</h2>
      <p>FolkUp предоставляется «как есть» без каких-либо гарантий. Мы не несём ответственности за любой ущерб, возникший в результате использования нашего контента.</p>

      <h2>Изменения</h2>
      <p>Мы можем обновить эти условия в любое время. Продолжение использования сайта означает принятие обновлённых условий.</p>

      <h2>Контакты</h2>
      <p>По вопросам: <a href="mailto:legal@folkup.app">legal@folkup.app</a></p>
    </article>

    <article v-else-if="locale === 'pt'">
      <h1>Termos de Utilização</h1>
      <p><strong>Última atualização:</strong> março de 2026</p>

      <h2>Aceitação</h2>
      <p>Ao aceder ao folkup.app, concorda com estes termos. Se não concordar, por favor não utilize o site.</p>

      <h2>Conteúdo</h2>
      <p>Todo o conteúdo enciclopédico é fornecido para fins informativos. Embora nos esforcemos pela precisão, não podemos garantir que toda a informação esteja completa ou atualizada.</p>

      <h2>Propriedade intelectual</h2>
      <p>O nome FolkUp, logótipo e materiais da marca são propriedade do FolkUp. O licenciamento do conteúdo enciclopédico varia por projeto — consulte as páginas dos projetos individuais para detalhes.</p>

      <h2>Conduta do utilizador</h2>
      <p>Pode navegar e partilhar o nosso conteúdo livremente. É proibido: recolha automatizada de dados, redistribuição comercial sem permissão, ou qualquer utilização que represente falsamente uma afiliação com o FolkUp.</p>

      <h2>Isenção de responsabilidade</h2>
      <p>O FolkUp é fornecido "tal como está" sem garantias de qualquer tipo. Não somos responsáveis por quaisquer danos decorrentes da utilização do nosso conteúdo.</p>

      <h2>Alterações</h2>
      <p>Podemos atualizar estes termos a qualquer momento. A utilização contínua constitui aceitação dos termos atualizados.</p>

      <h2>Contacto</h2>
      <p>Para questões: <a href="mailto:legal@folkup.app">legal@folkup.app</a></p>
    </article>

    <article v-else>
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
