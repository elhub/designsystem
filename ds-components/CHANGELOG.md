# @elhub/ds-components

## 4.17.1

### Patch Changes

- e558d4a: Fix single-select combobox input width to prevent selected labels from being truncated.

## 4.17.0

### Minor Changes

- a12a03a: feat: add codesnippet component

## 4.16.0

### Minor Changes

- 01820cf: Virtualize Combobox options and give duplicate options unique focus identities.

## 4.15.0

### Minor Changes

- 7e67145: Improve controlled Table sorting with complete sort-state callbacks. Add content-width tables, a horizontal scroll container, and reusable skeleton rows.

## 4.14.0

### Minor Changes

- 2ceebdd: feat: add new feedback component

## 4.13.5

### Patch Changes

- Make Badge icons optional and keep badge spacing correct when no icon is provided.

## 4.13.4

### Patch Changes

- Test automated GitHub Actions by running changeset publish from root

## 4.13.3

### Patch Changes

- Test automated GitHub Actions publish workflow

## 4.13.2

### Patch Changes

- bump because previous version was unpublished on npm and its impossible to publish the same again

## 4.13.1

### Patch Changes

- - bugfix: required combobox should not validate textfield

## 4.13.0

### Minor Changes

- esbuild fixes

## 4.12.0

### Minor Changes

- upgrade react-datepicker

## 4.11.0

### Minor Changes

- 6f75b8c: Upgrade to react 19 and other minor dependency upgrades

### Patch Changes

- Updated dependencies [6f75b8c]
  - @elhub/ds-icons@4.8.0

## 4.10.0

### Minor Changes

- af6bfb4: Refactor NavBar component and remove props (icon, collapsed, orientation, underscore, variant)

## 4.9.0

### Minor Changes

- Add explicit desktop and mobile typography sizes. Remove BodyText xsmall and xsmall error text, and drop ingress/link/label token groups in favour of heading and body tokens.

## 4.8.5

### Patch Changes

- Combobox: set padding-left to Input and do not show placeholder if value is selected

## 4.8.4

### Patch Changes

- Optional fixedPopperPosition prop to set a fixed popper position for Datepicker

## 4.8.3

### Patch Changes

- Hide datepicker modal on outside click when opened by clicking icon

## 4.8.2

### Patch Changes

- Checkbox should use a unique id to fix click handling inside CheckboxGroup

## 4.8.1

### Patch Changes

- fix: set max-height to year dropdown in Datepicker

## 4.8.0

### Minor Changes

- feat: new semantic colors for EDS based on elhub.no-palette

## 4.7.2

### Patch Changes

- fix: make buttons in datepicker type button to avoid form submit

## 4.7.1

### Patch Changes

- Add wrapper-classname for Tooltip to control height of the wrapper

## 4.7.0

### Minor Changes

- Implement Cookie Banner component

## 4.6.0

### Minor Changes

- Add Stepper-component mean to provide a visual representation of steps in a user flow

## 4.5.8

### Patch Changes

- FilterPanel: add border when Chip is pressed. Transparent background when hovering on an pressed Chip

## 4.5.7

### Patch Changes

- Use localized month in DatepickerHeader

## 4.5.6

### Patch Changes

- Add "nynorsk" (nn) to locale to the available locales for DatePicker

## 4.5.5

### Patch Changes

- Fix locale check for DatepickerHeader

## 4.5.4

### Patch Changes

- Add norsk/nynorsk translations for DatepickerHeader

## 4.5.3

### Patch Changes

- Removed disabled prev and next buttons for DatepickerHeader

## 4.5.2

### Patch Changes

- Build-config-fixes to allow consumers to bump to React v19
- Updated dependencies
  - @elhub/ds-icons@4.3.1

## 4.5.1

### Patch Changes

- fix: make Pagination buttons type "button"

## 4.5.0

### Minor Changes

- Add icon to TextField

## 4.4.1

### Patch Changes

- Give ToggleGroup correct styling based on size

## 4.4.0

### Minor Changes

- Make date picker controllable by syncing selected prop with internal state

## 4.3.2

### Patch Changes

- Revert duplictae align prop ColumnHeader

## 4.3.1

### Patch Changes

- add textAlign prop to ColumnHeader

## 4.3.0

### Minor Changes

- Modal: add description to Modal.Header

## 4.2.4

### Patch Changes

- Fix(Grids): add gap to props for grid components

## 4.2.3

### Patch Changes

- Set correct types for icon in Badge and CardHeader

## 4.2.2

### Patch Changes

