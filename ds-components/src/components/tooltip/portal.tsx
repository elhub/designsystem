/* https://github.com/radix-ui/primitives/blob/main/packages/react/portal/src/Portal.tsx */
import React from 'react'
import ReactDOM from 'react-dom'

const Portal = ({ children, anchorEl }: { children: React.ReactNode; anchorEl: HTMLElement | null }) => {
  const hostElement = anchorEl ?? globalThis?.document?.body

  if (hostElement) {
    return ReactDOM.createPortal(children, hostElement)
  }

  // bail out of ssr
  return null
}

export default Portal
