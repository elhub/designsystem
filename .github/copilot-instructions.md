# Copilot Instructions for Elhub Design System

## Project Overview

This is a **monorepo design system** with 6 npm workspaces managed by Changesets for versioning and publishing to npm. Each workspace builds independently but shares common infrastructure (tokens, icons, CSS).

**Key workspaces:**
- `ds-components` - React component library (Vite + React SWC, styled-components, Vitest)
- `ds-tokens` - Design tokens (Style Dictionary generates JSON/SCSS/CSS/Less from TS source)
- `ds-css` - Component styles (PostCSS, no React)
- `ds-icons` - SVG icons extracted from Figma as React components
- `ds-graph` - Graph visualization components
- `ds-www` - Component documentation site for the design system

## Architecture & Data Flow

### Dependency Chain
```
ds-www, ds-components, ds-graph → ds-css → ds-tokens
ds-components → ds-icons → extracted from Figma
```

**Critical pattern:** Tokens are the source of truth. CSS builds depend on `ds-tokens` output. When changing design tokens, run `npm run ds-tokens:build` before building other workspaces, or use `npm run build` from root to build all in correct order.

### Component Structure
Components follow a **barrel export pattern** per `ds-components/src/dist.ts`:
- Each component folder (e.g., `button/`) contains one or more React components
- Each component exports types with `export type ComponentProps` convention
- No default exports from component folders; use named exports
- Components use **`clsx`** for composing CSS class names (BEM methodology with `eds-` prefix)

**Example pattern:** `ds-components/src/components/button/Button.tsx`
- Accepts `ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>`
- Uses `forwardRef` for ref forwarding
- Uses `mergeRefs` utility (from `util/`) for combining multiple refs
- Icons passed as React ComponentTypes, e.g., `icon?: React.ComponentType<SvgIconProps>`
- Applies CSS classes via `clsx()`, e.g., `className={cl('eds-button', 'eds-button--variant-primary', className)}`

### Styling Approach
- Component styles are defined in `ds-css` using CSS classes with BEM naming (Block-Element-Modifier)
- All CSS classes are prefixed with `eds-` (e.g., `eds-button`, `eds-badge__icon`, `eds-badge--status-ongoing`)
- Design tokens (colors, spacing, typography) are generated to `ds-tokens/dist/tokens.css` as CSS custom properties
- Components import `clsx` (aliased as `cl`) to compose conditional class names
- No inline styles or CSS-in-JS; all styles live in `ds-css` workspace
- CSS uses semantic token variables like `var(--eds-semantic-background-action-primary)`

## Developer Workflows

### Setup
```bash
npm run install:all    # Install root + all workspace dependencies
npm run build          # Build all workspaces in dependency order
```

### Starting Development
- **Documentation site:** `npm run ds-www:start` (component documentation site)
- **Tokens development:** `npm run ds-tokens:build` then other builds depend on it
- **Graph development:** `npm run ds-graph:start`

### Testing & Quality
```bash
npm run test           # Run tests in all workspaces (Vitest)
npm run test:ci        # Run tests once (no watch)
npm run lint           # ESLint all workspaces
npm run lint:fix       # Auto-fix lint issues
npm run prettier:fix   # Format code (config in root `.prettierrc`)
npm run typecheck      # tsc --noEmit in all workspaces
npm run checktidy      # Lint + prettier + typecheck + test (full check)
npm run knip           # Check for unused dependencies
```

### Publishing
```bash
npm run changeset           # Create changelog entry (run before PR)
npm run changeset:version   # Bump versions (run on release branch)
npm run release             # Build and publish packages with Changesets
npm run publish             # Publish to npm (automated via GitHub Actions release workflow)
```

## Project-Specific Conventions

### TypeScript Configuration
- **Root `tsconfig.json`:** Shared base with `ES6`, `lib: ["dom", "dom.iterable", "esnext"]`, strict mode
- **Workspace configs:** `ds-components/tsconfig.json` overrides with `ES2020` target and `baseUrl: "src"` for path imports
- **Path imports:** Import from `components/button` not `../components/button` (configured via baseUrl)

### Linting & Formatting
- **ESLint:** `eslint.config.mjs` (flat config format) with Prettier plugin for consistency
- **Prettier:** Root `.prettierrc` shared across workspaces
- **StyleLint:** For CSS files in `ds-css` (enforces BEM-like selectors)
- **No unit test checks** beyond linting in most workspaces; CSS/tokens have empty test scripts

### Component Naming
- **Files:** PascalCase (e.g., `Button.tsx`)
- **Exports:** Match filename (e.g., `export { Button }`)
- **Props types:** `{ComponentName}Props` (e.g., `ButtonProps`)
- **Variants:** Use union types (e.g., `type ButtonVariant = 'primary' | 'secondary'`)

