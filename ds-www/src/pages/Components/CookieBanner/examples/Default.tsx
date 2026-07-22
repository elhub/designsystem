import {
  BodyText,
  Button,
  CookieBanner,
  CookieBannerActions,
  CookieBannerContent,
  CookieBannerDescription,
  CookieBannerTitle,
  Link
} from '@elhub/ds-components'
import { useState } from 'react'

export const CookieBannerDefaultExample = () => {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <>
      <BodyText>See bottom left corner 😊 If you close it, then refresh page to show it again! </BodyText>
      {showBanner && (
        <CookieBanner>
          <CookieBannerTitle>Only necessary cookies - simple and straightforward</CookieBannerTitle>
          <CookieBannerDescription>
            We only use cookies that are necessary for the website to function properly. By continuing to use
            the site, you agree to their use.
          </CookieBannerDescription>
          <CookieBannerContent>
            <Link external href='https://elhub.no/personvern-og-sikkerhet/'>
              Learn more about privacy and cookies
            </Link>
          </CookieBannerContent>
          <CookieBannerActions className='eds-cookie-banner__actions'>
            <Button variant='primary' onClick={() => setShowBanner(false)}>
              Close
            </Button>
          </CookieBannerActions>
        </CookieBanner>
      )}
    </>
  )
}
