import type { ConfigWithExtendsArray } from '@eslint/config-helpers';
import { astro } from './configs/astro.ts';
import { recommended } from './configs/recommended.ts';
import { baseDevDependencies } from './partials/import.ts';

export const configs: Record<string, ConfigWithExtendsArray> = {
  recommended,
  astro,
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
