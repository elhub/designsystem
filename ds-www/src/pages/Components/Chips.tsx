import {
  BodyText,
  Button,
  Chips,
  FlexDiv,
  Heading,
  Table,
  HorizontalSpace,
  VerticalSpace
} from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React, { useState } from 'react'

const ComponentsChips = () => {
  const [selected, setSelected] = useState(['pasta', 'salad', 'sandwich'])
  const options = ['pasta', 'salad', 'sandwich', 'bread']
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='Chips' level='1' spacing>
        Chips
      </Heading>
      <VerticalSpace size='2' />
      <p>
        <BodyText>
          Chips come in one flavor:
          <ul>
            <li>
              <strong>Chip</strong> - A chip that can be dismissed, and it is not visible when off. This is
              the preferred chip for the combobox with multiple selections.
            </li>
          </ul>
        </BodyText>
      </p>
      <p>
        <BodyText>Chips come in three sizes: large, medium, and small. The default size is medium.</BodyText>
      </p>

      <Heading className='toc' size='medium' id='Chips-default' level='2' spacing>
        Chip component
      </Heading>

      <DemoableDiv
        alignContent='center'
        code={`import { Chips } from '@elhub/ds-components'

const Component = () => {
  const [options] = useState(["pasta", "salad", "sandwich", "bread"]);
  const [selected, setSelected] = useState(["pasta", "salad"]);

  return (
    <Chips>
      {selected.map((option) => (
        <Chips.Chip
          key={option}
          onClick={() =>
            setSelected(
              selected.includes(option)
                ? selected.filter((x) => x !== option)
                : [...selected, option],
            )
          }>
          {option}
        <Chips.Chip/>
      ))}
    </Chips>
    <HorizontalSpace />
    <Button size='small' onClick={() => setSelected(options)}>Reset</Button>
  )
}`}
      >
        <FlexDiv>
          <Chips>
            {selected.map((option) => (
              <Chips.Chip
                key={option}
                onClick={() =>
                  setSelected(
                    selected.includes(option) ? selected.filter((x) => x !== option) : [...selected, option]
                  )
                }
              >
                {option}
              </Chips.Chip>
            ))}
          </Chips>
          <HorizontalSpace />
          <Button size='small' onClick={() => setSelected(options)}>
            Reset
          </Button>
        </FlexDiv>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Chips-disabled' level='2' spacing>
        Disabled
      </Heading>

      <DemoableDiv
        alignContent='center'
        code={`import { Chips } from '@elhub/ds-components'

const Component = () => {
  const [options] = useState(["pasta", "salad", "sandwich", "bread"]);
  const [selected, setSelected] = useState(["pasta", "salad"]);

  return (
    <Chips>
    <Chips.Chip disabled onClick={() => {}}>Chip disabled</Chips.Chip>
    </Chips>
  )
}`}
      >
        <Chips>
          <Chips.Chip disabled onClick={() => {}}>
            Chip disabled
          </Chips.Chip>
        </Chips>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Chips-size' level='2' spacing>
        Size
      </Heading>
      <VerticalSpace size='2' />

      <DemoableDiv
        alignContent='center'
        code={`import { Chips } from '@elhub/ds-components'

const Component = () => {
  return (
    <>
      <Chips size="large">
        <Chips.Chip onClick={() => {}}>large</Chips.Chip>
      </Chips>
      <VerticalSpace/>
       <Chips size="medium">
        <Chips.Chip onClick={() => {}}>medium</Chips.Chip>
      </Chips>
        <VerticalSpace/>
       <Chips size="small">
        <Chips.Chip onClick={() => {}}small</Chips.Chip>
      </Chips>
      </>
    )
}`}
      >
        <Chips size='large'>
          <Chips.Chip size='large' onClick={() => {}}>
            Large label
          </Chips.Chip>
        </Chips>
        <VerticalSpace />
        <Chips size='medium'>
          <Chips.Chip size='medium' onClick={() => {}}>
            Medium label
          </Chips.Chip>
        </Chips>
        <VerticalSpace />
        <Chips size='small'>
          <Chips.Chip onClick={() => {}}>Small label</Chips.Chip>
        </Chips>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='properties' level='2' spacing>
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
            <Table.DataCell>
              <code>disabled</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Sets disabled</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>onClick</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>() =&gt; void</code>
            </Table.DataCell>
            <Table.DataCell>Callback function when clicking on the chip text</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>selected</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Sets selected style</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>size</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'large' | 'medium' | 'small'</code>
            </Table.DataCell>
            <Table.DataCell>Sets chip size</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>medium</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsChips
