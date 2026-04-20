import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconCopy = React.forwardRef<SVGSVGElement, SvgProps>(
  ({ size = 'small', title, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        height={sizeMap[size]}
        width={sizeMap[size]}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 16 17'
        {...props}
      >
        <title>{title}</title>
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M11 5.1a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 6.1v9a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 15.1v-3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 0 .5-.5zm1 .5v5.5a1.5 1.5 0 0 1-1.5 1.5H5v2.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z'
          clipRule='evenodd'
        />
        <rect width={10} height={11} x={1.5} y={1.1} stroke='currentColor' rx={1.5} />
      </svg>
    )
  }
)
IconCopy.displayName = 'IconCopy'
