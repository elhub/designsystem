import * as React from 'react'
import { sizeMap, type SvgProps } from './types'
export const IconBuilding = React.forwardRef<SVGSVGElement, SvgProps>(
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
          d='M1 .727C1 .326 1.336 0 1.75 0h6c.414 0 .75.326.75.727v14.546a.74.74 0 0 1-.75.727h-6a.74.74 0 0 1-.75-.727zm1.5.728v13.09H7V1.456z'
          clipRule='evenodd'
        />
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M0 15.226c0-.428.326-.774.727-.774h14.546c.401 0 .727.346.727.774 0 .427-.326.774-.727.774H.727C.326 16 0 15.653 0 15.226'
          clipRule='evenodd'
        />
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M7.419 2.139a.78.78 0 0 1 .788.075l6.5 4.805a.71.71 0 0 1 .293.572v7.688c0 .398-.336.721-.75.721h-6.5c-.414 0-.75-.323-.75-.72V2.784c0-.274.162-.525.419-.646M8.5 4.249v10.31h5V7.945zM3.25 2.323h3v1.032h-3z'
          clipRule='evenodd'
        />
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M9.25 8.516h3v1.032h-3zM9.25 10.58h3v1.033h-3zM3.25 4.387h3V5.42h-3zM3.25 6.452h3v1.032h-3z'
          clipRule='evenodd'
        />
      </svg>
    )
  }
)
IconBuilding.displayName = 'IconBuilding'
