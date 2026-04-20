import {
  BodyText,
  Checkbox,
  FormItem,
  FormItemDescription,
  Heading,
  Link,
  Table,
  VerticalSpace
} from '@elhub/ds-components'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React, { useState } from 'react'

const ComponentsCheckbox: React.FC = () => {
  const [baked, setBaked] = useState<boolean>(false)
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='checkbox' level='1' spacing>
        Checkbox
      </Heading>
      <VerticalSpace />
      <BodyText>
        Checkboxes are best suited when it is clear that the user is opting in / opting out of a setting with
        a clear default value. <Link href='/components/switch'>Switches</Link> are better suited for settings
        that are not so clear default value, as toggles.
      </BodyText>

      <BodyText>
        Checkboxes can be grouped with a <Link href='/components/checkboxgroup'>CheckboxGroup</Link>{' '}
        component, for more options.
      </BodyText>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='checkbox-default' level='2' spacing>
        Default component
      </Heading>

      <VerticalSpace />

      <BodyText>This how the default component renders without props.</BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Checkbox } from '@elhub/ds-components'

const Component = () => {
  return (
    <FormItem>
      <Checkbox>Bake a cake today</Checkbox>
    </FormItem>
  )
}`}
      >
        <FormItem>
          <Checkbox>Bake a cake today</Checkbox>
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='checkbox-controlled' level='2' spacing>
        Controlled checkbox
      </Heading>

      <VerticalSpace />

      <BodyText>This how you control checkbox so you can get/set its values. </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Checkbox } from '@elhub/ds-components'

const Component = () => {
  const [baked, setBaked]
   = useState<boolean>(false)  
  return (
    <FormItem>
      <Checkbox
       checked={baked}
       onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
         setBaked(e.target.checked)}
      >
        Bake a cake today
      </Checkbox>
      <BodyText>
        You {!baked && 'do not'} have a cake
      </BodyText>
    </FormItem>
  )
}`}
      >
        <FormItem>
          <Checkbox
            checked={baked}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setBaked(e.target.checked)
            }}
          >
            Bake a cake today
          </Checkbox>
        </FormItem>
        <BodyText>You {!baked && 'do not'} have a cake</BodyText>
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

      <CodeDiv expand={false} spacing>
        export type FormItemSize = 'large' | 'medium' | 'small'
      </CodeDiv>

      <DemoableDiv
        alignContent='center'
        code={`import { Checkbox } from '@elhub/ds-components'

const Component = () => {
  return (
    <>
       <FormItem size='large'>
          <Checkbox>Large cake</Checkbox>
        </FormItem>
        <FormItem size='medium'>
          <Checkbox>Medium cake</Checkbox>
        </FormItem>
        <FormItem size='small'>
          <Checkbox>Small cake</Checkbox>
        </FormItem>
    </>
  )
}`}
      >
        <FormItem size='large'>
          <Checkbox>Large cake</Checkbox>
        </FormItem>

        <VerticalSpace size='0.5' />
        <FormItem size='medium'>
          <Checkbox>Medium cake</Checkbox>
        </FormItem>

        <VerticalSpace size='0.5' />
        <FormItem size='small'>
          <Checkbox>Small cake</Checkbox>
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='checkbox-disable' level='2' spacing>
        Disable
      </Heading>

      <VerticalSpace />

      <BodyText>
        You can use the <code>disabled</code> prop to deactivate the checkbox.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Checkbox } from '@elhub/ds-components'

const Component = () => {
  return (
      <FormItem>
          <Checkbox disabled>You can't check me</Checkbox>
      </FormItem>
  )
}`}
      >
        <FormItem>
          <Checkbox checked disabled>
            You can't check me
          </Checkbox>
        </FormItem>
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

      <DemoableDiv
        alignContent='center'
        code={`import { Checkbox } from '@elhub/ds-components'

const Component = () => {
  return (
     <FormItem error='You need to check it'>
        <Checkbox>Bake a cake today</Checkbox>
     </FormItem>
  )
}`}
      >
        <FormItem error='You need to check it'>
          <Checkbox>Bake a cake today</Checkbox>
        </FormItem>
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

      <DemoableDiv
        alignContent='center'
        code={`import { Checkbox } from '@elhub/ds-components'

const Component = () => {
  return (
  <FormItem>
    <Checkbox hideLabel>
      Bake a cake today
    </Checkbox>
  </FormItem>
  )
}`}
      >
        <FormItem>
          <Checkbox hideLabel>Bake a cake today</Checkbox>
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='checkbox-description' level='2' spacing>
        Description
      </Heading>

      <VerticalSpace size='2' />

      <BodyText>
        You can use the <code>FormItemDescription</code> component to add a description to the Checkbox.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Checkbox } from '@elhub/ds-components'

const Component = () => {
  return (
   <FormItem>
          <Checkbox>Bake a cake today</Checkbox>
          <FormItemDescription>You deserve a sweet treat now</FormItemDescription>
        </FormItem>
  )
}`}
      >
        <FormItem>
          <Checkbox>Bake a cake today</Checkbox>
          <FormItemDescription>You deserve a sweet treat now</FormItemDescription>
        </FormItem>
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
