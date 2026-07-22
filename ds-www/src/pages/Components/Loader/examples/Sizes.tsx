import { FlexEndDiv, HorizontalSpace, Loader, PileCenterDiv } from '@elhub/ds-components'

export const LoaderSizesExample = () => {
  return (
    <FlexEndDiv>
      <PileCenterDiv>
        <Loader size='large' />
        <span style={{ whiteSpace: 'nowrap' }}>large</span>
      </PileCenterDiv>
      <HorizontalSpace />
      <PileCenterDiv>
        <Loader size='medium' />
        <span style={{ whiteSpace: 'nowrap' }}>medium</span>
      </PileCenterDiv>
      <HorizontalSpace />
      <PileCenterDiv>
        <Loader size='small' />
        <span style={{ whiteSpace: 'nowrap' }}>small</span>
      </PileCenterDiv>
    </FlexEndDiv>
  )
}
