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
      en: 'Voluntary disclosure under Article 50(4) of Regulation (EU) 2024/1689: roles of the human and AI assistants, editorial responsibility of the author, verifiability through an open license.',
      ru: 'Добровольное раскрытие по статье 50(4) Регламента (ЕС) 2024/1689: роли человека и ИИ-ассистентов, ответственность автора, проверяемость через открытую лицензию.',
      pt: 'Divulgação voluntária ao abrigo do n.º 4 do artigo 50.º do Regulamento (UE) 2024/1689: papéis do humano e dos assistentes de IA, responsabilidade editorial do autor, verificabilidade através de uma licença aberta.',
      de: 'Freiwillige Offenlegung nach Artikel 50 Absatz 4 der Verordnung (EU) 2024/1689: Rollen des Menschen und der KI-Assistenten, redaktionelle Verantwortung des Autors, Nachprüfbarkeit durch eine offene Lizenz.',
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
        de: 'KI-Nutzung',
      },
      lastUpdated: {
        en: 'Last updated 2026-09-08 — page rewritten: roles of the human and AI assistants named directly; claims about native-speaker verification lifted where there is no living reader.',
        ru: 'Обновлено 2026-09-07 — страница переписана: роли человека и ИИ-ассистентов названы прямо; заявления о проверке носителями сняты там, где живого читателя нет.',
        pt: 'Última atualização 2026-09-08 — página reescrita: papéis do humano e dos assistentes de IA nomeados diretamente; afirmações sobre verificação por falante nativo retiradas onde não há leitor vivo.',
        de: 'Letzte Aktualisierung 2026-09-08 — die Seite wurde neu geschrieben: Rollen des Menschen und der KI-Assistenten direkt benannt; Aussagen zur muttersprachlichen Prüfung dort entfernt, wo es keinen lebendigen Leser gibt.',
      },
      content: {
        en: `<p class="lead">Voluntary disclosure. Article 50(4) of Regulation (EU) 2024/1689.</p>

<h2>Editorial responsibility</h2>
<p>The books of the FolkUp Library are signed with the pseudonym «Comandante FolkUp». Behind the pseudonym stands one living person: Andrei Klemenchenok, publisher and editor, resident of Portugal. The pseudonym holds the series as a name holds a cover; responsibility for every word rests with a human. The model is the same as Banksy or Pessoa: remove the figure of the author from the reader's path — not to hide from the reader.</p>
<p>Contact for editorial and legal questions: <a href="mailto:editor@folkup.app">editor@folkup.app</a></p>

<h2>The human</h2>
<p>Plots, lines of thought, book structure, literary parallels, and all analytical conclusions arise without AI participation — this is the author's work. The author personally reads every book and every published text in its entirety, and personally signs off on every version before release. Where an edition has a living native-speaker reader (the German edition has a reader in Berlin), their notes are incorporated into revisions.</p>

<h2>AI assistants</h2>
<p>Editing, source verification, adversarial review, technical work, and translation drafts are performed by AI assistants of the ЩИТ («Shield») editorial system — each has its own name and role, listed in the colophon of each edition and on the <a href="/en/team">team page</a>. Each of their edits is a proposal to the author; the final decision and responsibility remain with the human.</p>
<p>Translations into English, Portuguese, and German are done the same way: an AI assistant translator prepares the draft, the series editor (Iskra) cross-checks the translation against the Russian original, the author signs off on the edition; where there is a living native-speaker reader, their notes are incorporated into revisions. Who translated and who cross-checked is stated in the colophon of each edition.</p>

<h2>Verifiability</h2>
<p>The source of every fact is listed in the book's apparatus. The Russian original and translations are published side by side under the CC BY-SA 4.0 license — any passage can be checked, contested, and republished with corrections. Found an error? Write to us: we will fix it in the next version and thank you in the colophon.</p>

<h2>Why voluntarily</h2>
<p>Under the second subparagraph of paragraph 4 of Article 50 of Regulation (EU) 2024/1689, the obligation to label AI-generated text does not apply if the content has undergone human editorial review and a natural or legal person bears editorial responsibility for the publication. That person is Andrei Klemenchenok. We disclose it anyway — as an editorial decision: the era these books are written about began also in our editorial workshop, and to conceal that would be to work against the books themselves.</p>

<h2>License</h2>
<p>All library content is Creative Commons Attribution-ShareAlike 4.0 International (<a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license">CC BY-SA 4.0</a>). Code is MIT.</p>`,
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
        pt: `<p class="lead">Divulgação voluntária. N.º 4 do artigo 50.º do Regulamento (UE) 2024/1689.</p>

<h2>Responsabilidade editorial</h2>
<p>Os livros da Biblioteca FolkUp estão assinados com o pseudónimo «Comandante FolkUp». Por trás do pseudónimo está uma pessoa viva: Andrei Klemenchenok, editor e responsável pela publicação, residente em Portugal. O pseudónimo sustenta a série como um nome sustenta uma capa; a responsabilidade por cada palavra pertence a um humano. O modelo é o mesmo que o de Banksy ou Pessoa: retirar a figura do autor do caminho do leitor — não para se esconder dele.</p>
<p>Contacto para questões editoriais e jurídicas: <a href="mailto:editor@folkup.app">editor@folkup.app</a></p>

<h2>O humano</h2>
<p>Enredos, linhas de pensamento, estrutura dos livros, paralelos literários e todas as conclusões analíticas surgem sem participação da IA — é o trabalho do autor. O autor lê pessoalmente cada livro e cada texto publicado por inteiro, e assina pessoalmente cada versão antes do lançamento. Onde uma edição tem um leitor-falante nativo vivo (a edição alemã tem um leitor em Berlim), as suas notas entram nas revisões.</p>

<h2>Assistentes de IA</h2>
<p>Edição, verificação de fontes, revisão adversarial, trabalho técnico e rascunhos de tradução são realizados por assistentes de IA do sistema editorial ЩИТ («Escudo») — cada um tem o seu nome e o seu papel, listados no colofão de cada edição e na <a href="/pt/team">página da equipa</a>. Cada uma das suas edições é uma proposta ao autor; a decisão final e a responsabilidade permanecem com o humano.</p>
<p>As traduções para inglês, português e alemão são feitas da mesma forma: um assistente de IA tradutor prepara o rascunho, a editora da série (Iskra) coteja a tradução com o original russo, o autor assina a edição; onde há um leitor-falante nativo vivo, as suas notas entram nas revisões. Quem traduziu e quem cotejou está indicado no colofão de cada edição.</p>

<h2>Verificabilidade</h2>
<p>A fonte de cada facto está indicada no aparato do livro. O original russo e as traduções são publicados lado a lado sob a licença CC BY-SA 4.0 — qualquer passagem pode ser verificada, contestada e republicada com correções. Encontrou um erro? Escreva-nos: corrigiremos na próxima versão e agradeceremos no colofão.</p>

<h2>Porquê voluntariamente</h2>
<p>Nos termos do segundo parágrafo do n.º 4 do artigo 50.º do Regulamento (UE) 2024/1689, a obrigação de rotular texto gerado por IA não se aplica se o conteúdo tiver passado por revisão editorial humana e uma pessoa singular ou coletiva assumir a responsabilidade editorial pela publicação. Essa pessoa é Andrei Klemenchenok. Divulgamos mesmo assim — por decisão editorial: a época sobre a qual estes livros estão escritos começou também na nossa redação, e esconder isso significaria trabalhar contra os próprios livros.</p>

<h2>Licença</h2>
<p>Todo o conteúdo da biblioteca — Creative Commons Attribution-ShareAlike 4.0 International (<a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license">CC BY-SA 4.0</a>). O código — MIT.</p>`,
        de: `<p class="lead">Freiwillige Offenlegung. Artikel 50 Absatz 4 der Verordnung (EU) 2024/1689.</p>

<h2>Redaktionelle Verantwortung</h2>
<p>Die Bücher der FolkUp-Bibliothek sind mit dem Pseudonym «Comandante FolkUp» unterzeichnet. Hinter dem Pseudonym steht ein lebender Mensch: Andrei Klemenchenok, Verleger und Redakteur, in Portugal ansässig. Das Pseudonym trägt die Reihe, wie ein Name einen Umschlag trägt; die Verantwortung für jedes Wort liegt bei einem Menschen. Das Modell ist dasselbe wie bei Banksy oder Pessoa: die Autorenfigur aus dem Weg des Lesers nehmen — nicht, um sich vor ihm zu verstecken.</p>
<p>Kontakt für redaktionelle und rechtliche Fragen: <a href="mailto:editor@folkup.app">editor@folkup.app</a></p>

<h2>Der Mensch</h2>
<p>Handlungen, Gedankengänge, Buchstruktur, literarische Parallelen und alle analytischen Schlüsse entstehen ohne KI-Beteiligung — das ist die Arbeit des Autors. Der Autor liest persönlich jedes Buch und jeden veröffentlichten Text zur Gänze und zeichnet persönlich jede Fassung vor der Veröffentlichung ab. Wo eine Ausgabe einen lebenden muttersprachlichen Leser hat (die deutsche Ausgabe hat einen Leser in Berlin), fließen dessen Anmerkungen in die Überarbeitung ein.</p>

<h2>KI-Assistenten</h2>
<p>Lektorat, Quellenprüfung, feindselige Durchsicht, technische Arbeit und Übersetzungsentwürfe werden von KI-Assistenten des redaktionellen Systems ЩИТ («Schild») durchgeführt — jeder hat seinen Namen und seine Rolle, aufgeführt im Kolophon jeder Ausgabe und auf der <a href="/de/team">Team-Seite</a>. Jede ihrer Änderungen ist ein Vorschlag an den Autor; die endgültige Entscheidung und Verantwortung verbleiben beim Menschen.</p>
<p>Übersetzungen ins Englische, Portugiesische und Deutsche werden gleich gemacht: Ein KI-Assistent-Übersetzer bereitet den Entwurf vor, die Serienredakteurin (Iskra) gleicht die Übersetzung mit dem russischen Original ab, der Autor zeichnet die Ausgabe ab; wo es einen lebenden muttersprachlichen Leser gibt, fließen dessen Anmerkungen in die Überarbeitung ein. Wer übersetzt und wer abgeglichen hat — ist im Kolophon jeder Ausgabe angegeben.</p>

<h2>Nachprüfbarkeit</h2>
<p>Die Quelle jeder Tatsache ist im Apparat des Buches angegeben. Das russische Original und die Übersetzungen werden Seite an Seite unter der Lizenz CC BY-SA 4.0 veröffentlicht — jede Passage kann überprüft, angefochten und mit Korrekturen neu veröffentlicht werden. Einen Fehler gefunden? Schreiben Sie uns: Wir korrigieren ihn in der nächsten Version und danken Ihnen im Kolophon.</p>

<h2>Warum freiwillig</h2>
<p>Nach Unterabsatz 2 von Absatz 4 des Artikels 50 der Verordnung (EU) 2024/1689 gilt die Pflicht zur Kennzeichnung KI-generierten Textes nicht, wenn der Inhalt eine menschliche redaktionelle Prüfung durchlaufen hat und eine natürliche oder juristische Person die redaktionelle Verantwortung für die Veröffentlichung trägt. Diese Person ist Andrei Klemenchenok. Wir legen es trotzdem offen — als redaktionelle Entscheidung: Die Epoche, über die diese Bücher geschrieben sind, begann auch in unserer Redaktion, und das zu verbergen hieße, gegen die Bücher selbst zu arbeiten.</p>

<h2>Lizenz</h2>
<p>Der gesamte Bibliotheksinhalt — Creative Commons Attribution-ShareAlike 4.0 International (<a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license">CC BY-SA 4.0</a>). Der Code — MIT.</p>`,
      },
    },
  ],
}
