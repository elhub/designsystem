import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconViewOn = React.forwardRef<SVGSVGElement, SvgProps>(
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
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.6}
          d='M14.906 7.232a1.07 1.07 0 0 1 0 1.475C13.738 9.968 11.085 12.4 8 12.4S2.262 9.968 1.094 8.707a1.07 1.07 0 0 1 0-1.475A10.38 10.38 0 0 1 8 3.6a10.38 10.38 0 0 1 6.906 3.632'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.6}
          d='M6 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0'
        />
      </svg>
    )
  }
)
IconViewOn.displayName = 'IconViewOn'
