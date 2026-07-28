/* ------------------------------------------------------------------ */
/*  Code strings for DemoableDiv                                        */
/* ------------------------------------------------------------------ */

export const darkCode = `// import
import { CodeSnippet } from '@elhub/ds-components'

// render — 1+ requests shows the "Request for" selector
<CodeSnippet
  requests={[
    { label: 'Default', url: 'https://api.elhub.no/energy-data/v-1/grid-areas' },
    { label: 'Default with id', url: 'https://api.elhub.no/energy-data/v-1/grid-areas/50Y2VA2X6F00RRCT' },
  ]}
/>`

export const lightCode = `// import
import { CodeSnippet } from '@elhub/ds-components'

// render
<CodeSnippet
  variant="light"
  requests={[
    { label: 'Default', url: 'https://api.elhub.no/energy-data/v-1/grid-areas' },
    { label: 'Default with id', url: 'https://api.elhub.no/energy-data/v-1/grid-areas/50Y2VA2X6F00RRCT' },
  ]}
/>`

export const headersCode = `// import
import { CodeSnippet } from '@elhub/ds-components'

// render
<CodeSnippet
  requests={[
    { label: 'Default', url: 'https://api.elhub.no/energy-data/v-1/metering-points' },
    { label: 'Default with id', url: 'https://api.elhub.no/energy-data/v-1/metering-points/{YOUR_ID}' },
  ]}
  headers={{
    Authorization: 'Bearer {MASKINPORTEN_ACCESS_TOKEN}',
    'X-Elhub-GLN': '{YOUR_GLN_VALUE}',
  }}
/>`

export const singleRequestCode = `// import
import { CodeSnippet } from '@elhub/ds-components'

// render — 0 request, no "Request for" selector shown
<CodeSnippet
  requests={[
    { label: 'Default', url: 'https://api.elhub.no/energy-data/v-1/grid-areas' },
  ]}
/>`
