import {
  BodyText,
  Button,
  Checkbox,
  CheckboxGroup,
  FlexEndDiv,
  FlexStartDiv,
  FormItem,
  FormItemLabel,
  Heading,
  HorizontalSpace,
  Link,
  Table,
  VerticalSpace
} from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React, { useState } from 'react'

const ComponentsCheckboxgroup: React.FC = () => {
  const [shoppingList1, setShoppingList1] = useState<string[]>(['Milk'])

  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='checkboxgroup' level='1' spacing>
        CheckboxGroup
      </Heading>

      <VerticalSpace size='2' />
      <BodyText>
        The <code>CheckboxGroup</code> component lets you handle checkbox values as arrays. It integrates
        seamlessly with <code>FormItem</code> for a consistent form layout and enhanced accessibility.
      </BodyText>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='checkboxgroup-default' level='2' spacing>
        Default component
      </Heading>

      <VerticalSpace />

      <DemoableDiv
        alignContent='center'
        code={`import { Checkbox, CheckboxGroup, FormItem, FormItemLabel } from '@elhub/ds-components'

const Component = () => {
  return (
    <FormItem>
      <FormItemLabel>Shopping list</FormItemLabel>
      <CheckboxGroup>
        <Checkbox value='Eggs'>Eggs</Checkbox>
        <Checkbox value='Milk'>Milk</Checkbox>
        <Checkbox value='Coffee'>Coffee</Checkbox>
      </CheckboxGroup>
    </FormItem>
  )
}`}
      >
        <FormItem>
          <FormItemLabel>Shopping list</FormItemLabel>
          <CheckboxGroup>
            <Checkbox value='Eggs'>Eggs</Checkbox>
            <Checkbox value='Milk'>Milk</Checkbox>
            <Checkbox value='Coffee'>Coffee</Checkbox>
          </CheckboxGroup>
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='checkboxgroup-controlled' level='2' spacing>
        Controlling the group
      </Heading>

      <VerticalSpace />

      <BodyText>
        Use the <code>onChange</code> and <code>value</code> props to control a checkbox group. Combine with{' '}
        <code>FormItem</code> for a structured layout.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Checkbox, CheckboxGroup, FormItem, FormItemLabel, Button } from '@elhub/ds-components'

const Component = () => {
  const [shoppingList, setShoppingList] = useState<Array<string>>(['Milk'])

  return (
    <>
      <FormItem>
        <FormItemLabel>Shopping list</FormItemLabel>
        <CheckboxGroup value={shoppingList} onChange={setShoppingList}>
          <Checkbox value='Eggs'>Eggs</Checkbox>
          <Checkbox value='Milk'>Milk</Checkbox>
          <Checkbox value='Coffee'>Coffee</Checkbox>
        </CheckboxGroup>
      </FormItem>
      <BodyText>You need {shoppingList.join(', ')}</BodyText>
      <Button onClick={() => setShoppingList(['Eggs', 'Coffee'])}>Reset to Eggs + Coffee</Button>
    </>
  )
}`}
      >
        <FormItem>
          <FormItemLabel>Shopping list</FormItemLabel>
          <CheckboxGroup
            value={shoppingList1}
            onChange={(value) => {
              // @ts-expect-error value is always an array
              setShoppingList1(value)
            }}
          >
            <Checkbox value='Eggs'>Eggs</Checkbox>
            <Checkbox value='Milk'>Milk</Checkbox>
            <Checkbox value='Coffee'>Coffee</Checkbox>
          </CheckboxGroup>
        </FormItem>
        <BodyText>You need {shoppingList1.join(', ')}</BodyText>
        <Button
          onClick={() => {
            setShoppingList1(['Eggs', 'Coffee'])
          }}
        >
          Reset to Eggs + Coffee
        </Button>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='checkboxgroup-size' level='2' spacing>
        Size
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>size</code> prop controls the size of the checkboxes. You can set sizes individually or for
        the entire group.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Checkbox, CheckboxGroup, FormItem, FormItemLabel } from '@elhub/ds-components'

const Component = () => {
  return (
    <FlexStartDiv>
     <FormItem size='large'>
            <FormItemLabel>Large size list</FormItemLabel>
            <CheckboxGroup>
              <Checkbox value='Eggs'>Eggs</Checkbox>
              <Checkbox value='Milk'>Milk</Checkbox>
              <Checkbox value='Coffee'>Coffee</Checkbox>
            </CheckboxGroup>
          </FormItem>
      <FormItem size='medium'>
        <FormItemLabel>Medium size list</FormItemLabel>
        <CheckboxGroup>
          <Checkbox value='Eggs'>Eggs</Checkbox>
          <Checkbox value='Milk'>Milk</Checkbox>
          <Checkbox value='Coffee'>Coffee</Checkbox>
        </CheckboxGroup>
      </FormItem>
      <HorizontalSpace size='2' />
      <FormItem size='small'>
        <FormItemLabel>Small size list</FormItemLabel>
        <CheckboxGroup>
          <Checkbox value='Eggs'>Eggs</Checkbox>
          <Checkbox value='Milk'>Milk</Checkbox>
          <Checkbox value='Coffee'>Coffee</Checkbox>
        </CheckboxGroup>
      </FormItem>
    </FlexStartDiv>
  )
}`}
      >
        <FlexStartDiv style={{ gap: 24 }}>
          <FormItem size='large'>
            <FormItemLabel>Large size list</FormItemLabel>
            <CheckboxGroup>
              <Checkbox value='Eggs'>Eggs</Checkbox>
              <Checkbox value='Milk'>Milk</Checkbox>
              <Checkbox value='Coffee'>Coffee</Checkbox>
            </CheckboxGroup>
          </FormItem>
          <FormItem size='medium'>
            <FormItemLabel>Medium size list</FormItemLabel>
            <CheckboxGroup>
              <Checkbox value='Eggs'>Eggs</Checkbox>
              <Checkbox value='Milk'>Milk</Checkbox>
              <Checkbox value='Coffee'>Coffee</Checkbox>
            </CheckboxGroup>
          </FormItem>
          <FormItem size='small'>
            <FormItemLabel>Small size list</FormItemLabel>
            <CheckboxGroup>
              <Checkbox value='Eggs'>Eggs</Checkbox>
              <Checkbox value='Milk'>Milk</Checkbox>
              <Checkbox value='Coffee'>Coffee</Checkbox>
            </CheckboxGroup>
          </FormItem>
        </FlexStartDiv>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='checkboxgroup-disable' level='2' spacing>
        Disable
      </Heading>

      <VerticalSpace />

      <BodyText>
        Use the <code>disabled</code> prop to disable the entire group or specific checkboxes.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Checkbox, CheckboxGroup, FormItem, FormItemLabel } from '@elhub/ds-components'

