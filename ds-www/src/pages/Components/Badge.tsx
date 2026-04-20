import {
  Badge,
  BodyText,
  FlexCenterDiv,
  Heading,
  HorizontalSpace,
  Table,
  VerticalSpace
} from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import {
  IconCheckCircle,
  IconClockCircle,
  IconCrossCircle,
  IconInformationCircle,
  IconQualitiesCircle,
  IconQuestionCircle
} from '@elhub/ds-icons'

const AllVariants: React.FC = () => (
  <>
    <Heading>Medium size</Heading>
    <Table>
      <Table.Body>
        <Table.Row>
          <Table.DataCell>
            <Badge size='medium' status='ongoing' variant='default' icon={IconQualitiesCircle}>
              Ongoing
            </Badge>
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='medium' status='failed' variant='default' icon={IconCrossCircle}>
              Failed
            </Badge>
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='medium' status='approved-with-warning' variant='default' icon={IconQuestionCircle}>
              Approved with warning
            </Badge>
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='medium' status='approved' variant='default' icon={IconCheckCircle}>
              Approved
            </Badge>
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='medium' status='stopped' variant='default' icon={IconInformationCircle}>
              Stopped
            </Badge>
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='medium' status='temporarily-stopped' variant='default' icon={IconClockCircle}>
              Temporarily stopped
            </Badge>
          </Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>
            <Badge size='medium' status='ongoing' variant='block' icon={IconQualitiesCircle}>
              Ongoing
            </Badge>
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='medium' status='failed' variant='block' icon={IconCrossCircle}>
              Failed
            </Badge>
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='medium' status='approved-with-warning' variant='block' icon={IconQuestionCircle}>
              Approved with warning
            </Badge>
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='medium' status='approved' variant='block' icon={IconCheckCircle}>
              Approved
            </Badge>
          </Table.DataCell>
          <Table.DataCell>
            <Badge size='medium' status='stopped' variant='block' icon={IconCheckCircle}>
              Stopped
            </Badge>
          </Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>
            <Badge size='medium' status='ongoing' variant='simple-dot' icon={IconQualitiesCircle} />
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='medium' status='failed' variant='simple-dot' icon={IconCrossCircle} />
          </Table.DataCell>

          <Table.DataCell>
            <Badge
              size='medium'
              status='approved-with-warning'
              variant='simple-dot'
              icon={IconQuestionCircle}
            />
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='medium' status='approved' variant='simple-dot' icon={IconCheckCircle} />
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='medium' status='stopped' variant='simple-dot' icon={IconInformationCircle} />
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='medium' status='temporarily-stopped' variant='simple-dot' icon={IconClockCircle} />
          </Table.DataCell>
        </Table.Row>
      </Table.Body>
    </Table>
    <VerticalSpace size='3' />
    <Heading>Small size</Heading>
    <Table>
      <Table.Body>
        <Table.Row>
          <Table.DataCell>
            <Badge size='small' status='ongoing' variant='default' icon={IconQualitiesCircle}>
              Ongoing
            </Badge>
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='small' status='failed' variant='default' icon={IconCrossCircle}>
              Failed
            </Badge>
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='small' status='approved-with-warning' variant='default' icon={IconQuestionCircle}>
              Approved with warning
            </Badge>
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='small' status='approved' variant='default' icon={IconCheckCircle}>
              Approved
            </Badge>
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='small' status='stopped' variant='default' icon={IconInformationCircle}>
              Stopped
            </Badge>
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='small' status='temporarily-stopped' variant='default' icon={IconClockCircle}>
              Temporarily stopped
            </Badge>
          </Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>
            <Badge size='small' status='ongoing' variant='block' icon={IconQualitiesCircle}>
              Ongoing
            </Badge>
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='small' status='failed' variant='block' icon={IconCrossCircle}>
              Failed
            </Badge>
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='small' status='approved-with-warning' variant='block' icon={IconQuestionCircle}>
              Approved with warning
            </Badge>
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='small' status='approved' variant='block' icon={IconCheckCircle}>
              Approved
            </Badge>
          </Table.DataCell>
          <Table.DataCell>
            <Badge size='small' status='stopped' variant='block' icon={IconCheckCircle}>
              Stopped
            </Badge>
          </Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>
            <Badge size='small' status='ongoing' variant='simple-dot' icon={IconQualitiesCircle} />
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='small' status='failed' variant='simple-dot' icon={IconCrossCircle} />
          </Table.DataCell>

          <Table.DataCell>
            <Badge
              size='small'
              status='approved-with-warning'
              variant='simple-dot'
              icon={IconQuestionCircle}
            />
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='small' status='approved' variant='simple-dot' icon={IconCheckCircle} />
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='small' status='stopped' variant='simple-dot' icon={IconInformationCircle} />
          </Table.DataCell>

          <Table.DataCell>
            <Badge size='small' status='temporarily-stopped' variant='simple-dot' icon={IconClockCircle} />
          </Table.DataCell>
        </Table.Row>
      </Table.Body>
    </Table>
  </>
)

