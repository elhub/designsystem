import { BodyText, FormItem, FormItemLabel, Radio, RadioGroup } from '@elhub/ds-components'
import { useState } from 'react'

export const RadioGroupControlledExample = () => {
  const [shoppingList, setShoppingList] = useState('Milk')

  return (
    <>
      <FormItem>
        <FormItemLabel>Shopping list</FormItemLabel>
        <RadioGroup
          value={shoppingList}
          defaultValue='Milk'
          onChange={(value) => setShoppingList(String(value))}
        >
          <Radio value='Eggs'>Eggs</Radio>
          <Radio value='Milk'>Milk</Radio>
          <Radio value='Coffee'>Coffee</Radio>
        </RadioGroup>
        <BodyText>Chosen item: {shoppingList}</BodyText>
      </FormItem>
    </>
  )
}
