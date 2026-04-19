# Contributing

## Local Workflow

Install dependencies:

```sh
pnpm install
```

Common commands:

```sh
pnpm run build
pnpm run check
pnpm test
```

## Scripts

- `build`: compiles `src/` to `dist/`
- `check`: runs all static checks
- `check:types`: runs TypeScript type checking for `src/` and `scripts/`
- `check:lint`: runs ESLint for the repository
- `check:format`: verifies formatting with Prettier
- `test`: runs the Node test suite

## Project Layout

- `src/`: published config source
- `scripts/`: internal maintenance scripts
- `tests/`: integration-style tests and fixture apps

## Notes

- The package itself is published from `dist/`.
- Test fixture apps under `tests/apps/` validate real consumer usage.
- If you change exported config behavior, update tests alongside the implementation.
