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
 * DE column added to `availableLangs` cont+9 2026-08-17: UI shell (nav / settings /
 * theme) served from `de.json` (10 keys, Bolik Vier-Augen cont+10 PR #22). Content
 * strings within items still use `{ en, ru, pt }` — DE reader sees native DE nav +
 * EN content fallback via `resolveLocalized()`. Bolik LAND-DE-EPIC-001 continues
 * incrementally adding DE content strings без ломания.
 */
export const homePage: Page = {
  id: 'home',
  path: '/',
  availableLangs: ['en', 'ru', 'pt', 'de'],
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
      // Hero F variant (Andrey cont+2 verdict 2026-08-23 via zerkalce v2):
      // Short philosophy + factual subline + concise body paragraph.
      // Supersedes prior «Знание огородили» hero (S238 FINAL-VIZA) per Andrey
      // carte-blanche landing refresh + no-numbers rule («мы нигде не указываем
      // точного количества наших продуктов»). Preserves мастерская/форниты identity,
      // removes «Дверь открыта — заходите» clichet (V4=б), replaces «на трёх языках»
      // с «многоязычно» (А2=б), сохраняет «один человек» как personal identity (А1=а).
      // NO CTA (respects Iskra PAKET-GLAVNAYA S290-07 §3 — CTA removal preserved).
      // POMETKA к Iskra post-ship for editorial Vier-Augen retro-review (RU canonical
      // = Andrey approval; EN/PT/DE best-effort awaiting Lyolik/Zeka/Bolik cascade).
      subtitle: {
        en: 'Knowledge you can actually read.',
        ru: 'Знание, которое можно читать.',
        pt: 'Conhecimento que se pode ler.',
        de: 'Wissen, das man wirklich lesen kann.',
      },
      subline: {
        en: 'Open. Verified. Multilingual.',
        ru: 'Открытое. Проверенное. Многоязычное.',
        pt: 'Aberto. Verificado. Multilingue.',
        de: 'Offen. Geprüft. Mehrsprachig.',
      },
      tagline: {
        en: 'FolkUp is a small workshop — one person and a team of AI fornits. We make encyclopedias, a book series, and slow investigations. Every fact by source, every text signed. Freely, without registration, without ads.',
        ru: 'FolkUp — маленькая мастерская: один человек и команда AI-форнитов. Мы делаем энциклопедии, книжную серию и медленные расследования. Каждый факт — по источникам, каждый текст — с подписью. Свободно, без регистрации, без рекламы.',
        pt: 'FolkUp é uma pequena oficina — uma pessoa e uma equipa de fornits de IA. Fazemos enciclopédias, uma série de livros e investigações lentas. Cada facto por fontes, cada texto assinado. Livre, sem registo, sem publicidade.',
        de: 'FolkUp ist eine kleine Werkstatt — eine Person und ein Team von KI-Fornits. Wir machen Enzyklopädien, eine Buchreihe und langsame Recherchen. Jeder Fakt durch Quellen, jeder Text signiert. Frei, ohne Registrierung, ohne Werbung.',
      },
      // GLAV-1 HERO-CTA-REMOVE (Iskra PAKET-GLAVNAYA S290-07 §3):
      // hero-actions block снят целиком (#books якорь дублирует первый скролл, текстовый финал hero
      // «Дверь открыта — заходите» — настоящий CTA). Поля в manifest опустошены, схема preserved
      // (анти-ломкость). Vue: убран рендер hero-actions в HeroSection.vue.
      ctaPrimary: {
        en: '',
        ru: '',
        pt: '',
      },
      ctaSecondary: {
        en: '',
        ru: '',
        pt: '',
      },
    },

    // ---------------------------------------------------------------- BOOKS
    // GLAVNAYA S243→S274 apply-ready block (Iskra PRODUCT-AUDIT §4, PRIKAZ
    // 2026-08-11 виза Андрея). Reuses type:'projects' render (0 нового кода),
    // id:'books' fixes битый hero CTA #books якорь. Три книги трилогии
    // (Своими силами / Из первых рук / Общий язык), обложки Wave 2 живые URL
    // portal HTTP 200 ✓. PT-названия рабочие Iskra, Zeka canon при next окне.
    // v1.0.24 деплой окно КОММИТ-1 landing.
    {
      id: 'books',
      type: 'projects',
      schemaType: 'ItemList',
      label: {
        en: 'Books', ru: 'Книги', pt: 'Livros',
      },
      title: {
        en: 'An open book series — read, copy, pass it on',
        ru: 'Открытая книжная серия — читайте, копируйте, передавайте дальше',
        pt: 'Uma série de livros aberta — lê, copia, passa adiante',
      },
      subtitle: {
        en: 'Books about thinking with your own head: method, access to knowledge, the city, intermediaries, testimony, dialogue. Free online, EPUB and PDF. Translations are in the workshop.',
        ru: 'Книги о том, как жить своим умом: метод, доступ к знанию, город, посредники, свидетельства, диалог. Бесплатно онлайн, EPUB и PDF. Переводы — в мастерской.',
        pt: 'Livros sobre pensar pela própria cabeça: método, acesso ao conhecimento, a cidade, os intermediários, o testemunho, o diálogo. Grátis online, EPUB e PDF. As traduções estão na oficina.',
      },
      items: [
        {
          key: 'trilogy-own-means',
          name: { en: 'By Our Own Means', ru: 'Своими силами', pt: 'Pelos Nossos Meios' },
          // Cont+2 badge cleanup (Andrey verdict item #5 2026-08-23):
          // kn1 = LIVE (Iskra S284 v1.0.22 shipped, chapters readable). Badge «Читать →» signals CTA.
          count: { en: 'Read →', ru: 'Читать →', pt: 'Ler →', de: 'Lesen →' },
          description: {
            en: 'How a team does its work: learns to see itself, designs something better, and brings into being what was not there before. Verne, Shelley, Holmes and Borges diagnose management long before the consultants.',
            ru: 'Как команда делает своё дело: учится видеть себя, придумывает лучшее устройство и рождает то, чего раньше не было. Верн, Шелли, Холмс и Борхес ставят управленческие диагнозы задолго до консультантов.',
            pt: 'Como uma equipa faz o seu trabalho: aprende a ver-se, desenha algo melhor e faz nascer o que antes não existia. Verne, Shelley, Holmes e Borges diagnosticam a gestão muito antes dos consultores.',
          },
          langs: { en: 'RU · translations in the workshop', ru: 'RU · переводы в мастерской', pt: 'RU · traduções na oficina' },
          category: { en: 'Trilogy', ru: 'Трилогия', pt: 'Trilogia' },
          // Cont+2 URL upgrade (Andrey verdict item #5 2026-08-23):
          // kn1 direct chapter reader URL (curl verified HTTP 200 pre-commit).
          // Prior anchor `#trilogy-svoimi_silami-heading` scrolled to portal heading;
          // «Читать →» badge implies CTA — direct chapter reader matches user intent.
          url: 'https://books.folkup.life/kn1/read/chapter-1-jules-verne',
          icon: 'https://books.folkup.life/covers/cover_kn1.svg',
          accent: 'var(--color-accent-padel)',
        },
        {
          key: 'trilogy-firsthand',
          name: { en: 'Firsthand', ru: 'Из первых рук', pt: 'Em Primeira Mão' },
          // Cont+2 badge fix (Andrey verdict item #5 2026-08-23):
          // kn2 = NOT open (drafting phase, concept links to portal general page).
          // Prior «trilogy, open now»/«трилогия, открыта» was factually incorrect
          // (kn1 open, kn2/kn3 в работе).
          count: { en: 'In the workshop', ru: 'В работе', pt: 'Em construção', de: 'In Arbeit' },
          description: {
            en: 'How knowledge reaches us: past those who locked it up, through those who stand in the middle — and how to check that what arrived is what was sent.',
            ru: 'Как знание доходит до нас: сквозь тех, кто его запирал, через тех, кто стоит посредине, — и как проверить, что донесли именно то.',
            pt: 'Como o conhecimento chega até nós: através de quem o trancou, por meio de quem está no meio — e como verificar que chegou o que foi enviado.',
          },
          langs: { en: 'RU · translations in the workshop', ru: 'RU · переводы в мастерской', pt: 'RU · traduções na oficina' },
          category: { en: 'Trilogy', ru: 'Трилогия', pt: 'Trilogia' },
          url: 'https://books.folkup.life/#trilogy-iz_pervyh_ruk-heading',
          icon: 'https://books.folkup.life/covers/cover_kn2.svg',
          accent: 'var(--color-accent-setubal)',
        },
        {
          key: 'trilogy-common-ground',
          name: { en: 'Common Ground', ru: 'Общий язык', pt: 'Linguagem Comum' },
          // Cont+2 badge unified (Andrey verdict item #5 2026-08-23):
          // kn3 = NOT open. Unified label с kn2 для consistency («В работе» singular).
          // Prior «готовится» → «В работе» (aligned с kn2 pattern).
          count: { en: 'In the workshop', ru: 'В работе', pt: 'Em construção', de: 'In Arbeit' },
          description: {
            en: 'Why agreeing is harder than it looks — an orchestra plays inside the head, but what comes out is a knock. On the barriers to understanding and how to break through them.',
            ru: 'Почему договориться труднее, чем кажется: в голове играет оркестр — наружу выходит стук. О барьерах понимания и о том, как через них пробиваться.',
            pt: 'Porque é mais difícil chegar a acordo do que parece — dentro da cabeça toca uma orquestra, mas o que sai é um bater. Sobre as barreiras da compreensão e como atravessá-las.',
          },
          langs: { en: 'RU · in the workshop', ru: 'RU · в мастерской', pt: 'RU · na oficina' },
          category: { en: 'Book', ru: 'Книга', pt: 'Livro' },
          url: 'https://books.folkup.life',
          icon: 'https://books.folkup.life/covers/cover_kn7.svg',
          accent: 'var(--color-accent-cogumelos)',
        },
      ],
    },

    // trilogy-visual section removed cont+2 per Andrey verdict item #4 (2026-08-23):
    // «УДАЛИТЬ секцию целиком — она дублирует основную трилогию блок выше»
    // (books section already carries trilogy titles + descriptions).
    // Section data preserved в git history (commit `21cc1cc` or earlier) for
    // potential restoration. TrilogyVisualSection interface/type kept in types.ts,
    // component file kept on disk (canonical anti-fragility pattern).
    // Trilogy glyphs assets (/public/images/trilogy/glyph-*.webp) preserved.

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
      // GLAV-6 KOFI-LINK-ON-MAIN (Iskra PAKET-GLAVNAYA S290-07 §3):
      // «buy us a coffee» / «поддержать нас чашкой кофе» → hyperlink к https://ko-fi.com/folkup
      // (target _blank rel noopener). Схема sameAs первоисточник (schema.ts + App.vue).
      // PT text preserved pending Quatro Olhos (не мой scope, второй PR каскад).
      // Cont+2 «раньше красивых слов» → «перед оформлением» (Andrey verdict item #6):
      // Removes metaphor-возвышенность («красивые слова» — vague) в favor of nachlaß
      // technical phrasing «перед оформлением» (warnings come before pretty formatting).
      // Matches broader landing-refresh mandate: less метafor, more по делу.
      // EN/PT/DE cascaded (Lyolik/Zeka/Bolik Vier-Augen retro-review pending).
      text: {
        en: 'Every text walks the same road: draft → fact-checking against sources → editing → signature. We show where each fact comes from and mark honestly where knowledge ends and assumption begins. Where a mistake can cost health — as in the mushroom encyclopedia — warnings come before formatting.\n\nThe workshop runs without investors or ads: nobody buys our conclusions, nobody tunes our texts to please algorithms. If any of this was useful to you, you can <a href="https://ko-fi.com/folkup" target="_blank" rel="noopener">buy us a coffee</a>. It is the only cash register in the house.',
        ru: 'Путь один для всех текстов: черновик → проверка фактов по источникам → редактура → подпись. Мы показываем, откуда взят каждый факт, и честно помечаем границу, где кончается знание и начинается предположение. Там, где ошибка может стоить здоровья — как в грибной энциклопедии, — предупреждения стоят перед оформлением.\n\nМастерская живёт без инвесторов и рекламы: никто не покупает наши выводы и не подкручивает наши тексты под алгоритмы. Если сделанное пригодилось — можно <a href="https://ko-fi.com/folkup" target="_blank" rel="noopener">поддержать нас чашкой кофе</a>. Это единственная касса в доме.',
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
        ru: 'Декларация неогороженного знания',
        pt: 'A Declaração do Conhecimento Não Cercado',
        de: 'Die Deklaration gegen die Einhegung des Wissens',
      },
      body: {
        en: 'Knowledge keeps getting fenced off: paywalled, gated, sold back to the people who paid for it. The Declaration is our answer — seven principles against the enclosure of the mind, open for any person or organization to sign. A teenage edition is in the workshop: same principles, plain words, no condescension.',
        ru: 'Знание всё чаще огораживают: прячут за пейволлы, фильтруют алгоритмами, продают обратно тем, кто за него уже заплатил. Декларация — наш ответ: семь принципов против огораживания разума, открытых для подписи любым человеком или организацией. Подростковое издание — в мастерской: те же принципы, простые слова, без снисхождения.',
        pt: 'O conhecimento é cada vez mais cercado: fechado atrás de paywalls, filtrado por algoritmos, vendido de volta a quem já pagou por ele. A Declaração é a nossa resposta — sete princípios contra o cercamento da mente, abertos à assinatura de qualquer pessoa ou organização. Uma edição para adolescentes está na oficina: os mesmos princípios, palavras simples, sem condescendência.',
        de: 'Wissen wird ständig eingezäunt: hinter Bezahlschranken gesperrt, mit Zugangsbeschränkungen versehen, an jene zurückverkauft, die es bereits bezahlt haben. Die Deklaration ist unsere Antwort — sieben Prinzipien gegen die Einhegung des Geistes, offen für jede Person und jede Organisation zur Unterzeichnung. Eine Ausgabe für Jugendliche entsteht in der Werkstatt: dieselben Prinzipien, klare Worte, ohne Herablassung.',
      },
      cta: {
        label: {
          en: 'Read and sign',
          ru: 'Читать и подписать',
          pt: 'Ler e assinar',
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
      // Cont+2 Andrey verdict item #3 (2026-08-23 landing refresh):
      // Rename to no-numbers title per «мы нигде не указываем точного количества».
      // Prior title «Три энциклопедии открыты сейчас — список растёт» hard-coded «3»
      // — actually 6 encyclopedias LIVE (Setúbal + Padel + Cogumelos promoted; Tarot +
      // Aquarium + Dial-up in background per Andrey «эти три активные, остальные не
      // рекламируем»). No-numbers title = zero drift when promotion set changes.
      title: {
        en: 'Our open encyclopedias',
        ru: 'Наши открытые энциклопедии',
        pt: 'As nossas enciclopédias abertas',
        de: 'Unsere offenen Enzyklopädien',
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
          count: { en: 'a growing encyclopedia', ru: 'энциклопедия растёт', pt: 'enciclopédia em crescimento', de: 'eine wachsende Enzyklopädie' },
          description: {
            en: 'The fastest-growing racket sport in the world. Rules, technique, courts, gear, tournaments — all in one place, in three languages.',
            ru: 'Самый быстрорастущий ракеточный спорт в мире. Правила, техника, корты, экипировка, турниры — всё в одном месте, на трёх языках.',
            pt: 'O desporto de raquete que mais cresce no mundo. Regras, técnica, courts, equipamento, torneios — tudo num só lugar, em três idiomas.',
          },
          langs: { en: 'EN · RU · PT', ru: 'EN · RU · PT', pt: 'EN · RU · PT' },
          category: { en: 'Sport', ru: 'Спорт', pt: 'Desporto' },
          url: PROJECT_URLS.padel,
          icon: '/images/project-icons/padel.webp',
          hero: '/images/encyclopedia-heroes/hero-padel.webp',
          accent: 'var(--color-accent-padel)',
        },
        {
          key: 'setubal',
          name: { en: 'Setúbal', ru: 'Сетубал', pt: 'Setúbal' },
          count: { en: 'a growing encyclopedia', ru: 'энциклопедия растёт', pt: 'enciclopédia em crescimento', de: 'eine wachsende Enzyklopädie' },
          description: {
            en: 'A Portuguese city where the mountains meet the sea. Markets, routes, restaurants, history — written by people who actually walk the streets.',
            ru: 'Португальский город, где горы встречаются с морем. Рынки, маршруты, рестораны, история — написано людьми, которые ходят по этим улицам.',
            pt: 'Uma cidade portuguesa onde a serra encontra o mar. Mercados, rotas, restaurantes, história — escrita por quem anda nestas ruas.',
          },
          langs: { en: 'EN · RU · PT', ru: 'EN · RU · PT', pt: 'EN · RU · PT' },
          category: { en: 'City', ru: 'Город', pt: 'Cidade' },
          url: PROJECT_URLS.setubal,
          icon: '/images/project-icons/setubal.webp',
          hero: '/images/encyclopedia-heroes/hero-setubal.webp',
          accent: 'var(--color-accent-setubal)',
        },
        {
          key: 'cogumelos',
          name: { en: 'Cogumelos', ru: 'Когумелуш', pt: 'Cogumelos' },
          count: { en: 'a growing encyclopedia', ru: 'энциклопедия растёт', pt: 'enciclopédia em crescimento', de: 'eine wachsende Enzyklopädie' },
          description: {
            en: 'Portuguese mushrooms. Which ones to eat, which ones to photograph from a safe distance. Every species verified, every warning real.',
            ru: 'Португальские грибы. Какие есть, а какие лучше фотографировать на расстоянии. Каждый вид проверен, каждое предупреждение — настоящее.',
            pt: 'Cogumelos portugueses. Quais comer, quais fotografar a uma distância segura. Cada espécie verificada, cada aviso real.',
          },
          langs: { en: 'EN · RU · PT', ru: 'EN · RU · PT', pt: 'EN · RU · PT' },
          category: { en: 'Nature', ru: 'Природа', pt: 'Natureza' },
          url: PROJECT_URLS.cogumelos,
          icon: '/images/project-icons/cogumelos.webp',
          hero: '/images/encyclopedia-heroes/hero-cogumelos.webp',
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
          // GLAV-5 AI-HONESTY-i18n (Iskra PAKET-GLAVNAYA S290-07 §3):
          // Canon replace RU+EN — «Not machine translation» противоречит духу AI-прозрачности
          // (переводчики — AI-форниты, мы это подписываем, а не открещиваемся).
          // «Two to three languages per encyclopedia» removed (число устаревает, DE идёт).
          // PT — Зека вместе с GLAV-3 (второй PR каскад).
          text: {
            en: "Translation is workshop work: an AI translator's draft, editing, native-speaker checks, a signature. You can see who translated and who verified.",
            ru: 'Перевод — часть мастерской: черновик от AI-переводчика, редактура, сверка с носителем, подпись. Видно, кто переводил и кто проверял.',
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
          // GLAV-7a EMAILS-CLAIM-REMOVE (Iskra PAKET-GLAVNAYA S290-07 §3):
          // «Branded emails on new releases» / «Фирменные рассылки о новых релизах» /
          // «Emails com a marca nos novos lançamentos» — убрано из всех 3 языков.
          // Рассылка задумана, но состояние реализации неизвестно (слово Андрея S290);
          // главная не обещает несуществующее. GLAV-7b (Кочегар newsletter audit) в P2.
          text: {
            en: 'Push to publish. Status monitoring. The boring stuff that keeps a library running.',
            ru: 'Push для публикации. Мониторинг статуса. Скучные вещи, без которых библиотека не работает.',
            pt: 'Push para publicar. Monitorização de estado. As coisas chatas que mantêm uma biblioteca a funcionar.',
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
        {
          key: 'iskra',
          name: { en: 'Iskra', ru: 'Искра', pt: 'Iskra' },
          role: {
            en: 'Editorial Standard',
            ru: 'Стандарт редактуры',
            pt: 'Padrão editorial',
          },
          oneliner: {
            en: 'Reads every text in four eyes. Trusts nothing published untested.',
            ru: 'Читает каждый текст в четыре глаза. Не выпускает непроверенное.',
            pt: 'Lê cada texto em quatro olhos. Nada sai por verificar.',
          },
        },
        {
          key: 'frida',
          name: { en: 'Frida', ru: 'Фрида', pt: 'Frida' },
          role: {
            en: 'Illustrator',
            ru: 'Иллюстратор',
            pt: 'Ilustradora',
          },
          oneliner: {
            en: 'Turns prompts into pictures. Every image a small story, every story a filter against slop.',
            ru: 'Превращает промпты в картинки. Каждое изображение — история, каждая история — фильтр против слопа.',
            pt: 'Transforma prompts em imagens. Cada imagem uma pequena história, cada história um filtro contra o slop.',
          },
        },
        {
          key: 'lyolik',
          name: { en: 'Lyolik', ru: 'Лёлик', pt: 'Lyolik' },
          role: {
            en: 'English Translator',
            ru: 'Переводчик на английский',
            pt: 'Tradutor de inglês',
          },
          oneliner: {
            en: 'Turns Russian into English without losing the warmth or the sharp edges.',
            ru: 'Переводит с русского на английский, не теряя ни тепла, ни острых углов.',
            pt: 'Traduz do russo para o inglês sem perder o calor nem os cantos afiados.',
          },
        },
        {
          key: 'bolik',
          name: { en: 'Bolik', ru: 'Болик', pt: 'Bolik' },
          role: {
            en: 'German Translator',
            ru: 'Переводчик на немецкий',
            pt: 'Tradutor de alemão',
          },
          oneliner: {
            en: 'Berlin ear, four-eyes discipline. Every idiom checked against a native speaker.',
            ru: 'Берлинское ухо, дисциплина четырёх глаз. Каждая идиома через носителя.',
            pt: 'Ouvido berlinense, disciplina de quatro olhos. Cada expressão passa por um falante nativo.',
          },
        },
        {
          key: 'zeka',
          name: { en: 'Zeka', ru: 'Зека', pt: 'Zeka' },
          role: {
            en: 'Portuguese (EU) Translator',
            ru: 'Переводчик на португальский (EU)',
            pt: 'Tradutor de português (EU)',
          },
          oneliner: {
            en: 'Lisbon Portuguese, not Brazilian. Every word tested against local usage.',
            ru: 'Португальский лиссабонский, не бразильский. Каждое слово через локальное употребление.',
            pt: 'Português de Lisboa, não do Brasil. Cada palavra testada contra o uso local.',
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
