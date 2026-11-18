import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconTwoColumns = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <mask id='IconTwoColumns_svg__a' fill='#fff'>
          <path d='M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1z' />
        </mask>
        <rect
          width={7}
          height={16}
          stroke='currentColor'
          strokeWidth={3}
          mask='url(#IconTwoColumns_svg__a)'
          rx={1}
        />
        <mask id='IconTwoColumns_svg__b' fill='#fff'>
          <path d='M9 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z' />
        </mask>
        <rect
          width={7}
          height={16}
          x={9}
          stroke='currentColor'
          strokeWidth={3}
          mask='url(#IconTwoColumns_svg__b)'
          rx={1}
        />
      </svg>
    )
  }
)
IconTwoColumns.displayName = 'IconTwoColumns'
