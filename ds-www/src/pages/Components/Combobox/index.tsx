import { BodyText, Heading, Table, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import { ComboboxDisabledExample } from './examples/Disabled'
import comboboxDisabledSource from './examples/Disabled.tsx?raw'
import { ComboboxErrorMessageExample } from './examples/ErrorMessage'
import comboboxErrorMessageSource from './examples/ErrorMessage.tsx?raw'
import { ComboboxLimitsExample } from './examples/Limits'
import comboboxLimitsSource from './examples/Limits.tsx?raw'
import { ComboboxTypesAndSizesExample } from './examples/TypesAndSizes'
import comboboxTypesAndSizesSource from './examples/TypesAndSizes.tsx?raw'
import { ComboboxVirtualizationExample } from './examples/Virtualization'
import comboboxVirtualizationSource from './examples/Virtualization.tsx?raw'
import { ComboboxWidthLimitExample } from './examples/WidthLimit'
import comboboxWidthLimitSource from './examples/WidthLimit.tsx?raw'

const ComponentsCombobox = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='Combobox' level='1' spacing>
        Combobox
      </Heading>

      <BodyText>
        The Combobox component is a dropdown list for selecting options. It can be used for both single and
        multiple selection. Long option lists are virtualized so only visible options are rendered.
      </BodyText>
      <BodyText>
        Options can be simple strings, or objects with <code>label</code>, <code>value</code> and optional{' '}
        <code>description</code> (shown as secondary text under the label).
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

      <DemoableDiv alignContent='center' code={comboboxTypesAndSizesSource} codeHighlighter='shiki'>
        <ComboboxTypesAndSizesExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Combobox-messages' level='2' spacing>
        Combobox messages
      </Heading>

      <DemoableDiv alignContent='center' code={comboboxErrorMessageSource} codeHighlighter='shiki'>
        <ComboboxErrorMessageExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Combobox-limits' level='2' spacing>
        Combobox limits
      </Heading>

      <DemoableDiv alignContent='center' code={comboboxLimitsSource} codeHighlighter='shiki'>
        <ComboboxLimitsExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Combobox-width-limit' level='2' spacing>
        Combobox width limit
      </Heading>

      <DemoableDiv alignContent='center' code={comboboxWidthLimitSource} codeHighlighter='shiki'>
        <ComboboxWidthLimitExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Combobox-disabled' level='2' spacing>
        Combobox disabled
      </Heading>

      <DemoableDiv alignContent='center' code={comboboxDisabledSource} codeHighlighter='shiki'>
        <ComboboxDisabledExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Combobox-virtualization' level='2' spacing>
        Virtualization
      </Heading>

      <BodyText>
        This Combobox contains 10,000 options, but only the options around the visible viewport are rendered.
      </BodyText>

      <DemoableDiv alignContent='center' code={comboboxVirtualizationSource} codeHighlighter='shiki'>
        <ComboboxVirtualizationExample />
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
