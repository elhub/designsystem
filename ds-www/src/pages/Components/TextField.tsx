import {
  BodyText,
  Column,
  FlexStartDiv,
  FormItem,
  FormItemLabel,
  Heading,
  HorizontalSpace,
  Row,
  Table,
  TextField,
  VerticalSpace
} from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CodeDiv from '../../components/CodeDiv/CodeDiv'
import { IconSearch } from '@elhub/ds-icons'

const ComponentsTextField: React.FC = () => {
  const [value, setValue] = useState<string>('')

  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='textfield' level='1' spacing>
        TextField
      </Heading>
      <VerticalSpace />
      <BodyText>
        The default component is a simple text input field. It can be controlled or uncontrolled, and supports
        props for size, unit, and more.
      </BodyText>
      <VerticalSpace />
      <BodyText>
        The <code>TextField</code> component needs to be used inside a <code>FormItem</code> component, which
        handles:
        <ul>
          <li>
            <strong>Accessibility</strong>: Ensures proper <code>id</code> and <code>aria</code> attributes
            are applied to the input and associated label.
          </li>
          <li>
            <strong>State Management</strong>: Shares properties including <code>size</code> as well as{' '}
            <code>disabled</code> and <code>hasError</code> with its child components.
          </li>
          <li>
            <strong>Error and Description Linking</strong>: Associates the input field with error messages and
            helper text using <code>aria-describedby</code>.
          </li>
        </ul>
      </BodyText>
      <VerticalSpace />
      <BodyText>
        You can look at the code provided in the examples, as well as go to the{' '}
        <Link to={'/components/form-item'}>FormItem</Link> documentation for further usage and implementation.
      </BodyText>
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='textfield-default' level='2' spacing>
        Default component
      </Heading>
      <VerticalSpace size='2' />
      <DemoableDiv
        alignContent='center'
        code={`import { FormItem, FormItemLabel, TextField } from '@elhub/ds-components'

const Component = () => (
  <FormItem id="feedback">
    <FormItemLabel>Provide some feedback</FormItemLabel>
    <TextField />
  </FormItem>
)
`}
      >
        <FormItem id='feedback'>
          <FormItemLabel>Provide some feedback</FormItemLabel>
          <TextField />
        </FormItem>
      </DemoableDiv>
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='textfield-controlled' level='2' spacing>
        Controlled
      </Heading>
      <BodyText>
        The TextField component can be controlled by passing a value prop and an onChange function
      </BodyText>
      <VerticalSpace size='2' />
      <DemoableDiv
        alignContent='center'
        code={`import { FormItem, FormItemLabel, TextField } from '@elhub/ds-components'

const Component = () => {
  const [value, setValue] = useState<string>('')
  return (
    <FormItem id="feedback">
      <FormItemLabel>Feedback ({value.length} character${'{'}value.length === 1 ? '' : 's'})</FormItemLabel>
      <TextField
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />
    </FormItem>
  )
}`}
      >
        <FormItem id='feedback-car'>
          <FormItemLabel>
            Feedback ({value.length} character{value.length === 1 ? '' : 's'})
          </FormItemLabel>
          <TextField
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
            }}
          />
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='textfield-controlled' level='2' spacing>
        Type
      </Heading>
      <VerticalSpace size='2' />
      <DemoableDiv
        alignContent='center'
        code={`import { FormItem, FormItemLabel, TextField } from '@elhub/ds-components'

const Component = () => (
  <Row>
    <Column>
      <FormItem id="email"><FormItemLabel>Email</FormItemLabel><TextField type="email" /></FormItem>
      <FormItem id="number"><FormItemLabel>Number</FormItemLabel><TextField type="number" /></FormItem>
      <FormItem id="password"><FormItemLabel>Password</FormItemLabel><TextField type="password" /></FormItem>
    </Column>
    <Column>
      <FormItem id="tel"><FormItemLabel>Telephone</FormItemLabel><TextField type="tel" /></FormItem>
      <FormItem id="text"><FormItemLabel>Text</FormItemLabel><TextField type="text" /></FormItem>
      <FormItem id="url"><FormItemLabel>URL</FormItemLabel><TextField type="url" /></FormItem>
    </Column>
  </Row>
)
`}
      >
        <Row>
          <Column>
            <FormItem id='email'>
              <FormItemLabel>Email</FormItemLabel>
              <TextField type='email' />
            </FormItem>
            <VerticalSpace />
            <FormItem id='number'>
              <FormItemLabel>Number</FormItemLabel>
              <TextField type='number' />
            </FormItem>
            <VerticalSpace />
            <FormItem id='password'>
              <FormItemLabel>Password</FormItemLabel>
              <TextField type='password' />
            </FormItem>
          </Column>
          <Column>
            <FormItem id='tel'>
              <FormItemLabel>Telephone</FormItemLabel>
              <TextField type='tel' />
            </FormItem>
            <VerticalSpace />
            <FormItem id='text'>
              <FormItemLabel>Text</FormItemLabel>
              <TextField type='text' />
            </FormItem>
            <VerticalSpace />
            <FormItem id='url'>
              <FormItemLabel>URL</FormItemLabel>
              <TextField type='url' />
            </FormItem>
          </Column>
        </Row>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='select-size' level='2' spacing>
        Size
      </Heading>

      <CodeDiv expand={false} spacing>
        export type FormItemSize = 'large' | 'medium' | 'small'
      </CodeDiv>

      <VerticalSpace size='2' />

      <DemoableDiv
        alignContent='center'
        code={`import { FormItem, FormItemLabel, TextField } from '@elhub/ds-components'

const Component = () => (
  <FlexStartDiv>
    <FormItem id="small" size="small"><FormItemLabel>Small</FormItemLabel><TextField  placeholder="Small" /></FormItem>
    <HorizontalSpace />
    <FormItem id="medium" size="medium"><FormItemLabel>Medium</FormItemLabel><TextField  placeholder="Medium" /></FormItem>
    <HorizontalSpace />
    <FormItem id="large" size='large'><FormItemLabel>Large</FormItemLabel><TextField placeholder="Large" /></FormItem>
  </FlexStartDiv>
)
`}
      >
        <FlexStartDiv>
          <FormItem id='small' size='small'>
            <FormItemLabel>Small</FormItemLabel>
            <TextField placeholder='Small' />
          </FormItem>
          <HorizontalSpace />
          <FormItem id='medium' size='medium'>
            <FormItemLabel>Medium</FormItemLabel>
            <TextField placeholder='Medium' />
          </FormItem>
          <HorizontalSpace />
          <FormItem id='large' size='large'>
            <FormItemLabel>Large</FormItemLabel>
            <TextField placeholder='Large' />
          </FormItem>
        </FlexStartDiv>
      </DemoableDiv>

      <VerticalSpace />
      <Heading className='toc' size='medium' id='unit' level='2' spacing>
        Unit
      </Heading>

      <VerticalSpace />

      <BodyText>The unit prop is used for displaying a unit after the input field</BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { FormItem, FormItemLabel, TextField } from '@elhub/ds-components'

