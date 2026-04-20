import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconNewtab = React.forwardRef<SVGSVGElement, SvgProps>(
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
          clipPath='url(#IconNewtab_svg__a)'
        >
          <path d='M6.4.8h-4A1.6 1.6 0 0 0 .8 2.4v11.2a1.6 1.6 0 0 0 1.6 1.6h11.2a1.6 1.6 0 0 0 1.6-1.6v-4M11.2.8h4v4M15.2.8 8 8' />
        </g>
        <defs>
          <clipPath id='IconNewtab_svg__a'>
            <path fill='currentColor' d='M0 0h16v16H0z' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)
IconNewtab.displayName = 'IconNewtab'
