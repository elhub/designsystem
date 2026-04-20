import { useContext } from 'react'
import { FormItemContext, type FormItemContextType } from './FormItem'

const defaultContext: FormItemContextType = {
  id: '',
  error: {
    id: '',
    hasError: false
  },
  hideLabel: false,
  descriptionId: '',
  size: 'medium',
  inputProps: {
    disabled: false
  }
}

/**
 * Custom hook to consume the FormContext.
 * Ensures that it is only used within a FormItem provider.
 *
 * @returns {FormItemContextType} The context value.
 */
export const useFormItemContext = (): FormItemContextType => {
  const context = useContext(FormItemContext)

  if (!context) {
    console.warn('useFormItemContext must be used within a FormItem provider')
    return defaultContext
  }

  return context
}
