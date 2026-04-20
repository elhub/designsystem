import cl from 'clsx'
import React, { forwardRef, type HTMLAttributes } from 'react'
import { type OverridableComponent } from '../../util'
import FilterChip, { type FilterChipProps } from './FilterChip'
import { type FormItemSize } from '../form'

export interface FilterPanelProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * Changes padding and font-sizes.
   * @default "medium"
   */
  size?: FormItemSize
}

interface FilterPanelComponent extends React.ForwardRefExoticComponent<
  FilterPanelProps & React.RefAttributes<HTMLUListElement>
> {
  Chip: OverridableComponent<FilterChipProps>
}

interface FilterPanelContextProps {
  size: FormItemSize
}

export const FilterPanelContext = React.createContext<FilterPanelContextProps | null>(null)

const FilterPanel: FilterPanelComponent = forwardRef<HTMLUListElement, FilterPanelProps>(
  ({ className, size = 'medium', children, ...rest }, ref) => {
    return (
      <FilterPanelContext.Provider
        value={{
          size
        }}
      >
        <ul {...rest} ref={ref} className={cl('eds-filter-panel', className, `eds-filter-panel--${size}`)}>
          {React.Children.map(children, (chip, index) => {
            return <li key={chip?.toString() ?? index}>{chip}</li>
          })}
        </ul>
      </FilterPanelContext.Provider>
    )
  }
) as FilterPanelComponent

FilterPanel.Chip = FilterChip
FilterPanel.displayName = 'FilterPanel'

export default FilterPanel
