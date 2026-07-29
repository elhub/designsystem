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
export const translatedCode = `// import
import { CodeSnippet } from '@elhub/ds-components'
import { useTranslation} from 'react-i18next'

  
const { t } = useTranslation()

// render
<CodeSnippet
  requestPlaceholder={t('requestPlaceholder', 'Velg forespørsel')}
  languagePlaceholder={t('languagePlaceholder', 'Velg språk')}
  copyLabel={t('copyLabel', 'Kopier')}
  copiedLabel={t('copiedLabel', 'Kopiert')}
  requests={GRID_AREA_REQUESTS}
/>
`

export const highlightedDarkCode = `// import
import { CodeSnippet } from '@elhub/ds-components'
import { useEffect, useState } from 'react'
import { createHighlighterCore } from 'shiki/core'

// app-owned syntax highlighting renderer
const renderHighlightedCode = ({ resolvedCode, language }) => {
  // resolve shiki language from CodeSnippet language and render highlighted html
}

<CodeSnippet
  variant="dark"
  requests={GRID_AREA_REQUESTS}
  renderCode={renderHighlightedCode}
/>`

export const highlightedLightCode = `// import
import { CodeSnippet } from '@elhub/ds-components'
import { useEffect, useState } from 'react'
import { createHighlighterCore } from 'shiki/core'

// app-owned syntax highlighting renderer
const renderHighlightedCode = ({ resolvedCode, language }) => {
  // resolve shiki language from CodeSnippet language and render highlighted html
}

<CodeSnippet
  variant="light"
  requests={GRID_AREA_REQUESTS}
  renderCode={renderHighlightedCode}
/>`
