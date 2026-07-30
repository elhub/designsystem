import { createContext, useContext } from 'react'
import { type Language } from './generateSnippet'

interface CodeSnippetContextType {
  resolvedCode: string
  variant: 'light' | 'dark'
  copied: boolean
  copyLabel: string
  copiedLabel: string
  handleCopy: () => void
  language?: Language
}

export const CodeSnippetContext = createContext<CodeSnippetContextType | null>(null)

export const useCodeSnippetContext = (): CodeSnippetContextType => {
  const context = useContext(CodeSnippetContext)
  if (!context) throw new Error('useCodeSnippetContext must be used within a CodeSnippet')
  return context
}
