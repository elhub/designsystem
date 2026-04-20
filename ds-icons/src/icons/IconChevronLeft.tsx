import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconChevronLeft = React.forwardRef<SVGSVGElement, SvgProps>(
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
          d='M12.859.287c.23.319.172.775-.13 1.019L4.396 8l8.331 6.694c.303.244.362.7.13 1.02a.666.666 0 0 1-.966.137l-8.339-6.7-.012-.01a1.5 1.5 0 0 1-.39-.496 1.46 1.46 0 0 1 0-1.29c.096-.196.232-.363.39-.496l.012-.01 8.34-6.7a.666.666 0 0 1 .966.138'
          clipRule='evenodd'
        />
      </svg>
    )
  }
)
IconChevronLeft.displayName = 'IconChevronLeft'
