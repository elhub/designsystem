import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconChevronUp = React.forwardRef<SVGSVGElement, SvgProps>(
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
          d='M7.355 3.15a1.46 1.46 0 0 1 1.29 0c.196.097.363.233.496.391l.01.012 6.7 8.34a.666.666 0 0 1-.138.966.754.754 0 0 1-1.019-.13L8 4.396l-6.694 8.331a.754.754 0 0 1-1.02.13.666.666 0 0 1-.137-.966l6.7-8.339.01-.012c.133-.158.3-.294.496-.39'
          clipRule='evenodd'
        />
      </svg>
    )
  }
)
IconChevronUp.displayName = 'IconChevronUp'
