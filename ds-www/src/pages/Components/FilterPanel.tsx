import { BodyText, FilterPanel, Heading, Table, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React, { useState } from 'react'
import { IconWarningTriangle, IconWarningCircle, IconCheckCircle } from '@elhub/ds-icons'

const ComponentsFilterPanel: React.FC = () => {
  const options = [
    { label: 'Pasta', value: 'pasta' },
    { label: 'Salad', value: 'salad' },
    { label: 'Bread', value: 'bread' }
  ]

  const options2 = [
    { value: 'warning', icon: IconWarningTriangle, iconColor: 'orange' },
    { value: 'error', icon: IconWarningCircle, iconColor: 'red' },
    { value: 'success', icon: IconCheckCircle, iconColor: 'green' }
  ]

  const [selected1, setSelected1] = useState(['pasta'])
  const [selected2, setSelected2] = useState(['warning'])

  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='FilterPanel' level='1'>
        FilterPanel
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>
        FilterPanel is used to show the user toggling chips that filter among a list of items.
      </BodyText>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='FilterPanel-size' level='2'>
        Size
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>
        The Filter size prop have one of the following 3 strings: <code>large</code>, <code>medium</code> and{' '}
        <code>small</code>
      </BodyText>
      <VerticalSpace />

      <DemoableDiv
        alignContent='center'
        code={`import { FilterPanel } from '@elhub/ds-components'

const Component = () => {
   const options = [
    { label: 'Pasta', value: 'pasta' },
    { label: 'Salad', value: 'salad' },
    { label: 'Bread', value: 'bread' }
  ]
  const [selected, setSelected] = useState(['pasta']);
  return (
    <>
    <FilterPanel size='large' label='large'>
      {options.map((option) => (
        <FilterPanel.Chip
          key={option.value}
          selected={selected.includes(option.value)}
          onClick={() =>
            setSelected(
              selected.includes(option.value)
                ? selected.filter((x) => x !== option.value)
                : [...selected, option.value],
            )
          }>
          {option.label}
        </FilterPanel.Chip>
      ))}
    </FilterPanel>
    <VerticalSpace/>
    <FilterPanel size='medium' label='medium'>
      {options.map((option) => (
        <FilterPanel.Chip
          key={option.value}
          selected={selected.includes(option.value)}
          onClick={() =>
            setSelected(
              selected.includes(option.value)
                ? selected.filter((x) => x !== option.value)
                : [...selected, option.value],
            )
          }>
          {option.label}
        </FilterPanel.Chip>
      ))}
    </FilterPanel>
    <VerticalSpace/>
     <FilterPanel size='small' label='small'>
      {options.map((option) => (
        <FilterPanel.Chip
          key={option.value}
          selected={selected.includes(option.value)}
          onClick={() =>
            setSelected(
              selected.includes(option.value)
                ? selected.filter((x) => x !== option.value)
                : [...selected, option.value],
            )
          }>
          {option.label}
        </FilterPanel.Chip>
      ))}
    </FilterPanel>
    </>
  )
}`}
      >
        <FilterPanel size='large' label='large'>
          {options.map((option) => (
            <FilterPanel.Chip
              key={option.value}
              selected={selected1.includes(option.value)}
              onClick={() => {
                setSelected1(
                  selected1.includes(option.value)
                    ? selected1.filter((x) => x !== option.value)
                    : [...selected1, option.value]
                )
              }}
            >
              {option.label}
            </FilterPanel.Chip>
          ))}
        </FilterPanel>
        <VerticalSpace />
        <FilterPanel size='medium' label='medium'>
          {options.map((option) => (
            <FilterPanel.Chip
              key={option.value}
              selected={selected1.includes(option.value)}
              onClick={() => {
                setSelected1(
                  selected1.includes(option.value)
                    ? selected1.filter((x) => x !== option.value)
                    : [...selected1, option.value]
                )
              }}
            >
              {option.label}
            </FilterPanel.Chip>
          ))}
        </FilterPanel>
        <VerticalSpace />
        <FilterPanel size='small' label='small'>
          {options.map((option) => (
            <FilterPanel.Chip
              key={option.value}
              selected={selected1.includes(option.value)}
              onClick={() => {
                setSelected1(
                  selected1.includes(option.value)
                    ? selected1.filter((x) => x !== option.value)
                    : [...selected1, option.value]
                )
              }}
            >
              {option.label}
            </FilterPanel.Chip>
          ))}
        </FilterPanel>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='FilterPanel-disabled' level='2'>
        Disabled
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>
        When you want to disable FilterPanel chips, conveying the idea that the chip is off-limits, use the
        disabled prop
      </BodyText>
      <DemoableDiv
        alignContent='center'
        code={`import { FilterPanel } from '@elhub/ds-components'

const Component = () => {
   const options = [
    { value: 'warning', icon: IconWarningTriangle, iconColor: 'orange' },
    { value: 'error', icon: IconWarningCircle, iconColor: 'red' },
    { value: 'success', icon: IconCheckCircle, iconColor: 'green' },
  ]
  const [selected, setSelected] = useState(['warning']);
  return (
    <FilterPanel size='medium' label='disabled medium'>
      {options.map((option) => (
        <FilterPanel.Chip 
          key={option.value}
          disabled
          icon={option.icon}
        />
      ))}
    </FilterPanel>
   
  )
}`}
      >
        <FilterPanel label='disabled'>
          {options2.map((option) => (
            <FilterPanel.Chip key={option.value} disabled icon={option.icon}>
              {option.value}
            </FilterPanel.Chip>
          ))}
        </FilterPanel>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='FilterPanel-readonly' level='2'>
        Read only
      </Heading>
      <VerticalSpace size='2' />
      <BodyText>
        When you want to show the FilterPanel chips, but do not want interaction to happen while clicking on
        them.
      </BodyText>
      <BodyText>
        This is a different look from disabled, as disabled describes options that are currently out of reach
        for the user, but readOnly is just temporarily (for instance, can't deselect all elements, so the last
        one toggles to readOnly)
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { FilterPanel } from '@elhub/ds-components'

const Component = () => {
   const options = [
    { value: 'warning', icon: IconWarningTriangle, iconColor: 'orange' },
    { value: 'error', icon: IconWarningCircle, iconColor: 'red' },
    { value: 'success', icon: IconCheckCircle, iconColor: 'green' },
  ]
  const [selected, setSelected] = useState(['warning']);
  return (
    <FilterPanel size='medium' label='disabled medium'>
      {options.map((option) => (
        <FilterPanel.Chip 
          key={option.value}
          readOnly
          iconColor={option.iconColor}
          con={option.icon}>
          selected={selected.includes(option)}
          icon={option.icon}
        />
      ))}
    </FilterPanel>
   
  )
}`}
      >
        <FilterPanel label='disabled'>
          {options2.map((option) => (
            <FilterPanel.Chip
              key={option.value}
              selected={selected2.includes(option.value)}
              readOnly
              iconColor={option.iconColor}
              icon={option.icon}
            >
              {option.value}
            </FilterPanel.Chip>
          ))}
        </FilterPanel>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='FilterPanel-icons' level='2'>
        No text, custom icons
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>You can customize the icons, and text is optional</BodyText>
      <VerticalSpace />

      <DemoableDiv
        alignContent='center'
        code={`import { FilterPanel } from '@elhub/ds-components'

const Component = () => {
   const options = [
    { value: 'warning', icon: IconWarningTriangle, iconColor: 'orange' },
    { value: 'error', icon: IconWarningCircle, iconColor: 'red' },
    { value: 'success', icon: IconCheckCircle, iconColor: 'green' },
  ]
  const [selected, setSelected] = useState(['warning']);
  return (
    <FilterPanel size='medium' label='medium icons'>
      {options.map((option) => (
        <FilterPanel.Chip
          key={option.value}
          icon={option.icon}
          selected={selected.includes(option.value)}
          onClick={() =>
            setSelected(
              selected.includes(option.value)
                ? selected.filter((x) => x !== option.value)
                : [...selected, option.value],
            )}
        />
      ))}
    </FilterPanel>
   
  )
}`}
      >
        <FilterPanel size='medium' label='medium icons'>
          {options2.map((option) => (
            <FilterPanel.Chip
              key={option.value}
              icon={option.icon}
              iconColor={option.iconColor}
              selected={selected2.includes(option.value)}
              onClick={() => {
                setSelected2(
                  selected2.includes(option.value)
                    ? selected2.filter((x) => x !== option.value)
                    : [...selected2, option.value]
                )
              }}
            />
          ))}
        </FilterPanel>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='FilterPanel-text-icons' level='2'>
        Text and icons
      </Heading>
      <VerticalSpace size='2' />

      <DemoableDiv
        alignContent='center'
        code={`import { FilterPanel } from '@elhub/ds-components'

const Component = () => {
   const options = [
    { value: 'warning', icon: IconWarningTriangle, iconColor: 'orange' },
    { value: 'error', icon: IconWarningCircle, iconColor: 'red' },
    { value: 'success', icon: IconCheckCircle, iconColor: 'green' },
  ]
  const [selected, setSelected] = useState(['warning']);
  return (
    <>
    <FilterPanel size='large' label='large text and icons'>
      {options.map((option) => (
        <FilterPanel.Chip
          key={option.value}
          icon={option.icon}
          iconColor={option.iconColor}
          selected={selected.includes(option.value)}
          onClick={() =>
            setSelected(
              selected.includes(option.value)
                ? selected.filter((x) => x !== option.value)
                : [...selected, option.value],
            )}
        > 
          {option.value}
        </FilterPanel.Chip>
      ))}
    </FilterPanel>
    <VerticalSpace/>
     <FilterPanel size='medium' label='medium text and icons'>
      {options.map((option) => (
        <FilterPanel.Chip
          key={option.value}
          icon={option.icon}
          iconColor={option.iconColor}
          selected={selected.includes(option.value)}
          onClick={() =>
            setSelected(
              selected.includes(option.value)
                ? selected.filter((x) => x !== option.value)
                : [...selected, option.value],
            )}
        > 
          {option.value}
        </FilterPanel.Chip>
      ))}
    </FilterPanel>
    <VerticalSpace/>
    <FilterPanel size='small' label='small, text and icons'>
      {options.map((option) => (
        <FilterPanel.Chip
          key={option.value}
          icon={option.icon}
          iconColor={option.iconColor}
          selected={selected.includes(option.value)}
          onClick={() =>
            setSelected(
              selected.includes(option.value)
                ? selected.filter((x) => x !== option.value)
                : [...selected, option.value],
            )}
        > 
          {option.value}
        </FilterPanel.Chip>
      ))}
    </FilterPanel>
    </>
   
  )
}`}
      >
        <FilterPanel size='large' label='large text and icons'>
          {options2.map((option) => (
            <FilterPanel.Chip
              key={option.value}
              icon={option.icon}
              iconColor={option.iconColor}
              selected={selected2.includes(option.value)}
              onClick={() => {
                setSelected2(
                  selected2.includes(option.value)
                    ? selected2.filter((x) => x !== option.value)
                    : [...selected2, option.value]
                )
              }}
            >
              {option.value}
            </FilterPanel.Chip>
          ))}
        </FilterPanel>
        <VerticalSpace />
        <FilterPanel size='medium' label='medium text and icons'>
          {options2.map((option) => (
            <FilterPanel.Chip
              key={option.value}
              icon={option.icon}
              iconColor={option.iconColor}
              selected={selected2.includes(option.value)}
              onClick={() => {
                setSelected2(
                  selected2.includes(option.value)
                    ? selected2.filter((x) => x !== option.value)
                    : [...selected2, option.value]
                )
              }}
            >
              {option.value}
            </FilterPanel.Chip>
          ))}
        </FilterPanel>
        <VerticalSpace />
        <FilterPanel size='small' label='small, text and icons'>
          {options2.map((option) => (
            <FilterPanel.Chip
              key={option.value}
              icon={option.icon}
              iconColor={option.iconColor}
              selected={selected2.includes(option.value)}
              onClick={() =>
                setSelected2(
                  selected2.includes(option.value)
                    ? selected2.filter((x) => x !== option.value)
                    : [...selected2, option.value]
                )
              }
            >
              {option.value}
            </FilterPanel.Chip>
          ))}
        </FilterPanel>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='properties' level='2'>
        FilterTable props
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
              <code>size</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'large' | 'medium' | 'small'</code>
            </Table.DataCell>
            <Table.DataCell>Sets filter panel size</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>medium</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='properties' level='2'>
        FilterTable.Chip props
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
            <Table.DataCell>Sets filter panel chip disabled</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>icon</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>React.ReactNode</code>
            </Table.DataCell>
            <Table.DataCell>Sets filter panel chip icon</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>&lt;IconBean&gt;</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>hideLabel</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Hides label</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>label</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>React.ReactNode</code>
            </Table.DataCell>
            <Table.DataCell>Sets a label</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>readOnly</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Sets filter panel chip as read only, no interaction possible</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>

          <Table.Row>
            <Table.DataCell>
              <code>selected</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Sets filter panel chip as selected</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsFilterPanel
