import React from 'react'
import { BodyText } from '../../typography'

interface NoResultsProps {
  text: string
}

export const NoResults: React.FC<NoResultsProps> = ({ text }) => {
  return (
    <li>
      <BodyText size='small' className='eds-search__results-no-results'>
        {text}
      </BodyText>
    </li>
  )
}

NoResults.displayName = 'Search.NoResults'
