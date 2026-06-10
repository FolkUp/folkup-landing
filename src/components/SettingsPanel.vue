<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n, type Locale } from '@/composables/useI18n'
import { useTheme, type Theme } from '@/composables/useTheme'

/**
 * Settings panel — единая иконка-кнопка содержащая переключатель языков
 * и переключатель тем. Per Андрей mandate 2026-06-10 E + verdict 2026-06-10:
 *   «одна иконка переключателей языков, иконка переключателя тем — сами
 *    свечи разделяем выпадающим меню либо попапом».
 *
 * Icon: витражная розетка (rose window) per Огилви selection 2026-06-10 A.
 * Pattern: non-modal popover (Johnny recommendation) — header stays interactive.
 * Layout: vertical sections (lang chips → divider → theme rows) per Фрида Bauhaus.
 *
 * Mobile-320 safe: single 44×44 trigger replaces 3-lang + 4-theme inline buttons.
 */

const { t, locale, locales, rememberLocale } = useI18n()
const { theme, setTheme, themes } = useTheme()
const route = useRoute()
const router = useRouter()

const open = ref(false)
const triggerRef = ref<HTMLButtonElement>()
const panelRef = ref<HTMLDivElement>()

const langLabels: Record<Locale, string> = { en: 'EN', ru: 'RU', pt: 'PT' }
const themeLabels = computed<Record<Theme, string>>(() => ({
  'folkup-default': t('themeDefault'),
  'folkup-steampunk': t('themeSteampunk'),
  'bw-light': t('themeBwLight'),
  'bw-dark': t('themeBwDark'),
}))

const LANG_PREFIX = /^\/(en|ru|pt)(?=\/|$)/

function toggle() {
  open.value = !open.value
}

function close() {
  if (!open.value) return
  open.value = false
  triggerRef.value?.focus()
}

function switchLocale(l: Locale) {
  if (l === locale.value) return
  rememberLocale(l)
  const stripped = route.path.replace(LANG_PREFIX, '') || '/'
  const newPath = l === 'en' ? stripped : `/${l}${stripped === '/' ? '' : stripped}`
  router.push(newPath)
  close()
}

function pickTheme(th: Theme) {
  setTheme(th)
  // Keep panel open — user can switch language после темы без reopen
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && open.value) {
    e.preventDefault()
    close()
  }
}

function onDocumentClick(e: MouseEvent) {
  if (!open.value) return
  const target = e.target as Node | null
  if (!target) return
  if (panelRef.value?.contains(target)) return
  if (triggerRef.value?.contains(target)) return
  open.value = false
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('click', onDocumentClick)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('click', onDocumentClick)
})
</script>

<template>
  <div class="settings-wrap">
    <button
      ref="triggerRef"
      type="button"
      class="settings-trigger"
      :aria-expanded="open"
      aria-haspopup="dialog"
      aria-controls="settings-panel"
      :aria-label="t('settingsTitle')"
      @click="toggle"
    >
      <!-- Витражная розетка (rose window) — Огилви selection 2026-06-10 -->
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" stroke-width="1.6" />
        <circle cx="16" cy="16" r="4" fill="var(--color-amber)" />
        <path
          d="M16 2 L16 30 M2 16 L30 16 M5.8 5.8 L26.2 26.2 M5.8 26.2 L26.2 5.8"
          stroke="currentColor"
          stroke-width="1.2"
        />
        <path d="M16 9 A 7 7 0 0 1 23 16 L16 16 Z" fill="var(--color-sage)" fill-opacity="0.65" />
        <path d="M23 16 A 7 7 0 0 1 16 23 L16 16 Z" fill="var(--color-amber)" fill-opacity="0.55" />
        <path d="M16 23 A 7 7 0 0 1 9 16 L16 16 Z" fill="var(--color-bordo)" fill-opacity="0.5" />
        <path d="M9 16 A 7 7 0 0 1 16 9 L16 16 Z" fill="var(--color-sage)" fill-opacity="0.5" />
      </svg>
    </button>

    <div
      v-if="open"
      id="settings-panel"
      ref="panelRef"
      class="settings-panel"
      role="dialog"
      :aria-label="t('settingsTitle')"
    >
      <section role="radiogroup" :aria-label="t('settingsLang')" class="settings-section">
        <h3 class="settings-section-title">{{ t('settingsLang') }}</h3>
        <div class="settings-row settings-row--lang">
          <button
            v-for="l in locales"
            :key="l"
            type="button"
            role="radio"
            :aria-checked="locale === l"
            :tabindex="locale === l ? 0 : -1"
            class="lang-btn"
            :class="{ active: locale === l }"
            @click="switchLocale(l)"
          >
            {{ langLabels[l] }}
          </button>
        </div>
      </section>

      <hr class="settings-divider" />

      <section role="radiogroup" :aria-label="t('settingsTheme')" class="settings-section">
        <h3 class="settings-section-title">{{ t('settingsTheme') }}</h3>
        <div class="settings-row settings-row--theme">
          <button
            v-for="th in themes"
            :key="th"
            type="button"
            role="radio"
            :aria-checked="theme === th"
            :tabindex="theme === th ? 0 : -1"
            class="theme-btn"
            :class="{ active: theme === th }"
            @click="pickTheme(th)"
          >
            <span class="theme-swatch" :data-theme-swatch="th" aria-hidden="true"></span>
            <span class="theme-label">{{ themeLabels[th] }}</span>
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.settings-wrap {
  position: relative;
}

