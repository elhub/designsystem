import { BodyText, Heading, Table, VerticalSpace } from '@elhub/ds-components'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import { SelectDefaultExample } from './examples/Default'
import selectDefaultSource from './examples/Default.tsx?raw'
import { SelectControlledExample } from './examples/Controlled'
import selectControlledSource from './examples/Controlled.tsx?raw'
import { SelectSizesExample } from './examples/Sizes'
import selectSizesSource from './examples/Sizes.tsx?raw'
import { SelectDisabledExample } from './examples/Disabled'
import selectDisabledSource from './examples/Disabled.tsx?raw'
import { SelectErrorExample } from './examples/Error'
import selectErrorSource from './examples/Error.tsx?raw'

const ComponentsSelect = () => {
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

      <DemoableDiv alignContent='center' code={selectDefaultSource} codeHighlighter='shiki'>
        <SelectDefaultExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='select-controlled' level='2' spacing>
        Controlled
      </Heading>
      <VerticalSpace />

      <BodyText>
        To control the component, set the <code>value</code> and the <code>onValueChange</code> props.
      </BodyText>

      <DemoableDiv alignContent='center' code={selectControlledSource} codeHighlighter='shiki'>
        <SelectControlledExample />
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

      <CodeDiv expand={false} highlighter='shiki' spacing>
        export type FormItemSize = 'large' | 'medium' | 'small'
      </CodeDiv>

      <DemoableDiv alignContent='center' code={selectSizesSource} codeHighlighter='shiki'>
        <SelectSizesExample />
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

      <DemoableDiv alignContent='center' code={selectDisabledSource} codeHighlighter='shiki'>
        <SelectDisabledExample />
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

      <DemoableDiv alignContent='center' code={selectErrorSource} codeHighlighter='shiki'>
        <SelectErrorExample />
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
