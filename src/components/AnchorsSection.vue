<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import { homePage } from '@/content/pages'
import { resolveLocalized } from '@/content/types'
import type { AnchorSection as AnchorSectionType } from '@/content/types'

const { locale } = useI18n()

const services = homePage.sections.find((s) => s.type === 'services') as AnchorSectionType | undefined
const openCode = homePage.sections.find((s) => s.type === 'open-code') as AnchorSectionType | undefined
if (!services) throw new Error('Services section missing from homePage manifest')

// open-code is optional — removed 2026-06-22 per Андрей mandate cont +36 batch B-2
// «всё что не готово — на главной не светим» (Q5 Б). Component now renders only
// services anchor when open-code missing. Returns when ≥3 repos publicly open.
const anchors = computed(() =>
  [services, openCode].filter((a): a is AnchorSectionType => a !== undefined).map((a) => ({
    id: a.id,
    label: resolveLocalized(a.label, locale.value) ?? '',
    title: resolveLocalized(a.title, locale.value) ?? '',
    body: resolveLocalized(a.body, locale.value) ?? '',
  })),
)
</script>

<template>
  <section class="section anchors-section fade-in">
    <div class="anchors-row">
      <article v-for="a in anchors" :key="a.id" :id="a.id" class="anchor-block">
        <span class="section-label">{{ a.label }}</span>
        <h3 class="anchor-title">{{ a.title }}</h3>
        <!-- v-html: body strings в manifest contain sanctioned inline <a> к
             /{lang}/services + plaintext "Write: email". Content author-trusted
             (typed manifest, not user input). Fix per Iskra S238 §7 «литерал
             HTML в тексте виден» — cont+38 B1 2026-08-02.
             T-315-13 вариант Б RU канон (Iskra S315-14 §2 → S1ORCH cont+3 PR-C
             2026-09-07): контейнер `<p>` → `<div>` для multi-block содержимого
             (h4/figure/img внутри body per RU канон §2 «4 punkta с образцами»).
             EN/PT/DE body остаются single-paragraph strings — рендерятся идентично
             в `<div>`, зависимость от `<p>` не была семантической. -->
        <div class="anchor-body" v-html="a.body"></div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.anchors-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 760px) {
  .anchors-row {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}

.anchor-block {
  min-width: 0;
  overflow-wrap: break-word;
}

.anchor-title {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-bordo);
  margin: 0.5rem 0 0.75rem;
  line-height: 1.3;
  min-width: 0;
  overflow-wrap: break-word;
}

.anchor-body {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--color-text);
  margin: 0;
  overflow-wrap: break-word;
}

/*
 * GLAV-16 verstka Комиссий per Iskra S319-02 §B + POPRAVKA-S319-03a §2 (cont+7 S1ORCH):
 * - h4 headings разделены тонкой линейкой (без карточек с тенями, без нумерации 01/02/03)
 * - 4-й h4 «Помощь с домом» визуально отделён (STRATEGIYA-1 «не услуга, помощь по необходимости»)
 * - Frida figure inline вписана в тон, одна на раздел
 * - <em> intro «Всё ниже мы сделали для себя…» акцентируется в подводку
 * - section-label eyebrow «Commissions» снят (Iskra §2 «Ярлыки-eyebrow снять — заголовки
 *   сами несут связку»)
 * - Ссылка «Подробнее →» и mailto plaintext — без CTA-кнопки
 */

.anchors-section .section-label {
  display: none;
}

.anchor-body :deep(> :first-child em) {
  display: block;
  font-style: italic;
  color: var(--color-text-muted, var(--color-text));
  margin-bottom: 1.25rem;
  font-size: 0.9rem;
}

.anchor-body :deep(h4) {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-bordo);
  border-top: 1px solid var(--divider, rgba(125, 68, 80, 0.15));
  padding-top: 1.5rem;
  margin: 2rem 0 0.75rem;
  line-height: 1.35;
}

.anchor-body :deep(h4:first-of-type) {
  border-top: none;
  padding-top: 0;
  margin-top: 1rem;
}

.anchor-body :deep(h4:nth-of-type(4)) {
  background: var(--surface-quiet, rgba(232, 173, 74, 0.06));
  padding: 1.5rem 1.25rem 0.75rem;
  margin-top: 2.5rem;
  border-top: none;
  border-radius: 3px;
  font-size: 0.98rem;
}

.anchor-body :deep(h4:nth-of-type(4) + p) {
  background: var(--surface-quiet, rgba(232, 173, 74, 0.06));
  padding: 0 1.25rem 1.5rem;
  margin-top: 0;
  border-radius: 0 0 3px 3px;
}

.anchor-body :deep(figure) {
  margin: 2rem 0;
  border-top: 1px solid var(--divider, rgba(125, 68, 80, 0.15));
  padding-top: 2rem;
}

.anchor-body :deep(figure img) {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 3px;
}
</style>
