import { BodyText, Heading, Table, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'

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
        Note that the heading levels (<code>h1</code> to <code>h6</code>) are not tied to the heading style /
        size. You have so set the heading size and optionally set the level.
      </BodyText>
      <BodyText>
        Use a good structure for your heading levels, as in:
        <ul>
          <li>
            Save <code>h1</code> for the page tile
          </li>
          <li>
            Use <code>h2</code> for the page sections
          </li>
        </ul>
      </BodyText>
      <VerticalSpace />
      <DemoableDiv
        alignContent='center'
        code={`import { Heading } from '@elhub/ds-components'

const Component = () => {
  return (
    <>
      <div>
        <Heading level='1' size='xlarge'>Sales strategy</Heading>
        <BodyText>Level 1, size xlarge</BodyText>
      </div>
      <div>
        <Heading size='large' level='2'>Sales strategy</Heading>
        <BodyText>Level 2, size large</BodyText>
      </div>
      <div>
        <Heading size='medium' level='3'>Sales strategy</Heading>
        <BodyText>Level 3, size medium</BodyText>
      </div>
      <div>
        <Heading size='small' level='4'>Sales strategy</Heading>
        <BodyText>Level 4, size small</BodyText>
      </div>
      <div>
        <Heading size='xsmall' level='5'>Sales strategy</Heading>
        <BodyText>Level 5, size xsmall</BodyText>
      </div>
      </>
  )
}`}
      >
        <div style={{ display: 'grid', gap: 8 }}>
          <div>
            <Heading size='xlarge' level='1'>
              Sales strategy
            </Heading>
            <BodyText>Level 1, size xlarge (24px)</BodyText>
          </div>
          <div>
            <Heading size='large' level='2'>
              Sales strategy
            </Heading>
            <BodyText>Level 2, size large (20px)</BodyText>
          </div>
          <div>
            <Heading size='medium' level='3'>
              Sales strategy
            </Heading>
            <BodyText>Level 3, size medium (18px)</BodyText>
          </div>
          <div>
            <Heading size='small' level='4'>
              Sales strategy
            </Heading>
            <BodyText>Level 4, size small (16px)</BodyText>
          </div>
          <div>
            <Heading size='xsmall' level='5'>
              Sales strategy
            </Heading>
            <BodyText>Level 5, size xsmall (14px)</BodyText>
          </div>
        </div>
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
        BodyText is used for normal text, like paragraphs. This is the default text style for most of the
        content. It has a line height that makes it easy to read, and it's adjustable in size and weight. This
        is the standard style for text that does not need emphasis. For example, in input fields, dropdowns,
        combo boxes, or other standalone text.
      </BodyText>
      <VerticalSpace />
      <DemoableDiv
        alignContent='center'
        code={`import { BodyText } from '@elhub/ds-components'

const Component = () => {
  return (
     <BodyText>
       The quarter sales for the current branches show a steady 
       growth that keeps the trend seen on the previous quarter.
       We feel confident that this trend will improve for the next 
       quarter, as the next quarter is typically the strongest
       quarter of the year
      </BodyText>
  )
}`}
      >
        <BodyText>
          The quarter sales for the current branches show a steady growth that keeps the trend seen on the
          previous quarter. We feel confident that this trend will improve for the next quarter, as the next
          quarter is typically the strongest quarter of the year
        </BodyText>
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
