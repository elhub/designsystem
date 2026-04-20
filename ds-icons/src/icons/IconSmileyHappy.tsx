import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconSmileyHappy = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <ellipse cx={6} cy={6.5} fill='currentColor' rx={1} ry={1.5} />
        <ellipse cx={1} cy={1.5} fill='currentColor' rx={1} ry={1.5} transform='matrix(-1 0 0 1 11 5)' />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          d='M5 10c.48 1.173 1.642 2 3 2s2.52-.827 3-2M4 4.821a3.22 3.22 0 0 1 2-.867M12 4.821a3.22 3.22 0 0 0-2-.867'
        />
      </svg>
    )
  }
)
IconSmileyHappy.displayName = 'IconSmileyHappy'
