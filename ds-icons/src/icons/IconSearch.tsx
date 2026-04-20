import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconSearch = React.forwardRef<SVGSVGElement, SvgProps>(
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
          clipPath='url(#IconSearch_svg__a)'
        >
          <path d='M1 6.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0M14 15l-4-4' />
        </g>
        <defs>
          <clipPath id='IconSearch_svg__a'>
            <path fill='currentColor' d='M0 0h16v16H0z' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)
IconSearch.displayName = 'IconSearch'
