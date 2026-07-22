import { Badge, FlexCenterDiv, HorizontalSpace } from '@elhub/ds-components'
import { IconQualitiesCircle } from '@elhub/ds-icons'

export const BadgeVariantsExample = () => {
  return (
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
}
