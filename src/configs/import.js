import { importX } from 'eslint-plugin-import-x';

/**
 * @type {import('@eslint/config-helpers').ConfigWithExtends}
 */
export const importConfigs = [
  importX.flatConfigs.recommended,
  {
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
            './*.config.*',
          ],
        },
      ],
      'import-x/no-cycle': ['error'],
      'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
    },
  },
];
export const importConfigs = {
  extends: [importX.flatConfigs.recommended],
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
          './*.config.*',
        ],
      },
    ],
    'import-x/no-cycle': ['error'],
    'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
  },
};
