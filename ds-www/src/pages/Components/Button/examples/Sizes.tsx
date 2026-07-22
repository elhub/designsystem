import { Button, FlexBaseSpacedDiv, HorizontalSpace } from '@elhub/ds-components'

export const ButtonSizesExample = () => {
  return (
    <FlexBaseSpacedDiv>
      <Button size='large'>Medium</Button>
      <HorizontalSpace />
      <Button size='medium'>Small</Button>
      <HorizontalSpace />
      <Button size='small'>Xsmall</Button>
    </FlexBaseSpacedDiv>
  )
}
