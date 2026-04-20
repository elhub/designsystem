import cl, { type ClassValue } from 'clsx'
import React, { forwardRef } from 'react'
import { type OverridableComponent } from 'util/index'

export interface BodyTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * Sets font-size
   * @default "medium"
   */
  size?: 'large' | 'medium' | 'small'
  /**
   * Paragraph text
   */
  children: React.ReactNode
  /**
   * Font weight
   * @default "regular"
   */
  weight?: 'regular' | 'bold' | 'semibold'
}

const BodyText: OverridableComponent<BodyTextProps> = forwardRef(
  ({ className, size = 'medium', weight = 'regular', as: Component = 'p', ...rest }, ref) => (
    <Component
      {...rest}
      ref={ref}
      className={cl(
        'eds-body-text',
        `eds-body-text--${size}`,
        {
          [`eds-body-text--${weight}`]: weight !== 'regular'
        },
        className as ClassValue
      )}
    />
  )
)

BodyText.displayName = 'BodyText'
export default BodyText
