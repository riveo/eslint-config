import { createRequire } from 'node:module';
import { recommended, disableTypeChecked } from './configs/recommended.ts';
import { baseDevDependencies } from './partials/import.ts';
import { ensurePackagesAreInstalled } from './utils/ensure-packages-are-installed.ts';

const require = createRequire(import.meta.url);

export const configs = {
  recommended,
  disableTypeChecked,
  get astro() {
    ensurePackagesAreInstalled([
      'eslint-plugin-astro',
      'eslint-plugin-jsx-a11y',
    ]);

    return (
      require('./configs/astro.js') as typeof import('./configs/astro.js')
    ).astro;
  },
  get nextjs() {
    ensurePackagesAreInstalled([
      '@next/eslint-plugin-next',
      'eslint-plugin-jsx-a11y',
      'eslint-plugin-react',
      'eslint-plugin-react-hooks',
    ]);

    return (
      require('./configs/nextjs.js') as typeof import('./configs/nextjs.js')
    ).nextjs;
  },
  get react() {
    ensurePackagesAreInstalled([
      'eslint-plugin-jsx-a11y',
      'eslint-plugin-react',
      'eslint-plugin-react-hooks',
    ]);

    return (
      require('./configs/react.js') as typeof import('./configs/react.js')
    ).react;
  },
} as const;

/**
 * Useful reusable rule options. `ruleOptions` provide easy access to options
 * that have a high probability of being overwritten in the consumer configs.
 */
export const ruleOptions = {
  importX: {
    noExtraneousDependencies: {
      devDependencies: baseDevDependencies,
    },
  },
} as const;
