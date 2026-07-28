import { FlexEndDiv, HorizontalSpace, Loader, PileCenterDiv } from '@elhub/ds-components'

export const LoaderVariantsExample = () => {
  return (
    <FlexEndDiv>
      <PileCenterDiv>
        <Loader size='large' variant='primary' />
        <span>Primary</span>
      </PileCenterDiv>
      <HorizontalSpace />
      <PileCenterDiv>
        <Loader size='large' variant='secondary' />
        <span>Secondary</span>
      </PileCenterDiv>
    </FlexEndDiv>
  )
}
