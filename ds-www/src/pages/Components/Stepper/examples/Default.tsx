import { Heading, Stepper, type StepProps, VerticalSpace } from '@elhub/ds-components'

const horizontalSteps: StepProps[] = [
  { value: 1, title: 'Cart' },
  { value: 2, title: 'Shipping' },
  { value: 3, title: 'Payment' },
  { value: 4, title: 'Complete' }
]

const verticalSteps: StepProps[] = [
  { value: 1, title: 'Step One' },
  { value: 2, title: 'Step Two' },
  { value: 3, title: 'Step Three' }
]

export const StepperDefaultExample = () => (
  <div style={{ display: 'grid', gap: 24 }}>
    <div>
      <Heading size='medium' level='2'>
        Horizontal Stepper
      </Heading>
      <VerticalSpace />
      <Stepper steps={horizontalSteps} activeStep={2} orientation='horizontal' className='w-full max-w-lg' />
    </div>
    <div>
      <Heading size='medium' level='2'>
        Vertical Stepper
      </Heading>
      <VerticalSpace />
      <Stepper steps={verticalSteps} activeStep={1} orientation='vertical' className='h-full max-h-md' />
    </div>
  </div>
)
