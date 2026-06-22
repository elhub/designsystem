import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconSend = React.forwardRef<SVGSVGElement, SvgProps>(
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
          fill='currentColor'
          d='M15.215.065a.52.52 0 0 1 .554.032.56.56 0 0 1 .227.523l-1.6 13.242a.55.55 0 0 1-.25.401.52.52 0 0 1-.46.05l-3.953-1.474-2.96 3.004a.52.52 0 0 1-.579.114.55.55 0 0 1-.327-.509v-4.05L.353 9.348a.55.55 0 0 1-.352-.48.56.56 0 0 1 .28-.525zm-8.281 14.07 1.686-1.71-1.686-.629zm.391-3.364 6.095 2.269L14.726 2.23zM1.841 8.727l4.402 1.64 6.802-7.848z'
        />
      </svg>
    )
  }
)
IconSend.displayName = 'IconSend'