- Fix(Pagination): use Invisible Button variant for Previous and Next Buttons

## 4.2.1

### Patch Changes

- fix(Search): remove casting and let forwardRef set type correctly

## 4.2.0

### Minor Changes

- Add Card-component. Set inset box-shadow for Table to prevent overflow

## 4.1.5

### Patch Changes

- Remove text-color on BodyText to avoid specifity-issues. Replace old occurences of colors with semantic colors

## 4.1.4

### Patch Changes

- Synchronize Single Select Combobox internal state (input value) with external state (selected option)

## 4.1.3

### Patch Changes

- Combobox: do not render Chips for Single-mode

## 4.1.2

### Patch Changes

- Use size small for ErrorMessage in FormItem

## 4.1.1

### Patch Changes

- Added disabled option to Tabs

## 4.1.0

### Minor Changes

- Add noResultsLabel to Combobox

## 4.0.5

### Patch Changes

- Added index to key to make it unique

## 4.0.4

### Patch Changes

- pass size as prop to checkbox. Make input-element the same size as ::before element"

## 4.0.3

### Patch Changes

- Allow FilterPanel.Chip to have ReactNode as children

## 4.0.2

### Patch Changes

- Do not override children-props for Chip. Allow children to be ReactNode

## 4.0.1

### Patch Changes

- Remove color for BodyText to avoid issues with specifity. Set color on html by using semantic text color

## 4.0.0

Welcome to version 4.0.0 of our design system, a major update that brings our components in line with the latest Figma
designs.

This release focuses on consistency, usability, and modernized styling to ensure seamless integration with your
projects.

Key highlights:

- Figma-Aligned Updates: Components like `Button`, `Chips`, and `Table` have been refined to reflect the new design
  specifications.
- Simplified Props: Standardized sizes (`small`, `medium`, `large`) and streamlined props make components easier to use
  and more consistent.
- New Additions: A feature-rich `Datepicker` and the flexible `FormItem` component enhance the system’s capabilities.
- Deprecations: Outdated components, including `Box`, `Drawer`, and `Dropzone`, have been removed for a cleaner and more
  focused library.

### Changes

- Button-component:
  - Change all occurences of `variant`-prop value `danger` to `caution`.
  - Adapt new `size`-prop values `large`, `medium` and `small`. Default is `medium`.
  - Remove all occurences of `spacing`-prop.
  - When adding an icon to `icon`-prop. Send in `icon={Icon}` instead of `icon={<Icon />}`.
  - Props related to the `icon`-component should be placed in the `iconProps`.
    - Old format was: `icon={<Icon color="white"/>}`.
    - The new format is `icon={<Icon />} iconProps={{color: "white}}`.

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
- 700c7a8: Fix search inputProps
- bc8ea4e: Adding FilterPanel
- 239ca18: Implement Loader based on design
  - Decrease size-alternatives to `small`, `medium` and `large`
  - Remove `transparent`-prop
  - Add `eds-semantic-border-hover` and `eds-semantic-border-active` to `border`-color
  - Set border to `tertiary`-variant for `Button`
- f745150: Combobox and ToggleGroup CSS fixes
- fb43999: CSS tweaks on ToggleGroup, Combobox
- 1ef7ac2: dependency to ds-css@4.0.0-next.9
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
- 2a5fc40: Removed LinkPanel from EDS, but it can still be used for documentation purposes.
- 972d41d: Fixes to Search
- 5c73d85: Run export-icons and fix text in FilterPanel
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
- 61a584c: Making hideLabel work on datepicker, allow input autocomplete
- ee36ca7: Removed the ErrorSummary, HelpText, ReadMore, Slider and Stepper components
- 5e31292: Made some improvements to pagination code
- 01b0005: Updated Table component to fit current Figma design
  - [x] Table component now has a new design with round edges, elhub colors on zebra stripes and hover
  - [x] Table sorting icons now use the icons from Figma design
  - [x] Table icons reduced size
- c51654b: Rewrite Search with composability
- 30c9498: Removed Avatar component
- 9d05d89: - Style Switch based on new design tokens and Elhub-branding
  - Add semantic-border-alternative to ds-tokens
- f9b397a: Implement Link based on Figma
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
- d35ca93: Changed label size on Button size medium from small to medium
- 2cc3158: Make sure rules for disabling button respects select mode
- 65d96df: Updated pagination component to match Figma design
- 8cc5613: Updated tabs to match Figma design
- ef2a28f: Making sure datepicker forward and back button respects maxDate and minDate props
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
- 013d26b: Create new Search-component based on Figma
  - Add SearchResults component as Popover
  - Remove variant-prop from Search
  - Remove clearButton-prop from Search
  - Remove size-prop from Search
  - Add suggestions and loading-props to Search
