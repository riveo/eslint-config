import { importX } from 'eslint-plugin-import-x';
import type { ConfigWithExtends } from '../types.ts';

export const baseDevDependencies = [
  '**/*.test.*',
  '**/*.spec.*',
  '**/tests/**',
  '*.config.*',
];

export const importConfigs: ConfigWithExtends = {
  name: 'riveo/import',
  extends: [importX.flatConfigs.recommended],
  rules: {
    'import-x/prefer-default-export': 'off',
    'import-x/no-named-as-default-member': 'error',
    'import-x/no-anonymous-default-export': 'error',
    'import-x/no-commonjs': 'error',
    'import-x/first': 'error',
    'import-x/newline-after-import': 'error',
    'import-x/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'import-x/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: baseDevDependencies,
      },
    ],
    'import-x/no-cycle': ['error'],
    'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
  },
};
