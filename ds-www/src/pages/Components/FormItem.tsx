import {
  BodyText,
  Checkbox,
  Combobox,
  Datepicker,
  FormItem,
  FormItemDescription,
  FormItemLabel,
  Heading,
  Radio,
  RadioGroup,
  Select,
  SelectContent,
  SelectItem,
  Switch,
  Table,
  TextField,
  VerticalSpace
} from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React, { useState } from 'react'
import CodeDiv from '../../components/CodeDiv/CodeDiv'

const ComponentsFormItem: React.FC = () => {
  const options = [
    { label: 'Bicycle', value: 'bicycle' },
    { label: 'Car', value: 'car' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Truck', value: 'truck' },
    { label: 'Boat', value: 'boat' },
    { label: 'Airplane', value: 'airplane' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Submarine', value: 'submarine' }
  ]

  const [selectedSingleOptions, setSelectedSingleOptions] = useState([])
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='form-item' level='1' spacing>
        FormItem
      </Heading>
      <VerticalSpace />
      <BodyText>
        The <code>FormItem</code> component is a versatile container used in forms to wrap input elements like{' '}
        <code>TextField</code>, <code>Select</code>, <code>Datepicker</code>, and other form controls. It is
        designed to handle common label and helper functionality, making form creation more consistent and
        accessible across the application.
      </BodyText>
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='form-item-usage' level='2' spacing>
        Usage
      </Heading>
      <VerticalSpace />
      <BodyText>
        To use <code>FormItem</code>, wrap the input element (such as <code>TextField</code>) as a child of{' '}
        <code>FormItem</code>. Use <code>FormItemLabel</code> within the <code>FormItem</code> to define the
        label text and associate it with the input’s id for accessibility.
      </BodyText>
      <DemoableDiv
        alignContent='center'
        code={`import { FormItem, FormItemLabel, TextField, Datepicker, Select, SelectContent, SelectItem } from '@elhub/ds-components'

const Component = () => {
  return (
  <div>
    <FormItem id="feedback">
      <FormItemLabel>Provide some feedback</FormItemLabel>
      <TextField />
    </FormItem>
    <FormItem id="cake">
      <FormItemLabel>Choose a cake</FormItemLabel>
      <Select placeholder="Select a cake">
        <SelectContent>
           <SelectItem value="chocolateCake">Chocolate cake</SelectItem>
           <SelectItem value="cheeseCake">Cheesecake</SelectItem>
           <SelectItem value="carrotCake">Carrot cake</SelectItem>
        </SelectContent>
      </Select>
    </FormItem>
    <FormItem id="date" required>
      <FormItemLabel>Choose a date</FormItemLabel>
      <Datepicker />
    </FormItem>
    </>
  )
}`}
      >
        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '1fr 1fr' }}>
          <FormItem>
            <FormItemLabel>Textfield</FormItemLabel>
            <TextField />
          </FormItem>
          <FormItem>
            <FormItemLabel>Combobox</FormItemLabel>
            <Combobox
              options={options}
              onToggleSelected={(option: string, isSelected: boolean) => {
                if (isSelected) {
                  setSelectedSingleOptions([option])
                } else {
                  setSelectedSingleOptions([])
                }
              }}
              selectedOptions={options.filter((o) => selectedSingleOptions.includes(o.value))}
            />
          </FormItem>
          <FormItem>
            <FormItemLabel>Select</FormItemLabel>
            <Select placeholder='Select a cake'>
              <SelectContent>
                <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
                <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
                <SelectItem value='carrotCake'>Carrot cake</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
          <FormItem required>
            <FormItemLabel>Datepicker</FormItemLabel>
            <Datepicker />
          </FormItem>
          <div style={{ display: 'flex', gap: 16 }}>
            <FormItem>
              <FormItemLabel>Switch</FormItemLabel>
              <Switch />
            </FormItem>
            <FormItem>
              <FormItemLabel>Radio</FormItemLabel>
              <RadioGroup>
                <Radio />
              </RadioGroup>
            </FormItem>
            <FormItem>
              <FormItemLabel>Checkbox</FormItemLabel>
              <Checkbox />
            </FormItem>
          </div>
        </div>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='select-hide-label' level='2' spacing>
        Hide label
      </Heading>

      <BodyText>
        To hide the label text from view while keeping it accessible to screen readers, use the{' '}
        <code>hideLabel</code> prop in <code>FormItemLabel</code>.
      </BodyText>
      <VerticalSpace />

      <DemoableDiv
        alignContent='center'
        code={`import { FormItem, FormItemLabel, TextField } from '@elhub/ds-components'

const Component = () => {
  return (
  <FormItem id="hidden">
    <FormItemLabel hideLabel>Hidden label</FormItemLabel>
    <TextField />
  </FormItem>
  )
}`}
      >
        <FormItem>
          <FormItemLabel hideLabel>Hidden label</FormItemLabel>
          <TextField />
        </FormItem>
      </DemoableDiv>

      <Heading className='toc' size='medium' id='form-item-sizes' level='2' spacing>
        Sizes
      </Heading>
      <VerticalSpace />
      <BodyText>
        The <code>FormItem</code> component supports three sizes: <code>small</code>, <code>medium</code>, and{' '}
        <code>large</code>. The default size is <code>medium</code>.
      </BodyText>
      <VerticalSpace />
      <CodeDiv expand={false} spacing>
        export type FormItemSize = 'large' | 'medium' | 'small'
      </CodeDiv>

      <DemoableDiv
        alignContent='center'
        code={`import { FormItem, FormItemLabel, TextField, Datepicker, Select, SelectContent, SelectItem } from '@elhub/ds-components'

const Component = () => {
  return (
      <div>
          <div>
            <Heading size='small'>Small</Heading>
            <FormItem size='small'>
              <FormItemLabel>Provide some feedback</FormItemLabel>
              <TextField />
            </FormItem>
            <FormItem size='small'>
              <FormItemLabel>Combobox</FormItemLabel>
              <Combobox
                options={options}
                onToggleSelected={(option: string, isSelected: boolean) => {
                  if (isSelected) {
                    setSelectedSingleOptions([option])
                  } else {
                    setSelectedSingleOptions([])
                  }
                }}
                selectedOptions={options.filter((o) => selectedSingleOptions.includes(o.value))}
              />
            </FormItem>
            <FormItem size='small'>
              <FormItemLabel>Choose a cake</FormItemLabel>
              <Select placeholder='Select a cake'>
                <SelectContent>
                  <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
                  <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
                  <SelectItem value='carrotCake'>Carrot cake</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
            <FormItem size='small' required>
              <FormItemLabel>Choose a date</FormItemLabel>
              <Datepicker />
            </FormItem>
            <FormItem size='small'>
              <FormItemLabel>Switch</FormItemLabel>
              <Switch />
            </FormItem>
            <FormItem size='small'>
              <FormItemLabel>Radio</FormItemLabel>
              <RadioGroup>
                <Radio />
              </RadioGroup>
            </FormItem>
            <FormItem size='small'>
              <FormItemLabel>Checkbox</FormItemLabel>
              <Checkbox />
            </FormItem>
          </div>
          <div>
            <Heading size='small'>Medium</Heading>
            <FormItem size='medium'>
              <FormItemLabel>Provide some feedback</FormItemLabel>
              <TextField />
            </FormItem>
            <FormItem size='medium'>
              <FormItemLabel>Choose a cake</FormItemLabel>
              <Select placeholder='Select a cake'>
                <SelectContent>
                  <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
                  <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
                  <SelectItem value='carrotCake'>Carrot cake</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
            <FormItem size='medium'>
              <FormItemLabel>Combobox</FormItemLabel>
              <Combobox
                options={options}
                onToggleSelected={(option: string, isSelected: boolean) => {
                  if (isSelected) {
                    setSelectedSingleOptions([option])
                  } else {
                    setSelectedSingleOptions([])
                  }
                }}
                selectedOptions={options.filter((o) => selectedSingleOptions.includes(o.value))}
              />
            </FormItem>
            <FormItem size='medium' required>
              <FormItemLabel>Choose a date</FormItemLabel>
              <Datepicker />
            </FormItem>
            <FormItem size='medium'>
              <FormItemLabel>Switch</FormItemLabel>
              <Switch />
            </FormItem>
            <FormItem size='medium'>
              <FormItemLabel>Radio</FormItemLabel>
              <RadioGroup>
                <Radio />
              </RadioGroup>
            </FormItem>
            <FormItem size='medium'>
              <FormItemLabel>Checkbox</FormItemLabel>
              <Checkbox />
            </FormItem>
          </div>
          <div>
            <Heading size='small'>Large</Heading>
            <FormItem size='large'>
              <FormItemLabel>Provide some feedback</FormItemLabel>
              <TextField />
            </FormItem>
            <FormItem size='large'>
              <FormItemLabel>Combobox</FormItemLabel>
              <Combobox
                options={options}
                onToggleSelected={(option: string, isSelected: boolean) => {
                  if (isSelected) {
                    setSelectedSingleOptions([option])
                  } else {
                    setSelectedSingleOptions([])
                  }
                }}
                selectedOptions={options.filter((o) => selectedSingleOptions.includes(o.value))}
              />
            </FormItem>
            <FormItem size='large'>
              <FormItemLabel>Choose a cake</FormItemLabel>
              <Select placeholder='Select a cake'>
                <SelectContent>
                  <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
                  <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
                  <SelectItem value='carrotCake'>Carrot cake</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
            <FormItem size='large' required>
              <FormItemLabel>Choose a date</FormItemLabel>
              <Datepicker />
            </FormItem>
            <FormItem size='large'>
              <FormItemLabel>Switch</FormItemLabel>
              <Switch />
            </FormItem>
            <FormItem size='large'>
              <FormItemLabel>Radio</FormItemLabel>
              <RadioGroup>
                <Radio />
              </RadioGroup>
            </FormItem>
            <FormItem size='large'>
              <FormItemLabel>Checkbox</FormItemLabel>
              <Checkbox />
            </FormItem>
          </div>
        </div>
  )
}`}
      >
        <div style={{ display: 'grid', gap: 24 }}>
          <div>
            <Heading size='small'>Small</Heading>
            <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '1fr 1fr' }}>
              <FormItem size='small'>
                <FormItemLabel>Provide some feedback</FormItemLabel>
                <TextField />
              </FormItem>
              <FormItem size='small'>
                <FormItemLabel>Combobox</FormItemLabel>
                <Combobox
                  options={options}
                  onToggleSelected={(option: string, isSelected: boolean) => {
                    if (isSelected) {
                      setSelectedSingleOptions([option])
                    } else {
                      setSelectedSingleOptions([])
                    }
                  }}
                  selectedOptions={options.filter((o) => selectedSingleOptions.includes(o.value))}
                />
              </FormItem>
              <FormItem size='small'>
                <FormItemLabel>Choose a cake</FormItemLabel>
                <Select placeholder='Select a cake'>
                  <SelectContent>
                    <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
                    <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
                    <SelectItem value='carrotCake'>Carrot cake</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
              <FormItem size='small' required>
                <FormItemLabel>Choose a date</FormItemLabel>
                <Datepicker />
              </FormItem>
              <div style={{ display: 'flex', gap: 16 }}>
                <FormItem size='small'>
                  <FormItemLabel>Switch</FormItemLabel>
                  <Switch />
                </FormItem>
                <FormItem size='small'>
                  <FormItemLabel>Radio</FormItemLabel>
                  <RadioGroup>
                    <Radio />
                  </RadioGroup>
                </FormItem>
                <FormItem size='small'>
                  <FormItemLabel>Checkbox</FormItemLabel>
                  <Checkbox />
                </FormItem>
              </div>
            </div>
          </div>
          <div>
            <Heading size='small'>Medium</Heading>
            <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '1fr 1fr' }}>
              <FormItem size='medium'>
                <FormItemLabel>Provide some feedback</FormItemLabel>
                <TextField />
              </FormItem>
              <FormItem size='medium'>
                <FormItemLabel>Choose a cake</FormItemLabel>
                <Select placeholder='Select a cake'>
                  <SelectContent>
                    <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
                    <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
                    <SelectItem value='carrotCake'>Carrot cake</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
              <FormItem size='medium'>
                <FormItemLabel>Combobox</FormItemLabel>
                <Combobox
                  options={options}
                  onToggleSelected={(option: string, isSelected: boolean) => {
                    if (isSelected) {
                      setSelectedSingleOptions([option])
                    } else {
                      setSelectedSingleOptions([])
                    }
                  }}
                  selectedOptions={options.filter((o) => selectedSingleOptions.includes(o.value))}
                />
              </FormItem>
              <FormItem size='medium' required>
                <FormItemLabel>Choose a date</FormItemLabel>
                <Datepicker />
              </FormItem>
              <div style={{ display: 'flex', gap: 16 }}>
                <FormItem size='medium'>
                  <FormItemLabel>Switch</FormItemLabel>
                  <Switch />
                </FormItem>
                <FormItem size='medium'>
                  <FormItemLabel>Radio</FormItemLabel>
                  <RadioGroup>
                    <Radio />
                  </RadioGroup>
                </FormItem>
                <FormItem size='medium'>
                  <FormItemLabel>Checkbox</FormItemLabel>
                  <Checkbox />
                </FormItem>
              </div>
            </div>
          </div>
          <div>
            <Heading size='small'>Large</Heading>
            <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '1fr 1fr' }}>
              <FormItem size='large'>
                <FormItemLabel>Provide some feedback</FormItemLabel>
                <TextField />
              </FormItem>
              <FormItem size='large'>
                <FormItemLabel>Combobox</FormItemLabel>
                <Combobox
                  options={options}
                  onToggleSelected={(option: string, isSelected: boolean) => {
                    if (isSelected) {
                      setSelectedSingleOptions([option])
                    } else {
                      setSelectedSingleOptions([])
                    }
                  }}
                  selectedOptions={options.filter((o) => selectedSingleOptions.includes(o.value))}
                />
              </FormItem>
              <FormItem size='large'>
                <FormItemLabel>Choose a cake</FormItemLabel>
                <Select placeholder='Select a cake'>
                  <SelectContent>
                    <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
                    <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
                    <SelectItem value='carrotCake'>Carrot cake</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
              <FormItem size='large' required>
                <FormItemLabel>Choose a date</FormItemLabel>
                <Datepicker />
              </FormItem>
              <div style={{ display: 'flex', gap: 16 }}>
                <FormItem size='large'>
                  <FormItemLabel>Switch</FormItemLabel>
                  <Switch />
                </FormItem>
                <FormItem size='large'>
                  <FormItemLabel>Radio</FormItemLabel>
                  <RadioGroup>
                    <Radio />
                  </RadioGroup>
                </FormItem>
                <FormItem size='large'>
                  <FormItemLabel>Checkbox</FormItemLabel>
                  <Checkbox />
                </FormItem>
              </div>
            </div>
          </div>
        </div>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='form-item-sizes' level='2' spacing>
        Error
      </Heading>
      <VerticalSpace />
      <BodyText>
        To indicate that if a field contains error, add the <code>error</code> prop to the{' '}
        <code>FormItem</code>.
      </BodyText>
      <VerticalSpace />

      <DemoableDiv
        alignContent='center'
        code={`import { FormItem, FormItemLabel, TextField } from '@elhub/ds-components'

const Component = () => {
return (
<div>
   <FormItem error='This field is required'>
    <FormItemLabel>Provide some feedback</FormItemLabel>
    <TextField />
  </FormItem>
  <FormItem error='This field is required'>
    <FormItemLabel>Combobox</FormItemLabel>
    <Combobox
      options={options}
      onToggleSelected={(option: string, isSelected: boolean) => {
        if (isSelected) {
          setSelectedSingleOptions([option])
        } else {
          setSelectedSingleOptions([])
        }
      }}
      selectedOptions={options.filter((o) => selectedSingleOptions.includes(o.value))}
    />
  </FormItem>
  <FormItem error='This field is required'>
    <FormItemLabel>Provide some feedback</FormItemLabel>
    <Select placeholder='Select a cake'>
      <SelectContent>
        <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
        <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
        <SelectItem value='carrotCake'>Carrot cake</SelectItem>
      </SelectContent>
    </Select>
  </FormItem>
  <FormItem error='This field is required'>
    <FormItemLabel>Provide some feedback</FormItemLabel>
    <Datepicker />
  </FormItem>
  <FormItem error='This field is required'>
    <FormItemLabel>Provide some feedback</FormItemLabel>
    <Switch />
  </FormItem>
  <FormItem error='This field is required'>
    <FormItemLabel>Provide some feedback</FormItemLabel>
    <RadioGroup>
      <Radio />
    </RadioGroup>
  </FormItem>
  <FormItem error='This field is required'>
    <FormItemLabel>Provide some feedback</FormItemLabel>
    <Checkbox />
  </FormItem>
</div>
)
}`}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <FormItem error='This field is required'>
            <FormItemLabel>Provide some feedback</FormItemLabel>
            <TextField />
          </FormItem>
          <FormItem error='This field is required'>
            <FormItemLabel>Combobox</FormItemLabel>
            <Combobox
              options={options}
              onToggleSelected={(option: string, isSelected: boolean) => {
                if (isSelected) {
                  setSelectedSingleOptions([option])
                } else {
                  setSelectedSingleOptions([])
                }
              }}
              selectedOptions={options.filter((o) => selectedSingleOptions.includes(o.value))}
            />
          </FormItem>
          <FormItem error='This field is required'>
            <FormItemLabel>Provide some feedback</FormItemLabel>
            <Select placeholder='Select a cake'>
              <SelectContent>
                <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
                <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
                <SelectItem value='carrotCake'>Carrot cake</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
          <FormItem error='This field is required'>
            <FormItemLabel>Provide some feedback</FormItemLabel>
            <Datepicker />
          </FormItem>
          <FormItem error='This field is required'>
            <FormItemLabel>Provide some feedback</FormItemLabel>
            <Switch />
          </FormItem>
          <FormItem error='This field is required'>
            <FormItemLabel>Provide some feedback</FormItemLabel>
            <RadioGroup>
              <Radio />
            </RadioGroup>
          </FormItem>
          <FormItem error='This field is required'>
            <FormItemLabel>Provide some feedback</FormItemLabel>
            <Checkbox />
          </FormItem>
        </div>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='form-item-sizes' level='2' spacing>
        Disabled
      </Heading>
      <VerticalSpace />
      <BodyText>
        To indicate that if a field is diabled, add the <code>disabled</code> prop to the{' '}
        <code>inputProps</code> in <code>FormItem</code>.
      </BodyText>
      <VerticalSpace />

      <DemoableDiv
        alignContent='center'
        code={`import { FormItem, FormItemLabel, TextField } from '@elhub/ds-components'

const Component = () => {
return (
          <FormItem inputProps={{ disabled: true }}>
            <FormItemLabel>Provide some feedback</FormItemLabel>
            <TextField />
          </FormItem>
          <FormItem inputProps={{ disabled: true }}>
            <FormItemLabel>Combobox</FormItemLabel>
            <Combobox
              options={options}
              onToggleSelected={(option: string, isSelected: boolean) => {
                if (isSelected) {
                  setSelectedSingleOptions([option])
                } else {
                  setSelectedSingleOptions([])
                }
              }}
              selectedOptions={options.filter((o) => selectedSingleOptions.includes(o.value))}
            />
          </FormItem>
          <FormItem inputProps={{ disabled: true }}>
            <FormItemLabel>Provide some feedback</FormItemLabel>
            <Select placeholder='Select a cake'>
              <SelectContent>
                <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
                <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
                <SelectItem value='carrotCake'>Carrot cake</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
          <FormItem inputProps={{ disabled: true }}>
            <FormItemLabel>Provide some feedback</FormItemLabel>
            <Datepicker />
          </FormItem>
          <FormItem inputProps={{ disabled: true }}>
            <FormItemLabel>Provide some feedback</FormItemLabel>
            <Switch />
          </FormItem>
          <FormItem inputProps={{ disabled: true }}>
            <FormItemLabel>Provide some feedback</FormItemLabel>
            <RadioGroup>
              <Radio />
            </RadioGroup>
          </FormItem>
          <FormItem inputProps={{ disabled: true }}>
            <FormItemLabel>Provide some feedback</FormItemLabel>
            <Checkbox />
          </FormItem>
)
}`}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <FormItem inputProps={{ disabled: true }}>
            <FormItemLabel>Provide some feedback</FormItemLabel>
            <TextField />
          </FormItem>
          <FormItem inputProps={{ disabled: true }}>
            <FormItemLabel>Combobox</FormItemLabel>
            <Combobox
              options={options}
              onToggleSelected={(option: string, isSelected: boolean) => {
                if (isSelected) {
                  setSelectedSingleOptions([option])
                } else {
                  setSelectedSingleOptions([])
                }
              }}
              selectedOptions={options.filter((o) => selectedSingleOptions.includes(o.value))}
            />
          </FormItem>
          <FormItem inputProps={{ disabled: true }}>
            <FormItemLabel>Provide some feedback</FormItemLabel>
            <Select placeholder='Select a cake'>
              <SelectContent>
                <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
                <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
                <SelectItem value='carrotCake'>Carrot cake</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
          <FormItem inputProps={{ disabled: true }}>
            <FormItemLabel>Provide some feedback</FormItemLabel>
            <Datepicker />
          </FormItem>
          <FormItem inputProps={{ disabled: true }}>
            <FormItemLabel>Provide some feedback</FormItemLabel>
            <Switch />
          </FormItem>
          <FormItem inputProps={{ disabled: true }}>
            <FormItemLabel>Provide some feedback</FormItemLabel>
            <RadioGroup>
              <Radio />
            </RadioGroup>
          </FormItem>
          <FormItem inputProps={{ disabled: true }}>
            <FormItemLabel>Provide some feedback</FormItemLabel>
            <Checkbox />
          </FormItem>
        </div>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='form-item-required' level='2' spacing>
        Required
      </Heading>
      <VerticalSpace />
      <BodyText>
        To indicate that a field is required, add the <code>required</code> prop to the{' '}
        <code>inputProps</code> in <code>FormItem</code>.
      </BodyText>
      <VerticalSpace />

      <DemoableDiv
        alignContent='center'
        code={`import { FormItem, FormItemDescription, FormItemLabel, TextField } from '@elhub/ds-components'

const Component = () => {
return (
<div>
 <FormItem inputProps={{ required: true }}>
   <FormItemLabel>Provide some feedback</FormItemLabel>
   <FormItemDescription>Feedback is required</FormItemDescription>
   <TextField />
  </FormItem>
</div>
)
}`}
      >
        <div>
          <FormItem inputProps={{ required: true }}>
            <FormItemLabel>Provide some feedback</FormItemLabel>
            <FormItemDescription>Feedback is required</FormItemDescription>
            <TextField />
          </FormItem>
        </div>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='form-item-desc' level='2' spacing>
        Description
      </Heading>
      <VerticalSpace />
      <BodyText>
        You may need to provide additional information about a form field. Use the{' '}
        <code>FormItemDescription</code> component to add a description to the <code>FormItem</code>.
      </BodyText>
      <VerticalSpace />

      <DemoableDiv
        alignContent='center'
        code={`import { FormItem, FormItemDescription, FormItemLabel, TextField, Datepicker, Select, SelectContent, SelectItem } from '@elhub/ds-components'

const Component = () => {
  return (
    <div>
      <FormItem>
        <FormItemLabel>Provide some feedback</FormItemLabel>
        <FormItemDescription>Feedback is valuable</FormItemDescription>
        <TextField />
      </FormItem>
       <FormItem>
            <FormItemLabel>Choose a cake</FormItemLabel>
            <FormItemDescription>Do you like cake?</FormItemDescription>
            <Combobox
              options={options}
              onToggleSelected={(option: string, isSelected: boolean) => {
                if (isSelected) {
                  setSelectedSingleOptions([option])
                } else {
                  setSelectedSingleOptions([])
                }
              }}
              selectedOptions={options.filter((o) => selectedSingleOptions.includes(o.value))}
            />
          </FormItem>
          <FormItem>
      <FormItem>
        <FormItemLabel>Choose a cake</FormItemLabel>
        <FormItemDescription>Do you like cake?</FormItemDescription>
        <Select placeholder='Select a cake'>
          <SelectContent>
            <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
            <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
            <SelectItem value='carrotCake'>Carrot cake</SelectItem>
          </SelectContent>
        </Select>
      </FormItem>
      <FormItem>
        <FormItemLabel>Choose a date</FormItemLabel>
        <FormItemDescription>When is the event?</FormItemDescription>
        <Datepicker />
      </FormItem>
      <FormItem>
        <FormItemLabel>Switch</FormItemLabel>
        <FormItemDescription>Enable it?</FormItemDescription>
        <Switch />
      </FormItem>
      <FormItem>
        <FormItemLabel>Radio</FormItemLabel>
        <FormItemDescription>Check me</FormItemDescription>
        <Radio />
      </FormItem>
      <FormItem>
        <FormItemLabel>Checkbox</FormItemLabel>
        <FormItemDescription>Check me </FormItemDescription>
        <Checkbox />
      </FormItem>
    </div>
  )
}`}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <FormItem>
            <FormItemLabel>Provide some feedback</FormItemLabel>
            <FormItemDescription>Feedback is valuable</FormItemDescription>
            <TextField />
          </FormItem>
          <FormItem>
            <FormItemLabel>Choose a cake</FormItemLabel>
            <FormItemDescription>Do you like cake?</FormItemDescription>
            <Select placeholder='Select a cake'>
              <SelectContent>
                <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
                <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
                <SelectItem value='carrotCake'>Carrot cake</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
          <FormItem>
            <FormItemLabel>Choose a cake</FormItemLabel>
            <FormItemDescription>Do you like cake?</FormItemDescription>
            <Combobox
              options={options}
              onToggleSelected={(option: string, isSelected: boolean) => {
                if (isSelected) {
                  setSelectedSingleOptions([option])
                } else {
                  setSelectedSingleOptions([])
                }
              }}
              selectedOptions={options.filter((o) => selectedSingleOptions.includes(o.value))}
            />
          </FormItem>
          <FormItem>
            <FormItemLabel>Choose a date</FormItemLabel>
            <FormItemDescription>When is the event?</FormItemDescription>
            <Datepicker />
          </FormItem>
          <FormItem>
            <FormItemLabel>Switch</FormItemLabel>
            <FormItemDescription>Enable it?</FormItemDescription>
            <Switch />
          </FormItem>
          <FormItem>
            <FormItemLabel>Radio</FormItemLabel>
            <FormItemDescription>Check me</FormItemDescription>
            <RadioGroup>
              <Radio />
            </RadioGroup>
          </FormItem>
          <FormItem>
            <FormItemLabel>Checkbox</FormItemLabel>
            <FormItemDescription>Check me </FormItemDescription>
            <Checkbox />
          </FormItem>
        </div>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='properties' level='2' spacing>
        Props table
      </Heading>

      <VerticalSpace size='1' />

      <BodyText size='large'>
        <code>FormItem</code>
      </BodyText>
      <VerticalSpace size='1' />
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Required</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>id</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>
              The <code>id</code> of the input field associated with this label, used for accessibility.
            </Table.DataCell>
            <Table.DataCell>No (generated if not provided)</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>hideLabel</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Visually hide the FormItemLabel</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>false</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>error</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>
              Sets an error state for the <code>FormItem</code>, allowing consistent styling across form
              items.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>className</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>
              Additional class name for custom styling of the <code>FormItem</code> container.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>children</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>ReactNode</code>
            </Table.DataCell>
            <Table.DataCell>
              The form control element (e.g., <code>TextField</code>, <code>Select</code>,{' '}
              <code>Datepicker</code>) to wrap with <code>FormItem</code>.
            </Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>inputProps</code>
            </Table.DataCell>
            <Table.DataCell style={{ wordWrap: 'break-word', maxWidth: '188px' }}>
              <code>React.InputHTMLAttributes&lt;HTMLInputElement&gt;</code>
            </Table.DataCell>
            <Table.DataCell>
              Attributes applied to the input element, such as <code>disabled</code> or <code>required</code>.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <VerticalSpace size='2' />

      <BodyText size='large'>
        <code>FormItemLabel</code>
      </BodyText>
      <VerticalSpace size='1' />
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Required</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>className</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>
              Additional class name for custom styling of the <code>FormItemLabel</code>.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>htmlFor</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>
              The <code>id</code> of the input field associated with this label, used for accessibility. If
              not provided, it will use the `id` from the parent <code>FormItem</code> context.
            </Table.DataCell>
            <Table.DataCell>No (must be provided via context if not directly)</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>hideLabel</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>
              Visually hide the <code>FormItemLabel</code>.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>false</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>helperText</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Helper text displayed as a tooltip next to the label.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>weight</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'light' | 'regular' | 'semibold' | 'bold'</code>
            </Table.DataCell>
            <Table.DataCell>Font weight for the label text.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>'semibold'</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>children</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>ReactNode</code>
            </Table.DataCell>
            <Table.DataCell>The content of the label.</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>...rest</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>BodyTextProps</code>
            </Table.DataCell>
            <Table.DataCell>
              Additional props passed to the underlying <code>BodyText</code> component.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <VerticalSpace size='2' />

      <BodyText size='large'>
        <code>FormItemDescription</code>
      </BodyText>
      <VerticalSpace size='1' />
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Required</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>className</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>
              Additional class name for custom styling of the <code>FormItemDescription</code>.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>htmlFor</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>
              The <code>id</code> of the input field associated with this description, used for accessibility.
              If not provided, it will use the `id` from the parent <code>FormItem</code> context.
            </Table.DataCell>
            <Table.DataCell>No (must be provided via context if not directly)</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>children</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>ReactNode</code>
            </Table.DataCell>
            <Table.DataCell>The content of the description.</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>...rest</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>BodyTextProps</code>
            </Table.DataCell>
            <Table.DataCell>
              Additional props passed to the underlying <code>BodyText</code> component.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  )
}

export default ComponentsFormItem
