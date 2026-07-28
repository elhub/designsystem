import { BodyText, Heading, Table, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import { TextAreaDefaultExample } from './examples/Default'
import textAreaDefaultSource from './examples/Default.tsx?raw'
import { TextAreaControlledExample } from './examples/Controlled'
import textAreaControlledSource from './examples/Controlled.tsx?raw'
import { TextAreaResizableExample } from './examples/Resizable'
import textAreaResizableSource from './examples/Resizable.tsx?raw'
import { TextAreaRowsExample } from './examples/Rows'
import textAreaRowsSource from './examples/Rows.tsx?raw'
import { TextAreaDisabledExample } from './examples/Disabled'
import textAreaDisabledSource from './examples/Disabled.tsx?raw'
import { TextAreaErrorExample } from './examples/Error'
import textAreaErrorSource from './examples/Error.tsx?raw'
import { TextAreaHiddenLabelExample } from './examples/HiddenLabel'
import textAreaHiddenLabelSource from './examples/HiddenLabel.tsx?raw'

const ComponentsTextarea = () => {
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

      <DemoableDiv alignContent='center' code={textAreaDefaultSource} codeHighlighter='shiki'>
        <TextAreaDefaultExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='textarea-controlled' level='2' spacing>
        Controlled
      </Heading>
      <VerticalSpace size='2' />

      <DemoableDiv alignContent='center' code={textAreaControlledSource} codeHighlighter='shiki'>
        <TextAreaControlledExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='textarea-resizable' level='2' spacing>
        Resizable
      </Heading>
      <VerticalSpace size='2' />

      <DemoableDiv alignContent='center' code={textAreaResizableSource} codeHighlighter='shiki'>
        <TextAreaResizableExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='textarea-rows' level='2' spacing>
        Set rows
      </Heading>
      <VerticalSpace size='2' />

      <DemoableDiv alignContent='center' code={textAreaRowsSource} codeHighlighter='shiki'>
        <TextAreaRowsExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='textarea-disable' level='2' spacing>
        Disabled
      </Heading>
      <VerticalSpace size='2' />

      <DemoableDiv alignContent='center' code={textAreaDisabledSource} codeHighlighter='shiki'>
        <TextAreaDisabledExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='textarea-error' level='2' spacing>
        Error
      </Heading>
      <VerticalSpace size='2' />

      <DemoableDiv alignContent='center' code={textAreaErrorSource} codeHighlighter='shiki'>
        <TextAreaErrorExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='textarea-hide-label' level='2' spacing>
        Hide label
      </Heading>
      <VerticalSpace size='2' />

      <DemoableDiv alignContent='center' code={textAreaHiddenLabelSource} codeHighlighter='shiki'>
        <TextAreaHiddenLabelExample />
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
