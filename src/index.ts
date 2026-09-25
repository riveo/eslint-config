import { createRequire } from 'node:module';
import { recommended, disableTypeChecked } from './configs/recommended.ts';
import { baseDevDependencies } from './partials/import.ts';
import { ensurePackagesAreInstalled } from './utils/ensure-packages-are-installed.ts';

const require = createRequire(import.meta.url);

export const configs = {
  recommended,
  disableTypeChecked,
  get astro() {
    const config =
      require('./configs/astro.js') as typeof import('./configs/astro.js');

    ensurePackagesAreInstalled(config.requiredPackages);

    return config.astro;
  },
  get nextjs() {
    const config =
      require('./configs/nextjs.js') as typeof import('./configs/nextjs.js');

    ensurePackagesAreInstalled(config.requiredPackages);

    return config.nextjs;
  },
  get react() {
    const config =
      require('./configs/react.js') as typeof import('./configs/react.js');

    ensurePackagesAreInstalled(config.requiredPackages);

    return config.react;
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
