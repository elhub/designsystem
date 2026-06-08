# @elhub/ds-css

## 6.2.0

### Minor Changes

- Adjust textfield size for large text.

## 6.1.5

### Patch Changes

- Test automated GitHub Actions by running changeset publish from root

## 6.1.4

### Patch Changes

- Test automated GitHub Actions publish workflow

## 6.1.3

### Patch Changes

- Updated dependencies
  - @elhub/ds-tokens@7.2.0

## 6.1.2

### Patch Changes

- Updated dependencies
  - @elhub/ds-tokens@7.1.1

## 6.1.1

### Patch Changes

- Updated dependencies
  - @elhub/ds-tokens@7.1.0

## 6.1.0

### Minor Changes

- upgrade react-datepicker

## 6.0.0

### Major Changes

- Update bundled design tokens to `@elhub/ds-tokens@7.0.0`.
- This release includes breaking token output changes from `ds-tokens`, including removal of legacy token sources and legacy `--eds-color-*` variables.
- Global and semantic color tokens are now exposed through the `--eds-global-color-*` and `--eds-semantic-color-*` namespaces.
- `eds.figma.*` and `eds.light.*` token groups were removed from exported token output.

## 5.2.1

### Patch Changes

- Migrate ds-css from legacy color tokens to semantic/global token variables.

## 5.2.0

### Minor Changes

- 6f75b8c: Dependency upgrades

### Patch Changes

- Updated dependencies [6f75b8c]
  - @elhub/ds-tokens@6.2.0

## 5.1.3

### Patch Changes

- Add gap between ToggleGroup label and toggles

## 5.1.2

### Patch Changes

- Open previously blocked out css classes for zebra stripe background colors in table component

## 5.1.1

### Patch Changes

- Updated dependencies
  - @elhub/ds-tokens@6.1.0

## 5.1.0

### Minor Changes

- af6bfb4: Refactor NavBar component and remove props (icon, collapsed, orientation, underscore, variant)

## 5.0.0

### Major Changes

- Add explicit desktop and mobile typography sizes. Remove the BodyText xsmall utility and xsmall error text, and drop ingress/link/label token groups in favour of heading and body tokens.

### Patch Changes

- Updated dependencies
  - @elhub/ds-tokens@6.0.0

## 4.8.11

### Patch Changes

- Set table header color when column is sorted

## 4.8.10

### Patch Changes

- Combobox: set padding-left to Input and do not show placeholder if value is selected

## 4.8.9

### Patch Changes

- Improve table cell resilience by removing fixed height/width constraints and allowing long content to wrap gracefully.

## 4.8.8

### Patch Changes

- Make sure alert icon do not shrink

## 4.8.7

### Patch Changes

- Do not bundle Roboto-fonts as part of font-face as they are already embedded

## 4.8.6

### Patch Changes

- fix(Datepicker): Set correct cell-color for selected cells in year and month-mode

## 4.8.5

### Patch Changes

- Use semantic background for Combobox-wrapper

## 4.8.4

### Patch Changes

- fix: set max-height to year dropdown in Datepicker

## 4.8.3

### Patch Changes

- Fix: add more gap between FormError and FormItem

## 4.8.2

### Patch Changes

- Fix: use semantic box-shadow for Modal

## 4.8.1

### Patch Changes

- fix(Card): footer should share same background as content

## 4.8.0

### Minor Changes

- feat: new semantic colors for EDS based on elhub.no-palette

### Patch Changes

- Updated dependencies
  - @elhub/ds-tokens@5.0.0

## 4.7.4

### Patch Changes

- fix: align checkbox input

## 4.7.3

### Patch Changes

- Add some left margin to required-star for FormItemLabel for better spacing

## 4.7.2

### Patch Changes

- Align checkbox and radiobutton at the top when content have linebreak
- Add .eds-tooltip-wrapper for Tooltip to control height of the wrapper

## 4.7.1

### Patch Changes

- DatePicker: Capitalize month names in calendar display

## 4.7.0

