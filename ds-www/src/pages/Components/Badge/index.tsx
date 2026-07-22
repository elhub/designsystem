import { BodyText, Heading, Table, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'
import { BadgeAllVariantsExample } from './examples/AllVariants'
import badgeAllVariantsSource from './examples/AllVariants.tsx?raw'
import { BadgeDefaultExample } from './examples/Default'
import badgeDefaultSource from './examples/Default.tsx?raw'
import { BadgeSizesExample } from './examples/Sizes'
import badgeSizesSource from './examples/Sizes.tsx?raw'
import { BadgeStatusesExample } from './examples/Statuses'
import badgeStatusesSource from './examples/Statuses.tsx?raw'
import { BadgeVariantsExample } from './examples/Variants'
import badgeVariantsSource from './examples/Variants.tsx?raw'
import { BadgeWithoutIconExample } from './examples/WithoutIcon'
import badgeWithoutIconSource from './examples/WithoutIcon.tsx?raw'

const ComponentsBadge: React.FC = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='badge' level='1' spacing>
        Badge
      </Heading>
      <VerticalSpace />
      <BodyText>
        Badges are used to inform users about the status of an object or a completed action.
      </BodyText>
      <VerticalSpace size='2' />
      {/* ------------------------------------------------------------------ */}
      <Heading className='toc' size='medium' id='badge-default' level='2' spacing>
        All variants
      </Heading>
      <DemoableDiv alignContent='center' code={badgeAllVariantsSource} codeHighlighter='shiki'>
        <BadgeAllVariantsExample />
      </DemoableDiv>
      <VerticalSpace size='3' />
      {/* ------------------------------------------------------------------ */}
      <Heading className='toc' size='medium' id='badge-default' level='2' spacing>
        Default component
      </Heading>
      <VerticalSpace />
      <BodyText>Showing the default component, i.e. a Badge component with the following props:</BodyText>
      <VerticalSpace />
      <ul>
        <li>Size: Medium</li>
        <li>Status: Ongoing</li>
        <li>Style: Default</li>
      </ul>
      <DemoableDiv alignContent='center' code={badgeDefaultSource} codeHighlighter='shiki'>
        <BadgeDefaultExample />
      </DemoableDiv>
      <VerticalSpace size='3' />
      {/* ------------------------------------------------------------------ */}
      <Heading className='toc' size='medium' id='badge-no-icon' level='2' spacing>
        Without icon
      </Heading>
      <VerticalSpace />
      <BodyText>Badges can also be rendered without an icon.</BodyText>
      <VerticalSpace />
      <DemoableDiv alignContent='center' code={badgeWithoutIconSource} codeHighlighter='shiki'>
        <BadgeWithoutIconExample />
      </DemoableDiv>
      <VerticalSpace size='3' />
      {/* ------------------------------------------------------------------ */}
      <Heading className='toc' size='medium' id='badge-size' level='2' spacing>
        Size variants
      </Heading>
      <BodyText>Showing small and medium size for component with</BodyText>
      <VerticalSpace />
      <ul>
        <li>Status: Ongoing</li>
        <li>Style: Block</li>
      </ul>
      <VerticalSpace />

      <DemoableDiv alignContent='center' code={badgeSizesSource} codeHighlighter='shiki'>
        <BadgeSizesExample />
      </DemoableDiv>
      <VerticalSpace size='3' />
      {/* ------------------------------------------------------------------ */}
      <Heading className='toc' size='medium' id='badge-status' level='2' spacing>
        Status variants
      </Heading>
      <BodyText>
        Showing all <code>status</code>-prop variants a component with
      </BodyText>
      <VerticalSpace />
      <ul>
        <li>Size: Medium</li>
        <li>Style: Block</li>
      </ul>
      <VerticalSpace />

      <DemoableDiv alignContent='center' code={badgeStatusesSource} codeHighlighter='shiki'>
        <BadgeStatusesExample />
      </DemoableDiv>
      <VerticalSpace size='3' />
      {/* ------------------------------------------------------------------ */}
      <Heading className='toc' size='medium' id='badge-variant' level='2' spacing>
        Variant variants
      </Heading>
      <BodyText>
        Showing all <code>variant</code>-prop variants a component with
      </BodyText>
      <VerticalSpace />
      <ul>
        <li>Size: Medium</li>
        <li>Status: Ongoing</li>
      </ul>
      <VerticalSpace />

      <DemoableDiv alignContent='center' code={badgeVariantsSource} codeHighlighter='shiki'>
        <BadgeVariantsExample />
      </DemoableDiv>
      <VerticalSpace size='3' />
      {/* ------------------------------------------------------------------ */}

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='badge-props' level='2' spacing>
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
              <code>icon</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>React.ComponentType&lt;SvgIconProps&gt;</code>
            </Table.DataCell>
            <Table.DataCell>Renders an icon on the left side</Table.DataCell>
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
            <Table.DataCell>Sets badge size</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>medium</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>status</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>
                'ongoing' | 'failed' | 'approved-with-warning' | 'approved' | 'stopped' |
                'temporarily-stopped'
              </code>
            </Table.DataCell>
            <Table.DataCell>Sets badge status</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>ongoing</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>variant</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'default' | 'block' | 'simple-dot'</code>
            </Table.DataCell>
            <Table.DataCell>Sets badge variant</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>default</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsBadge
