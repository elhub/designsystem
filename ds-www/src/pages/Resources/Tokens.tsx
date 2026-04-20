import { BodyText, FlexCenterDiv, Heading, HorizontalSpace, Table, VerticalSpace } from '@elhub/ds-components'
import tokens from '@elhub/ds-tokens/dist/tokens.json'
import CopyClipboardButton from 'components/CopyClipboardButton/CopyClipboardButton'
import React, { useState } from 'react'

const MyDataCell: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [hover, setHover] = useState<boolean>(false)
  return (
    <Table.DataCell
      onMouseOver={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
    >
      <FlexCenterDiv>
        {children}
        <div style={{ marginLeft: '0.5rem', visibility: !hover ? 'hidden' : 'visible' }}>
          <CopyClipboardButton label='Copy' size='small' iconPosition='right' text={children}>
            Copy
          </CopyClipboardButton>
        </div>
      </FlexCenterDiv>
    </Table.DataCell>
  )
}

const ResourcesTokens = (): React.ReactNode => {
  const renderTable = (
    tokenRecords: Record<string, string>,
    needle: string,
    showPreview: boolean = true
  ): React.ReactNode => {
    return (
      <Table size='small'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>CSS variable</Table.ColumnHeader>
            <Table.ColumnHeader>CSS value</Table.ColumnHeader>
            {showPreview && <Table.ColumnHeader>Preview</Table.ColumnHeader>}
          </Table.Row>
        </Table.Header>
        <Table.Body>{renderTableBody(tokenRecords, needle, showPreview)}</Table.Body>
      </Table>
    )
  }

  const renderTableBody = (
    tokenRecords: Record<string, string>,
    needle: string,
    showPreview: boolean
  ): React.JSX.Element[] => {
    return Object.keys(tokenRecords)
      .filter((tokenKey) => tokenKey.startsWith(needle))
      .map((tokenKey: string) => {
        const tokenValue = tokenRecords[tokenKey]
        // split string with color patterns with lookahead / lookbehind patterns
        const bits = `${tokenValue}`
          .split(/(?<=rgba?\([^)]+\))/g)
          .map((x) => x.split(/(?=rgba?\([^)]+\))/g))
          .flat()
        const preview: React.ReactNode[] = []
        bits.forEach((bit) => {
          if (bit.startsWith('rgb')) {
            preview.push(
              <div
                key={bit.concat(Math.random().toString(5))}
                style={{ backgroundColor: bit, width: '32px', height: '32px', border: '1px solid grey' }}
              />
            )
          }
          if (tokenKey.match('border-radius')) {
            preview.push(
              <div
                key={bit}
                style={{ borderRadius: bit, width: '32px', height: '32px', border: '1px solid grey' }}
              />
            )
          }
          if (tokenKey.match('-size-')) {
            if (tokenKey.match('font-(heading|body)-size-')) {
              preview.push(
                <span
                  key={bit}
                  style={{
                    fontSize: bit,
                    fontFamily: `var(--eds-font-body-family)`
                  }}
                >
                  Sample
                </span>
              )
            } else if (tokenKey.match('eds-size-')) {
              preview.push(
                <div
                  key={bit}
                  style={{
                    backgroundColor: 'grey',
                    width: bit,
                    height: bit,
                    fontFamily: `var(--eds-font-body-family)`
                  }}
                />
              )
            } else {
              preview.push(
                <FlexCenterDiv key={bit}>
                  <div style={{ backgroundColor: 'grey', width: '6px', height: '32px' }} />
                  <HorizontalSpace size={bit.replace('rem', '')} />
                  <div style={{ backgroundColor: 'grey', width: '6px', height: '32px' }} />
                </FlexCenterDiv>
              )
            }
          }

          if (tokenKey.match('font-(heading|body)-weight-')) {
            preview.push(
              <span key={bit} style={{ fontWeight: bit }}>
                Sample
              </span>
            )
          }
          if (tokenKey.match('font-(heading|body)-line-height-')) {
            preview.push(
              <span key={bit} style={{ lineHeight: bit, backgroundColor: 'grey' }}>
                Sample
              </span>
            )
          }
          if (tokenKey.match('font-(heading|body)-family')) {
            preview.push(
              <span key={bit} style={{ fontFamily: bit }}>
                Sample
              </span>
            )
          }
        })
        return (
          <Table.Row key={tokenKey}>
            <MyDataCell>{tokenKey}</MyDataCell>
            <MyDataCell>
              <FlexCenterDiv>{bits.join(' ')}</FlexCenterDiv>
            </MyDataCell>
            {showPreview && (
              <Table.DataCell>
                <FlexCenterDiv>{preview}</FlexCenterDiv>
              </Table.DataCell>
            )}
          </Table.Row>
        )
      })
  }

  return (
    <>
      <VerticalSpace />
      <Heading size='large'>Tokens</Heading>
      <VerticalSpace size='2' />

      <BodyText>These are the tokens, taken from the @elhub/ds-tokens distribution files.</BodyText>

      <VerticalSpace size='2' />
      <a href='#border' className='eds-sr-only'>
        Border radius
      </a>
      <Heading className='toc' size='xsmall' id='border' level='3' spacing>
        Border radius
      </Heading>
      {renderTable(tokens, 'eds-border-radius')}

      <VerticalSpace size='2' />
      <a href='#zindex' className='eds-sr-only'>
        Z-index
      </a>
      <Heading className='toc' size='xsmall' id='zindex' level='3' spacing>
        Z-index
      </Heading>
      {renderTable(tokens, 'eds-z-index', false)}

      <VerticalSpace size='2' />
      <a href='#size' className='eds-sr-only'>
        Size
      </a>
      <Heading className='toc' size='xsmall' id='size' level='3' spacing>
        Size
      </Heading>
      {renderTable(tokens, 'eds-size')}

      <VerticalSpace size='2' />
      <a href='#colors2' className='eds-sr-only'>
        Semantic colors
      </a>
      <div style={{ display: 'grid', gap: 8 }}>
        <Heading className='toc' size='xsmall' id='colors2' level='3' spacing>
          Semantic colors
        </Heading>
        <BodyText>
          Semantic color tokens are named according to their role or usage in the design system, rather than
          their literal color value. This allows for consistent styling across components and themes, and
          enables updates to the color palette without having to refactor usage.
        </BodyText>
        <BodyText>
          For example, instead of using a direct color like <code>--eds-color-red-500</code>, you would use{' '}
          <code>--eds-semantic-danger</code> for error states. This improves readability and aligns with the
          intent of the design.
        </BodyText>
        <BodyText>
          Below is a list of semantic tokens with their corresponding CSS values and a visual preview.
        </BodyText>
        {renderTable(tokens, 'eds-semantic')}
      </div>

      <VerticalSpace size='2' />
      <a href='#colors2' className='eds-sr-only'>
        Colors
      </a>
      <Heading className='toc' size='xsmall' id='colors2' level='3' spacing>
        Colors
      </Heading>
      {renderTable(tokens, 'eds-global-color')}

      <VerticalSpace size='2' />
      <a href='#themefont' className='eds-sr-only'>
        font
      </a>
      <Heading className='toc' size='xsmall' id='themefont' level='3' spacing>
        Font
      </Heading>
      {renderTable(tokens, 'eds-font')}
    </>
  )
}

export default ResourcesTokens
