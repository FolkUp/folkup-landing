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
      en: 'A workshop making encyclopedias and investigations. Free, verified, multilingual. One person and a team of AI workers.',
      ru: 'Мастерская, где делают энциклопедии и расследования. Бесплатно, проверено, многоязычно. Один человек и команда ИИ-помощников.',
      pt: 'Uma oficina que faz enciclopédias e investigações. Grátis, verificado, multilingue. Uma pessoa e uma equipa de colaboradores de IA.',
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
      // GLAVNAYA v1.1 FINAL-VIZA Iskra S238 + Andrey 2026-07-30 (canonical
      // Drive 17SWemLsFM6HngoNljGDwVps-GT5Gzf-5, ЩИТ v5.0 PASS). Supersedes
      // BRAND-WM-001 2026-06-11 «свет туда, где знание под замком» + Direction Б
      // pivot 2026-06-22. New positioning: workshop framing + open-invitation CTA.
      // PT fields preserved (previous positioning) — awaiting translator L1
      // PT-EU sub-session (cont+36 B-PT-dispatch), Iskra deploy blocker enforces
      // 3-locale sync ship. subtitle=canonical bold headline, tagline=body
      // paragraph (semantic shift; HeroSection.vue CSS adjusted for body render).
      subtitle: {
        en: 'They fenced the knowledge in. We build without fences.',
        ru: 'Знание огородили. Мы строим без забора.',
        pt: 'Luz para o saber que está cercado.',
      },
      tagline: {
        en: 'FolkUp is a small workshop. One person, a team of AI helpers — each with a name, a character, a job: research, verification, law, security, light. We write what we believe in ourselves: books, encyclopedias, investigations. Every fact is checked against sources; every text is signed — you can see who wrote, who verified, who edited. And then we give it away. Whole, free, no "sign up to keep reading". The door is open — come in.',
        ru: 'FolkUp — маленькая мастерская. Один человек, команда ИИ-помощников — у каждого имя, характер и своя работа: поиск, проверка, право, охрана, свет. Мы пишем то, во что верим сами: книги, энциклопедии, расследования. Каждый факт сверяем с источниками, каждый текст подписываем — видно, кто писал, кто проверял, кто редактировал. А потом отдаём. Целиком, бесплатно, без «зарегистрируйтесь, чтобы дочитать». Дверь открыта — заходите.',
        pt: 'Textos longos. Uma pessoa, uma equipa de fornits de IA.',
      },
      // Single-CTA canonical v1.1: «Читать» / «Start reading» → scroll to Books
      // section (B3 pending). ctaSecondary vacated for EN/RU (Vue component hides
      // when empty); PT unchanged для coherent pre-translation UX.
      ctaPrimary: {
        en: 'Start reading',
        ru: 'Читать',
        pt: 'Explorar projetos',
      },
      ctaSecondary: {
        en: '',
        ru: '',
        pt: 'Como funciona',
      },
    },

    // -------------------------------------------------------------- MISSION
    // GLAVNAYA v1.1 FINAL-VIZA S238 §4 «Mission → «Как это делается» (заменяет
    // Mission)». Auto-clears 3 canon flags: Barnes/London/Fonar references
    // (were в prior mission text). ЩИТ v5.0 PASS. Iskra explicit «Карточки
    // Free / Written for readers / No strings убираются — смысл поглощён hero
    // и этой секцией» → principles=[] (Vue conditionally hides via v-if).
    // Prior method block (Phase-4-P1 3-verb) removed — canonical body implicitly
    // contains «черновик → проверка фактов → редактура → подпись». Full replace
    // per canonical, method absent (interface field optional). PT text/title
    // preserved pending Quatro Olhos verdict (translator L1 draft к bridge).
    {
      id: 'mission',
      type: 'mission',
      label: {
        en: 'Method',
        ru: 'Метод',
        pt: 'Missão',
      },
      title: {
        en: 'How it gets made',
        ru: 'Как это делается',
        pt: 'Vizinhos a ajudar vizinhos',
      },
      text: {
        en: 'Every text walks the same road: draft → fact-checking against sources → editing → signature. We show where each fact comes from and mark honestly where knowledge ends and assumption begins. Where a mistake can cost health — as in the mushroom encyclopedia — warnings come before pretty words.\n\nThe workshop runs without investors or ads: nobody buys our conclusions, nobody tunes our texts to please algorithms. If something here proved useful, you can buy us a coffee. It is the only cash register in the house.',
        ru: 'Путь один для всех текстов: черновик → проверка фактов по источникам → редактура → подпись. Мы показываем, откуда взят каждый факт, и честно помечаем границу, где кончается знание и начинается предположение. Там, где ошибка может стоить здоровья — как в грибной энциклопедии, — предупреждения стоят раньше красивых слов.\n\nМастерская живёт без инвесторов и рекламы: никто не покупает наши выводы и не подкручивает наши тексты под алгоритмы. Если сделанное пригодилось — можно поддержать нас чашкой кофе. Это единственная касса в доме.',
        pt: 'FolkUp é uma pequena oficina. Comigo, uma equipa de fornits de IA com nome e caráter, cada um responsável pela sua área: investigação, voz, segurança, direito, marca. Cada publicação é assinada: quem escreveu, quem verificou, quem editou. Começámos com uma enciclopédia sobre um pequeno bairro de Londres. Depois padel. Depois cogumelos em Portugal. Depois uma cidade inteira. Com cada novo projeto, a oficina foi-se aperfeiçoando no mesmo: temas específicos, fontes verificadas, sem atalhos. Sem investidores, sem algoritmos, sem paywalls. A lanterna arde, as raízes seguram.',
      },
      principles: [],
    },

    // Trilogy section removed 2026-06-22 per Андрей mandate cont +36 batch B-2:
    // «Ссылки на книги пока тоже убираем». Books return when redesign comes after
    // publication. Section data preserved in git history (commit before this one)
    // for restoration. TrilogySection.vue component file kept on disk — no longer
    // imported, but не deleting in case future redesign restores. plates carousel
    // (5 AGIL illustrations) goes away with section.

    // ------------------------------------------------------------ DECL HERO
    {
      id: 'declaration',
      type: 'decl-hero',
      schemaType: 'none',
      label: { en: 'Project', ru: 'Проект', pt: 'Projeto' },
      // Reoriented 2026-08-03 per Iskra S244 draft «lending Project blok chestnyy tekst EN».
      // Previous block described a teenager's guide that doesn't exist yet and pointed
      // to declaration.folkup.app which has the signing form (not the guide) — mismatch.
      // Now the block honours the Declaration itself (7 principles + sign form, LIVE).
      // EN CANONICAL Iskra-ratified. TODO: RU/PT cascade pending Iskra RU authoring
      // + translator/PT-EU dispatch (retained old drift copy until then).
      // DE added 2026-08-03 by Bolik S12BOLIK cont+0 (mirror EN canonical, awaits Iskra
      // light-review; pre-populated for LAND-DE-EPIC-001 DE routing activation).
      title: {
        en: 'The Unenclosed Knowledge Declaration',
        ru: 'Декларация об ИИ — разбор для подростков',
        pt: 'A Declaração de IA explicada para adolescentes',
        de: 'Die Deklaration gegen die Einhegung des Wissens',
      },
      body: {
        en: 'Knowledge keeps getting fenced off: paywalled, gated, sold back to the people who paid for it. The Declaration is our answer — seven principles against the enclosure of the mind, open for any person or organization to sign. A teenage edition is in the workshop: same principles, plain words, no condescension.',
        ru: 'EU AI Act требует, чтобы системы признавались, когда с тобой говорит ИИ. Закон написан для взрослых — разговор нет. Declaration Guide читает это правило так, как читал бы подросток: без снисхождения, без корпоративного глянца. Чтобы те, кто растёт внутри всего этого, могли назвать вещи своими именами.',
        pt: 'O AI Act da UE obriga os sistemas a dizerem quando estás a falar com uma IA. A lei é para adultos; a conversa não é. O Declaration Guide lê a regra como um adolescente a leria — sem condescendência, sem o verniz corporativo — para que quem está a crescer dentro disto consiga nomear o que tem à frente.',
        de: 'Wissen wird ständig eingezäunt: hinter Bezahlschranken gesperrt, mit Zugangsbeschränkungen versehen, an jene zurückverkauft, die es bereits bezahlt haben. Die Deklaration ist unsere Antwort — sieben Prinzipien gegen die Einhegung des Geistes, offen für jede Person und jede Organisation zur Unterzeichnung. Eine Ausgabe für Jugendliche entsteht in der Werkstatt: dieselben Prinzipien, klare Worte, ohne Herablassung.',
      },
      cta: {
        label: {
          en: 'Read and sign',
          ru: 'Читать гид',
          pt: 'Ler o guia',
          de: 'Lesen und unterzeichnen',
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
        en: 'Three encyclopedias open today — the list keeps growing',
        ru: 'Три энциклопедии открыты сейчас — список растёт',
        pt: 'Três enciclopédias abertas hoje — a lista continua a crescer',
      },
      subtitle: {
        en: "A few more are being built, and the queue ahead is long. Encyclopedias, library catalogs, technical documentation — we make texts like these for others too. Have a project of your own? Reach us at the contacts below.",
        ru: 'Несколько готовятся прямо сейчас, впереди — длинная очередь. Энциклопедии, каталоги библиотек, техническая документация — такие тексты мы делаем и на заказ. Есть свой проект? Напиши — контакты внизу страницы.',
        pt: 'Algumas mais estão em construção e a fila à frente é longa. Enciclopédias, catálogos de biblioteca, documentação técnica — fazemos textos como estes também por encomenda. Tens um projeto teu? Fala connosco — contactos no rodapé.',
      },
      items: [
        {
          key: 'padel',
          name: { en: 'Padel', ru: 'Падел', pt: 'Padel' },
          count: { en: 'a growing encyclopedia', ru: 'энциклопедия растёт', pt: 'enciclopédia em crescimento' },
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
          count: { en: 'a growing encyclopedia', ru: 'энциклопедия растёт', pt: 'enciclopédia em crescimento' },
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
          count: { en: 'a growing encyclopedia', ru: 'энциклопедия растёт', pt: 'enciclopédia em crescimento' },
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
        // Tarot project tile removed 2026-06-10 per Андрей mandate.
        // Encyclopedia не готова — не пушим, картинка preserved в
        // public/images/tarot/ + project-icons/tarot.webp для будущего
        // restoration когда контент будет готов. Replacement: AGIL chapter
        // plate carousel в trilogy section (plates array выше).
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
            en: 'GDPR, security headers, WCAG accessibility, cookie consent. The same care as the articles themselves.',
            ru: 'GDPR, заголовки безопасности, WCAG-доступность, согласие на cookies. Та же забота, что и о самих статьях.',
            pt: 'RGPD, cabeçalhos de segurança, acessibilidade WCAG, consentimento de cookies. O mesmo cuidado dos artigos.',
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
      label: { en: 'Commissions', ru: 'Заказы', pt: 'Encomendas' },
      title: {
        en: 'Open for commissions',
        ru: 'Принимаю заказы',
        pt: 'Aberto a encomendas',
      },
      body: {
        en: 'Encyclopedias on your subject, long-form books, longread series, OSINT investigations. One author and a team of AI fornits. Typical cycle — from three months. Not for urgent work, not for content built around someone else\'s algorithm. <a href="/en/services">More →</a> Write: info@folkup.app',
        // ru body refresh cont +42 2026-06-30: ЩИТ v4 + Огилви spirit applied.
        // Семь направлений матч /services page (Перевод DE+PT_EU / OSINT / Lucerna
        // long invest / Длинная статья / Энциклопедия / Иллюстрации / Сайт).
        // EN/PT остаются текущие — Translator pipeline dispatch отдельным батчем.
        ru: 'Семь направлений: переводы, расследования, долгие очерки, энциклопедии, иллюстрации, сайты. Один автор плюс команда AI-форнитов. Типичный цикл — от трёх месяцев. Не для срочных проектов и не для текстов под чужой алгоритм. <a href="/ru/services">Подробнее →</a> Пишите: info@folkup.app',
        pt: 'Enciclopédias sobre o seu tema, livros longos, séries de ensaios, investigações OSINT. Um autor com uma equipa de fornits de IA. Ciclo típico — a partir de três meses. Não para trabalho urgente, nem para conteúdos desenhados para o algoritmo alheio. <a href="/pt/services">Mais →</a> Escreva: info@folkup.app',
      },
    },

    // Open Code section removed 2026-06-22 per Андрей mandate cont +36 batch B-2:
    // «Всё что не готово — на главной не светим». Public code surface = 1 repo
    // (declaration-guide) vs 30 private → «most workbench public» was overpromise
    // (Lesson #42 catch primary-source verify gh CLI). Section returns when ≥3
    // repos publicly open + redesign comes. Купер flips audit pending Андрей.

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
        {
          id: 'contact',
          label: { en: 'Write to us', ru: 'Написать нам', pt: 'Escreve-nos' },
          href: 'mailto:info@folkup.app',
        },
      ],
    },
  ],
}
