# Elhub Design System (EDS)

[<img src="https://img.shields.io/badge/repo-bitbucket-blue" alt="">](https://github.com/elhub/elhub-ui-design-system)
[<img src="https://img.shields.io/badge/issues-jira-orange" alt="">](https://jira.elhub.cloud/issues/?jql=project%20%3D%20%22Team%20Dev%22%20AND%20component%20%3D%20elhub-ui-design-system%20AND%20status%20!%3D%20Done)
[<img src="https://teamcity.elhub.cloud/app/rest/builds/buildType:(id:Elhub_UserInterface_ElhubUiDesignSystem_AutoRelease)/statusIcon" alt="">](https://teamcity.elhub.cloud/project/Elhub_UserInterface_ElhubUiDesignSystem?mode=builds#all-projects)
[<img src="https://sonar.elhub.cloud/api/project_badges/measure?project=no.elhub.ui%3Aelhub-ui-design-system&metric=alert_status" alt="">](https://sonar.elhub.cloud/dashboard?id=no.elhub.ui%3Aelhub-ui-design-system)
[<img src="https://sonar.elhub.cloud/api/project_badges/measure?project=no.elhub.ui%3Aelhub-ui-design-system&metric=ncloc" alt="">](https://sonar.elhub.cloud/dashboard?id=no.elhub.ui%3Aelhub-ui-design-system)
[<img src="https://sonar.elhub.cloud/api/project_badges/measure?project=no.elhub.ui%3Aelhub-ui-design-system&metric=bugs" alt="">](https://sonar.elhub.cloud/dashboard?id=no.elhub.ui%3Aelhub-ui-design-system)
[<img src="https://sonar.elhub.cloud/api/project_badges/measure?project=no.elhub.ui%3Aelhub-ui-design-system&metric=vulnerabilities" alt="">](https://sonar.elhub.cloud/dashboard?id=no.elhub.ui%3Aelhub-ui-design-system)
[<img src="https://sonar.elhub.cloud/api/project_badges/measure?project=no.elhub.ui%3Aelhub-ui-design-system&metric=coverage" alt="">](https://sonar.elhub.cloud/dashboard?id=no.elhub.ui%3Aelhub-ui-design-system)

## About

The Elhub Design System is a comprehensive design system that provides reusable components, design tokens, and
guidelines for building consistent, accessible, and high-quality user interfaces across all Elhub applications.

### Purpose

This design system serves several key objectives:

* **Consistency** - Ensure a unified user experience across all Elhub platforms and services, making it easier for
  users to navigate and interact with different parts of the Elhub ecosystem.
* **Accessibility** - Build inclusive interfaces that meet WCAG standards and serve all users, including those with
  disabilities, ensuring equal access to energy data and services.
* **Quality** - Maintain high standards for code quality, design excellence, and user experience through shared
  components and best practices.
* **Efficiency** - Accelerate development by providing ready-to-use, well-tested components that reduce duplication
  of effort across teams.
* **Collaboration** - Foster collaboration between designers, developers, and stakeholders through shared language
  and resources.
* **Transparency** - As a public sector entity in Norway, Elhub embraces open source principles to promote
  transparency, enable community contributions, and support the broader public sector digital transformation.

By open sourcing this design system, Elhub contributes to the Norwegian public sector's collective efforts to
improve digital services, encourages code reuse across government entities, and invites community scrutiny and
contributions to continuously improve the quality and accessibility of our user interfaces.

### Usage

If you want to improve the design system, clone this repository and follow the development instructions below.

If you want to use the design system in your project, currently you need to clone the repository from GitHub,
build it locally, and include the packages in your project. Eventually, these packages will be published to
npm under the [@elhub organization](https://www.npmjs.com/org/elhub), allowing you to install them directly
using npm or yarn.

# Structure

This repository is a monorepo scoped as @elhub, and contains the following npm workspaces:

| Workspace         | Description                                    | Published Package      |
| ----------------- | ---------------------------------------------- | ---------------------- |
| **ds-components** | React component library with 25+ UI components | `@elhub/ds-components` |
| **ds-css**        | CSS component styles using BEM methodology     | `@elhub/ds-css`        |
| **ds-tokens**     | Design tokens (colors, typography, spacing)    | `@elhub/ds-tokens`     |
| **ds-icons**      | SVG icon components extracted from Figma       | `@elhub/ds-icons`      |
| **ds-graph**      | Graph visualization components                 | `@elhub/ds-graph`      |
| **ds-www**        | Documentation website                          | -                      |

## Installation

### For End Users

Currently, to use the design system in your project, you need to:

1. Clone this repository:
```bash
git clone https://github.com/elhub/user-interface-design-system.git
cd user-interface-design-system
```

2. Install dependencies and build:
```bash
npm run install:all
npm run build
```

3. Link the packages to your project or reference them directly.

**Coming soon:** Packages will be published to npm under the [@elhub organization](https://www.npmjs.com/org/elhub),
allowing direct installation via:
```bash
npm install @elhub/ds-components @elhub/ds-css
```

### Required Dependencies

To use the design system components, you must install these core dependencies:

**Required packages:**
- `@elhub/ds-components` - React component library
- `@elhub/ds-css` - Component styles

**Optional packages:**
- `@elhub/ds-graph` - Graph visualization components
- `@elhub/ds-icons` - Icon component collection

**Peer dependencies** (must be installed in your project):
- `react` (^18.0.0)
- `react-dom` (^18.0.0)
- `lodash` (^4.17.21)
- `styled-components` (^6.0.0)

## Usage

### Basic Usage Example

```tsx
import { Button, Card, Typography } from '@elhub/ds-components';
import '@elhub/ds-css/dist/index.css';

function App() {
  return (
    <Card>
      <Typography variant="h1">Welcome to Elhub</Typography>
      <Button variant="primary" onClick={() => console.log('Clicked!')}>
        Get Started
      </Button>
    </Card>
  );
}
```

### Importing Styles

The design system requires CSS to be imported in your application:

```tsx
// In your main application file (e.g., index.tsx or App.tsx)
import '@elhub/ds-css/dist/index.css';
```

**Note:** Design tokens are bundled into `@elhub/ds-css`, so you don't need to import `@elhub/ds-tokens` separately.

### Accessing Design Tokens

Design tokens (colors, typography, spacing, etc.) are automatically available as CSS custom properties when you import `@elhub/ds-css`.

If you need to access tokens in other formats for build tools or JavaScript:

```tsx
// SCSS
@import '@elhub/ds-tokens/dist/tokens.scss';

// JavaScript/TypeScript
import tokens from '@elhub/ds-tokens/dist/tokens.json';
```

### Using Icons

```tsx
import { IconChevronDown, IconSearch } from '@elhub/ds-icons';

function MyComponent() {
  return (
    <div>
      <IconSearch aria-label="Search" />
      <IconChevronDown />
    </div>
  );
}
```

### API Documentation

For detailed component APIs, props, and usage examples, visit the documentation site:

```bash
npm run ds-www:start
```

This will start a local development server at `http://localhost:4444` with comprehensive documentation,
interactive examples, and API references for all components.

## Development Setup

### Prerequisites

- **Node.js**: Version 18 or higher
- **npm**: Version 9 or higher

Verify your installation:
```bash
node -v  # Should output v18.x.x or higher
npm -v   # Should output 9.x.x or higher
```

### Initial Setup

1. **Clone the repository:**
```bash
git clone https://github.com/elhub/user-interface-design-system.git
cd user-interface-design-system
```

2. **Install all dependencies:**
```bash
npm run install:all
```

This installs dependencies for the root workspace and all child workspaces.

3. **Build all workspaces:**
```bash
npm run build
```

This builds all workspaces in the correct dependency order (tokens → css → components).

### Development Workflow

#### Running Development Servers

Start the documentation site (recommended for development):
```bash
npm run ds-www:start
```

Start the graph components demo:
```bash
npm run ds-graph:start
```

#### Making Changes to Components

1. Make changes to component files in `ds-components/src/components/`
2. Changes will hot-reload if using the dev server
3. Build the workspace to see changes in dependent projects:
```bash
npm run ds-components:build
```

#### Making Changes to Styles

1. Edit CSS files in `ds-css/src/components/`
2. Build the CSS workspace:
```bash
npm run ds-css:build
```

#### Making Changes to Design Tokens

1. Edit token source files in `ds-tokens/src/`
2. Build tokens (must be done before building other workspaces):
```bash
npm run ds-tokens:build
```
3. Rebuild CSS and components to reflect token changes:
```bash
npm run ds-css:build
npm run ds-components:build
```

### Code Quality

#### Linting

```bash
npm run lint         # Check for linting errors
npm run lint:fix     # Auto-fix linting errors
```

#### Formatting

```bash
npm run prettier        # Check code formatting
npm run prettier:fix    # Auto-format code
```

#### Type Checking

```bash
npm run typecheck    # Run TypeScript type checks
```

#### Testing

```bash
npm run test         # Run tests in watch mode
npm run test:ci      # Run tests once (CI mode)
```

#### Run All Quality Checks

```bash
npm run checktidy    # Run lint, prettier, typecheck, and tests
npm run tidy         # Auto-fix lint and prettier issues, then typecheck
```

### Architecture

#### Dependency Chain

```
ds-www, ds-components, ds-graph → ds-css → ds-tokens
ds-components → ds-icons
```

**Important:** When making changes to `ds-tokens`, you must rebuild downstream packages (css, components) to see the changes.

#### Component Structure

- Components follow **barrel export pattern** (see `ds-components/src/dist.ts`)
- Each component uses `forwardRef` for ref forwarding
- Class names use **BEM methodology** with `eds-` prefix
- Styling via CSS classes composed with `clsx` utility
- No inline styles or CSS-in-JS (use `ds-css` workspace)

#### Build System

- **Vite** for bundling (components, www, graph)
- **TypeScript** for type safety
- **PostCSS** for CSS processing
- **Style Dictionary** for token generation
- **Changesets** for version management and publishing

### Releasing Changes

This project uses [Changesets](https://github.com/changesets/changesets) for version management.

#### Creating a Changeset

1. Make your changes to the codebase
2. Create a changeset:
```bash
npm run changeset
```
3. Follow the CLI prompts to describe your changes
4. Commit the generated changeset file

#### Versioning

To bump versions based on changesets:
```bash
npm run changeset:version
```

#### Publishing

Publishing is handled by the GitHub Actions release workflow with `changesets/action`, which
creates a release PR when changesets are present and publishes to npm after merge to `main`
using npm trusted publishing (OIDC).
You can also publish manually from the repository root:
```bash
npm run release
```

### Updating Dependencies

**Warning:** Only run this if you understand the implications.

```bash
npm run update    # Update all package.json files with latest dependency versions
```

### Additional Scripts

- `npm run knip` - Check for unused dependencies
- `npm run clean` - Remove all build artifacts and node_modules

## Technical Specifications

### Technology Stack

| Category            | Technology           |
| ------------------- | -------------------- |
| **Language**        | TypeScript 5.x       |
| **Framework**       | React 18.x           |
| **Build Tool**      | Vite 5.x             |
| **Styling**         | CSS Modules, PostCSS |
| **Tokens**          | Style Dictionary     |
| **Testing**         | Vitest               |
| **Linting**         | ESLint (Flat Config) |
| **Formatting**      | Prettier             |
| **Version Control** | Git, GitHub          |
| **CI/CD**           | TeamCity             |
| **Package Manager** | npm (workspaces)     |

### Browser Support

The design system supports modern browsers:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

### Accessibility

All components are built with accessibility in mind:
- **WCAG 2.1 Level AA** compliance
- **Keyboard navigation** support
- **Screen reader** compatible
- **ARIA attributes** where appropriate
- Uses **Radix UI** primitives for accessible component foundations

### Component Catalog

#### Layout Components
- Grid, Container, Spacing utilities

#### Form Components
- Button, Input, Select, Checkbox, Radio, DatePicker, Dropdown

#### Display Components
- Card, Badge, Tag, Chip, Alert, Tooltip, Popover, Modal

#### Navigation Components
- Navbar, Tabs, Pagination, Link

#### Data Components
- Table, Graph (visualization)

#### Utility Components
- Typography, Divider, Loader, Icon

### Design Token Categories

Tokens are organized into the following categories:

- **Colors**: Semantic color tokens (primary, secondary, status colors)
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Consistent spacing scale (4px base grid)
- **Border**: Border radius, widths
- **Shadows**: Elevation system
- **Z-index**: Layering system

Tokens are generated in multiple formats:
- CSS Custom Properties (`tokens.css`)
- SCSS Variables (`tokens.scss`)
- JSON (`tokens.json`)
- Less Variables (`tokens.less`)

## Contributing

Contributing, issues and feature requests are welcome. See the
[Contributing](.github/CONTRIBUTING.md) file.

## Owners

This project is developed by [Elhub](https://elhub.no). For the specific development group responsible for this
code, see the [Codeowners](.github/CODEOWNERS) file.

## License

This project is published under the [MIT license](./LICENSE).

The codebase for
[ds-tokens](./ds-tokens/), [ds-css](./ds-css/), and
[ds-components](./ds-components/) extends Nav's codebase from
[github.com/navikt/aksel](https://github.com/navikt/aksel/blob/main/LICENSE) /
[aksel.nav.no](https://aksel.nav.no/), also published under the
[MIT license](./LICENSE-NAV).

The codebase for [ds-graph](./ds-graph/) depends on
[highcharts/highcharts](https://github.com/highcharts/highcharts), which is
source available. Production and commercial use require a commercial license.
See [shop.highcharts.com](https://shop.highcharts.com/) for more information.

## Attribution

We stand on the shoulders of giants! This design system is built on the work of
many open source projects and libraries. Check them out in the `package[-lock].json`
files of each workspace for a full list of dependencies.

We would like to mention each and every one of them, but that would be a very
long list. Here we only mention the projects that have licenses that explicitly
require attribution. This does not mean that the other projects are not worth
mentioning!

* we have a transitive dependency on
  [browserslist/caniuse-lite](https://github.com/browserslist/caniuse-lite) from
  [caniuse.com](https://caniuse.com/).
