import { BodyText, Heading, Table, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'
import { TypographyBodyTextExample } from './examples/BodyText'
import typographyBodyTextSource from './examples/BodyText.tsx?raw'
import { TypographyHeadingsExample } from './examples/Headings'
import typographyHeadingsSource from './examples/Headings.tsx?raw'

const ComponentsTypography: React.FC = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='typography' level='1'>
        Typography
      </Heading>
      <VerticalSpace />
      <Heading className='toc' size='medium' id='typography-heading' level='2'>
        Heading
      </Heading>
      <VerticalSpace />
      <BodyText>
        Heading levels (<code>h1</code> to <code>h6</code>) define document structure independently of visual
        size. Choose the semantic level first, then use <code>size</code> to control its appearance.
      </BodyText>
      <BodyText>
        Use a good structure for your heading levels, as in:
        <ul>
          <li>
            Save <code>h1</code> for the page title
          </li>
          <li>
            Use <code>h2</code> for the page sections
          </li>
        </ul>
      </BodyText>
      <VerticalSpace />
      <DemoableDiv alignContent='center' code={typographyHeadingsSource} codeHighlighter='shiki'>
        <TypographyHeadingsExample />
      </DemoableDiv>

      <VerticalSpace />
      <Heading className='toc' size='medium' id='typography-heading-props' level='2'>
        Props table
      </Heading>
      <VerticalSpace />

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
            <Table.DataCell>
              <code>size</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>"xlarge" | "large" | "medium" | "small" | "xsmall"</code>
            </Table.DataCell>
            <Table.DataCell>Set heading sizes to 24, 20, 18, 16 and 14px</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>xlarge</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>level</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>1-6</code>
            </Table.DataCell>
            <Table.DataCell>Sets heading level</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>1</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <VerticalSpace />

      {/* <!-- BODY TEXT --> */}

      <Heading className='toc' size='medium' id='typography-bodytext' level='2'>
        BodyText
      </Heading>
      <VerticalSpace />
      <BodyText>
        Use <code>BodyText</code> for paragraphs and supporting interface copy. Choose a size based on the
        content hierarchy, and use heavier weights sparingly to add emphasis.
      </BodyText>
      <VerticalSpace />
      <DemoableDiv alignContent='center' code={typographyBodyTextSource} codeHighlighter='shiki'>
        <TypographyBodyTextExample />
      </DemoableDiv>
      <VerticalSpace />
      <Heading className='toc' size='medium' id='typography-bodylong-props' level='2' spacing>
        Props table
      </Heading>
      <VerticalSpace />

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
            <Table.DataCell>
              <code>size</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>"large" |"medium" | "small"| "xsmall"</code>
            </Table.DataCell>
            <Table.DataCell>Set text size</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>small</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>weight</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>"regular" | "semibold" | "bold"</code>
            </Table.DataCell>
            <Table.DataCell>Sets the font weight</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>regular</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsTypography
