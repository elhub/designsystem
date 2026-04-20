import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconUser = React.forwardRef<SVGSVGElement, SvgProps>(
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
          strokeWidth={1.1}
          clipPath='url(#IconUser_svg__a)'
        >
          <path d='M8 9.077a2.692 2.692 0 1 0 0-5.385 2.692 2.692 0 0 0 0 5.385M3.401 13.277a5.385 5.385 0 0 1 9.197 0' />
          <path d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14' />
        </g>
        <defs>
          <clipPath id='IconUser_svg__a'>
            <path fill='currentColor' d='M0 0h16v16H0z' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)
IconUser.displayName = 'IconUser'