### Minor Changes

- Implement Cookie Banner component

## 4.6.0

### Minor Changes

- Add Stepper-component mean to provide a visual representation of steps in a user flow

## 4.5.3

### Patch Changes

- FilterPanel: add border when Chip is pressed. Transparent background when hovering on an pressed Chip

## 4.5.2

### Patch Changes

- Fix: alignement of input in Radio and Checkbox for multiline label

## 4.5.1

### Patch Changes

- Update padding for Button small and medium

## 4.5.0

### Minor Changes

- Add icon to TextField

## 4.4.0

### Minor Changes

- Add new stoppwatch icons to ds-icons

## 4.3.2

### Patch Changes

- Fix: add block variant for stopped status Badge

## 4.3.1

### Patch Changes

- Give ToggleGroup correct styling based on size

## 4.3.0

### Minor Changes

- Add graph colors for reactive channels

### Patch Changes

- Updated dependencies
  - @elhub/ds-tokens@4.2.0

## 4.2.6

### Patch Changes

- Use version 4.1.1 of ds-tokens

## 4.2.5

### Patch Changes

- Add a min height to Select to prevent collapsing.

## 4.2.4

### Patch Changes

- Fix(Card): set bottom border to CardHeader

## 4.2.3

### Patch Changes

- Modal: decrease min-width to prevent overflow on mobile

## 4.2.2

### Patch Changes

- Set correct types for icon in Badge and CardHeader

## 4.2.1

### Patch Changes

- Fix(Pagination): use Invisible Button variant for Previous and Next Buttons

## 4.2.0

### Minor Changes

- Add Card-component. Set inset box-shadow for Table to prevent overflow

## 4.1.9

### Patch Changes

- Remove text-color on BodyText to avoid specifity-issues. Replace old occurences of colors with semantic colors

## 4.1.8

### Patch Changes

- Set color for body text

## 4.1.7

### Patch Changes

- Remove wrong typography color for mobile. Default to semantic-text-color

## 4.1.6

### Patch Changes

- Added disabled option to Tabs

## 4.1.5

### Patch Changes

- Increased click area for combobox

## 4.1.4

### Patch Changes

- Updated padding for tabs and tabpanel

## 4.1.3

### Patch Changes

- Update padding for tabs and tabpanel

## 4.1.2

### Patch Changes

- Bump ds-tokens to 4.1.0

## 4.1.1

### Patch Changes

- pass size as prop to checkbox. Make input-element the same size as ::before element"

## 4.1.0

### Minor Changes

- Add font-family to root stylesheet

## 4.0.2

### Patch Changes

- Remove color for BodyText to avoid issues with specifity. Set color on html by using semantic text color

## 4.0.1

### Patch Changes

- 80660d9: Remove deprecated Typography-components. Use BodyText for all typography needs. Use FormItemLabel for labels

## 4.0.0

### Changes

- Remove deprecated Typography-components. Use BodyText for all typography needs. Use FormItemLabel for labels
- 82c1994: Removed Box, Drawer and Dropzone components
- ff9a56e: - Chip text has the body text bold class
  - Filter panel now has a large size
  - ToggleItem now uses BodyText
  - Added background secondary span color, used it on chips
  - Tweaked paddings on chips to better get the space between icon and text, and have a left margin
  - Filter Panel now uses the latest style
  - Filter Panel chips have a readOnly prop
- 96ecbb0: feat(Datepicker)
  - Add new Datepicker component
    - Support four different selection modes
    - Style it based on Figma
  - Add unit to TextField component
  - Minor styling based on Figma for Combobox, Select, and TextField components
- 4e3289c: Keep shadow focus on combobox in certain situations
- bc8ea4e: Adding FilterPanel
- 239ca18: Implement Loader based on design
  - Decrease size-alternatives to `small`, `medium` and `large`
  - Remove `transparent`-prop
  - Add `eds-semantic-border-hover` and `eds-semantic-border-active` to `border`-color
  - Set border to `tertiary`-variant for `Button`
