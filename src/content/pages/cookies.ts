import type { Page } from '../types'

/**
 * /cookies — Cookie Policy manifest.
 *
 * LAND-007 B2c: content extracted verbatim from the previous inline-Vue
 * implementation of `src/pages/cookies.vue` (HEAD a3f5f2a). Migration is
 * structural only — no copy edits.
 *
 * Note `code` tag is part of the localised content (the `folkup-lang`
 * localStorage key reference). The legal page CSS preserves `.legal-page code`
 * styling for this.
 */
export const cookiesPage: Page = {
  id: 'cookies',
  path: '/cookies',
  availableLangs: ['en', 'ru', 'pt'],
  meta: {
    title: {
      en: 'Cookie Policy — FolkUp',
      ru: 'Политика в отношении cookie — FolkUp',
      pt: 'Política de Cookies — FolkUp',
    },
    description: {
      en: 'FolkUp cookie policy: we use zero cookies — no tracking, no advertising, no analytics cookies. Only one localStorage entry for language preference.',
      ru: 'Политика FolkUp в отношении cookie: мы не используем cookie — ни для отслеживания, ни для рекламы, ни для аналитики. Только одна запись в localStorage для языковых настроек.',
      pt: 'Política de cookies da FolkUp: não utilizamos cookies — nem para rastreio, nem para publicidade, nem para análise. Apenas uma entrada em localStorage para a preferência de idioma.',
    },
    ogType: 'website',
    canonical: 'https://folkup.app/en/cookies',
  },
  sections: [
    {
      id: 'cookies-main',
      type: 'legal',
      schemaType: 'WebPage',
      title: {
        en: 'Cookie Policy',
        ru: 'Политика в отношении cookie',
        pt: 'Política de Cookies',
      },
      lastUpdated: {
        en: 'Last updated: March 2026',
        ru: 'Последнее обновление: март 2026',
        pt: 'Última atualização: março de 2026',
      },
      content: {
        en: `<h2>Do we use cookies?</h2>
<p>No. folkup.app does not use cookies of any kind — neither for tracking, nor for advertising, nor for analytics.</p>

<h2>localStorage</h2>
<p>We store one item in your browser's localStorage: your language preference (<code>folkup-lang</code>). This is not a cookie and is not transmitted to any server. You can clear it at any time via your browser settings.</p>

<h2>Analytics</h2>
<p>We may use a cookie-free, privacy-focused analytics tool hosted on our own infrastructure. When active, it does not use cookies, does not track personal data, and does not store IP addresses. As of March 2026, analytics are not yet enabled on this landing page.</p>

<h2>Third-party cookies</h2>
<p>We do not load any third-party scripts that set cookies. All fonts are self-hosted. No social media widgets or advertising networks are used.</p>

<h2>Contact</h2>
<p>For questions about our cookie policy: <a href="mailto:privacy@folkup.app">privacy@folkup.app</a></p>`,
        ru: `<h2>Используем ли мы cookie?</h2>
<p>Нет. folkup.app не использует cookie-файлы — ни для отслеживания, ни для рекламы, ни для аналитики.</p>

<h2>localStorage</h2>
<p>Мы сохраняем один элемент в localStorage вашего браузера: ваши языковые предпочтения (<code>folkup-lang</code>). Это не cookie-файл и не передаётся на сервер. Вы можете очистить его в любое время через настройки браузера.</p>

<h2>Аналитика</h2>
<p>Мы можем использовать инструмент аналитики без cookie-файлов, ориентированный на конфиденциальность, размещённый на нашей собственной инфраструктуре. При активации он не использует cookie, не отслеживает персональные данные и не сохраняет IP-адреса. По состоянию на март 2026 года аналитика на этой странице ещё не активирована.</p>

<h2>Cookie третьих сторон</h2>
<p>Мы не загружаем сторонние скрипты, устанавливающие cookie. Все шрифты размещены на нашем сервере. Виджеты социальных сетей и рекламные сети не используются.</p>

<h2>Контакты</h2>
<p>По вопросам нашей политики в отношении cookie: <a href="mailto:privacy@folkup.app">privacy@folkup.app</a></p>`,
        pt: `<h2>Utilizamos cookies?</h2>
<p>Não. O folkup.app não utiliza cookies de qualquer tipo — nem para rastreio, nem para publicidade, nem para análise.</p>

<h2>localStorage</h2>
<p>Armazenamos um item no localStorage do seu navegador: a sua preferência de idioma (<code>folkup-lang</code>). Isto não é um cookie e não é transmitido a nenhum servidor. Pode limpá-lo a qualquer momento nas definições do navegador.</p>

<h2>Análise</h2>
<p>Podemos utilizar uma ferramenta de análise sem cookies, focada na privacidade, alojada na nossa própria infraestrutura. Quando ativa, não utiliza cookies, não rastreia dados pessoais e não armazena endereços IP. Em março de 2026, a análise ainda não está ativa nesta página.</p>

<h2>Cookies de terceiros</h2>
<p>Não carregamos scripts de terceiros que definam cookies. Todas as fontes tipográficas são auto-alojadas. Não são utilizados widgets de redes sociais nem redes de publicidade.</p>

<h2>Contacto</h2>
<p>Para questões sobre a nossa política de cookies: <a href="mailto:privacy@folkup.app">privacy@folkup.app</a></p>`,
      },
    },
  ],
}
