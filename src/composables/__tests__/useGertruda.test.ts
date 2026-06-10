import { describe, it, expect, vi, beforeEach } from 'vitest'

let useGertruda: typeof import('../useGertruda').useGertruda
let useGertrudaTriptych: typeof import('../useGertruda').useGertrudaTriptych

const ALL_STYLES = [
  'watercolor', 'storybook', 'botanical', 'hygge', 'detailed',
  'sand', 'chalk', 'pencil', 'woodcut', 'inkwash',
  'mosaic', 'stainedglass', 'papercut', 'retrogame', 'steampunk',
  'neon', 'cyber', 'artnouveau', 'rodchenko', 'ukiyoe',
]
const POOL_SIZE = ALL_STYLES.length

describe('useGertruda', () => {
  beforeEach(async () => {
    vi.resetModules()
    const mod = await import('../useGertruda')
    useGertruda = mod.useGertruda
    useGertrudaTriptych = mod.useGertrudaTriptych
  })

  it('returns src, style, rotate', () => {
    const g = useGertruda()
    expect(g.src).toBeDefined()
    expect(g.style).toBeDefined()
    expect(g.rotate).toBeTypeOf('function')
  })

  it('defaults to first gertruda (SSR-safe)', () => {
    const g = useGertruda()
    expect(g.src.value).toBe('/images/gertruda/gertruda-01.webp')
    expect(g.style.value).toBe('watercolor')
  })

  it('src follows pattern /images/gertruda/gertruda-NN.webp', () => {
    const g = useGertruda()
    expect(g.src.value).toMatch(/^\/images\/gertruda\/gertruda-\d{2}\.webp$/)
  })

  it('rotate changes the image', () => {
    const g = useGertruda()
    const initial = g.src.value
    let changed = false
    for (let i = 0; i < 50; i++) {
      g.rotate()
      if (g.src.value !== initial) {
        changed = true
        break
      }
    }
    expect(changed).toBe(true)
  })

  it('rotate never returns the same index twice in a row', () => {
    const g = useGertruda()
    for (let i = 0; i < 30; i++) {
      const before = g.src.value
      g.rotate()
      expect(g.src.value).not.toBe(before)
    }
  })

  it('style and src stay in sync after rotate', () => {
    const g = useGertruda()
    g.rotate()
    const match = g.src.value.match(/gertruda-(\d+)\.webp/)
    expect(match).not.toBeNull()
    const idx = parseInt(match![1], 10) - 1
    expect(g.style.value).toBe(ALL_STYLES[idx])
  })

  it('pool includes 3 new wave-2 styles (artnouveau, rodchenko, ukiyoe)', () => {
    const g = useGertruda()
    // Cycle через много раз — should eventually hit one of new styles
    const seen = new Set<string>()
    for (let i = 0; i < 500; i++) {
      g.rotate()
      seen.add(g.style.value)
      if (seen.has('artnouveau') && seen.has('rodchenko') && seen.has('ukiyoe')) break
    }
    expect(seen.has('artnouveau')).toBe(true)
    expect(seen.has('rodchenko')).toBe(true)
    expect(seen.has('ukiyoe')).toBe(true)
  })
})

describe('useGertrudaTriptych', () => {
  beforeEach(async () => {
    vi.resetModules()
    const mod = await import('../useGertruda')
    useGertrudaTriptych = mod.useGertrudaTriptych
  })

  it('returns left, center, right slots + rotate function', () => {
    const t = useGertrudaTriptych()
    expect(t.left).toBeDefined()
    expect(t.center).toBeDefined()
    expect(t.right).toBeDefined()
    expect(t.rotate).toBeTypeOf('function')
  })

  it('SSR-safe defaults к indices 0, 1, 2', () => {
    const t = useGertrudaTriptych()
    expect(t.left.value.index).toBe(0)
    expect(t.center.value.index).toBe(1)
    expect(t.right.value.index).toBe(2)
    expect(t.left.value.src).toBe('/images/gertruda/gertruda-01.webp')
    expect(t.center.value.src).toBe('/images/gertruda/gertruda-02.webp')
    expect(t.right.value.src).toBe('/images/gertruda/gertruda-03.webp')
  })

  it('all 3 slots have distinct indices after rotate', () => {
    const t = useGertrudaTriptych()
    for (let i = 0; i < 30; i++) {
      t.rotate()
      const indices = [t.left.value.index, t.center.value.index, t.right.value.index]
      expect(new Set(indices).size).toBe(3)
    }
  })

  it('all slot indices are within valid pool [0, 19]', () => {
    const t = useGertrudaTriptych()
    for (let i = 0; i < 30; i++) {
      t.rotate()
      for (const slot of [t.left.value, t.center.value, t.right.value]) {
        expect(slot.index).toBeGreaterThanOrEqual(0)
        expect(slot.index).toBeLessThan(POOL_SIZE)
      }
    }
  })

  it('rotate avoids ANY index from previous trio', () => {
    const t = useGertrudaTriptych()
    for (let i = 0; i < 30; i++) {
      const previous = new Set([
        t.left.value.index,
        t.center.value.index,
        t.right.value.index,
      ])
      t.rotate()
      const current = [
        t.left.value.index,
        t.center.value.index,
        t.right.value.index,
      ]
      for (const idx of current) {
        expect(previous.has(idx)).toBe(false)
      }
    }
  })

  it('slot src + style + index stay in sync', () => {
    const t = useGertrudaTriptych()
    t.rotate()
    for (const slot of [t.left.value, t.center.value, t.right.value]) {
      const expectedSrc = `/images/gertruda/gertruda-${String(slot.index + 1).padStart(2, '0')}.webp`
      expect(slot.src).toBe(expectedSrc)
      expect(slot.style).toBe(ALL_STYLES[slot.index])
    }
  })
})
