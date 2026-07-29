import type { Page, LegalPageSection } from '../types'

/**
 * /services — services deep page.
 *
 * Cont +42 RU content authored 2026-06-30 — 7 направлений + hook на вход +
 * blok-teaser linked from home `services` anchor.
 *
 * ЩИТ v4 + Огилви copy review PASS (30 правок: 8 калек / 4 хедж /
 * 7 штампов / 1 симметрия / 6 оптик / 4 факт-гейт; 0 AI-маркеров M1-M9).
 * Lesson #42 fact-verify primary-source — 4 phantoms caught:
 *   lucerna = OSINT lab (НЕ underwater photography);
 *   aquarium = БГ rock encyclopedia (НЕ freshwater);
 *   barnes = ARCHIVED 2026-05-26;
 *   site count «8» → реально 12 public-facing.
 *
 * Per Андрей cont +42 verdicts: услуги без нумерации; tarot с оговоркой
 * «работа приостановлена»; Lucerna добавлена как самостоятельная услуга;
 * цифры из projects.ts (501+243+164=908 articles); CTA email anklem@folkup.app.
 *
 * EN/PT translation pending — Translator pipeline dispatch отдельным батчем
 * (LAND-SERVICES-DEEP-001 next_steps). Placeholder копи указывает RU как
 * первоисточник пока перевод готовится.
 */
