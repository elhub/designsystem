import cl from 'clsx'
import React, { forwardRef } from 'react'
import { IconCross as XMarkIcon } from '@elhub/ds-icons'

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Replaces label read for screen-readers
   */
  removeLabel?: string

  /**
   * Changes padding and font-sizes.
   * @default "medium"
   */
  size?: 'large' | 'medium' | 'small'
}

const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  (
    {
      className,
      children,
      removeLabel,
      size = 'medium',
      disabled = false,
      type = 'button',
      onClick,
      ...rest
    },
    ref
  ) => {
    return (
      <span style={{ display: 'inline-flex' }}>
        <button
          {...rest}
          disabled={disabled}
          ref={ref}
          type={type}
          className={cl(
            'eds-chips__chip eds-chips__chip eds-chips__chip-text eds-body-text--bold',
            className,
            size === 'large' ? 'eds-body-text--medium' : 'eds-body-text--small'
          )}
          aria-label={`${children}`}
          onClick={onClick}
        >
          <span className='eds-chips__chip-text'>{children}</span>
          {!!onClick && (
            <span className='eds-chips__chip-icon-right eds-chips__chip-icon'>
              <XMarkIcon size='xsmall' aria-hidden aria-label={removeLabel} />
            </span>
          )}
        </button>
      </span>
    )
  }
)

Chip.displayName = 'Chip'
export default Chip
