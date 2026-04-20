import {
  BodyText,
  FormItem,
  FormItemLabel,
  Heading,
  Radio,
  RadioGroup,
  Table,
  VerticalSpace
} from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React, { useState } from 'react'

const ComponentsRadiogroup = (): Element => {
  const [shoppingList1, setShoppingList1] = useState<string>('Milk')
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='Radiogroup' level='1' spacing>
        RadioGroup
      </Heading>

      <VerticalSpace size='2' />
      <BodyText>
        The <code>RadioGroup</code> component groups and handles a list of radio elements. You can also wrap
        it inside a <code>FormItem</code> for more consistent layouts and accessibility.
      </BodyText>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Radio-default' level='2' spacing>
        Default component
      </Heading>

      <VerticalSpace size='2' />

      <DemoableDiv
        alignContent='center'
        code={`import { FormItem, FormItemLabel, Radio, RadioGroup } from '@elhub/ds-components'

const Component = () => {
  return (
    <FormItem>
      <FormItemLabel>Shopping list</FormItemLabel>
      <RadioGroup>
        <Radio value="eggs">Eggs</Radio>
        <Radio value="milk">Milk</Radio>
        <Radio value="coffee">Coffee</Radio>
      </RadioGroup>
    </FormItem>
  )
}`}
      >
        <FormItem>
          <FormItemLabel>Shopping list</FormItemLabel>
          <RadioGroup>
            <Radio value='eggs'>Eggs</Radio>
            <Radio value='milk'>Milk</Radio>
            <Radio value='coffee'>Coffee</Radio>
          </RadioGroup>
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='checkboc-controlled' level='2' spacing>
        Controlling
      </Heading>

      <VerticalSpace />

      <BodyText>
        Use the <code>onChange</code> and <code>value</code> props to control a radio group. You can also
        provide a default value using the <code>defaultValue</code> prop. The example below demonstrates
        controlled usage within a <code>FormItem</code>.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { FormItem, FormItemLabel, Radio, RadioGroup } from '@elhub/ds-components'

const Component = () => {
  const [shoppingList, setShoppingList] = useState<string>("Milk")
  return (
    <FormItem>
      <FormItemLabel>Shopping list</FormItemLabel>
      <RadioGroup 
        value={shoppingList} 
        defaultValue="Milk"
        onChange={setShoppingList}
      >
        <Radio value="Eggs">Eggs</Radio>
        <Radio value="Milk">Milk</Radio>
        <Radio value="Coffee">Coffee</Radio>
      </RadioGroup>
      <BodyText>Chosen item: {shoppingList}</BodyText>
    </FormItem>
  )
}`}
      >
        <FormItem>
          <FormItemLabel>Shopping list</FormItemLabel>
          <RadioGroup value={shoppingList1} defaultValue='Milk' onChange={setShoppingList1}>
            <Radio value='Eggs'>Eggs</Radio>
            <Radio value='Milk'>Milk</Radio>
            <Radio value='Coffee'>Coffee</Radio>
          </RadioGroup>
          <BodyText>Chosen item: {shoppingList1}</BodyText>
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Radio-size' level='2' spacing>
        Size
      </Heading>

      <VerticalSpace />

      <BodyText>
        The size of the radio buttons is inferred from the size of the <code>FormItem</code> component. You
        can also set the size of the <code>FormItem</code> component to change the size of the radio
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { FormItem, FormItemLabel, Radio, RadioGroup } from '@elhub/ds-components'

const Component = () => {
  return (
   <>
    <FormItem size="large">
      <FormItemLabel>Large shopping list</FormItemLabel>
      <RadioGroup>
        <Radio value="Eggs">Eggs</Radio>
        <Radio value="Milk">Milk</Radio>
        <Radio value="Coffee">Coffee</Radio>
      </RadioGroup>
    </FormItem>
     <FormItem size="medium">
      <FormItemLabel>Medium shopping list</FormItemLabel>
      <RadioGroup>
        <Radio value="Eggs">Eggs</Radio>
        <Radio value="Milk">Milk</Radio>
        <Radio value="Coffee">Coffee</Radio>
      </RadioGroup>
    </FormItem>
     <FormItem size="small">
      <FormItemLabel>Small shopping list</FormItemLabel>
      <RadioGroup>
        <Radio value="Eggs">Eggs</Radio>
        <Radio value="Milk">Milk</Radio>
        <Radio value="Coffee">Coffee</Radio>
      </RadioGroup>
    </FormItem>
    
    </>
  )
}`}
      >
        <div style={{ display: 'flex', gap: 16 }}>
          <FormItem size='large'>
            <FormItemLabel>Large shopping list</FormItemLabel>
            <RadioGroup>
              <Radio value='Eggs'>Eggs</Radio>
              <Radio value='Milk'>Milk</Radio>
              <Radio value='Coffee'>Coffee</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem size='medium'>
            <FormItemLabel>Medium shopping list</FormItemLabel>
            <RadioGroup>
              <Radio value='Eggs'>Eggs</Radio>
              <Radio value='Milk'>Milk</Radio>
              <Radio value='Coffee'>Coffee</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem size='small'>
            <FormItemLabel>Small shopping list</FormItemLabel>
            <RadioGroup>
              <Radio value='Eggs'>Eggs</Radio>
              <Radio value='Milk'>Milk</Radio>
              <Radio value='Coffee'>Coffee</Radio>
            </RadioGroup>
          </FormItem>
        </div>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='radiogroup-disable' level='2' spacing>
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
<>
<FormItem inputProps={{ disabled: true }}>
  <FormItemLabel>Disabled group</FormItemLabel>
  <RadioGroup>
    <Radio value='Eggs'>Eggs</Radio>
    <Radio value='Milk'>Milk</Radio>
    <Radio value='Coffee'>Coffee</Radio>
  </RadioGroup>
