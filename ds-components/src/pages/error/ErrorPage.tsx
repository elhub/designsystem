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
      <Heading className='eds-error-page__text-container--title' size='xlarge'>
        {title}
      </Heading>
      <Heading className='eds-error-page__text-container--description' level='2' size='large'>
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
