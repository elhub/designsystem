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
          d='M8 2.667v7m-2.5-5 2.5-2 2.5 2M1 9.867v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3'
        />
      </svg>
    )
  }
)
IconUpload.displayName = 'IconUpload'
