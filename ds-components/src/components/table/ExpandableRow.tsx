import { IconChevronDown } from '@elhub/ds-icons'
import cl from 'clsx'
import React, { forwardRef, useState } from 'react'
import { UnmountClosed } from 'react-collapse'
import { useId } from 'util/index'
import DataCell from './DataCell'
import Row, { type RowProps } from './Row'

interface ExpandableRowProps extends Omit<RowProps, 'content'> {
  /**
   * Content of the expanded row
   */
  content: React.ReactNode | null
  /**
   * Placement of toggle button
   * @default "left"
   */
  togglePlacement?: 'left' | 'right'
  /**
   * Opens component if 'true', closes if 'false'
   * Using this props removes automatic control of open-state
   */
  open?: boolean
  /**
   * Opened state default
   * @default false
   */
  defaultOpen?: boolean
  /**
   * Change handler for open
   */
  onOpenChange?: (open: boolean) => void
  /**
   * Disable expansion
   * @default false
   */
  expansionDisabled?: boolean
}

export type ExpandableRowType = React.ForwardRefExoticComponent<
  ExpandableRowProps & React.RefAttributes<HTMLTableRowElement>
>

const ExpandableRow: ExpandableRowType = forwardRef(
  (
    {
      className,
      children,
      content,
      togglePlacement = 'left',
      defaultOpen = false,
      open,
      onOpenChange,
      expansionDisabled = false,
      ...rest
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState<boolean>(defaultOpen)
    const id = `expandable-${useId()}`

    const isOpen = open ?? internalOpen

    return (
      <>
        <Row
          {...rest}
          ref={ref}
          className={cl(
            'eds-table__expandable-row',
            {
              'eds-table__expandable-row--open': isOpen
            },
            className
          )}
        >
          {togglePlacement === 'right' && children}
          <DataCell
            className={cl('eds-table__toggle-expand-cell', {
              'eds-table__toggle-expand-cell--open': isOpen
            })}
          >
            {!expansionDisabled && (
              <button
                className='eds-table__toggle-expand-button'
                aria-controls={id}
                aria-expanded={isOpen}
                onClick={() => {
                  onOpenChange?.(!isOpen)
                  if (open === undefined) {
                    setInternalOpen((prevOpen) => !prevOpen)
                  }
                }}
              >
                <IconChevronDown className='eds-table__expandable-icon' />
              </button>
            )}
          </DataCell>
          {togglePlacement === 'left' && children}
        </Row>
        <tr className='eds-table__expanded-row' aria-hidden={!isOpen} id={id}>
          <td colSpan={999} className='eds-table__expanded-row-cell'>
            <UnmountClosed
              isOpened={isOpen}
              theme={{
                collapse: 'eds-table__expanded-row-collapse',
                content: 'eds-table__expanded-row-content'
              }}
            >
              {content}
            </UnmountClosed>
          </td>
        </tr>
      </>
    )
  }
)

ExpandableRow.displayName = 'Table.ExpandableRow'
export default ExpandableRow
