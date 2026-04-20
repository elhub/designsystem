// Stepper.tsx
import React from 'react'
import cl from 'clsx'
import { IconCheckCircle } from '@elhub/ds-icons'
import { BodyText } from 'dist'

export type StepProps = {
  value: number
  title: string
}

export type StepperProps = {
  steps: StepProps[]
  activeStep: number
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  className,
  orientation = 'horizontal'
}) => {
  const isVertical = orientation === 'vertical'

  return (
    <div className={cl('eds-stepper', `eds-stepper--${orientation}`, className)}>
      {steps.map((stepItem, idx) => {
        const { value, title } = stepItem
        const isCompleted = value < activeStep
        const isActive = value === activeStep

        return (
          <React.Fragment key={value}>
            <div className='eds-stepper-item'>
              <div
                className={cl('eds-stepper-circle', {
                  'eds-stepper-circle--active': isActive,
                  'eds-stepper-circle--completed': isCompleted
                })}
              >
                {isCompleted && (
                  <IconCheckCircle
                    className='eds-stepper-circle__icon-completed'
                    fill='eds-color-elhub-brand-green'
                  />
                )}
              </div>

              <div className='eds-stepper-labels'>
                <BodyText
                  size='small'
                  weight='semibold'
                  className={isActive ? 'eds-stepper-step-title--active' : 'eds-stepper-step-title'}
                >
                  {title}
                </BodyText>
              </div>
            </div>

            {idx < steps.length - 1 && (
              <div className={cl(isVertical ? 'eds-stepper-separator--vertical' : 'eds-stepper-separator')} />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
