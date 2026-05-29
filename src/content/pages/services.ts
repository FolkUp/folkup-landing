import type { Page } from '../types'

/**
 * /services — skeleton. Content authored in Phase 3.
 */
export const servicesPage: Page = {
  id: 'services',
  path: '/services',
  availableLangs: ['en', 'ru', 'pt'],
  meta: {
    title: {
      en: 'Services',
      ru: 'Услуги',
      pt: 'Serviços',
    },
    description: {
      en: 'FolkUp services — what the workshop offers beyond the encyclopedias.',
      ru: 'Услуги FolkUp — что мастерская предлагает помимо энциклопедий.',
      pt: 'Serviços FolkUp — o que a oficina oferece para além das enciclopédias.',
    },
    ogType: 'website',
    canonical: 'https://folkup.app/services',
  },
  sections: [],
}
