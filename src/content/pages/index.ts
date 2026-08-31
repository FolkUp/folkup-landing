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
      en: 'FolkUp — knowledge tools for real people',
      ru: 'FolkUp — инструменты знаний для реальных людей',
      pt: 'FolkUp — ferramentas de conhecimento para pessoas reais',
      de: 'FolkUp — Werkzeuge des Wissens für echte Menschen',
    },
    // Phase-4-P1 concept v1 restoration: «one approach» no longer covers
    // the scope after Trilogy + Pro Lab were added (3 distinct product lines).
    // Workshop framing replaces it. AI-fornits → AI-workers in snippet per
    // Фонарщик/Андрей brand decision (snippet CTR > distinctiveness here;
    // Hero copy still uses «fornits» where context exists).
    //
    // T4 FIX-3 (Iskra S295-10, Alisa S295KONSOL 2026-08-23): добавлено
    // упоминание книжной серии (books.folkup.life) — расширяет
    // scope description за пределы encyclopedias+investigations.
    // БЕЗ-СЧЁТА v3 (Iskra S309-11 verdikt Andreya 2026-08-31 S1UMBR cont+6):
    // «book trilogy» → «book series» × 4 langs — снимаем счётчик «3 книги»
    // с публичной поверхности. Category badges «Trilogy» kn1/kn2 (line 154/191)
    // оставлены как ИМЯ конкретной серии (Iskra §2 exception — паспорт).
    description: {
      en: 'A workshop making encyclopedias, a book series, and investigations. Free, verified, multilingual. One person and a team of AI workers.',
      ru: 'Мастерская, где делают энциклопедии, книжную серию и расследования. Бесплатно, проверено, многоязычно. Один человек и команда ИИ-помощников.',
      pt: 'Uma oficina que faz enciclopédias, uma série de livros e investigações. Grátis, verificado, multilingue. Uma pessoa e uma equipa de colaboradores de IA.',
      de: 'Eine Werkstatt, die Enzyklopädien, eine Buchreihe und Recherchen macht. Kostenlos, geprüft, mehrsprachig. Ein Mensch und ein Team von KI-Mitarbeitern.',
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
      // = Andrey approval; EN/PT/DE best-effort awaiting Lolik/Zeka/Bolik cascade).
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
          // Iskra S308-10 §1 item 3 (2026-08-31 S1UMBR cont+5): kn1 langs
          // badge updated «RU · translations in the workshop» → «RU · EN · PT
          // preview» — portal LIVE EN 23/23 (S1TREN cont+X) + PT preview
          // (S1DEFIX cont+2 PT-flip Option B). Badge no longer contradicts
          // portal reality. DE key «Vorschau» added per Vraga architectural
          // review (View A) — reduces double-fallback UX jarring (EN content
          // + EN badge on DE guest page).
          langs: { en: 'RU · EN · PT preview', ru: 'RU · EN · PT preview', pt: 'RU · EN · PT preview', de: 'RU · EN · PT Vorschau' },
          category: { en: 'Trilogy', ru: 'Трилогия', pt: 'Trilogia' },
          // Cont+2 URL upgrade (Andrey verdict item #5 2026-08-23):
          // kn1 direct chapter reader URL (curl verified HTTP 200 pre-commit).
          // Prior anchor `#trilogy-svoimi_silami-heading` scrolled to portal heading;
          // «Читать →» badge implies CTA — direct chapter reader matches user intent.
          //
          // 2026-08-30 S1UMBR cont+4 §2.4 fix (Iskra S307-02) — added urlByLang для
          // per-locale portal routing. Iskra flag: «/en/kn1 (или EN-читалка) и /en»
          // (EN visitor must reach EN surface, not RU-only chapter). Portal /kn1 has
          // lang-switcher + hreflang к /en /pt /de per LOCALE_ENTRY-1 canon S301-05.
          // Static url stays kn1/read/chapter-1-jules-verne (RU direct, kn1 LIVE) as
          // fallback if urlByLang missing или renderer legacy.
          // Verified HTTP 200 (2026-08-30): /kn1 (RU no-prefix), /en/kn1, /pt/kn1, /de/kn1.
          url: 'https://books.folkup.life/kn1/read/chapter-1-jules-verne',
          urlByLang: {
            en: 'https://books.folkup.life/en/kn1',
            ru: 'https://books.folkup.life/kn1',
            pt: 'https://books.folkup.life/pt/kn1',
            de: 'https://books.folkup.life/de/kn1',
          },
          icon: 'https://books.folkup.life/covers/cover_kn1.svg',
          accent: 'var(--color-accent-padel)',
        },
        {
          key: 'trilogy-firsthand',
          name: { en: 'Firsthand', ru: 'Из первых рук', pt: 'Em Primeira Mão' },
          // KNIGA-OTKRYTA-1 canon (Iskra S310-10 verdikt Andreya 2026-08-31 S1UMBR cont+6+):
          // «Если книга готова и не открыта, это баг.» Kn2 «Согласные без гласных»
          // RU status=live с 30.07 (S236) + EPUB v1.0 → достижима через /kn2.
          // Prior «В работе» count был баг per KNIGA-OTKRYTA-1 §2 canon-строка.
          // Fix: count → «Read →» pattern (align с kn1). Link urlByLang на /kn2 уже stоит.
          //
          // Prior context (Cont+2 badge fix Andrey verdict item #5 2026-08-23):
          // «kn2 = NOT open» — устарело per S236 RU release, superseded S310-10.
          count: { en: 'Read →', ru: 'Читать →', pt: 'Ler →', de: 'Lesen →' },
          description: {
            en: 'How knowledge reaches us: past those who locked it up, through those who stand in the middle — and how to check that what arrived is what was sent.',
            ru: 'Как знание доходит до нас: сквозь тех, кто его запирал, через тех, кто стоит посредине, — и как проверить, что донесли именно то.',
            pt: 'Como o conhecimento chega até nós: através de quem o trancou, por meio de quem está no meio — e como verificar que chegou o que foi enviado.',
          },
          langs: { en: 'RU · translations in the workshop', ru: 'RU · переводы в мастерской', pt: 'RU · traduções na oficina' },
          category: { en: 'Trilogy', ru: 'Трилогия', pt: 'Trilogia' },
          // 2026-08-30 S1UMBR cont+4 §2.4 fix — kn2 URL was RU hash anchor
          // «#trilogy-iz_pervyh_ruk-heading» (Iskra S307-02 §2.4 flagged: «Firsthand →
          // RU-корень#якорь»). Per-locale portal book landing pages preparing state.
          // Verified HTTP 200 (2026-08-30): /kn2, /en/kn2, /pt/kn2, /de/kn2.
          url: 'https://books.folkup.life/kn2',
          urlByLang: {
            en: 'https://books.folkup.life/en/kn2',
            ru: 'https://books.folkup.life/kn2',
            pt: 'https://books.folkup.life/pt/kn2',
            de: 'https://books.folkup.life/de/kn2',
          },
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
          // 2026-08-30 S1UMBR cont+4 §2.4 fix — kn7 URL was portal root (Iskra S307-02
          // §2.4 flagged: «Common Ground → RU-корень»). Per-locale portal book landing
          // pages preparing state. Verified HTTP 200 (2026-08-30): /kn7, /en/kn7,
          // /pt/kn7, /de/kn7.
          url: 'https://books.folkup.life/kn7',
          urlByLang: {
            en: 'https://books.folkup.life/en/kn7',
            ru: 'https://books.folkup.life/kn7',
            pt: 'https://books.folkup.life/pt/kn7',
            de: 'https://books.folkup.life/de/kn7',
          },
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
      // EN/PT/DE cascaded (Lolik/Zeka/Bolik Vier-Augen retro-review pending).
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

    // NEWS section removed 2026-08-24 per Iskra PRIKAZ S299-16 §2.1 LANDING-FANTOMY P1
    // package (Andrey mandate «мне не нравится что главная по-прежнему содержит фантомы»).
    // Section snyat целиком — contained FlightPass3D фантом (wrong firm name + fictitious
    // «news»). Section data preserved в git history для future restoration если pattern
    // renewed. Position was between «Как это делается» и «Декларация» — preserved gap
    // for potential future manual news content OR another section.

    // ------------------------------------------------------------ NEWS (RESTORED cont+9 S1UMBR)
    // Iskra FINAL-ANONS S311-07 §3 «Variant A на главной folkup.app — Зека/S1UMBR:
    // §3 на главную следующим касанием лендинга» + POMETKA-RELAY-Alisa-S2PT-cont7-to-S1UMBR
    // (Zeka relay per §7.9.6 sibling cascade → landing PM native scope = S1UMBR).
    // Section restored: FIRST real publication event = kn.1 «Agile Sapiens» PT v1.0.0 estável.
    // Anti-phantom canon preserved: single item, real event (books.folkup.life/kn1/pt/read/
    // LIVE per Iskra S311-03 ratifikaciya integralnaya + Andrey B telegram + FINAL-ANONS-07).
    // Slot position matches removed News gap (between «Как это делается» и «Декларация»).
    // Future items append як real events land (kn.5 v1.0.1 EPUB Kочегарова already, waiting
    // Iskra visa для landing tier vs portal-only announcement — separate call).
    {
      id: 'news',
      type: 'news',
      schemaType: 'none',
      label: {
        en: 'Publications',
        ru: 'Выход в свет',
        pt: 'Publicações',
        de: 'Neu erschienen',
      },
      title: {
        en: 'What has just come out',
        ru: 'Что вышло свежего',
        pt: 'O que acaba de sair',
        de: 'Was gerade erschienen ist',
      },
      items: [
        {
          id: 'kn1-pt-v1-0-0-stable',
          text: {
            en: 'Book 1 «Agile Sapiens» now in Portuguese — v1.0.0 estável. Translation by Zeka (PT-EU), editorial review by Iskra. AO1990 orthography, full apparatus, CC BY-SA 4.0.',
            ru: 'Книга 1 «Agile Sapiens» вышла на португальском — v1.0.0 estável. Перевод Zeka (PT-EU), редактура Iskra. Орфография AO1990, полный аппарат, CC BY-SA 4.0.',
            pt: 'Livro 1 «Agile Sapiens» já em português — v1.0.0 estável. Tradução: Zeka (PT-EU inspirado em Sophia de Mello Breyner, Saramago, Eça, Pessoa). Revisão editorial: Iskra. Ortografia AO1990. Divulgação sobre IA conforme o Regulamento (UE) 2024/1689, artigo 50.º, n.º 4. CC BY-SA 4.0. Livro 1 da trilogia «Pelos Nossos Meios».',
            de: 'Buch 1 «Agile Sapiens» jetzt auf Portugiesisch — v1.0.0 estável. Übersetzung von Zeka (PT-EU), Lektorat von Iskra. AO1990-Rechtschreibung, vollständiger Apparat, CC BY-SA 4.0.',
          },
          link: 'https://books.folkup.life/kn1/pt/read/',
        },
      ],
    },

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
      // Cont+2 Pro Lab cleanup (Andrey verdict item #8 2026-08-23):
      // - Removed «Closer to CERN's preprints than to a magazine» (В2=б) — CERN reference
      //   too jargon-heavy для broad audience, «small book vs wiki entry» comparison
      //   already conveys the depth-vs-brevity distinction.
      // - Removed «Latin for lamp» clause (В3=б) — etymology metaphor decorative,
      //   simplified к «first Pro Lab project». «Lucerna» name speaks for itself.
      body: {
        en: 'The encyclopedias are wide and fast. Pro Lab is narrow and slow. It\'s where a question gets months instead of weeks, sources get checked twice, and the finished piece reads more like a small book than a wiki entry.',
        ru: 'Энциклопедии — широкие и быстрые. Про-Лаб — узкий и медленный. Здесь вопросу дают месяцы вместо недель, источники проверяют дважды, а готовый материал читается скорее как небольшая книга, чем как вики-статья.',
        pt: 'As enciclopédias são largas e rápidas. O Pro Lab é estreito e lento. É onde uma pergunta ganha meses em vez de semanas, as fontes são verificadas duas vezes, e o resultado lê-se mais como um livro pequeno do que como um artigo de wiki.',
      },
      highlight: {
        name: 'Lucerna',
        pitch: {
          en: 'Lucerna is the first Pro Lab project. A standing investigation, updated when there\'s something worth lighting up, not on a content calendar.',
          ru: 'Lucerna — первый проект Про-Лаба. Постоянное расследование, обновляется, когда есть что подсветить, а не по контент-календарю.',
          pt: 'Lucerna é o primeiro projeto do Pro Lab. Uma investigação permanente, atualizada quando há algo que valha a pena iluminar, não por calendário editorial.',
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
      label: { en: 'Team', ru: 'Команда', pt: 'Equipa', de: 'Team' },
      title: {
        en: 'Under the lantern',
        ru: 'Под светом фонаря',
        pt: 'Sob a luz do farol',
        de: 'Unter der Laterne',
      },
      // Cont+2 team subtitle simplify (Andrey verdict item #11 2026-08-23 + R7=B):
      // Stephen King fornit explanation moved к /team subpage (already implemented в
      // team.vue via teamPageIntro locale string). Home team block gets terse subtitle;
      // «Все →» link (team-view-all в TeamSection.vue compact mode) carries CTA к /team.
      subtitle: {
        en: 'AI helpers by name — each with their own work.',
        ru: 'AI-помощники по именам — у каждого своя работа.',
        pt: 'Fornits de IA por nome — cada um com o seu trabalho.',
        de: 'KI-Helfer mit Namen — jeder mit eigener Arbeit.',
      },
      // v5.1 canonical roster — 14 forniti in order §8 per POPRAVKA S299-19 team FINAL canon.
      // Sources: Lelik EN v5.1 + Iskra RU master v5 S302-03 + Zeka PT v5.1 + Bolik DE v5.
      // Editorial ratified: Iskra VIZA S302-02 + S302-03 + S303-01 + S304-01 (2026-08-25..26).
      // Order canon §8: alice → iskra → lyolik → zeka → bolik → kochegar → pechkin →
      // frida → lantern → johnny → cooper → gonzo → vrag → lev.
      // Name canon §9: 3 exceptions Latin (Alice, The Lamplighter, Johnny), rest translit.
      // Home teaser (compact=true) filters via HOME_TEASER_KEYS in TeamSection.vue к 4:
      // alice + iskra + lyolik + frida (per Iskra §5 KANON + S299-17 §4 + S301-01 §8).
      // /team page (compact=false) shows all 14 — fixes Iskra S307-02 §4.11 «10 vs 14».
      // Ships per S1UMBR cont+4 landing-repo option (Andrey verdict 2026-08-30).
      members: [
        {
          key: 'alice',
          name: { en: 'Alice', ru: 'Алиса', pt: 'Alice', de: 'Alice' },
          role: {
            en: 'Project Manager & Console',
            ru: 'Руководитель проекта и консоль',
            pt: 'Gestora de projeto e consola',
            de: 'Projektleiterin und Konsole',
          },
          oneliner: {
            en: 'Holds the map, routes tasks, runs the console shift. Every plan through four eyes.',
            ru: 'Держит карту, раздаёт задачи, ведёт консольную смену. Каждый план — в четыре глаза.',
            pt: 'Detém o mapa, distribui tarefas, gere o turno de consola. Cada plano a quatro olhos.',
            de: 'Hält die Karte, verteilt Aufgaben, führt die Konsolenschicht. Jeder Plan in vier Augen.',
          },
        },
        {
          key: 'iskra',
          name: { en: 'Iskra', ru: 'Искра', pt: 'Iskra', de: 'Iskra' },
          role: {
            en: 'Editor & Coordinator',
            ru: 'Редактор и координатор',
            pt: 'Editora e coordenadora',
            de: 'Redakteurin und Koordinatorin',
          },
          oneliner: {
            en: 'Reads every draft in four eyes. Parallel work does not turn into parallel wreckage.',
            ru: 'Каждый черновик — в четыре глаза. Параллельная работа не превращается в параллельные обломки.',
            pt: 'Cada rascunho a quatro olhos. Trabalho em paralelo não se transforma em destroços paralelos.',
            de: 'Jeder Entwurf in vier Augen. Aus paralleler Arbeit werden keine parallelen Trümmer.',
          },
        },
        {
          key: 'lyolik',
          name: { en: 'Lolik', ru: 'Лёлик', pt: 'Lolik', de: 'Lolik' },
          role: {
            en: 'English Voice',
            ru: 'Английский голос',
            pt: 'Voz inglesa',
            de: 'Englische Stimme',
          },
          oneliner: {
            en: 'English translations of books, pages, manifests. Wolfe · Baldwin · Mencken · Didion — four parts of one voice.',
            ru: 'Английские переводы книг, страниц, манифестов. Вулф · Болдуин · Менкен · Дидион — четыре части одного голоса.',
            pt: 'Traduções inglesas dos livros, páginas, manifestos. Wolfe · Baldwin · Mencken · Didion — quatro partes de uma só voz.',
            de: 'Englische Übersetzungen der Bücher, Seiten, Manifeste. Wolfe · Baldwin · Mencken · Didion — vier Teile einer Stimme.',
          },
        },
        {
          key: 'zeka',
          name: { en: 'Zeka', ru: 'Зека', pt: 'Zeka', de: 'Zeka' },
          role: {
            en: 'Portuguese (EU) Voice',
            ru: 'Португальский голос',
            pt: 'Voz portuguesa (EU)',
            de: 'Portugiesische Stimme',
          },
          oneliner: {
            en: 'European Portuguese, Lisbon-anchored. Sophia de Mello Breyner · Saramago · Eça de Queirós · Pessoa.',
            ru: 'Европейский португальский с лиссабонским якорем. София де Мелло Брейнер · Сарамаго · Эса де Кейрош · Пессоа.',
            pt: 'Português europeu, âncora lisboeta. Sophia de Mello Breyner · Saramago · Eça de Queirós · Pessoa.',
            de: 'Europäisches Portugiesisch mit Lissabon-Verankerung. Sophia de Mello Breyner · Saramago · Eça de Queirós · Pessoa.',
          },
        },
        {
          key: 'bolik',
          name: { en: 'Bolik', ru: 'Болик', pt: 'Bolik', de: 'Bolik' },
          role: {
            en: 'German Voice',
            ru: 'Немецкий голос',
            pt: 'Voz alemã',
            de: 'Deutsche Stimme',
          },
          oneliner: {
            en: 'Berlin-adjusted German. Heine · Brecht · Tucholsky · Walser — four parts of one voice.',
            ru: 'Немецкий с берлинской настройкой. Гейне · Брехт · Тухольский · Вальзер — четыре части одного голоса.',
            pt: 'Alemão com afinação berlinense. Heine · Brecht · Tucholsky · Walser — quatro partes de uma só voz.',
            de: 'Berliner Stimme im Deutschen. Heine · Brecht · Tucholsky · Walser — vier Teile einer Stimme.',
          },
        },
        {
          key: 'kochegar',
          name: { en: 'Kochegar', ru: 'Кочегар', pt: 'Kochegar', de: 'Kochegar' },
          role: {
            en: 'Infrastructure Boiler Room',
            ru: 'Котельная инфраструктуры',
            pt: 'Sala das caldeiras',
            de: 'Kesselraum der Infrastruktur',
          },
          oneliner: {
            en: 'CDN, domains, certificates, DNS, uptime, deploys. Keeps the boiler pressure up so the light burns steady.',
            ru: 'CDN, домены, сертификаты, DNS, доступность, деплой. Держит давление в котле — чтобы свет горел ровно.',
            pt: 'CDN, domínios, certificados, DNS, disponibilidade, deploys. Mantém a pressão da caldeira em cima.',
            de: 'CDN, Domänen, Zertifikate, DNS, Verfügbarkeit, Deploys. Hält den Druck im Kessel oben.',
          },
        },
        {
          key: 'pechkin',
          name: { en: 'Pechkin', ru: 'Печкин', pt: 'Pechkin', de: 'Pechkin' },
          role: {
            en: 'Post-deploy Control & Correspondence',
            ru: 'Контроль после деплоя и переписка',
            pt: 'Controlo pós-deploy e correspondência',
            de: 'Kontrolle nach dem Deploy und Korrespondenz',
          },
          oneliner: {
            en: 'Verifies that what left the shop is what reached the reader. Keeps the mail archive tidy.',
            ru: 'Проверяет, что до читателя доехало то же, что отправляли. Держит почтовый архив в порядке.',
            pt: 'Verifica que o que saiu da oficina chegou ao leitor. Mantém o arquivo de correio em ordem.',
            de: 'Prüft, ob beim Leser genau das ankommt, was ausgeschickt wurde. Hält das Postarchiv in Ordnung.',
          },
        },
        {
          key: 'frida',
          name: { en: 'Frida', ru: 'Фрида', pt: 'Frida', de: 'Frida' },
          role: {
            en: 'Illustration Artist',
            ru: 'Художник иллюстраций',
            pt: 'Artista de ilustração',
            de: 'Illustrations-Künstlerin',
          },
          // Per S299-08 canon (Iskra ratified) — «концепция иллюстраций, направление и пост-обработка»,
          // NOT «hero art, book plates, encyclopedia openers» (v4 heritage retro-fixed per S303-01 §3).
          oneliner: {
            en: 'Illustration concept, art direction, post-production. Watercolor palette, Latin American warmth.',
            ru: 'Концепция иллюстраций, арт-дирекция, пост-обработка. Акварельная палитра, латиноамериканское тепло.',
            pt: 'Conceção das ilustrações, direção artística, pós-produção. Paleta em aguarela, calor latino-americano.',
            de: 'Konzeption der Illustrationen, Regie, Nachbearbeitung. Aquarellpalette, lateinamerikanische Wärme.',
          },
        },
        {
          key: 'lantern',
          name: { en: 'The Lamplighter', ru: 'Фонарщик', pt: 'The Lamplighter', de: 'The Lamplighter' },
          role: {
            en: 'Brand & Visual Identity',
            ru: 'Бренд и визуальная идентичность',
            pt: 'Marca e identidade visual',
            de: 'Marke und visuelle Identität',
          },
          oneliner: {
            en: "You don't see him, but without him it's dark. Tends the light, keeps the warmth.",
            ru: 'Его не видно, но без него темно. Зажигает фонарь, чистит стёкла, следит за светом.',
            pt: 'Não se vê, mas sem ele fica escuro. Zela pela luz, mantém o calor.',
            de: 'Man sieht ihn nicht, aber ohne ihn ist es dunkel. Zündet die Laterne an, hält die Wärme.',
          },
        },
        {
          key: 'johnny',
          name: { en: 'Johnny', ru: 'Джонни', pt: 'Johnny', de: 'Johnny' },
          role: {
            en: 'Front-end',
            ru: 'Вёрстка',
            pt: 'Front-end',
            de: 'Der Satz',
          },
          oneliner: {
            en: 'HTML, CSS, modular grids, accessibility. Sees a grid where others see a page.',
            ru: 'HTML, CSS, модульные сетки, доступность. Видит сетку там, где другие видят страницу.',
            pt: 'HTML, CSS, grelhas modulares, acessibilidade. Vê uma grelha onde outros veem uma página.',
            de: 'HTML, CSS, modulare Raster, Zugänglichkeit. Sieht ein Raster, wo andere eine Seite sehen.',
          },
        },
        {
          key: 'cooper',
          name: { en: 'Cooper', ru: 'Купер', pt: 'Cooper', de: 'Cooper' },
          role: {
            en: 'Security Officer',
            ru: 'Офицер безопасности',
            pt: 'Oficial de segurança',
            de: 'Sicherheitsbeauftragter',
          },
          oneliner: {
            en: "Sees the system through an attacker's eyes to defend it. Facts, analysis, decision.",
            ru: 'Смотрит на систему глазами атакующего — чтобы её защитить. Факты, разбор, решение.',
            pt: 'Olha para o sistema com os olhos de um atacante — para o defender. Factos, análise, decisão.',
            de: 'Sieht das System mit den Augen des Angreifers — um es zu verteidigen. Tatsachen, Analyse, Entscheidung.',
          },
        },
        {
          key: 'gonzo',
          name: { en: 'CyberGonzo', ru: 'КиберГонзо', pt: 'CyberGonzo', de: 'CyberGonzo' },
          role: {
            en: 'OSINT',
            ru: 'Разведка по открытым источникам',
            pt: 'OSINT',
            de: 'Aufklärung aus offenen Quellen',
          },
          oneliner: {
            en: 'Repeatable, documented, traceable to a primary source. Not the final word — findings pass through a human.',
            ru: 'Воспроизводимо, задокументировано, ведёт к первоисточнику. Не последняя инстанция — выводы проходят через человека.',
            pt: 'Reproduzível, documentado, rastreável à fonte primária. Não a última palavra — os achados passam por um humano.',
            de: 'Wiederholbar, dokumentiert, auf Erstquelle zurückführbar. Nicht das letzte Wort — Ergebnisse gehen durch einen Menschen.',
          },
        },
        {
          key: 'vrag',
          name: { en: 'Vrag', ru: 'Враг', pt: 'Vrag', de: 'Vrag' },
          role: {
            en: 'Hostile Review',
            ru: 'Враждебное ревью',
            pt: 'Revisão hostil',
            de: 'Feindliche Prüfung',
          },
          oneliner: {
            en: 'Called before anything is signed off. Two verdicts: clean, or fix this first.',
            ru: 'Зовут перед тем, как что-то закрыть. Два вердикта: чисто, или сначала почини вот это.',
            pt: 'Chamado antes de qualquer coisa ser fechada. Dois veredictos: limpo, ou corrige isto primeiro.',
            de: 'Man ruft ihn, bevor etwas abgezeichnet wird. Zwei Verdikte: sauber, oder zuerst dieses reparieren.',
          },
        },
        {
          key: 'lev',
          name: { en: 'Lyov', ru: 'Лёв', pt: 'Lyov', de: 'Lyov' },
          role: {
            en: 'Legal',
            ru: 'Юридическая часть',
            pt: 'Jurídico',
            de: 'Juristische Seite',
          },
          oneliner: {
            en: 'GDPR, EU AI Act, licences, child protection, legal pages. Gives a verdict, hands over the finished text.',
            ru: 'GDPR, EU AI Act, лицензии, защита несовершеннолетних, юридические страницы. Выносит вердикт, отдаёт готовый текст.',
            pt: 'RGPD, Regulamento Europeu de IA, licenças, proteção de menores, páginas jurídicas. Dá um veredicto, entrega o texto acabado.',
            de: 'DSGVO, EU-KI-Verordnung, Lizenzen, Kinderschutz, juristische Seiten. Fällt ein Verdikt, übergibt den fertigen Text.',
          },
        },
      ],
    },

    // ------------------------------------------------------------- SERVICES
    {
      id: 'services',
      type: 'services',
      schemaType: 'none',
      label: { en: 'Commissions', ru: 'Заказы', pt: 'Encomendas', de: 'Aufträge' },
      title: {
        en: 'Open for commissions',
        ru: 'Принимаю заказы',
        pt: 'Aberto a encomendas',
        de: 'Offen für Aufträge',
      },
      // 2026-08-30 S1UMBR cont+4 §4.12 fix (Iskra S307-02) — unified body text across
      // 4 langs. Prior state: RU claimed «Семь направлений» but listed 6 items (нарушение
      // Andrey no-numbers rule + honesty); EN was 4-items different content
      // («Encyclopedias on your subject, long-form books, longread series, OSINT
      // investigations»); PT similar к EN structure; DE missing entirely. Iskra flag:
      // «Commissions RU/EN расходятся содержательно — свести к одному тексту».
      // Unified к 7 items matching /services deep page canon («Перевод + OSINT +
      // Lucerna long invest + Длинная статья + Энциклопедия + Иллюстрации + Сайт»)
      // без явного числа per Andrey no-numbers rule. Anti-anglicism DE: «lange Essays»
      // не «Longread-Essays». Retro-viza pattern applied per editorial-vier-augen §3
      // (Andrey cont+4 «Landing-repo» option carte-blanche + Iskra S307-06 §2 assign
      // «Консоль лендинга: §4.12 Commissions RU/EN»); POMETKA к Iskra Vier-Augen retro.
      body: {
        en: 'Encyclopedias on your subject, books, long investigations, long-form essays, translations, illustrations, websites. One author and a team of AI fornits. Typical cycle — from three months. Not for urgent work, not for content built around someone else\'s algorithm. <a href="/en/services">More →</a> Write to: info@folkup.app',
        ru: 'Энциклопедии на вашу тему, книги, длинные расследования, длинные статьи, переводы, иллюстрации, сайты. Один автор и команда AI-форнитов. Типичный цикл — от трёх месяцев. Не для срочных проектов и не для текстов под чужой алгоритм. <a href="/ru/services">Подробнее →</a> Пишите: info@folkup.app',
        pt: 'Enciclopédias sobre o seu tema, livros, investigações longas, ensaios longos, traduções, ilustrações, sítios web. Um autor com uma equipa de fornits de IA. Ciclo típico — a partir de três meses. Não para trabalho urgente, nem para conteúdos desenhados para o algoritmo alheio. <a href="/pt/services">Mais →</a> Escreva: info@folkup.app',
        de: 'Enzyklopädien zu Ihrem Thema, Bücher, lange Recherchen, lange Essays, Übersetzungen, Illustrationen, Websites. Ein Autor und ein Team von KI-Fornits. Typischer Zyklus — ab drei Monaten. Nicht für dringende Arbeit, nicht für Inhalte, die auf fremde Algorithmen zugeschnitten sind. <a href="/de/services">Mehr →</a> Schreiben Sie an: info@folkup.app',
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