- f745150: Combobox and ToggleGroup CSS fixes
- fb43999: CSS tweaks on ToggleGroup, Combobox
- 6925541: Changes in styles to Chips, Table, FilterPanel
  - Chips dismissable have now two clickable areas
  - Table has fixed borders and border radius
  - FilterPanel has new styles from Figma
  - linting and formatting
- e112292: Combobox CSS fixes
- fa65683: Introduce stylelint and lint CSS
- 9aa72d7: Delete unused and unexported code. Improve code quality by proper typing
- 410e9ee: Tooltip based on Figma. Remove keys-prop as its not used
- b32be98: Add FormItem-component
  - Add FormItem-component which encapsulated form fields with label and error-message
  - Add FormItemLabel, FormItemDescription
  - Remove label, description and error from form-components and move them to FormItem
- 16e9821: DatePicker: make input take full width of container
- 2a5fc40: Removed LinkPanel from EDS, but it can still be used for documentation purposes.
- 8621c68: Datepicker: set max-width for ErrorMessage
- 66ba7eb: fixed text field size to fit button size on datepicker combo
- 972d41d: Fixes to Search
- b096391: CSS fixes on combobox
- ec954ed: Improvements on chips and comboboxes
  - Dismissable chips now only have one clickable area, phasing out onDelete to favour onClick
  - Chips now have another size, xsmall
  - Chips text color to default
  - Combobox now scales chips with one size down for all 3 sizes

- 5801da5: Combobox-fixes based on Figma
- f1ecfc9: Final design of Table
- 480d957: - Chips renamed sizes to large, medium, small
  - ToggleGroup button labels now have different sizes
  - ToggleGroup and Combobox paddings reviewed
  - Added more examples on www pages
- dadca7d: Filter Panel CSS fixes
- ee36ca7: Removed the ErrorSummary, HelpText, ReadMore, Slider and Stepper components
- 5e31292: Made some improvements to pagination code
- 01b0005: Updated Table component to fit current Figma design
  - [x] Table component now has a new design with round edges, elhub colors on zebra stripes and hover
  - [x] Table sorting icons now use the icons from Figma design
  - [x] Table icons reduced size

  ```

  ```

- c51654b: Rewrite Search with composability
- 30c9498: Removed Avatar component
- 9d05d89: - Style Switch based on new design tokens and Elhub-branding
  - Add semantic-border-alternative to ds-tokens
- f9b397a: Implement Link based on Figma
- da8f3f5: Style-fixes for Switch
- 7b5a6ee: Removing svg color for sortable table column header, it collides with optional icons
- 2e10b44: - Reduced combobox chevron size to 12x12px
  - Made the combobox chevron color match text color
  - removed focus inset for the toggle group
  - added a large size for toggle group
  - delete chips toggle
  - paired filterpanel size with body text size
  - Chips.Dismissable renamed to Chips.Chip
- 1e9323a: Updating Chips and Combobox to latest Figma designs
  - Chips now have only one variant. Paddings fixed for medium and small sizes
  - Combobox has a maxShown prop to set maximum visible chips

- e135e26: Removed Chip. Redid Chips and Combobox to fit Figma current design
  - [x] Chip is replaced by Chips as an interactible tag that can be used alone or within Combobox.
  - [x] Combobox is now a dropdown with Chips, properly styled within Figma design.
  - [x] Added a WarningMessage component to field sets, as we may want to add more warning messages in other
        components
  - [x] Updated ds-www with description of these components

- e75ea28: Fix CSS style for toggle group single buttons
- 65d96df: Updated pagination component to match Figma design
- 8cc5613: Updated tabs to match Figma design
- abf0232: Added a label on Filter Panel
  Added a disabled state on Combobox
  Made sure toggle group buttons use focus-visible
  Corrected size of combobox chevron
  More examples with icon and text on FilterPanel
