import { AlignCenterColumn, BodyText, Heading, Panel, Row, VerticalSpace } from '@elhub/ds-components'

import React from 'react'
import ErrorPageExample from './examples/ErrorPageExample'
import ErrorPageExampleSource from './examples/ErrorPageExample.tsx?raw'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'

const ResourcesMicroFrontends: React.FC = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' spacing>
        MicroFrontend Distributed Pages
      </Heading>
      <VerticalSpace />
      <BodyText>
        To allow for a shared and equal feeling across microfrontends, the design system distributes a few of
        the common pages, such as the error page and the not found page.
      </BodyText>

      <VerticalSpace size='2' />
      <a href='#error-page' className='eds-sr-only'>
        Error Page
      </a>
      <Heading className='toc' size='xsmall' id='error-page' level='3' spacing>
        Error Page
      </Heading>
      <Row>
        <Panel border>
          <DemoableDiv justifyContent='center' code={ErrorPageExampleSource} codeHighlighter='shiki'>
            <ErrorPageExample />
          </DemoableDiv>
        </Panel>
        {/* </div> */}
      </Row>
      <VerticalSpace size='3' />
      <a href='#not-found-page' className='eds-sr-only'>
        Not Found Page
      </a>
      <Heading className='toc' size='xsmall' id='not-found-page' level='3' spacing>
        Not Found Page
      </Heading>
      <Row>
        <AlignCenterColumn>
          <div style={{ display: 'inline-block' }}>
            <Panel border>
              <BodyText></BodyText>
            </Panel>
          </div>
        </AlignCenterColumn>
      </Row>
    </>
  )
}

export default ResourcesMicroFrontends
