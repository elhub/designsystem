import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconBean = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <g clipPath='url(#IconBean_svg__a)'>
          <path
            fill='currentColor'
            d='M8.067 11.8H4.6c-2.2 0-4-1.467-4.2-3.4-.267-2.2 1.133-3.6 2.733-4.133a5.2 5.2 0 0 1 1.467-.2h7c2.067 0 3.8 1.266 4.133 3.066.467 2.4-1.066 4.134-3.066 4.6-.334.067-.667.134-1 .134-1.2-.067-2.4-.067-3.6-.067'
          />
        </g>
        <defs>
          <clipPath id='IconBean_svg__a'>
            <path fill='currentColor' d='M0 0h16v16H0z' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)
IconBean.displayName = 'IconBean'
