import {
  BodyText,
  Column,
  Container,
  Content,
  FlexDiv,
  Header,
  Heading,
  Link,
  Margin,
  Nav,
  Row,
  VerticalSpace
} from '@elhub/ds-components'

import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'

const ComponentsContainers: React.JSX.Element = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='containers' level='1' spacing>
        Containers
      </Heading>
      <VerticalSpace />
      <BodyText>Containers is a collection of styled components meant for building page layouts.</BodyText>

      <BodyText>
        The <Link href='/resources/spacing'>spacing section of the Resources page</Link> has a better overview
        on how you can combine grid components to create page layouts. This page centers more on code examples
        and property details
      </BodyText>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='containers-container' level='2' spacing>
        Container
      </Heading>
      <VerticalSpace />

      <BodyText>
        A <code>Container</code> component is a styled <code>div</code> element that sets text and background
        colors, font styles and sizes, line heights and flex flows. You should use a <code>Container</code>{' '}
        component to wrap your app contents.
      </BodyText>

      <BodyText>
        In the demo below, we showcase how to display text in a <code>Container</code>.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Container } from '@elhub/ds-components'

const Component = () => {
  return (
    <Container 
      style={{padding: '2rem'}}
    >
      Hello Container
    </Container>
  )
}`}
      >
        <Container style={{ padding: '2rem' }}>Hello Container</Container>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='containers-header' level='2' spacing>
        Header
      </Heading>
      <VerticalSpace />

      <BodyText>
        The <code>Header</code> component is a non-growable flex box, recommended to be added on the page top.
      </BodyText>

      <DemoableDiv
        alignContent='inherit'
        code={`import { Header } from '@elhub/ds-components'

const Component = () => {
  return (
    <Header style={{padding: '2rem'}}>
      <Row>
        <Column/>
        <Column>
          <BodyText>Logo class</BodyText>
        </Column>
        <Column>
          <BodyText> no Logo class</BodyText>
        </Column>
      </Row>
      <VerticalSpace/>
      <Row>
        <Column>
          <BodyText>White logo</BodyText>
        </Column>
      </Row>
    </Header>
  )
}`}
      >
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
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='containers-nav' level='2' spacing>
        Nav
      </Heading>
      <VerticalSpace />

      <BodyText>
        The <code>Nav</code> component is a styled <code>nav</code> element.
      </BodyText>

      <BodyText>
        You should add navigation elements inside a <code>Nav</code> component, like the
        <Link href='/components/navbar'>NavBar</Link> component.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Nav } from '@elhub/ds-components'

const Component = () => {
  return (
    <Nav>
       Nav
    </Nav>
  )
}`}
      >
        <Nav>Nav</Nav>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='containers-content' level='2' spacing>
        Content
      </Heading>
      <VerticalSpace />

      <BodyText>
        The <code>Content</code> is a generic <code>div</code> element with a default padding. It's meant to
        be the container where you add your page content .
      </BodyText>

      <BodyText>
        You can pass a custom <code>padding</code> prop (a number in rems) and/or a <code>flex</code> prop (a
        number).
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Content } from '@elhub/ds-components'

const Component = () => {
  return (
    <Content padding='2'>
     logo
    </Content>
  )
}`}
      >
        <Content padding='2'>logo</Content>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='containers-margin' level='2' spacing>
        Margin
      </Heading>
      <VerticalSpace />

      <BodyText>
        Margin is a generic <code>div</code> element with a flex set to 1, to serve as margin gutters and
        letting the <code>Content</code> component to align in the center.
      </BodyText>

      <BodyText>
        You can pass a custom <code>padding</code> prop (a number in rems) and/or a <code>flex</code> prop (a
        number).
      </BodyText>

      <DemoableDiv
        code={`import { Margin } from '@elhub/ds-components'

const Component = () => {
  return (
     <Container>
        <FlexDiv>
          <Margin>Margin</Margin>
          <Content padding='0'>Content</Content>
          <Margin>Margin</Margin>
        </FlexDiv>
     </Container>
  )
}`}
      >
        <Container>
          <FlexDiv>
            <Margin>Margin</Margin>
            <Content padding='0'>Content</Content>
            <Margin>Margin</Margin>
          </FlexDiv>
        </Container>
      </DemoableDiv>
    </>
  )
}

export default ComponentsContainers
