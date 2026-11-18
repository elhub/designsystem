import { Alert, Link, VerticalSpace } from '@elhub/ds-components'

export const AlertMultiLineExample = () => {
  return (
    <>
      <Alert variant='error'>
        <div>The oven is not heating up</div>
        <div>
          We are currently experiencing problems with some ovens. This may affect the baking time of your
          cake.
        </div>
        <Link href='#alert-multi-line'>Read more about oven issues</Link>
      </Alert>
      <VerticalSpace />
      <Alert variant='warning' size='small' onClose={() => {}}>
        <div>Do not add eggs while the milk is hot</div>
        <div>Let the milk cool down for a few minutes before mixing in the eggs.</div>
      </Alert>
    </>
  )
}
