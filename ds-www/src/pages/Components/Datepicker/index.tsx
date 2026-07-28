import { BodyText, Heading, Link, Table, VerticalSpace } from '@elhub/ds-components'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'
import { DatepickerDefaultExample } from './examples/Default'
import datepickerDefaultSource from './examples/Default.tsx?raw'
import { DatepickerControlledExample } from './examples/Controlled'
import datepickerControlledSource from './examples/Controlled.tsx?raw'
import { DatepickerSizesExample } from './examples/Sizes'
import datepickerSizesSource from './examples/Sizes.tsx?raw'
import { DatepickerSelectModesExample } from './examples/SelectModes'
import datepickerSelectModesSource from './examples/SelectModes.tsx?raw'
import { DatepickerDisabledAndErrorExample } from './examples/DisabledAndError'
import datepickerDisabledAndErrorSource from './examples/DisabledAndError.tsx?raw'
import { DatepickerMinAndMaxDatesExample } from './examples/MinAndMaxDates'
import datepickerMinAndMaxDatesSource from './examples/MinAndMaxDates.tsx?raw'

const ComponentsDatepicker: React.FC = () => {
  return (
    <>
      <VerticalSpace />

      <Heading size='large' id='datepicker' level='1' spacing>
        Datepicker
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>Datepicker</code> component is built upon{' '}
        <Link to='https://reactdatepicker.com'>React Datepicker</Link>, enhanced with a custom{' '}
        <code>TextField</code> element. It provides a user-friendly interface for selecting dates, months, or
        years based on the configured mode. It is fully integrated with <code>FormItem</code> and{' '}
        <code>FormItemLabel</code> for consistent styling and accessibility.
      </BodyText>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='datepicker-default' level='2' spacing>
        Default Usage
      </Heading>
      <VerticalSpace />

      <DemoableDiv alignContent='center' code={datepickerDefaultSource} codeHighlighter='shiki'>
        <DatepickerDefaultExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='datepicker-controlled' level='2' spacing>
        Controlled Usage
      </Heading>
      <VerticalSpace />

      <DemoableDiv alignContent='center' code={datepickerControlledSource} codeHighlighter='shiki'>
        <DatepickerControlledExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='datepicker-sizes' level='2' spacing>
        Sizes
      </Heading>
      <VerticalSpace />

      <BodyText>
        The <code>size</code> prop adjusts the size of the <code>Datepicker</code>. This can be passed
        directly to Datepicker or derived from <code>FormItem</code>
      </BodyText>
      <VerticalSpace />
      <CodeDiv expand={false} highlighter='shiki' spacing>
        export type FormItemSize = 'large' | 'medium' | 'small'
      </CodeDiv>

      <DemoableDiv alignContent='center' code={datepickerSizesSource} codeHighlighter='shiki'>
        <DatepickerSizesExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='handling-select-modes' level='2' spacing>
        Handling Select Modes
      </Heading>
      <VerticalSpace />

      <BodyText>
        Handling different selection modes effectively involves understanding how the <code>onSelect</code>{' '}
        prop behaves in each mode. The <code>onSelect</code> callback receives a <code>Date</code> object, and
        it's up to the consumer to extract and utilize the relevant parts of the selected date based on the
        current <code>selectMode</code>.
      </BodyText>

      <VerticalSpace size='1' />

      <Heading size='medium' id='handling-select-modes-examples' level='3' spacing>
        Examples
      </Heading>
      <VerticalSpace />

      <BodyText>
        Below are examples demonstrating how to handle the <code>onSelect</code> prop for different select
        modes. Depending on the mode, you may need to extract specific parts of the <code>Date</code> object
        to utilize in your application logic.
      </BodyText>

      <VerticalSpace size='1' />

      <DemoableDiv alignContent='center' code={datepickerSelectModesSource} codeHighlighter='shiki'>
        <DatepickerSelectModesExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='disabled' level='2' spacing>
        Disabled and error states
      </Heading>
      <VerticalSpace />

      <BodyText>
        You can disable the Datepicker by setting the <code>disabled</code> prop to <code>true</code>. This
        prevents the user from interacting with the Datepicker. Additionally, you can display an error message
        below the Datepicker by passing an error message to the <code>error</code> prop.
      </BodyText>

      <VerticalSpace size='1' />

      <DemoableDiv alignContent='center' code={datepickerDisabledAndErrorSource} codeHighlighter='shiki'>
        <DatepickerDisabledAndErrorExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='disabled' level='2' spacing>
        minDate and maxDate props
      </Heading>
      <VerticalSpace />

      <BodyText>
        set minDate and/or maxDate prop to disable back / forward button navigation and limit options in
        datepicker dropdown
      </BodyText>

      <VerticalSpace size='1' />

      <DemoableDiv alignContent='center' code={datepickerMinAndMaxDatesSource} codeHighlighter='shiki'>
        <DatepickerMinAndMaxDatesExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='props' level='2' spacing>
        Props Reference
      </Heading>
      <VerticalSpace />

      <BodyText>
        The <code>Datepicker</code> component inherits all props from{' '}
        <Link to='https://reactdatepicker.com'>React Datepicker</Link>, allowing for extensive customization.
        Additionally, it introduces the following custom props:
      </BodyText>

      <VerticalSpace size='1' />

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Prop</Table.HeaderCell>
            <Table.HeaderCell>Type</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Default Value</Table.HeaderCell>
            <Table.HeaderCell>Required</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>navigateButtons</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Renders the navigation buttons if true</Table.DataCell>
            <Table.DataCell>
              <code>true</code>
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>locale</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Sets the locale for date formatting and language.</Table.DataCell>
            <Table.DataCell>
              <code>'nb'</code>
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>maxDate</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>Date</code>
            </Table.DataCell>
            <Table.DataCell>Sets the maximum date</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>minDate</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>Date</code>
            </Table.DataCell>
            <Table.DataCell>Sets the minimum date</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>size</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>FormItemSize</code>
            </Table.DataCell>
            <Table.DataCell>
              Adjusts the size of the Datepicker. Options typically include <code>small</code>,{' '}
              <code>medium</code>, and <code>large</code>.
            </Table.DataCell>
            <Table.DataCell>
              <code>'medium'</code>
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>error</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>ReactNode</code>
            </Table.DataCell>
            <Table.DataCell>Displays an error message below the Datepicker.</Table.DataCell>
            <Table.DataCell>
              <code>undefined</code>
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>selectMode</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>DatepickerSelectMode</code>
            </Table.DataCell>
            <Table.DataCell>
              Determines the selection mode. Options are <code>'day'</code>, <code>'dayWithDayname'</code>,{' '}
              <code>'month'</code>, and <code>'year'</code>.
            </Table.DataCell>
            <Table.DataCell>
              <code>'day'</code>
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>years</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>number[]</code>
            </Table.DataCell>
            <Table.DataCell>An array of years to display in the year picker.</Table.DataCell>
            <Table.DataCell>
              <code>undefined</code>
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <BodyText>
        For a complete list of available props, refer to the{' '}
        <Link href='https://reactdatepicker.com' target='_blank'>
          React Datepicker documentation
        </Link>
        .
      </BodyText>

      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsDatepicker
