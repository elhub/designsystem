const generate = require('@babel/generator').default;
const template = (variables, { tpl }) => {
  // Add dynamic width and height attributes from the size prop
  variables.jsx.openingElement.attributes.unshift({
    type: 'JSXAttribute',
    name: {
      type: 'JSXIdentifier',
      name: 'width'
    },
    value: {
      type: 'JSXExpressionContainer',
      expression: {
        type: 'Identifier',
        name: 'sizeMap[size]'
      }
    }
  })

  variables.jsx.openingElement.attributes.unshift({
    type: 'JSXAttribute',
    name: {
      type: 'JSXIdentifier',
      name: 'height'
    },
    value: {
      type: 'JSXExpressionContainer',
      expression: {
        type: 'Identifier',
        name: 'sizeMap[size]'
      }
    }
  })

  variables.jsx.openingElement.attributes.unshift({
    type: 'JSXAttribute',
    name: {
      type: 'JSXIdentifier',
      name: 'ref'
    },
    value: {
      type: 'JSXExpressionContainer',
      expression: {
        type: 'Identifier',
        name: 'ref'
      }
    }
  })

  // Add spread props
  variables.jsx.openingElement.attributes.push({
    type: 'JSXSpreadAttribute',
    argument: {
      type: 'Identifier',
      name: 'props'
    }
  })

  // Strip the 'Svg' prefix from the component name
  const ComponentName = variables.componentName.replace('Svg', '')

  // Create a new JSX element for the title
  const titleElement = {
    type: 'JSXElement',
    openingElement: {
      type: 'JSXOpeningElement',
      name: {
        type: 'JSXIdentifier',
        name: 'title'
      },
      attributes: [],
      selfClosing: false
    },
    closingElement: {
      type: 'JSXClosingElement',
      name: {
        type: 'JSXIdentifier',
        name: 'title'
      }
    },
    children: [{
      type: 'JSXExpressionContainer',
      expression: {
        type: 'Identifier',
        name: 'title'
      }
    }]
  }

  // Insert the title element at the beginning of the children array
  variables.jsx.children.unshift(titleElement)



  // Convert the jsx object back into a string of JSX code with the new attributes
  const { code } = generate(variables.jsx);


  return tpl`
    import * as React from 'react'
    import { sizeMap, type SvgProps } from './types'

    export const ${ComponentName} = React.forwardRef<SVGSVGElement, SvgProps>(({ size = "small", title, ...props }, ref) => {
    return (
      ${code}
    )})

    ${ComponentName}.displayName = '${ComponentName}'
  `
}

module.exports = template
