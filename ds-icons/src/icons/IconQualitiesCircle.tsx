import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconQualitiesCircle = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <circle cx={8} cy={8} r={8} fill='currentColor' />
      </svg>
    )
  }
)
IconQualitiesCircle.displayName = 'IconQualitiesCircle'
