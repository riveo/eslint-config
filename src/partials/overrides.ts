import type { Config } from '@eslint/config-helpers';

export const overridesConfig: Config = {
  name: 'riveo/overrides',
  rules: {
    'no-console': ['error', { allow: ['error', 'warn', 'info'] }],
    'class-methods-use-this': 0,
  },
};
