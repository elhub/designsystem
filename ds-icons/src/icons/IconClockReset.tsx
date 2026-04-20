import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconClockReset = React.forwardRef<SVGSVGElement, SvgProps>(
  ({ size = 'small', title, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        height={sizeMap[size]}
        width={sizeMap[size]}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 16 17'
        {...props}
      >
        <title>{title}</title>
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.6}
          d='M8.2 2a6.4 6.4 0 1 1-4.43 1.782'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.6}
          d='m1 4.4 2.77-.618.619 2.476M8.2 6v2.4L9.8 10'
        />
      </svg>
    )
  }
)
IconClockReset.displayName = 'IconClockReset'
