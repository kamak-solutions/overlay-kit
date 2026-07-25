<div align="center">

# OverlayKit

### Lightweight. Elegant. Framework-Agnostic.

Build beautiful overlays, watermarks and branded layers with a modern, lightweight and developer-friendly API.

<br>

<p align="center">

<!-- Badges serão adicionadas quando o projeto for publicado -->

![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-Supported-61DAFB?logo=react&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-success)

</p>

A lightweight open-source library for creating overlays, watermarks, logos and branded visual layers.

Designed for modern JavaScript applications.

Built with ❤️ by **Kamak**

</div>

---

> **OverlayKit helps developers stop rewriting the same overlay component in every project.**

## Table of Contents

- [Welcome](#welcome)
- [Why OverlayKit?](#why-overlaykit)
- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Examples](#examples)
- [Packages](#packages)
- [Architecture](#architecture)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [About Kamak](#about-kamak)
- [License](#license)

## Welcome

Welcome to **OverlayKit**.

OverlayKit is an open-source library designed to simplify the creation of overlays, watermarks, logos, badges and branded visual layers for modern web applications.

Although adding an overlay may seem like a simple task, the implementation often becomes repetitive and increasingly complex as projects evolve.

Developers frequently need to solve the same challenges:

- Keeping overlays responsive.
- Supporting different positions and alignments.
- Managing opacity and sizing.
- Reusing the same logic across multiple projects.
- Maintaining consistent behavior across frameworks.

OverlayKit was created to solve these challenges with a single, lightweight and reusable solution.

Instead of rebuilding the same component every time, developers can focus on creating great products while OverlayKit handles the overlay system.

Whether you're building an e-commerce platform, a dashboard, a portfolio, a SaaS application or a personal project, OverlayKit provides a clean and consistent API that is easy to integrate and pleasant to use.

---

# Why OverlayKit?

Every project starts with a simple request.

> "Can we add a logo to the corner?"

At first, it seems straightforward.

Then the requirements begin to grow.

The overlay needs to:

- adapt to different screen sizes;
- support multiple positions;
- allow custom sizing;
- control opacity;
- remain responsive;
- work with React;
- work without React;
- be reusable across projects.

Before long, a simple logo becomes another custom component that needs maintenance.

OverlayKit was created to solve this problem once — and solve it well.

Our goal is not to replace your application logic.

Our goal is to provide a reliable, elegant and reusable overlay engine that developers can trust in every project.

Because developers should spend their time building products...

—not rebuilding the same overlay component over and over again.
---

# ✨ Features

OverlayKit is built with simplicity, flexibility and performance in mind.

## Core Features

- 🚀 Lightweight and optimized for modern web applications.
- 🟦 Built with TypeScript from the ground up.
- ⚛️ Native React integration.
- 🌐 Framework-agnostic DOM package.
- 📦 Modular architecture with independent packages.
- 📍 Flexible overlay positioning.
- 📐 Responsive by default.
- 💧 Configurable opacity.
- 📏 Custom sizing.
- 🎨 Easy styling and customization.
- 🔄 Dynamic updates.
- ⚡ High performance rendering.
- 🧪 Automated test suite.
- 🔁 Continuous Integration with GitHub Actions.
- 📚 Developer-friendly documentation.
- 📄 Released under the MIT License.

---

## Design Principles

OverlayKit is guided by a few core principles.

### Simplicity

The API should be intuitive and easy to learn.

### Performance

Small bundle size.

Minimal dependencies.

Fast rendering.

### Flexibility

Works with React today.

Designed to support additional frameworks in the future.

### Reliability

Every release should make the project more stable and more useful.

### Community

OverlayKit is built in the open.

Every issue, discussion and pull request helps improve the project.

We believe great open-source software is created together.
---

# 📦 Installation

OverlayKit is available as modular packages, allowing you to install only what your project needs.

### Using pnpm

```bash
pnpm add @overlay-kit/react
```

### Using npm

```bash
npm install @overlay-kit/react
```

### Using Yarn

```bash
yarn add @overlay-kit/react
```

---

## Available Packages

| Package | Description |
|----------|-------------|
| `@overlay-kit/core` | Core engine responsible for overlay calculations and shared logic. |
| `@overlay-kit/dom` | Framework-agnostic DOM implementation. |
| `@overlay-kit/react` | React components and hooks. |
| `@overlay-kit/shared` | Shared types, utilities and helpers. |

Choose the package that best fits your project, or combine them when needed.

---

# 🚀 Quick Start

Getting started with OverlayKit takes only a few minutes.

### React

```tsx
import { Overlay } from "@overlay-kit/react";

import logo from "./assets/logo.png";

export default function App() {
  return (
    <Overlay
      src={logo}
      position="bottom-right"
      size={120}
      opacity={0.6}
    />
  );
}
```

---

### Vanilla JavaScript

```ts
import { createOverlay } from "@overlay-kit/dom";

createOverlay({
  target: document.body,
  src: "/logo.png",
  position: "bottom-right",
  size: 120,
  opacity: 0.6,
});
```

---

In just a few lines of code, your application is ready to display responsive and customizable overlays.

OverlayKit takes care of the positioning so you can focus on building your application.
---

# 🏗️ Project Architecture

OverlayKit is organized as a modern TypeScript monorepo.

Each package has a single responsibility, making the project easier to maintain, test and extend.

```text
overlay-kit/
├── apps/
│   └── playground/          # Development playground
│
├── examples/
│   ├── react/               # React example
│   └── vanilla/             # Vanilla JavaScript example
│
├── packages/
│   ├── core/                # Core overlay engine
│   ├── dom/                 # Framework-agnostic DOM implementation
│   ├── react/               # React components and hooks
│   └── shared/              # Shared utilities and types
│
├── .github/
│   └── workflows/           # GitHub Actions
│
├── README.md
├── LICENSE
└── package.json
```

---

## Package Overview

| Package | Purpose |
|----------|---------|
| **@overlay-kit/core** | Core overlay engine and positioning logic. |
| **@overlay-kit/dom** | DOM implementation for JavaScript applications. |
| **@overlay-kit/react** | React components and hooks. |
| **@overlay-kit/shared** | Shared utilities, helpers and TypeScript types. |

This modular architecture keeps each package focused on a single responsibility while allowing developers to install only what they need.
---

# 🚀 Project Status

## Version 0.1.0

OverlayKit is currently in its first public release.

This version establishes the foundation of the project and already includes a modern architecture, automated testing and support for React and Vanilla JavaScript.

### What's available

- ✅ TypeScript-first development
- ✅ Modular monorepo architecture
- ✅ React package
- ✅ DOM package
- ✅ Shared utilities
- ✅ Automated tests
- ✅ GitHub Actions
- ✅ Examples
- ✅ MIT License

### What's coming next

- Documentation website
- Vue integration
- Svelte integration
- Solid integration
- Animation presets
- Plugin system
- More examples
- Expanded API documentation

Although OverlayKit is still in its early stages, the project is actively developed and designed with long-term maintainability in mind.

We believe the best open-source software evolves through collaboration, feedback and continuous improvement.
---

# 🤝 Contributing

Thank you for your interest in contributing to OverlayKit!

Whether you're fixing a bug, improving the documentation, adding tests or proposing a new feature, your contribution is greatly appreciated.

OverlayKit is built in the open because we believe the best software is created through collaboration.

Every contribution, no matter how small, helps improve the project.

## Ways to Contribute

There are many ways to help:

- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve the documentation
- 🧪 Add or improve tests
- ⚡ Optimize performance
- 🎨 Improve the developer experience
- 🌍 Help with translations
- 💬 Participate in discussions
- ❤️ Share the project with others

Not every contribution needs to involve writing code.

Helping improve the documentation or reporting an issue is just as valuable.

## Getting Started

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your improvements.
4. Run the test suite.
5. Open a Pull Request.

Please keep Pull Requests focused on a single topic whenever possible.

Small and well-described contributions are easier to review and merge.

## Code Quality

Before opening a Pull Request, please ensure that:

- All tests pass.
- The project builds successfully.
- New features include tests whenever possible.
- Documentation is updated when necessary.

Our goal is to keep OverlayKit reliable, maintainable and enjoyable for everyone.

---

# 💬 Community

OverlayKit is more than a library.

It is a community project.

We welcome developers of all experience levels.

Whether this is your first open-source contribution or your hundredth, you are welcome here.

Questions, suggestions and constructive feedback are always appreciated.

Let's build something great together.
---

# ❤️ About Kamak

OverlayKit is proudly developed and maintained by **Kamak**.

Kamak is a software studio focused on creating high-quality tools for developers.

We believe that great software should be:

- Simple to use
- Reliable in production
- Pleasant to maintain
- Well documented
- Open to collaboration

OverlayKit is one of the first projects in our open-source ecosystem.

Our mission is to create tools that solve real problems while providing an exceptional developer experience.

We hope this project becomes useful to developers around the world.

Thank you for being part of this journey.
---

# 🙏 Thank You

Every successful open-source project begins with a first release.

This is ours.

Version **0.1.0** is only the beginning of the OverlayKit journey.

There is still much to improve, many ideas to explore and many features to build.

If you've made it this far, thank you for taking the time to learn about our project.

Whether you're here to use OverlayKit, report an issue, improve the documentation or contribute code, your presence means a lot to us.

We sincerely hope OverlayKit becomes a useful tool in your projects.

If you find it helpful, consider giving the repository a ⭐.

It helps the project reach more developers and motivates us to keep improving it.

Welcome to OverlayKit.

Built with ❤️ by **Kamak**.

---

## License

OverlayKit is released under the MIT License.

See the [LICENSE](LICENSE) file for more information.

# 🤝 Contributing to OverlayKit

First of all, thank you for your interest in contributing to **OverlayKit**.

Whether you're fixing a typo, improving the documentation, reporting a bug or implementing a new feature, **your contribution is genuinely appreciated**.

Open source grows because people choose to share their time, ideas and knowledge.

We're grateful that you're considering being part of this journey.

---

# Our Philosophy

OverlayKit is built around a few simple principles.

- Simplicity over complexity.
- Readability over cleverness.
- Performance without sacrificing maintainability.
- Collaboration over competition.
- Continuous improvement.

Every contribution should help make the project a little better than it was yesterday.

---

# Ways to Contribute

There are many ways to contribute.

You can:

- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🧪 Add or improve tests
- ⚡ Optimize performance
- 🎨 Improve the developer experience
- 🌍 Help with translations
- 📚 Improve examples
- 💬 Participate in discussions

Not every contribution requires writing code.

Documentation improvements are just as valuable.

---

# Development Setup

Clone the repository.

```bash
git clone https://github.com/kamak-solutions/overlay-kit.git
```

Install dependencies.

```bash
pnpm install
```

Start the development environment.

```bash
pnpm dev
```

Run the test suite.

```bash
pnpm test
```

Build every package.

```bash
pnpm build
```

Run type checking.

```bash
pnpm typecheck
```

---

# Project Structure

```text
packages/
    core/
    dom/
    react/
    shared/

apps/
    playground/

examples/
    react/
    vanilla/
```

Each package has a single responsibility.

Please try to keep new code inside the appropriate package.

---

# Coding Standards

We value code that is:

- readable
- maintainable
- well documented
- well tested
- simple

Avoid unnecessary abstractions.

Prefer clarity over clever implementations.

---

# Testing

Before opening a Pull Request, please make sure:

- All tests pass.
- New features include tests whenever possible.
- Existing tests continue to pass.
- The project builds successfully.

Quality is everyone's responsibility.

---

# Commit Guidelines

Write clear and meaningful commit messages.

Examples:

```text
feat: add overlay animation support

fix: correct overlay positioning

docs: improve installation guide

test: add unit tests for createOverlay()

refactor: simplify positioning algorithm
```

---

# Pull Requests

Before submitting a Pull Request:

- Create a dedicated branch.
- Keep changes focused on a single topic.
- Update documentation if necessary.
- Add tests when applicable.
- Describe the motivation behind the change.

Smaller Pull Requests are easier to review and merge.

---

# Reporting Bugs

When reporting a bug, please include:

- OverlayKit version
- Operating system
- Node.js version
- Browser (if applicable)
- Steps to reproduce
- Expected behavior
- Actual behavior

Providing a minimal reproduction helps us investigate faster.

---

# Suggesting Features

Feature requests are always welcome.

Please explain:

- the problem you're trying to solve;
- why the current behavior isn't sufficient;
- your proposed solution;
- possible alternatives you've considered.

Good discussions often lead to great features.

---

# Community Values

We strive to build a welcoming, respectful and inclusive community.

Be kind.

Be constructive.

Respect different perspectives.

Help others learn.

Remember that everyone was a beginner once.

---

# Thank You

Every contribution helps OverlayKit grow.

Whether you improve a single sentence or implement an entirely new feature, your work matters.

Thank you for helping build OverlayKit.

We're excited to have you here.

Built with ❤️ by **Kamak**
# Contributor Covenant Code of Conduct

## Our Commitment

We are committed to creating a welcoming, respectful and inclusive environment for everyone.

We believe that diversity of experience, perspective and background makes open-source projects stronger.

Everyone participating in the OverlayKit community deserves to be treated with respect.

---

## Our Standards

Examples of positive behavior include:

- Being respectful and welcoming.
- Giving constructive feedback.
- Being patient with newcomers.
- Helping others learn.
- Respecting different opinions.
- Taking responsibility for mistakes.

Examples of unacceptable behavior include:

- Harassment or discrimination.
- Personal attacks.
- Trolling.
- Hate speech.
- Publishing private information without permission.
- Any behavior that makes others feel unsafe.

---

## Enforcement

Project maintainers are responsible for enforcing this Code of Conduct.

They may remove, edit or reject comments, commits, issues or pull requests that violate these guidelines.

---

## Scope

This Code of Conduct applies to:

- GitHub Issues
- Pull Requests
- Discussions
- Documentation
- Community spaces

---

## Contact

If you experience unacceptable behavior, please contact the maintainers.

Thank you for helping make OverlayKit a welcoming community.

Built with ❤️ by **Kamak**
# Security Policy

Thank you for helping keep OverlayKit secure.

## Reporting a Vulnerability

If you discover a security vulnerability, please do **not** open a public issue.

Instead, contact the maintainers privately with:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if available)

We will investigate as quickly as possible.

---

## Supported Versions

| Version | Supported |
|---------|-----------|
| 0.1.x | ✅ |
| < 0.1 | ❌ |

---

## Disclosure

We believe in responsible disclosure.

Security reports will be investigated before public disclosure to protect users.
# Changelog

All notable changes to this project will be documented in this file.

The format follows the principles of Keep a Changelog.

Semantic Versioning is used for releases.

---

# [0.1.0] - Initial Release

## Added

- Monorepo architecture
- Core package
- DOM package
- React package
- Shared utilities
- TypeScript support
- Automated tests
- GitHub Actions
- Initial documentation
- MIT License

---

This is the first public release of OverlayKit.

Welcome to the journey.
# OverlayKit Roadmap

OverlayKit is actively evolving.

Our goal is to build a modern, lightweight and reliable overlay library for the JavaScript ecosystem.

---

## Version 0.2

- Better positioning engine
- Improved API
- More examples
- Better documentation

---

## Version 0.3

- Vue support
- Svelte support
- Solid support

---

## Version 0.4

- Animation presets
- Plugin API
- Theme support

---

## Version 1.0

- Stable API
- Documentation website
- Complete framework support
- Production-ready ecosystem

---

Roadmaps may evolve based on community feedback.
# Support

Need help?

You can:

- Open a GitHub Discussion.
- Create an Issue.
- Read the documentation.

Before opening a new issue, please check if your question has already been answered.

Thank you for using OverlayKit.
# Frequently Asked Questions

## Is OverlayKit production ready?

Version 0.1.0 is an early release.

It is functional and actively maintained, but the API may evolve.

---

## Which frameworks are supported?

Currently:

- React
- Vanilla JavaScript

More frameworks are planned.

---

## Is TypeScript supported?

Yes.

OverlayKit is written in TypeScript.

---

## Is OverlayKit free?

Yes.

OverlayKit is released under the MIT License.

---

## How can I contribute?

Please read the CONTRIBUTING.md guide.
# Release Process

OverlayKit follows Semantic Versioning.

Example:

0.1.0

Major.Minor.Patch

Before every release:

- Run tests
- Run lint
- Run build
- Update CHANGELOG
- Create Git tag
- Publish to npm
- Publish GitHub Release

Every release should improve the project.