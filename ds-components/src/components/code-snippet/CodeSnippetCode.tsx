import React, { forwardRef } from 'react'
import { useCodeSnippetContext } from './CodeSnippetContext'

export type CodeSnippetCodeType = typeof CodeSnippetCode

const CodeSnippetCode = forwardRef<HTMLPreElement, React.HTMLAttributes<HTMLPreElement>>(
  ({ ...rest }, ref) => {
    const { resolvedCode } = useCodeSnippetContext()
    return (
      <pre ref={ref} className={`eds-code-snippet__code`} {...rest}>
        <code>{resolvedCode}</code>
      </pre>
    )
  }
)

CodeSnippetCode.displayName = 'CodeSnippetCode'
export default CodeSnippetCode
