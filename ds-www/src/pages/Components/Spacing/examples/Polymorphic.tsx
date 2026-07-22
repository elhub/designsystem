import { BodyText, HorizontalSpace } from '@elhub/ds-components'

export const PolymorphicSpacingExample = () => (
  <BodyText>
    this is a
    <HorizontalSpace as='span' size='10' />
    long space with a <code>div</code> element.
  </BodyText>
)
