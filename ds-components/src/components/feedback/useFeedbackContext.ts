import { createContext, useContext } from 'react'
import { type FormItemSize } from '../form/form-item'

export type FeedbackType = 'happy' | 'neutral' | 'sad'

interface FeedbackContextType {
  size: FormItemSize
  hasError?: boolean
  feedbackType?: FeedbackType
  onFeedbackTypeChange?: (feedbackType: FeedbackType) => void
}

export const FeedbackContext = createContext<FeedbackContextType | null>(null)

export const useFeedbackContext = (): FeedbackContextType => {
  const context = useContext(FeedbackContext)
  if (!context) {
    return { size: 'medium', hasError: false }
  }
  return context
}
