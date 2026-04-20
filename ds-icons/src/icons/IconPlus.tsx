import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconPlus = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <g clipPath='url(#IconPlus_svg__a)'>
          <path
            fill='currentColor'
            fillRule='evenodd'
            d='M8 0a1.6 1.6 0 0 1 1.6 1.6v4.8h4.8a1.6 1.6 0 0 1 0 3.2H9.6v4.8a1.6 1.6 0 0 1-3.2 0V9.6H1.6a1.6 1.6 0 1 1 0-3.2h4.8V1.6A1.6 1.6 0 0 1 8 0'
            clipRule='evenodd'
          />
        </g>
        <defs>
          <clipPath id='IconPlus_svg__a'>
            <path fill='currentColor' d='M0 0h16v16H0z' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)
IconPlus.displayName = 'IconPlus'
