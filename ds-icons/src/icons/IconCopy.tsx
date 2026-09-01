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
        viewBox='0 0 17 17'
        {...props}
      >
        <title>{title}</title>
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M11.777 5.223c0-.283-.187-.512.096-.512h3.072c.848 0 1.536.688 1.536 1.536v9.217c0 .848-.688 1.536-1.536 1.536H5.728a1.536 1.536 0 0 1-1.536-1.536v-3.072c0-.283.134 0 .416 0l6.24-.131c.283 0 .93-.61.93-.894zm.096.512v5.632c-.096.512-.608 1.025-1.024 1.024H5.216v3.073c0 .283.23.512.512.512h9.217c.283 0 .512-.23.512-.512V6.247a.51.51 0 0 0-.512-.512z'
          clipRule='evenodd'
        />
        <rect width={10.265} height={11.289} x={1.524} y={1.114} stroke='currentColor' rx={1.5} />
      </svg>
    )
  }
)
IconCopy.displayName = 'IconCopy'
