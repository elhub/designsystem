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
        viewBox='0 0 18 18'
        {...props}
      >
        <title>{title}</title>
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.6}
          d='M9 17.182 1.086 9.644a.91.91 0 0 1 0-1.288L9.001.818m8.18 16.364L9.267 9.644a.91.91 0 0 1 0-1.288L17.182.818'
        />
      </svg>
    )
  }
)
IconChevronDoubleLeft.displayName = 'IconChevronDoubleLeft'
