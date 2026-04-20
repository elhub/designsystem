import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconCrossCircle = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <g clipPath='url(#IconCrossCircle_svg__a)'>
          <path
            fill='currentColor'
            d='M8 0a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8m3.648 9.952a1.2 1.2 0 1 1-1.696 1.696L8 9.698l-1.952 1.95a1.2 1.2 0 0 1-1.696-1.696L6.302 8l-1.95-1.952a1.2 1.2 0 0 1 1.696-1.696L8 6.302l1.952-1.95a1.2 1.2 0 0 1 1.696 1.696L9.698 8z'
          />
        </g>
        <defs>
          <clipPath id='IconCrossCircle_svg__a'>
            <path fill='currentColor' d='M0 0h16v16H0z' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)
IconCrossCircle.displayName = 'IconCrossCircle'
