import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconWarningTriangle = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <g clipPath='url(#IconWarningTriangle_svg__a)'>
          <path
            fill='currentColor'
            fillRule='evenodd'
            d='m9.997 1.178 5.603 10.05a3.215 3.215 0 0 1-2.817 4.77h-9.57a3.215 3.215 0 0 1-2.815-4.762L6.004 1.178a2.28 2.28 0 0 1 3.993 0M8 3.998a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1m0 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3'
            clipRule='evenodd'
          />
        </g>
        <defs>
          <clipPath id='IconWarningTriangle_svg__a'>
            <path fill='currentColor' d='M0 0h16v15.997H0z' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)
IconWarningTriangle.displayName = 'IconWarningTriangle'