const Component = () => {
  return (
    <FlexEndDiv>
      <FormItem inputProps={{ disabled: true }}>
        <FormItemLabel>Disabled group</FormItemLabel>
        <CheckboxGroup disabled>
          <Checkbox value='Eggs'>Eggs</Checkbox>
          <Checkbox value='Milk'>Milk</Checkbox>
          <Checkbox value='Coffee'>Coffee</Checkbox>
        </CheckboxGroup>
      </FormItem>
      <HorizontalSpace size='2' />
      <FormItem>
        <FormItemLabel>Partially disabled</FormItemLabel>
        <CheckboxGroup>
          <Checkbox value='Eggs'>Eggs</Checkbox>
          <Checkbox value='Milk' disabled>
            No more milk
          </Checkbox>
          <Checkbox value='Coffee'>Coffee</Checkbox>
        </CheckboxGroup>
      </FormItem>
    </FlexEndDiv>
  )
}`}
      >
        <FlexEndDiv>
          <FormItem inputProps={{ disabled: true }}>
            <FormItemLabel>Disabled group</FormItemLabel>
            <CheckboxGroup>
              <Checkbox value='Eggs'>Eggs</Checkbox>
              <Checkbox value='Milk'>Milk</Checkbox>
              <Checkbox value='Coffee'>Coffee</Checkbox>
            </CheckboxGroup>
          </FormItem>
          <HorizontalSpace size='2' />
          <FormItem>
            <FormItemLabel>Partially disabled</FormItemLabel>
            <CheckboxGroup>
              <Checkbox value='Eggs'>Eggs</Checkbox>
              <Checkbox value='Milk' disabled>
                No more milk
              </Checkbox>
              <Checkbox value='Coffee'>Coffee</Checkbox>
            </CheckboxGroup>
          </FormItem>
        </FlexEndDiv>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='checkbox-error' level='2' spacing>
        Error
      </Heading>

      <VerticalSpace />

      <BodyText>
        You can use the <code>error</code> prop to display the checkbox group in an error state. You can set
        it via the <code>FormItem</code> component.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Checkbox, CheckboxGroup, FormItem } from '@elhub/ds-components'

const Component = () => {
  return (
      <FormItem error='You have to check at least one item'>
        <FormItemLabel>Shopping list</FormItemLabel>
        <CheckboxGroup>
          <Checkbox value='Eggs'>Eggs</Checkbox>
          <Checkbox value='Milk'>Milk</Checkbox>
          <Checkbox value='Coffee'>Coffee</Checkbox>
        </CheckboxGroup>
      </FormItem>
  )
}`}
      >
        <FormItem error='You have to check at least one item'>
          <FormItemLabel>Shopping list</FormItemLabel>
          <CheckboxGroup>
            <Checkbox value='Eggs'>Eggs</Checkbox>
            <Checkbox value='Milk'>Milk</Checkbox>
            <Checkbox value='Coffee'>Coffee</Checkbox>
          </CheckboxGroup>
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='checkbox-props' level='2' spacing>
        Props table
      </Heading>

      <VerticalSpace />
      <BodyText>
        The <code>CheckboxGroupProps</code> extends{' '}
        <code>React.HTMLAttributes&lt;HTMLFieldSetElement&gt;</code>, as the checkbox element uses a{' '}
        <code>fieldset</code> tag. As such, you can pass <code>input</code> props from{' '}
        <Link href='https://developer.mozilla.org/en-US/docs/Web/API/HTMLFieldSetElement'>
          HTMLFieldSetElement
        </Link>{' '}
        interface, such as <code>defaultChecked</code>,{' '}
        <Link href='https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement'>HTMLElement</Link> props
        such as <code>style</code>.
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
              <code>defaultValue</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>array</code>
            </Table.DataCell>
            <Table.DataCell>Sets checkbox group default values</Table.DataCell>
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
            <Table.DataCell>Disables the checkbox group</Table.DataCell>
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
            <Table.DataCell>Sets error message</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>onChange</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>(value: (string | number | boolean | undefined)[]) =&gt; void</code>
            </Table.DataCell>
            <Table.DataCell>Callback function for checkbox changes</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>size</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'large' | 'medium' | 'small'</code>
            </Table.DataCell>
            <Table.DataCell>Sets checkbox group size</Table.DataCell>
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
              <code>array</code>
            </Table.DataCell>
            <Table.DataCell>Sets checkbox group value</Table.DataCell>
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

export default ComponentsCheckboxgroup
