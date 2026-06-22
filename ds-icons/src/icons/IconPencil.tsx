import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconPencil = React.forwardRef<SVGSVGElement, SvgProps>(
  ({ size = 'small', title, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        height={sizeMap[size]}
        width={sizeMap[size]}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 18 18'
        {...props}
      >
        <title>{title}</title>
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M16.453 1.547a2.66 2.66 0 0 0-3.782.026L2.066 12.178l-1.295 5.05 5.05-1.295L16.428 5.328a2.66 2.66 0 0 0 .026-3.781'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.543}
          d='m12.369 1.876 3.755 3.755M2.067 12.177l3.758 3.753'
        />
      </svg>
    )
  }
)
IconPencil.displayName = 'IconPencil'