- 21c4f9c: remove box-shadow for Search. Add prop to hide navButtons on Datepicker. Invisible-button for Modal
- 9dc4c42: New SelectComponent, delete SelectMultiple
- 4357dda: Implement Radiobutton based on Figma
- bbb3477: Header from Figma
  - remove `xxlarge`
  - Add correct font-sizes
  - Remove `spacing`-prop
- d0859bd: Style Checkbox based on Figma
- 7421df8: FilterPanel CSS tweaks
- 3339336: Fix misalignment in Switch-thumb
- 308152b: Updated size, padding and gap for pagination items
- 013d26b: Create new Search-component based on Figma
  - Add SearchResults component as Popover
  - Remove variant-prop from Search
  - Remove clearButton-prop from Search
  - Remove size-prop from Search
  - Add suggestions and loading-props to Search
- 1915b4d: Decrease padding for Search-input
- c71c6b1: Updated colors for TextArea component based on Figma design
- f674dcf: Update padding for FormItem child-components (TextField, Select, Datepicker and Combobox)
- 477ae8c: Properly handling keyboard events on search suggestion items
  colors and css fixes on chips
- 4f3593e: Set new Button tertiary border colors for all states
- 54b3dfd: Button: Add invisible variant
- 4d22e2b: Added background color to non-zebra stripes
- 50d4eef: Adjusted pagination based on updated design
- bdd7a9d: Bundle fonts as part of ds-css
- d6b89ce: Button: Add border to tertiary-disabled
- 7a8d368: Removed size, fixed gap, margin and padding and added font weight bold
- 4fc00d1: ToggleGroup CSS tweaks
- Updated dependencies [ff9a56e]
- Updated dependencies [239ca18]
- Updated dependencies [9aa72d7]
- Updated dependencies [b32be98]
- Updated dependencies [9d05d89]
- Updated dependencies [cf3e431]
- Updated dependencies [bbb3477]
- Updated dependencies [d0859bd]
- Updated dependencies [c71c6b1]
- Updated dependencies [477ae8c]
  - @elhub/ds-tokens@4.0.0

## 4.0.0-next.92

### Patch Changes

- Remove deprecated Typography-components. Use BodyText for all typography needs. Use FormItemLabel for labels

## 4.0.0-next.91

### Patch Changes

- Implement Radiobutton based on Figma

## 4.0.0-next.90

### Patch Changes

- Update padding for FormItem child-components (TextField, Select, Datepicker and Combobox)

## 4.0.0-next.89

### Patch Changes

- Introduce stylelint and lint CSS

## 4.0.0-next.88

### Patch Changes

- Delete unused and unexported code. Improve code quality by proper typing
- Updated dependencies
  - @elhub/ds-tokens@4.0.0-next.8

## 4.0.0-next.58

### Patch Changes

- Add FormItem-component
  - Add FormItem-component which encapsulated form fields with label and error-message
  - Add FormItemLabel, FormItemDescription
  - Remove label, description and error from form-components and move them to FormItem
- Updated dependencies
  - @elhub/ds-tokens@4.0.0-next.7

## 4.0.0-next.57

### Patch Changes

- ToggleGroup CSS tweaks

## 4.0.0-next.56

### Patch Changes

- Filter Panel CSS fixes

## 4.0.0-next.55

### Patch Changes

- d85b9e8: - Chip text has the body text bold class
  - Filter panel now has a large size
  - ToggleItem now uses BodyText
  - Tweaked paddings on chips to better get the space between icon and text, and have a left margin
  - Filter Panel now uses the latest style
  - Filter Panel chips have a readOnly prop

## 4.0.0-next.54

### Patch Changes

- CSS tweaks on ToggleGroup, Combobox

## 4.0.0-next.53

### Patch Changes

- - Chips renamed sizes to large, medium, small
  - ToggleGroup button labels now have different sizes
  - ToggleGroup and Combobox paddings reviewed
  - Added more examples on www pages

## 4.0.0-next.52

### Patch Changes

- - Reduced combobox chevron size to 12x12px
  - Made the combobox chevron color match text color
  - removed focus inset for the toggle group
  - added a large size for toggle group
  - delete chips toggle
  - paired filterpanel size with body text size

