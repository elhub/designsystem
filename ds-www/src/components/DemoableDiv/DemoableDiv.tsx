import { FlexDiv, PileDiv } from '@elhub/ds-components'
import cl from 'clsx'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import React from 'react'

type DemoableDivProps = React.PropsWithChildren & {
  code?: string
  codeHighlighter?: 'shiki'
  alignContent?: string
  justifyContent?: string
}

const DemoableDiv: React.FC<DemoableDivProps> = ({
  children,
  code,
  codeHighlighter = 'shiki',
  alignContent = 'inherit',
  justifyContent = 'center'
}) => {
  return (
    <div className='www-demoablediv'>
      <FlexDiv style={{ marginBottom: '0.5rem' }}>
        <PileDiv
          flex='4'
          className={cl('area')}
          style={{ justifyContent, alignItems: alignContent, padding: '1rem' }}
        >
          {children}
        </PileDiv>
      </FlexDiv>
      {code && <CodeDiv highlighter={codeHighlighter}>{code}</CodeDiv>}
    </div>
  )
}

export default DemoableDiv
