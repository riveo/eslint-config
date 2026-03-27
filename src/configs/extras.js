/**
 * @type {import('eslint').Linter.Config[]}
 */
export const extrasConfig = [
  {
    rules: {
      'no-console': ['error', { allow: ['error', 'warn', 'info'] }],
      'class-methods-use-this': 0,
    },
  },
];
