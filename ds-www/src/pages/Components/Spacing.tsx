import { BodyText, Heading, HorizontalSpace, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'

const ComponentsSpacing = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='spacing' level='1' spacing>
        Spacing
      </Heading>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='horizontalspace' level='2' spacing>
        Horizontal space
      </Heading>

      <VerticalSpace />

      <BodyText>
        Use the <code>HorizontalSpace</code> component as a spacing element. An optional <code>size</code>{' '}
        prop sets custom spacing (default is 1), in rem values.{' '}
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { HorizontalSpace } from '@elhub/ds-components'

const Component = () => {
  return (
     <BodyText>
        this is a <HorizontalSpace size='10'/>long space
     </BodyText>
  )
}`}
      >
        <BodyText>
          this is a <HorizontalSpace size='10' />
          long space
        </BodyText>
      </DemoableDiv>

      <VerticalSpace />

      <BodyText>
        If you want to use another tag, for example, <code>span</code>, us the <code>as</code> polymorphic
        prop.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { HorizontalSpace } from '@elhub/ds-components'

const Component = () => {
  return (
     <BodyText>
        this is a 
        <HorizontalSpace as='span' size='10'/>
        long space with a{' '}
        <code>div</code>{' '}
         element.
     </BodyText>
  )
}`}
      >
        <BodyText>
          this is a
          <HorizontalSpace as='span' size='10' />
          long space with a <code>div</code> element.
        </BodyText>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='verticalspace' level='2' spacing>
        Vertical space
      </Heading>

      <BodyText>
        For vertical separations with a <code>div</code> tag. An optional <code>size</code> prop sets custom
        spacing (default is 1), in rem values.{' '}
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { VerticalSpace } from '@elhub/ds-components'

const Component = () => {
  return (
     <>
        <BodyText>this is a line</BodyText>
        <VerticalSpace size='5'/>
        <BodyText>this is another line</BodyText>
     </>
  )
}`}
      >
        <BodyText>this is a line</BodyText>
        <VerticalSpace size='5' />
        <BodyText>this is another line</BodyText>
      </DemoableDiv>

      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsSpacing
