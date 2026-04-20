import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconAlarmBell = React.forwardRef<SVGSVGElement, SvgProps>(
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
          d='M8.5.5a.5.5 0 0 0-1 0v1.022A5.5 5.5 0 0 0 2.5 7c0 2.072-.245 3.399-.48 4.192-.117.396-.23.66-.31.817a2 2 0 0 1-.107.188h-.001A.5.5 0 0 0 2 13h12a.5.5 0 0 0 .334-.872l-.001-.002a1 1 0 0 1-.066-.091 3 3 0 0 1-.29-.675c-.23-.723-.477-2.043-.477-4.36a5.5 5.5 0 0 0-5-5.478zM13.142 12H2.803q.088-.225.177-.525c.265-.901.52-2.325.52-4.475a4.5 4.5 0 1 1 9 0c0 2.38.253 3.81.523 4.663q.06.186.12.337'
          clipRule='evenodd'
        />
        <path
          fill='currentColor'
          d='M7.146 14.36a.5.5 0 0 0-.96.28 1.891 1.891 0 0 0 3.63 0 .5.5 0 0 0-.96-.28.891.891 0 0 1-1.71 0'
        />
      </svg>
    )
  }
)
IconAlarmBell.displayName = 'IconAlarmBell'
