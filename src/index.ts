import type { ConfigWithExtendsArray } from '@eslint/config-helpers';
import { astro } from './configs/astro.ts';
import { recommended } from './configs/recommended.ts';
import { baseDevDependencies } from './partials/import.ts';

export const configs: Record<string, ConfigWithExtendsArray> = {
  recommended,
  astro,
} as const;

export const ruleOptions = {
  importX: {
    noExtraneousDependencies: {
      devDependencies: baseDevDependencies,
    },
  },
} as const;
