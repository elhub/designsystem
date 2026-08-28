import { Heading, Header } from '../../dist'

import React, { useEffect } from 'react'
import { useRouteError, isRouteErrorResponse, useLocation } from 'react-router-dom'

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

const MAX_PAYLOAD_LENGTH = 399

type ErrorPageProps = {
  document: {
    title: string
    description: string
  }
  page: {
    title: string
    description: string
    illustrationTitle: string
  }
  error: ReturnType<typeof useRouteError>
  location: ReturnType<typeof useLocation>
  logClientError?: (payload: Record<string, unknown>) => Promise<void>
  notFoundPageUrl?: string
  maxPayloadLength?: number
}
export const ErrorPage: React.FC<ErrorPageProps> = ({
  page,
  notFoundPageUrl,
  error,
  location,
  logClientError,
  document,
  maxPayloadLength = MAX_PAYLOAD_LENGTH
}) => {
  const hasLoggedError = React.useRef(false)

  document.title = `${document.title} - ${document.description}`

  useEffect(() => {
    if (hasLoggedError.current) return

    const is404 = isRouteErrorResponse(error) && error.status === 404
    if (is404) return

    const isErrorInstance = error instanceof Error
    const getPayloadMessage = () => {
      if (isErrorInstance) return error.message
      if (isRouteErrorResponse(error)) return error.statusText
      return 'Unknown error'
    }

    const payload = {
      message: getPayloadMessage(),
      name: (error as { name?: string } | undefined)?.name,
      stack: isErrorInstance ? error.stack?.slice(0, maxPayloadLength) : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      status: isRouteErrorResponse(error) ? error.status : undefined,
      route: location.pathname,
      userAgent: navigator?.userAgent,
      extra: isRouteErrorResponse(error) ? error.data : undefined
    }

    // Fire and forget; we don't want to block rendering the error page
    if (logClientError) logClientError(payload).catch(() => undefined)
    hasLoggedError.current = true
  }, [error, location.pathname])

  if (!isRouteErrorResponse(error)) {
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

  switch (error.status) {
    case 404:
      if (notFoundPageUrl) {
        window.location.replace(notFoundPageUrl)
        break
      } else {
        return (
          <>
            <Header />
            <div className='eds-error-page__container'>
              <ErrorText title='Page Not Found' description='The page you are looking for does not exist.' />
            </div>
          </>
        )
      }

    default:
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
}
