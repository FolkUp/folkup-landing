import { ref, onMounted, onUnmounted } from 'vue'

export function useStickyHeader(heroRef: () => HTMLElement | null) {
  const visible = ref(false)

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const el = heroRef()
    if (!el) return

    observer = new IntersectionObserver(
      ([entry]) => { visible.value = !entry.isIntersecting },
      { threshold: 0 }
    )
    observer.observe(el)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { visible }
}
