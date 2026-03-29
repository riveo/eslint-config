/**
 * @type {import('@eslint/config-helpers').ConfigWithExtends}
 */
export const extrasConfig = {
  name: 'riveo/extras',
  rules: {
    'no-console': ['error', { allow: ['error', 'warn', 'info'] }],
    'class-methods-use-this': 0,
  },
};
