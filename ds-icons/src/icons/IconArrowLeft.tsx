import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconArrowLeft = React.forwardRef<SVGSVGElement, SvgProps>(
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
          d='M13.333 7.333H5.22l3.727-3.726L8 2.667 2.667 8 8 13.333l.94-.94-3.72-3.726h8.113z'
        />
      </svg>
    )
  }
)
IconArrowLeft.displayName = 'IconArrowLeft'
