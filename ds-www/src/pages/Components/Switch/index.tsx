import { Heading, BodyText, Link, VerticalSpace, Table } from '@elhub/ds-components'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'
import { SwitchControlledExample } from './examples/Controlled'
import switchControlledSource from './examples/Controlled.tsx?raw'
import { SwitchDefaultExample } from './examples/Default'
import switchDefaultSource from './examples/Default.tsx?raw'
import { SwitchDisabledExample } from './examples/Disabled'
import switchDisabledSource from './examples/Disabled.tsx?raw'
import { SwitchLoadingExample } from './examples/Loading'
import switchLoadingSource from './examples/Loading.tsx?raw'
import { SwitchSizesExample } from './examples/Sizes'
import switchSizesSource from './examples/Sizes.tsx?raw'

const ComponentsSwitch = (): React.JSX.Element => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='Switch' level='1' spacing>
        Switch
      </Heading>

      <VerticalSpace />
      <BodyText spacing>
        A <Link href={`${import.meta.env.BASE_URL}components/switch`}>Switch</Link> provides a straightforward
        way for users to enable or disable options, akin to flipping a light switch. Using a toggle involves
        two actions: selection and execution, while a checkbox typically requires an extra step (such as
        submitting) to complete the action.
      </BodyText>
      <BodyText>
        When deciding between a checkbox and a switch, consider the context of use rather than the function
        itself.
      </BodyText>
      <BodyText>
        The <code>TextField</code> component needs to be used inside a <code>FormItem</code> component.
      </BodyText>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Switch-default' level='2' spacing>
        Default component
      </Heading>

      <VerticalSpace />

      <DemoableDiv alignContent='center' code={switchDefaultSource} codeHighlighter='shiki'>
        <SwitchDefaultExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Switch-controlled' level='2' spacing>
        Controlled
      </Heading>

      <VerticalSpace />

      <BodyText spacing>
        You set the <code>checked</code> and the <code>onChange</code> props to control the switch element.
      </BodyText>

      <DemoableDiv alignContent='center' code={switchControlledSource} codeHighlighter='shiki'>
        <SwitchControlledExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Switch-size' level='2' spacing>
        Size
      </Heading>

      <VerticalSpace />

      <BodyText spacing>
        The <code>size</code> prop can be one of the following 3 strings:
      </BodyText>

      <CodeDiv expand={false} highlighter='shiki' spacing>
        export type FormItemSize = 'large' | 'medium' | 'small'
      </CodeDiv>

      <BodyText spacing>
        You can use the exported type <code>FormFieldSize</code> from <code>@elhub/ds-components</code>
      </BodyText>

      <DemoableDiv alignContent='center' code={switchSizesSource} codeHighlighter='shiki'>
        <SwitchSizesExample />
      </DemoableDiv>
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Switch-disable' level='2' spacing>
        Disable
      </Heading>
      <VerticalSpace />
      <BodyText spacing>
        You can use the <code>disabled</code> prop in <code>FormItem</code> to disable the switch.
      </BodyText>
      <DemoableDiv alignContent='center' code={switchDisabledSource} codeHighlighter='shiki'>
        <SwitchDisabledExample />
      </DemoableDiv>
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Switch-loading' level='2' spacing>
        Loading
      </Heading>
      <VerticalSpace />
      <BodyText spacing>
        Use the <code>loading</code> prop to show a loading animation on the switch.
      </BodyText>
      <DemoableDiv alignContent='center' code={switchLoadingSource} codeHighlighter='shiki'>
        <SwitchLoadingExample />
      </DemoableDiv>
      <VerticalSpace size='2' />
      <Heading className='toc' size='large' id='Switch-props' level='2' spacing>
        Props table
      </Heading>
      <VerticalSpace />
      <BodyText>
        You can still pass <code>input</code> props from{' '}
        <Link href='https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement'>HTMLInputElement</Link>{' '}
        interface, such as <code>defaultValue</code>,{' '}
        <Link href='https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement'>HTMLElement</Link> props
        such as <code>style</code>, as well as{' '}
        <Link href='https://developer.mozilla.org/en-US/docs/Web/API/UIEvent'>UI events</Link> such as{' '}
        <code>onChange</code>. They will all be passed to the <code>&lt;input type="Switch"&gt;</code>{' '}
        element.
      </BodyText>
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
              <code>disable</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Disables the Switch</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>hideLabel</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Hides Switch label</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>loading</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Set loading state</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>position</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'left' | 'right'</code>
            </Table.DataCell>
            <Table.DataCell>Set switch position</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>left</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>size</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'large' |'medium' | 'small'</code>
            </Table.DataCell>
            <Table.DataCell>Sets Switch size</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>medium</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>value</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Sets Switch value</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsSwitch
