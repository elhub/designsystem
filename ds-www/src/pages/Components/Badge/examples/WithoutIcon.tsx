import { Badge, FlexCenterDiv, HorizontalSpace } from '@elhub/ds-components'

export const BadgeWithoutIconExample = () => {
  return (
    <FlexCenterDiv>
      <Badge>Ongoing</Badge>
      <HorizontalSpace />
      <Badge variant='block' status='approved'>
        Approved
      </Badge>
    </FlexCenterDiv>
  )
}
