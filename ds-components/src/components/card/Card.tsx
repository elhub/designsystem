import * as React from 'react'
import cl from 'clsx'
import { OverridableComponent } from '../../util'
import { BodyText, BodyTextProps } from '../typography'

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cl('eds-card', className)} {...props} />
)
Card.displayName = 'Card'

type CardHeaderProps = OverridableComponent<React.HTMLAttributes<HTMLDivElement>>

const CardHeader: CardHeaderProps = React.forwardRef(
  ({ as: Component = 'div', className, children, ...props }, ref) => (
    <Component ref={ref} className={cl('eds-card__header', className)} {...props}>
      {children}
    </Component>
  )
)
CardHeader.displayName = 'CardHeader'

const CardHeaderContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cl('eds-card__header-content', className)} {...props}>
      {children}
    </div>
  )
)
CardHeaderContent.displayName = 'CardHeaderContent'

const CardHeaderActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cl('eds-card__header-actions', className)} {...props}>
      {children}
    </div>
  )
)
CardHeaderActions.displayName = 'CardHeaderActions'

type CardTitleProps = OverridableComponent<BodyTextProps>

const CardTitle: CardTitleProps = React.forwardRef(
  ({ as: Component = BodyText, className, ...props }, ref) => (
    <Component ref={ref} size='large' weight='bold' className={cl('eds-card__title', className)} {...props} />
  )
)
CardTitle.displayName = 'CardTitle'

const CardDescription: CardTitleProps = React.forwardRef(
  ({ as: Component = BodyText, className, ...props }, ref) => (
    <Component ref={ref} size='medium' className={cl('eds-card__description', className)} {...props} />
  )
)
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cl('eds-card__content', className)} {...props} />
  )
)
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cl('eds-card__footer', className)} {...props} />
)
CardFooter.displayName = 'CardFooter'

export {
  Card,
  CardHeader,
  CardHeaderActions,
  CardHeaderContent,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
}
