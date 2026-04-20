import { createContext, useContext } from 'react'

type SelectSize = 'small' | 'medium' | 'large'

interface SelectContextProps {
  size: SelectSize
}

export const SelectContext = createContext<SelectContextProps | undefined>(undefined)

export const useSelectContext = (): SelectContextProps => {
  const context = useContext<SelectContextProps | undefined>(SelectContext)
  if (!context) {
    throw new Error('useSelectContext must be used within a SelectProvider')
  }
  return context
}
