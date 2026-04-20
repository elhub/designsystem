import * as RadixToggleGroup from '@radix-ui/react-toggle-group'
import cl from 'clsx'
import { BodyText } from 'components/typography'
import React, { forwardRef, useContext } from 'react'
import { ToggleGroupContext } from './ToggleGroup'

interface ToggleItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Content
   */
  children: React.ReactNode
  /**
   * Value for state-handling
   */
  value: string
  /**
   * Prevent the user from interacting with the button: it cannot be pressed or focused.
   * @note Avoid using if possible for accessibility purposes
   */
  disabled?: boolean
  /**
   * Value for focus
   */
  firstelement?: 'true'
}

export type ToggleItemType = React.ForwardRefExoticComponent<
  ToggleItemProps & React.RefAttributes<HTMLButtonElement>
>

const ToggleItem = forwardRef<HTMLButtonElement, ToggleItemProps>(({ className, children, ...rest }, ref) => {
  const context = useContext(ToggleGroupContext)

  return (
    <>
      <RadixToggleGroup.Item
        {...rest}
        ref={ref}
        className={cl('eds-toggle-group__button', `eds-toggle-group__button--${context?.size}`, className)}
        tabIndex={rest.firstelement ? -1 : 0}
      >
        <BodyText className='eds-toggle-group__button-inner' weight='bold' size={context?.labelSize}>
          {children}
        </BodyText>
      </RadixToggleGroup.Item>
      <div className='eds-toggle-group__divider' />
    </>
  )
}) as ToggleItemType

ToggleItem.displayName = 'ToggleGroup.Item'
export default ToggleItem
