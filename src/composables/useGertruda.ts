import { ref, onMounted } from 'vue'

const GERTRUDA_COUNT = 20
const GERTRUDA_STYLES = [
  'watercolor', 'storybook', 'botanical', 'hygge', 'detailed',
  'sand', 'chalk', 'pencil', 'woodcut', 'inkwash',
  'mosaic', 'stainedglass', 'papercut', 'retrogame', 'steampunk',
  'neon', 'cyber', 'artnouveau', 'rodchenko', 'ukiyoe',
] as const

export type GertrudaStyle = typeof GERTRUDA_STYLES[number]

const DEFAULT_INDEX = 0

function getSrc(idx: number): string {
  return `/images/gertruda/gertruda-${String(idx + 1).padStart(2, '0')}.webp`
}

export function useGertruda() {
  // SSR-safe: use fixed index during server render, randomize on client mount
  const index = ref(DEFAULT_INDEX)
  const style = ref<GertrudaStyle>(GERTRUDA_STYLES[DEFAULT_INDEX])
  const src = ref(getSrc(DEFAULT_INDEX))

  function rotate() {
    let next = Math.floor(Math.random() * GERTRUDA_COUNT)
    while (next === index.value && GERTRUDA_COUNT > 1) {
      next = Math.floor(Math.random() * GERTRUDA_COUNT)
    }
    index.value = next
    style.value = GERTRUDA_STYLES[next]
    src.value = getSrc(next)
  }

  onMounted(() => {
    // Randomize on client hydration
    rotate()
  })

  return { src, style, rotate }
}

export interface GertrudaSlot {
  src: string
  style: GertrudaStyle
  index: number
}

/**
 * Triptych mode — 3 distinct Гертруды simultaneously в hero.
 *
 * SSR-safe: server returns deterministic [0, 1, 2], client randomizes
 * on mount к 3 distinct indices from pool of 20. rotate() avoids
 * repeating ANY of the previously displayed trio.
 */
export function useGertrudaTriptych() {
  const left = ref<GertrudaSlot>({ src: getSrc(0), style: GERTRUDA_STYLES[0], index: 0 })
  const center = ref<GertrudaSlot>({ src: getSrc(1), style: GERTRUDA_STYLES[1], index: 1 })
  const right = ref<GertrudaSlot>({ src: getSrc(2), style: GERTRUDA_STYLES[2], index: 2 })

  function pick3Distinct(avoid: ReadonlySet<number>): [number, number, number] {
    const chosen: number[] = []
    // Effective pool excludes the previous trio when possible
    const pool = Array.from({ length: GERTRUDA_COUNT }, (_, i) => i)
      .filter(i => !avoid.has(i))
    // Fisher-Yates shuffle, take first 3
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[pool[i], pool[j]] = [pool[j], pool[i]]
    }
    chosen.push(...pool.slice(0, 3))
    // Safety: if pool minus avoid < 3 (shouldn't happen with 20 vs 3), fallback
    while (chosen.length < 3) {
      const candidate = Math.floor(Math.random() * GERTRUDA_COUNT)
      if (!chosen.includes(candidate)) chosen.push(candidate)
    }
    return [chosen[0], chosen[1], chosen[2]]
  }

  function makeSlot(idx: number): GertrudaSlot {
    return { src: getSrc(idx), style: GERTRUDA_STYLES[idx], index: idx }
  }

  function rotate() {
    const previous = new Set([left.value.index, center.value.index, right.value.index])
    const [l, c, r] = pick3Distinct(previous)
    left.value = makeSlot(l)
    center.value = makeSlot(c)
    right.value = makeSlot(r)
  }

  onMounted(() => {
    rotate()
  })

  return { left, center, right, rotate }
}
