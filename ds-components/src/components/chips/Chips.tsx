import cl from 'clsx'
import React, { type HTMLAttributes, forwardRef } from 'react'
import { type OverridableComponent } from '../../util'
import Chip, { type ChipProps } from './Chip'

export interface ChipsProps extends HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode
  /**
   * Changes padding and font-sizes.
   * @default "medium"
   */
  size?: 'large' | 'medium' | 'small'
}

interface ChipsComponent extends React.ForwardRefExoticComponent<
  ChipsProps & React.RefAttributes<HTMLUListElement>
> {
  /**
   * Remove filter or the likes on click.
   * @see 🏷️ {@link ChipProps}
   */
  Chip: OverridableComponent<ChipProps>
}

/**
 * A component that displays a list of items as chips.
 *
 * @see [📝 Documentation](https://aksel.nav.no/komponenter/core/chips)
 * @see 🏷️ {@link ChipsProps}
 *
 * @example
 * ```tsx
 <Chips size="small">
 {options.map((c) => (
 <Chips.Chip
 selected={selected.includes(c)}
 key={c}
 onClick={() =>
 setSelected(
 selected.includes(c)
 ? selected.filter((x) => x !== c)
 : [...selected, c]
 )
 }
 >
 {c}
 </Chips.Chip>
 ))}
 </Chips>
 * ```
 */
const Chips: ChipsComponent = forwardRef<HTMLUListElement, ChipsProps>(
  ({ className, size = 'medium', children, ...rest }, ref) => {
    const componentsSize = size === 'large' ? 'medium' : 'small'

    return (
      <ul {...rest} ref={ref} className={cl('eds-chips', className, `eds-chips--${size}`)}>
        {React.Children.map(children, (chip, index) => {
          if (!chip) {
            return null
          }

          return (
            <li
              key={chip?.toString() ?? index}
              className={cl('eds-body-text', `eds-body-text--${componentsSize}`)}
            >
              {chip}
            </li>
          )
        })}
      </ul>
    )
  }
) as ChipsComponent

Chips.displayName = 'Chips'

Chips.Chip = Chip

export default Chips
