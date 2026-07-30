/* ------------------------------------------------------------------ */
/*  Code strings for DemoableDiv                                        */
/* ------------------------------------------------------------------ */
import { GRID_AREA_REQUESTS } from './data'

export const singleCode = `// import
import { CodeSnippet } from '@elhub/ds-components'

<CodeSnippet
  code={[
    {
      label: 'Hello',
      code: {
        python: \`print("Hello, World!")\`
      }
    }
  ]}
/>
`
export const multipleLanguagesCode = `// import
import { CodeSnippet } from '@elhub/ds-components'

  <CodeSnippet
    code={[
      {
        label: 'Hello',
        code: {
          javascript: \`console.log("Hello, World!");\`,
          python: \`print("Hello, World!")\`,
          java: \`System.out.println("Hello, World!");\`
        }
      }
    ]}
  />
`
export const multipleVariantAndLanguagesCode = `// import
import { CodeSnippet } from '@elhub/ds-components'

  <CodeSnippet
    code={[
      {
        label: 'Hello',
        code: {
          javascript: \`console.log("Hello, World!");\`,
          python: \`print("Hello, World!")\`,
          java: \`System.out.println("Hello, World!");\`
        }
      },
      {
        label: 'Goodbye',
        code: {
          javascript: \`console.log("Goodbye, World!");\`,
          python: \`print("Goodbye, World!")\`,
          java: \`System.out.println("Goodbye, World!");\`
        }
      }
    ]}
  />
`

export const darkCode = `// import
import { CodeSnippet } from '@elhub/ds-components'

// render — 2+ requests shows the snippet selector
<CodeSnippet
  snippetLabel='Request for'
  languageLabel='Language'  
  requests={[
    { label: 'Default', url: 'https://api.elhub.no/energy-data/v-1/grid-areas' },
    { label: 'Default with id', url: 'https://api.elhub.no/energy-data/v-1/grid-areas/50Y2VA2X6F00RRCT' },
  ]}
/>`

export const lightCode = `// import
import { CodeSnippet } from '@elhub/ds-components'

// render
<CodeSnippet
  snippetLabel='Request for'
  languageLabel='Language'
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
  snippetLabel='Request for'
  languageLabel='Language'  
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

// render — 1 request, snippet selector is hidden
<CodeSnippet
  snippetLabel='Request for'
  languageLabel='Language'
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
  snippetLabel='Request for'
  languageLabel='Language'
  snippetPlaceholder={t('snippetPlaceholder', 'Velg kodeeksempel')}
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
  snippetLabel='Request for'
  languageLabel='Language'
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
  snippetLabel='Request for'
  languageLabel='Language'
  variant="light"
  requests={GRID_AREA_REQUESTS}
  renderCode={renderHighlightedCode}
/>`

export const GRID_AREA_CODE: string = `
from requests import get

response = get("${GRID_AREA_REQUESTS[0].url}")
if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Error: {response.status_code}')
`
export const highlightedCustomCode = `// import
import { CodeSnippet } from '@elhub/ds-components'
import { useEffect, useState } from 'react'
import { createHighlighterCore } from 'shiki/core'

// app-owned syntax highlighting renderer
const renderHighlightedCode = ({ resolvedCode, language }) => {
  // resolve shiki language from CodeSnippet language and render highlighted html
}

<CodeSnippet
  snippetLabel='Request for'
  languageLabel='Language'
  variant='dark'
  code={[
    {
      label: 'Python example',
      code: {
        python: \`${GRID_AREA_CODE}\`
      }
    }
  ]}
  renderCode={(props) => <HighlightedCode {...props} />}
/>
`
