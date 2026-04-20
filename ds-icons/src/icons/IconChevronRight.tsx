import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconChevronRight = React.forwardRef<SVGSVGElement, SvgProps>(
  ({ size = 'small', title, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        height={sizeMap[size]}
        width={sizeMap[size]}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 16 16'
        {...props}
      >
        <title>{title}</title>
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M3.141.287a.754.754 0 0 0 .13 1.019L11.603 8l-8.33 6.694a.754.754 0 0 0-.13 1.02c.23.319.663.38.966.137l8.339-6.7.012-.01c.158-.133.294-.3.39-.496a1.46 1.46 0 0 0 0-1.29 1.5 1.5 0 0 0-.39-.496l-.012-.01-8.34-6.7a.666.666 0 0 0-.966.138'
          clipRule='evenodd'
        />
      </svg>
    )
  }
)
IconChevronRight.displayName = 'IconChevronRight'
