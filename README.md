# 🫧 Bubblewrap

[![Build Status](https://github.com/javascriptjoey/Bubblewrap/workflows/CI%2FCD%20Pipeline/badge.svg)](https://github.com/javascriptjoey/Bubblewrap/actions)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=flat&logo=storybook&logoColor=white)](https://javascriptjoey.github.io/Bubblewrap/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```
██████╗ ██╗   ██╗██████╗ ██████╗ ██╗     ███████╗██╗    ██╗██████╗  █████╗ ██████╗ 
██╔══██╗██║   ██║██╔══██╗██╔══██╗██║     ██╔════╝██║    ██║██╔══██╗██╔══██╗██╔══██╗
██████╔╝██║   ██║██████╔╝██████╔╝██║     █████╗  ██║ █╗ ██║██████╔╝███████║██████╔╝
██╔══██╗██║   ██║██╔══██╗██╔══██╗██║     ██╔══╝  ██║███╗██║██╔══██╗██╔══██║██╔═══╝ 
██████╔╝╚██████╔╝██████╔╝██████╔╝███████╗███████╗╚███╔███╔╝██║  ██║██║  ██║██║     
╚═════╝  ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚══════╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     
```

> A React component library built with **TypeScript**, **Vite**, and **Storybook** 🚀

## 🎯 Purpose

Bubblewrap is my learning playground for mastering React through component-driven development. Starting with simple components like buttons and building up to complex UI elements like carousels, forms, and layouts.

## 🛠️ Tech Stack

- **React 19.1** - Latest stable with modern features and enhanced hooks
- **TypeScript 5.8** - Strict type safety with advanced inference
- **Vite 7** - Lightning-fast HMR, native ESM, optimized builds  
- **Storybook 9.1** - Component-driven development with modern addons
- **Tailwind CSS 4.1** - Utility-first styling with Vite integration
- **Vitest 3.2** - Fast unit testing with native TypeScript support
- **Playwright 1.54** - Cross-browser testing for Storybook components
- **ESLint 9 + Prettier** - Modern flat config with auto-formatting

## 🚀 Getting Started

### 🌐 Try Online (No Download Required!)

- **Storybook Demo**: [https://javascriptjoey.github.io/Bubblewrap/](https://javascriptjoey.github.io/Bubblewrap/) _(auto-deployed from main branch)_
- **CodeSandbox**: [Open in CodeSandbox](https://codesandbox.io/s/github/javascriptjoey/Bubblewrap)
- **StackBlitz**: [Open in StackBlitz](https://stackblitz.com/github/javascriptjoey/Bubblewrap)

### 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/javascriptjoey/Bubblewrap.git
cd Bubblewrap

# Install dependencies
npm install

# Start development server
npm run dev

# Launch Storybook
npm run storybook

# Run tests
npm run test
```

## 📚 Learning Journey

- ✅ **Modern React Architecture** - Component composition with TypeScript interfaces
- ✅ **Vite + TypeScript Setup** - Fast development with strict type checking
- ✅ **Storybook 8 Integration** - Component-driven development workflow
- ⏳ **React 19 Features** - Server Components, Actions, and new hooks
- ⏳ **Advanced TypeScript** - Generics, conditional types, and utility types
- ⏳ **State Management** - React Context with TypeScript, built-in hooks patterns
- ⏳ **Design Systems** - Compound components, polymorphic components
- ⏳ **Performance Optimization** - React.memo, useMemo, Suspense boundaries

## 📖 Available Scripts

### 🚀 **Development**
- `npm run dev` - Start development server (Vite)
- `npm run storybook` - Start Storybook development server
- `npm run preview` - Preview production build locally

### 🧪 **Testing**
- `npm run test` - Interactive testing with watch mode
- `npm run test:run` - Run CI tests with coverage (jsdom)
- `npm run test:browser` - Run full browser tests (development)

### 🏗️ **Build & Deploy**
- `npm run build` - Build application for production
- `npm run build-storybook` - Build Storybook for deployment
- `npm run lint` - Run ESLint code quality checks

### 📊 **Quick Commands**
```bash
# Start coding
npm run dev

# Test components in isolation  
npm run storybook

# Run tests like CI does
npm run test:run

# Check everything works
npm run build
```

## 🧩 Component Library

### Basic Components

- **Button** - Interactive button with primary/secondary variants and size options
- **Header** - Navigation header with user authentication states  
- **Page** - Complete page layout demonstrating component composition

### Coming Soon

- 🎠 **Carousel** - Touch/swipe support with TypeScript event handlers
- 📝 **Forms** - Form components with validation (considering React Hook Form + Zod)
- 🏗️ **Layout** - CSS Grid/Flexbox components with responsive TypeScript props
- 🎨 **Theming** - Design system with consistent styling approach
- ♿ **Accessibility** - Enhanced focus management and ARIA patterns

## 🎨 Storybook

View and interact with components in isolation at `http://localhost:6006` when running Storybook.

## 🧪 Testing Strategy

This project uses a **dual testing approach** for maximum reliability and development experience:

### 🎯 **CI/Production Testing** (Reliable & Fast)
```bash
npm run test:run      # Runs jsdom unit tests with coverage
```
- **Environment**: jsdom (DOM simulation in Node.js)
- **Purpose**: CI validation, quick feedback
- **Coverage**: Unit tests with code coverage reports
- **Status**: ✅ 3/3 tests passing, 100% Button component coverage

### 🌐 **Local Development Testing** (Full Browser Power)
```bash
npm run test:browser  # Runs full browser + Storybook tests
npm run test          # Interactive testing with watch mode
```
- **Environment**: Chromium browser via Playwright
- **Purpose**: Visual testing, interaction testing, story validation
- **Features**: Real browser rendering, user interaction simulation

### 🤔 **Why jsdom Instead of Just Node.js?**

**The Problem**: React components require browser APIs (`document`, `window`, DOM elements), but Node.js only provides server-side APIs.

```typescript
// This would FAIL in pure Node.js:
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button> // ❌ JSX needs DOM APIs
);
```

**The Solution**: jsdom provides a complete DOM implementation in Node.js for testing React components.

| Environment | What It Provides | Use Case |
|-------------|------------------|----------|
| **Pure Node.js** | Server APIs (`fs`, `http`, `process`) | Backend services, CLI tools |
| **jsdom + Node.js** | Virtual DOM + Browser APIs | Unit testing React components |
| **Real Browser** | Full DOM + Web APIs + Rendering | E2E testing, visual validation |

### 🔧 **How jsdom Works**

```typescript
// jsdom creates virtual browser globals in Node.js:
declare global {
  const document: Document;
  const window: Window & typeof globalThis;
  const HTMLElement: typeof HTMLElement;
}

```typescript
// Modern React component testing with TypeScript (2025):
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import type { ButtonProps } from './Button';

// Type-safe component testing:
const renderButton = (props: Partial<ButtonProps> = {}) => 
  render(<Button label="Click me" {...props} />);

// Comprehensive testing with proper TypeScript support:
test('Button renders with correct accessibility attributes', () => {
  renderButton({ primary: true, label: 'Submit form' });
  
  const button = screen.getByRole('button', { name: /submit form/i });
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute('type', 'button');
});
```
```

**Why This Matters for Modern React Development**:
- ✅ **Type Safety**: Full TypeScript support in test environment
- ✅ **Component Testing**: Test props, state, and user interactions
- ✅ **Accessibility**: Validate ARIA attributes and semantic HTML
- ✅ **Fast Feedback**: Instant test results without browser overhead
- ✅ **CI/CD Ready**: Reliable testing in headless environments

### 📊 **Testing Architecture**

| Test Type | Count | Environment | Purpose |
|-----------|-------|-------------|---------|
| **Unit Tests** | 3 | jsdom | Component logic validation |
| **Storybook Tests** | Story-based | Chromium | Visual & interaction testing |
| **Total Coverage** | Mixed setup | Dual environment | Comprehensive validation |

### 🔧 **Testing Configuration Files**

- `vitest.config.ci.ts` - CI-optimized configuration (jsdom only)
- `vite.config.ts` - Full development configuration (browser + unit)
- `src/test-setup.ts` - Unit test environment setup
- `.storybook/vitest.setup.ts` - Storybook test environment setup

### 📈 **Coverage Reports**

Coverage reports are automatically generated and include:
- **Statement coverage** - Lines of code executed
- **Branch coverage** - Conditional paths tested
- **Function coverage** - Functions called during tests
- **Line coverage** - Physical lines covered

```bash
npm run test:run      # Generates coverage in /coverage folder
```

## 🚀 CI/CD Pipeline

### 🤖 **Automated Quality Checks**

Every push triggers comprehensive validation:

```yaml
✅ Code Quality      → ESLint validation
✅ Unit Tests        → 3 jsdom tests with coverage
✅ Build Validation  → Production build verification
✅ Storybook Build   → Component documentation build
```

### 🔄 **GitHub Actions Workflows**

#### **Main CI Pipeline** (`.github/workflows/ci.yml`)
- **Trigger**: Push to `main`/`develop`, Pull Requests
- **Environment**: Ubuntu Latest, Node.js 20
- **Steps**: Install → Lint → Test → Build → Coverage Upload
- **Status**: [![Build Status](https://github.com/javascriptjoey/Bubblewrap/workflows/CI%2FCD%20Pipeline/badge.svg)](https://github.com/javascriptjoey/Bubblewrap/actions)

#### **Storybook Deployment** (`.github/workflows/storybook.yml`)
- **Trigger**: Push to `main`
- **Output**: [Live Storybook](https://javascriptjoey.github.io/Bubblewrap/)
- **Features**: Automatic GitHub Pages deployment

### 🏗️ **Why Dual Testing Strategy?**

**Problem Solved**: CI environments are restrictive and don't handle complex browser testing well.

**Solution**: 
- **CI**: Simple, reliable jsdom tests for validation
- **Local**: Full browser testing for comprehensive development

This architecture provides:
- ✅ **Reliable CI** - No flaky browser dependencies
- ✅ **Rich Development** - Full Storybook interaction testing
- ✅ **Fast Feedback** - Quick unit test results
- ✅ **Professional Workflow** - Industry-standard practices

### 🛠️ **Testing Tools Stack**

- **Vitest** - Test runner and framework
- **@testing-library/react** - Component testing utilities
- **@testing-library/jest-dom** - DOM testing matchers
- **jsdom** - Creates fake browser environment in Node.js for React testing
- **Playwright** - Real browser automation for development
- **@storybook/addon-vitest** - Storybook story testing
- **@vitest/coverage-v8** - Code coverage reporting

## 📝 Development Notes

### 🧠 **Learning Focus Areas**

This project serves as a comprehensive learning experience covering modern React development:

- **Component Architecture** - TypeScript interfaces, compound components, polymorphic APIs
- **React 19 Features** - Server Components, Actions, enhanced hooks, concurrent features
- **Advanced TypeScript** - Generics, conditional types, template literals, utility types
- **Testing Strategies** - Unit testing with React Testing Library, visual regression, accessibility testing
- **CI/CD Pipelines** - GitHub Actions, automated type checking, build optimization
- **Storybook Workflow** - Component documentation, interaction testing, design system management
- **Performance** - Code splitting, tree shaking, bundle analysis, React DevTools Profiler

### 🔄 **Development Workflow**

1. **Type-Safe Component Development** → Define TypeScript interfaces and build components with strict typing
2. **Storybook-First Design** → Document component APIs and interaction states
3. **Test-Driven Development** → Write comprehensive tests with React Testing Library
4. **Accessibility-First** → Ensure WCAG compliance and semantic HTML
5. **Performance Monitoring** → Analyze bundle size and runtime performance
6. **CI/CD Validation** → Automated type checking, testing, and deployment

### 🎯 **Key Takeaways**

- **Type-First Development** - TypeScript interfaces drive component design and API consistency
- **Component Composition** - Build complex UIs from simple, reusable TypeScript components
- **Modern Testing** - React Testing Library + Vitest for comprehensive component validation
- **Performance-Conscious** - Bundle analysis, code splitting, and React concurrent features
- **Accessibility by Default** - Semantic HTML, ARIA attributes, and keyboard navigation
- **Developer Experience** - Fast HMR, type safety, and comprehensive tooling integration

### 🚀 **Next Steps**

- **Advanced Component Patterns** - Compound components, render props, polymorphic components
- **State Management** - React Context with TypeScript for complex state needs
- **Design System** - Consistent design tokens and component APIs
- **Modern React Features** - Exploring React 19 capabilities as they stabilize
- **Performance Optimization** - React.memo, useMemo, useCallback, code splitting
- **Accessibility Excellence** - Screen reader testing, focus management, WCAG compliance

---

## 🤝 Contributing & Setup

### 🏃‍♂️ **Quick Start for Contributors**

```bash
# 1. Clone and install
git clone https://github.com/javascriptjoey/Bubblewrap.git
cd Bubblewrap
npm install

# 2. Verify setup works
npm run test:run        # Should pass 3/3 tests
npm run lint           # Should pass with no errors
npm run build          # Should build successfully

# 3. Start developing
npm run dev            # App at http://localhost:5173
npm run storybook      # Storybook at http://localhost:6006
```

### ✅ **Testing Before Push**

Always run these commands before committing:
```bash
npm run lint           # Fix any code quality issues
npm run test:run       # Ensure all tests pass
npm run build          # Verify production build works
```

### 🔍 **Understanding the Testing Setup**

- **Unit Tests** (`src/__tests__/`) - TypeScript component logic with React Testing Library
- **Stories** (`src/stories/`) - Component documentation with TypeScript controls
- **Type Checking** - `tsc --noEmit` validates TypeScript across the entire codebase
- **CI Tests** - Automated validation on every push with full type safety
- **Coverage** - Track test coverage with TypeScript-aware tooling

The CI automatically runs type checking, linting, and testing on every push!

_Built with ❤️, lots of Celsius energy drinks, and ☕ while learning React_
