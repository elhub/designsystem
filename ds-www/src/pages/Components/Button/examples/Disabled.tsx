import { Button, FlexBaseSpacedDiv, HorizontalSpace } from '@elhub/ds-components'

export const ButtonDisabledExample = () => {
  return (
    <FlexBaseSpacedDiv>
      <Button disabled>Submit recipe</Button>
      <HorizontalSpace />
      <Button variant='secondary' disabled>
        Submit recipe
      </Button>
      <HorizontalSpace />
      <Button variant='tertiary' disabled>
        Submit recipe
      </Button>
      <HorizontalSpace />
      <Button variant='caution' disabled>
        Delete recipe
      </Button>
    </FlexBaseSpacedDiv>
  )
}
