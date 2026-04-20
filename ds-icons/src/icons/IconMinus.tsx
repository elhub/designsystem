import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconMinus = React.forwardRef<SVGSVGElement, SvgProps>(
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
          fillRule='evenodd'
          d='M2 8c0-.398.126-.78.351-1.06.226-.282.53-.44.849-.44h9.6c.318 0 .624.158.848.44.226.28.352.662.352 1.06s-.126.78-.351 1.06c-.225.282-.53.44-.849.44H3.2c-.318 0-.623-.158-.849-.44A1.7 1.7 0 0 1 2 8'
          clipRule='evenodd'
        />
      </svg>
    )
  }
)
IconMinus.displayName = 'IconMinus'
