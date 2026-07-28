import React from 'react'
import { CodeSnippet } from '@elhub/ds-components'

export const WithHeaders: React.FC = () => (
  <CodeSnippet
    requests={[
      { label: 'Default', url: 'https://api.elhub.no/energy-data/v0/metering-points' },
      { label: 'Default with id', url: 'https://api.elhub.no/energy-data/v0/metering-points/%7BYOUR_ID%7D' }
    ]}
    headers={{
      Authorization: 'Bearer {MASKINPORTEN_ACCESS_TOKEN}',
      'X-Elhub-GLN': '{YOUR_GLN_VALUE}'
    }}
  />
)
