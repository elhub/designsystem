import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconValidationCheck = React.forwardRef<SVGSVGElement, SvgProps>(
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
          d='m13.582 5.201-6.286 8.25c-.133.174-.29.312-.463.406a1.14 1.14 0 0 1-.547.143 1.14 1.14 0 0 1-.547-.143 1.5 1.5 0 0 1-.463-.406L2.418 9.7C2.151 9.349 2 8.872 2 8.375s.15-.974.418-1.326.632-.55 1.01-.55c.38 0 .743.198 1.011.55l1.847 2.424 5.275-6.924c.133-.174.29-.312.463-.406A1.14 1.14 0 0 1 12.572 2c.188 0 .374.049.547.143s.33.232.463.406.238.381.31.609.109.47.109.717c0 .246-.037.49-.109.718a2 2 0 0 1-.31.608'
        />
      </svg>
    )
  }
)
IconValidationCheck.displayName = 'IconValidationCheck'
