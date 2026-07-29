import React, { useEffect, useState } from 'react'
import { CodeSnippet, type CodeSnippetRenderCodeProps } from '@elhub/ds-components'
import { GRID_AREA_REQUESTS } from '../utils/data'
import { GRID_AREA_CODE } from '../utils/codeStrings'
type ShikiLanguage = 'bash' | 'http' | 'java' | 'javascript' | 'python'

const shikiLanguageMap: Record<NonNullable<CodeSnippetRenderCodeProps['language']>, ShikiLanguage> = {
  curl: 'bash',
  http: 'http',
  java: 'java',
  javascript: 'javascript',
  python: 'python'
}

const shikiHighlighter = Promise.all([
  import('shiki/core'),
  import('shiki/engine/javascript'),
  import('@shikijs/langs/bash'),
  import('@shikijs/langs/http'),
  import('@shikijs/langs/java'),
  import('@shikijs/langs/javascript'),
  import('@shikijs/langs/python'),
  import('@shikijs/themes/github-dark'),
  import('@shikijs/themes/github-light')
]).then(
  ([
    { createHighlighterCore },
    { createJavaScriptRegexEngine },
    { default: bash },
    { default: http },
    { default: java },
    { default: javascript },
    { default: python },
    { default: githubDark },
    { default: githubLight }
  ]) =>
    createHighlighterCore({
      themes: [githubLight, githubDark],
      langs: [bash, http, java, javascript, python],
      engine: createJavaScriptRegexEngine()
    })
)

const withCodeSnippetClass = (html: string): string =>
  html.replace('<pre class="shiki', '<pre class="eds-code-snippet__code shiki')

const HighlightedCode: React.FC<CodeSnippetRenderCodeProps> = ({
  resolvedCode,
  language = 'curl',
  variant = 'light'
}) => {
  const [html, setHtml] = useState<string>()
  const [error, setError] = useState<Error>()

  useEffect(() => {
    let active = true

    void shikiHighlighter
      .then((highlighter) =>
        highlighter.codeToHtml(resolvedCode, {
          lang: shikiLanguageMap[language],
          theme: variant === 'dark' ? 'github-dark' : 'github-light'
        })
      )
      .then((highlightedCode) => {
        if (active) {
          setError(undefined)
          setHtml(withCodeSnippetClass(highlightedCode))
        }
      })
      .catch((cause: unknown) => {
        if (active) {
          setHtml(undefined)
          setError(cause instanceof Error ? cause : new Error('Failed to highlight code'))
        }
      })

    return () => {
      active = false
    }
  }, [resolvedCode, language])

  if (error) {
    return (
      <pre className='eds-code-snippet__code'>
        <code>{resolvedCode}</code>
      </pre>
    )
  }

  if (!html) {
    return (
      <pre className='eds-code-snippet__code'>
        <code>{resolvedCode}</code>
      </pre>
    )
  }

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export const HighlightedDarkVariant: React.FC = () => (
  <CodeSnippet
    variant='dark'
    requests={GRID_AREA_REQUESTS}
    renderCode={(props) => <HighlightedCode {...props} />}
  />
)
export const HighlightedLightVariant: React.FC = () => (
  <CodeSnippet
    variant='light'
    requests={GRID_AREA_REQUESTS}
    renderCode={(props) => <HighlightedCode {...props} />}
  />
)

export const HighlightedCustomCodeVariant: React.FC = () => (
  <CodeSnippet variant='dark' code={GRID_AREA_CODE} renderCode={(props) => <HighlightedCode {...props} />} />
)
