import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconStopWatch60 = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <circle cx={8} cy={9} r={6.5} stroke='currentColor' />
        <circle cx={8} cy={9} r={5} fill='currentColor' />
        <path fill='currentColor' d='M7 1h2v1.5H7z' />
        <path fill='currentColor' d='M6 1h4v1H6zM11.5 2l1.346.776-.5.867L11 2.866z' />
      </svg>
    )
  }
)
IconStopWatch60.displayName = 'IconStopWatch60'
