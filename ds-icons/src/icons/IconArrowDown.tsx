import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconArrowDown = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M8 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 8 0'
          clipRule='evenodd'
        />
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M15.354 8.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-7-7a.5.5 0 1 1 .708-.708L8 14.793l6.646-6.647a.5.5 0 0 1 .708 0'
          clipRule='evenodd'
        />
      </svg>
    )
  }
)
IconArrowDown.displayName = 'IconArrowDown'
