import { BodyText, Heading, Link, Panel, PileDiv, VerticalSpace } from '@elhub/ds-components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { slideInFromLeft } from '../styled'

const ComponentPanelDiv = styled(Panel)`
  width: 300px;
  height: 100%;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  transform: translateX(-20px);
  opacity: 0;
  animation: ${slideInFromLeft} 0.2s forwards;
`

const ComponentPanel = ({
  children,
  navigate,
  description,
  label
}: {
  children: React.ReactNode
  navigate: string
  description: string
  label: string
}) => {
  const nav = useNavigate()
  return (
    <PileDiv style={{ maxWidth: '320px' }}>
      <ComponentPanelDiv border>
        <div>
          <Link
            href='#'
            onClick={() => {
              nav(navigate)
            }}
          >
            <Heading level='2' size='medium' style={{ fontWeight: 'normal' }}>
              {label}
            </Heading>
          </Link>
          <VerticalSpace size='0.5' />
          <BodyText size='small'>{description}</BodyText>
        </div>
        <VerticalSpace size='2' />
        <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          {children}
        </div>
      </ComponentPanelDiv>
    </PileDiv>
  )
}

export default ComponentPanel
