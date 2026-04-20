import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconInformationCircleOutlined = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <g fill='currentColor' clipPath='url(#IconInformationCircleOutlined_svg__a)'>
          <path
            fillRule='evenodd'
            d='M2.343 2.343a8 8 0 1 1 11.314 11.314A8 8 0 0 1 2.343 2.343M8 1.6a6.4 6.4 0 1 0 0 12.8A6.4 6.4 0 0 0 8 1.6'
            clipRule='evenodd'
          />
          <path
            fillRule='evenodd'
            d='M8 7.6a.8.8 0 0 1 .8.8v3.2a.8.8 0 0 1-1.6 0V8.4a.8.8 0 0 1 .8-.8'
            clipRule='evenodd'
          />
          <path d='M6.8 5.2a1.2 1.2 0 1 0 2.4 0 1.2 1.2 0 0 0-2.4 0' />
        </g>
        <defs>
          <clipPath id='IconInformationCircleOutlined_svg__a'>
            <path fill='currentColor' d='M0 0h16v16H0z' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)
IconInformationCircleOutlined.displayName = 'IconInformationCircleOutlined'
