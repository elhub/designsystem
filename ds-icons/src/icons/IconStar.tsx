import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconStar = React.forwardRef<SVGSVGElement, SvgProps>(
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
          d='m8.468 1.037 2.156 4.272 4.15.411a.519.519 0 0 1 .322.886L11.681 9.99l1.266 4.6a.524.524 0 0 1-.741.603L7.998 13.11l-4.201 2.081a.524.524 0 0 1-.742-.602l1.266-4.6L.904 6.603a.519.519 0 0 1 .322-.885l4.15-.411 2.153-4.27a.528.528 0 0 1 .94 0'
        />
      </svg>
    )
  }
)
IconStar.displayName = 'IconStar'
