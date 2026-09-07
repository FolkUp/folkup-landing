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
    // T-315-12 вариант Б RU канон (Iskra S315-14 §1 → S1ORCH cont+3 2026-09-07):
    // meta.description.ru обновлена к абзацу 1 verbatim per Iskra §1 «Абзац 1
    // (он же meta-description)». EN/PT/DE остаются: переводчики (Лёлик/Зека/Болик)
    // делают свои PR с апдейтом meta.description параллельно per Iskra Q3 verdict
    // «PR-C только RU первым, EN за Лёликом, PT за Зекой, DE за Боликом».
    description: {
      // T-315-12 EN P1 (Lelik S1LOLIK cont+16 2026-09-07): mirror translation Iskra S315-14 §1
      // canon RU absatz 1 verbatim (my EN mirror per S317-02 §3 explicit «EN за Лёликом»
      // + Andrey Q2 verdict cont+16 «Direct PR + retro-Vier-Augen»). Gate §1: «AI» word not
      // used in meta-description absatz 1 (moved к absatz 2 в hero tagline).
      en: 'Open books and encyclopedias: every fact by source, every text signed, four languages, no ads and no registration.',
      ru: 'Открытые книги и энциклопедии: каждый факт — по источнику, каждый текст подписан, четыре языка, без рекламы и без регистрации.',
      pt: 'Uma oficina que faz enciclopédias, uma série de livros e investigações. Grátis, verificado, multilingue. Uma pessoa e uma equipa de colaboradores de IA.',
      de: 'Eine Werkstatt, die Enzyklopädien, eine Buchreihe und Recherchen macht. Kostenlos, geprüft, mehrsprachig. Ein Autor und ein Team von KI-Assistenten.',
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
      // T-316-14 честность (Iskra S316-11 §1 → S1ORCH cont+3 PR #53 2026-09-07):
      // Снято «Every text signed / каждый текст — с подписью / cada texto assinado /
      // jeder Text signiert» — overclaim (энциклопедии не имеют per-article signature).
      //
      // T-315-12 вариант Б RU канон (Iskra S315-14 §1 → S1ORCH cont+3 PR-C 2026-09-07):
      // tagline.ru переписан к 2-абзацному первому экрану per §1 «Абзац 1» + «Абзац 2»
      // verbatim (RU канон). Гейт §1: «ИИ/AI/KI/IA не раньше второго абзаца, во втором —
      // обязательно» — в RU выполнено (абзац 1 без «ИИ», абзац 2 «ИИ-ассистентов»).
      // «форниты» перенесены на страницу /team per §1 «форниты только на странице
      // команды с объяснением» — hero tagline RU называет «ИИ-ассистентов, известных
      // по именам».
      // EN/PT/DE остаются PR-A версии — переводчики (Лёлик/Зека/Болик) обновят
      // свои локали параллельными PR per Iskra Q3 verdict «PR-C только RU первым,
      // EN за Лёликом, PT за Зекой, DE за Боликом» + S316-11 §2 п.3 «выкат RU
      // первым, остальные по готовности».
      // Multi-абзац RU рендерится через `white-space: pre-line` CSS в
      // HeroSection.vue (см. `\n\n` separator между абзацами).
      tagline: {
        // T-315-12 EN P1 (Lelik S1LOLIK cont+16 2026-09-07): mirror translation Iskra S315-14 §1
        // canon RU (absatz 1 + absatz 2 joined с `\n\n` per HeroSection white-space pre-line CSS).
        // Iskra §1 gate: «AI» появляется во втором абзаце («AI assistants known by name»);
        // «fornits» удалено — только на /team page per Iskra §3 constraint.
        en: 'Open books and encyclopedias: every fact by source, every text signed, four languages, no ads and no registration.\n\nA workshop of one author and a team of AI assistants known by name. What the machine did, and what the human did — is stated in every colophon.',
        ru: 'Открытые книги и энциклопедии: каждый факт — по источнику, каждый текст подписан, четыре языка, без рекламы и без регистрации.\n\nМастерская одного автора и команды ИИ-ассистентов, известных по именам. Что делала машина, а что человек, — сказано в каждом колофоне.',
        pt: 'FolkUp é uma pequena oficina — uma pessoa e uma equipa de fornits de IA. Fazemos enciclopédias, uma série de livros e investigações lentas. Cada facto por fontes. Livre, sem registo, sem publicidade.',
        // T-315-12 DE P1 (Bolik S16BOLIK cont+21 EXT 2026-09-07): mirror translation Iskra S315-14 §1
        // canon RU (absatz 1 + absatz 2 joined с `\n\n` per HeroSection white-space pre-line CSS).
        // Iskra §1 gate: «KI» появляется во втором абзаце («KI-Assistenten» known by name);
        // «Fornit» удалено — только на /team page per Iskra §3 constraint.
        // Voice-formula Landing register: Brecht 40 / Heine 30 / Tucholsky 20 / Walser 10 (Bolik cont+21 EXT audience-adjusted).
        de: 'Offene Bücher und Enzyklopädien: jede Tatsache mit Quelle, jeder Text unterschrieben, vier Sprachen, ohne Werbung und ohne Registrierung.\n\nWerkstatt eines Autors und eines Teams von KI-Assistenten, die alle mit Namen bekannt sind. Was die Maschine gemacht hat und was der Mensch — steht in jedem Kolophon.',
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
          // Iskra S308-10 §1 item 3 (2026-08-31 S1UMBR cont+5): kn1 langs badge
          // updated «RU · translations in the workshop» → «RU · EN · PT preview».
          // Iskra S311-03 integral ratification kn1 PT v1.0.0 estável (2026-08-31
          // evening) — «PT preview» qualifier stale, removed cont+10 S1UMBR
          // 2026-09-01 per S1ORCH signal-forward Q4 + Andrey carte-blanche.
          // Badge now aligned с ratified state: «RU · EN · PT» × 4 langs
          // (DE «Vorschau» removed too — consistent all-langs post-ratification).
          // F5 (Iskra S317-08 §5 → S1ORCH cont+3 PR-D2 2026-09-07): kn1 langs badge
          // «RU · EN · PT (превью)» — до flip PT (portal /pt/kn1 показывает
          // «pré-visualização» + «Ler online» работает, но статус ещё «preparing»).
          // После flip → вернуть «RU · EN · PT» unified (Iskra explicit «после flip
          // — вернуть анонс»). Sync с новостью F5 news card ниже (обе на «до flip»
          // pattern одновременно).
          langs: { en: 'RU · EN · PT (preview)', ru: 'RU · EN · PT (превью)', pt: 'RU · EN · PT (pré-visualização)', de: 'RU · EN · PT (Vorschau)' },
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
          //
          // F8 (Iskra S317-08b §F8 P1 → S1ORCH cont+3 PR-D2 2026-09-07):
          // kn7 = LIVE на RU (per news card «Вышла седьмая книга „Трудности диалога"»).
          // Прежний badge «In the workshop / В работе / Em construção / In Arbeit»
          // читал как «книга ещё не готова» — противоречит новости ниже «Book Seven is
          // out». Iskra canon: align с kn1/kn2 pattern: `count` = «Read →» (RU LIVE),
          // `langs` = «RU · translations in the workshop» (non-RU в переводе).
          count: { en: 'Read →', ru: 'Читать →', pt: 'Ler →', de: 'Lesen →' },
          description: {
            en: 'Why agreeing is harder than it looks — an orchestra plays inside the head, but what comes out is a knock. On the barriers to understanding and how to break through them.',
            ru: 'Почему договориться труднее, чем кажется: в голове играет оркестр — наружу выходит стук. О барьерах понимания и о том, как через них пробиваться.',
            pt: 'Porque é mais difícil chegar a acordo do que parece — dentro da cabeça toca uma orquestra, mas o que sai é um bater. Sobre as barreiras da compreensão e como atravessá-las.',
          },
          // F8 (Iskra S317-08b §F8 canon → S1ORCH cont+3 PR-D2 2026-09-07):
          // langs badge → «RU · translations in the workshop» pattern (non-RU переводы
          // ещё в мастерской). Добавлен DE key (Iskra flag «RU-версию проверь тоже»
          // → все 4 lang consistent).
          langs: { en: 'RU · translations in the workshop', ru: 'RU · переводы в мастерской', pt: 'RU · traduções na oficina', de: 'RU · Übersetzungen in Arbeit' },
          // Q2 amendment (Iskra SINHRO-S318-06 §1 → S1ORCH cont+4 PR-D2 2026-09-07):
          // kn7 category «Book» → «Trilogy» align с kn1/kn2 (kn7 = открывающая
          // книга трилогии «Общий язык», подтверждено news card «Book Seven is
          // out — first book of the Common Ground trilogy»). Added DE key
          // «Trilogie» consistency с langs badge выше (4 langs теперь).
          category: { en: 'Trilogy', ru: 'Трилогия', pt: 'Trilogia', de: 'Trilogie' },
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
          // Kn7 anúncio per Iskra S312-01 §3 «GO АВТОМАТОМ» pre-visa executed cont+10
          // trigger fires post-batch 3 (Iskra S312-07/09) — 3 URLs verified:
          // /kn7/read/apparatus-level-3 FACT-GATE=0 + /kn7/read/colophon 200 + Art.50 +
          // /kn7/read/title-page canon v2 «Библиотека FolkUp · Трилогия «Общий язык»».
          // Text from Iskra S311-21 Variant A + Andrey S312-04 EN «Lost in Conversation».
          // LANDING-NEWS-1 canon: short format + accumulate ≤3 (currently 2 items).
          // PT + DE: Zeka/Bolik native versions pending future cycle refinement.
          id: 'kn7-trudnosti-dialoga-v1-0-live',
          text: {
            en: 'Book Seven is out — «Lost in Conversation» (EN edition in preparation), the first book of the «Common Ground» trilogy: why agreeing is harder than it looks, and what to do about it. Read online (Russian) or download the EPUB → books.folkup.life/kn7',
            ru: 'Вышла седьмая книга — «Трудности диалога», первая в трилогии «Общий язык». Почему договориться труднее, чем кажется, и что с этим делать. Читать онлайн и скачать EPUB → books.folkup.life/kn7',
            pt: 'Livro Sete acaba de sair — «Lost in Conversation» (edição em preparação), primeiro livro da trilogia «Common Ground»: porque concordar é mais difícil do que parece, e o que fazer em relação a isso. Leia online (russo) ou baixe o EPUB → books.folkup.life/kn7',
            de: 'Buch Sieben ist erschienen — «Lost in Conversation» (Ausgabe in Vorbereitung), das erste Buch der «Common Ground»-Trilogie: warum eine Einigung schwieriger ist, als es scheint, und was man dagegen tun kann. Online lesen (Russisch) oder EPUB herunterladen → books.folkup.life/kn7',
          },
          link: 'https://books.folkup.life/kn7',
        },
        {
          id: 'kn1-pt-v1-0-0-stable',
          // F5 + F5-EN (Iskra S317-08 §5 + S317-08b §F5-EN → S1ORCH cont+3 PR-D2 2026-09-07):
          // Прежний анонс «v1.0.0 estável… полный аппарат» противоречил порталу
          // (portal /pt/kn1 показывает «pré-visualização» — flip PT ещё не сделан).
          // Iskra canon: до flip PT — «Книга 1 читается по-португальски онлайн; EPUB
          // и полный аппарат — в ближайшие дни»; после flip — вернуть анонс полный.
          // Sync с F5 kn1 langs badge выше «RU · EN · PT (превью)».
          // PT/DE — переводчики (Зека/Болик) применят у себя параллельно.
          text: {
            en: 'Book 1 «Agile Sapiens» is now readable in Portuguese online; EPUB and full apparatus — within days.',
            ru: 'Книга 1 «Agile Sapiens» читается по-португальски онлайн; EPUB и полный аппарат — в ближайшие дни.',
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
          //
          // F9 (Iskra S317-08b §F9 P1 → S1ORCH cont+3 PR-D2 2026-09-07):
          // Прежний EN/RU текст содержал overclaim «native-speaker checks / сверка с
          // носителем» — у EN и PT живого носителя нет (только у DE Кнут в Берлине).
          // Iskra canon: «AI translator's draft, editorial cross-check against the
          // original, a signature; where an edition has a living native reader, their
          // notes go into revisions.» PT canon не даётся — переводчики (Зека) применят
          // у себя параллельно. DE key отсутствует — Болик добавит.
          text: {
            en: "Translation is workshop work: an AI translator's draft, editorial cross-check against the original, a signature; where an edition has a living native reader, their notes go into revisions.",
            ru: 'Перевод — часть мастерской: черновик ИИ-ассистента-переводчика, редакторская сверка с оригиналом, подпись; там, где у издания есть живой читатель-носитель, его замечания входят в правки.',
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
          // T-316-14 честность (Iskra S316-11 §1 → S1ORCH cont+3 2026-09-07):
          // Снято «WCAG accessibility / WCAG-доступность / acessibilidade WCAG» —
          // pa11y-CI показал 49 WCAG errors на сайтах экосистемы (Печкин cont+3-09
          // T-316-14 sweep); утверждение не подтверждается. Снято «cookie consent /
          // согласие на cookies / consentimento de cookies» — у нас cookie-free
          // (self-hosted fonts + no analytics + no IP logging); «согласие на cookies»
          // вводит в заблуждение, потому что нет ни cookies, ни consent-banner. GDPR
          // и security headers остаются: подтверждаются self-hosted fonts, cookie-free
          // analytics, no IP logging (GDPR) + `_headers` file c CSP/HSTS/X-Frame/
          // Referrer-Policy/Permissions-Policy (security headers).
          text: {
            en: 'GDPR, security headers. The same care as the articles themselves.',
            ru: 'GDPR, заголовки безопасности. Та же забота, что и о самих статьях.',
            pt: 'RGPD, cabeçalhos de segurança. O mesmo cuidado dos artigos.',
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
      label: { en: 'Commissions', ru: 'Комиссии', pt: 'Encomendas', de: 'Kommissionen' },
      // T-315-13 вариант Б RU канон (Iskra S315-14 §2 → S1ORCH cont+3 PR-C 2026-09-07):
      // title.ru переписан к канону заголовка §2 verbatim + label.ru «Заказы» → «Комиссии»
      // (соответствие терминологии §2 «Раздел Комиссии»).
      // EN/PT/DE остаются PR-A версии — переводчики параллельно.
      title: {
        // T-315-12 EN P1 (Lelik S1LOLIK cont+16 2026-09-07): mirror translation Iskra S315-14 §2
        // canon RU heading verbatim (my EN mirror per S317-02 §3 explicit + Andrey Q2 verdict).
        en: 'We do not sell texts. We give away verifiable knowledge — signed, sourced, open.',
        ru: 'Мы не продаём тексты. Мы отдаём проверяемое знание — с подписью, с источниками, открытое.',
        pt: 'Aberto a encomendas',
        // T-315-12 DE P1 (Bolik S16BOLIK cont+21 EXT 2026-09-07): mirror translation Iskra S315-14 §2
        // canon RU heading verbatim per Iskra Vier-Augen retro-viza (Andrey carte-blanche cont+3).
        de: 'Wir verkaufen keine Texte. Wir geben nachprüfbares Wissen weiter — mit Unterschrift, mit Quellen, offen.',
      },
      // T-315-13 вариант Б RU канон (Iskra S315-14 §2 → S1ORCH cont+3 PR-C 2026-09-07):
      // body.ru переписан к канону §2 verbatim — обязательная подводка + 4 punkta
      // с живыми ссылками на образцы. Hero image commission 4 (Frida cont+8 «Соседский
      // стол», Andrey verdict В seed 918) вписан <figure> перед 4-м пунктом
      // «Помощь с домом». Iskra explicit S315-13a §1 formulation п.4 «не оферта —
      // соседская помощь case-by-case» — сохранено verbatim.
      // «Напишите нам:» и Ko-fi — без изменений (Iskra §2 mandate).
      // <div> контейнер требует update AnchorsSection.vue: `<p>` → `<div>` для
      // multi-block содержимого (headings/figure inside).
      // EN/PT/DE остаются PR-A версии — переводчики (Лёлик/Зека/Болик) параллельно.
      body: {
        // T-315-12 EN P1 (Lelik S1LOLIK cont+16 2026-09-07): mirror translation Iskra S315-14 §2
        // canon RU body verbatim — mandatory подводка + 4 commission items с live sample links
        // + <figure> hero image перед 4-м пунктом «Help with a home» (Frida cont+8 «Neighbours' table»).
        // Iskra §3 «fornits только на /team» — «AI assistants» used (not «fornits»); editor@folkup.app
        // canonical email per S316 post-mandate + Iskra POMETKA S317-03 verdict.
        en: '<p><em>Everything below we made for ourselves — and we can make for you. Each item — with a live link to a sample.</em></p><h4>An encyclopedia turn-key</h4><p>Sample: <a href="https://cogumelos.folkup.fit">cogumelos.folkup.fit</a>, <a href="https://padel.folkup.fit">padel.folkup.fit</a>. For an association, a club, a region: structure, 50–150 articles with a source for every fact and a visible verification status, three languages, warnings where an error costs health, an open licence — you are not tied to us. From three months, then monthly updates.</p><h4>A book-investigation with a full apparatus</h4><p>Sample: <a href="https://books.folkup.life">books.folkup.life</a>, <a href="https://lucerna.folkup.app">lucerna.folkup.app</a>. From lectures, interviews, experience — a book: structure, sources, index, statutory AI-use disclosure, cover, EPUB, a reader in four languages. Licence — of your choice. From four months.</p><h4>A translation with an apparatus and a living reader</h4><p>Sample: «Agile Sapiens» in <a href="https://books.folkup.life/en/kn1">English</a> and <a href="https://books.folkup.life/pt/kn1">Portuguese</a> (German in progress). AI draft → translator\'s edit → editorial check → living native reader; a colophon with an honest description of the process, an index and sources in the edition\'s language, a rights check on quotations. Six–eight weeks per book.</p><figure><img src="/images/services/hero-help-with-home.webp" alt="Two neighbours at a working table with a plan, a brass lamp and mugs of tea; a warm evening outside the window. A neighbourly meeting, not a deal." loading="lazy" width="1344" height="768"></figure><h4>Help with a home for open work</h4><p>If your project or text is released under an open licence and has nowhere to live — write to us. Where our infrastructure allows, we will give it a place beside ours: a subdomain or your own domain, HTTPS, publishing from git, no ads or tracking. Where it does not — we will help you set the same up at your place: the tools are open, the recipe is ours. This is not hosting with tariffs and limits, it is neighbourly help, case by case. Licence — open; the author is responsible for the content.</p><p><a href="/en/services">More →</a> Write to: editor@folkup.app</p>',
        ru: '<p><em>Всё ниже мы сделали для себя — и можем сделать для вас. Каждый пункт — с живой ссылкой на образец.</em></p><h4>Энциклопедия под ключ</h4><p>Образец: <a href="https://cogumelos.folkup.fit">cogumelos.folkup.fit</a>, <a href="https://padel.folkup.fit">padel.folkup.fit</a>. Для ассоциации, клуба, региона: структура, 50–150 статей с источником у каждого факта и видимым статусом проверки, три языка, предупреждения там, где ошибка стоит здоровья, открытая лицензия — вы не привязаны к нам. От трёх месяцев, дальше ежемесячное обновление.</p><h4>Книга-исследование с полным аппаратом</h4><p>Образец: <a href="https://books.folkup.life">books.folkup.life</a>, <a href="https://lucerna.folkup.app">lucerna.folkup.app</a>. Из лекций, интервью, опыта — книга: структура, источники, указатель, раскрытие об использовании ИИ по закону, обложка, EPUB, читалка на четырёх языках. Лицензия — по вашему выбору. От четырёх месяцев.</p><h4>Перевод с аппаратом и живым читателем</h4><p>Образец: «Agile Sapiens» на <a href="https://books.folkup.life/en/kn1">английском</a> и <a href="https://books.folkup.life/pt/kn1">португальском</a> (немецкий в работе). Черновик ИИ → правка переводчика → редакторская проверка → читатель-носитель; колофон с честным описанием процесса, указатель и источники на языке издания, проверка прав на цитаты. Шесть–восемь недель на книгу.</p><figure><img src="/images/services/hero-help-with-home.webp" alt="Двое соседей за рабочим столом с чертежом, латунной лампой и кружками чая; за окном тёплый вечер. Соседская встреча, не сделка." loading="lazy" width="1344" height="768"></figure><h4>Помощь с домом для открытой работы</h4><p>Если ваш проект или текст выходит под открытой лицензией и ему негде жить — напишите. Там, где наша инфраструктура позволяет, дадим место рядом с нашими: поддомен или ваш домен, HTTPS, публикация из git, без рекламы и слежки. Там, где не позволяет, — поможем собрать то же самое у вас: инструменты открытые, рецепт наш. Это не хостинг с тарифами и лимитами, а соседская помощь, случай за случаем. Лицензия — открытая; за содержание отвечает автор.</p><p><a href="/ru/services">Подробнее →</a> Пишите: editor@folkup.app</p>',
        pt: 'Enciclopédias sobre o seu tema, livros, investigações longas, ensaios longos, traduções, ilustrações, sítios web. Um autor com uma equipa de fornits de IA. Ciclo típico — a partir de três meses. Não para trabalho urgente, nem para conteúdos desenhados para o algoritmo alheio. <a href="/pt/services">Mais →</a> Escreva: info@folkup.app',
        // T-315-12 DE P1 (Bolik S16BOLIK cont+21 EXT 2026-09-07): mirror translation Iskra S315-14 §2
        // canon RU body verbatim — mandatory подводка + 4 commission items с live sample links
        // + <figure> hero image перед 4-м пунктом «Hilfe mit einem Zuhause» (Frida cont+8 «Nachbarn am Tisch»).
        // Iskra §3 «Fornit только на /team» — «KI-Assistenten» used (not «Fornit»); editor@folkup.app
        // canonical email per S316 post-mandate + Iskra POMETKA S317-03 verdict.
        de: '<p><em>Alles, was folgt, haben wir für uns selbst gemacht — und können es auch für Sie machen. Jeder Punkt mit einem lebendigen Link zum Muster.</em></p><h4>Enzyklopädie schlüsselfertig</h4><p>Muster: <a href="https://cogumelos.folkup.fit">cogumelos.folkup.fit</a>, <a href="https://padel.folkup.fit">padel.folkup.fit</a>. Für einen Verein, einen Klub, eine Region: Struktur, 50–150 Artikel mit Quelle für jede Tatsache und sichtbarem Prüfstatus, drei Sprachen, Warnungen dort, wo ein Fehler die Gesundheit kostet, offene Lizenz — Sie sind nicht an uns gebunden. Ab drei Monaten, danach monatliche Aktualisierung.</p><h4>Forschungsbuch mit vollständigem Apparat</h4><p>Muster: <a href="https://books.folkup.life">books.folkup.life</a>, <a href="https://lucerna.folkup.app">lucerna.folkup.app</a>. Aus Vorträgen, Interviews, Erfahrung — ein Buch: Struktur, Quellen, Register, Offenlegung zum KI-Einsatz nach Gesetz, Umschlag, EPUB, Reader in vier Sprachen. Lizenz — nach Ihrer Wahl. Ab vier Monaten.</p><h4>Übersetzung mit Apparat und lebendigem Leser</h4><p>Muster: „Agile Sapiens" auf <a href="https://books.folkup.life/en/kn1">Englisch</a> und <a href="https://books.folkup.life/pt/kn1">Portugiesisch</a> (Deutsch in Arbeit). KI-Entwurf → Übersetzerkorrektur → redaktionelle Prüfung → muttersprachlicher Leser; Kolophon mit ehrlicher Prozessbeschreibung, Register und Quellen in der Sprache der Ausgabe, Prüfung der Zitatrechte. Sechs bis acht Wochen pro Buch.</p><figure><img src="/images/services/hero-help-with-home.webp" alt="Zwei Nachbarn an einem Arbeitstisch mit einem Plan, einer Messinglampe und Teetassen; draußen ein warmer Abend. Ein nachbarschaftliches Treffen, kein Geschäft." loading="lazy" width="1344" height="768"></figure><h4>Hilfe mit einem Zuhause für offene Arbeit</h4><p>Wenn Ihr Projekt oder Ihr Text unter einer offenen Lizenz erscheint und keinen Ort zum Leben hat — schreiben Sie uns. Wo unsere Infrastruktur es erlaubt, geben wir einen Platz neben unseren: Subdomain oder Ihre Domain, HTTPS, Veröffentlichung aus Git, ohne Werbung und ohne Überwachung. Wo sie es nicht erlaubt, — helfen wir Ihnen, dasselbe bei Ihnen aufzubauen: die Werkzeuge sind offen, das Rezept ist unser. Das ist kein Hosting mit Tarifen und Limits, sondern nachbarschaftliche Hilfe, Fall für Fall. Lizenz — offen; für den Inhalt haftet der Autor.</p><p><a href="/de/services">Mehr →</a> Schreiben Sie an: editor@folkup.app</p>',
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
          // F3 (Iskra S317-08 §3 canon → S1ORCH cont+3 PR-D1 2026-09-07):
          // RU label «Использование AI» → «Использование ИИ» consistency с page title
          // (Iskra canon uses «ИИ» russian). EN/PT/DE — переводчики параллельно.
          label: { en: 'AI use', ru: 'Использование ИИ', pt: 'Uso de IA' },
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