## 4.0.0-next.51

### Patch Changes

- Removed LinkPanel from EDS, but it can still be used for documentation purposes.

## 4.0.0-next.50

### Patch Changes

- Added a label on Filter Panel
- Added a disabled state on Combobox
- Made sure toggle group buttons use focus-visible
- Corrected size of combobox chevron
- More examples with icon and text on FilterPanel

## 4.0.0-next.49

### Patch Changes

- Removed the ErrorSummary, HelpText, ReadMore, Slider and Stepper components

## 4.0.0-next.48

### Patch Changes

- Removed Box, Drawer and Dropzone components

## 4.0.0-next.47

### Patch Changes

- Removed Avatar component

## 4.0.0-next.46

### Patch Changes

- CSS fixes on combobox

## 4.0.0-next.45

### Patch Changes

- Made some improvements to pagination code
  - Fixed hover and active styles for a selected pagination item

## 4.0.0-next.44

### Patch Changes

- Improvements on chips and comboboxes
  - Dismissable chips now only have one clickable area, phasing out onDelete to favour onClick
  - Chips now have another size, xsmall
  - Chips text color to default
  - Combobox now scales chips with one size down for all 3 sizes

## 4.0.0-next.43

### Patch Changes

- Combobox and ToggleGroup CSS fixes

## 4.0.0-next.42

### Patch Changes

- Adjusted pagination based on updated design

## 4.0.0-next.41

### Patch Changes

- Combobox CSS fixes

## 4.0.0-next.40

### Patch Changes

- Properly handling keyboard events on search suggestion items
  colors and css fixes on chips
- Updated dependencies
  - @elhub/ds-tokens@4.0.0-next.6

## 4.0.0-next.39

### Patch Changes

- Removed size, fixed gap, margin and padding and added font weight bold

## 4.0.0-next.38

### Patch Changes

- Updated size, padding and gap for pagination items

## 4.0.0-next.37

### Patch Changes

- Updated pagination component to match Figma design

## 4.0.0-next.36

### Patch Changes

- Fix CSS style for toggle group single buttons

## 4.0.0-next.35

### Patch Changes

- Updated tabs to match Figma design, removed scrollbutton and size

## 4.0.0-next.34

### Patch Changes

- Keep shadow focus on combobox in certain situations

## 4.0.0-next.33

### Patch Changes

- Updated TextArea component based on Figma design

## 4.0.0-next.32

### Patch Changes

- Tooltip based on Figma. Remove keys-prop as its not used

## 4.0.0-next.31

### Patch Changes

- Combobox-fixes based on Figma

## 4.0.0-next.30

### Patch Changes

- Datepicker: set max-width for ErrorMessage

## 4.0.0-next.29

### Patch Changes

- remove box-shadow for Search. Add prop to hide navButtons on Datepicker. Invisible-button for Modal

## 4.0.0-next.28

### Patch Changes

- DatePicker: make input take full width of container

## 4.0.0-next.27

### Patch Changes

- feat(Datepicker)
  - Add new Datepicker component
    - Support four different selection modes
    - Style it based on Figma
  - Add unit to TextField component
  - Minor styling based on Figma for Combobox, Select, and TextField components

## 4.0.0-next.26

### Patch Changes

- New SelectComponent, delete SelectMultiple

## 4.0.0-next.25

### Patch Changes

- Final design of Table

## 4.0.0-next.24

### Patch Changes

- Bundle fonts as part of ds-css

## 4.0.0-next.23

### Patch Changes

- Changes in styles to Chips, Table, FilterPanel
  - Table has fixed borders and border radius
  - FilterPanel has new styles from Figma

## 4.0.0-next.22

### Patch Changes

- Button: Add border to tertiary-disabled

## 4.0.0-next.21

### Patch Changes

- Decrease padding for Search-input

## 4.0.0-next.20

### Patch Changes

- FilterPanel CSS tweaks

