import { FlexDiv, Heading, Panel, VerticalSpace } from '@elhub/ds-components'
import { LinkPanel } from '../../components/link-panel'
import { HomePageLinkPanel } from 'components/styled'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const data = [
  {
    link: '/resources/icons',
    title: 'Icons',
    description: 'Browse available icons from @elhub/ds-icons package, and properly import them to your app'
  },
  {
    link: '/resources/tokens',
    title: 'Tokens',
    description: "Tokens, color palette and CSS variables from the design system's modes"
  },
  {
    link: '/resources/typography',
    title: 'Typography',
    description: 'Recommendations on how to structure our content with the typography components'
  },
  {
    link: '/resources/spacing',
    title: 'Spacing/grids',
    description: 'Organize the layout of your application with the help of design system components'
  },
  {
    link: '/resources/graphs',
    title: 'Graphs',
    description: 'Add charts to your application with no effort'
  }
]

const ResourcesHome: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <VerticalSpace />
      <Panel>
        <Heading size='large'>Resources</Heading>
      </Panel>
      <FlexDiv style={{ flexWrap: 'wrap', gap: '1.5rem' }}>
        {data.map((item, i) => (
          <HomePageLinkPanel
            key={item.link}
            href='#'
            onClick={() => {
              navigate(item.link)
            }}
            style={{ animationDelay: `${i * 0.05}s` }}
            variant='secondary'
          >
            <div className='content'>
              <LinkPanel.Title>{item.title}</LinkPanel.Title>
              <LinkPanel.Description>{item.description}</LinkPanel.Description>
            </div>
          </HomePageLinkPanel>
        ))}
      </FlexDiv>
    </>
  )
}

export default ResourcesHome
