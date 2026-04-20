import {
  BodyText,
  FormItem,
  FormItemLabel,
  Heading,
  Table,
  Textarea,
  VerticalSpace
} from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React, { useState } from 'react'

const ComponentsTextarea = () => {
  const [value, setValue] = useState<string>('')

  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='textarea' level='1' spacing>
        TextArea
      </Heading>
      <BodyText>
        The <code>TextArea</code> component allows users to enter long text. When integrated with{' '}
        <code>FormItem</code> and <code>FormItemLabel</code>, it ensures proper structure, accessibility, and
        composability.
      </BodyText>
      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='textarea-default' level='2' spacing>
        Default component
      </Heading>
      <VerticalSpace size='2' />

      <DemoableDiv
        alignContent='center'
        code={`import { Textarea, FormItem, FormItemLabel } from '@elhub/ds-components'

const Component = () => {
  return (
    <FormItem>
      <FormItemLabel>Feedback</FormItemLabel>
      <Textarea placeholder='Placeholder text' />
    </FormItem>
  )
}`}
      >
        <FormItem>
          <FormItemLabel>Feedback</FormItemLabel>
          <Textarea placeholder='Placeholder text' />
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='textarea-controlled' level='2' spacing>
        Controlled
      </Heading>
      <VerticalSpace size='2' />

      <DemoableDiv
        alignContent='center'
        code={`import { Textarea, FormItem, FormItemLabel } from '@elhub/ds-components'

const Component = () => {
  const [value, setValue] = useState<string>('')

  return (
    <FormItem>
      <FormItemLabel>
        Feedback ({value.length} character{value.length === 1 ? '' : 's'})
      </FormItemLabel>
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </FormItem>
  )
}`}
      >
        <FormItem>
          <FormItemLabel>
            Feedback ({value.length} character{value.length === 1 ? '' : 's'})
          </FormItemLabel>
          <Textarea
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
            }}
          />
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='textarea-resizable' level='2' spacing>
        Resizable
      </Heading>
      <VerticalSpace size='2' />

      <DemoableDiv
        alignContent='center'
        code={`import { Textarea, FormItem, FormItemLabel } from '@elhub/ds-components'

const Component = () => {
  return (
    <FormItem>
      <FormItemLabel>Resizable</FormItemLabel>
      <Textarea resize />
    </FormItem>
  )
}`}
      >
        <FormItem>
          <FormItemLabel>Resizable</FormItemLabel>
          <Textarea resize />
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='textarea-rows' level='2' spacing>
        Set rows
      </Heading>
      <VerticalSpace size='2' />

      <DemoableDiv
        alignContent='center'
        code={`import { Textarea, FormItem, FormItemLabel } from '@elhub/ds-components'

const Component = () => {
  return (
    <FormItem>
      <FormItemLabel>Shows 10 rows</FormItemLabel>
      <Textarea
        rows={10}
        value={[...new Array(20).keys()].map((i) => 'Row ' + (i + 1)).join('\\n')}
      />
    </FormItem>
  )
}`}
      >
        <FormItem>
          <FormItemLabel>Shows 10 rows</FormItemLabel>
          <Textarea rows={10} value={[...new Array(20).keys()].map((i) => `Row ${i + 1}`).join('\n')} />
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='textarea-disable' level='2' spacing>
        Disabled
      </Heading>
      <VerticalSpace size='2' />

      <DemoableDiv
        alignContent='center'
        code={`import { Textarea, FormItem, FormItemLabel } from '@elhub/ds-components'

const Component = () => {
  return (
    <FormItem>
      <FormItemLabel>Disabled</FormItemLabel>
      <Textarea placeholder='This is placeholder text' disabled />
    </FormItem>
  )
}`}
      >
        <FormItem>
          <FormItemLabel>Disabled</FormItemLabel>
          <Textarea placeholder='This is placeholder text' disabled />
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='textarea-error' level='2' spacing>
        Error
      </Heading>
      <VerticalSpace size='2' />

      <DemoableDiv
        alignContent='center'
        code={`import { Textarea, FormItem, FormItemLabel } from '@elhub/ds-components'

const Component = () => {
  return (
    <FormItem>
      <FormItemLabel>Error</FormItemLabel>
      <Textarea error='You need to write something' />
    </FormItem>
  )
}`}
      >
        <FormItem error='You need to write something'>
          <FormItemLabel>Error</FormItemLabel>
          <Textarea />
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='textarea-hide-label' level='2' spacing>
        Hide label
      </Heading>
      <VerticalSpace size='2' />

      <DemoableDiv
        alignContent='center'
        code={`import { Textarea, FormItem } from '@elhub/ds-components'

const Component = () => {
  return (
    <FormItem>
      <Textarea label='Hidden label' hideLabel />
    </FormItem>
  )
}`}
      >
        <FormItem>
          <Textarea label='Hidden label' hideLabel />
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

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
              <code>value</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Sets textarea value</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>rows</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>number</code>
            </Table.DataCell>
            <Table.DataCell>initial row height</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>resize</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Lets the user resize</Table.DataCell>
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

export default ComponentsTextarea
