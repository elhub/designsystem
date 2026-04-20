import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconArrowUpDown = React.forwardRef<SVGSVGElement, SvgProps>(
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
          strokeWidth={1.5}
          clipPath='url(#IconArrowUpDown_svg__a)'
        >
          <path d='M10 8.933V1M8 2.867 10 1l2 1.867M6 7.067V15M8 13.133 6 15l-2-1.867' />
        </g>
        <defs>
          <clipPath id='IconArrowUpDown_svg__a'>
            <path fill='currentColor' d='M0 16V0h16v16z' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)
IconArrowUpDown.displayName = 'IconArrowUpDown'
