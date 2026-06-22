import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconChevronDoubleRight = React.forwardRef<SVGSVGElement, SvgProps>(
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
          d='M.21.213a.704.704 0 0 1 1.008 0L8.862 8l-7.644 7.787a.704.704 0 0 1-1.009 0 .737.737 0 0 1 0-1.028L6.843 8 .209 1.241a.737.737 0 0 1 0-1.028m7.137 0a.704.704 0 0 1 1.01 0L16 8l-7.643 7.787a.704.704 0 0 1-1.01 0 .737.737 0 0 1 0-1.028L13.981 8 7.347 1.241a.737.737 0 0 1 0-1.028'
        />
      </svg>
    )
  }
)
IconChevronDoubleRight.displayName = 'IconChevronDoubleRight'
