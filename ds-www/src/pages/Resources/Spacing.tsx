import {
  AlignCenterColumn,
  BodyText,
  Column,
  FlexDiv,
  Heading,
  Panel,
  Row,
  VerticalSpace
} from '@elhub/ds-components'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import React from 'react'

const ResourcesSpacing: React.JSX.Element = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' spacing>
        Spacing, grids
      </Heading>
      <VerticalSpace />
      <BodyText>
        Design system's layout components uses flex boxes for its positioning, direction and content
        alignment.{' '}
      </BodyText>

      <Panel>
        <BodyText>
          <strong>Container</strong> - Your app to be wrapped in a Container in order to properly set the text
          and background colors, and font styles.
        </BodyText>

        <BodyText>
          <strong>Header</strong> - Header is a non-growable flex box, recommended to be added on the page
          top.
        </BodyText>

        <BodyText>
          <strong>Nav</strong> - Nav is a generic <code>nav</code> element.
        </BodyText>

        <BodyText>
          <strong>Content</strong> - Content is a generic <code>div</code> element with a default flex of 6,
          plus a 1rem padding. Your page content should go inside a Content component.
        </BodyText>

        <BodyText>
          <strong>Margin</strong> - Flex margins that let Content to have a maximum width
        </BodyText>

        <BodyText>
          <strong>Footer</strong> - Generic <code>footer</code> element
        </BodyText>
      </Panel>

      <BodyText>
        Here are two examples of page layout using Design system components. You don't need to strictly follow
        these layouts, but they give you a good idea of the role of these layout components.
      </BodyText>

      <Row>
        <AlignCenterColumn>
          <div style={{ display: 'inline-block' }}>
            <Panel border>
              <BodyText>Container</BodyText>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'stretch',
                  height: '250px',
                  width: '400px'
                }}
              >
                <Panel style={{ width: '100%' }} border>
                  Header
                </Panel>
                <FlexDiv style={{ height: '200px' }}>
                  <div style={{ display: 'flex', justifyContent: 'stretch', height: '100%' }}>
                    <Panel border>Nav</Panel>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'stretch', flex: '3' }}>
                    <Panel style={{ width: '100%' }} border>
                      Content
                    </Panel>
                  </div>
                </FlexDiv>
              </div>
            </Panel>
          </div>
        </AlignCenterColumn>

        <AlignCenterColumn>
          <div style={{ display: 'inline-block' }}>
            <Panel border>
              <BodyText>Container</BodyText>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'stretch',
                  height: '250px',
                  width: '400px'
                }}
              >
                <Panel style={{ width: '100%' }} border>
                  Header
                </Panel>
                <Panel
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'stretch',
                    width: '100%',
                    height: '100%'
                  }}
                  noPadding
                  border
                >
                  <Panel style={{ width: '40px', height: '100%', justifyContent: 'stretch' }} border>
                    <div style={{ transform: 'rotate(90deg)' }}>Margin</div>
                  </Panel>
                  <Panel style={{ width: '100%' }} border>
                    Content
                  </Panel>
                  <Panel style={{ width: '40px', height: '100%', justifyContent: 'stretch' }} border>
                    <div style={{ transform: 'rotate(90deg)' }}>Margin</div>
                  </Panel>
                </Panel>
                <Panel style={{ width: '100%' }} border>
                  Footer
                </Panel>
              </div>
            </Panel>
          </div>
        </AlignCenterColumn>
      </Row>
      <Row>
        <Column>
          <CodeDiv>
            {`<Container>
    <Header height='10rem'/>
    <FlexDiv>
      <Nav/>
      <Content flex='6'/>
    </FlexDiv>
</Container>`}
          </CodeDiv>
        </Column>
        <Column>
          <CodeDiv>
            {`<Container>
  <Header height='10rem'/>
  <FlexDiv>
    <Margin/>
    <Content flex='6'/>
    <Margin/>
  </FlexDiv>
  <Footer height='5rem'/>
</Container>`}
          </CodeDiv>
        </Column>
      </Row>

      <VerticalSpace size='3' />
    </>
  )
}

export default ResourcesSpacing
