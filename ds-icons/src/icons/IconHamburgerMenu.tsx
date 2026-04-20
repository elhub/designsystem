import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconHamburgerMenu = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <rect width={12.8} height={1.714} x={3.2} y={12.286} fill='currentColor' rx={0.857} />
        <rect width={16} height={1.714} y={7.143} fill='currentColor' rx={0.857} />
        <rect width={12.8} height={1.714} x={3.2} y={2} fill='currentColor' rx={0.857} />
      </svg>
    )
  }
)
IconHamburgerMenu.displayName = 'IconHamburgerMenu'
