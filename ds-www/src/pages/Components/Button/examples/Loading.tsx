import { Button, FlexBaseSpacedDiv, HorizontalSpace } from '@elhub/ds-components'

export const ButtonLoadingExample = () => {
  return (
    <FlexBaseSpacedDiv>
      <Button size='large' loading>
        Sending...
      </Button>
      <HorizontalSpace />
      <Button loading>Sending...</Button>
      <HorizontalSpace />
      <Button size='small' loading>
        Sending...
      </Button>
    </FlexBaseSpacedDiv>
  )
}
