---
'@elhub/ds-components': minor
---

Improve Combobox selection, filtering, keyboard handling, and native form reset.

- Show all options when opening a selected value, filter the list while typing.
- Update displayed label when selection changes externally, without overwriting ongoing edits.
- Support native form reset, restoring input defaults and consumer-provided selections.
- Correct Enter handling for autocomplete and when existing label matches.
- Clearing through `onChange(null, '')` instead of passing a non-input event.

Consumers that control selections need to restore their defaults in the form's
`onReset` handler. `onChange` handlers must support a nullable event.
