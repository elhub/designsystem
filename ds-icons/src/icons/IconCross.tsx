import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconCross = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <g clipPath='url(#IconCross_svg__a)'>
          <path
            fill='currentColor'
            d='M10.292 8.536a.8.8 0 0 1 0-1.132l5.386-5.386A1.2 1.2 0 0 0 13.982.322L8.596 5.708a.8.8 0 0 1-1.132 0L2.078.322A1.2 1.2 0 0 0 .382 2.018l5.386 5.386a.8.8 0 0 1 0 1.132L.382 13.922a1.2 1.2 0 1 0 1.696 1.696l5.386-5.385a.8.8 0 0 1 1.132 0l5.386 5.385a1.2 1.2 0 0 0 1.696-1.696z'
          />
        </g>
        <defs>
          <clipPath id='IconCross_svg__a'>
            <path fill='currentColor' d='M0 0h16v16H0z' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)
IconCross.displayName = 'IconCross'
