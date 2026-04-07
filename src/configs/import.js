import { importX } from 'eslint-plugin-import-x';

/**
 * @type {import('@eslint/config-helpers').ConfigWithExtends}
 */
export const importConfigs = {
  name: 'riveo/import',
  extends: [importX.flatConfigs.recommended],
  settings: {
    // in some cases the tseslint parser fails to work with js.
    // switch js files to espree ensures that raw js files doesn't go through
    // ts parser
    'import/parsers': {
      espree: ['.js', '.cjs', '.mjs', '.jsx'],
    },
  },
  rules: {
    'import-x/prefer-default-export': 0,
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
        devDependencies: [
          '**/*.test.*',
          '**/*.spec.*',
          '**/tests/**',
          '*.config.*',
        ],
      },
    ],
    'import-x/no-cycle': ['error'],
    'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
  },
};