const Component = () => (
  <FlexStartDiv>
    <FormItem id="unit"><FormItemLabel>Large</FormItemLabel><TextField unit="kWh" /></FormItem>
  </FlexStartDiv>
)
`}
      >
        <FlexStartDiv>
          <FormItem id='unit'>
            <FormItemLabel>Large</FormItemLabel>
            <TextField unit='kWh' />
          </FormItem>
        </FlexStartDiv>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='icon' level='2' spacing>
        Icon
      </Heading>

      <VerticalSpace />

      <BodyText>
        If you want to use an icon, you can use the <code>icon</code> prop and specify an icon from
        @elhub/ds-icons
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { FormItem, FormItemLabel, TextField } from '@elhub/ds-components'

const Component = () => (
  <FlexStartDiv>
    <FormItem id="icon"><FormItemLabel>Icon</FormItemLabel><TextField icon={IconSearch} /></FormItem>
  </FlexStartDiv>
)
`}
      >
        <FlexStartDiv>
          <FormItem id='icon'>
            <FormItemLabel>Icon</FormItemLabel>
            <TextField icon={IconSearch} />
          </FormItem>
        </FlexStartDiv>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='select-disable' level='2' spacing>
        Disable
      </Heading>

      <VerticalSpace size='2' />

      <DemoableDiv
        alignContent='center'
        code={`import { Select } from '@elhub/ds-components'

const Component = () => {
  return (
  <FormItem id='disabled' inputProps={{ disabled: true }}>
    <FormItemLabel>Disabled</FormItemLabel>
     <TextField label='Disabled' />
  </FormItem>
  )
}`}
      >
        <FormItem id='disabled' inputProps={{ disabled: true }}>
          <FormItemLabel>Disabled</FormItemLabel>
          <TextField label='Disabled' />
        </FormItem>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='select-error' level='2' spacing>
        Error
      </Heading>

      <VerticalSpace />

      <BodyText>
        To propagate errors, use the <code>FormItem</code> component which will handle errors and display them
        in the correct position.
      </BodyText>

      <VerticalSpace size='2' />

      <DemoableDiv
        alignContent='center'
        code={`import { FormItem, FormItemLabel, TextField } from '@elhub/ds-components'

const Component = () => (
  <FormItem id="error"  error='You need to write something'>
    <FormItemLabel>Error</FormItemLabel>
    <TextField />
  </FormItem>
)
`}
      >
        <FormItem id='error' error='You need to write something'>
          <FormItemLabel>Error</FormItemLabel>
          <TextField />
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
              <code>text</code>
            </Table.DataCell>
            <Table.DataCell>Sets TextField value</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>defaultValue</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>text</code>
            </Table.DataCell>
            <Table.DataCell>Sets TextField default value</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>

          <Table.Row>
            <Table.DataCell>
              <code>type</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'date' | 'email' | 'number' | 'password' | 'tel' | 'text' | 'url'</code>
            </Table.DataCell>
            <Table.DataCell>Set TextField type, for better text input</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>text</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>unit</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>ReactNode</code>
            </Table.DataCell>
            <Table.DataCell>Used for rendering a unit after the input field</Table.DataCell>
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

export default ComponentsTextField
