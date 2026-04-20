import {
  BodyText,
  FormItem,
  FormItemLabel,
  Heading,
  Select,
  SelectContent,
  SelectItem,
  Table,
  VerticalSpace
} from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React, { useState } from 'react'
import CodeDiv from '../../components/CodeDiv/CodeDiv'

const ComponentsSelect = () => {
  const [value1, setValue1] = useState<string>('')

  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='select' level='1' spacing>
        Select
      </Heading>
      <VerticalSpace />

      <BodyText>
        The <code>Select</code> component is a dropdown list that allows users to choose one option from a
        list. When used with <code>FormItem</code> and <code>FormItemLabel</code>, it ensures better
        accessibility and consistency.
      </BodyText>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='select-default' level='2' spacing>
        Default component
      </Heading>
      <BodyText>The default component comes in a medium size.</BodyText>
      <VerticalSpace />

      <DemoableDiv
        alignContent='center'
        code={`import { Select, SelectContent, SelectItem, FormItem, FormItemLabel } from '@elhub/ds-components'

const Component = () => {
  return (
    <FormItem>
      <FormItemLabel>Select a cake</FormItemLabel>
      <Select placeholder='Select a cake'>
        <SelectContent>
          <SelectItem value="chocolateCake">Chocolate cake</SelectItem>
          <SelectItem value="cheeseCake">Cheesecake</SelectItem>
          <SelectItem value="carrotCake">Carrot cake</SelectItem>
        </SelectContent>
      </Select>
    </FormItem>
  )
}`}
      >
        <FormItem>
          <FormItemLabel>Select a cake</FormItemLabel>
          <Select placeholder='Select a cake'>
            <SelectContent>
              <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
              <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
              <SelectItem value='carrotCake'>Carrot cake</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='select-controlled' level='2' spacing>
        Controlled
      </Heading>
      <VerticalSpace />

      <BodyText>
        To control the component, set the <code>value</code> and the <code>onValueChange</code> props.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Select, SelectContent, SelectItem, FormItem, FormItemLabel } from '@elhub/ds-components'

const Component = () => {
  const [value, setValue] = useState<string>('')

  return (
    <FormItem>
      <FormItemLabel>Select a cake</FormItemLabel>
      <Select
        value={value}
        onValueChange={(value) => setValue(value)}
        placeholder='Select a cake'
      >
        <SelectContent>
          <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
          <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
          <SelectItem value='carrotCake'>Carrot cake</SelectItem>
        </SelectContent>
      </Select>
      <BodyText>Selected cake: {value}</BodyText>
    </FormItem>
  )
}`}
      >
        <FormItem>
          <FormItemLabel>Select a cake</FormItemLabel>
          <Select
            value={value1}
            onValueChange={(value) => {
              setValue1(value)
            }}
            placeholder='Select a cake'
          >
            <SelectContent>
              <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
              <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
              <SelectItem value='carrotCake'>Carrot cake</SelectItem>
            </SelectContent>
          </Select>
          <BodyText>Selected cake: {value1}</BodyText>
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='select-size' level='2' spacing>
        Size
      </Heading>
      <VerticalSpace />

      <BodyText>
        The <code>size</code> prop can be one of the following values, derived from the <code>FormItem</code>{' '}
        component: <code>large</code>, <code>medium</code>, or <code>small</code>.
      </BodyText>

      <CodeDiv expand={false} spacing>
        export type FormItemSize = 'large' | 'medium' | 'small'
      </CodeDiv>

      <DemoableDiv
        alignContent='center'
        code={`import { Select, SelectContent, SelectItem, FormItem, FormItemLabel } from '@elhub/ds-components'