## 4.0.0-next.19

### Patch Changes

- Removing svg color for sortable table column header, it collides with optional icons

## 4.0.0-next.18

### Patch Changes

- Fixes to Search

## 4.0.0-next.17

### Patch Changes

- Add transparent color to button tertiary background
- fixed text field size to fit button size on datepicker combo

## 4.0.0-next.16

### Patch Changes

- Adding FilterPanel

## 4.0.0-next.15

### Patch Changes

- Button: Add invisible variant

## 4.0.0-next.14

### Patch Changes

- Header from Figma
  - remove `xxlarge`
  - Add correct font-sizes
  - Remove `spacing`-prop
- Updated dependencies
  - @elhub/ds-tokens@4.0.0-next.3

## 4.0.0-next.13

### Patch Changes

- Rewrite Search with composability

## 4.0.0-next.12

### Patch Changes

- Updating Chips and Combobox to latest Figma designs
  - Chips now have only one variant. Paddings fixed for medium and small sizes
  - Combobox has a maxShown prop to set maximum visible chips

## 4.0.0-next.11

### Patch Changes

- Set new Button tertiary border colors for all states

## 4.0.0-next.10

### Patch Changes

- Implement Link based on Figma

## 4.0.0-next.9

### Patch Changes

- Added background color to non-zebra stripes

## 4.0.0-next.8

### Patch Changes

- Style Checkbox based on Figma

## 4.0.0-next.7

### Patch Changes

- Implement Loader based on design
  - Decrease size-alternatives to `small`, `medium` and `large`
  - Remove `transparent`-prop

## 4.0.0-next.6

### Patch Changes

- Updated Table component to fit current Figma design
  - [x] Table component now has a new design with round edges, elhub colors on zebra stripes and hover
  - [x] Table sorting icons now use the icons from Figma design
  - [x] Table icons reduced size

  ```

  ```

## 4.0.0-next.5

### Patch Changes

- 9b1ab85: Removed Chip. Redid Chips and Combobox to fit Figma current design
  - [x] Chip is replaced by Chips as an interactible tag that can be used alone or within Combobox.
  - [x] Combobox is now a dropdown with Chips, properly styled within Figma design.
  - [x] Added a WarningMessage component to field sets, as we may want to add more warning messages in other
        components
  - [x] Updated ds-www with description of these components

## 4.0.0-next.4

### Patch Changes

- Style-fixes for Switch

## 4.0.0-next.3

### Patch Changes

- Create new Search-component based on Figma

## 4.0.0-next.2

### Patch Changes

- Fix misalignment in Switch-thumb

## 4.0.0-next.1

### Patch Changes

- Style Switch based on new design tokens and Elhub-branding
- Add semantic-border-alternative to ds-tokens
- Updated dependencies
  - @elhub/ds-tokens@4.0.0-next.0

## 4.0.0-next.0

### Major Changes

#### What's Changed

- Implement Button styling according to new design tokens

#### Why

- Figma design was updated for Button component.

#### Migration

- Bump `ds-components` and `ds-css` versions in consumer application.

## 3.1.0

### Minor Changes

- 32f53fc: Update line-height-tokens to match values in Figma

### Patch Changes

- Updated dependencies
  - @elhub/ds-tokens@3.0.2

## 3.0.0

### Major Changes

- Set version 3 for all packages in order to introduce a pre-release strategy

## 2.102.0

### Minor Changes

- Add styling for cross-icon in alert component, also update values for padding and remove oboslete css.

## 2.101.3

### Patch Changes

- Add semantic colors to Alert, Badge, Divider and Modal

## 2.101.2

### Patch Changes

- #### WHAT
  Rename semantic background action color from error to danger
  #### WHY
  Because its a more descriptive color name and matches Figma design
  #### HOW
  Migrate all semantic colors background action error to background action danger, e.g.
  --eds-semantic-background-action-error to --eds-semantic-background-action-danger
- Updated dependencies
  - @elhub/ds-tokens@4.0.0
