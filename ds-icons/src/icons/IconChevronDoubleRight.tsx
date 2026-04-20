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
        viewBox='0 0 18 18'
        {...props}
      >
        <title>{title}</title>
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.6}
          d='m8.999 17.182 7.916-7.538a.91.91 0 0 0 0-1.288L8.999.818M.818 17.182l7.916-7.538a.91.91 0 0 0 0-1.288L.818.818'
        />
      </svg>
    )
  }
)
IconChevronDoubleRight.displayName = 'IconChevronDoubleRight'
