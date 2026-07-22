import { BodyText, Button, Checkbox, CheckboxGroup, FormItem, FormItemLabel } from '@elhub/ds-components'
import { useState } from 'react'

export const CheckboxGroupControlledExample = () => {
  const [shoppingList, setShoppingList] = useState<string[]>(['Milk'])

  return (
    <>
      <FormItem>
        <FormItemLabel>Shopping list</FormItemLabel>
        <CheckboxGroup
          value={shoppingList}
          onChange={(value) => {
            // @ts-expect-error value is always an array
            setShoppingList(value)
          }}
        >
          <Checkbox value='Eggs'>Eggs</Checkbox>
          <Checkbox value='Milk'>Milk</Checkbox>
          <Checkbox value='Coffee'>Coffee</Checkbox>
        </CheckboxGroup>
      </FormItem>
      <BodyText>You need {shoppingList.join(', ')}</BodyText>
      <Button
        onClick={() => {
          setShoppingList(['Eggs', 'Coffee'])
        }}
      >
        Reset to Eggs + Coffee
      </Button>
    </>
  )
}
