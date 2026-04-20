import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconSortDescending = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <path fill='currentColor' d='m8 0 5 7H3z' />
        <path stroke='currentColor' strokeWidth={0.5} d='M12.515 9.25h-9.03L8 15.57z' opacity={0.99} />
      </svg>
    )
  }
)
IconSortDescending.displayName = 'IconSortDescending'