- be22a00: Map text-sizes for FormItems to small and medium
- c71c6b1: Updated colors for TextArea component based on Figma design
- f674dcf: Update padding for FormItem child-components (TextField, Select, Datepicker and Combobox)
- 477ae8c: Properly handling keyboard events on search suggestion items
  colors and css fixes on chips
- 54b3dfd: Button: Add invisible variant
- 91e96cd: Handling keyboard arrow up/down events on search box
- 7a8d368: Removed size, fixed gap, margin and padding and added font weight bold
- 4fc00d1: ToggleGroup CSS tweaks
- 1a5f597: Search: Close Popover when clicking on selected item
- Updated dependencies [b32be98]
- Updated dependencies [5c73d85]
- Updated dependencies [ce8b5ec]
- Updated dependencies [9dc4c42]
- Updated dependencies [16e9821]
  - @elhub/ds-icons@4.0.0

## 4.0.0-next.60

### Patch Changes

- Remove deprecated Typography-components. Use BodyText for all typography needs. Use FormItemLabel for labels

## 4.0.0-next.59

### Patch Changes

- Implement Radiobutton based on Figma

## 4.0.0-next.58

### Patch Changes

- Update padding for FormItem child-components (TextField, Select, Datepicker and Combobox)

## 4.0.0-next.57

### Patch Changes

- Map text-sizes for FormItems to small and medium

## 4.0.0-next.56

### Patch Changes

- Introduce stylelint and lint CSS

## 4.0.0-next.55

### Patch Changes

- Delete unused and unexported code. Improve code quality by proper typing

## 4.0.0-next.54

### Patch Changes

- Add FormItem-component
  - Add FormItem-component which encapsulated form fields with label and error-message
  - Add FormItemLabel, FormItemDescription
  - Remove label, description and error from form-components and move them to FormItem
- Updated dependencies
  - @elhub/ds-icons@4.0.0-next.4
  - @elhub/ds-css@4.0.0-next.58

## 4.0.0-next.53

### Patch Changes

- ToggleGroup CSS tweaks
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.57

## 4.0.0-next.52

### Patch Changes

- Filter Panel CSS fixes
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.56

## 4.0.0-next.51

### Patch Changes

- d85b9e8: - Chip text has the body text bold class
  - Filter panel now has a large size
  - ToggleItem now uses BodyText
  - Tweaked paddings on chips to better get the space between icon and text, and have a left margin
  - Filter Panel now uses the latest style
  - Filter Panel chips have a readOnly prop
- Updated dependencies [d85b9e8]
  - @elhub/ds-css@4.0.0-next.55

## 4.0.0-next.50

### Patch Changes

- CSS tweaks on ToggleGroup, Combobox
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.54

## 4.0.0-next.49

### Patch Changes

- - Chips renamed sizes to large, medium, small
  - ToggleGroup button labels now have different sizes
  - ToggleGroup and Combobox paddings reviewed
  - Added more examples on www pages
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.53

## 4.0.0-next.48

### Patch Changes

- - Reduced combobox chevron size to 12x12px
  - Made the combobox chevron color match text color
  - removed focus inset for the toggle group
  - added a large size for toggle group
  - delete chips toggle
  - paired filterpanel size with body text size
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.52

## 4.0.0-next.47

### Patch Changes

- Removed LinkPanel from EDS, but it can still be used for documentation purposes.
  - @elhub/ds-css@4.0.0-next.51

## 4.0.0-next.46

### Patch Changes

- Added a label on Filter Panel
- Added a disabled state on Combobox
- Made sure toggle group buttons use focus-visible
- Corrected size of combobox chevron
- More examples with icon and text on FilterPanel
  - @elhub/ds-css@4.0.0-next.50

## 4.0.0-next.45

### Patch Changes

- Removed the ErrorSummary, HelpText, ReadMore, Slider and Stepper components
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.49

## 4.0.0-next.44

### Patch Changes

- Removed Box, Drawer and Dropzone components
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.48

## 4.0.0-next.43

### Patch Changes

- Removed Avatar component
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.47

## 4.0.0-next.42

### Patch Changes

- CSS fixes on combobox
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.46

## 4.0.0-next.41

### Patch Changes

