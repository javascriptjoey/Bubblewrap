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

- **React 19** - The latest and greatest
- **TypeScript** - Type safety and better DX
- **Vite** - Lightning fast build tool
- **Storybook** - Component development and documentation
- **Tailwind CSS** - Utility-first styling
- **Vitest** - Testing framework
- **ESLint + Prettier** - Code quality and formatting

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

- ✅ Project setup with Vite + React + TypeScript
- ✅ Storybook integration
- ⏳ Building basic components (Button, Header, etc.)
- ⏳ State management
- ⏳ Advanced components (Carousel, Forms)
- ⏳ Building complete web pages

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

- **Button** - Interactive buttons with variants
- **Header** - Navigation headers
- **Page** - Page layouts

### Coming Soon

- 🎠 **Carousel** - Image/content carousel
- 📝 **Forms** - Input fields, validation
- 🏗️ **Layout** - Grid systems, containers
- 🎨 **Theming** - Dark/light mode support

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
- **Status**: ✅ 3/3 tests passing, 100% Button coverage

### 🌐 **Local Development Testing** (Full Browser Power)
```bash
npm run test:browser  # Runs full browser + Storybook tests
npm run test          # Interactive testing with watch mode
```
- **Environment**: Chromium browser via Playwright
- **Purpose**: Visual testing, interaction testing, story validation
- **Features**: Real browser rendering, user interaction simulation

### 🤔 **Why jsdom Instead of Just Node.js?**

**The Problem**: React components need DOM APIs (like `document`, `window`, HTML elements), but Node.js doesn't have them.

```javascript
// This would FAIL in pure Node.js:
const button = document.createElement('button'); // ❌ ReferenceError: document is not defined
button.textContent = 'Click me';
```

**The Solution**: jsdom creates a **fake browser environment** inside Node.js.

| Environment | What It Provides | Use Case |
|-------------|------------------|----------|
| **Pure Node.js** | Server APIs only (`fs`, `http`, etc.) | Backend code, CLI tools |
| **jsdom + Node.js** | Fake DOM + Browser APIs | Testing React components |
| **Real Browser** | Actual DOM + Full browser features | User interaction, visual testing |

### 🔧 **How jsdom Works**

```javascript
// jsdom creates fake browser globals in Node.js:
global.document = /* fake document object */
global.window = /* fake window object */
global.HTMLElement = /* fake HTML elements */

// Now React components can render:
const button = document.createElement('button'); // ✅ Works!
```

**Why This Matters for Our Tests**:
- ✅ **Fast**: No browser startup time
- ✅ **Reliable**: No graphics/network dependencies  
- ✅ **CI-Friendly**: Works in headless environments
- ✅ **Sufficient**: Tests component logic without visual complexity

### 📊 **Testing Architecture**

| Test Type | Count | Environment | Purpose |
|-----------|-------|-------------|---------|
| **Unit Tests** | 3 | jsdom | Component logic validation |
| **Storybook Tests** | 9 | Chromium | Visual & interaction testing |
| **Total Coverage** | 12 | Dual setup | Comprehensive validation |

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

This project serves as a comprehensive learning experience covering:

- **Component Architecture** - Building reusable, composable components
- **React 19 Features** - Latest React patterns and best practices  
- **TypeScript Integration** - Type-safe component development
- **Testing Strategies** - Unit testing, integration testing, visual testing
- **CI/CD Pipelines** - Automated quality assurance and deployment
- **Storybook Workflow** - Component-driven development
- **Code Quality** - ESLint, Prettier, and automated formatting

### 🔄 **Development Workflow**

1. **Component Development** → Build components in isolation with Storybook
2. **Unit Testing** → Write tests for component logic and behavior  
3. **Integration Testing** → Test component interactions and user flows
4. **Code Quality** → ESLint validation and Prettier formatting
5. **CI Validation** → Automated testing and build verification
6. **Deployment** → Automatic Storybook deployment to GitHub Pages

### 🎯 **Key Takeaways**

- **Dual Testing Strategy** - Reliable CI + Rich development experience
- **Component-First Approach** - Build UI from small, reusable pieces
- **Type Safety** - TypeScript catches errors before runtime
- **Automated Quality** - CI prevents regressions and maintains standards
- **Documentation** - Storybook serves as living component documentation

### 🚀 **Next Steps**

- Expand component library with forms, carousels, and complex layouts
- Implement state management patterns (Context, Redux, Zustand)
- Add accessibility testing and WCAG compliance
- Explore advanced React patterns (render props, compound components)
- Build complete application examples using the component library

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

- **Unit Tests** (`src/__tests__/`) - Test component logic
- **Stories** (`src/stories/`) - Document component usage  
- **CI Tests** - Automated validation on every push
- **Coverage** - Track what code is tested

The CI will automatically run when you push, but local testing catches issues faster!

_Built with ❤️, lots of Celsius energy drinks, and ☕ while learning React_
