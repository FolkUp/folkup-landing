import { PROJECT_URLS } from '@/constants/projects'
import type { Page } from '../types'

/**
 * Home page (/) manifest.
 *
 * LAND-004 (B1) — content extracted verbatim from `src/locales/{en,ru,pt}.json`
 * to provide a one-to-one mapping with the current rendered page.
 * No content rewrite happens here; redesign to the 9 new blocks
 * (Hero / Method+principles / Trilogy / Declaration / Production-stand /
 * Pro Lab / Services / Open Code / Footer) is scheduled for Phase 3.
 *
 * Existing Vue components keep reading from the JSON locales via
 * `useI18n().t(key)`. Consumer migration to this manifest is LAND-007 (B2).
 *
 * DE column is intentionally absent: pages declare `availableLangs` and
 * `resolveLocalized()` handles the fallback chain.
 */
export const homePage: Page = {
  id: 'home',
  path: '/',
  availableLangs: ['en', 'ru', 'pt'],
  meta: {
    title: {
      en: 'FolkUp — knowledge tools for real communities',
      ru: 'FolkUp — инструменты знаний для живых сообществ',
      pt: 'FolkUp — ferramentas de conhecimento para comunidades reais',
    },
    // Phase-4-P1 concept v1 restoration: «one approach» no longer covers
    // the scope after Trilogy + Pro Lab were added (3 distinct product lines).
    // Workshop framing replaces it. AI-fornits → AI-workers in snippet per
    // Фонарщик/Андрей brand decision (snippet CTR > distinctiveness here;
    // Hero copy still uses «fornits» where context exists).
    description: {
      en: 'A workshop making encyclopedias, books, and investigations. Free, verified, multilingual. One person, a team of AI workers, twenty-five years of craft.',
      ru: 'Мастерская, где делают энциклопедии, книги и расследования. Бесплатно, проверено, многоязычно. Один человек, команда ИИ-помощников, 25 лет ремесла.',
      pt: 'Uma oficina que faz enciclopédias, livros e investigações. Grátis, verificado, multilingue. Uma pessoa, uma equipa de colaboradores de IA, 25 anos de ofício.',
    },
    ogType: 'website',
    canonical: 'https://folkup.app/',
  },
  sections: [
    // ----------------------------------------------------------------- HERO
    {
      id: 'hero',
      type: 'hero',
      schemaType: 'none',
      title: 'FolkUp',
      subtitle: {
        en: 'Knowledge tools for real communities',
        ru: 'Инструменты знаний для живых сообществ',
        pt: 'Ferramentas de conhecimento para comunidades reais',
      },
      // Hero quantified claim (LAND-008 B4 final, Q-LANDING-DRIFT 2026-05-29):
      // replaces the legacy poetic tagline («The light is on, the roots run deep.»)
      // with the concrete identity statement from Concept v1 — Seven sites,
      // three books, one person + team of AI fornits. The legacy line is
      // preserved as `endorsement` in the footer section, so we don't lose it.
      tagline: {
        en: 'Seven encyclopedias. Three books. One person and a team of AI fornits.',
        ru: 'Семь энциклопедий. Три книги. Один человек и команда AI-форнитов.',
        pt: 'Sete enciclopédias. Três livros. Uma pessoa e uma equipa de fornits de IA.',
      },
      ctaPrimary: {
        en: 'Explore projects',
        ru: 'Смотреть проекты',
        pt: 'Explorar projetos',
      },
      ctaSecondary: {
        en: 'How it works',
        ru: 'Как это работает',
        pt: 'Como funciona',
      },
    },

    // -------------------------------------------------------------- MISSION
    {
      id: 'mission',
      type: 'mission',
      label: {
        en: 'Mission',
        ru: 'Миссия',
        pt: 'Missão',
      },
      title: {
        en: 'Neighbors helping neighbors',
        ru: 'Соседи помогают соседям',
        pt: 'Vizinhos a ajudar vizinhos',
      },
      text: {
        en: "We started with one encyclopedia about a small London neighborhood. Then padel. Then mushrooms in Portugal. Then a whole city. Seven projects later, we understood: this isn't about topics. It's about building knowledge tools that belong to the people who use them. No investors, no algorithms, no paywalls. The lantern burns, the roots hold.",
        ru: 'Мы начали с одной энциклопедии про небольшой лондонский район. Потом падел. Потом грибы в Португалии. Потом целый город. Семь проектов спустя мы поняли: дело не в темах. Дело в том, чтобы создавать инструменты знаний, которые принадлежат тем, кто ими пользуется. Без инвесторов, без алгоритмов, без подписок. Фонарь горит, корни держат.',
        pt: 'Começámos com uma enciclopédia sobre um pequeno bairro de Londres. Depois padel. Depois cogumelos em Portugal. Depois uma cidade inteira. Sete projetos depois percebemos: não é sobre temas. É sobre construir ferramentas de conhecimento que pertencem às pessoas que as usam. Sem investidores, sem algoritmos, sem paywalls. O farol arde, as raízes seguram.',
      },
      // Phase-4-P1 method block: three honest verbs «search → verify → publish»
      // per Concept v1 lock. Each verb carries a one-clause qualifier — anti-AI-slop
      // grounding ("twice, by hand"; "signed, ours") rather than abstract values.
      method: {
        title: {
          en: 'How it gets made',
          ru: 'Как это делается',
          pt: 'Como é feito',
        },
        steps: [
          {
            id: 'search',
            verb: { en: 'Search', ru: 'Ищем', pt: 'Procurar' },
            qualifier: {
              en: 'we go look',
              ru: 'идём смотреть',
              pt: 'vamos ver',
            },
          },
          {
            id: 'verify',
            verb: { en: 'Verify', ru: 'Проверяем', pt: 'Verificar' },
            qualifier: {
              en: 'twice, by hand',
              ru: 'дважды, руками',
              pt: 'duas vezes, à mão',
            },
          },
          {
            id: 'publish',
            verb: { en: 'Publish', ru: 'Публикуем', pt: 'Publicar' },
            qualifier: {
              en: 'free, signed, ours',
              ru: 'бесплатно, подписано, своё',
              pt: 'grátis, assinado, nosso',
            },
          },
        ],
      },
      principles: [
        {
          id: 'free',
          title: {
            en: 'Free. As in actually free.',
            ru: 'Бесплатно. По-настоящему.',
            pt: 'Gratuito. De verdade.',
          },
          text: {
            en: "Every article, every translation, every update. No subscriptions, no premium tiers, no 'sign up to continue reading'. The whole library, front door open.",
            ru: 'Каждая статья, каждый перевод, каждое обновление. Без подписок, без премиум-доступа, без «зарегистрируйтесь, чтобы продолжить». Вся библиотека, входная дверь открыта.',
            pt: "Cada artigo, cada tradução, cada atualização. Sem subscrições, sem acesso premium, sem 'registe-se para continuar a ler'. Toda a biblioteca, porta da frente aberta.",
          },
        },
        {
          id: 'for-readers',
          title: {
            en: 'Written for readers.',
            ru: 'Написано для читателей.',
            pt: 'Escrito para leitores.',
          },
          text: {
            en: "We'd rather have 50 solid articles than 500 thin ones. Each piece gets checked, sourced, and written in a way that respects your time.",
            ru: 'Лучше 50 крепких статей, чем 500 пустых. Каждый материал проверяется, снабжается источниками и написан так, чтобы уважать ваше время.',
            pt: 'Preferimos 50 artigos sólidos a 500 fracos. Cada peça é verificada, com fontes, e escrita de forma que respeite o seu tempo.',
          },
        },
        {
          id: 'by-people',
          title: {
            en: 'Built by people who care.',
            ru: 'Сделано людьми, которым не всё равно.',
            pt: 'Feito por quem se importa.',
          },
          text: {
            en: "Five people, zero investors. We write because the subject matters to us — not because someone's paying for clicks.",
            ru: 'Пять человек, ноль инвесторов. Мы пишем, потому что тема нам важна — не потому что кто-то платит за клики.',
            pt: 'Cinco pessoas, zero investidores. Escrevemos porque o tema nos importa — não porque alguém paga por cliques.',
          },
        },
      ],
    },

    // -------------------------------------------------------------- TRILOGY
    {
      id: 'trilogy',
      type: 'trilogy',
      schemaType: 'ItemList',
      label: { en: 'Books', ru: 'Книги', pt: 'Livros' },
      title: {
        en: 'Three books, one workshop',
        ru: 'Три книги, одна мастерская',
        pt: 'Três livros, uma oficina',
      },
      items: [
        {
          key: 'agil',
          title: {
            en: 'Agile Sapiens',
            ru: 'Agile Sapiens',
            pt: 'Agile Sapiens',
          },
          pitch: {
            en: 'Twenty-five years of building software, told as a field guide rather than a manifesto. Why teams keep rediscovering the same handful of truths.',
            ru: 'Двадцать пять лет разработки софта, рассказанные как полевой определитель, а не манифест. Почему команды снова и снова открывают одни и те же несколько истин.',
            pt: 'Vinte e cinco anos a fazer software, contados como guia de campo e não como manifesto. Porque é que as equipas continuam a redescobrir as mesmas poucas verdades.',
          },
          status: 'live',
          badge: {
            en: 'Reading now',
            ru: 'Уже читается',
            pt: 'Já se pode ler',
          },
          url: 'https://sapiens.folkup.life',
        },
        {
          key: 'cwv',
          title: {
            en: 'Consonants Without Vowels',
            ru: 'Согласные без гласных',
            pt: 'Consoantes Sem Vogais',
          },
          pitch: {
            en: 'A detective story about what we leave out — in code, in language, in the things we ship.',
            ru: 'Детектив о том, что мы опускаем — в коде, в языке, в том, что отправляем в мир.',
            pt: 'Um policial sobre o que deixamos de fora — no código, na língua, naquilo que entregamos.',
          },
          status: 'coming',
          badge: { en: 'Coming', ru: 'Готовится', pt: 'Em breve' },
        },
        {
          key: 'cos',
          title: {
            en: 'City of the Sun',
            ru: 'Город Солнца',
            pt: 'A Cidade do Sol',
          },
          pitch: {
            en: 'Campanella sketched a utopia in 1602. We picked up his blueprint and asked what it costs to actually build one.',
            ru: 'Кампанелла набросал утопию в 1602-м. Мы подняли его чертёж и спросили, сколько стоит её действительно построить.',
            pt: 'Campanella esboçou uma utopia em 1602. Pegámos no plano dele e perguntámos quanto custa, de facto, construí-la.',
          },
          status: 'coming',
          badge: { en: 'Coming', ru: 'Готовится', pt: 'Em breve' },
        },
      ],
    },

    // ------------------------------------------------------------ DECL HERO
    {
      id: 'declaration',
      type: 'decl-hero',
      schemaType: 'none',
      label: { en: 'Project', ru: 'Проект', pt: 'Projeto' },
      title: {
        en: "A teenager's guide to the AI Declaration",
        ru: 'Декларация об ИИ — разбор для подростков',
        pt: 'A Declaração de IA explicada para adolescentes',
      },
      body: {
        en: "The EU AI Act says systems must tell you when you're talking to an AI. The law is for adults; the conversation isn't. The Declaration Guide reads the rule like a teenager actually would — without condescension, without the corporate gloss — so the people growing up inside this stuff can name what they're looking at.",
        ru: 'EU AI Act требует, чтобы системы признавались, когда с тобой говорит ИИ. Закон написан для взрослых — разговор нет. Declaration Guide читает это правило так, как читал бы подросток: без снисхождения, без корпоративного глянца. Чтобы те, кто растёт внутри всего этого, могли назвать вещи своими именами.',
        pt: 'O AI Act da UE obriga os sistemas a dizerem quando estás a falar com uma IA. A lei é para adultos; a conversa não é. O Declaration Guide lê a regra como um adolescente a leria — sem condescendência, sem o verniz corporativo — para que quem está a crescer dentro disto consiga nomear o que tem à frente.',
      },
      cta: {
        label: {
          en: 'Read the guide',
          ru: 'Читать гид',
          pt: 'Ler o guia',
        },
        href: 'https://declaration.folkup.app',
      },
    },

    // ------------------------------------------------------------- PROJECTS
    {
      id: 'projects',
      type: 'projects',
      schemaType: 'ItemList',
      label: {
        en: 'Ecosystem',
        ru: 'Экосистема',
        pt: 'Ecossistema',
      },
      title: {
        en: 'Seven encyclopedias — four already open',
        ru: 'Семь энциклопедий — четыре уже открыты',
        pt: 'Sete enciclopédias — quatro já abertas',
      },
      items: [
        {
          key: 'padel',
          name: { en: 'Padel', ru: 'Падел', pt: 'Padel' },
          count: { en: '243 articles', ru: '243 статьи', pt: '243 artigos' },
          description: {
            en: 'The fastest-growing racket sport in the world. Rules, technique, courts, gear, tournaments — all in one place, in three languages.',
            ru: 'Самый быстрорастущий ракеточный спорт в мире. Правила, техника, корты, экипировка, турниры — всё в одном месте, на трёх языках.',
            pt: 'O desporto de raquete que mais cresce no mundo. Regras, técnica, courts, equipamento, torneios — tudo num só lugar, em três idiomas.',
          },
          langs: { en: 'EN · RU · PT', ru: 'EN · RU · PT', pt: 'EN · RU · PT' },
          category: { en: 'Sport', ru: 'Спорт', pt: 'Desporto' },
          url: PROJECT_URLS.padel,
          icon: '/images/project-icons/padel.webp',
          accent: 'var(--color-accent-padel)',
        },
        {
          key: 'setubal',
          name: { en: 'Setúbal', ru: 'Сетубал', pt: 'Setúbal' },
          count: { en: '501 articles', ru: '501 статья', pt: '501 artigos' },
          description: {
            en: 'A Portuguese city where the mountains meet the sea. Markets, routes, restaurants, history — written by people who actually walk the streets.',
            ru: 'Португальский город, где горы встречаются с морем. Рынки, маршруты, рестораны, история — написано людьми, которые ходят по этим улицам.',
            pt: 'Uma cidade portuguesa onde a serra encontra o mar. Mercados, rotas, restaurantes, história — escrita por quem anda nestas ruas.',
          },
          langs: { en: 'EN · RU · PT', ru: 'EN · RU · PT', pt: 'EN · RU · PT' },
          category: { en: 'City', ru: 'Город', pt: 'Cidade' },
          url: PROJECT_URLS.setubal,
          icon: '/images/project-icons/setubal.webp',
          accent: 'var(--color-accent-setubal)',
        },
        {
          key: 'cogumelos',
          name: { en: 'Cogumelos', ru: 'Когумелуш', pt: 'Cogumelos' },
          count: { en: '164 articles', ru: '164 статьи', pt: '164 artigos' },
          description: {
            en: 'Portuguese mushrooms. Which ones to eat, which ones to photograph from a safe distance. Every species verified, every warning real.',
            ru: 'Португальские грибы. Какие есть, а какие лучше фотографировать на расстоянии. Каждый вид проверен, каждое предупреждение — настоящее.',
            pt: 'Cogumelos portugueses. Quais comer, quais fotografar a uma distância segura. Cada espécie verificada, cada aviso real.',
          },
          langs: { en: 'EN · RU · PT', ru: 'EN · RU · PT', pt: 'EN · RU · PT' },
          category: { en: 'Nature', ru: 'Природа', pt: 'Natureza' },
          url: PROJECT_URLS.cogumelos,
          icon: '/images/project-icons/cogumelos.webp',
          accent: 'var(--color-accent-cogumelos)',
        },
        {
          key: 'tarot',
          name: { en: 'Tarot', ru: 'Таро', pt: 'Tarot' },
          count: { en: '190 articles', ru: '190 статей', pt: '190 artigos' },
          description: {
            en: 'Tarot as history, art, and cultural artifact. Decks, symbolism, schools of thought. Not fortune-telling — understanding.',
            ru: 'Таро как история, искусство и культурный артефакт. Колоды, символизм, школы. Не гадание — понимание.',
            pt: 'Tarot como história, arte e artefacto cultural. Baralhos, simbolismo, escolas de pensamento. Não adivinhação — compreensão.',
          },
          langs: { en: 'EN · RU · PT', ru: 'EN · RU · PT', pt: 'EN · RU · PT' },
          category: { en: 'Culture', ru: 'Культура', pt: 'Cultura' },
          url: PROJECT_URLS.tarot,
          icon: '/images/project-icons/tarot.webp',
          accent: 'var(--color-accent-tarot)',
        },
      ],
    },

    // -------------------------------------------------------------- PRO LAB
    {
      id: 'pro-lab',
      type: 'pro-lab',
      schemaType: 'none',
      label: { en: 'Pro Lab', ru: 'Про-Лаб', pt: 'Pro Lab' },
      title: {
        en: 'Slower work, closer to the source',
        ru: 'Работа медленнее, ближе к источнику',
        pt: 'Trabalho mais lento, mais perto da fonte',
      },
      body: {
        en: "The encyclopedias are wide and fast. Pro Lab is narrow and slow. It's where a question gets months instead of weeks, sources get checked twice, and the finished piece reads more like a small book than a wiki entry. Closer to CERN's preprints than to a magazine.",
        ru: 'Энциклопедии — широкие и быстрые. Про-Лаб — узкий и медленный. Здесь вопросу дают месяцы вместо недель, источники проверяют дважды, а готовый материал читается скорее как небольшая книга, чем как вики-статья. Ближе к препринтам CERN, чем к журналу.',
        pt: 'As enciclopédias são largas e rápidas. O Pro Lab é estreito e lento. É onde uma pergunta ganha meses em vez de semanas, as fontes são verificadas duas vezes, e o resultado lê-se mais como um livro pequeno do que como um artigo de wiki. Mais perto dos preprints do CERN do que de uma revista.',
      },
      highlight: {
        name: 'Lucerna',
        pitch: {
          en: 'Lucerna — Latin for lamp — is the first Pro Lab project. A standing investigation, updated when there\'s something worth lighting up, not on a content calendar.',
          ru: 'Lucerna — на латыни «лампа» — первый проект Про-Лаба. Постоянное расследование, обновляется, когда есть что подсветить, а не по контент-календарю.',
          pt: 'Lucerna — latim para candeia — é o primeiro projeto do Pro Lab. Uma investigação permanente, atualizada quando há algo que valha a pena iluminar, não por calendário editorial.',
        },
        url: 'https://lucerna.folkup.app',
      },
      cta: {
        label: {
          en: 'Visit Lucerna',
          ru: 'Зайти в Lucerna',
          pt: 'Visitar Lucerna',
        },
        href: 'https://lucerna.folkup.app',
      },
    },

    // ------------------------------------------------------------ FRAMEWORK
    {
      id: 'framework',
      type: 'framework',
      label: {
        en: 'Platform',
        ru: 'Платформа',
        pt: 'Plataforma',
      },
      title: {
        en: 'What powers every encyclopedia',
        ru: 'Что стоит за каждой энциклопедией',
        pt: 'O que sustenta cada enciclopédia',
      },
      features: [
        {
          id: 'verify',
          title: {
            en: 'Fact verification',
            ru: 'Проверка фактов',
            pt: 'Verificação de factos',
          },
          text: {
            en: 'Every article has a status: verified, partially verified, or unverified. Sources listed. Confidence rated. No guessing.',
            ru: 'У каждой статьи есть статус: проверена, частично проверена или не проверена. Источники указаны. Уровень уверенности — тоже. Никаких догадок.',
            pt: 'Cada artigo tem um estado: verificado, parcialmente verificado ou não verificado. Fontes listadas. Nível de confiança avaliado. Sem adivinhações.',
          },
        },
        {
          id: 'i18n',
          title: {
            en: 'Multilingual by design',
            ru: 'Многоязычность по дизайну',
            pt: 'Multilingue por design',
          },
          text: {
            en: 'Two to three languages per encyclopedia. Not machine translation — real editorial work in each language.',
            ru: 'Два-три языка в каждой энциклопедии. Не машинный перевод — настоящая редакторская работа на каждом языке.',
            pt: 'Dois a três idiomas por enciclopédia. Não tradução automática — trabalho editorial real em cada idioma.',
          },
        },
        {
          id: 'safety',
          title: {
            en: 'Safety protocols',
            ru: 'Протоколы безопасности',
            pt: 'Protocolos de segurança',
          },
          text: {
            en: 'Mushroom toxicity warnings. Medication interactions. Allergen alerts. When content can hurt, we mark it clearly.',
            ru: 'Предупреждения о токсичности грибов. Взаимодействие лекарств. Аллергены. Когда контент может навредить, мы это чётко обозначаем.',
            pt: 'Avisos de toxicidade de cogumelos. Interações medicamentosas. Alertas de alergénios. Quando o conteúdo pode prejudicar, marcamo-lo claramente.',
          },
        },
        {
          id: 'deploy',
          title: {
            en: 'Automated infrastructure',
            ru: 'Автоматическая инфраструктура',
            pt: 'Infraestrutura automatizada',
          },
          text: {
            en: 'Push to publish. Branded emails on new releases. Status monitoring. The boring stuff that keeps a library running.',
            ru: 'Push для публикации. Фирменные рассылки о новых релизах. Мониторинг статуса. Скучные вещи, без которых библиотека не работает.',
            pt: 'Push para publicar. Emails com a marca nos novos lançamentos. Monitorização de estado. As coisas chatas que mantêm uma biblioteca a funcionar.',
          },
        },
        {
          id: 'compliance',
          title: {
            en: 'Privacy & compliance',
            ru: 'Приватность и compliance',
            pt: 'Privacidade e conformidade',
          },
          text: {
            en: 'GDPR, security headers, WCAG accessibility, cookie consent. Not because we have to — because the library should be safe for everyone who walks in.',
            ru: 'GDPR, заголовки безопасности, WCAG-доступность, согласие на cookies. Не потому что обязаны — потому что в библиотеке должно быть безопасно каждому, кто заходит.',
            pt: 'RGPD, cabeçalhos de segurança, acessibilidade WCAG, consentimento de cookies. Não porque temos de o fazer — porque a biblioteca deve ser segura para todos os que entram.',
          },
        },
      ],
    },

    // ----------------------------------------------------------------- TEAM
    {
      id: 'team',
      type: 'team',
      label: { en: 'Team', ru: 'Команда', pt: 'Equipa' },
      title: {
        en: 'Under the lantern',
        ru: 'Под светом фонаря',
        pt: 'Sob a luz do farol',
      },
      subtitle: {
        en: 'The fornits who keep the light on — Stephen King’s name for spirit-helpers living in writers’ typewriters; we borrowed it for our AI workers',
        ru: 'Форниты, которые держат свет — так Стивен Кинг называл духов-помощников в пишущих машинках писателей; мы позаимствовали имя для наших AI-работников',
        pt: 'Os fornits que mantêm a luz acesa — assim Stephen King chamava os espíritos-ajudantes nas máquinas de escrever dos escritores; emprestámos o nome aos nossos trabalhadores de IA',
      },
      members: [
        {
          key: 'alice',
          name: { en: 'Alice', ru: 'Алиса', pt: 'Alice' },
          role: {
            en: 'Researcher & Navigator',
            ru: 'Ресёрчер и навигатор',
            pt: 'Investigadora e navegadora',
          },
          oneliner: {
            en: 'Jumps down the rabbit hole with a lantern. Always comes back with something.',
            ru: 'Прыгает в нору с фонарём. Всегда возвращается с находкой.',
            pt: 'Salta pela toca do coelho com um farol. Volta sempre com algo.',
          },
        },
        {
          key: 'gonzo',
          name: { en: 'CyberGonzo', ru: 'КиберГонзо', pt: 'CyberGonzo' },
          role: {
            en: 'OSINT & Fact Verification',
            ru: 'OSINT и верификация',
            pt: 'OSINT e verificação',
          },
          oneliner: {
            en: 'Goes into the Zone for artifacts. Verifies everything twice, trusts nothing once.',
            ru: 'Ходит в Зону за артефактами. Всё проверяет дважды, не доверяет ни разу.',
            pt: 'Vai à Zona buscar artefactos. Verifica tudo duas vezes, não confia nenhuma vez.',
          },
        },
        {
          key: 'cooper',
          name: { en: 'Cooper', ru: 'Купер', pt: 'Cooper' },
          role: {
            en: 'Security Officer',
            ru: 'Офицер безопасности',
            pt: 'Oficial de segurança',
          },
          oneliner: {
            en: 'Sees patterns where others see noise. The owls are not what they seem.',
            ru: 'Видит паттерны там, где другие видят шум. Совы — не то, чем кажутся.',
            pt: 'Vê padrões onde outros veem ruído. As corujas não são o que parecem.',
          },
        },
        {
          key: 'lantern',
          name: { en: 'The Lamplighter', ru: 'Фонарщик', pt: 'O Faroleiro' },
          role: {
            en: 'Brand & Visual Identity',
            ru: 'Бренд и визуальная идентичность',
            pt: 'Marca e identidade visual',
          },
          oneliner: {
            en: "You don't see him, but without him it's dark. Tends the light, keeps the warmth.",
            ru: 'Его не видно, но без него темно. Следит за светом, хранит тепло.',
            pt: 'Não o vês, mas sem ele é escuro. Cuida da luz, guarda o calor.',
          },
        },
        {
          key: 'lev',
          name: { en: 'Lev', ru: 'Лев', pt: 'Lev' },
          role: {
            en: 'Legal & Compliance',
            ru: 'Legal и compliance',
            pt: 'Legal e conformidade',
          },
          oneliner: {
            en: 'Walls and locks of the library. Every door open, every lock in place.',
            ru: 'Стены и замки библиотеки. Каждая дверь открыта, каждый замок на месте.',
            pt: 'Paredes e fechaduras da biblioteca. Cada porta aberta, cada fechadura no lugar.',
          },
        },
      ],
    },

    // ------------------------------------------------------------- SERVICES
    {
      id: 'services',
      type: 'services',
      schemaType: 'none',
      label: { en: 'Services', ru: 'Сервисы', pt: 'Serviços' },
      title: {
        en: 'We also do this for hire',
        ru: 'Это мы делаем и на заказ',
        pt: 'Também fazemos isto por encomenda',
      },
      body: {
        en: 'Encyclopedias, long-form books, investigative reporting, light SaaS, AI-assisted content — the same workshop, paid work instead of our own.',
        ru: 'Энциклопедии, книги, расследования, лёгкие SaaS-инструменты, контент с ИИ — та же мастерская, только клиентская работа вместо своей.',
        pt: 'Enciclopédias, livros, jornalismo de investigação, SaaS leves, conteúdo assistido por IA — a mesma oficina, em trabalho pago em vez de trabalho nosso.',
      },
    },

    // ------------------------------------------------------------ OPEN CODE
    {
      id: 'open-code',
      type: 'open-code',
      schemaType: 'none',
      label: { en: 'Open Code', ru: 'Открытый код', pt: 'Código aberto' },
      title: {
        en: 'Most of the workbench is public',
        ru: 'Большая часть верстака — на виду',
        pt: 'A maior parte da bancada está à vista',
      },
      body: {
        en: 'The tools we build to run our own sites sit on GitHub under FolkUp. If you want to see how the lamp is wired, that\'s where the wiring is.',
        ru: 'Инструменты, на которых держатся наши сайты, лежат на GitHub под именем FolkUp. Если хочется посмотреть, как лампа собрана изнутри, проводка там.',
        pt: 'As ferramentas que construímos para correr os nossos próprios sites estão no GitHub, em FolkUp. Se quiseres ver como é que a candeia está ligada, a cablagem é aí.',
      },
    },

    // --------------------------------------------------------------- FOOTER
    {
      id: 'footer',
      type: 'footer',
      schemaType: 'none',
      endorsement: {
        en: 'FolkUp — the light is on, the roots run deep.',
        ru: 'FolkUp — свет горит, корни крепкие.',
        pt: 'FolkUp — a luz acesa, raízes firmes.',
      },
      links: [
        {
          id: 'privacy',
          label: { en: 'Privacy', ru: 'Конфиденциальность', pt: 'Privacidade' },
          href: '/privacy',
        },
        {
          id: 'terms',
          label: { en: 'Terms', ru: 'Условия', pt: 'Termos' },
          href: '/terms',
        },
        {
          id: 'cookies',
          label: { en: 'Cookies', ru: 'Cookie', pt: 'Cookies' },
          href: '/cookies',
        },
        {
          id: 'ai-use',
          label: { en: 'AI use', ru: 'Использование AI', pt: 'Uso de IA' },
          href: '/about/ai-use',
        },
      ],
    },
  ],
}