const DefaultBadge: React.FC = () => <Badge icon={IconQualitiesCircle}>Ongoing</Badge>

const SizeBadge: React.FC = () => (
  <FlexCenterDiv>
    <Badge size='small' icon={IconQualitiesCircle}>
      Badge
    </Badge>
    <HorizontalSpace />
    <Badge size='medium' icon={IconQualitiesCircle}>
      Badge
    </Badge>
  </FlexCenterDiv>
)

const StatusBadge: React.FC = () => (
  <FlexCenterDiv>
    <Badge status='ongoing' variant='block' icon={IconQualitiesCircle}>
      Ongoing
    </Badge>
    <HorizontalSpace />
    <Badge status='failed' variant='block' icon={IconCrossCircle}>
      Failed
    </Badge>
    <HorizontalSpace />
    <Badge status='approved-with-warning' variant='block' icon={IconQuestionCircle}>
      Approved with warning
    </Badge>
    <HorizontalSpace />
    <Badge status='approved' variant='block' icon={IconCheckCircle}>
      Approved
    </Badge>
  </FlexCenterDiv>
)

const VariantBadge: React.FC = () => (
  <FlexCenterDiv>
    <Badge variant='default' icon={IconQualitiesCircle}>
      Badge
    </Badge>
    <HorizontalSpace />
    <Badge variant='block' icon={IconQualitiesCircle}>
      Badge
    </Badge>
    <HorizontalSpace />
    <Badge variant='simple-dot' icon={IconQualitiesCircle} />
  </FlexCenterDiv>
)

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
      <DemoableDiv
        alignContent='center'
        code={`
// import
import { Badge, FlexCenterDiv, HorizontalSpace } from '@elhub/ds-components'
import {
  IconQualitiesCircle,
  IconCrossCircle,
  IconQuestionCircle,
  IconCheckCircle,
  IconInformationCircle,
  IconClockCircle
} from '@elhub/ds-icons'

// render
${reactElementToJSXString(AllVariants({}))}
`}
      >
        <AllVariants />
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
      <DemoableDiv
        alignContent='center'
        code={`
// import
import { Badge } from '@elhub/ds-components'
import { IconQualitiesCircle } from '@elhub/ds-icons'

// render
${reactElementToJSXString(DefaultBadge({}))}
`}
      >
        <DefaultBadge />
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

      <DemoableDiv
        alignContent='center'
        code={`
// import
import { Badge, FlexCenterDiv } from '@elhub/ds-components'
import { IconQualitiesCircle } from '@elhub/ds-icons'

// render
${reactElementToJSXString(SizeBadge({}))}
`}
      >
        <SizeBadge />
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

      <DemoableDiv
        alignContent='center'
        code={`
// import
import { Badge, FlexCenterDiv, HorizontalSpace } from '@elhub/ds-components'
import {
  IconQualitiesCircle,
  IconCrossCircle,
  IconQuestionCircle,
  IconCheckCircle,
  IconInformationCircle,
  IconClockCircle
} from '@elhub/ds-icons'

// render
${reactElementToJSXString(StatusBadge({}))}
`}
      >
        <StatusBadge />
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

      <DemoableDiv
        alignContent='center'
        code={`
// import
import { Badge, FlexCenterDiv } from '@elhub/ds-components'
import { IconQualitiesCircle } from '@elhub/ds-icons'

// render
${reactElementToJSXString(VariantBadge({}))}
`}
      >
        <VariantBadge />
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
              <code>React.ReactNode</code>
            </Table.DataCell>
            <Table.DataCell>Renders an icon on the left side</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
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
