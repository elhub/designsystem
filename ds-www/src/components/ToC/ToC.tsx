import React from 'react'
import { Link } from '@elhub/ds-components'
import styled from 'styled-components'
import { HeadingElement } from '../../hooks/useHeadings'

const Ul = styled.ul`
  list-style-type: none;
  padding: 0.5rem;
`
const Li = styled.li`
  margin: 0;
`

const ToC = ({ headings, activeId }: { headings: HeadingElement[]; activeId: string[] }) => {
  const scroll = (id: string) => {
    const e = document.getElementById(id)
    if (e) {
      window.scrollTo({
        top: e.offsetTop - 160, // offset from header
        left: e.offsetLeft,
        behavior: 'smooth'
      })
    }
  }

  if (headings?.length === 0) {
    return null
  }

  return (
    <Ul>
      {headings.map((heading, idx: number) => (
        <Li key={heading.id + idx} style={{ marginLeft: `${heading.level - 1}em` }}>
          <Link
            href='#'
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              scroll(heading.id)
            }}
            style={{ fontWeight: activeId.includes(heading.id) ? 'bold' : 'normal', textDecoration: 'none' }}
          >
            {heading.text}
          </Link>
        </Li>
      ))}
    </Ul>
  )
}

export default ToC
