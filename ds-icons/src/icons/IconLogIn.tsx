import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconLogIn = React.forwardRef<SVGSVGElement, SvgProps>(
  ({ size = 'small', title, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        height={sizeMap[size]}
        width={sizeMap[size]}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 17 17'
        {...props}
      >
        <title>{title}</title>
        <path
          stroke='currentColor'
          d='M4 6V2.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.25'
        />
        <path
          fill='currentColor'
          d='M0 8.5V9h12V8H0zm12.354.354a.5.5 0 0 0 0-.708L9.172 4.964a.5.5 0 0 0-.708.708L11.293 8.5l-2.829 2.828a.5.5 0 1 0 .708.708z'
        />
      </svg>
    )
  }
)
IconLogIn.displayName = 'IconLogIn'
