import { IconChevronLeft as Back, IconChevronRight as Next } from '@elhub/ds-icons'
import { BodyText } from 'components/typography'
import React, { forwardRef } from 'react'
import PaginationItem, { type PaginationItemProps, type PaginationItemType } from './PaginationItem'
import { Button } from '../button'

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Number of always visible pages at the beginning and end.
   * @default 1
   */
  boundaryCount?: number

  /**
   * Total number of pages
   */
  count: number

  /**
   * Callback when current page changes
   */
  onPageChange?: (page: number) => void

  /**
   * Current page
   * @note Pagination indexing starts at 1
   */
  page: number

  /**
   * Override pagination item rendering
   * @default (item: PaginationItemProps) => <PaginationItem {...item} />
   */
  renderItem?: (item: PaginationItemProps) => ReturnType<React.FC>

  /**
   * Number of always visible pages before and after the current page.
   * @default 1
   */
  siblingCount?: number

  /**
   * Text for the "previous" button
   */
  prevText: string

  /**
   * Text for the "next" button
   */
  nextText: string
}

interface PaginationType extends React.ForwardRefExoticComponent<
  PaginationProps & React.RefAttributes<HTMLElement>
> {
  Item: PaginationItemType
}

const getSteps = ({
  page,
  count,
  boundaryCount = 1,
  siblingCount = 1
}: {
  page: number
  count: number
  boundaryCount: number
  siblingCount: number
}): Array<string | number> => {
  const range = (start: number, end: number): number[] =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i)

  if (count <= (boundaryCount + siblingCount) * 2 + 3) return range(1, count)

  const startPages = range(1, boundaryCount)
  const endPages = range(count - boundaryCount + 1, count)

  const siblingsStart = Math.max(
    Math.min(page - siblingCount, count - boundaryCount - siblingCount * 2 - 1),
    boundaryCount + 2
  )
  const siblingsEnd = siblingsStart + siblingCount * 2

  return [
    ...startPages,
    siblingsStart - (startPages[startPages.length - 1] ?? 0) === 2 ? siblingsStart - 1 : 'ellipsis',
    ...range(siblingsStart, siblingsEnd),
    (endPages[0] ?? count + 1) - siblingsEnd === 2 ? siblingsEnd + 1 : 'ellipsis',
    ...endPages
  ]
}

const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      page,
      onPageChange,
      count,
      boundaryCount = 1,
      siblingCount = 1,
      className,
      renderItem: Item = (item: PaginationItemProps) => <PaginationItem {...item} />,
      prevText,
      nextText,
      ...rest
    },
    ref
  ) => {
    if (page < 1) {
      console.error('page cannot be less than 1')
      return null
    }
    if (count < 1) {
      console.error('count cannot be less than 1')
      return null
    }
    if (boundaryCount < 0) {
      console.error('boundaryCount cannot be less than 0')
      return null
    }
    if (siblingCount < 0) {
      console.error('siblingCount cannot be less than 0')
      return null
    }

    return (
      <nav {...rest} ref={ref} className={className}>
        <ul className='eds-pagination__list'>
          <li>
            <Button
              type='button'
              variant='invisible'
              className='eds-pagination__prev-next'
              disabled={page === 1}
              onClick={() => onPageChange?.(page - 1)}
              icon={Back}
              iconProps={{
                className: 'eds-pagination__prev-next-icon'
              }}
            >
              {prevText && (
                <BodyText weight='bold' className='eds-pagination__prev-text'>
                  {prevText}
                </BodyText>
              )}
            </Button>
          </li>
          {getSteps({ page, count, siblingCount, boundaryCount }).map((step, i) => {
            const n = Number(step)
            return isNaN(n) ? (
              <li className='eds-pagination__ellipsis' key={`${step}${i}`}>
                <BodyText weight='bold'>...</BodyText>
              </li>
            ) : (
              <li key={step}>
                <Item onClick={() => onPageChange?.(n)} selected={page === n}>
                  <BodyText weight='bold'>{n}</BodyText>
                </Item>
              </li>
            )
          })}
          <li>
            <Button
              type='button'
              variant='invisible'
              className='eds-pagination__prev-next'
              disabled={page === count}
              onClick={() => onPageChange?.(page + 1)}
              icon={Next}
              iconProps={{
                className: 'eds-pagination__prev-next-icon'
              }}
              iconPosition='right'
            >
              {nextText && (
                <BodyText weight='bold' className='eds-pagination__next-text'>
                  {nextText}
                </BodyText>
              )}
            </Button>
          </li>
        </ul>
      </nav>
    )
  }
) as PaginationType

Pagination.Item = PaginationItem
Pagination.displayName = 'Pagination'
export default Pagination
