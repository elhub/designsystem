import cl from 'clsx'
import { Button, type ButtonProps } from 'components/button'
import React, { forwardRef } from 'react'
import { type OverridableComponent } from 'util/index'

export interface PaginationItemProps extends ButtonProps {
  children: React.ReactNode
  /**
   * Sets selected styling if true
   * @default false
   */
  selected?: boolean
}

export type PaginationItemType = OverridableComponent<PaginationItemProps>

const Item: PaginationItemType = forwardRef(
  ({ children, as: Component = 'button', selected = false, className, ...rest }, ref) => {
    return (
      <Button
        {...rest}
        ref={ref}
        className={cl(
          'eds-pagination__item',
          {
            'eds-pagination__item--selected': selected
          },
          className as string
        )}
        as={Component}
        variant={'tertiary'}
        aria-current={selected}
        type='button'
      >
        {children}
      </Button>
    )
  }
)

Item.displayName = 'Pagination.Item'
export default Item
