# @riveo/eslint-config

Opinionated flat ESLint config for TypeScript-first projects, with support for plain JavaScript and Astro.

This package is extracted from the setup described in the blog post [notesofdev: My optimal ESLint setup](https://notesofdev.com/blog/my-eslint-config), but the package itself is the source of truth.

## Why This Config

This package is aimed at projects that want:

- flat config
- TypeScript-first defaults
- typed linting for TS files
- import hygiene through `eslint-plugin-import-x`
- Prettier compatibility without using ESLint as a formatter
- a small amount of opinionated behavior on top of upstream recommended configs

## What It Includes

- ESLint core recommended rules
- `typescript-eslint` recommended and stylistic rules
- typed TypeScript rules for `*.ts`, `*.tsx`, `*.cts`, and `*.mts`
- `eslint-plugin-import-x` rules
- `eslint-config-prettier`
- a small set of additional preferences:
  - `no-console` allows `warn`, `error`, and `info`
  - `class-methods-use-this` is disabled
- Astro support through `configs.astro`

## Installation

Install the package and ESLint:

```sh
pnpm add -D @riveo/eslint-config eslint
```

For TypeScript projects, also make sure `typescript` is installed in your app:

```sh
pnpm add -D typescript
```

For Astro projects, also install:

```sh
pnpm add -D eslint-plugin-astro
```

## Usage

Create `eslint.config.mjs`:

```js
import { defineConfig } from 'eslint/config';
import { configs } from '@riveo/eslint-config';

export default defineConfig(
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  configs.recommended,
);
```

### JavaScript-Only

For JavaScript-only projects, you can still use the main config:

```js
import { defineConfig } from 'eslint/config';
import { configs } from '@riveo/eslint-config';

export default defineConfig(configs.recommended);
```

### Astro

For Astro, include `configs.astro` as well:

```js
import { defineConfig, globalIgnores } from 'eslint/config';
import { configs } from '@riveo/eslint-config';

export default defineConfig(
  globalIgnores(['.astro']),
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  configs.recommended,
  configs.astro,
);
```

## Exports

The package exports two values:

- `configs`
- `extras`

### `configs.recommended`

The main config for JavaScript and TypeScript projects. It combines:

- JavaScript base rules
- import rules
- TypeScript rules
- typed TypeScript rules
- Prettier compatibility
- personal preference rules

### `configs.astro`

Additional Astro-specific config. Use it together with `configs.recommended`.

### `extras`

Helper values exposed for custom overrides.

Currently this includes:

```js
extras.import.noExtraneousDependencies.baseDevDependencies
```

This is useful when extending `import-x/no-extraneous-dependencies` in your own root config.

## Notes

- Typed linting is enabled only for TypeScript files.
- `import-x/no-unresolved` is disabled for TypeScript files to avoid false positives and resolver overhead.
- Raw JavaScript files are forced through `espree` instead of the TypeScript parser.
- The package is built before publishing and exports compiled files from `dist/`.

## Development

Useful scripts in this repository:

```sh
pnpm run build
pnpm run check
pnpm run check:types
pnpm run check:lint
pnpm run check:format
pnpm test
```

More contributor notes are in [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT. See [LICENSE.md](./LICENSE.md).
