import { BodyText, Heading, Table, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import { ToggleGroupDefaultExample } from './examples/Default'
import toggleGroupDefaultSource from './examples/Default.tsx?raw'
import { ToggleGroupSizesExample } from './examples/Sizes'
import toggleGroupSizesSource from './examples/Sizes.tsx?raw'
import { ToggleGroupIconsExample } from './examples/Icons'
import toggleGroupIconsSource from './examples/Icons.tsx?raw'
import { ToggleGroupIconsAndLabelsExample } from './examples/IconsAndLabels'
import toggleGroupIconsAndLabelsSource from './examples/IconsAndLabels.tsx?raw'
import { ToggleGroupLabelsExample } from './examples/Labels'
import toggleGroupLabelsSource from './examples/Labels.tsx?raw'
import { ToggleGroupMultipleExample } from './examples/Multiple'
import toggleGroupMultipleSource from './examples/Multiple.tsx?raw'

const ComponentsToggleGroup = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='togglegroup' level='1' spacing>
        ToggleGroup
      </Heading>
      <VerticalSpace size='2' />
      <BodyText>
        The <code>ToggleGroup</code> component is a radio-group style component that asks user to choose one
        option, but in a more horizontal style with no need for big labels. Just like the <code>Tabs</code>{' '}
        component, but without the purpose of changing page content.
      </BodyText>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='togglegroup-default' level='2' spacing>
        Default component
      </Heading>

      <BodyText>The default toggle group has a small size</BodyText>

      <DemoableDiv alignContent='center' code={toggleGroupDefaultSource} codeHighlighter='shiki'>
        <ToggleGroupDefaultExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='togglegroup-size' level='2' spacing>
        Size
      </Heading>
      <BodyText>
        The size prop can be one of the following 3 strings: <code>small, medium, large</code>
      </BodyText>

      <DemoableDiv alignContent='center' code={toggleGroupSizesSource} codeHighlighter='shiki'>
        <ToggleGroupSizesExample />
      </DemoableDiv>
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='togglegroup-icons' level='2' spacing>
        Icons
      </Heading>
      <VerticalSpace size='2' />
      <DemoableDiv alignContent='center' code={toggleGroupIconsSource} codeHighlighter='shiki'>
        <ToggleGroupIconsExample />
      </DemoableDiv>
      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='togglegroup-icons-labels' level='2' spacing>
        Icons and labels
      </Heading>
      <VerticalSpace size='2' />
      <DemoableDiv alignContent='center' code={toggleGroupIconsAndLabelsSource} codeHighlighter='shiki'>
        <ToggleGroupIconsAndLabelsExample />
      </DemoableDiv>
      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='togglegroup-label' level='2' spacing>
        Label
      </Heading>
      <VerticalSpace size='2' />
      <BodyText>
        Use the <code>label</code> prop to provide a descriptive label for the toggle group. The label is
        displayed above the toggle group and is properly associated with it for accessibility.
      </BodyText>
      <DemoableDiv alignContent='center' code={toggleGroupLabelsSource} codeHighlighter='shiki'>
        <ToggleGroupLabelsExample />
      </DemoableDiv>
      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='togglegroup-multiple' level='2' spacing>
        Multiple
      </Heading>
      <VerticalSpace size='2' />
      <DemoableDiv alignContent='center' code={toggleGroupMultipleSource} codeHighlighter='shiki'>
        <ToggleGroupMultipleExample />
      </DemoableDiv>
      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='properties' level='2' spacing>
        Props table
      </Heading>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='properties-togglegroup' level='2' spacing>
        ToggleGroup
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
              <code>size</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'small' | 'medium' | 'large'</code>
            </Table.DataCell>
            <Table.DataCell>Sets toggle group size</Table.DataCell>
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
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Sets toggle group value</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>defaultValue</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Sets toggle group default value</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>label</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>React.ReactNode</code>
            </Table.DataCell>
            <Table.DataCell>Label describing the toggle group, displayed above the options</Table.DataCell>
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
              <code>'single' | 'multiple'</code>
            </Table.DataCell>
            <Table.DataCell>Allow multiple group label selections</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell></Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>onChange</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>(value: string) =&gt; void</code>
            </Table.DataCell>
            <Table.DataCell>Callback for selected toggle</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='properties-togglegroup-item' level='2' spacing>
        ToggleGroup.Item
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
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Sets toggle group item value</Table.DataCell>
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

export default ComponentsToggleGroup
