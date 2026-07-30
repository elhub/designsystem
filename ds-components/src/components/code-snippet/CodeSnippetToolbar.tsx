import React, { forwardRef } from 'react'
import CodeSnippetCopyButton from './CodeSnippetCopyButton'

export type CodeSnippetToolbarType = typeof CodeSnippetToolbar

const CodeSnippetToolbar = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, ...rest }, ref) => (
    <div ref={ref} className='eds-code-snippet__toolbar' {...rest}>
      <div className='eds-code-snippet__controls'>{children}</div>
      <CodeSnippetCopyButton />
    </div>
  )
)

CodeSnippetToolbar.displayName = 'CodeSnippetToolbar'
export default CodeSnippetToolbar
