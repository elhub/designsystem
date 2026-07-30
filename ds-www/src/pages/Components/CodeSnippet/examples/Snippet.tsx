import React from 'react'
import { CodeSnippet } from '@elhub/ds-components'

export const SingleCodeSnippetVariant: React.FC = () => (
  <CodeSnippet
    code={[
      {
        label: 'Hello',
        code: {
          python: `print("Hello, World!")`
        }
      }
    ]}
  />
)

export const SingleSnippetMultipleLanguagesVariant: React.FC = () => (
  <CodeSnippet
    code={[
      {
        label: 'Hello',
        code: {
          javascript: `console.log("Hello, World!");`,
          python: `print("Hello, World!")`,
          java: `System.out.println("Hello, World!");`
        }
      }
    ]}
  />
)

export const MultipleSnippetsAndLanguagesVariant: React.FC = () => (
  <CodeSnippet
    code={[
      {
        label: 'Hello',
        code: {
          javascript: `console.log("Hello, World!");`,
          python: `print("Hello, World!")`,
          java: `System.out.println("Hello, World!");`
        }
      },
      {
        label: 'Goodbye',
        code: {
          javascript: `console.log("Goodbye, World!");`,
          python: `print("Goodbye, World!")`,
          java: `System.out.println("Goodbye, World!");`
        }
      }
    ]}
  />
)
