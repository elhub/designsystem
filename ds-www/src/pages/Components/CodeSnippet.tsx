import {
  BodyText,
  CodeSnippet,
  Heading,
  Table,
  VerticalSpace,
} from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'

/* ------------------------------------------------------------------ */
/*  Code strings for DemoableDiv                                        */
/* ------------------------------------------------------------------ */

const darkCode = `// import
import { CodeSnippet } from '@elhub/ds-components'

// render — 2+ requests shows the "Request for" selector
<CodeSnippet
  requests={[
    { label: 'Default', url: 'https://api.elhub.no/energy-data/v0/grid-areas' },
    { label: 'Default with id', url: 'https://api.elhub.no/energy-data/v0/grid-areas/50Y2VA2X6F00RRCT' },
  ]}
/>`

const lightCode = `// import
import { CodeSnippet } from '@elhub/ds-components'

// render
<CodeSnippet
  variant="light"
  requests={[
    { label: 'Default', url: 'https://api.elhub.no/energy-data/v0/grid-areas' },
    { label: 'Default with id', url: 'https://api.elhub.no/energy-data/v0/grid-areas/50Y2VA2X6F00RRCT' },
  ]}
/>`

const headersCode = `// import
import { CodeSnippet } from '@elhub/ds-components'

// render
<CodeSnippet
  requests={[
    { label: 'Default', url: 'https://api.elhub.no/energy-data/v0/metering-points' },
    { label: 'Default with id', url: 'https://api.elhub.no/energy-data/v0/metering-points/{YOUR_ID}' },
  ]}
  headers={{
    Authorization: 'Bearer {MASKINPORTEN_ACCESS_TOKEN}',
    'X-Elhub-GLN': '{YOUR_GLN_VALUE}',
  }}
/>`

const singleRequestCode = `// import
import { CodeSnippet } from '@elhub/ds-components'

// render — 1 request, no "Request for" selector shown
<CodeSnippet
  requests={[
    { label: 'Default', url: 'https://api.elhub.no/energy-data/v0/grid-areas' },
  ]}
/>`

/* ------------------------------------------------------------------ */
/*  Demo components                                                     */
/* ------------------------------------------------------------------ */

const GRID_AREA_REQUESTS = [
  { label: 'Default', url: 'https://api.elhub.no/energy-data/v0/grid-areas' },
  { label: 'Default with id', url: 'https://api.elhub.no/energy-data/v0/grid-areas/50Y2VA2X6F00RRCT' },
]

const DarkVariant: React.FC = () => <CodeSnippet requests={GRID_AREA_REQUESTS} />

const LightVariant: React.FC = () => <CodeSnippet variant='light' requests={GRID_AREA_REQUESTS} />

const WithHeaders: React.FC = () => (
  <CodeSnippet
    requests={[
      { label: 'Default', url: 'https://api.elhub.no/energy-data/v0/metering-points' },
      { label: 'Default with id', url: 'https://api.elhub.no/energy-data/v0/metering-points/%7BYOUR_ID%7D' },
    ]}
    headers={{
      Authorization: 'Bearer {MASKINPORTEN_ACCESS_TOKEN}',
      'X-Elhub-GLN': '{YOUR_GLN_VALUE}',
    }}
  />
)

const SingleRequest: React.FC = () => (
  <CodeSnippet
    requests={[{ label: 'Default', url: 'https://api.elhub.no/energy-data/v0/grid-areas' }]}
  />
)

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

