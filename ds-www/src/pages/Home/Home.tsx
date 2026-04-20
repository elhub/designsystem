import {
  BodyText,
  FlexDiv,
  FlexStartSpacedDiv,
  Heading,
  Panel,
  PileCenterDiv,
  VerticalSpace
} from '@elhub/ds-components'
import { IconStar } from '@elhub/ds-icons'
import { LinkPanel } from '../../components/link-panel'
import { HomePageLinkPanel } from 'components/styled'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const PageWrapper = styled(PileCenterDiv)`
  margin-top: 2rem;
`

const data = [
  {
    link: '/start-here',
    title: 'Getting started',
    description: 'Quick instructions to bootstrap your project with the Elhub Design System.'
  },
  {
    link: '/components',
    title: 'Components',
    description: 'Explore our extensive React component library'
  },
  {
    link: '/resources',
    title: 'Resources',
    description: 'Access design assets and guidelines'
  },
  {
    link: '/changelog',
    title: 'Changelog',
    description: 'Track updates to EDS components and resources'
  }
]

const Home: React.FC = () => {
  const navigate = useNavigate()
  return (
    <PageWrapper>
      <Panel style={{ maxWidth: 1000, textAlign: 'center' }}>
        <Heading level='1' size='xlarge'>
          Elhub Design System (EDS)
        </Heading>
        <VerticalSpace size='1' />
        <Heading level='2' size='small' style={{ fontWeight: 'normal', maxWidth: 700 }}>
          A comprehensive suite of design guidelines and reusable components built to streamline your
          development process, ensuring consistency and efficiency across all your projects.
        </Heading>
        <VerticalSpace size='3' />
        <FlexStartSpacedDiv>
          <PileCenterDiv>
            <div>
              <IconStar size='medium' color='var(--eds-color-elhub-brand-green)' />
            </div>
            <Heading size='small'>Consistency</Heading>
            <BodyText size='small'>Uniform user experience </BodyText>
          </PileCenterDiv>
          <PileCenterDiv>
            <div>
              <IconStar size='medium' color='var(--eds-color-elhub-brand-green)' />
            </div>
            <Heading size='small'>Efficiency</Heading>
            <BodyText size='small'>Accelerated development</BodyText>
          </PileCenterDiv>
          <PileCenterDiv>
            <div>
              <IconStar size='medium' color='var(--eds-color-elhub-brand-green)' />
            </div>
            <Heading size='small'>Scalability</Heading>
            <BodyText size='small'>Future-ready design</BodyText>
          </PileCenterDiv>
          <PileCenterDiv>
            <div>
              <IconStar size='medium' color='var(--eds-color-elhub-brand-green)' />
            </div>
            <Heading size='small'>Collaboration</Heading>
            <BodyText size='small'>Enhanced teamwork</BodyText>
          </PileCenterDiv>
        </FlexStartSpacedDiv>
        <VerticalSpace />
      </Panel>
      <VerticalSpace size='2' />
      <FlexDiv style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {data.map((item, i) => (
          <HomePageLinkPanel
            href='#' // Updated to '#' to prevent using 'javascript:;'
            key={item.link}
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
      <VerticalSpace size='3' />
    </PageWrapper>
  )
}

export default Home
