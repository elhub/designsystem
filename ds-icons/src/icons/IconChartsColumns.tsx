import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconChartsColumns = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <g clipPath='url(#IconChartsColumns_svg__a)'>
          <path
            fill='currentColor'
            fillRule='evenodd'
            d='M2.4.8a.8.8 0 0 1 .8-.8H8a.8.8 0 0 1 .8.8v5.6h4a.8.8 0 0 1 .8.8v7.2h1.6a.8.8 0 0 1 0 1.6H.8a.8.8 0 0 1 0-1.6h1.6zM4 14.4h3.2V1.6H4zm4.8 0H12V8H8.8z'
            clipRule='evenodd'
          />
        </g>
        <defs>
          <clipPath id='IconChartsColumns_svg__a'>
            <path fill='currentColor' d='M0 0h16v16H0z' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)
IconChartsColumns.displayName = 'IconChartsColumns'