- Made some improvements to pagination code
  - Previous and next buttons are now type Button and not PaginationItem
  - It is now mandatory to specify prev and next text props for pagination

- Updated dependencies
  - @elhub/ds-css@4.0.0-next.45

## 4.0.0-next.40

### Patch Changes

- Improvements on chips and comboboxes
  - Dismissable chips now only have one clickable area, phasing out onDelete to favour onClick
  - Chips now have another size, xsmall
  - Chips text color to default
  - Combobox now scales chips with one size down for all 3 sizes

- Updated dependencies
  - @elhub/ds-css@4.0.0-next.44

## 4.0.0-next.39

### Patch Changes

- Combobox and ToggleGroup CSS fixes
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.42

## 4.0.0-next.38

### Patch Changes

- Combobox CSS fixes
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.41

## 4.0.0-next.37

### Patch Changes

- Properly handling keyboard events on search suggestion items
  colors and css fixes on chips
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.40

## 4.0.0-next.36

### Patch Changes

- Removed size, fixed gap, margin and padding and added font weight bold
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.39

## 4.0.0-next.35

### Patch Changes

- Updated pagination component to match Figma design
- Set previous and next text booleans to true as default, with "Forrige" and "Neste" as default values.
  - @elhub/ds-css@4.0.0-next.37

## 4.0.0-next.34

### Patch Changes

- Fix search inputProps

## 4.0.0-next.33

### Patch Changes

- Make sure rules for disabling button respects select mode

## 4.0.0-next.32

### Patch Changes

- Making sure datepicker forward button respects maxDate

## 4.0.0-next.31

### Patch Changes

- Making hideLabel work on datepicker, allow input autocomplete

## 4.0.0-next.30

### Patch Changes

- Updated tabs to match Figma design, removed scrollbutton and size
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.35

## 4.0.0-next.29

### Patch Changes

- Handling keyboard arrow up/down events on search box

## 4.0.0-next.28

### Patch Changes

- Updated TextArea component based on Figma design
- Removed WarningMessage component
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.33

## 4.0.0-next.27

### Patch Changes

- Tooltip based on Figma. Remove keys-prop as its not used
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.32

## 4.0.0-next.26

### Patch Changes

- Combobox-fixes based on Figma
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.31

## 4.0.0-next.25

### Patch Changes

- remove box-shadow for Search. Add prop to hide navButtons on Datepicker. Invisible-button for Modal
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.29

## 4.0.0-next.24

### Patch Changes

- feat(Datepicker)
  - Add new Datepicker component
    - Support four different selection modes
    - Style it based on Figma
  - Add unit to TextField component
  - Minor styling based on Figma for Combobox, Select, and TextField components
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.27

## 4.0.0-next.23

### Patch Changes

- New SelectComponent, delete SelectMultiple
- Updated dependencies
  - @elhub/ds-icons@4.0.0-next.1
  - @elhub/ds-css@4.0.0-next.26

## 4.0.0-next.22

### Patch Changes

- Final design of Table
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.25

## 4.0.0-next.21

### Patch Changes

- Run export-icons and fix text in FilterPanel
- Updated dependencies
  - @elhub/ds-icons@3.3.1-next.0

## 4.0.0-next.20

### Patch Changes

- Changes in styles to Chips, Table, FilterPanel
  - Chips dismissable have now two clickable areas

- linting and formatting
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.23

## 4.0.0-next.19

### Patch Changes

- Passing style to Checkbox
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.20

## 4.0.0-next.18

### Patch Changes

- Fixes to Search
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.18

## 4.0.0-next.17

### Patch Changes

- Adding FilterPanel
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.16

## 4.0.0-next.16

### Patch Changes

- Button: Add invisible variant
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.15

## 4.0.0-next.15

### Patch Changes

- Search: Close Popover when clicking on selected item

## 4.0.0-next.14

### Patch Changes

- Header from Figma
  - remove `xxlarge`
  - Add correct font-sizes
  - Remove `spacing`-prop
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.14

## 4.0.0-next.13

### Patch Changes

- Rewrite Search with composability
  - Add Search.SuggestionSection and Search.SuggestionItem
  - Add Search.NoResults
  - To be used by consumers to build their own search components
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.13

## 4.0.0-next.12

### Patch Changes

- Updating Chips and Combobox to latest Figma designs
  - Chips now have only one variant. Paddings fixed for medium and small sizes
  - Combobox has a maxShown prop to set maximum visible chips

- Updated dependencies
  - @elhub/ds-css@4.0.0-next.12

## 4.0.0-next.11

### Patch Changes

