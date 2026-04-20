import React, { forwardRef, type HTMLAttributes } from 'react'
import cl from 'clsx'
import { BodyText } from '../typography'

export type TagVariant = 'warning' | 'error' | 'info' | 'success'

export type TagSize = 'medium' | 'small'

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Tag label
   */
  children: React.ReactNode
  /**
   * Changes background and border color
   */
  variant?: TagVariant
  /**
   * Changes padding and font-sizes
   * @default "medium"
   */
  size?: TagSize
}

const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant = 'info', size = 'medium', ...rest }, ref) => {
    return (
      <BodyText
        {...rest}
        ref={ref}
        className={cl('eds-tag', `eds-tag--${variant}`, `eds-tag--${size}`, className)}
        as='span'
        size={size}
      />
    )
  }
)

Tag.displayName = 'Tag'
export default Tag
