# Elhub Design System Documentation Site

This is the documentation website for the Elhub Design System. It provides comprehensive documentation, 
interactive examples, and API references for all components in the design system.

This project is built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/).

## About

The documentation site showcases:

- **Component Examples** - Interactive demonstrations of all UI components
- **API Documentation** - Detailed props and usage information
- **Design Guidelines** - Best practices and design patterns
- **Code Examples** - Copy-paste ready code snippets

## Technology Stack

- **Build Tool**: Vite 5.x with React SWC plugin
- **Framework**: React 18.x with TypeScript
- **Routing**: React Router v6
- **Styling**: Design system components from `@elhub/ds-components` and `@elhub/ds-css`
- **Markdown**: react-markdown with GitHub Flavored Markdown support
- **Code Highlighting**: Shiki

## Development

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Getting Started

From the repository root:

```bash
# Install dependencies
npm run install:all

# Build all workspaces (required for local development)
npm run build

# Start the documentation site
npm run ds-www:start
```

Or from the `ds-www` directory:

```bash
npm install
npm start
```

The site will open automatically at [http://localhost:4444](http://localhost:4444).

### Available Scripts

#### `npm start`

Runs the app in development mode with Vite's fast HMR (Hot Module Replacement).

Open [http://localhost:4444](http://localhost:4444) to view it in your browser.

The page will reload instantly when you make changes.

#### `npm run build`

Builds the app for production to the `build` folder.

It bundles React in production mode using Vite and optimizes the build for best performance.
The build is minified and the filenames include hashes.

#### `npm run preview`

Locally preview the production build before deployment.

#### `npm test`

Runs the test suite using Vitest in watch mode.

#### `npm run test:ci`

Runs tests once (no watch mode) for CI/CD pipelines.

#### `npm run lint`

Checks code for linting errors using ESLint.

#### `npm run lint:fix`

Automatically fixes linting errors where possible.

#### `npm run typecheck`

Runs TypeScript type checking without emitting files.

## Project Structure

```
ds-www/
├── public/           # Static assets
│   ├── favicon/     # Favicon assets
│   └── static/      # Other static files
├── src/
│   ├── components/  # React components
│   ├── pages/       # Page components
│   ├── hooks/       # Custom React hooks
│   ├── index.tsx    # Application entry point
├── build/           # Production build output (generated)
└── vite.config.ts   # Vite configuration
```

## Building for Production

```bash
npm run build
```

The production build will be output to the `build/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [React Router Documentation](https://reactrouter.com/)
