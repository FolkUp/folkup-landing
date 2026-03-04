import { ref, onMounted } from 'vue'

const GERTRUDA_COUNT = 17
const GERTRUDA_STYLES = [
  'watercolor', 'storybook', 'botanical', 'hygge', 'detailed',
  'sand', 'chalk', 'pencil', 'woodcut', 'inkwash',
  'mosaic', 'stainedglass', 'papercut', 'retrogame', 'steampunk',
  'neon', 'cyber',
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
