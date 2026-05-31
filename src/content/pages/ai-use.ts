import type { Page } from '../types'

/**
 * /about/ai-use — AI use transparency page.
 *
 * Лев 2026-05-31 research verdict: NOT Art. 50 mandated (no surface
 * triggers Art. 50(1) AI interaction since all FolkUp public surfaces
 * are static SSG with no runtime LLM inference). Page provides UCPD
 * misleading-omission safety + quality-первуx-всего transparency given
 * the "team of AI fornits" hero copy.
 *
 * Wording approved by Андрей 2026-05-31 per Лев recommendation.
 * Pattern mirrors privacy.ts (LegalPageSection with v-html content).
 * Safe HTML — internally authored, no user input.
 */
export const aiUsePage: Page = {
  id: 'ai-use',
  path: '/about/ai-use',
  availableLangs: ['en', 'ru', 'pt'],
  meta: {
    title: {
      en: 'AI use — FolkUp',
      ru: 'Использование AI — FolkUp',
      pt: 'Uso de IA — FolkUp',
    },
    description: {
      en: 'How FolkUp uses AI: AI-assisted production by a single human, all content human-reviewed before publication. No AI system interacts with you on these pages.',
      ru: 'Как FolkUp использует AI: производство с помощью AI одним человеком, весь контент проверяется человеком перед публикацией. Ни одна AI-система не общается с вами на этих страницах.',
      pt: 'Como a FolkUp usa IA: produção assistida por IA por uma única pessoa, todo o conteúdo é revisto por humano antes da publicação. Nenhum sistema de IA interage consigo nestas páginas.',
    },
    ogType: 'website',
    canonical: 'https://folkup.app/en/about/ai-use',
  },
  sections: [
    {
      id: 'ai-use-main',
      type: 'legal',
      schemaType: 'WebPage',
      title: {
        en: 'AI use',
        ru: 'Использование AI',
        pt: 'Uso de IA',
      },
      lastUpdated: {
        en: 'Last updated: May 2026',
        ru: 'Последнее обновление: май 2026',
        pt: 'Última atualização: maio de 2026',
      },
      content: {
        en: `<h2>Who builds FolkUp</h2>
<p>FolkUp sites are built and maintained by a single person (Andrei) with the assistance of AI tools — the "AI fornits" team mentioned in our hero copy.</p>

<h2>What "AI fornits" means</h2>
<p>"Fornits" is Stephen King's name for the spirit-helpers that live in writers' typewriters. We borrowed it for the AI assistants who help with research, code, content review, and translation. It's a metaphor for the production workflow, not a chatbot you can talk to.</p>

<h2>Where AI is used</h2>
<p>AI assists with: research synthesis, draft writing, fact verification cross-checks, code generation, translation drafts, accessibility checks, and SEO optimization. Every piece of output goes through human review and editorial control before publication.</p>

<h2>Where AI is NOT used</h2>
<p>No AI system interacts with you on these pages. There is no chatbot, no AI-generated response to user input, no real-time AI inference happening when you visit a FolkUp site. All public surfaces are static prerendered HTML.</p>

<h2>Editorial responsibility</h2>
<p>Andrei Klemenchonok (anklem@folkup.app) holds editorial responsibility for all content published on FolkUp properties. AI-assisted content carve-out per EU AI Act Art. 50(4) applies.</p>

<h2>Future changes</h2>
<p>If we ever ship a surface that involves direct AI interaction (chatbot, AI-driven NPC, AI form processing), it will be clearly disclosed at the point of interaction per EU AI Act Art. 50 requirements.</p>

<h2>Questions</h2>
<p>For questions about AI use: <a href="mailto:anklem@folkup.app">anklem@folkup.app</a></p>`,
        ru: `<h2>Кто создаёт FolkUp</h2>
<p>Сайты FolkUp создаются и поддерживаются одним человеком (Андреем) с помощью AI-инструментов — команды «AI-форнитов», упомянутой в hero-фразе главной страницы.</p>

<h2>Что значит «AI-форниты»</h2>
<p>«Форниты» — так Стивен Кинг называл духов-помощников, живущих в пишущих машинках писателей. Мы позаимствовали это имя для AI-помощников, которые участвуют в исследованиях, коде, проверке контента и переводах. Это метафора производственного процесса, а не чат-бот, с которым можно поговорить.</p>

<h2>Где используется AI</h2>
<p>AI помогает с: синтезом исследований, черновиками текстов, перекрёстной проверкой фактов, генерацией кода, черновиками переводов, проверкой доступности и SEO-оптимизацией. Каждый результат проходит проверку человеком и редакторский контроль перед публикацией.</p>

<h2>Где AI НЕ используется</h2>
<p>Ни одна AI-система не общается с вами на этих страницах. Нет чат-бота, нет AI-ответов на ввод пользователя, нет real-time AI-инференса при посещении сайтов FolkUp. Все публичные страницы — статические prerendered HTML.</p>

<h2>Редакторская ответственность</h2>
<p>Андрей Клеменчёнок (anklem@folkup.app) несёт редакторскую ответственность за весь контент, публикуемый на ресурсах FolkUp. Применяется карв-аут для AI-assisted контента согласно EU AI Act Art. 50(4).</p>

<h2>Будущие изменения</h2>
<p>Если мы запустим surface с прямым AI-взаимодействием (чат-бот, AI NPC, AI обработка форм), это будет чётко раскрыто в момент взаимодействия согласно EU AI Act Art. 50.</p>

<h2>Вопросы</h2>
<p>Вопросы про использование AI: <a href="mailto:anklem@folkup.app">anklem@folkup.app</a></p>`,
        pt: `<h2>Quem constrói o FolkUp</h2>
<p>Os sites FolkUp são construídos e mantidos por uma única pessoa (Andrei) com a ajuda de ferramentas de IA — a equipa "fornits de IA" mencionada na frase de abertura.</p>

<h2>O que significa "fornits de IA"</h2>
<p>"Fornits" é o nome dado por Stephen King aos espíritos-ajudantes que vivem nas máquinas de escrever dos escritores. Emprestámos este nome para os assistentes de IA que ajudam com investigação, código, revisão de conteúdo e tradução. É uma metáfora para o fluxo de produção, não um chatbot com quem se possa falar.</p>

<h2>Onde a IA é usada</h2>
<p>A IA ajuda com: síntese de investigação, redação de rascunhos, verificação cruzada de factos, geração de código, rascunhos de tradução, verificações de acessibilidade e otimização SEO. Cada peça de output passa por revisão humana e controlo editorial antes da publicação.</p>

<h2>Onde a IA NÃO é usada</h2>
<p>Nenhum sistema de IA interage consigo nestas páginas. Não há chatbot, nem respostas de IA ao input do utilizador, nem inferência de IA em tempo real ao visitar um site FolkUp. Todas as superfícies públicas são HTML estático pré-renderizado.</p>

<h2>Responsabilidade editorial</h2>
<p>Andrei Klemenchonok (anklem@folkup.app) detém a responsabilidade editorial por todo o conteúdo publicado nas propriedades FolkUp. Aplica-se a exclusão para conteúdo assistido por IA nos termos do EU AI Act Art. 50(4).</p>

<h2>Alterações futuras</h2>
<p>Se alguma vez lançarmos uma superfície que envolva interação direta com IA (chatbot, NPC com IA, processamento de formulários por IA), será claramente divulgado no ponto de interação nos termos do EU AI Act Art. 50.</p>

<h2>Questões</h2>
<p>Para questões sobre uso de IA: <a href="mailto:anklem@folkup.app">anklem@folkup.app</a></p>`,
      },
    },
  ],
}
