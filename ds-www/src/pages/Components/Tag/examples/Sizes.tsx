import { FlexDiv, HorizontalSpace, Tag } from '@elhub/ds-components'

export const TagSizesExample = () => {
  return (
    <FlexDiv>
      <Tag variant='info' size='medium'>
        medium
      </Tag>
      <HorizontalSpace />
      <Tag variant='info' size='small'>
        small
      </Tag>
    </FlexDiv>
  )
}
