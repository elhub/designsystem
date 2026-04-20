import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconSmileyNeutral = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <circle cx={8} cy={8} r={7.5} stroke='currentColor' />
        <path stroke='currentColor' strokeLinecap='round' d='M7 4H4M9 4h3' />
        <ellipse cx={1} cy={1.5} fill='currentColor' rx={1} ry={1.5} transform='matrix(-1 0 0 1 11 5)' />
        <path stroke='currentColor' strokeLinecap='round' d='m5.058 10.415 5.884 1.17' />
        <ellipse cx={6.178} cy={6.5} fill='currentColor' rx={1} ry={1.5} />
      </svg>
    )
  }
)
IconSmileyNeutral.displayName = 'IconSmileyNeutral'
