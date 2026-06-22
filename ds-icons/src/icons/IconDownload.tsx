import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconDownload = React.forwardRef<SVGSVGElement, SvgProps>(
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
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M1 9.667v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3m-7-.334v-7m2.5 5-2.5 2-2.5-2'
        />
      </svg>
    )
  }
)
IconDownload.displayName = 'IconDownload'
