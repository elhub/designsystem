import { FlexDiv, HorizontalSpace } from '@elhub/ds-components'
import { IconCross } from '@elhub/ds-icons'

export const CustomisingIconsExample = () => {
  return (
    <FlexDiv>
      <IconCross size='medium' />
      <HorizontalSpace />
      <IconCross size='medium' color='var(--eds-color-feedback-error-dark-primary)' />
      <HorizontalSpace />
      <IconCross
        size='medium'
        style={{ transform: 'perspective(70px) rotateX(15deg) rotateY(45deg) rotateZ(-15deg)' }}
      />
      <HorizontalSpace />
      <IconCross size='medium' style={{ backgroundColor: 'var(--eds-color-feedback-error-dark-primary)' }} />
    </FlexDiv>
  )
}
