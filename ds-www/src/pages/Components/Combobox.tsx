import {
  BodyText,
  Combobox,
  type ComboboxOption,
  FormItem,
  FormItemLabel,
  Heading,
  Table,
  VerticalSpace
} from '@elhub/ds-components'
import React, { useState } from 'react'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import styled from 'styled-components'

const StyledCombobox = styled(Combobox)`
  max-width: 400px;
`

const ComponentsCombobox = () => {
  const options: ComboboxOption[] = [
    { label: 'Bicycle', value: 'bicycle' },
    { label: 'Car', value: 'car' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Truck', value: 'truck' },
    { label: 'Boat', value: 'boat' },
    { label: 'Airplane', value: 'airplane' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Submarine', value: 'submarine' }
  ]

  const [selectedSingleOptions, setSelectedSingleOptions] = useState<string[]>([])
  const [selectedMultipleOptions, setSelectedMultipleOptions] = React.useState<ComboboxOption[]>([options[0]])
  const [selectedMultipleOptions3, setSelectedMultipleOptions3] = React.useState<ComboboxOption[]>([
    options[0]
  ])
  const [selectedMultipleOptions4, setSelectedMultipleOptions4] = React.useState<ComboboxOption[]>([
    options[0]
  ])
  const [selectedMultipleOptions5, setSelectedMultipleOptions5] = React.useState<ComboboxOption[]>([
    options[0]
  ])

  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='Combobox' level='1' spacing>
        Combobox
      </Heading>

      <BodyText>
        The Combobox component is a dropdown list for selecting options. It can be used for both single and
        multiple selection.
      </BodyText>
      <VerticalSpace />
      <BodyText>
        There are several features that make this component preferrable over the standard select component:
      </BodyText>
      <VerticalSpace />
      <ul>
        <li>
          <BodyText>
            Allow de-selection of items. This means that we do not need to add a "none" option to the list.
          </BodyText>
        </li>
        <li>
          <BodyText> Allow creation of new items, if necessary </BodyText>
        </li>
        <li>
          <BodyText> limit the number of options, either selected, or visible</BodyText>
        </li>
        <li>
          <BodyText>
            Compact multiple selected options into a single chip, so the component does not expand if
            necessary
          </BodyText>
        </li>
      </ul>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Combobox-type' level='2' spacing>
        Combobox type
      </Heading>

      <DemoableDiv alignContent='center'>
        <FormItem>
          <FormItemLabel>Single, large</FormItemLabel>
          <Combobox
            size='large'
            options={options}
            placeholder='Select an option'
            noResultsLabel='No results'
            onToggleSelected={(option: string, isSelected: boolean) => {
              if (isSelected) {
                setSelectedSingleOptions([option])
              } else {
                setSelectedSingleOptions([])
              }
            }}
            selectedOptions={options.filter((o) => selectedSingleOptions.includes(o.value))}
          />
        </FormItem>
        <VerticalSpace />
        <FormItem>
          <FormItemLabel>multiple, large</FormItemLabel>
          <Combobox
            size='large'
            options={options}
            isMultiSelect
            placeholder='Select an option'
            noResultsLabel='No results'
            selectedOptions={selectedMultipleOptions}
            onToggleSelected={(option: string, isSelected: boolean) => {
              if (isSelected) {
                setSelectedMultipleOptions([
                  ...selectedMultipleOptions,
                  ...options.filter((o) => o.value === option)
                ])
              } else {
                setSelectedMultipleOptions(selectedMultipleOptions.filter((o) => o.value !== option))
              }
            }}
          />
        </FormItem>
        <VerticalSpace />
        <FormItem>
          <FormItemLabel>Single, medium</FormItemLabel>
          <Combobox
            size='medium'
            options={options}
            noResultsLabel='No results'
            onToggleSelected={(option: string, isSelected: boolean) => {
              if (isSelected) {
                setSelectedSingleOptions([option])
              } else {
                setSelectedSingleOptions([])
              }
            }}
            selectedOptions={options.filter((o) => selectedSingleOptions.includes(o.value))}
          />
        </FormItem>

        <VerticalSpace />
        <FormItem>
          <FormItemLabel>multiple, medium</FormItemLabel>
          <Combobox
            size='medium'
            options={options}
            isMultiSelect
            placeholder='Select an option'
            noResultsLabel='No results'
            selectedOptions={selectedMultipleOptions}
            onToggleSelected={(option: string, isSelected: boolean) => {
              if (isSelected) {
                setSelectedMultipleOptions([
                  ...selectedMultipleOptions,
                  ...options.filter((o) => o.value === option)
                ])
              } else {
                setSelectedMultipleOptions(selectedMultipleOptions.filter((o) => o.value !== option))
              }
            }}
          />
        </FormItem>

        <VerticalSpace />
        <FormItem>
          <FormItemLabel>single, small</FormItemLabel>
          <Combobox
            size='small'
            options={options}
            placeholder='Select an option'
            noResultsLabel='No results'
            onToggleSelected={(option: string, isSelected: boolean) => {
              if (isSelected) {
                setSelectedSingleOptions([option])
              } else {
                setSelectedSingleOptions([])
              }
            }}
            selectedOptions={options.filter((o) => selectedSingleOptions.includes(o.value))}
          />
        </FormItem>

        <VerticalSpace />
        <FormItem>
          <FormItemLabel>multiple, small</FormItemLabel>
          <Combobox
            size='small'
            options={options}
            isMultiSelect
            placeholder='Select an option'
            noResultsLabel='No results'
            selectedOptions={selectedMultipleOptions}
            onToggleSelected={(option: string, isSelected: boolean) => {
              if (isSelected) {
                setSelectedMultipleOptions([
                  ...selectedMultipleOptions,
                  ...options.filter((o) => o.value === option)
                ])
              } else {
                setSelectedMultipleOptions(selectedMultipleOptions.filter((o) => o.value !== option))
              }
            }}
          />
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Combobox-messages' level='2' spacing>
        Combobox messages
      </Heading>

      <DemoableDiv alignContent='center'>
        <FormItem error='You must select 3'>
          <FormItemLabel>Error message</FormItemLabel>
          <Combobox
            options={options}
            isMultiSelect
            placeholder='Select an option'
            maxSelected={{ limit: 3 }}
            noResultsLabel='No results'
            selectedOptions={selectedMultipleOptions3}
            onToggleSelected={(option: string, isSelected: boolean) => {
              if (isSelected) {
                setSelectedMultipleOptions3([
                  ...selectedMultipleOptions3,
                  ...options.filter((o) => o.value === option)
                ])
              } else {
                setSelectedMultipleOptions3(selectedMultipleOptions3.filter((o) => o.value !== option))
              }
            }}
          />
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Combobox-limits' level='2' spacing>
        Combobox limits
      </Heading>

      <DemoableDiv alignContent='center'>
        <FormItem>
          <FormItemLabel>Max of 3 selections</FormItemLabel>
          <Combobox
            options={options}
            isMultiSelect
            maxSelected={{ limit: 3 }}
            noResultsLabel='No results'
            placeholder='Select an option'
            selectedOptions={selectedMultipleOptions4}
            onToggleSelected={(option: string, isSelected: boolean) => {
              if (isSelected) {
                setSelectedMultipleOptions4([
                  ...selectedMultipleOptions4,
                  ...options.filter((o) => o.value === option)
                ])
              } else {
                setSelectedMultipleOptions4(selectedMultipleOptions4.filter((o) => o.value !== option))
              }
            }}
          />
        </FormItem>

        <VerticalSpace />
        <FormItem>
          <FormItemLabel>Max 3 options shown</FormItemLabel>
          <Combobox
            options={options}
            isMultiSelect
            maxShown={3}
            noResultsLabel='No results'
            placeholder='Select an option'
            selectedOptions={selectedMultipleOptions5}
            onToggleSelected={(option: string, isSelected: boolean) => {
              if (isSelected) {
                setSelectedMultipleOptions5([
                  ...selectedMultipleOptions5,
                  ...options.filter((o) => o.value === option)
                ])
              } else {
                setSelectedMultipleOptions5(selectedMultipleOptions5.filter((o) => o.value !== option))
              }
            }}
          />
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Combobox-width-limit' level='2' spacing>
        Combobox width limit
      </Heading>

      <DemoableDiv alignContent='center'>
        <FormItem>
          <FormItemLabel>Limit on 400px</FormItemLabel>
          <StyledCombobox
            size='medium'
            options={options}
            isMultiSelect
            placeholder='Select an option'
            noResultsLabel='No results'
            selectedOptions={selectedMultipleOptions3}
            onToggleSelected={(option: string, isSelected: boolean) => {
              if (isSelected) {
                setSelectedMultipleOptions3([
                  ...selectedMultipleOptions3,
                  ...options.filter((o) => o.value === option)
                ])
              } else {
                setSelectedMultipleOptions3(selectedMultipleOptions3.filter((o) => o.value !== option))
              }
            }}
          />
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Combobox-disabled' level='2' spacing>
        Combobox disabled
      </Heading>

      <DemoableDiv alignContent='center'>
        <FormItem>
          <FormItemLabel>Disabled</FormItemLabel>
          <StyledCombobox
            disabled
            options={options}
            noResultsLabel='No results'
            placeholder='Select an option'
            isMultiSelect
            selectedOptions={selectedMultipleOptions3}
            onToggleSelected={(option: string, isSelected: boolean) => {
              if (isSelected) {
                setSelectedMultipleOptions3([
                  ...selectedMultipleOptions3,
                  ...options.filter((o) => o.value === option)
                ])
              } else {
                setSelectedMultipleOptions3(selectedMultipleOptions3.filter((o) => o.value !== option))
              }
            }}
          />
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='3' />

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
              <code>isMultipleSelect</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Toggles multiple selection</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>error</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Message for error</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>maxSelected</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>{`{limit: number, message: string}`}</code>
            </Table.DataCell>
            <Table.DataCell>Limit selections for multiple comboboxes</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>maxShown</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>number</code>
            </Table.DataCell>
            <Table.DataCell>Limit visible options for multiple comboboxes</Table.DataCell>
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
            <Table.DataCell>Combobox size</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>medium</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>noResultsLabel</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Label to display when no results are found</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell></Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  )
}

export default ComponentsCombobox
