# @elhub/ds-tokens

## 7.2.2

### Patch Changes

- Test automated GitHub Actions by running changeset publish from root

## 7.2.1

### Patch Changes

- Test automated GitHub Actions publish workflow

## 7.2.0

### Minor Changes

- Adds script for generating tailwind-config

## 7.1.1

### Patch Changes

- Decrease font-size for eds-heading as per Figma

## 7.1.0

### Minor Changes

- Add a global white color alias token (`--eds-global-color-white`).

## 7.0.0

### Major Changes

- Remove legacy color token source (`src/colors.ts`) from token generation.

## 6.2.0

### Minor Changes

- 6f75b8c: Dependency upgrades

## 6.1.0

### Minor Changes

- feat: add eds-yellow-600 and use that in semantic.alternative.icons.approved-with-warning

## 6.0.0

### Major Changes

- Add explicit desktop and mobile typography sizes. Remove the BodyText xsmall utility and xsmall error text, and drop ingress/link/label token groups in favour of heading and body tokens.

## 5.0.0

### Major Changes

- feat: new semantic colors for EDS based on elhub.no-palette
- **Removed** the legacy top-level `white` token; replaced with `grey['0']` for pure white. Also removed `eds-shadow-focus` and replaced it with `eds-semantic-focus`
- **Introduced** a new `beige` scale (300, 400, 400-50%) alongside existing palettes.
- **Replaced** every top-level color scale (`grey`, `blue`, `yellow`, `red`, `green`, `purple`, `orange`) with updated keys and RGBA values.
- **Consolidated** the `global.color` structure for consistency:
  - Kept `chartSeries` and `graph` palettes unchanged in shape.

## 4.2.0

### Minor Changes

- Add graph colors for reactive channels

## 4.1.1

### Patch Changes

- Add gradients to dark-green graph color

## 4.1.0

### Minor Changes

- Add Graph-colors from Figma

## 4.0.0

### Changes

- ff9a56e: - Chip text has the body text bold class
  - Filter panel now has a large size
  - ToggleItem now uses BodyText
  - Added background secondary span color, used it on chips
  - Tweaked paddings on chips to better get the space between icon and text, and have a left margin
  - Filter Panel now uses the latest style
  - Filter Panel chips have a readOnly prop
- 239ca18: Implement Loader based on design
  - Decrease size-alternatives to `small`, `medium` and `large`
  - Remove `transparent`-prop
  - Add `eds-semantic-border-hover` and `eds-semantic-border-active` to `border`-color
  - Set border to `tertiary`-variant for `Button`
- 9aa72d7: Delete unused and unexported code. Improve code quality by proper typing
- b32be98: Add FormItem-component
  - Add FormItem-component which encapsulated form fields with label and error-message
  - Add FormItemLabel, FormItemDescription
  - Remove label, description and error from form-components and move them to FormItem
- 9d05d89: - Style Switch based on new design tokens and Elhub-branding
  - Add semantic-border-alternative to ds-tokens
- cf3e431: Moving chart series colors to ds-tokens, re-exporting them for reuse
- bbb3477: Header from Figma
  - remove `xxlarge`
  - Add correct font-sizes
  - Remove `spacing`-prop
- d0859bd: Style Checkbox based on Figma
- c71c6b1: Updated colors for TextArea component based on Figma design
- 477ae8c: Properly handling keyboard events on search suggestion items
  colors and css fixes on chips

## 4.0.0-next.8

### Patch Changes

- Delete unused and unexported code. Improve code quality by proper typing

## 4.0.0-next.7

### Patch Changes

- Add FormItem-component
  - Add FormItem-component which encapsulated form fields with label and error-message
  - Add FormItemLabel, FormItemDescription
  - Remove label, description and error from form-components and move them to FormItem

## 4.0.0-next.6

### Patch Changes

- Properly handling keyboard events on search suggestion items
  colors and css fixes on chips

## 4.0.0-next.5

### Patch Changes

- Updated colors for TextArea component based on Figma design

## 4.0.0-next.4

### Patch Changes

- Moving chart series colors to ds-tokens, re-exporting them for reuse

## 4.0.0-next.3

### Patch Changes

- Header from Figma
  - remove `xxlarge`
  - Add correct font-sizes
  - Remove `spacing`-prop

## 4.0.0-next.2

### Patch Changes

- Change eds-semantic-disabled to grey-60 instead of 60-100%.

## 4.0.0-next.1

### Patch Changes

- Add `eds-semantic-border-hover` and `eds-semantic-border-active` to `border`-color
- Flip values for `active` and `hover` for `background-action-secondary`

## 4.0.0-next.0

### Patch Changes

- Style Switch based on new design tokens and Elhub-branding
- Add semantic-border-alternative to ds-tokens

## 3.0.2

### Patch Changes

- 32f53fc: Update line-height-tokens to match values in Figma

## 3.0.1

### Major Changes

- Set version 3 for all packages in order to introduce a pre-release strategy

#### What

Rename semantic background action color from error to danger

#### Why

Because its a more descriptive color name and matches Figma design

#### Migration

Migrate all semantic colors background action error to background action danger, e.g.
--eds-semantic-background-action-error to --eds-semantic-background-action-danger
