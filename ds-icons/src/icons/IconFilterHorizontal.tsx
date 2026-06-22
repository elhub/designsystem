import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconFilterHorizontal = React.forwardRef<SVGSVGElement, SvgProps>(
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
          clipPath='url(#IconFilterHorizontal_svg__a)'
        >
          <path d='M.5.5h15v15H.5zM8.5 10.5h4M3.5 10.5h2' />
          <path d='M8.5 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M9.5 5.5h-6M12.5 5.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0' />
        </g>
        <defs>
          <clipPath id='IconFilterHorizontal_svg__a'>
            <path fill='currentColor' d='M0 0h16v16H0z' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)
IconFilterHorizontal.displayName = 'IconFilterHorizontal'
