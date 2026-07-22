import { BodyText, Heading, Table, VerticalSpace } from '@elhub/ds-components'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'
import { FormItemDescriptionExample } from './examples/Description'
import formItemDescriptionSource from './examples/Description.tsx?raw'
import { FormItemDisabledExample } from './examples/Disabled'
import formItemDisabledSource from './examples/Disabled.tsx?raw'
import { FormItemErrorExample } from './examples/Error'
import formItemErrorSource from './examples/Error.tsx?raw'
import { FormItemHideLabelExample } from './examples/HideLabel'
import formItemHideLabelSource from './examples/HideLabel.tsx?raw'
import { FormItemRequiredExample } from './examples/Required'
import formItemRequiredSource from './examples/Required.tsx?raw'
import { FormItemSizesExample } from './examples/Sizes'
import formItemSizesSource from './examples/Sizes.tsx?raw'
import { FormItemUsageExample } from './examples/Usage'
import formItemUsageSource from './examples/Usage.tsx?raw'

const ComponentsFormItem: React.FC = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='form-item' level='1' spacing>
        FormItem
      </Heading>
      <VerticalSpace />
      <BodyText>
        The <code>FormItem</code> component is a versatile container used in forms to wrap input elements like{' '}
        <code>TextField</code>, <code>Select</code>, <code>Datepicker</code>, and other form controls. It is
        designed to handle common label and helper functionality, making form creation more consistent and
        accessible across the application.
      </BodyText>
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='form-item-usage' level='2' spacing>
        Usage
      </Heading>
      <VerticalSpace />
      <BodyText>
        To use <code>FormItem</code>, wrap the input element (such as <code>TextField</code>) as a child of{' '}
        <code>FormItem</code>. Use <code>FormItemLabel</code> within the <code>FormItem</code> to define the
        label text and associate it with the input’s id for accessibility.
      </BodyText>
      <DemoableDiv alignContent='center' code={formItemUsageSource} codeHighlighter='shiki'>
        <FormItemUsageExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='select-hide-label' level='2' spacing>
        Hide label
      </Heading>

      <BodyText>
        To hide the label text from view while keeping it accessible to screen readers, use the{' '}
        <code>hideLabel</code> prop in <code>FormItemLabel</code>.
      </BodyText>
      <VerticalSpace />

      <DemoableDiv alignContent='center' code={formItemHideLabelSource} codeHighlighter='shiki'>
        <FormItemHideLabelExample />
      </DemoableDiv>

      <Heading className='toc' size='medium' id='form-item-sizes' level='2' spacing>
        Sizes
      </Heading>
      <VerticalSpace />
      <BodyText>
        The <code>FormItem</code> component supports three sizes: <code>small</code>, <code>medium</code>, and{' '}
        <code>large</code>. The default size is <code>medium</code>.
      </BodyText>
      <VerticalSpace />
      <CodeDiv expand={false} highlighter='shiki' spacing>
        export type FormItemSize = 'large' | 'medium' | 'small'
      </CodeDiv>

      <DemoableDiv alignContent='center' code={formItemSizesSource} codeHighlighter='shiki'>
        <FormItemSizesExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='form-item-sizes' level='2' spacing>
        Error
      </Heading>
      <VerticalSpace />
      <BodyText>
        To indicate that if a field contains error, add the <code>error</code> prop to the{' '}
        <code>FormItem</code>.
      </BodyText>
      <VerticalSpace />

      <DemoableDiv alignContent='center' code={formItemErrorSource} codeHighlighter='shiki'>
        <FormItemErrorExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='form-item-sizes' level='2' spacing>
        Disabled
      </Heading>
      <VerticalSpace />
      <BodyText>
        To indicate that if a field is diabled, add the <code>disabled</code> prop to the{' '}
        <code>inputProps</code> in <code>FormItem</code>.
      </BodyText>
      <VerticalSpace />

      <DemoableDiv alignContent='center' code={formItemDisabledSource} codeHighlighter='shiki'>
        <FormItemDisabledExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='form-item-required' level='2' spacing>
        Required
      </Heading>
      <VerticalSpace />
      <BodyText>
        To indicate that a field is required, add the <code>required</code> prop to the{' '}
        <code>inputProps</code> in <code>FormItem</code>.
      </BodyText>
      <VerticalSpace />

      <DemoableDiv alignContent='center' code={formItemRequiredSource} codeHighlighter='shiki'>
        <FormItemRequiredExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='form-item-desc' level='2' spacing>
        Description
      </Heading>
      <VerticalSpace />
      <BodyText>
        You may need to provide additional information about a form field. Use the{' '}
        <code>FormItemDescription</code> component to add a description to the <code>FormItem</code>.
      </BodyText>
      <VerticalSpace />

      <DemoableDiv alignContent='center' code={formItemDescriptionSource} codeHighlighter='shiki'>
        <FormItemDescriptionExample />
      </DemoableDiv>
      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='properties' level='2' spacing>
        Props table
      </Heading>

      <VerticalSpace size='1' />

      <BodyText size='large'>
        <code>FormItem</code>
      </BodyText>
      <VerticalSpace size='1' />
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
              <code>id</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>
              The <code>id</code> of the input field associated with this label, used for accessibility.
            </Table.DataCell>
            <Table.DataCell>No (generated if not provided)</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>hideLabel</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Visually hide the FormItemLabel</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>false</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>error</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>
              Sets an error state for the <code>FormItem</code>, allowing consistent styling across form
              items.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>className</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>
              Additional class name for custom styling of the <code>FormItem</code> container.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>children</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>ReactNode</code>
            </Table.DataCell>
            <Table.DataCell>
              The form control element (e.g., <code>TextField</code>, <code>Select</code>,{' '}
              <code>Datepicker</code>) to wrap with <code>FormItem</code>.
            </Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>inputProps</code>
            </Table.DataCell>
            <Table.DataCell style={{ wordWrap: 'break-word', maxWidth: '188px' }}>
              <code>React.InputHTMLAttributes&lt;HTMLInputElement&gt;</code>
            </Table.DataCell>
            <Table.DataCell>
              Attributes applied to the input element, such as <code>disabled</code> or <code>required</code>.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <VerticalSpace size='2' />

      <BodyText size='large'>
        <code>FormItemLabel</code>
      </BodyText>
      <VerticalSpace size='1' />
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
              <code>className</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>
              Additional class name for custom styling of the <code>FormItemLabel</code>.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>htmlFor</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>
              The <code>id</code> of the input field associated with this label, used for accessibility. If
              not provided, it will use the `id` from the parent <code>FormItem</code> context.
            </Table.DataCell>
            <Table.DataCell>No (must be provided via context if not directly)</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>hideLabel</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>
              Visually hide the <code>FormItemLabel</code>.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>false</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>helperText</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Helper text displayed as a tooltip next to the label.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>weight</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'light' | 'regular' | 'semibold' | 'bold'</code>
            </Table.DataCell>
            <Table.DataCell>Font weight for the label text.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>'semibold'</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>children</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>ReactNode</code>
            </Table.DataCell>
            <Table.DataCell>The content of the label.</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>...rest</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>BodyTextProps</code>
            </Table.DataCell>
            <Table.DataCell>
              Additional props passed to the underlying <code>BodyText</code> component.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <VerticalSpace size='2' />

      <BodyText size='large'>
        <code>FormItemDescription</code>
      </BodyText>
      <VerticalSpace size='1' />
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
              <code>className</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>
              Additional class name for custom styling of the <code>FormItemDescription</code>.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>htmlFor</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>
              The <code>id</code> of the input field associated with this description, used for accessibility.
              If not provided, it will use the `id` from the parent <code>FormItem</code> context.
            </Table.DataCell>
            <Table.DataCell>No (must be provided via context if not directly)</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>children</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>ReactNode</code>
            </Table.DataCell>
            <Table.DataCell>The content of the description.</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>...rest</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>BodyTextProps</code>
            </Table.DataCell>
            <Table.DataCell>
              Additional props passed to the underlying <code>BodyText</code> component.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  )
}

export default ComponentsFormItem
