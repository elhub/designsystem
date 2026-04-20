import cl, { type ClassValue } from 'clsx'
import React, { forwardRef } from 'react'
import { type OverridableComponent } from 'util/index'

type HeaderSize = 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall'

type HeaderLevel = '1' | '2' | '3' | '4' | '5' | '6'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Heading level
   * @default "1"
   */
  level?: HeaderLevel
  /**
   * Changes text-sizing
   */
  size?: HeaderSize
  /**
   * Heading text
   */
  children: React.ReactNode
}

const Heading: OverridableComponent<HeadingProps> = forwardRef(
  ({ level = '1', size = 'xlarge', className, as, ...rest }, ref) => {
    const HeadingTag = as ?? (`h${level}` as React.ElementType)

    return (
      <HeadingTag
        {...rest}
        ref={ref}
        className={cl('eds-heading', `eds-heading--${size}`, className as ClassValue)}
      />
    )
  }
)

Heading.displayName = 'Heading'
export default Heading
