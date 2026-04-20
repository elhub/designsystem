import { Button } from '@elhub/ds-components'
import { IconValidationCheck as IconCheck } from '@elhub/ds-icons'
import React, { useState } from 'react'

interface CopyClipboardButtonProps {
  label?: string
  size?: 'small' | 'medium' | 'large'
  iconPosition?: 'left' | 'right'
  text: string | React.ReactNode
}

const CopyClipboardButton: React.FC<CopyClipboardButtonProps> = ({
  label = 'Copy to clipboard',
  size = 'small',
  iconPosition = 'left',
  text
}) => {
  const [copied, setCopied] = useState<boolean>(false)

  const copyClipboard = async (t: string | React.ReactNode): Promise<void> => {
    if (typeof t === 'string') {
      await navigator.clipboard.writeText(t)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 1000)
    } else {
      console.error('Text must be a string to copy to clipboard.')
    }
  }

  return (
    <Button
      size={size}
      icon={copied ? IconCheck : undefined}
      iconPosition={iconPosition}
      onClick={async () => {
        await copyClipboard(text)
      }}
    >
      {label}
    </Button>
  )
}

export default CopyClipboardButton
