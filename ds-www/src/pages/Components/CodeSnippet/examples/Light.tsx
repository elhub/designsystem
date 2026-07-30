import React from 'react'
import { CodeSnippet } from '@elhub/ds-components'
import { GRID_AREA_REQUESTS } from '../utils/data'

export const LightVariant: React.FC = () => (
  <CodeSnippet
    snippetLabel='Request for'
    languageLabel='Language'
    variant='light'
    requests={GRID_AREA_REQUESTS}
  />
)
