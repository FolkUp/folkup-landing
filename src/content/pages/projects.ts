import type { Page } from '../types'

/**
 * /projects — skeleton. Content authored in Phase 3.
 */
export const projectsPage: Page = {
  id: 'projects',
  path: '/projects',
  availableLangs: ['en', 'ru', 'pt'],
  meta: {
    title: {
      en: 'Projects',
      ru: 'Проекты',
      pt: 'Projetos',
    },
    description: {
      en: 'The full FolkUp ecosystem — seven encyclopedias across cities, sport, nature, and culture.',
      ru: 'Полная экосистема FolkUp — семь энциклопедий: города, спорт, природа, культура.',
      pt: 'O ecossistema completo FolkUp — sete enciclopédias entre cidades, desporto, natureza e cultura.',
    },
    ogType: 'website',
    canonical: 'https://folkup.app/projects',
  },
  sections: [],
}
