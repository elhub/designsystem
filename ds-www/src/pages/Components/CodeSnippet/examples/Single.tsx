import React from 'react'
import { CodeSnippet } from '@elhub/ds-components'

export const SingleRequest: React.FC = () => (
  <CodeSnippet requests={[{ label: 'Default', url: 'https://api.elhub.no/energy-data/v-1/grid-areas' }]} />
)
