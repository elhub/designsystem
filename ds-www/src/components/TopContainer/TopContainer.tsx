import { Container, FlexCenterDiv, Header, Link, NavBar, PileDiv } from '@elhub/ds-components'
import '@elhub/ds-css'
import ElhubWhite from 'assets/logos/svg/elhub_white.svg?react'
import { NavDiv } from 'components/styled'
import ToC from 'components/ToC/ToC'
import useHeadings, { type HeadingElement } from 'hooks/useHeadings'
import useScrollSpy from 'hooks/useScrollSpy'
import { isEmpty } from 'lodash'
import React, { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

type TopContainerProps = React.PropsWithChildren & {
  margins?: boolean
  toc?: boolean
}

const StyledHeader = styled(Header)`
  background: var(--eds-semantic-background-action-primary);
  position: sticky;
  top: 0rem;
  left: 0rem;
  right: 0rem;
  z-index: 2;
`

const DsNavBar = styled(NavBar)`
  .eds-navbar-link {
    color: var(--eds-semantic-text-inverted);
    border-radius: 0;

    &--selected {
      background-color: var(--eds-semantic-background-action-primary);
    }
  }

  :hover {
    background-color: var(--eds-semantic-background-action-primary-hover);
  }

  margin-right: 2rem;
`

const TopContainer: React.FC<TopContainerProps> = ({ children }: TopContainerProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const contentRef = useRef<HTMLDivElement | null>(null)

  const headings: HeadingElement[] = useHeadings(contentRef, pathname)
  const activeId: string[] = useScrollSpy(
    headings.map(({ id }) => id),
    {
      root: null, // default, use viewport
      rootMargin: '0px',
      threshold: 0.5 // half of item height
    }
  )

  const currentPage = pathname.split('/')[1] ?? ''
  const navBarActive = ['', 'start-here', 'changes', 'resources', 'components'].indexOf(currentPage)

  const showToc = !isEmpty(headings) && !['resources', 'components'].includes(currentPage)

  return (
    <Container>
      <StyledHeader>
        <FlexCenterDiv style={{ flex: 1, justifyContent: 'space-between' }}>
          <Link
            style={{ textDecoration: 'none' }}
            href='#home'
            onClick={() => {
              navigate('/')
            }}
          >
            <PileDiv style={{ padding: '1rem' }}>
              <ElhubWhite />
            </PileDiv>
          </Link>

          <DsNavBar value={navBarActive} style={{ flexFlow: 'row' }}>
            <NavBar.Link
              onClick={() => {
                navigate('/start-here')
              }}
            >
              Getting started
            </NavBar.Link>
            <NavBar.Link
              onClick={() => {
                navigate('/components')
              }}
            >
              Components
            </NavBar.Link>
            <NavBar.Link
              onClick={() => {
                navigate('/resources')
              }}
            >
              Resources
            </NavBar.Link>
            <NavBar.Link
              onClick={() => {
                navigate('/changelog')
              }}
            >
              Changelog
            </NavBar.Link>
          </DsNavBar>
        </FlexCenterDiv>
      </StyledHeader>
      <div style={{ display: 'grid', gridTemplateColumns: showToc ? 'max-content 1fr' : 'auto' }}>
        {showToc && (
          <NavDiv>
            <ToC headings={headings} activeId={activeId} />
          </NavDiv>
        )}
        <PileDiv ref={contentRef}>{children}</PileDiv>
      </div>
    </Container>
  )
}

export default TopContainer
