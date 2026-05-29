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
    description: {
      en: 'Seven encyclopedias, one approach. Free, verified, multilingual. Neighbors helping neighbors.',
      ru: 'Семь энциклопедий, один подход. Бесплатно, проверено, многоязычно. Соседи помогают соседям.',
      pt: 'Sete enciclopédias, uma abordagem. Gratuito, verificado, multilingue. Vizinhos a ajudar vizinhos.',
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
      tagline: {
        en: 'The light is on, the roots run deep.',
        ru: 'Свет горит, корни крепкие.',
        pt: 'A luz está acesa, as raízes são profundas.',
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
        en: 'Seven encyclopedias, one approach',
        ru: 'Семь энциклопедий, один подход',
        pt: 'Sete enciclopédias, uma abordagem',
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
        en: 'The fornits who keep the light on',
        ru: 'Форниты, которые держат свет',
        pt: 'Os fornits que mantêm a luz acesa',
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

    // ---------------------------------------------------------------- STATS
    {
      id: 'stats',
      type: 'stats',
      schemaType: 'none',
      label: { en: 'In numbers', ru: 'В цифрах', pt: 'Em números' },
      // Current page does not render a stats title; kept as empty LocalizedString
      // for schema completeness (renderers should treat empty values as omitted).
      title: { en: '', ru: '', pt: '' },
      items: [
        {
          id: 'projects',
          value: { en: '7', ru: '7', pt: '7' },
          label: { en: 'encyclopedias', ru: 'энциклопедий', pt: 'enciclopédias' },
        },
        {
          id: 'articles',
          value: { en: '1,500+', ru: '1 500+', pt: '1.500+' },
          label: { en: 'articles', ru: 'статей', pt: 'artigos' },
        },
        {
          id: 'pages',
          value: { en: '6,100+', ru: '6 100+', pt: '6.100+' },
          label: { en: 'pages', ru: 'страниц', pt: 'páginas' },
        },
        {
          id: 'languages',
          value: { en: '3', ru: '3', pt: '3' },
          label: { en: 'languages', ru: 'языка', pt: 'idiomas' },
        },
        {
          id: 'ads',
          value: { en: '0', ru: '0', pt: '0' },
          label: { en: 'ads', ru: 'рекламы', pt: 'anúncios' },
        },
      ],
    },

    // -------------------------------------------------------------- ROADMAP
    {
      id: 'roadmap',
      type: 'roadmap',
      schemaType: 'none',
      label: { en: 'Roadmap', ru: 'Дорожная карта', pt: 'Roteiro' },
      title: {
        en: "What's next",
        ru: 'Что дальше',
        pt: 'O que vem a seguir',
      },
      phases: [
        {
          id: 'done',
          title: { en: 'Built', ru: 'Сделано', pt: 'Feito' },
          text: {
            en: '7 encyclopedias. 1,500+ articles across 3 languages. A text-based quest. Full GDPR compliance. Safety protocols for hazardous content.',
            ru: '7 энциклопедий. 1 500+ статей на 3 языках. Текстовый квест. Полный GDPR compliance. Протоколы безопасности для опасного контента.',
            pt: '7 enciclopédias. 1.500+ artigos em 3 idiomas. Um quest baseado em texto. Conformidade total com RGPD. Protocolos de segurança para conteúdo perigoso.',
          },
        },
        {
          id: 'now',
          title: { en: 'Now', ru: 'Сейчас', pt: 'Agora' },
          text: {
            en: 'Deepening existing encyclopedias. A comic based on the quest. New translations and cross-references between projects.',
            ru: 'Углубляем существующие энциклопедии. Комикс по мотивам квеста. Новые переводы и перекрёстные ссылки между проектами.',
            pt: 'A aprofundar enciclopédias existentes. Uma banda desenhada baseada no quest. Novas traduções e referências cruzadas entre projetos.',
          },
        },
        {
          id: 'next',
          title: { en: 'Next', ru: 'Дальше', pt: 'A seguir' },
          text: {
            en: 'New encyclopedias built to the same standards. Expanding the ecosystem with new topics and languages.',
            ru: 'Новые энциклопедии на те же стандарты. Расширение экосистемы — новые темы, новые языки.',
            pt: 'Novas enciclopédias com os mesmos padrões. Expansão do ecossistema com novos temas e idiomas.',
          },
        },
        {
          id: 'future',
          title: { en: 'Ahead', ru: 'Впереди', pt: 'No futuro' },
          text: {
            en: "We'll see. The lantern burns, the roots hold — the rest will come.",
            ru: 'Посмотрим. Фонарь горит, корни крепкие — а дальше видно будет.',
            pt: 'Veremos. O farol arde, as raízes seguram — o resto virá.',
          },
        },
      ],
    },

    // -------------------------------------------------------------- SUPPORT
    {
      id: 'support',
      type: 'support',
      label: { en: 'Support', ru: 'Поддержка', pt: 'Apoio' },
      title: {
        en: 'Keep the light on',
        ru: 'Держите свет включённым',
        pt: 'Mantenha a luz acesa',
      },
      text: {
        en: 'Everything here is free. Always will be. No ads, no subscriptions, no tricks. But someone keeps the light on. If you want to help — the door is open.',
        ru: 'Всё здесь бесплатно. И будет бесплатным. Без рекламы, без подписок, без подвохов. Но кто-то держит свет включённым. Если хотите помочь — дверь открыта.',
        pt: 'Tudo aqui é gratuito. Sempre será. Sem anúncios, sem subscrições, sem truques. Mas alguém mantém a luz acesa. Se quiser ajudar — a porta está aberta.',
      },
      how: {
        en: 'Your support keeps servers running, fonts licensed, articles checked, and mushroom warnings accurate.',
        ru: 'Ваша поддержка — это серверы, лицензии на шрифты, проверенные статьи и точные предупреждения о грибах.',
        pt: 'O seu apoio mantém servidores a funcionar, fontes licenciadas, artigos verificados e avisos sobre cogumelos precisos.',
      },
      stats: {
        en: '1,500+ articles · 3 languages · 0 ads · 0 subscriptions',
        ru: '1 500+ статей · 3 языка · 0 рекламы · 0 подписок',
        pt: '1.500+ artigos · 3 idiomas · 0 anúncios · 0 subscrições',
      },
      formulas: {
        en: [
          'One coffee = one article stays free.',
          'Free knowledge costs someone. Today it can cost a coffee.',
          'Five people, no investors, zero ads. But the light stays on.',
        ],
        ru: [
          'Одна чашка кофе = одна статья остаётся бесплатной.',
          'Бесплатные знания кому-то стоят. Сегодня — одну чашку кофе.',
          'Пять человек, ноль инвесторов, ноль рекламы. Но свет горит.',
        ],
        pt: [
          'Um café = um artigo continua gratuito.',
          'Conhecimento gratuito custa a alguém. Hoje pode custar um café.',
          'Cinco pessoas, zero investidores, zero anúncios. Mas a luz continua acesa.',
        ],
      },
      cta: {
        en: 'Support on Ko-fi',
        ru: 'Поддержать на Ko-fi',
        pt: 'Apoiar no Ko-fi',
      },
      dedication: {
        en: 'To my sons, whom I taught to play, with whom I played, and who teach me to play again',
        ru: 'Моим сыновьям, которых я учил играть, с которыми я играл, и которые учат меня играть снова',
        pt: 'Aos meus filhos, a quem ensinei a brincar, com quem brinquei, e que me ensinam a brincar de novo',
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
      ],
    },
  ],
}
