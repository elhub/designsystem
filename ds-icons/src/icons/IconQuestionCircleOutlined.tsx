import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconQuestionCircleOutlined = React.forwardRef<SVGSVGElement, SvgProps>(
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
          d='M9.462 5.664A1.5 1.5 0 0 0 6.5 6a.5.5 0 0 1-1 0 2.5 2.5 0 1 1 3.333 2.357.5.5 0 0 0-.333.472V9.5a.5.5 0 0 1-1 0v-.67a1.5 1.5 0 0 1 1-1.415 1.5 1.5 0 0 0 .962-1.751M7.25 11.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0'
          clipRule='evenodd'
        />
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-6.5C4.134 1.5 1.5 4.134 1.5 8s2.634 6.5 6.5 6.5 6.5-2.634 6.5-6.5S11.866 1.5 8 1.5'
          clipRule='evenodd'
        />
      </svg>
    )
  }
)
IconQuestionCircleOutlined.displayName = 'IconQuestionCircleOutlined'
