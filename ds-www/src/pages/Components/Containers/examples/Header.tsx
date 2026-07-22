import { BodyText, Column, Header, Row, VerticalSpace } from '@elhub/ds-components'

export const ContainersHeaderExample = () => {
  return (
    <Header style={{ padding: '2rem' }}>
      <Row>
        <Column />
        <Column>
          <BodyText>Logo class</BodyText>
        </Column>
        <Column>
          <BodyText> no Logo class</BodyText>
        </Column>
      </Row>
      <VerticalSpace />
      <Row>
        <Column>
          <BodyText>White logo</BodyText>
        </Column>
      </Row>
    </Header>
  )
}
