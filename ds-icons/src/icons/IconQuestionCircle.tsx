import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconQuestionCircle = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <g clipPath='url(#IconQuestionCircle_svg__a)'>
          <path
            fill='currentColor'
            d='M8 0a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8m0 13.4a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8m0-4.8a1 1 0 0 1 0-2A1 1 0 1 0 7.2 5a1 1 0 1 1-1.6-1.2A3 3 0 1 1 8 8.6'
          />
        </g>
        <defs>
          <clipPath id='IconQuestionCircle_svg__a'>
            <path fill='currentColor' d='M0 0h16v16H0z' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)
IconQuestionCircle.displayName = 'IconQuestionCircle'
