import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconQualitiesTriangle = React.forwardRef<SVGSVGElement, SvgProps>(
  ({ size = 'small', title, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        height={sizeMap[size]}
        width={sizeMap[size]}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 16 14'
        {...props}
      >
        <title>{title}</title>
        <path fill='currentColor' d='M0 14 8 0l8 14z' />
      </svg>
    )
  }
)
IconQualitiesTriangle.displayName = 'IconQualitiesTriangle'
