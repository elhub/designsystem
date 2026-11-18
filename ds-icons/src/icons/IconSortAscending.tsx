import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconSortAscending = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <mask id='IconSortAscending_svg__a' fill='#fff'>
          <path d='m8 0 5 7H3z' />
        </mask>
        <path stroke='currentColor' d='m8 0 5 7H3z' mask='url(#IconSortAscending_svg__a)' />
        <path fill='currentColor' d='m8 16 5-7H3z' opacity={0.99} />
      </svg>
    )
  }
)
IconSortAscending.displayName = 'IconSortAscending'
