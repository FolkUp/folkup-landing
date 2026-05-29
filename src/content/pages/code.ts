import type { Page } from '../types'

/**
 * /code — skeleton. Content authored in Phase 3.
 */
export const codePage: Page = {
  id: 'code',
  path: '/code',
  availableLangs: ['en', 'ru', 'pt'],
  meta: {
    title: {
      en: 'Open Code',
      ru: 'Открытый код',
      pt: 'Código aberto',
    },
    description: {
      en: 'Open-source code, components, and infrastructure behind the FolkUp ecosystem.',
      ru: 'Открытый код, компоненты и инфраструктура экосистемы FolkUp.',
      pt: 'Código aberto, componentes e infraestrutura por trás do ecossistema FolkUp.',
    },
    ogType: 'website',
    canonical: 'https://folkup.app/code',
  },
  sections: [],
}
