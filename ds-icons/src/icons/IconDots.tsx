import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconDots = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <circle cx={2} cy={8} r={2} fill='currentColor' />
        <circle cx={8} cy={8} r={2} fill='currentColor' />
        <circle cx={14} cy={8} r={2} fill='currentColor' />
      </svg>
    )
  }
)
IconDots.displayName = 'IconDots'
