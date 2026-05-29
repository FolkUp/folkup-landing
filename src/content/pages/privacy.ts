import type { Page } from '../types'

/**
 * /privacy — Privacy Policy manifest.
 *
 * LAND-007 B2c: content extracted verbatim from the previous inline-Vue
 * implementation of `src/pages/privacy.vue` (HEAD a3f5f2a). No copy edits —
 * the migration is structural only. Phase 3 rewrite is a separate concern.
 *
 * `content` is raw HTML (h2/p/a) rendered via `v-html` in privacy.vue.
 * Internally authored, no untrusted input — safe.
 */
export const privacyPage: Page = {
  id: 'privacy',
  path: '/privacy',
  availableLangs: ['en', 'ru', 'pt'],
  meta: {
    title: {
      en: 'Privacy Policy — FolkUp',
      ru: 'Политика конфиденциальности — FolkUp',
      pt: 'Política de Privacidade — FolkUp',
    },
    description: {
      en: 'FolkUp privacy policy: what data we collect (none personal), cookies (none), third parties (none), and your GDPR rights.',
      ru: 'Политика конфиденциальности FolkUp: какие данные мы собираем (никаких персональных), cookies (нет), третьи стороны (нет) и ваши права по GDPR.',
      pt: 'Política de privacidade da FolkUp: que dados recolhemos (nenhum pessoal), cookies (nenhum), terceiros (nenhum) e os seus direitos ao abrigo do RGPD.',
    },
    ogType: 'website',
    canonical: 'https://folkup.app/en/privacy',
  },
  sections: [
    {
      id: 'privacy-main',
      type: 'legal',
      schemaType: 'WebPage',
      title: {
        en: 'Privacy Policy',
        ru: 'Политика конфиденциальности',
        pt: 'Política de Privacidade',
      },
      lastUpdated: {
        en: 'Last updated: March 2026',
        ru: 'Последнее обновление: март 2026',
        pt: 'Última atualização: março de 2026',
      },
      content: {
        en: `<h2>Who we are</h2>
<p>FolkUp is a research platform that builds knowledge tools for real people. This website is operated at folkup.app.</p>

<h2>What data we collect</h2>
<p>We may collect anonymous usage statistics using a privacy-focused, cookie-free analytics tool hosted on our own infrastructure. When active, no personal data, cookies, or IP addresses are stored. As of March 2026, analytics are not yet enabled on this landing page.</p>

<h2>Cookies</h2>
<p>We store your language preference in localStorage (not a cookie). No tracking cookies are used.</p>

<h2>Third parties</h2>
<p>We do not share any data with third parties. Fonts are self-hosted. No external tracking scripts are loaded.</p>

<h2>Your rights</h2>
<p>Under GDPR, you have the right to access, rectify, or delete your personal data. Since we do not collect personal data, there is nothing to access or delete.</p>

<h2>Contact</h2>
<p>For privacy-related inquiries: <a href="mailto:privacy@folkup.app">privacy@folkup.app</a></p>`,
        ru: `<h2>Кто мы</h2>
<p>FolkUp — исследовательская платформа, создающая инструменты знаний для живых людей. Этот сайт работает на folkup.app.</p>

<h2>Какие данные мы собираем</h2>
<p>Мы можем собирать анонимную статистику использования с помощью инструмента аналитики, ориентированного на конфиденциальность, без файлов cookie, размещённого на нашей собственной инфраструктуре. При активации персональные данные, файлы cookie и IP-адреса не сохраняются. По состоянию на март 2026 года аналитика на этой странице ещё не активирована.</p>

<h2>Файлы cookie</h2>
<p>Мы сохраняем ваши языковые предпочтения в localStorage (это не cookie-файл). Отслеживающие cookie не используются.</p>

<h2>Третьи стороны</h2>
<p>Мы не передаём данные третьим лицам. Шрифты размещены на нашем сервере. Сторонние отслеживающие скрипты не загружаются.</p>

<h2>Ваши права</h2>
<p>В соответствии с GDPR вы имеете право на доступ, исправление или удаление ваших персональных данных. Поскольку мы не собираем персональные данные, нечего запрашивать или удалять.</p>

<h2>Контакты</h2>
<p>По вопросам конфиденциальности: <a href="mailto:privacy@folkup.app">privacy@folkup.app</a></p>`,
        pt: `<h2>Quem somos</h2>
<p>O FolkUp é uma plataforma de investigação que cria ferramentas de conhecimento para pessoas reais. Este site opera em folkup.app.</p>

<h2>Que dados recolhemos</h2>
<p>Podemos recolher estatísticas de utilização anónimas através de uma ferramenta de análise focada na privacidade, sem cookies, alojada na nossa própria infraestrutura. Quando ativa, não são armazenados dados pessoais, cookies ou endereços IP. Em março de 2026, a análise ainda não está ativa nesta página.</p>

<h2>Cookies</h2>
<p>Armazenamos a sua preferência de idioma no localStorage (não é um cookie). Não são utilizados cookies de rastreio.</p>

<h2>Terceiros</h2>
<p>Não partilhamos dados com terceiros. As fontes tipográficas são auto-alojadas. Não são carregados scripts de rastreio externos.</p>

<h2>Os seus direitos</h2>
<p>Ao abrigo do RGPD, tem o direito de aceder, retificar ou apagar os seus dados pessoais. Como não recolhemos dados pessoais, não há nada para aceder ou apagar.</p>

<h2>Contacto</h2>
<p>Para questões de privacidade: <a href="mailto:privacy@folkup.app">privacy@folkup.app</a></p>`,
      },
    },
  ],
}
