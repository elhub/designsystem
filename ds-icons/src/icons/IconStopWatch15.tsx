import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconStopWatch15 = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <path fill='currentColor' d='M13 8a5 5 0 0 0-5-5v5z' />
        <circle cx={8} cy={8} r={6.5} stroke='currentColor' />
        <path fill='currentColor' d='M7 0h2v1.5H7z' />
        <path fill='currentColor' d='M6 0h4v1H6zM11.5 1l1.346.776-.5.867L11 1.866z' />
      </svg>
    )
  }
)
IconStopWatch15.displayName = 'IconStopWatch15'