export const servicesPage: Page = {
  id: 'services',
  path: '/services',
  availableLangs: ['en', 'ru', 'pt'],
  meta: {
    title: {
      en: 'Services — FolkUp',
      ru: 'Услуги — FolkUp',
      pt: 'Serviços — FolkUp',
    },
    description: {
      en: 'Seven directions, all on long timelines. Translations, OSINT, long-form essays, encyclopedias, illustration, websites. No prices, by prior conversation. Written by one author and a team of AI fornits.',
      ru: 'Семь направлений — все на длинных дистанциях. Переводы, расследования, очерки, энциклопедии, иллюстрации, сайты. Без цен, по предварительному общению.',
      pt: 'Sete direções, todas em prazos longos. Traduções, OSINT, ensaios longos, enciclopédias, ilustração, sites. Sem preços, por contacto prévio. Escrito por um autor e uma equipa de fornits de IA.',
    },
    ogType: 'website',
    canonical: 'https://folkup.app/services',
  },
  sections: [
    {
      id: 'main',
      type: 'legal',
      schemaType: 'WebPage',
      title: {
        en: 'Services',
        ru: 'Услуги',
        pt: 'Serviços',
      },
      lastUpdated: {
        en: 'Updated June 2026',
        ru: 'Обновлено в июне 2026',
        pt: 'Atualizado em junho de 2026',
      },
      content: {
        en: `<p>We take on work with a shelf life longer than a quarter.</p>

<p>Seven directions. Each with a concrete outcome and boundaries put in writing.</p>

<p>Not for everyone. The details are below.</p>

<figure class="services-hero">
  <img src="/images/services/hero-translation.webp" alt="Two book spreads with a quill pen and an amber lamp in the corner" loading="lazy" width="1200" height="675">
</figure>

<h2>Translating a book or a long document into German or European Portuguese</h2>

<h3>Translation that does not flatter the translator.</h3>

<p>Machine translation today is good enough that the client no longer sees why one should pay a human. He sees it when a German hands the page back and says: 'This has been translated.'</p>

<p>We translate long-form texts into German (Berlin diction — Heine, Brecht, Tucholsky) and into European Portuguese (the Lisbon standard — Saramago, Sophia de Mello, Eça de Queirós). First a draft through a machine engine, then our translator revises it, until a local reader would not stumble. Then the four-eyes stage: a second native reader goes over it again.</p>

<p>We take texts no shorter than one author's sheet. We do not do technical manuals; we do not do advertising slogans. We do the kind of text one reads through, not scans.</p>

<p><em>Suits you if the translation goes out openly — free to read, copy, and adapt. Not for you if you need an anonymous translation under someone else's name.</em></p>

<figure class="services-hero">
  <img src="/images/services/hero-osint.webp" alt="Three vertical columns crossed by a horizontal bordeaux line, with a magnifying glass and an amber dot on the right" loading="lazy" width="1200" height="675">
</figure>

<h2>Fact-checking and open-source research</h2>

<h3>A fact is cheap. A retraction is dear.</h3>

<p>When a journalist publishes a fact that is refuted a week later, he does not lose one article. He loses the reserve of trust he has been earning for years.</p>

<p>We verify claims, cross-check biographies, and rebuild chronologies from open sources — state registers, press archives, academic databases, corporate filings. Every claim in our report is footed to a primary source. Not a secondary retelling. A primary one.</p>

<p>We work as an auditor in a bank does: until a fact is confirmed by two independent sources, it is marked yellow.</p>

<p><em>We do not help build a case against a particular person. We do not help fabricate a dossier. We help you understand what is actually in the open record.</em></p>

<figure class="services-hero">
  <img src="/images/services/hero-lucerna.webp" alt="A layered shaft of documents and a single amber dot on a hanging line, like a lantern" loading="lazy" width="1200" height="675">
</figure>

<h2>Long-form investigation into a single subject (Lucerna)</h2>

<h3>Six months on a single subject.</h3>

<p>When a question will not close with one report, what is needed is not another fact-check but a half-year immersion. We have a separate project for this — <a href="https://lucerna.folkup.app" rel="noopener">Lucerna</a>.</p>

<p>It is a laboratory. Investigation, methodological notes, open sources assembled into a system. The kind of work that will not fit inside an encyclopedia entry but calls for the same discipline of verification.</p>

<p>We take it on if the subject is worth six months of work. And if the result can be published — slowly, perhaps, but in the open.</p>

<p><em>We do not compile dossiers on private individuals. We do not sell paid 'inside briefings for investors'. We do the kind of thing the client reads and forwards to a narrow circle.</em></p>

<figure class="services-hero">
  <img src="/images/services/hero-longread.webp" alt="An abstract planar composition of amber and sepia rectangles" loading="lazy" width="1200" height="675">
</figure>

<h2>A long essay or a signed piece of writing</h2>

<h3>If you have something to say, better not hurry.</h3>

<p>When half the articles now are written in thirty minutes under the banner of the content machine, writing one good article over two weeks is already an act.</p>

<p>We write long essays of ten to forty thousand characters, on a subject the author knows more deeply than he can lay out in one sitting. We take the interview, unfold the argument, check the facts, build the story. The result: a text that could run in The Atlantic without blushing. The starting point: your voice, your expertise, your name.</p>

<p>Every publication carries the client's name. There should be no trace of us in the text. That is the whole point of the work.</p>

<p><em>Suits you if you want the text to sound like you. Not for you if you need it to sound 'like everyone else' for the algorithms.</em></p>

<figure class="services-hero">
  <img src="/images/services/hero-encyclopedia.webp" alt="A grid of article cards with one amber card set forward from the rest" loading="lazy" width="1200" height="675">
</figure>

<h2>An encyclopedia section or a book project</h2>

<h3>Work with a long memory.</h3>

<p>Three encyclopedias are already open — <a href="https://setubal.folkup.city" rel="noopener">Setubal</a> (501 entries), <a href="https://padel.folkup.fit" rel="noopener">padel</a> (243), <a href="https://cogumelos.folkup.fit" rel="noopener">mushrooms of Portugal</a> (164). Two are in preparation — <a href="https://aquarium.folkup.city" rel="noopener">the aquarium encyclopedia</a> and <a href="https://dialup.folkup.city" rel="noopener">the retro tech of the nineties</a>. A sixth, <a href="https://tarot.folkup.life" rel="noopener">tarot</a>, is on pause — our hands do not reach it for now.</p>

<p>We build an encyclopedia from the glossary up to a full reference structure, with search, cross-references, and structured metadata. Six months to a year of work. Openly published — read, copy, continue — so the text outlives us.</p>

<p>We take it on if the subject is narrow and worthy. Narrow, because otherwise it thins out. Worthy, because in the FolkUp catalogue every encyclopedia stands under an author's own name.</p>

<p><em>We do not do startup encyclopedias or SEO farms. We do the kind of thing one reader will want to read to the end.</em></p>

<figure class="services-hero">
  <img src="/images/services/hero-illustrations.webp" alt="A palette with three dots — bordeaux, amber, sage — and a brush laid diagonally" loading="lazy" width="1200" height="675">
</figure>

<h2>Illustrations for a book, a long essay or a site</h2>

<h3>A picture that is not trying to please everyone.</h3>

<p>Illustration for the internet today is mostly made with a view to offending no one. It is neutral, symmetrical, harmless. A week later the author no longer remembers which picture ran with his last article.</p>

<p>We make illustrations in an editorial spirit, with the expectation that one of them will stay in memory. We work through Flux and a pipeline of our own edits (<a href="/en/about/ai-use">more on our AI practice</a>). Every picture is seen by an illustrator before it is generated, not 'we ran twenty variants and picked the prettiest'.</p>

<p>Suits book covers, magazine spreads, a picture that carries a long article.</p>

<p><em>If you need a stock picture from Shutterstock for twenty euros, that is where you should go. If you need one picture of your own that will last ten years, we can talk.</em></p>

<figure class="services-hero">
  <img src="/images/services/hero-website.webp" alt="A layered vertical column with a compass and lantern at its base" loading="lazy" width="1200" height="675">
</figure>

<h2>A long-lived site for publishing</h2>

<h3>A site that will not need rebuilding two years on.</h3>

<p>Most sites die not from technical faults but because the copy dates, the design ages inside half a year, and the tool wants updating every quarter.</p>

<p>Static generation. Content in a typed structure. Fonts served from our own machine. No hidden tracking.</p>

<p>Accessible to WCAG 2.1 AA, GDPR observed. The result: a site that three years on opens in a second and a half.</p>

<p>Twelve sites are already running.</p>

<p><em>We do not do commercial shops; we do not do landing pages that push the visitor to buy. We do publishing sites for a thoughtful readership.</em></p>

<h2>Get in touch</h2>

<p>If this sounds like your project, write to us: <a href="mailto:anklem@folkup.app">anklem@folkup.app</a>. Read by hand.</p>

<p class="services-legal-footer"><small>See also: <a href="/en/privacy">Privacy Policy</a> · <a href="/en/about/ai-use">How we work with AI</a></small></p>`,
        ru: `<p>Мы берёмся за работу, у которой есть срок жизни длиннее квартала.</p>

<p>Семь направлений. Каждое — с конкретным результатом и письменными границами.</p>

<p>Не для всех. Подробности — ниже.</p>

<figure class="services-hero">
  <img src="/images/services/hero-translation.webp" alt="Два разворота книги с гусиным пером и амбер-лампой в углу" loading="lazy" width="1200" height="675">
</figure>

<h2>Перевод книги или большого документа на немецкий или европейский португальский</h2>

<h3>Перевод, который не льстит переводчику.</h3>

<p>Машинный перевод сегодня хорош ровно настолько, что заказчик не понимает, зачем платить человеку. Понимает, когда немец возвращает страницу со словами: «Это перевели».</p>

<p>Мы переводим долгие тексты на немецкий (берлинская речь — Хайне, Брехт, Тухольский) и на европейский португальский (лиссабонская норма — Сарамаго, София де Мелло, Эса де Кейрош). Сначала черновик через машинный движок — потом наш переводчик правит, пока местный не споткнётся. Потом «четыре глаза» — второй носитель проверяет ещё раз.</p>

<p>Берёмся за тексты не короче авторского листа. Не делаем технические инструкции, не делаем рекламные слоганы. Делаем то, что читают подряд, а не сканируют.</p>

<p><em>Подойдёт, если перевод выйдет открытым — читайте, копируйте, передавайте дальше. Не подойдёт, если нужен анонимный перевод под чужим именем.</em></p>

<figure class="services-hero">
  <img src="/images/services/hero-osint.webp" alt="Три вертикальных столбца пересечены горизонтальной бордо-чертой, справа лупа с амбер-точкой" loading="lazy" width="1200" height="675">
</figure>

<h2>Проверка фактов и поиск по открытым источникам</h2>

<h3>Факт стоит дёшево. Опровержение — дорого.</h3>

<p>Когда журналист публикует факт, который через неделю опровергнут — он не теряет одну статью. Он теряет тот резерв доверия, который зарабатывал годами.</p>

<p>Мы проверяем утверждения, проводим биографические сверки, восстанавливаем хронологию по открытым источникам — государственным реестрам, архивам прессы, академическим базам, корпоративным отчётам. Каждое утверждение в нашем отчёте — со ссылкой на первичный источник. Не на вторичный пересказ. На первичный.</p>

<p>Работаем как ревизор в банке: пока факт не подтверждён двумя независимыми источниками, он помечен жёлтым.</p>

<p><em>Не помогаем выстраивать атаку на конкретного человека. Не помогаем фабриковать компромат. Помогаем понять, что есть в открытых источниках на самом деле.</em></p>

<figure class="services-hero">
  <img src="/images/services/hero-lucerna.webp" alt="Многослойная шахта документов и одинокая амбер-точка-фонарь на подвесной линии" loading="lazy" width="1200" height="675">
</figure>

<h2>Долгое расследование одной темы (Lucerna)</h2>

<h3>Шесть месяцев на одну тему.</h3>

<p>Когда вопрос не закрывается одним отчётом — нужна не очередная проверка факта, а полугодовое погружение. У нас для этого есть отдельный проект — <a href="https://lucerna.folkup.app" rel="noopener">Lucerna</a>.</p>

<p>Это лаборатория. Расследование, методологические заметки, открытые источники, собранные в систему. То, что не помещается в форму энциклопедии, но требует той же дисциплины проверки.</p>

<p>Берёмся, если тема стоит шести месяцев работы. И если результат может быть опубликован — пусть медленно, но открыто.</p>

<p><em>Не делаем досье на частных лиц. Не делаем платные «инсайды для инвесторов». Делаем то, что заказчик читает и пересылает узкому кругу.</em></p>

<figure class="services-hero">
  <img src="/images/services/hero-longread.webp" alt="Абстрактная планарная композиция из амбер-сепия прямоугольников" loading="lazy" width="1200" height="675">
</figure>

<h2>Длинная статья или авторский очерк</h2>

<h3>Если у вас есть, что сказать, лучше не торопиться.</h3>

<p>Когда половина статей сегодня пишется за тридцать минут под лозунгом «контент-машина», написать одну хорошую статью за две недели — это уже поступок.</p>

<p>Мы пишем долгие очерки от десяти до сорока тысяч знаков — на тему, которой автор владеет глубже, чем успевает изложить за один присест. Берём интервью, разворачиваем тезисы, проверяем факты, выстраиваем рассказ. На выходе — текст, который можно опубликовать в The Atlantic, не покраснев. На входе — ваш голос, ваша экспертиза, ваше имя.</p>

<p>Каждая публикация подписана именем заказчика. Нашего следа в тексте быть не должно. Это и есть смысл работы.</p>

<p><em>Подойдёт, если вы хотите, чтобы текст звучал, как вы. Не подойдёт, если нужно «как у всех» под алгоритмы.</em></p>

<figure class="services-hero">
  <img src="/images/services/hero-encyclopedia.webp" alt="Сетка карточек-статей с одной выдвинутой вперёд амбер-карточкой" loading="lazy" width="1200" height="675">
</figure>

<h2>Энциклопедический раздел или книжный проект</h2>

<h3>Долгопамятная работа.</h3>

<p>Три энциклопедии открыты — <a href="https://setubal.folkup.city" rel="noopener">Сетубал</a> (501 статья), <a href="https://padel.folkup.fit" rel="noopener">падел</a> (243), <a href="https://cogumelos.folkup.fit" rel="noopener">грибы Португалии</a> (164). Две готовятся — <a href="https://aquarium.folkup.city" rel="noopener">аквариум</a> и <a href="https://dialup.folkup.city" rel="noopener">ретротехника девяностых</a>. Шестая, <a href="https://tarot.folkup.life" rel="noopener">таро</a>, на паузе — руки временно не доходят.</p>

<p>Строим энциклопедию — от глоссария до полноценной справочной структуры с поиском, перекрёстными ссылками и структурированными метаданными. Полгода-год работы. Текст остаётся открытым — читайте, копируйте, продолжайте — чтобы пережил нас.</p>

<p>Берёмся, если тема узкая и достойная. Узкая — потому что иначе размывается. Достойная — потому что в каталоге FolkUp под каждой энциклопедией автор подписывается под своим именем.</p>

<p><em>Не делаем «энциклопедии стартапов» и SEO-фермы. Делаем то, что один человек захочет дочитать до конца.</em></p>

<figure class="services-hero">
  <img src="/images/services/hero-illustrations.webp" alt="Палитра с тремя точками бордо-амбер-шалфей и кисть по диагонали" loading="lazy" width="1200" height="675">
</figure>

<h2>Иллюстрации к книге, лонгриду или сайту</h2>

<h3>Картинка, которая не пытается понравиться всем.</h3>

<p>Современная иллюстрация для интернета чаще всего сделана из соображения «не задеть никого». Она нейтральная, симметричная, безобидная. Через неделю автор не помнит, какая иллюстрация была у его прошлой статьи.</p>

<p>Мы делаем иллюстрации в редакционном духе — с расчётом на то, что одна остаётся в памяти. Работаем через Flux и собственную цепочку правок (<a href="/ru/about/ai-use">подробнее о работе с AI</a>). Каждую картинку художник смотрит перед запуском — не «сгенерировал двадцать вариантов, выбрал самый красивый».</p>

<p>Подходит для книжной обложки, для журнального разворота, для иллюстрирования большой статьи.</p>

<p><em>Если нужна картинка с Shutterstock за двадцать евро — туда и идите. Если нужна одна своя на десять лет — поговорим.</em></p>

<figure class="services-hero">
  <img src="/images/services/hero-website.webp" alt="Многослойная вертикальная колонна с компасом-фонарём в основании" loading="lazy" width="1200" height="675">
</figure>

<h2>Долгоживущий сайт для публикации</h2>

<h3>Сайт, который не нужно переделывать через два года.</h3>

<p>Большинство сайтов умирает не от технических проблем — от того, что текст устаревает, дизайн стареет за полгода, инструмент требует обновления каждый квартал.</p>

<p>Статическая генерация. Контент в типизированной структуре. Шрифты на своём сервере. Никакого скрытого трекинга.</p>

<p>Доступность по стандарту WCAG 2.1 AA, GDPR соблюдён. На выходе — сайт, который через три года открывается за полторы секунды.</p>

<p>Двенадцать сайтов уже работают.</p>

<p><em>Не делаем коммерческие магазины, не делаем лендинги, которые гонят на покупку. Делаем издательские сайты для интеллектуальной аудитории.</em></p>

<h2>Связаться</h2>

<p>Если работа похожа на ваш проект — напишите: <a href="mailto:anklem@folkup.app">anklem@folkup.app</a>. Читаем вручную.</p>

<p class="services-legal-footer"><small>См. также: <a href="/ru/privacy">Политика конфиденциальности</a> · <a href="/ru/about/ai-use">Как мы работаем с AI</a></small></p>`,
        pt: `<p>Aceitamos trabalhos cuja vida útil seja mais longa do que um trimestre.</p>

<p>Sete direções. Cada uma com um resultado concreto e limites escritos.</p>

<p>Não é para todos. Os pormenores estão em baixo.</p>

<figure class="services-hero">
  <img src="/images/services/hero-translation.webp" alt="Dois desdobramentos de um livro com uma pena de ganso e um candeeiro âmbar ao canto" loading="lazy" width="1200" height="675">
</figure>

<h2>Tradução de livro ou de documento extenso para alemão ou português europeu</h2>

<h3>Uma tradução que não lisonjeia o tradutor.</h3>

<p>A tradução automática está hoje suficientemente boa para que o cliente não perceba porque há de pagar a uma pessoa. Percebe quando o alemão devolve a página com um comentário: «Isto foi traduzido.»</p>

<p>Traduzimos textos longos para alemão (fala de Berlim — Heine, Brecht, Tucholsky) e para português europeu (norma de Lisboa — Saramago, Sophia de Mello, Eça de Queirós). Primeiro um rascunho passado por motor automático — depois o nosso tradutor corrige até o leitor local deixar de tropeçar. A seguir, «quatro olhos» — um segundo falante nativo verifica outra vez.</p>

<p>Aceitamos textos não inferiores a uma folha de autor. Não fazemos manuais técnicos nem slogans publicitários. Fazemos aquilo que se lê seguido e não se percorre em diagonal.</p>

<p><em>Serve se a tradução for para sair aberta — livre para ler, copiar e adaptar. Não serve se precisar de uma tradução anónima assinada por outro nome.</em></p>

<figure class="services-hero">
  <img src="/images/services/hero-osint.webp" alt="Três colunas verticais cortadas por uma linha horizontal cor de bordô, com uma lupa e um ponto âmbar à direita" loading="lazy" width="1200" height="675">
</figure>

<h2>Verificação de factos e pesquisa em fontes abertas</h2>

<h3>Um facto sai barato. O desmentido sai caro.</h3>

<p>Quando um jornalista publica um facto que uma semana depois é desmentido, não perde apenas um artigo. Perde a reserva de confiança que levou anos a construir.</p>

<p>Verificamos afirmações, cruzamos biografias, reconstruímos cronologias a partir de fontes abertas — registos públicos, arquivos de imprensa, bases académicas, relatórios corporativos. Cada afirmação do nosso relatório vem com hiperligação para a fonte primária. Não para uma paráfrase secundária. Para a primária.</p>

<p>Trabalhamos como um revisor de contas num banco: enquanto o facto não estiver confirmado por duas fontes independentes, fica marcado a amarelo.</p>

<p><em>Não ajudamos a montar ataques a pessoas concretas. Não ajudamos a fabricar dossiês difamatórios. Ajudamos a perceber o que existe efetivamente em fontes abertas.</em></p>

<figure class="services-hero">
  <img src="/images/services/hero-lucerna.webp" alt="Um poço multi-camada de documentos e um único ponto-lanterna âmbar suspenso numa linha" loading="lazy" width="1200" height="675">
</figure>

<h2>Investigação longa sobre um único tema (Lucerna)</h2>

<h3>Seis meses num só assunto.</h3>

<p>Quando a pergunta não se resolve com um relatório, não é de mais uma verificação de factos que precisa, mas de um mergulho de meio ano. Para isso temos um projeto próprio — <a href="https://lucerna.folkup.app" rel="noopener">Lucerna</a>.</p>

<p>É um laboratório. Uma investigação, notas metodológicas, fontes abertas organizadas num sistema. Aquilo que não cabe no formato de enciclopédia mas exige a mesma disciplina de verificação.</p>

<p>Aceitamos se o tema justificar seis meses de trabalho. E se o resultado puder ser publicado — devagar, mas em aberto.</p>

<p><em>Não fazemos dossiês sobre pessoas privadas. Não fazemos «insights pagos para investidores». Fazemos aquilo que o cliente lê e reencaminha para um círculo restrito.</em></p>

<figure class="services-hero">
  <img src="/images/services/hero-longread.webp" alt="Composição planar abstrata em retângulos âmbar e sépia" loading="lazy" width="1200" height="675">
</figure>

<h2>Artigo longo ou ensaio de autor</h2>

<h3>Se tem alguma coisa para dizer, mais vale não ter pressa.</h3>

<p>Quando metade dos artigos de hoje se escreve em trinta minutos, sob a divisa da «máquina de conteúdos», escrever um bom artigo em duas semanas já é um gesto.</p>

<p>Escrevemos ensaios longos, entre dez e quarenta mil caracteres — sobre um tema em que o autor tem mais fundo do que aquilo que consegue expor de uma assentada. Recolhemos entrevistas, desenvolvemos as teses, verificamos os factos, construímos a narrativa. À saída, um texto que se podia publicar no The Atlantic sem corar. À entrada, a sua voz, a sua experiência, o seu nome.</p>

<p>Cada publicação é assinada pelo nome do cliente. Do nosso rasto, nada deve ficar no texto. É esse o sentido do trabalho.</p>

<p><em>Serve se quiser que o texto soe como o próprio. Não serve se precisar de algo «igual aos outros» a pensar em algoritmos.</em></p>

<figure class="services-hero">
  <img src="/images/services/hero-encyclopedia.webp" alt="Grelha de fichas-artigo com uma ficha âmbar destacada em primeiro plano" loading="lazy" width="1200" height="675">
</figure>

<h2>Secção enciclopédica ou projeto de livro</h2>

<h3>Trabalho para longa memória.</h3>

<p>Três enciclopédias estão abertas — <a href="https://setubal.folkup.city" rel="noopener">Setúbal</a> (501 artigos), <a href="https://padel.folkup.fit" rel="noopener">padel</a> (243), <a href="https://cogumelos.folkup.fit" rel="noopener">cogumelos de Portugal</a> (164). Duas em preparação — <a href="https://aquarium.folkup.city" rel="noopener">aquarium</a> e <a href="https://dialup.folkup.city" rel="noopener">retrotécnica dos anos noventa</a>. Uma sexta, <a href="https://tarot.folkup.life" rel="noopener">tarot</a>, está em pausa — falta tempo, por agora.</p>

<p>Construímos a enciclopédia desde o glossário até uma estrutura de consulta completa, com pesquisa, referências cruzadas e metadados estruturados. Entre meio ano e um ano de trabalho. Texto aberto — ler, copiar, continuar — para que sobreviva a quem o fez.</p>

<p>Aceitamos se o tema for restrito e à altura. Restrito, porque de outro modo se dilui. À altura, porque no catálogo FolkUp o autor de cada enciclopédia assina com o seu nome.</p>

<p><em>Não fazemos «enciclopédias de startups» nem quintas de SEO. Fazemos aquilo que uma pessoa quer ler até ao fim.</em></p>

<figure class="services-hero">
  <img src="/images/services/hero-illustrations.webp" alt="Paleta com três pontos — bordô, âmbar e salva — e um pincel na diagonal" loading="lazy" width="1200" height="675">
</figure>

<h2>Ilustração para livro, ensaio longo ou site</h2>

<h3>Uma imagem que não tenta agradar a todos.</h3>

<p>A ilustração contemporânea para a internet é, quase sempre, feita a pensar em «não incomodar ninguém». É neutra, simétrica, inofensiva. Uma semana depois, o autor já não se lembra de qual era a imagem do artigo anterior.</p>

<p>Fazemos ilustração em registo editorial — a pensar em que uma fique na memória. Trabalhamos com o Flux e uma cadeia de revisões própria (<a href="/pt/about/ai-use">mais sobre o nosso trabalho com IA</a>). Cada imagem passa pelos olhos do ilustrador antes do lançamento — nada de «gerámos vinte variantes, ficámos com a mais bonita».</p>

<p>Serve para capa de livro, para desdobramento de revista, para ilustrar um artigo longo.</p>

<p><em>Se precisa de uma imagem da Shutterstock por vinte euros, é para lá que deve ir. Se precisa de uma imagem própria para dez anos, falamos.</em></p>

<figure class="services-hero">
  <img src="/images/services/hero-website.webp" alt="Coluna vertical multi-camada com uma bússola-lanterna na base" loading="lazy" width="1200" height="675">
</figure>

<h2>Site duradouro para publicação</h2>

<h3>Um site que não é preciso refazer dois anos depois.</h3>

<p>A maioria dos sites não morre por problemas técnicos — morre porque o texto envelhece, o desenho envelhece em meio ano e a ferramenta pede atualizações a cada trimestre.</p>

<p>Geração estática. Conteúdo numa estrutura tipada. Tipos de letra no nosso servidor. Nada de rastreio dissimulado.</p>

<p>Acessibilidade segundo a norma WCAG 2.1 AA, RGPD cumprido. À saída, um site que, três anos depois, abre em segundo e meio.</p>

<p>Doze sites já estão a funcionar.</p>

<p><em>Não fazemos lojas de comércio eletrónico, nem páginas de aterragem para forçar a compra. Fazemos sites editoriais para um público intelectual.</em></p>

<h2>Contactar</h2>

<p>Se este trabalho se parece com o seu projeto, escreva: <a href="mailto:anklem@folkup.app">anklem@folkup.app</a>. Lemos com atenção.</p>

<p class="services-legal-footer"><small>Ver também: <a href="/pt/privacy">Política de Privacidade</a> · <a href="/pt/about/ai-use">Como trabalhamos com IA</a></small></p>`,
      },
    } as LegalPageSection,
  ],
}
