import { BodyText, Divider, Heading, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'

const ComponentsDivider = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='Divider' level='1' spacing>
        Divider
      </Heading>
      <VerticalSpace />
      <BodyText>
        The <code>Divider</code> component is used to visually separate different sections on the page. It
        adapts to the parent containers properties: Width, padding etc...
      </BodyText>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Divider-default' level='2' spacing>
        Default component
      </Heading>

      <DemoableDiv
        alignContent='center'
        code={`import { Divider } from '@elhub/ds-components'

const Component = () => {
  return (
    <Divider />
  )
}`}
      >
        <Divider />
      </DemoableDiv>
    </>
  )
}

export default ComponentsDivider
