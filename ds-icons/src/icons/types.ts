import { type HTMLAttributes, type SVGProps } from 'react'

type Size = 'xsmall' | 'small' | 'medium' | 'large'

export const sizeMap: Record<Size, string> = {
  xsmall: '0.75rem', // 12px
  small: '1rem', // 16px
  medium: '1.5rem', // 24px
  large: '2rem' // 32px
}

export type SvgProps = {
  size?: Size
  title?: string
} & SVGProps<SVGSVGElement> &
  HTMLAttributes<HTMLDivElement>
