import { Accordion, Content, FlexDiv, HorizontalSpace, PileDiv } from '@elhub/ds-components'
import { NavDiv } from 'components/styled'
import ToC from 'components/ToC/ToC'
import useHeadings from 'hooks/useHeadings'
import useScrollSpy from 'hooks/useScrollSpy'
import React, { useRef } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Route: React.ReactNode = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const contentRef = useRef(null)
  const headings = useHeadings(contentRef, location.pathname)
  const activeId = useScrollSpy(
    headings.map(({ id }) => id),
    {
      root: null, // default, use viewport
      rootMargin: '0px',
      threshold: 0.5 // half of item height
    }
  )
  const paths = location.pathname.split('/')
  const components = [
    { label: 'Icons', value: 'icons' },
    { label: 'Tokens', value: 'tokens' },
    { label: 'Fonts/Typography', value: 'typography' },
    { label: 'Spacing/grids', value: 'spacing' },
    { label: 'Graphs', value: 'graphs' }
  ]

  return (
    <Content>
      <FlexDiv>
        <NavDiv>
          <Accordion size='small' arrow={false}>
            {components.map((el) => (
              <Accordion.Item key={el.value} open={el.value === paths[2]}>
                <Accordion.Header
                  onClick={() => {
                    navigate(`/resources/${el.value}`)
                  }}
                >
                  {el.label}
                </Accordion.Header>
                <Accordion.Content style={{ padding: '0' }}>
                  <ToC headings={headings} activeId={activeId} />
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion>
        </NavDiv>
        <HorizontalSpace />
        <PileDiv flex='4' style={{ maxWidth: '1200px' }} ref={contentRef}>
          <Outlet />
        </PileDiv>
      </FlexDiv>
    </Content>
  )
}

export default Route
