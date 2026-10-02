# Changelog

## 0.3.0

### Breaking changes

- Upgrade to ESLint 10; require ESLint `^10.0.1` and Node.js `^22.13.0 || >=24.0.0`. Ref: #10
- Move framework plugins to optional peer dependencies. Projects using Astro, React, or Next.js configs must install the corresponding plugins explicitly.

### Added

- Expose `configs.disableTypeChecked` to disable type-aware TypeScript linting.
- Report missing framework plugins before loading configs, with required versions and installation guidance.

### Changed

- Load framework configs on demand.
- Normalize exported config arrays using ESLint's `defineConfig`.
- Update dependencies, test applications, and development tooling to Node.js 26 and pnpm 12.
- Document framework dependency requirements.

### Fixed

- Scope the TypeScript parser to JavaScript and TypeScript files, avoiding interference with other file formats. (Ref: #20)
- Apply compatibility fixes for React, JSX accessibility, and Astro rules under ESLint 10.
- Update Astro integration to use its flat config presets.

## 0.2.2

- Fix jsx-a11y rules in Astro config

## 0.2.1

- Fix missing `@typescript-eslint/parser` dependency

## 0.2.0

- Add support for Next.js and React (#10)
- Drop eslint v10 support (#12)

## 0.1.0

- Initial release based on https://notesofdev.com/eslint
- Fine-tuned and hardened rules configuration.
- Documentation added for installation, usage, Astro integration, and local development.
