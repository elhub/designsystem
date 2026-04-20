import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconSmileySad = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <path
          stroke='currentColor'
          strokeLinecap='round'
          d='m7 4.5-.375.25M4 6.5l.375-.25M6.25 5l.375-.25M6.25 5l-1.125.75M6.25 5l-.375.25m.75-.5-1.5 1m0 0L4.75 6l-.375.25m.75-.5L5.5 5.5l.375-.25m0 0-1.5 1'
        />
        <ellipse cx={6} cy={6.5} fill='currentColor' rx={1} ry={1.5} />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          d='m9 4.5.375.25M12 6.5l-.375-.25M9.75 5l-.375-.25M9.75 5l1.125.75M9.75 5l.375.25m-.75-.5 1.5 1m0 0 .375.25.375.25m-.75-.5L10.5 5.5l-.375-.25m0 0 1.5 1'
        />
        <ellipse cx={1} cy={1.5} fill='currentColor' rx={1} ry={1.5} transform='matrix(-1 0 0 1 11 5)' />
        <ellipse cx={6} cy={6.5} fill='currentColor' rx={1} ry={1.5} />
        <ellipse cx={1} cy={1.5} fill='currentColor' rx={1} ry={1.5} transform='matrix(-1 0 0 1 11 5)' />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          d='M4 12c.5-.5 1.6-1.5 2-1.5S7.5 12 8 12c1 0 1.6-1.5 2-1.5s1.5 1 2 1.5'
        />
      </svg>
    )
  }
)
IconSmileySad.displayName = 'IconSmileySad'
