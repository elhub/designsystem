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
          d='M15.2146 0.0654979C15.3904 -0.0319063 15.6044 -0.0200035 15.7688 0.0967486C15.933 0.21352 16.0206 0.415867 15.9959 0.620466L14.3959 13.8621C14.3757 14.0281 14.2837 14.1754 14.1459 14.263C14.008 14.3506 13.8388 14.3691 13.6865 14.3126L9.73349 12.8395L6.77313 15.8428C6.61985 15.9979 6.39173 16.0428 6.19398 15.957C5.99601 15.871 5.8669 15.6705 5.8669 15.4484V11.3987L0.353471 9.34694C0.15525 9.27312 0.0167864 9.08477 0.00139417 8.86741C-0.0137999 8.65034 0.0962168 8.44444 0.281597 8.34153L15.2146 0.0654979ZM6.93355 14.1348L8.61997 12.4246L6.93355 11.7963V14.1348ZM7.32521 10.7705L13.4199 13.0399L14.7261 2.23149L7.32521 10.7705ZM1.84094 8.72732L6.24294 10.3674L13.0449 2.51921L1.84094 8.72732Z'
          fill='currentColor'
        />
      </svg>
    )
  }
)

IconSend.displayName = 'IconSend'