const ComponentsCodeSnippet: React.FC = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='code-snippet' level='1' spacing>
        CodeSnippet
      </Heading>
      <VerticalSpace />
      <BodyText>
        CodeSnippet renders a block of code with a copy-to-clipboard button. Pass a{' '}
        <code>requests</code> array to generate language-specific snippets (cURL, HTTP, Java,
        JavaScript, Python). When the array has 2 or more items a "Request for" selector is shown
        automatically so users can switch between endpoints.
      </BodyText>
      <VerticalSpace size='2' />

      {/* ------------------------------------------------------------------ */}
      <Heading className='toc' size='medium' id='code-snippet-dark' level='2' spacing>
        Dark variant
      </Heading>
      <BodyText>
        The default <code>variant="dark"</code> with two request options shows both the "Request
        for" and "Language" selectors.
      </BodyText>
      <VerticalSpace />
      <DemoableDiv alignContent='left' code={darkCode}>
        <DarkVariant />
      </DemoableDiv>
      <VerticalSpace size='3' />

      {/* ------------------------------------------------------------------ */}
      <Heading className='toc' size='medium' id='code-snippet-light' level='2' spacing>
        Light variant
      </Heading>
      <BodyText>
        Use <code>variant="light"</code> for a light code-block background, suitable for lighter
        page contexts.
      </BodyText>
      <VerticalSpace />
      <DemoableDiv alignContent='left' code={lightCode}>
        <LightVariant />
      </DemoableDiv>
      <VerticalSpace size='3' />

      {/* ------------------------------------------------------------------ */}
      <Heading className='toc' size='medium' id='code-snippet-headers' level='2' spacing>
        With request headers
      </Heading>
      <BodyText>
        Pass <code>headers</code> to include HTTP headers in every generated snippet (e.g.
        Authorization tokens for protected endpoints).
      </BodyText>
      <VerticalSpace />
      <DemoableDiv alignContent='left' code={headersCode}>
        <WithHeaders />
      </DemoableDiv>
      <VerticalSpace size='3' />

      {/* ------------------------------------------------------------------ */}
      <Heading className='toc' size='medium' id='code-snippet-single' level='2' spacing>
        Single request (no request selector)
      </Heading>
      <BodyText>
        When <code>requests</code> has only one item the "Request for" selector is hidden — only the
        language selector is shown.
      </BodyText>
      <VerticalSpace />
      <DemoableDiv alignContent='left' code={singleRequestCode}>
        <SingleRequest />
      </DemoableDiv>
      <VerticalSpace size='3' />

      {/* ------------------------------------------------------------------ */}
      <Heading className='toc' size='large' id='code-snippet-props' level='2' spacing>
        Props table
      </Heading>
      <VerticalSpace size='2' />
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Required</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell><code>requests</code></Table.DataCell>
            <Table.DataCell><code>{'CodeSnippetRequest[]'}</code></Table.DataCell>
            <Table.DataCell>
              Array of <code>{'{ label, url }'}</code> items. 1 item = language selector only.
              2+ items = adds a "Request for" selector.
            </Table.DataCell>
            <Table.DataCell>One of requests / code</Table.DataCell>
            <Table.DataCell><code>-</code></Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell><code>code</code></Table.DataCell>
            <Table.DataCell><code>string</code></Table.DataCell>
            <Table.DataCell>Direct code string — no selectors shown.</Table.DataCell>
            <Table.DataCell>One of requests / code</Table.DataCell>
            <Table.DataCell><code>-</code></Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell><code>headers</code></Table.DataCell>
            <Table.DataCell><code>{'Record<string, string>'}</code></Table.DataCell>
            <Table.DataCell>HTTP headers included in every generated snippet.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell><code>{'{}'}</code></Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell><code>requestLabel</code></Table.DataCell>
            <Table.DataCell><code>string</code></Table.DataCell>
            <Table.DataCell>Label for the "Request for" selector.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell><code>"Request for"</code></Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell><code>languageLabel</code></Table.DataCell>
            <Table.DataCell><code>string</code></Table.DataCell>
            <Table.DataCell>Label for the language selector.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell><code>"Language"</code></Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell><code>variant</code></Table.DataCell>
            <Table.DataCell><code>'dark' | 'light'</code></Table.DataCell>
            <Table.DataCell>Visual theme for the code block.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell><code>'dark'</code></Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell><code>children</code></Table.DataCell>
            <Table.DataCell><code>React.ReactNode</code></Table.DataCell>
            <Table.DataCell>Extra toolbar content rendered before the built-in selectors.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell><code>-</code></Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell><code>copyLabel</code></Table.DataCell>
            <Table.DataCell><code>string</code></Table.DataCell>
            <Table.DataCell>Label for the copy button.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell><code>"Copy"</code></Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell><code>onCopy</code></Table.DataCell>
            <Table.DataCell><code>{'() => void'}</code></Table.DataCell>
            <Table.DataCell>Called on copy. Falls back to <code>navigator.clipboard</code>.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell><code>-</code></Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsCodeSnippet
