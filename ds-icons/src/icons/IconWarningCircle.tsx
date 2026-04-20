import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconWarningCircle = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <g clipPath='url(#IconWarningCircle_svg__a)'>
          <path
            fill='currentColor'
            fillRule='evenodd'
            d='M3.555 1.348A8 8 0 0 1 8 0a8.01 8.01 0 0 1 8 8A8 8 0 1 1 3.555 1.348M8 4a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1m0 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3'
            clipRule='evenodd'
          />
        </g>
        <defs>
          <clipPath id='IconWarningCircle_svg__a'>
            <path fill='currentColor' d='M0 0h16v16H0z' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)
IconWarningCircle.displayName = 'IconWarningCircle'
