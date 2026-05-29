import type { Page } from '../types'

/**
 * /team — skeleton. Content authored in Phase 3.
 */
export const teamPage: Page = {
  id: 'team',
  path: '/team',
  availableLangs: ['en', 'ru', 'pt'],
  meta: {
    title: {
      en: 'Team',
      ru: 'Команда',
      pt: 'Equipa',
    },
    description: {
      en: 'The fornits who keep the FolkUp light on — researchers, verifiers, security, brand, legal.',
      ru: 'Форниты, которые держат свет FolkUp — ресёрчеры, верификаторы, безопасность, бренд, legal.',
      pt: 'Os fornits que mantêm a luz FolkUp acesa — investigadores, verificadores, segurança, marca, legal.',
    },
    ogType: 'website',
    canonical: 'https://folkup.app/team',
  },
  sections: [],
}
