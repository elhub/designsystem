import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconThreeColumns = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <mask id='IconThreeColumns_svg__a' fill='currentColor'>
          <rect width={4} height={16} rx={1} />
        </mask>
        <rect
          width={4}
          height={16}
          stroke='currentColor'
          strokeWidth={3}
          mask='url(#IconThreeColumns_svg__a)'
          rx={1}
        />
        <mask id='IconThreeColumns_svg__b' fill='currentColor'>
          <rect width={4} height={16} x={6} rx={1} />
        </mask>
        <rect
          width={4}
          height={16}
          x={6}
          stroke='currentColor'
          strokeWidth={3}
          mask='url(#IconThreeColumns_svg__b)'
          rx={1}
        />
        <mask id='IconThreeColumns_svg__c' fill='currentColor'>
          <rect width={4} height={16} x={12} rx={1} />
        </mask>
        <rect
          width={4}
          height={16}
          x={12}
          stroke='currentColor'
          strokeWidth={3}
          mask='url(#IconThreeColumns_svg__c)'
          rx={1}
        />
      </svg>
    )
  }
)
IconThreeColumns.displayName = 'IconThreeColumns'
