import { Heading, Header } from '../../dist'

import React from 'react'

import { ErrorIllustration } from './ErrorIllustration'

type ErrorPageTextProps = {
  title: string
  description: string
}

const ErrorText: React.FC<ErrorPageTextProps> = ({ title, description }) => {
  return (
    <div className='eds-error-page__text-container'>
      <Heading
        size='xlarge'
        style={{
          color: 'var(--eds-global-color-green-105)'
        }}
      >
        {title}
      </Heading>
      <Heading
        level='2'
        size='large'
        style={{
          fontWeight: 'normal',
          maxWidth: '18rem'
        }}
      >
        {description}
      </Heading>
    </div>
  )
}

type ErrorPageProps = {
  page: {
    title: string
    description: string
    illustrationTitle: string
  }
}
export const ErrorPage: React.FC<ErrorPageProps> = ({ page }) => {
  return (
    <>
      <Header />
      <div className='eds-error-page__container'>
        <ErrorText title={page.title} description={page.description} />
        <ErrorIllustration title={page.illustrationTitle} />
      </div>
    </>
  )
}
