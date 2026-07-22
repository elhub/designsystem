import { Container, Content, FlexDiv, Margin } from '@elhub/ds-components'

export const ContainersMarginExample = () => {
  return (
    <Container>
      <FlexDiv>
        <Margin>Margin</Margin>
        <Content padding='0'>Content</Content>
        <Margin>Margin</Margin>
      </FlexDiv>
    </Container>
  )
}
