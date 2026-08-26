import { Chips } from '../../../chips'
import { useInputContext } from '../Input/inputContext'
import { type ComboboxOption } from '../types'
import { useSelectedOptionsContext } from './SelectedOptionsContext'
import React from 'react'
import cl from 'clsx'

interface SelectedOptionsProps {
  selectedOptions?: ComboboxOption[]
  size?: 'large' | 'medium' | 'small'
  children: React.ReactNode
  disabled?: boolean
}

const Option: React.FC<{ option: ComboboxOption; disabled: boolean }> = ({ option, disabled }) => {
  const { isMultiSelect, removeSelectedOption } = useSelectedOptionsContext()
  const { size } = useInputContext()
  const { focusInput } = useInputContext()

  const onDelete = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation()
    removeSelectedOption(option)
    focusInput()
  }

  if (!isMultiSelect) {
    return (
      <div
        className={cl(
          'eds-combobox__selected-options--no-bg eds-body-text',
          size === 'small' ? 'eds-body-text--small' : 'eds-body-text--medium'
        )}
      >
        {option.label}
      </div>
    )
  }

  return (
    <Chips.Chip disabled={disabled} onClick={onDelete}>
      {option.label}
    </Chips.Chip>
  )
}

const SelectedOptions: React.FC<SelectedOptionsProps> = ({
  selectedOptions = [],
  size,
  disabled = false,
  children
}) => {
  const { maxShown, isMultiSelect } = useSelectedOptionsContext()

  const visibleOptions = selectedOptions.slice(0, maxShown ?? selectedOptions.length)
  const remainingOptionsCount = selectedOptions.length - visibleOptions.length

  // When typing in single-select, remove the selected option from the chips and just render the Input
  if (!isMultiSelect) {
    return <Chips className='eds-combobox__selected-options'>{children}</Chips>
  }

  return (
    <Chips className='eds-combobox__selected-options' size={size}>
      {visibleOptions?.map((option, i) => (
        <Option disabled={disabled} key={option.label + i} option={option} />
      ))}
      {remainingOptionsCount > 0 && <Chips.Chip>{`+${remainingOptionsCount}`}</Chips.Chip>}
      {children}
    </Chips>
  )
}

export default SelectedOptions
