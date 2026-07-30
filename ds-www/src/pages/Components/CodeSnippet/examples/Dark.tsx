import React from 'react'
import { CodeSnippet } from '@elhub/ds-components'
import { GRID_AREA_REQUESTS } from '../utils/data'

export const DarkVariant: React.FC = () => (
  <CodeSnippet
    snippetLabel='Request for'
    languageLabel='Language'
    variant='dark'
    requests={GRID_AREA_REQUESTS}
  />
)
