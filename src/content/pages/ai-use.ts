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
  availableLangs: ['en', 'ru', 'pt', 'de'],
  meta: {
    title: {
      en: 'AI use — FolkUp',
      ru: 'Использование AI — FolkUp',
      pt: 'Uso de IA — FolkUp',
      de: 'KI-Nutzung — FolkUp',
    },
    description: {
      en: 'How FolkUp uses AI: AI-assisted production by a single human, all content human-reviewed before publication. No AI system interacts with you on these pages.',
      ru: 'Добровольное раскрытие по статье 50(4) Регламента (ЕС) 2024/1689: роли человека и ИИ-ассистентов, ответственность автора, проверяемость через открытую лицензию.',
      pt: 'Como a FolkUp usa IA: produção assistida por IA por uma única pessoa, todo o conteúdo é revisto por humano antes da publicação. Nenhum sistema de IA interage consigo nestas páginas.',
      de: 'Wie FolkUp KI einsetzt: KI-unterstützte Produktion durch einen einzelnen Menschen, jeder Inhalt vor der Veröffentlichung menschlich geprüft. Kein KI-System interagiert mit Ihnen auf diesen Seiten.',
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
        ru: 'Использование ИИ',
        pt: 'Uso de IA',
      },
      lastUpdated: {
        en: 'Last updated: May 2026',
        ru: 'Обновлено 2026-09-07 — страница переписана: роли человека и ИИ-ассистентов названы прямо; заявления о проверке носителями сняты там, где живого читателя нет.',
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
<p>Andrei Klemenchenok (editor@folkup.app) holds editorial responsibility for all content published on FolkUp properties. AI-assisted content carve-out per EU AI Act Art. 50(4) applies.</p>

<h2>Future changes</h2>
<p>If we ever ship a surface that involves direct AI interaction (chatbot, AI-driven NPC, AI form processing), it will be clearly disclosed at the point of interaction per EU AI Act Art. 50 requirements.</p>

<h2>Questions</h2>
<p>For questions about AI use: <a href="mailto:editor@folkup.app">editor@folkup.app</a></p>`,
        ru: `<p class="lead">Добровольное раскрытие. Статья 50(4) Регламента (ЕС) 2024/1689.</p>

<h2>Ответственность за содержание</h2>
<p>Книги Библиотеки FolkUp подписаны псевдонимом «Команданте FolkUp». За псевдонимом стоит один живой человек: Андрей Клеменчёнок, издатель и редактор, резидент Португалии. Псевдоним держит серию, как имя держит обложку; ответственность за каждое слово — на человеке. Модель та же, что у Бэнкси или Пессоа: убрать фигуру автора с дороги читателя — не спрятаться от него.</p>
<p>Контакт по редакционным и юридическим вопросам: <a href="mailto:editor@folkup.app">editor@folkup.app</a></p>

<h2>Человек</h2>
<p>Сюжеты, ходы мысли, структура книг, литературные параллели и все аналитические выводы возникают без участия ИИ — это работа автора. Автор сам читает каждую книгу и каждый опубликованный текст целиком и сам визирует каждую версию перед выходом. Там, где у издания есть живой читатель-носитель (у немецкого — читатель в Берлине), его замечания входят в правки.</p>

<h2>ИИ-ассистенты</h2>
<p>Редактура, проверка источников, враждебное рецензирование, техническая работа и черновики переводов выполняются ИИ-ассистентами редакционной системы ЩИТ — у каждого своё имя и своя роль, они перечислены в выходных данных каждого издания и на <a href="/ru/team">странице команды</a>. Каждая их правка — предложение автору; окончательное решение и ответственность остаются за человеком.</p>
<p>Переводы на английский, португальский и немецкий делаются одинаково: черновик готовит ИИ-ассистент-переводчик, редактор серии (Искра) сверяет перевод с русским оригиналом, автор визирует издание; там, где есть живой читатель-носитель, его замечания входят в правки. Кто переводил и кто сверял — сказано в выходных данных каждого издания.</p>

<h2>Проверяемость</h2>
<p>Источник каждого факта указан в аппарате книги. Русский оригинал и переводы опубликованы рядом под лицензией CC BY-SA 4.0 — любой абзац можно проверить, оспорить и переиздать исправленным. Нашли ошибку? Напишите нам: исправим в следующей версии и поблагодарим в выходных данных.</p>

<h2>Почему добровольно</h2>
<p>По второму абзацу пункта 4 статьи 50 Регламента (ЕС) 2024/1689 обязанность маркировать текст, созданный с помощью ИИ, не применяется, если содержание прошло редакционную проверку человеком и физическое или юридическое лицо несёт редакционную ответственность за публикацию. Это лицо — Андрей Клеменчёнок. Мы раскрываем это всё равно — по редакционному решению: эпоха, о которой написаны эти книги, началась и в нашей редакции, и скрывать это значило бы идти против самих книг.</p>

<h2>Лицензия</h2>
<p>Весь контент библиотеки — Creative Commons Attribution-ShareAlike 4.0 International (<a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license">CC BY-SA 4.0</a>). Код — MIT.</p>`,
        pt: `<h2>Quem constrói o FolkUp</h2>
<p>Os sites FolkUp são construídos e mantidos por uma única pessoa (Andrei) com a ajuda de ferramentas de IA — a equipa "fornits de IA" mencionada na frase de abertura.</p>

<h2>O que significa "fornits de IA"</h2>
<p>"Fornits" é o nome dado por Stephen King aos espíritos-ajudantes que vivem nas máquinas de escrever dos escritores. Emprestámos este nome para os assistentes de IA que ajudam com investigação, código, revisão de conteúdo e tradução. É uma metáfora para o fluxo de produção, não um chatbot com quem se possa falar.</p>

<h2>Onde a IA é usada</h2>
<p>A IA ajuda com: síntese de investigação, redação de rascunhos, verificação cruzada de factos, geração de código, rascunhos de tradução, verificações de acessibilidade e otimização SEO. Cada peça de output passa por revisão humana e controlo editorial antes da publicação.</p>

<h2>Onde a IA NÃO é usada</h2>
<p>Nenhum sistema de IA interage consigo nestas páginas. Não há chatbot, nem respostas de IA ao input do utilizador, nem inferência de IA em tempo real ao visitar um site FolkUp. Todas as superfícies públicas são HTML estático pré-renderizado.</p>

<h2>Responsabilidade editorial</h2>
<p>Andrei Klemenchenok (editor@folkup.app) detém a responsabilidade editorial por todo o conteúdo publicado nas propriedades FolkUp. Aplica-se a exclusão para conteúdo assistido por IA nos termos do EU AI Act Art. 50(4).</p>

<h2>Alterações futuras</h2>
<p>Se alguma vez lançarmos uma superfície que envolva interação direta com IA (chatbot, NPC com IA, processamento de formulários por IA), será claramente divulgado no ponto de interação nos termos do EU AI Act Art. 50.</p>

<h2>Questões</h2>
<p>Para questões sobre uso de IA: <a href="mailto:editor@folkup.app">editor@folkup.app</a></p>`,
      },
    },
  ],
}
