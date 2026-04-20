import { Accordion, PileDiv, Heading, VerticalSpace } from '@elhub/ds-components'
import CopyClipboardButton from 'components/CopyClipboardButton/CopyClipboardButton'
import React from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'
import styled from 'styled-components'

type CodeDivProps = React.PropsWithChildren & {
  expand: boolean
  copy?: boolean
  spacing: boolean
  padded?: boolean
}

const CornerDiv = styled.div<{ padded?: 'true' }>`
  position: absolute;
  top: ${(props) => (props.padded ? '2.25' : '1.25')}rem;
  right: 0.5rem;
`

const CodeDivWrapper = styled(PileDiv)`
  .code:hover .copyButton {
    display: inherit;
  }
  .code .copyButton {
    display: none;
  }
`

SyntaxHighlighter.registerLanguage('jsx', jsx)

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
                  <CornerDiv padded={padded} className='copyButton'>
                    <CopyClipboardButton text={children} />
                  </CornerDiv>
                )}
                <SyntaxHighlighter language='jsx' style={prism}>
                  {children}
                </SyntaxHighlighter>
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
            <CornerDiv padded={padded} className='copyButton'>
              <CopyClipboardButton text={children} />
            </CornerDiv>
          )}
          <SyntaxHighlighter language='jsx' style={prism} wrapLines>
            {children}
          </SyntaxHighlighter>
        </div>
      )}
      {spacing && <VerticalSpace />}
    </CodeDivWrapper>
  )
}

export default CodeDiv
