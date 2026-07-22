import { FlexDiv, HorizontalSpace, Tag } from '@elhub/ds-components'

export const TagVariantsExample = () => {
  return (
    <FlexDiv>
      <Tag variant='info'>info</Tag>
      <HorizontalSpace />
      <Tag variant='error'>error</Tag>
      <HorizontalSpace />
      <Tag variant='success'>success</Tag>
      <HorizontalSpace />
      <Tag variant='warning'>warning</Tag>
    </FlexDiv>
  )
}