- Implement Link based on Figma
  - Remove sizes and let it be inferred from the parent
  - Add alternative-variant
  - Render IconNewtab if the Link is external
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.10

## 4.0.0-next.10

### Patch Changes

- dependency to ds-css@4.0.0-next.9

## 4.0.0-next.8

### Patch Changes

- Style Checkbox based on Figma

## 4.0.0-next.8

### Patch Changes

- Implement Loader based on design
  - Decrease size-alternatives to `small`, `medium` and `large`
  - Remove `transparent`-prop
  - Set border to `tertiary`-variant for `Button`
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.7

## 4.0.0-next.7

### Patch Changes

- Changed Label `size` on Button size medium from `small` to `medium`

## 4.0.0-next.6

### Patch Changes

- Updated Table component to fit current Figma design
  - [x] Table component now has a new design with round edges, elhub colors on zebra stripes and hover
  - [x] Table sorting icons now use the icons from Figma design
  - [x] Table icons reduced size

  ```

  ```

- Updated dependencies
  - @elhub/ds-css@4.0.0-next.6

## 4.0.0-next.5

### Patch Changes

- 9b1ab85: Removed Chip. Redid Chips and Combobox to fit Figma current design
  - [x] Chip is replaced by Chips as an interactible tag that can be used alone or within Combobox.
  - [x] Combobox is now a dropdown with Chips, properly styled within Figma design.
  - [x] Added a WarningMessage component to field sets, as we may want to add more warning messages in other
        components
  - [x] Updated ds-www with description of these components

- Updated dependencies [9b1ab85]
  - @elhub/ds-css@4.0.0-next.5

## 4.0.0-next.4

### Patch Changes

- Updated dependencies
  - @elhub/ds-css@4.0.0-next.4

## 4.0.0-next.3

### Patch Changes

- Create new Search-component based on Figma
  - Add SearchResults component as Popover
  - Remove variant-prop from Search
  - Remove clearButton-prop from Search
  - Remove size-prop from Search
  - Add suggestions and loading-props to Search
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.3

## 4.0.0-next.2

### Patch Changes

- Updated dependencies
  - @elhub/ds-css@4.0.0-next.2

## 4.0.0-next.1

### Patch Changes

- Style Switch based on new design tokens and Elhub-branding
- Updated dependencies
  - @elhub/ds-css@4.0.0-next.1

## 4.0.0-next.0

### Major Changes

#### What's Changed

Button component:

- Rename `variant`-prop value `danger` to `caution`.
- Rename `size`-prop values from `medium`, `small` and `xsmall` to `large`, `medium` and `small`. New default is
  `medium`.
- Remove `spacing`-prop, previously used to add bottom margin.
- Change `icon`-prop type from `ReactNode` to `SvgProps`.
- Add new `iconProps`-prop.

#### Why

Figma design was updated for Button component.

#### Migration

Button component:

- Change all occurences of `variant`-prop value `danger` to `caution`.
- Adapt new `size`-prop values `large`, `medium` and `small`. Default is `medium`.
- Remove all occurences of `spacing`-prop.
- When adding an icon to `icon`-prop. Send in `icon={Icon}` instead of `icon={<Icon />}`.
- Props related to the `icon`-component should be placed in the `iconProps`.
  - Old format was: `icon={<Icon color="white"/>}`.
  - The new format is `icon={<Icon />} iconProps={{color: "white}}`.

### Patch Changes

- Updated dependencies
  - @elhub/ds-css@4.0.0-next.0

## 3.1.0

### Minor Changes

- 32f53fc: Add BodyText-component. Update line-height-tokens to match values in Figma

### Patch Changes

- Updated dependencies [32f53fc]
  - @elhub/ds-css@3.1.0

## 3.0.1

### Patch Changes

- Updated dependencies
  - @elhub/ds-css@3.0.0

## 3.0.0

### Major Changes

#### What's Changed

`Alert`: remove props for `fullWidth` and `inline`. Remove `onCloseLabel` and replace it with `IconCross` instead

#### Why

The `Alert` component should not have the option to be full width or inline, per Figma design and the design system.

#### Migration

Remove the props `fullWidth` and `inline` from the `Alert` component.
If you have an `onCloseLabel`, this will be replaced with an `IconCross` instead.

### Patch Changes

- Updated dependencies
  - @elhub/ds-css@2.102.0

## 2.102.1

### Patch Changes

- Set size to 'xsmall' for CrossIcon in Search
- Updated dependencies
  - @elhub/ds-css@2.101.3
