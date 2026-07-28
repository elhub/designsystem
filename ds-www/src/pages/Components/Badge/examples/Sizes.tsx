import { Badge, FlexCenterDiv, HorizontalSpace } from '@elhub/ds-components'
import { IconQualitiesCircle } from '@elhub/ds-icons'

export const BadgeSizesExample = () => {
  return (
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
}
