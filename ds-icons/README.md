# Elhub icons

This is a collection of icons that are used in the Elhub design system. The icons are available as React components and are directly exported from Figma.
The Figma-file is available [here](https://www.figma.com/file/UVNmJfoSHUs2uxVmhVekQP/Elhub-Icons).

## How to use it

install from npm.

    npm install --save @elhub/ds-icons

Import in your project as 

```tsx
    import { IconCheck } from '@elhub/ds-icons'

    export const Component = () => {
       return ( 
         <IconCheck />
       )
    }
```

## New icon in Figma?
Whenever a new icon is added to the Figma file, the icons should be exported to the `src` folder. This can be done by running the following command:

    npm run export-icons YOUR_FIGMA_TOKEN

Your Figma token can be found in the Figma account settings. The token is used to authenticate the Figma API and is required to export the icons from Figma.

## Customizing the icons

### Size

You can set the size of the icon to either 'small' or 'medium'. The sizes correspond to '1rem' and '1.5rem' respectively, which are equivalent to 16px and 24px if the user's default font-size is 16px.

```tsx
    import { IconCheck } from '@elhub/ds-icons'

    export const Component = () => {
       return (
          <IconCheck size="medium" />
       )
    }
```

### Color

The color of the SVG icons is determined by the `currentColor` CSS value, which means the icon will inherit the color of its parent element. 
This allows for easy color changes based on CSS inheritance and can be particularly useful when you want your icons to match the text color.

You can set the color of the icon by using CSS. The color can be set directly on the SVG icon or inherited from its parent element.

```css
/* Directly on the SVG icon */
.eds-icon {
  color: red;
}

/* Inherited from its parent element */
.eds-parent {
  color: red;
}

```

```tsx
import { IconCheck } from '@elhub/ds-icons'

export const Component = () => {
   return (
      <div className="parent-element">
         <IconCheck className="IconCheck" />
      </div>
   )
}
```
# License

[Go to Licence](LICENCE)
