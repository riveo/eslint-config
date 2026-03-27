import importPlugin from 'eslint-plugin-import';

/**
 * @type {import('eslint').Linter.Config[]}
 */
export const importConfigs = [
  importPlugin.flatConfigs.recommended,
  {
    rules: {
      'import/prefer-default-export': 0,
      'import/no-named-as-default-member': 'error',
      'import/no-anonymous-default-export': 'error',
      'import/no-commonjs': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/order': [
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
      'import/no-extraneous-dependencies': [
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
      'import/no-cycle': ['error'],
      'import/no-duplicates': ['error', { 'prefer-inline': true }],
    },
  },
];
