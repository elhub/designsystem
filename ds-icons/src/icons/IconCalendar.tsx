import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconCalendar = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <g
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.6}
          clipPath='url(#IconCalendar_svg__a)'
        >
          <path d='M.8 2.4h14.4v12.8H.8zM4 .8V4M12 .8V4M.8 7.2h14.4' />
        </g>
        <defs>
          <clipPath id='IconCalendar_svg__a'>
            <path fill='currentColor' d='M0 0h16v16H0z' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)
IconCalendar.displayName = 'IconCalendar'
