import cl from 'clsx'
import React, { forwardRef, useCallback, useState } from 'react'
import { FormItem, FormItemLabel } from 'components/form/form-item'
import { Select, SelectContent, SelectItem } from 'components/form/select'
import { CodeSnippetContext } from './CodeSnippetContext'
import CodeSnippetCode, { type CodeSnippetCodeType } from './CodeSnippetCode'
import CodeSnippetCopyButton, { type CodeSnippetCopyButtonType } from './CodeSnippetCopyButton'
import CodeSnippetToolbar, { type CodeSnippetToolbarType } from './CodeSnippetToolbar'
import { generateSnippet, LANGUAGES, type Language } from './generateSnippet'

export interface CodeSnippetRequest {
  /** Display label shown in the "Request for" selector */
  label: string
  /** URL used to generate language-specific code snippets */
  url: string
}

export interface CodeSnippetProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * @requires Either `requests` or `code` must be provided.
   */
  requests?: CodeSnippetRequest[]
  /**
   * HTTP headers included in every generated snippet. Only used with `requests`.
   */
  headers?: Record<string, string>
  /**
   * Label for the "Request for" selector. Only shown when `requests` has 2+ items.
   * @default "Request for"
   */
  requestLabel?: string
  /**
   * Label for the language selector. Only used with `requests`.
   * @default "Language"
   */
  languageLabel?: string
  /**
   * Direct code string to display — no selectors are shown.
   * @requires Either `requests` or `code` must be provided.
   */
  code?: string
  /**
   * Called when the code is copied. Falls back to navigator.clipboard.
   */
  onCopy?: () => void
  /**
   * Label for the copy button.
   * @default "Copy"
   */
  copyLabel?: string
  /**
   * Label for the copy button when copied.
   * @default "Copied"
   */
  copiedLabel?: string
  /**
   * Visual theme for the code block.
   * @default "dark"
   */
  variant?: 'light' | 'dark'
  /**
   * Placeholder for the "Request for" selector. Only used with `requests`.
   * @default "Select request"
   */
  requestPlaceholder?: string
  /**
   * Placeholder for the language selector. Only used with `requests`.
   * @default "Select language"
   */
  languagePlaceholder?: string
  /**
   * Custom renderer for the code block. Enables app-level syntax highlighting
   * while keeping this component renderer-agnostic.
   */
  renderCode?: (props: CodeSnippetRenderCodeProps) => React.ReactNode
}

export interface CodeSnippetRenderCodeProps {
  resolvedCode: string
  language?: Language
  variant: 'light' | 'dark'
}

interface CodeSnippetComponent extends React.ForwardRefExoticComponent<
  CodeSnippetProps & React.RefAttributes<HTMLDivElement>
> {
  Toolbar: CodeSnippetToolbarType
  Code: CodeSnippetCodeType
  CopyButton: CodeSnippetCopyButtonType
}

const CodeSnippet: CodeSnippetComponent = forwardRef<HTMLDivElement, CodeSnippetProps>(
  (
    {
      className,
      children,
      requests,
      headers = {},
      requestLabel = 'Request for',
      languageLabel = 'Language',
      code,
      onCopy,
      copyLabel = 'Copy',
      copiedLabel = 'Copied',
      variant = 'dark',
      requestPlaceholder = 'Select request',
      languagePlaceholder = 'Select language',
      renderCode,
      ...rest
    },
    ref
  ) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [language, setLanguage] = useState<Language>('curl')
    const [copied, setCopied] = useState(false)

    const activeUrl = requests?.[selectedIndex]?.url
    const resolvedCode = activeUrl ? generateSnippet(activeUrl, headers, language) : (code ?? '')

    const handleCopy = useCallback(() => {
      if (onCopy) {
        onCopy()
      } else {
        navigator.clipboard.writeText(resolvedCode)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }, [resolvedCode, onCopy])

    return (
      <CodeSnippetContext.Provider
        value={{ resolvedCode, variant, copied, copyLabel, copiedLabel, handleCopy, language }}
      >
        <div
          {...rest}
          ref={ref}
          className={cl('eds-code-snippet', `eds-code-snippet--${variant}`, className)}
        >
          <CodeSnippetToolbar>
            {children}
            {requests && requests.length > 1 && (
              <FormItem>
                <FormItemLabel>{requestLabel}</FormItemLabel>
                <Select
                  value={String(selectedIndex)}
                  onValueChange={(v) => setSelectedIndex(Number(v))}
                  placeholder={requestPlaceholder}
                >
                  <SelectContent>
                    {requests.map(({ label }, i) => (
                      <SelectItem key={i} value={String(i)}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
            {requests && (
              <FormItem>
                <FormItemLabel>{languageLabel}</FormItemLabel>
                <Select
                  value={language}
                  onValueChange={(v) => setLanguage(v as Language)}
                  placeholder={languagePlaceholder}
                >
                  <SelectContent>
                    {LANGUAGES.map(({ value, label }) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          </CodeSnippetToolbar>
          {renderCode ? renderCode({ resolvedCode, language, variant }) : <CodeSnippetCode />}
        </div>
      </CodeSnippetContext.Provider>
    )
  }
) as CodeSnippetComponent

CodeSnippet.Toolbar = CodeSnippetToolbar
CodeSnippet.Code = CodeSnippetCode
CodeSnippet.CopyButton = CodeSnippetCopyButton
CodeSnippet.displayName = 'CodeSnippet'

export default CodeSnippet
