import { Badge, FlexCenterDiv, HorizontalSpace } from '@elhub/ds-components'
import { IconCheckCircle, IconCrossCircle, IconQualitiesCircle, IconQuestionCircle } from '@elhub/ds-icons'

export const BadgeStatusesExample = () => {
  return (
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
}
