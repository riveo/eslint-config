import type { ConfigWithExtendsArray } from '@eslint/config-helpers';
import { astro } from './configs/astro.ts';
import { nextjs } from './configs/nextjs.ts';
import { react } from './configs/react.ts';
import { recommended } from './configs/recommended.ts';
import { baseDevDependencies } from './partials/import.ts';

export const configs: Record<string, ConfigWithExtendsArray> = {
  recommended,
  astro,
  nextjs,
  react,
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
