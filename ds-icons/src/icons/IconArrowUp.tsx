import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconArrowUp = React.forwardRef<SVGSVGElement, SvgProps>(
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
          d='M8 16a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5'
          clipRule='evenodd'
        />
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M.646 7.854a.5.5 0 0 1 0-.708l7-7a.5.5 0 0 1 .708 0l7 7a.5.5 0 0 1-.708.708L8 1.207 1.354 7.854a.5.5 0 0 1-.708 0'
          clipRule='evenodd'
        />
      </svg>
    )
  }
)
IconArrowUp.displayName = 'IconArrowUp'
