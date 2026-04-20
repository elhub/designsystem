import cl from 'clsx'
import React, { forwardRef } from 'react'
import { useId } from 'util/index'

export type LoaderSize = 'large' | 'medium' | 'small'

export type LoaderVariant = 'primary' | 'secondary'

export interface LoaderProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Changes Loader width/height
   * 64px | 40px | 32px | 24px | 20px | 16px
   * @default "medium"
   */
  size?: LoaderSize

  /**
   * Title prop on svg
   */
  title?: React.ReactNode

  /**
   * Colored variants for Loader
   * @default "neutral"
   */
  variant?: LoaderVariant
}

const Loader = forwardRef<SVGSVGElement, LoaderProps>(
  ({ className, size = 'medium', variant = 'primary', title, id, ...rest }, ref) => {
    const internalId = useId()

    return (
      <svg
        {...rest}
        ref={ref}
        className={cl('eds-loader', className, `eds-loader--${size}`, `eds-loader--${variant}`)}
        aria-labelledby={id ?? `loader-${internalId}`}
        focusable='false'
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <title id={id ?? `loader-${internalId}`}>{title}</title>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9 2.37143C5.33914 2.37143 2.37143 5.33914 2.37143 9C2.37143 12.6609 5.33914 15.6286 9 15.6286C12.6609 15.6286 15.6286 12.6609 15.6286 9C15.6286 5.33914 12.6609 2.37143 9 2.37143ZM1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9Z'
          fill={
            variant === 'primary'
              ? 'var(--eds-semantic-background-action-secondary)'
              : 'var(--eds-semantic-background)'
          }
          stroke={
            variant === 'primary'
              ? 'var(--eds-semantic-background-action-secondary)'
              : 'var(--eds-semantic-background)'
          }
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.31427 1.68571C8.31427 1.307 8.62127 1 8.99998 1C13.4183 1 17 4.58172 17 9C17 9.37871 16.693 9.68571 16.3143 9.68571C15.9356 9.68571 15.6286 9.37871 15.6286 9C15.6286 5.33914 12.6608 2.37143 8.99998 2.37143C8.62127 2.37143 8.31427 2.06442 8.31427 1.68571Z'
          fill='var(--eds-semantic-background-action-primary-active)'
          stroke='var(--eds-semantic-background-action-primary-active)'
          strokeLinecap='round'
        />
      </svg>
    )
  }
)

Loader.displayName = 'Loader'
export default Loader
