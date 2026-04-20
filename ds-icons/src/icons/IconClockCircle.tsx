import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconClockCircle = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <g clipPath='url(#IconClockCircle_svg__a)'>
          <path
            fill='currentColor'
            fillRule='evenodd'
            d='M2.343 13.657A8 8 0 1 1 13.657 2.343 8 8 0 0 1 2.343 13.657M9.356 3a.8.8 0 1 0-1.6 0v5.683l-2.977 1.985a.8.8 0 1 0 .887 1.331L9 9.777a.8.8 0 0 0 .356-.666z'
            clipRule='evenodd'
          />
        </g>
        <defs>
          <clipPath id='IconClockCircle_svg__a'>
            <path fill='currentColor' d='M0 0h16v16H0z' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)
IconClockCircle.displayName = 'IconClockCircle'
