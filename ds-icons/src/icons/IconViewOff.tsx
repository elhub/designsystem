import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconViewOff = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <g
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.6}
          clipPath='url(#IconViewOff_svg__a)'
        >
          <path d='M13.6 5.989q.691.58 1.306 1.243a1.07 1.07 0 0 1 0 1.475C13.738 9.967 11.085 12.4 8 12.4M2.4 9.962a16 16 0 0 1-1.306-1.255 1.07 1.07 0 0 1 0-1.475A10.38 10.38 0 0 1 8 3.6M1.2 14.8 14.8 1.2' />
        </g>
        <defs>
          <clipPath id='IconViewOff_svg__a'>
            <path fill='currentColor' d='M0 0h16v16H0z' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)
IconViewOff.displayName = 'IconViewOff'
