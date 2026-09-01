import { BodyText, Heading, Link, Table, VerticalSpace } from '@elhub/ds-components'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'
import { CheckboxDefaultExample } from './examples/Default'
import checkboxDefaultSource from './examples/Default.tsx?raw'
import { CheckboxControlledExample } from './examples/Controlled'
import checkboxControlledSource from './examples/Controlled.tsx?raw'
import { CheckboxSizesExample } from './examples/Sizes'
import checkboxSizesSource from './examples/Sizes.tsx?raw'
import { CheckboxDisabledExample } from './examples/Disabled'
import checkboxDisabledSource from './examples/Disabled.tsx?raw'
import { CheckboxErrorExample } from './examples/Error'
import checkboxErrorSource from './examples/Error.tsx?raw'
import { CheckboxHiddenLabelExample } from './examples/HiddenLabel'
import checkboxHiddenLabelSource from './examples/HiddenLabel.tsx?raw'
import { CheckboxDescriptionExample } from './examples/Description'
import checkboxDescriptionSource from './examples/Description.tsx?raw'

const ComponentsCheckbox: React.FC = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='checkbox' level='1' spacing>
        Checkbox
      </Heading>
      <VerticalSpace />
      <BodyText>
        Checkboxes are best suited when it is clear that the user is opting in / opting out of a setting with
        a clear default value. <Link href={`${import.meta.env.BASE_URL}components/switch`}>Switches</Link> are
        better suited for settings that are not so clear default value, as toggles.
      </BodyText>

      <BodyText>
        Checkboxes can be grouped with a{' '}
        <Link href={`${import.meta.env.BASE_URL}components/checkboxgroup`}>CheckboxGroup</Link> component, for
        more options.
      </BodyText>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='checkbox-default' level='2' spacing>
        Default component
      </Heading>

      <VerticalSpace />

      <BodyText>This how the default component renders without props.</BodyText>

      <DemoableDiv alignContent='center' code={checkboxDefaultSource} codeHighlighter='shiki'>
        <CheckboxDefaultExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='checkbox-controlled' level='2' spacing>
        Controlled checkbox
      </Heading>

      <VerticalSpace />

      <BodyText>This how you control checkbox so you can get/set its values. </BodyText>

      <DemoableDiv alignContent='center' code={checkboxControlledSource} codeHighlighter='shiki'>
        <CheckboxControlledExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='checkbox-size' level='2' spacing>
        Size
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>size</code> prop can be one of the following values, derived from the <code>FormItem</code>{' '}
        component. You can set it on the <code>Checkbox</code> directly or pass it to the{' '}
        <code>FormItem</code> component
      </BodyText>

      <CodeDiv expand={false} highlighter='shiki' spacing>
        export type FormItemSize = 'large' | 'medium' | 'small'
      </CodeDiv>

      <DemoableDiv alignContent='center' code={checkboxSizesSource} codeHighlighter='shiki'>
        <CheckboxSizesExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='checkbox-disable' level='2' spacing>
        Disable
      </Heading>

      <VerticalSpace />

      <BodyText>
        You can use the <code>disabled</code> prop to deactivate the checkbox.
      </BodyText>

      <DemoableDiv alignContent='center' code={checkboxDisabledSource} codeHighlighter='shiki'>
        <CheckboxDisabledExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='checkbox-error' level='2' spacing>
        Error
      </Heading>

      <VerticalSpace />

      <BodyText>
        To propagate errors, use the <code>FormItem</code> component which will handle errors and display them
        in the correct position.
      </BodyText>

      <DemoableDiv alignContent='center' code={checkboxErrorSource} codeHighlighter='shiki'>
        <CheckboxErrorExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='checkbox-hide-label' level='2' spacing>
        Hiding the label
      </Heading>

      <VerticalSpace />

      <BodyText>
        You can use the <code>hideLabel</code> prop to hide visually the checkbox label. The label will still
        be accessible to screen readers. You can set it on the <code>Checkbox</code> directly or pass it to
        the <code>FormItem</code> component
      </BodyText>

      <DemoableDiv alignContent='center' code={checkboxHiddenLabelSource} codeHighlighter='shiki'>
        <CheckboxHiddenLabelExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='checkbox-description' level='2' spacing>
        Description
      </Heading>

      <VerticalSpace size='2' />

      <BodyText>
        You can use the <code>FormItemDescription</code> component to add a description to the Checkbox.
      </BodyText>

      <DemoableDiv alignContent='center' code={checkboxDescriptionSource} codeHighlighter='shiki'>
        <CheckboxDescriptionExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='checkbox-props' level='2' spacing>
        Props table
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>CheckboxProps</code> extends <code>React.HTMLAttributes&lt;HTMLInputElement&gt;</code>, as
        the checkbox element uses a <code>input</code> tag. As such, you can pass <code>input</code> props
        from{' '}
        <Link href='https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement'>HTMLInputElement</Link>{' '}
        interface, such as <code>defaultChecked</code>,{' '}
        <Link href='https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement'>HTMLElement</Link> props
        such as <code>style</code>, as well as{' '}
        <Link href='https://developer.mozilla.org/en-US/docs/Web/API/UIEvent'>UI events</Link> such as{' '}
        <code>onChange</code>. They will all be passed to the <code>&lt;input type="checkbox"&gt;</code>{' '}
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
              <code>checked</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Sets checkbox value</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>disable</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Disables the checkbox</Table.DataCell>
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
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Sets error styles</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>indeterminate</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Specify whether the Checkbox is in an indeterminate state</Table.DataCell>
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
              <code>'medium' | 'small'</code>
            </Table.DataCell>
            <Table.DataCell>Sets checkbox size</Table.DataCell>
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
            <Table.DataCell>Sets checkbox value</Table.DataCell>
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

export default ComponentsCheckbox
