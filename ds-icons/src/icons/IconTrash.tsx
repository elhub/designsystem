import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconTrash = React.forwardRef<SVGSVGElement, SvgProps>(
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
        <g clipPath='url(#IconTrash_svg__a)'>
          <path
            d='M1.19995 4.00635H14.8'
            stroke='currentColor'
            strokeWidth={1.6}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M11.6 15.2H4.40005C3.9757 15.2 3.56874 15.0314 3.26868 14.7314C2.96862 14.4313 2.80005 14.0243 2.80005 13.6V4H13.2V13.6C13.2 14.0243 13.0315 14.4313 12.7314 14.7314C12.4314 15.0314 12.0244 15.2 11.6 15.2Z'
            stroke='currentColor'
            strokeWidth={1.6}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M5.13281 4.00005V3.63365C5.13281 2.88213 5.43135 2.16139 5.96275 1.62999C6.49416 1.09859 7.2149 0.800049 7.96641 0.800049C8.71793 0.800049 9.43867 1.09859 9.97007 1.62999C10.5015 2.16139 10.8 2.88213 10.8 3.63365V4.00005'
            stroke='currentColor'
            strokeWidth={1.6}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M6.38232 7.19995V12'
            stroke='currentColor'
            strokeWidth={1.6}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M9.62402 7.19995V12'
            stroke='currentColor'
            strokeWidth={1.6}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
        <defs>
          <clipPath id='IconTrash_svg__a'>
            <rect width='16' height='16' fill='currentColor' />
          </clipPath>
        </defs>
      </svg>
    )
  }
)
IconTrash.displayName = 'IconTrash'
