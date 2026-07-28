import React from 'react'
import { CodeSnippet, CodeSnippetProps } from '@elhub/ds-components'
import { GRID_AREA_REQUESTS } from '../utils/data'

type SupportedTranslations = Pick<
  CodeSnippetProps,
  'requestPlaceholder' | 'languagePlaceholder' | 'copyLabel' | 'copiedLabel'
>

const norwegianTranslation: SupportedTranslations = {
  requestPlaceholder: 'Velg forespørsel',
  languagePlaceholder: 'Velg språk',
  copyLabel: 'Kopier',
  copiedLabel: 'Kopiert'
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
    copyLabel={translatedLabels.copyLabel}
    copiedLabel={translatedLabels.copiedLabel}
    requestPlaceholder={translatedLabels.requestPlaceholder}
    languagePlaceholder={translatedLabels.languagePlaceholder}
    requests={[GRID_AREA_REQUESTS[0]]}
  />
)
