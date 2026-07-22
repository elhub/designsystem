import { Accordion, PileDiv, Heading, VerticalSpace } from '@elhub/ds-components'
import CopyClipboardButton from 'components/CopyClipboardButton/CopyClipboardButton'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

type CodeDivProps = {
  children: string
  expand?: boolean
  copy?: boolean
  spacing?: boolean
  padded?: boolean
  highlighter?: 'shiki'
}

const CornerDiv = styled.div<{ padded?: 'true' }>`
  position: absolute;
  top: ${(props) => (props.padded ? '2.25' : '1.25')}rem;
  right: 0.5rem;
`

const CodeDivWrapper = styled(PileDiv)`
  .shiki,
  .shiki-fallback {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 1rem 1rem 1rem 1.5rem;
    overflow-x: auto;
    background-color: var(--eds-semantic-background-alternative) !important;
  }

  .code:hover .copyButton {
    display: inherit;
  }
  .code .copyButton {
    display: none;
  }
`

const shikiHighlighter = Promise.all([
  import('shiki/core'),
  import('shiki/engine/javascript'),
  import('@shikijs/langs/tsx'),
  import('@shikijs/themes/github-light')
]).then(
  ([
    { createHighlighterCore },
    { createJavaScriptRegexEngine },
    { default: tsx },
    { default: githubLight }
  ]) =>
    createHighlighterCore({
      themes: [githubLight],
      langs: [tsx],
      engine: createJavaScriptRegexEngine()
    })
)

const ShikiHighlighter: React.FC<{ code: string }> = ({ code }) => {
  const [html, setHtml] = useState<string>()
  const [error, setError] = useState<Error>()

  useEffect(() => {
    let active = true

    void shikiHighlighter
      .then((highlighter) => highlighter.codeToHtml(code, { lang: 'tsx', theme: 'github-light' }))
      .then((highlightedCode) => {
        if (active) setHtml(highlightedCode)
      })
      .catch((cause: unknown) => {
        if (active) setError(cause instanceof Error ? cause : new Error('Failed to highlight code'))
      })

    return () => {
      active = false
    }
  }, [code])

  if (error) return <pre className='shiki-fallback'>Unable to highlight code: {error.message}</pre>
  if (!html) return <pre className='shiki-fallback'>{code}</pre>

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

const CodeDiv: React.FC<CodeDivProps> = ({
  expand = true,
  copy = true,
  spacing = false,
  children,
  padded = undefined
}) => {
  return (
    <CodeDivWrapper>
      {expand ? (
        <Accordion
          border
          style={{
            paddingTop: `${padded ? '1' : '0'}rem`,
            paddingBottom: `${padded ? '1' : '0'}rem`
          }}
        >
          <Accordion.Item>
            <Accordion.Header>
              <Heading level='4' size='xsmall'>
                Show
              </Heading>
            </Accordion.Header>
            <Accordion.Content style={{ padding: '0px' }}>
              <div className='code' style={{ position: 'relative' }}>
                {copy && (
                  <CornerDiv padded={padded ? 'true' : undefined} className='copyButton'>
                    <CopyClipboardButton text={children} />
                  </CornerDiv>
                )}
                <ShikiHighlighter code={children} />
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      ) : (
        <div
          className='code'
          style={{
            paddingTop: `${padded ? '1' : '0'}rem`,
            paddingBottom: `${padded ? '1' : '0'}rem`,
            position: 'relative'
          }}
        >
          {copy && (
            <CornerDiv padded={padded ? 'true' : undefined} className='copyButton'>
              <CopyClipboardButton text={children} />
            </CornerDiv>
          )}
          <ShikiHighlighter code={children} />
        </div>
      )}
      {spacing && <VerticalSpace />}
    </CodeDivWrapper>
  )
}

export default CodeDiv
