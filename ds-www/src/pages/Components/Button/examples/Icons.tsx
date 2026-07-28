import { Button, FlexDiv, HorizontalSpace, VerticalSpace } from '@elhub/ds-components'
import { IconChevronLeft as KeyboardArrowLeft, IconChevronRight as KeyboardArrowRight } from '@elhub/ds-icons'

export const ButtonIconsExample = () => {
  return (
    <>
      <FlexDiv>
        <Button size='large' icon={KeyboardArrowLeft} iconPosition='left'>
          Previous
        </Button>
        <HorizontalSpace />
        <Button size='large' icon={KeyboardArrowRight} iconPosition='right'>
          Next
        </Button>
        <HorizontalSpace />
        <Button size='large' icon={KeyboardArrowRight} />
      </FlexDiv>
      <VerticalSpace />
      <FlexDiv>
        <Button icon={KeyboardArrowLeft} iconPosition='left'>
          Previous
        </Button>
        <HorizontalSpace />
        <Button icon={KeyboardArrowRight} iconPosition='right'>
          Next
        </Button>
        <HorizontalSpace />
        <Button icon={KeyboardArrowRight} />
      </FlexDiv>
      <VerticalSpace />
      <FlexDiv>
        <Button size='small' icon={KeyboardArrowLeft} iconPosition='left'>
          Previous
        </Button>
        <HorizontalSpace />
        <Button size='small' icon={KeyboardArrowRight} iconPosition='right'>
          Next
        </Button>
        <HorizontalSpace />
        <Button size='small' icon={KeyboardArrowRight} />
      </FlexDiv>
    </>
  )
}
