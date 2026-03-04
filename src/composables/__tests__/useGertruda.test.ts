import { describe, it, expect, vi, beforeEach } from 'vitest'

let useGertruda: typeof import('../useGertruda').useGertruda

describe('useGertruda', () => {
  beforeEach(async () => {
    vi.resetModules()
    const mod = await import('../useGertruda')
    useGertruda = mod.useGertruda
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
    // With 17 options, at least one of 50 rotations should differ
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
    // Extract index from src
    const match = g.src.value.match(/gertruda-(\d+)\.webp/)
    expect(match).not.toBeNull()
    const idx = parseInt(match![1], 10) - 1
    const STYLES = [
      'watercolor', 'storybook', 'botanical', 'hygge', 'detailed',
      'sand', 'chalk', 'pencil', 'woodcut', 'inkwash',
      'mosaic', 'stainedglass', 'papercut', 'retrogame', 'steampunk',
      'neon', 'cyber',
    ]
    expect(g.style.value).toBe(STYLES[idx])
  })
})
