import cl from 'clsx'
import React, { forwardRef, useCallback, useState } from 'react'
import { IconCopy, IconValidationCheck } from '@elhub/ds-icons'
import { BodyText } from 'components/typography'

export interface CodeSnippetProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The code string to display
   */
  code: string
  /**
   * Toolbar content rendered before the copy button (e.g. Select dropdowns)
   */
  children?: React.ReactNode
  /**
   * Called when the code is copied. If not provided, uses navigator.clipboard.
   */
  onCopy?: () => void
  /**
   * Label for the copy button
   * @default "Copy"
   */
  copyLabel?: string
}

const CodeSnippet = forwardRef<HTMLDivElement, CodeSnippetProps>(
  ({ className, code, children, onCopy, copyLabel = 'Copy', ...rest }, ref) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = useCallback(() => {
      if (onCopy) {
        onCopy()
      } else {
        navigator.clipboard.writeText(code)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }, [code, onCopy])

    return (
      <div {...rest} ref={ref} className={cl('eds-code-snippet', className)}>
        <div className='eds-code-snippet__toolbar'>
          <div className='eds-code-snippet__controls'>{children}</div>
          <button
            type='button'
            className='eds-code-snippet__copy-button'
            onClick={handleCopy}
            aria-label={copyLabel}
          >
            {copied ? (
              <IconValidationCheck size='xsmall' className='eds-code-snippet__copy-icon' />
            ) : (
              <IconCopy size='xsmall' className='eds-code-snippet__copy-icon' />
            )}
            <BodyText as='span' size='small' weight='bold'>
              {copied ? 'Copied' : copyLabel}
            </BodyText>
          </button>
        </div>
        <pre className='eds-code-snippet__code'>
          <code>{code}</code>
        </pre>
      </div>
    )
  }
)

CodeSnippet.displayName = 'CodeSnippet'
export default CodeSnippet
