import * as React from 'react'
import cl from 'clsx'
import { OverridableComponent } from '../../util'
import { BodyText, BodyTextProps } from '../typography'

/* Cookie Banner */
const CookieBanner = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cl('eds-cookie-banner', className)} {...props} />
  )
)

CookieBanner.displayName = 'CookieBanner'

/* Cookie Banner Actions */
const CookieBannerActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cl('eds-cookie-banner__actions', className)} {...props}>
      {children}
    </div>
  )
)

CookieBannerActions.displayName = 'CookieBannerHeaderActions'

/* Cookie Banner Content */
const CookieBannerContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
)

CookieBannerContent.displayName = 'CookieBannerContent'

/* Cookie Banner Title */
type CookieBannerTitleProps = OverridableComponent<BodyTextProps>

const CookieBannerTitle: CookieBannerTitleProps = React.forwardRef(
  ({ as: Component = BodyText, className, ...props }, ref) => (
    <Component ref={ref} size='large' weight='bold' className={className} {...props} />
  )
)

CookieBannerTitle.displayName = 'CookieBannerTitle'

/* Cookie Banner Description */
const CookieBannerDescription: CookieBannerTitleProps = React.forwardRef(
  ({ as: Component = BodyText, className, ...props }, ref) => (
    <Component ref={ref} size='medium' className={className} {...props} />
  )
)

CookieBannerDescription.displayName = 'CookieBannerDescription'

export { CookieBanner, CookieBannerActions, CookieBannerContent, CookieBannerTitle, CookieBannerDescription }
