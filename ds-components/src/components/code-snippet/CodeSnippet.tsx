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

export interface CodeSnippetCodeOption {
  /** Display label shown in the "Request for" selector */
  label: string
  /**
   * Code content for this option per language.
   *
   * For a single-language snippet, provide a single entry.
   */
  code: Partial<Record<Language, string>>
}

export interface CodeSnippetProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * http-requests urls to generate code snippets for.
   * @description Takes precedence over `code` if both are provided.
   * @requires Either `requests` or `code` must be provided.
   */
  requests?: CodeSnippetRequest[]
  /**
   * HTTP headers included in every generated snippet. Only used with `requests`.
   * @requires {@link requests} must be provided.
   *
   */
  headers?: Record<string, string>
  /**
   * Label for the snippet selector. Only shown when there are 2+ snippets.
   * @default "Snippet"
   */
  snippetLabel?: string
  /**
   * Label for the language selector.
   * @default "Language"
   */
  languageLabel?: string
  /**
   * Labeled code options.
   *
   * - 1 snippet + 1 language: no selectors
   * - 1 snippet + multiple languages: language selector
   * - 2+ snippets: snippet selector
   * @requires Either {@link requests} or `code` must be provided.
   */
  code?: CodeSnippetCodeOption[]
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
   * Placeholder for the snippet selector.
   * @default "Select snippet"
   */
  snippetPlaceholder?: string
  /**
   * Placeholder for the language selector.
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

type InternalSnippetOption = CodeSnippetRequest | CodeSnippetCodeOption

/**
 * Resolve code from generated request snippets first, then explicit options, then plain code.
 *
 * @param param0 - Object containing the active URL, headers, active code, and selected language.
 * @returns The resolved code string based on the active snippet and selected language.
 *
 */
const getActiveCodeSnippetBody = ({
  activeUrl,
  headers,
  activeCode,
  selectedLanguage
}: {
  activeUrl: string
  headers: Record<string, string>
  activeCode?: Partial<Record<Language, string>>
  selectedLanguage: Language
}): string => {
  if (activeUrl) {
    return generateSnippet(activeUrl, headers, selectedLanguage)
  }

  // Resolve the code for the selected language, fallback to first available language entry.
  if (activeCode) {
    return activeCode[selectedLanguage] ?? Object.values(activeCode)[0] ?? ''
  }
  // If no code or no requests are available, return an empty string.
  return ''
}

const CodeSnippet: CodeSnippetComponent = forwardRef<HTMLDivElement, CodeSnippetProps>(
  (
    {
      className,
      children,
      requests,
      headers = {},
      snippetLabel = 'Snippet',
      languageLabel = 'Language',
      code,
      onCopy,
      copyLabel = 'Copy',
      copiedLabel = 'Copied',
      variant = 'dark',
      snippetPlaceholder = 'Select snippet',
      languagePlaceholder = 'Select language',
      renderCode,
      ...rest
    },
    ref
  ) => {
    const defaultLanguage = 'curl'
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [language, setLanguage] = useState<Language>(defaultLanguage)
    const [copied, setCopied] = useState(false)

    const codeOptions = code ?? []
    const requestOptions = requests ?? []
    const hasRequests = Boolean(requestOptions.length)
    const hasCodeOptions = Boolean(codeOptions.length)
    const snippetOptions: InternalSnippetOption[] = hasRequests ? requestOptions : codeOptions
    const hasSnippetSelector = snippetOptions.length > 1

    const activeSnippet = snippetOptions[selectedIndex]
    const activeUrl = activeSnippet && 'url' in activeSnippet ? activeSnippet.url : undefined
    const activeCode = activeSnippet && 'code' in activeSnippet ? activeSnippet.code : undefined

    // For requests, all generator languages are available.
    // For explicit code options, only include languages that actually have code content.
    let availableLanguages: { value: Language; label: string }[] = []
    if (hasRequests) {
      availableLanguages = LANGUAGES
    } else if (hasCodeOptions) {
      availableLanguages = LANGUAGES.filter(({ value }) =>
        codeOptions.some((option) => Boolean(option.code[value]))
      )
    }

    // Keep user-selected language if valid, otherwise fall back to the first available language.
    let selectedLanguage = language
    const isSelectedLanguageAvailable = availableLanguages.some(({ value }) => value === language)
    if (!hasRequests && !isSelectedLanguageAvailable) {
      selectedLanguage = availableLanguages[0]?.value ?? defaultLanguage
    }

    const resolvedLanguage = availableLanguages.length > 0 ? selectedLanguage : undefined

    const resolvedCode = getActiveCodeSnippetBody({
      activeUrl: activeUrl ?? '',
      headers,
      activeCode,
      selectedLanguage
    })

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
        value={{
          resolvedCode,
          variant,
          copied,
          copyLabel,
          copiedLabel,
          handleCopy,
          language: resolvedLanguage
        }}
      >
        <div
          {...rest}
          ref={ref}
          className={cl('eds-code-snippet', `eds-code-snippet--${variant}`, className)}
        >
          <CodeSnippetToolbar>
            {children}
            {hasSnippetSelector && (
              <FormItem>
                <FormItemLabel>{snippetLabel}</FormItemLabel>
                <Select
                  value={String(selectedIndex)}
                  onValueChange={(v) => setSelectedIndex(Number(v))}
                  placeholder={snippetPlaceholder}
                >
                  <SelectContent>
                    {snippetOptions.map(({ label }, i) => (
                      <SelectItem key={i} value={String(i)}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
            {availableLanguages.length > 1 && (
              <FormItem>
                <FormItemLabel>{languageLabel}</FormItemLabel>
                <Select
                  value={selectedLanguage}
                  onValueChange={(v) => setLanguage(v as Language)}
                  placeholder={languagePlaceholder}
                >
                  <SelectContent>
                    {availableLanguages.map(({ value, label }) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          </CodeSnippetToolbar>
          {renderCode ? (
            renderCode({ resolvedCode, language: resolvedLanguage, variant })
          ) : (
            <CodeSnippetCode />
          )}
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
