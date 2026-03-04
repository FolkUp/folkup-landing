import { onMounted, onUnmounted } from 'vue'

export function useFadeIn(selector = '.fade-in') {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      document.querySelectorAll(selector).forEach(el => el.classList.add('visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    document.querySelectorAll(selector).forEach(el => observer!.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
