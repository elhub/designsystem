import { ChangeEvent, useContext } from 'react'
import { type CheckboxProps } from './Checkbox'
import { CheckboxGroupContext } from './CheckboxGroup'
import { useFormItemContext } from '../form-item/useFormItemContext'
import { type FormItemContextType } from '../form-item/FormItem'

type ExtendedInputProps = FormItemContextType['inputProps'] & {
  name?: string
  defaultChecked?: boolean
  checked?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  type: 'checkbox'
}

type UseCheckboxProps = FormItemContextType &
  Omit<CheckboxProps, 'error'> & {
    inputProps: ExtendedInputProps
  }

/**
 * Handles props for Checkboxes in context with Fieldset and CheckboxGroup
 */
const useCheckbox = (props: CheckboxProps): UseCheckboxProps => {
  const checkboxGroup = useContext(CheckboxGroupContext)

  const { inputProps, size: formItemSize, ...rest } = useFormItemContext()

  const _size = props.size ?? formItemSize

  if (checkboxGroup) {
    if (props.checked) {
      console.warn(
        '`checked` is unsupported on <Checkbox> elements within a <CheckboxGroup>. Please set a `value` or `defaultValue` on <CheckboxGroup> instead.'
      )
    }
    if (props.value === undefined) {
      console.warn('A <Checkbox> element within a <CheckboxGroup> requires a `value` property.')
    }
  }

  return {
    ...rest,
    size: _size,
    inputProps: {
      ...inputProps,
      disabled: props.disabled || inputProps.disabled,
      checked: checkboxGroup?.value ? checkboxGroup.value.includes(props.value) : props.checked,
      defaultChecked: checkboxGroup?.defaultValue
        ? checkboxGroup.defaultValue.includes(props.value)
        : props.defaultChecked,
      onChange: (e: ChangeEvent<HTMLInputElement>): void => {
        props.onChange?.(e)
        if (checkboxGroup) {
          checkboxGroup.toggleValue(props.value)
        }
      },
      type: 'checkbox'
    }
  }
}

export default useCheckbox