### Utilities
- Common utilities in `ds-components/src/util/` (not workspaces of their own):
  - `mergeRefs.tsx` - combine multiple React refs
  - `composeEventHandlers.ts` - chain event handlers
  - `AnimateHeight.tsx` - height animation utility
  - Index file re-exports all utilities

## Build & Dependency Management

### Library Exports
- **ds-components:** Uses `dist.ts` as Vite library entry point; exports all components and types
- **ds-tokens:** Outputs to `dist/tokens.css`, `dist/tokens.json`, `dist/tokens.scss`
- **ds-css:** Outputs to `dist/index.css` (PostCSS processed)
- All packages specify `files: ["dist/*"]` in package.json to only publish built artifacts

### External Dependencies
- `ds-components` does NOT use styled-components (legacy only, avoid for new code)
- Uses `clsx` for className composition - import as `cl` by convention
- Uses Radix UI (`@radix-ui/react-select`, `@radix-ui/react-tabs`, `@radix-ui/react-toggle-group`) for accessible primitives
- Uses Floating UI for positioning
- Peer dependencies: `react`, `react-dom` (must be provided by consuming applications)

### Version Management
- **Changesets workflow:** Create `.changeset/*.md` files before PRs; commit them
- **Publishing registry:** npmjs.org - packages are published automatically via GitHub Actions on pushes to `main` using `changesets/action` with OIDC trusted publishing

## Common Tasks & Patterns

### Adding a New Component
1. Create folder: `ds-components/src/components/{component-name}/`
2. Create `{ComponentName}.tsx` with forwardRef, props interface, clsx for className composition
3. Create `index.ts`: `export { ComponentName } from './{ComponentName}'`
4. Add export to `ds-components/src/dist.ts`
5. Add CSS styles to `ds-css/src/components/{component-name}.css` using BEM naming with `eds-` prefix
6. Import CSS file in `ds-css/src/index.css`
7. Add types to export list in dist.ts: `export type { ComponentNameProps } from './components/{component-name}'`
8. Run `npm run build` to verify all builds succeed

### Updating Design Tokens
1. Edit source file in `ds-tokens/src/` (e.g., `global.ts`, `size.ts`)
2. Run `npm run ds-tokens:build`
3. Run `npm run ds-css:build` (CSS depends on token output)
4. Run `npm run ds-components:build` to see token changes in components

### Debugging Build Issues
- Check `tsconfig.json` at workspace level; most specify `baseUrl` for path imports
- Verify `dist.ts` exports all components (TypeScript will error on missing re-exports)
- Use `npm run typecheck` before `npm run build` to catch TS errors early
- Vite build errors often stem from external dependency misconfigurations; check `rollupOptions.external`

## File Organization

```
root/
  .github/                    # GitHub config (CI/CD, copilot-instructions.md)
  ds-components/              # React components, main library
    src/components/           # 25+ component folders (button, modal, table, etc.)
    src/util/                 # Shared React utilities
    src/layout/               # Layout helpers (Grid, containers, spacing)
    src/dist.ts               # Library entry point, exports all components
  ds-tokens/                  # Design token definitions and generation
    src/                      # TS/JSON token source files
    dist/                     # Generated token output (CSS, JSON, SCSS, Less)
  ds-css/                     # Component styles (no React)
    src/baseline/             # Reset/baseline CSS
    src/components/           # Component-specific CSS (BEM naming)
    src/forms/                # Form element styles
  ds-icons/                   # Figma-extracted SVG icons as React components
  ds-www/                     # Component documentation site (React, Vite)
  ds-graph/                   # Graph visualization library
  eslint.config.mjs           # Flat ESLint config (all workspaces)
  package.json                # Root workspace config, npm scripts
```

## Known Quirks & Gotchas

1. **Token generation required:** Changing design tokens requires `npm run ds-tokens:build` before other builds see the changes. CSS imports generated token files.
2. **No path resolution at workspace root:** Each workspace has its own tsconfig; root tsconfig applies only to scripts at root level.
3. **No styled-components:** Old components may reference styled-components but this pattern is deprecated. Use `clsx` for className composition and define styles in `ds-css` with BEM naming.
4. **Icon props:** Components that accept icons expect `React.ComponentType<SvgIconProps>`, not SVG strings or URLs.
5. **CSS class coupling:** Component behavior tied to CSS classes from `ds-css`; changing selector names breaks functionality.
6. **No barrel exports per component folder:** Use explicit imports from `@elhub/ds-components` with named exports, not `./components/button` defaults.

## Quick Reference Commands

| Task | Command |
|------|---------|
| Full setup | `npm run install:all && npm run build` |
| Dev loop | `npm run start -w ds-www` |
| Pre-commit check | `npm run tidy` (lint + prettier + typecheck) |
| Full QA before PR | `npm run checktidy` (lint + prettier + typecheck + test) |
| Release prep | `npm run changeset` then `npm run changeset:version` |
| Publish | `npm run publish` |
| Clean rebuild | `npm run clean && npm run install:all && npm run build` |
