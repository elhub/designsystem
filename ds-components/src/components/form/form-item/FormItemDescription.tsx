import React from 'react'
import { BodyText, type BodyTextProps } from '../../typography'
import { formItemTextSizeMap } from './FormItemLabel'
import { useFormItemContext } from './useFormItemContext'
import cl from 'clsx'

type FormItemDescriptionProps = BodyTextProps & {
  htmlFor?: string
  children: React.ReactNode
  className?: string
}

const FormItemDescription = ({ htmlFor, className, children, ...rest }: FormItemDescriptionProps) => {
  const { descriptionId, size, id } = useFormItemContext()

  const resolvedHtmlFor = htmlFor ?? id

  return (
    <BodyText
      id={descriptionId}
      htmlFor={resolvedHtmlFor}
      size={formItemTextSizeMap[size]}
      className={cl('eds-form-item__description', className)}
      {...rest}
    >
      {children}
    </BodyText>
  )
}

FormItemDescription.displayName = 'FormItemDescription'
export default FormItemDescription
