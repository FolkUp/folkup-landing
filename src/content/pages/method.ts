import type { Page } from '../types'

/**
 * /method — skeleton. Content authored in Phase 3.
 */
export const methodPage: Page = {
  id: 'method',
  path: '/method',
  availableLangs: ['en', 'ru', 'pt', 'de'],
  meta: {
    title: {
      en: 'Method',
      ru: 'Метод',
      pt: 'Método',
      de: 'Methode',
    },
    description: {
      en: 'How FolkUp builds knowledge tools — verification, multilingual editorial, safety protocols.',
      ru: 'Как FolkUp создаёт инструменты знаний — верификация, многоязычная редактура, протоколы безопасности.',
      pt: 'Como a FolkUp constrói ferramentas de conhecimento — verificação, edição multilingue, protocolos de segurança.',
      de: 'Wie FolkUp Wissenswerkzeuge baut — Verifikation, mehrsprachige Redaktion, Sicherheitsprotokolle.',
    },
    ogType: 'website',
    canonical: 'https://folkup.app/method',
  },
  sections: [],
}
