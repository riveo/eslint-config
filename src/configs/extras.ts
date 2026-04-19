import type { ConfigWithExtends } from '@eslint/config-helpers';

export const extrasConfig: ConfigWithExtends = {
  name: 'riveo/extras',
  rules: {
    'no-console': ['error', { allow: ['error', 'warn', 'info'] }],
    'class-methods-use-this': 0,
  },
};