const Component = () => {
  const [value, setValue] = useState<string>('')

  return (
   <FormItem size='large'>
      <FormItemLabel>Select a large cake</FormItemLabel>
      <Select
        value={value1}
        onValueChange={(value) => {
          setValue1(value)
        }}
      >
        <SelectContent>
          <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
          <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
          <SelectItem value='carrotCake'>Carrot cake</SelectItem>
        </SelectContent>
      </Select>
    </FormItem>
    <FormItem size='medium'>
      <FormItemLabel>Select a medium cake</FormItemLabel>
      <Select
        value={value1}
        onValueChange={(value) => {
          setValue1(value)
        }}
      >
        <SelectContent>
          <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
          <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
          <SelectItem value='carrotCake'>Carrot cake</SelectItem>
        </SelectContent>
      </Select>
    </FormItem>
    <FormItem size='small'>
      <FormItemLabel>Select a small cake</FormItemLabel>
      <Select
        value={value1}
        onValueChange={(value) => {
          setValue1(value)
        }}
      >
        <SelectContent>
          <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
          <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
          <SelectItem value='carrotCake'>Carrot cake</SelectItem>
        </SelectContent>
      </Select>
    </FormItem>
  )
}`}
      >
        <div style={{ display: 'flex', gap: 24 }}>
          <FormItem size='large'>
            <FormItemLabel>Select a large cake</FormItemLabel>
            <Select
              value={value1}
              onValueChange={(value) => {
                setValue1(value)
              }}
            >
              <SelectContent>
                <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
                <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
                <SelectItem value='carrotCake'>Carrot cake</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
          <FormItem size='medium'>
            <FormItemLabel>Select a medium cake</FormItemLabel>
            <Select
              value={value1}
              onValueChange={(value) => {
                setValue1(value)
              }}
            >
              <SelectContent>
                <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
                <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
                <SelectItem value='carrotCake'>Carrot cake</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
          <FormItem size='small'>
            <FormItemLabel>Select a small cake</FormItemLabel>
            <Select
              value={value1}
              onValueChange={(value) => {
                setValue1(value)
              }}
            >
              <SelectContent>
                <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
                <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
                <SelectItem value='carrotCake'>Carrot cake</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
        </div>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='select-disable' level='2' spacing>
        Disable
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>disabled</code> prop deactivates the component, preventing interaction. Use the{' '}
        <code>FormItem</code> component to control the disabled state
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Select, SelectContent, SelectItem, FormItem, FormItemLabel } from '@elhub/ds-components'

const Component = () => {
  return (
    <FormItem inputProps={{ disabled: true }}>
      <FormItemLabel>Disabled select</FormItemLabel>
      <Select placeholder='This is disabled' disabled>
        <SelectContent>
          <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
          <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
          <SelectItem value='carrotCake'>Carrot cake</SelectItem>
        </SelectContent>
      </Select>
    </FormItem>
  )
}`}
      >
        <FormItem inputProps={{ disabled: true }}>
          <FormItemLabel>Disabled select</FormItemLabel>
          <Select placeholder='This is disabled'>
            <SelectContent>
              <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
              <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
              <SelectItem value='carrotCake'>Carrot cake</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='select-error' level='2' spacing>
        Error
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>error</code> prop sets an error state, indicating an invalid input. Use the{' '}
        <code>FormItem</code> component to control the error message.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Select, SelectContent, SelectItem, FormItem, FormItemLabel } from '@elhub/ds-components'

const Component = () => {
  return (
    <FormItem  error='This field is required'>
      <FormItemLabel>Error state</FormItemLabel>
      <Select placeholder='You must select a cake'>
        <SelectContent>
          <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
          <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
          <SelectItem value='carrotCake'>Carrot cake</SelectItem>
        </SelectContent>
      </Select>
    </FormItem>
  )
}`}
      >
        <FormItem error='This field is required'>
          <FormItemLabel>Error state</FormItemLabel>
          <Select placeholder='You must select a cake'>
            <SelectContent>
              <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
              <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
              <SelectItem value='carrotCake'>Carrot cake</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='properties' level='2' spacing>
        Props table
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
              <code>disable</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Disables the select</Table.DataCell>
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
              <code>'large' |'medium' | 'small'</code>
            </Table.DataCell>
            <Table.DataCell>Sets select size</Table.DataCell>
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
            <Table.DataCell>Sets select value</Table.DataCell>
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

export default ComponentsSelect
