<!-- precommit:allow-ai-mentions -->
# Courier-Mode Protocol — Алиса ↔ Иви (External Claude Design Partner)

**Status:** ACTIVE (per Q-DSGN-1+2 closure 2026-05-29 — MCP bridge out of scope, courier-mode is canonical Алиса↔Иви communication mechanism)
**Owner:** Алиса (`/alice`) с возможным delegation к Печкину (`/pechkin`) для большого batch coordination
**Documented:** 2026-05-29 by Алиса per Оракул APPROVE_WITH_SIMPLIFICATION recommendation на Q-DSGN-1+2

---

## What is courier-mode

External Claude AI conversation focused on design (referred to as «Иви» in FolkUp ecosystem) is technically separate from Алиса session. They cannot directly share context. Communication happens through **manual file transfer mediated by Андрей-courier**:

1. Алиса composes outbound artifact in her message (intake brief, canon snapshot, decision card)
2. Андрей saves file to `tmp/for-<partner>/<YYYY-MM-DD>/` directory
3. Андрей opens separate Claude conversation (Иви session), pastes contents
4. Иви responds with design output, sketches, recommendations
5. Андрей saves response to `tmp/from-<partner>/<YYYY-MM-DD>/`
6. Андрей returns to Алиса session, shares Иви response
7. Алиса ingests, continues orchestration

Single courier cycle latency: ~10-30 minutes wall-clock + user attention.

---

## Directory convention

```
<project-root>/tmp/
├── for-ivi/
│   └── YYYY-MM-DD/         # outbound batches к Иви
│       ├── README.md       # batch manifest (tier 1 action list, что внутри, ожидаемый response)
│       ├── *.md            # content artifacts (briefs, snapshots, cards)
│       └── *.zip           # optional bundle for large batches
└── from-ivi/
    └── YYYY-MM-DD/         # inbound responses от Иви
        ├── README.md       # response manifest (если Иви документировала)
        └── *.md / *.zip    # response content
```

**Naming convention:** YYYY-MM-DD = date courier batch initiated (not batch composed). Multiple batches same day → suffix `2026-05-29a/`, `2026-05-29b/`.

`tmp/` is gitignored — courier artifacts ephemeral by design (не для archival).

---

## Batch artifact format

Каждый outbound batch contains:

1. **README.md (mandatory)** — manifest с:
   - Цель batch (что мы спрашиваем / просим / делегируем)
   - Список файлов с brief descriptions
   - Tier 1 actions (что Андрей-courier должен сделать в первую очередь, e.g. «mobile-friendly Q1-Q5 card — посмотри пока в дороге»)
   - Ожидаемый response (что Иви возвращает — design draft, ответы на questions, etc.)
   - Deadline если есть

2. **Content artifacts** — следуют intake document skeleton (XML/Markdown sectioned per Фриды Section 2 — see `~/.backups/orga-pre-cleanup-20260418/.claude/orchestra/experts/frida-illustration.md` Section 2)

3. **Optional .zip bundle** — если batch >5 files OR >1MB total

---

## Ingest checklist (when response returns)

Алиса при ingest inbound batch:

- [ ] Read README first (если есть) — определить overall scope
- [ ] Read response artifacts in priority order
- [ ] Cross-reference с outbound batch — verify Иви addressed запросы
- [ ] Identify decision items requiring Андрей approval
- [ ] Identify content/decisions to integrate в FolkUp BACKLOG, contexts, memory
- [ ] Document «closed» / «pending follow-up» / «escalation needed» для each thread
- [ ] Update relevant project context files
- [ ] Acknowledge ingestion to Андрей с summary

---

## Hand-off etiquette

**Алиса → Andrei-courier:**
- Mark обvious priority items в README (Tier 1 / Tier 2)
- Explicit «можно смотреть с мобильного» если applicable
- Если batch large (>1MB), warn Андрея в session
- Provide quick summary в session message tо batch save: «package staged в tmp/for-ivi/2026-05-29/, 6 files / 100KB, 5 Q's для тебя — посмотри как удобно»

**Андрей-courier → Иви:**
- Open new Claude conversation OR continue existing если same scope
- Paste README first, then content artifacts
- Если Иви requests clarification — bridge back к Алисе session OR answer directly (per Andrei judgment)

**Иви → Андрей-courier:**
- Иви may produce response в her own session
- Андрей saves к `from-ivi/` if response contains FolkUp-relevant decisions/artifacts

**Андрей-courier → Алиса:**
- Share inbound в session message: «Иви вернула, package staged в from-ivi/2026-05-29/, key decision: X»
- Алиса ingests next response

---

## Когда courier-mode hits limits

Defined trigger conditions для re-opening Q-DSGN-1+2 MCP bridge decision (NOT auto, requires explicit Андрей):

- **Trigger A:** Courier overhead >2 hours Андрей-time/week, sustained over 2 consecutive weeks (measurable via session log review)
- **Trigger B:** Single batch >1MB (composing too much для manual paste) — measurable at batch compose time
- **Trigger C:** DSGN epic reaches 50% milestone — calendar-based forced revisit (~when 5+ Phase 2 batches shipped)

Если any trigger fires → Алиса flags в session к Андрею: «courier overhead breaching threshold X — re-open Q-DSGN-1+2 для MCP build decision?»

Without trigger fire → courier-mode is the canonical workflow. No MCP build.

---

## Historical context

- Established pattern in agile-sapiens session 2026-05-28 (5+ successful courier batches)
- Workstream C MCP bridge planning (КиберГонзо research + Кочегар deployment plan + Купер threat model в `tmp/for-ivi/2026-05-29/`) currently OUT OF SCOPE
- Frida L2 archive Section 2 (`~/.backups/.../frida-illustration.md`) provides Claude prompt engineering для design partner workflows — Алиса invokes Frida через `general-purpose` Agent с архивной маской для composing intake artifacts

---

**Memory references:**
- `~/.claude/projects/.../memory/project_dsgn_decisions_locked.md` (Q-DSGN-1+2 closure, MCP defer rationale)
- `vault/contexts/folkup-landing.md` (current state context)
- `~/.backups/orga-pre-cleanup-20260418/.claude/orchestra/experts/frida-illustration.md` (Frida Section 2 brief authoring)

**Last updated:** 2026-05-29 (initial creation per Q-DSGN-1+2 closure)
