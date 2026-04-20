import { ChangeEvent, useContext } from 'react'
import { type RadioProps } from './Radio'
import { RadioGroupContext } from './RadioGroup'
import { useFormItemContext } from '../form-item/useFormItemContext'
import { type FormItemContextType } from '../form-item/FormItem'

type ExtendedInputProps = FormItemContextType['inputProps'] & {
  name?: string
  checked?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  type: 'radio'
}

type UseRadioProps = FormItemContextType &
  Omit<RadioProps, 'children' | 'error'> & {
    inputProps: ExtendedInputProps
  }

/**
 * Handles props for Radios in context with Fieldset and RadioGroup
 */
export const useRadio = (props: RadioProps): UseRadioProps => {
  const radioGroup = useContext(RadioGroupContext)

  const { inputProps, size, ...rest } = useFormItemContext()

  const _size = props.size ?? size

  if (!radioGroup) {
    console.warn('<Radio> must be used inside <RadioGroup>.')
  }

  if (props?.required !== undefined) {
    console.warn('`required` is only supported on <RadioGroup>.')
  }

  const isControlled = radioGroup?.value !== undefined

  return {
    ...rest,
    size: _size,
    inputProps: {
      ...inputProps,
      name: radioGroup?.name,
      checked: isControlled ? radioGroup.value === props.value : undefined,
      onChange: (e: ChangeEvent<HTMLInputElement>): void => {
        props.onChange?.(e)
        radioGroup?.onChange?.(props.value)
      },
      required: radioGroup?.required,
      type: 'radio'
    }
  }
}
