import React, { forwardRef } from 'react'
import cl from 'clsx'
import { IconCopy, IconValidationCheck } from '@elhub/ds-icons'
import { BodyText } from 'components/typography'
import { useCodeSnippetContext } from './CodeSnippetContext'

export type CodeSnippetCopyButtonType = typeof CodeSnippetCopyButton

const CodeSnippetCopyButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...rest }, ref) => {
    const { copied, copyLabel, handleCopy } = useCodeSnippetContext()
    return (
      <button
        ref={ref}
        type='button'
        className={cl('eds-code-snippet__copy-button', className)}
        onClick={handleCopy}
        aria-label={copyLabel}
        {...rest}
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
    )
  }
)

CodeSnippetCopyButton.displayName = 'CodeSnippetCopyButton'
export default CodeSnippetCopyButton
