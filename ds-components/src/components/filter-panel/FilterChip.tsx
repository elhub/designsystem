import cl from 'clsx'
import React, { forwardRef, useContext } from 'react'
import { type OverridableComponent } from '../../util'
import { type SvgIconProps } from '@elhub/ds-icons'
import { BodyText } from '../typography'
import { FilterPanelContext } from './FilterPanel'

export interface FilterChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Toggles aria-pressed and visual changes
   */
  selected?: boolean

  icon?: React.ComponentType<SvgIconProps>

  readOnly?: boolean

  iconColor?: string
}

const FilterChip: OverridableComponent<FilterChipProps> = forwardRef(
  (
    {
      className,
      children,
      selected,
      icon: Icon,
      iconColor,
      as: Component = 'button',
      readOnly = false,
      ...rest
    },
    ref
  ) => {
    const context = useContext(FilterPanelContext)

    const bodyTextSize = context?.size === 'large' ? 'medium' : 'small'
    return (
      <Component
        {...rest}
        ref={ref}
        className={cl('eds-filter-panel__chip', { 'eds-filter-panel__chip-readonly': readOnly }, className)}
        aria-pressed={selected}
      >
        {Icon && <Icon color={iconColor} />}
        {children && (
          <BodyText
            size={bodyTextSize}
            className='eds-filter-panel__chip-text'
            weight={selected ? 'bold' : 'regular'}
          >
            {children}
          </BodyText>
        )}
      </Component>
    )
  }
)

FilterChip.displayName = 'FilterChip'
export default FilterChip
