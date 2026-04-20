import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconCheckCircle = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <g clipPath='url(#IconCheckCircle_svg__a)'>
          <path
            fill='currentColor'
            d='M8 0a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8m3.907 6.707-4.4 4.4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.8 8.986l3.693-3.693a1 1 0 0 1 1.414 1.414'
          />
        </g>
        <defs>
          <clipPath id='IconCheckCircle_svg__a'>
            <path fill='currentColor' d='M0 0h16v16H0z' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)
IconCheckCircle.displayName = 'IconCheckCircle'
