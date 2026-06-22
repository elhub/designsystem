import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconChevronDoubleLeft = React.forwardRef<SVGSVGElement, SvgProps>(
  ({ size = 'small', title, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        height={sizeMap[size]}
        width={sizeMap[size]}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 15 16'
        {...props}
      >
        <title>{title}</title>
        <path
          fill='currentColor'
          d='M7.385.213a.665.665 0 0 1 .976 0c.269.284.269.744 0 1.028L1.95 8l6.41 6.759c.269.284.269.744 0 1.028a.665.665 0 0 1-.976 0L0 8zm6.422.018a.665.665 0 0 1 .974-.035.755.755 0 0 1 .033 1.027L8.816 8l5.998 6.777a.755.755 0 0 1-.033 1.027.665.665 0 0 1-.974-.035L6.929 8z'
        />
      </svg>
    )
  }
)
IconChevronDoubleLeft.displayName = 'IconChevronDoubleLeft'
