import React from 'react'
import { CodeSnippet, CodeSnippetProps } from '@elhub/ds-components'
import { GRID_AREA_REQUESTS } from '../utils/data'

type SupportedTranslations = Pick<
  CodeSnippetProps,
  | 'snippetPlaceholder'
  | 'languagePlaceholder'
  | 'copyLabel'
  | 'copiedLabel'
  | 'snippetLabel'
  | 'languageLabel'
>

const norwegianTranslation: SupportedTranslations = {
  snippetPlaceholder: 'Velg kodeeksempel',
  languagePlaceholder: 'Velg språk',
  copyLabel: 'Kopier',
  copiedLabel: 'Kopiert',
  snippetLabel: 'Forespørsel for',
  languageLabel: 'Språk'
}

const selectedLanguage = 'norwegian'

const getTranslatedLabels = (language: string): SupportedTranslations => {
  switch (language) {
    case 'norwegian':
      return norwegianTranslation
    default:
      return {} as SupportedTranslations
  }
}

const translatedLabels = getTranslatedLabels(selectedLanguage)

export const TranslatedVariant: React.FC = () => (
  <CodeSnippet
    snippetLabel={translatedLabels.snippetLabel}
    languageLabel={translatedLabels.languageLabel}
    copyLabel={translatedLabels.copyLabel}
    copiedLabel={translatedLabels.copiedLabel}
    snippetPlaceholder={translatedLabels.snippetPlaceholder}
    languagePlaceholder={translatedLabels.languagePlaceholder}
    requests={[GRID_AREA_REQUESTS[0]]}
  />
)
