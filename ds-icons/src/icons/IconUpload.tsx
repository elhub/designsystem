import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconUpload = React.forwardRef<SVGSVGElement, SvgProps>(
  ({ size = 'small', title, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        height={sizeMap[size]}
        width={sizeMap[size]}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 16 17'
        {...props}
      >
        <title>{title}</title>
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M8 2.66666V9.66666M8 2.66666L10.5 4.66666M8 2.66666L5.5 4.66666'
        />
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M1 9.86667V12.8667C1 13.419 1.44772 13.8667 2 13.8667H14C14.5523 13.8667 15 13.419 15 12.8667V9.86667'
        />
      </svg>
    )
  }
)
IconUpload.displayName = 'IconUpload'
