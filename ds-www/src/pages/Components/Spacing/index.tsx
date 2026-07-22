import { BodyText, Heading, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'
import { HorizontalSpacingExample } from './examples/Horizontal'
import horizontalSpacingSource from './examples/Horizontal.tsx?raw'
import { PolymorphicSpacingExample } from './examples/Polymorphic'
import polymorphicSpacingSource from './examples/Polymorphic.tsx?raw'
import { VerticalSpacingExample } from './examples/Vertical'
import verticalSpacingSource from './examples/Vertical.tsx?raw'

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

      <DemoableDiv alignContent='center' code={horizontalSpacingSource} codeHighlighter='shiki'>
        <HorizontalSpacingExample />
      </DemoableDiv>

      <VerticalSpace />

      <BodyText>
        If you want to use another tag, for example, <code>span</code>, us the <code>as</code> polymorphic
        prop.
      </BodyText>

      <DemoableDiv alignContent='center' code={polymorphicSpacingSource} codeHighlighter='shiki'>
        <PolymorphicSpacingExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='verticalspace' level='2' spacing>
        Vertical space
      </Heading>

      <BodyText>
        For vertical separations with a <code>div</code> tag. An optional <code>size</code> prop sets custom
        spacing (default is 1), in rem values.{' '}
      </BodyText>

      <DemoableDiv alignContent='center' code={verticalSpacingSource} codeHighlighter='shiki'>
        <VerticalSpacingExample />
      </DemoableDiv>

      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsSpacing
