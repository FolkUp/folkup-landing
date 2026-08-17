import type { Page, LegalPageSection } from '../types'

/**
 * /projects sub-route — evidence hub.
 *
 * Concept v1 sub-route. Filled 2026-06-19 (Cartouche L3 cont +36 batch B-1) —
 * was skeleton since LAND-004. Built per КиберГонзо research recommendation
 * «evidence hub, not narrative repeat»: deeper per-encyclopedia detail beyond
 * the home grid, queue overview, adjacent projects map, plain contact CTA.
 *
 * Section schema reuses LegalPageSection (raw HTML content + v-html render)
 * — same pattern as `/about/ai-use`. No new section types added (Oracle 4Q
 * minimal scope discipline).
 *
 * Content principles applied:
 *  - Verifiable claims only (article counts inherited verbatim from home Q-S4)
 *  - No founding-year claims (Lesson #42 — would need primary-source verify)
 *  - No pricing / commercial commitments (Лев compliance veto on /services)
 *  - EU PT obligatory (translator-PT module canon — no Brazilian PT)
 *  - Contact email anklem@folkup.app per Posthorn forwarder canon
 */
export const projectsPage: Page = {
  id: 'projects',
  path: '/projects',
  availableLangs: ['en', 'ru', 'pt', 'de'],
  meta: {
    title: {
      en: 'Encyclopedias and one workshop — FolkUp',
      ru: 'Энциклопедии и одна мастерская — FolkUp',
      pt: 'Enciclopédias e uma oficina — FolkUp',
      de: 'Enzyklopädien und eine Werkstatt — FolkUp',
    },
    description: {
      en: 'Three encyclopedias open today — Setúbal, Padel, Cogumelos. More on the way. One workshop, free, signed, ours.',
      ru: 'Три энциклопедии открыты сейчас — Сетубал, падел, грибы. Список растёт. Одна мастерская, бесплатно, подписано, своё.',
      pt: 'Três enciclopédias abertas hoje — Setúbal, padel, cogumelos. A lista cresce. Uma oficina, grátis, assinada, nossa.',
      de: 'Drei Enzyklopädien sind heute offen — Setúbal, Padel, Cogumelos. Weitere kommen. Eine Werkstatt, kostenlos, signiert, unsere.',
    },
    ogType: 'website',
    canonical: 'https://folkup.app/projects',
  },
  sections: [
    {
      id: 'main',
      type: 'legal',
      schemaType: 'WebPage',
      title: {
        en: 'Encyclopedias and one workshop',
        ru: 'Энциклопедии и одна мастерская',
        pt: 'Enciclopédias e uma oficina',
      },
      lastUpdated: {
        en: 'Updated June 2026',
        ru: 'Обновлено в июне 2026',
        pt: 'Atualizado em junho de 2026',
      },
      content: {
        en: `<p>Three encyclopedias are open today. A Portuguese city, a fast-growing racket sport, and the mushrooms that grow in Portuguese forests. The list keeps growing — others are in build, and the queue ahead is long.</p>

<p>Every project follows the same workshop pattern. We pick a specific subject. We go look. We verify twice, by hand. We publish — free, signed, ours.</p>

<p>No paywalls, no subscriptions, no «sign up to continue reading». The whole library, front door open.</p>

<h2>Open today</h2>

<div class="encyclopedia-card">
<h3><a href="https://padel.folkup.fit" rel="noopener">Padel — padel.folkup.fit</a></h3>
<p class="encyclopedia-meta">a growing encyclopedia · three languages</p>
<p>The fastest-growing racket sport in the world. Rules, technique, courts, gear, tournaments — all in one place, written by people who play. New articles ship as the sport grows in Europe and the Middle East.</p>
</div>

<div class="encyclopedia-card">
<h3><a href="https://setubal.folkup.city" rel="noopener">Setúbal — setubal.folkup.city</a></h3>
<p class="encyclopedia-meta">a growing encyclopedia · three languages</p>
<p>A Portuguese city where the mountains meet the sea. Markets, routes, restaurants, history — written by people who walk these streets. Deepest of our encyclopedias by article count, and the one that taught the workshop how to work.</p>
</div>

<div class="encyclopedia-card">
<h3><a href="https://cogumelos.folkup.fit" rel="noopener">Cogumelos — cogumelos.folkup.fit</a></h3>
<p class="encyclopedia-meta">a growing encyclopedia · three languages</p>
<p>Portuguese mushrooms. Which ones to eat, which ones to photograph from a safe distance. Every species verified, every warning real. Built for foragers, photographers, and anyone curious about what grows under Portuguese trees.</p>
</div>

<h2>In build</h2>

<p>Three more encyclopedias are in active development. The work is real, the structure is being laid out, the first articles are taking shape. They'll open here when they're ready to read, not before.</p>

<ul class="encyclopedia-coming">
<li><strong><a href="https://aquarium.folkup.city" rel="noopener">Aquarium</a></strong> — a culture encyclopedia. Soft-launch shape today.</li>
<li><strong><a href="https://dialup.folkup.city" rel="noopener">Retro Tech</a></strong> — dial-up era and early-internet tools. Online, content growing.</li>
</ul>

<h2>Adjacent projects, same workshop</h2>

<div class="encyclopedia-card">
<h3><a href="https://lucerna.folkup.app" rel="noopener">Lucerna — lucerna.folkup.app</a></h3>
<p>The Pro Lab. Slower work, closer to the source — investigations and methodology notes that don't fit the encyclopedia shape but follow the same verification discipline.</p>
</div>

<div class="encyclopedia-card">
<h3><a href="https://declaration.folkup.app" rel="noopener">Declaration Guide — declaration.folkup.app</a></h3>
<p>A reading-room version of the EU AI Act, written for teenagers. The law is for adults; the conversation isn't.</p>
</div>

<h2>Got a project?</h2>

<p>Encyclopedias, library catalogs, technical documentation — we make texts like these for others too. The workshop pattern is the same: specific subjects, careful sources, no shortcuts.</p>

<p>If you have a project and want to see what it would look like coming through this workshop, write to <a href="mailto:anklem@folkup.app">anklem@folkup.app</a>. Read by hand.</p>`,
        ru: `<p>Три энциклопедии открыты сейчас. Португальский город, быстрорастущий ракеточный спорт и грибы, которые растут в португальских лесах. Список растёт — несколько ещё готовятся, впереди — длинная очередь.</p>

<p>Каждый проект собирается одной и той же мастерской. Выбираем конкретную тему. Идём смотреть. Проверяем дважды, руками. Публикуем — бесплатно, подписано, своё.</p>

<p>Без подписок, без премиума, без «зарегистрируйтесь, чтобы продолжить». Вся библиотека, входная дверь открыта.</p>

<h2>Открыты сейчас</h2>

<div class="encyclopedia-card">
<h3><a href="https://padel.folkup.fit" rel="noopener">Падел — padel.folkup.fit</a></h3>
<p class="encyclopedia-meta">энциклопедия растёт · три языка</p>
<p>Самый быстрорастущий ракеточный спорт в мире. Правила, техника, корты, экипировка, турниры — всё в одном месте, написанное теми, кто играет. Новые статьи появляются вместе с ростом спорта в Европе и на Ближнем Востоке.</p>
</div>

<div class="encyclopedia-card">
<h3><a href="https://setubal.folkup.city" rel="noopener">Сетубал — setubal.folkup.city</a></h3>
<p class="encyclopedia-meta">энциклопедия растёт · три языка</p>
<p>Португальский город, где горы встречаются с морем. Рынки, маршруты, рестораны, история — написано людьми, которые ходят по этим улицам. Самая глубокая из наших энциклопедий по объёму и та, на которой мастерская научилась работать.</p>
</div>

<div class="encyclopedia-card">
<h3><a href="https://cogumelos.folkup.fit" rel="noopener">Грибы — cogumelos.folkup.fit</a></h3>
<p class="encyclopedia-meta">энциклопедия растёт · три языка</p>
<p>Португальские грибы. Какие есть, а какие лучше фотографировать на расстоянии. Каждый вид проверен, каждое предупреждение — настоящее. Сделано для собирателей, фотографов и всех, кому интересно, что растёт под португальскими деревьями.</p>
</div>

<h2>Готовятся</h2>

<p>Ещё три энциклопедии в активной разработке. Работа идёт, структура раскладывается, первые статьи обретают форму. Откроются здесь, когда их можно будет читать, не раньше.</p>

<ul class="encyclopedia-coming">
<li><strong><a href="https://aquarium.folkup.city" rel="noopener">Аквариум</a></strong> — энциклопедия культурного слоя. Сейчас в форме soft-launch.</li>
<li><strong><a href="https://dialup.folkup.city" rel="noopener">Ретро-техника</a></strong> — эпоха диалапа и ранний интернет. Сайт онлайн, контент пополняется.</li>
</ul>

<h2>Соседние проекты, та же мастерская</h2>

<div class="encyclopedia-card">
<h3><a href="https://lucerna.folkup.app" rel="noopener">Lucerna — lucerna.folkup.app</a></h3>
<p>Про-Лаб. Работа медленнее, ближе к источнику — расследования и методологические заметки, которые не укладываются в форму энциклопедии, но соблюдают ту же дисциплину проверки.</p>
</div>

<div class="encyclopedia-card">
<h3><a href="https://declaration.folkup.app" rel="noopener">Declaration Guide — declaration.folkup.app</a></h3>
<p>EU AI Act, прочитанный как читал бы подросток. Закон написан для взрослых — разговор нет.</p>
</div>

<h2>Есть свой проект?</h2>

<p>Энциклопедии, каталоги библиотек, техническая документация — такие тексты мы делаем и на заказ. Мастерская работает по той же схеме: конкретные темы, проверенные источники, без срезаний углов.</p>

<p>Если у тебя есть проект и хочется увидеть, как он пройдёт через эту мастерскую — напиши на <a href="mailto:anklem@folkup.app">anklem@folkup.app</a>. Читаем вручную.</p>`,
        pt: `<p>Três enciclopédias estão abertas hoje. Uma cidade portuguesa, um desporto de raquete em rápido crescimento, e os cogumelos que crescem nas florestas portuguesas. A lista cresce — outras estão em construção, e a fila à frente é longa.</p>

<p>Cada projeto sai da mesma oficina. Escolhemos um tema específico. Vamos ver. Verificamos duas vezes, à mão. Publicamos — grátis, assinado, nosso.</p>

<p>Sem subscrições, sem premium, sem «registe-se para continuar a ler». Toda a biblioteca, porta da frente aberta.</p>

<h2>Abertas hoje</h2>

<div class="encyclopedia-card">
<h3><a href="https://padel.folkup.fit" rel="noopener">Padel — padel.folkup.fit</a></h3>
<p class="encyclopedia-meta">enciclopédia em crescimento · três línguas</p>
<p>O desporto de raquete que mais cresce no mundo. Regras, técnica, courts, equipamento, torneios — tudo num só lugar, escrito por quem joga. Novos artigos aparecem à medida que o desporto cresce na Europa e no Médio Oriente.</p>
</div>

<div class="encyclopedia-card">
<h3><a href="https://setubal.folkup.city" rel="noopener">Setúbal — setubal.folkup.city</a></h3>
<p class="encyclopedia-meta">enciclopédia em crescimento · três línguas</p>
<p>Uma cidade portuguesa onde a serra encontra o mar. Mercados, rotas, restaurantes, história — escrita por quem anda nestas ruas. A mais profunda das nossas enciclopédias pelo número de artigos, e a que ensinou a oficina a trabalhar.</p>
</div>

<div class="encyclopedia-card">
<h3><a href="https://cogumelos.folkup.fit" rel="noopener">Cogumelos — cogumelos.folkup.fit</a></h3>
<p class="encyclopedia-meta">enciclopédia em crescimento · três línguas</p>
<p>Cogumelos portugueses. Quais comer, quais fotografar a uma distância segura. Cada espécie verificada, cada aviso real. Feito para apanhadores, fotógrafos e qualquer pessoa curiosa sobre o que cresce debaixo das árvores portuguesas.</p>
</div>

<h2>Em construção</h2>

<p>Mais três enciclopédias em desenvolvimento ativo. O trabalho está a acontecer, a estrutura está a ser desenhada, os primeiros artigos a ganhar forma. Vão abrir aqui quando estiverem prontas para ler, não antes.</p>

<ul class="encyclopedia-coming">
<li><strong><a href="https://aquarium.folkup.city" rel="noopener">Aquarium</a></strong> — enciclopédia da camada cultural. Em soft-launch atualmente.</li>
<li><strong><a href="https://dialup.folkup.city" rel="noopener">Tecnologia retro</a></strong> — a era do dial-up e ferramentas dos primeiros tempos da internet. Site online, conteúdo a crescer.</li>
</ul>

<h2>Projetos adjacentes, a mesma oficina</h2>

<div class="encyclopedia-card">
<h3><a href="https://lucerna.folkup.app" rel="noopener">Lucerna — lucerna.folkup.app</a></h3>
<p>O Pro Lab. Trabalho mais lento, mais perto da fonte — investigações e notas metodológicas que não cabem na forma de enciclopédia, mas seguem a mesma disciplina de verificação.</p>
</div>

<div class="encyclopedia-card">
<h3><a href="https://declaration.folkup.app" rel="noopener">Declaration Guide — declaration.folkup.app</a></h3>
<p>A versão de leitura do AI Act da UE, escrita como um adolescente o leria. A lei é para adultos; a conversa não é.</p>
</div>

<h2>Tens um projeto?</h2>

<p>Enciclopédias, catálogos de biblioteca, documentação técnica — fazemos textos como estes também por encomenda. A oficina trabalha pela mesma receita: temas específicos, fontes verificadas, sem atalhos.</p>

<p>Se tens um projeto e queres ver como ficaria a passar por esta oficina — escreve para <a href="mailto:anklem@folkup.app">anklem@folkup.app</a>. Lemos com atenção.</p>`,
      },
    } as LegalPageSection,
  ],
}
