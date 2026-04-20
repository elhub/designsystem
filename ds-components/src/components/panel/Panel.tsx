import React, { forwardRef } from 'react'
import cl, { type ClassValue } from 'clsx'
import { type OverridableComponent } from 'util/index'

export interface PanelProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * adds a subtle background
   * @default false
   */
  background?: boolean

  /**
   * adds a border
   * @default false
   */
  border?: boolean

  /**
   * sets no padding
   * @default false
   */
  noPadding?: boolean
}

type PanelType = OverridableComponent<PanelProps>

const Panel: PanelType = forwardRef(
  (
    { className, border = false, noPadding = false, background = false, as: Component = 'div', ...rest },
    ref
  ) => {
    return (
      <Component
        {...rest}
        ref={ref}
        className={cl(
          'eds-panel',
          {
            'eds-panel--border': border,
            'eds-panel--no-padding': noPadding,
            'eds-panel--background': background
          },
          className as ClassValue
        )}
      />
    )
  }
)

Panel.displayName = 'Panel'
export default Panel
