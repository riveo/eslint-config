import { createRequire } from 'node:module';
import { recommended, disableTypeChecked } from './configs/recommended.ts';
import { baseDevDependencies } from './partials/import.ts';

const require = createRequire(import.meta.url);

export const configs = {
  recommended,
  disableTypeChecked,
  get astro() {
    return (
      require('./configs/astro.js') as typeof import('./configs/astro.js')
    ).astro;
  },
  get nextjs() {
    return (
      require('./configs/nextjs.js') as typeof import('./configs/nextjs.js')
    ).nextjs;
  },
  get react() {
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
