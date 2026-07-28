import { Badge, Heading, Table, VerticalSpace } from '@elhub/ds-components'
import {
  IconCheckCircle,
  IconClockCircle,
  IconCrossCircle,
  IconInformationCircle,
  IconQualitiesCircle,
  IconQuestionCircle
} from '@elhub/ds-icons'

export const BadgeAllVariantsExample = () => (
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