.settings-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 0.35rem;
  min-width: 44px;
  min-height: 44px;
  cursor: pointer;
  color: var(--color-bordo);
  transition: color 0.15s ease, background 0.15s ease, border-color 0.15s ease;
}

.settings-trigger:hover {
  color: var(--color-bordo-hover);
  background: var(--color-surface);
}

.settings-trigger:focus-visible {
  outline: 2px solid var(--color-bordo);
  outline-offset: 2px;
}

.settings-trigger svg {
  width: 28px;
  height: 28px;
  display: block;
}

.settings-panel {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  z-index: 200;
  min-width: 260px;
  padding: 0.85rem 1rem 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  box-shadow: 0 4px 16px var(--color-shadow);
  animation: settings-reveal 220ms ease-out;
}

@keyframes settings-reveal {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}

.settings-section + hr {
  margin-top: 0.4rem;
}

.settings-section-title {
  font-family: var(--font-heading);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-muted);
  margin: 0 0 0.5rem;
}

.settings-divider {
  border: 0;
  border-top: 1px solid var(--color-border);
  margin: 0.5rem 0;
}

.settings-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.settings-row--lang {
  flex-direction: row;
}

.settings-row--theme {
  flex-direction: column;
  gap: 0.25rem;
}

.lang-btn {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  padding: 0.45rem 0.75rem;
  border-radius: 4px;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-muted);
  cursor: pointer;
  transition: all 0.15s ease;
  min-width: 44px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.lang-btn:hover {
  border-color: var(--color-bordo);
  color: var(--color-bordo);
}

.lang-btn.active {
  background: var(--color-bordo);
  border-color: var(--color-bordo);
  color: var(--color-on-primary);
}

.theme-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 0.6rem;
  border-radius: 4px;
  border: 1px solid transparent;
  background: transparent;
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 0.92rem;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
  min-height: 44px;
  text-align: left;
  width: 100%;
}

.theme-btn:hover {
  background: var(--color-bg);
  border-color: var(--color-border);
}

.theme-btn.active {
  background: var(--color-bg);
  border-color: var(--color-bordo);
  font-weight: 600;
  color: var(--color-bordo);
}

.theme-swatch {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  flex-shrink: 0;
  display: inline-block;
}

.theme-swatch[data-theme-swatch="folkup-default"] {
  background: radial-gradient(circle, #E8AD4A 0%, #7D4450 100%);
}

.theme-swatch[data-theme-swatch="folkup-steampunk"] {
  background: radial-gradient(circle, #B89A4E 0%, #5C3F2C 100%);
}

.theme-swatch[data-theme-swatch="bw-light"] {
  background: #FFFFFF;
  border-color: #999999;
}

.theme-swatch[data-theme-swatch="bw-dark"] {
  background: #000000;
}
</style>
