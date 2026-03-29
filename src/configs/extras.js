/**
 * @type {import('@eslint/config-helpers').ConfigWithExtends}
 */
export const extrasConfig = [
  {
    rules: {
      'no-console': ['error', { allow: ['error', 'warn', 'info'] }],
      'class-methods-use-this': 0,
    },
  },
];
export const extrasConfig = {
  rules: {
    'no-console': ['error', { allow: ['error', 'warn', 'info'] }],
    'class-methods-use-this': 0,
  },
};