</FormItem>
<HorizontalSpace size='2' />
<FormItem>
  <FormItemLabel>Partially disabled</FormItemLabel>
  <RadioGroup>
    <Radio value='Eggs'>Eggs</Radio>
    <Radio value='Milk' disabled>
      No more milk
    </Radio>
    <Radio value='Coffee'>Coffee</Radio>
  </RadioGroup>
</FormItem>
</>
)
}`}
      >
        <div style={{ display: 'flex', gap: 24 }}>
          <FormItem inputProps={{ disabled: true }}>
            <FormItemLabel>Disabled group</FormItemLabel>
            <RadioGroup>
              <Radio value='Eggs'>Eggs</Radio>
              <Radio value='Milk'>Milk</Radio>
              <Radio value='Coffee'>Coffee</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem>
            <FormItemLabel>Partially disabled</FormItemLabel>
            <RadioGroup>
              <Radio value='Eggs'>Eggs</Radio>
              <Radio value='Milk' disabled>
                No more milk
              </Radio>
              <Radio value='Coffee'>Coffee</Radio>
            </RadioGroup>
          </FormItem>
        </div>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Radio-error' level='2' spacing>
        Error
      </Heading>

      <VerticalSpace />

      <BodyText>
        Use the <code>error</code> prop on the <code>FormItem</code> or <code>RadioGroup</code> to indicate an
        error state.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { FormItem, FormItemLabel, Radio, RadioGroup } from '@elhub/ds-components'

const Component = () => {
  return (
    <FormItem error="Please select an item">
      <FormItemLabel>Shopping list</FormItemLabel>
      <RadioGroup>
        <Radio value="Eggs">Eggs</Radio>
        <Radio value="Milk">Milk</Radio>
        <Radio value="Coffee">Coffee</Radio>
      </RadioGroup>
    </FormItem>
  )
}`}
      >
        <FormItem error='Please select an item'>
          <FormItemLabel>Shopping list</FormItemLabel>
          <RadioGroup>
            <Radio value='Eggs'>Eggs</Radio>
            <Radio value='Milk'>Milk</Radio>
            <Radio value='Coffee'>Coffee</Radio>
          </RadioGroup>
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='properties' level='2' spacing>
        Props table
      </Heading>

      <Heading className='toc' size='medium' id='Radiogroup-props' level='3' spacing>
        RadioGroup props
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
              <code>defaultValue</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>any</code>
            </Table.DataCell>
            <Table.DataCell>Set radio group's initial value</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>description</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Set radio group description</Table.DataCell>
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
            <Table.DataCell>Disables the radio group</Table.DataCell>
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
              <code>hideLegend</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Hides Radio group legend</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>name</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Sets internal radio group name</Table.DataCell>
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
              <code>(value: any[]) =&gt; void</code>
            </Table.DataCell>
            <Table.DataCell>Callback function for radio group changes</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>required</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Set radio group as required</Table.DataCell>
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
              <code>'medium' | 'small'</code>
            </Table.DataCell>
            <Table.DataCell>Sets radio group size</Table.DataCell>
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
            <Table.DataCell>Sets radio group value</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Radio-props' level='3' spacing>
        Radio props
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
              <code>description</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Set radio description</Table.DataCell>
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
            <Table.DataCell>Disables the radio</Table.DataCell>
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
            <Table.DataCell>Sets radio size</Table.DataCell>
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
            <Table.DataCell>Sets radio value</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
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

export default ComponentsRadiogroup
