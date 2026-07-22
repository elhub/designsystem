import {
  Button,
  CookieBanner,
  CookieBannerActions,
  CookieBannerContent,
  CookieBannerDescription,
  CookieBannerTitle,
  Link
} from '@elhub/ds-components'

export const CookieBannerStaticExample = () => (
  <CookieBanner style={{ position: 'static', zIndex: 0 }}>
    <CookieBannerTitle>Only necessary cookies - simple and straightforward</CookieBannerTitle>
    <CookieBannerDescription>
      We only use cookies that are necessary for the website to function properly. By continuing to use the
      site, you agree to their use.
    </CookieBannerDescription>
    <CookieBannerContent>
      <Link external href='https://elhub.no/personvern-og-sikkerhet/'>
        Learn more about privacy and cookies
      </Link>
    </CookieBannerContent>
    <CookieBannerActions className='eds-cookie-banner__actions'>
      <Button variant='primary'>Close</Button>
    </CookieBannerActions>
  </CookieBanner>
)
