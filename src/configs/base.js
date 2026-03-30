import js from '@eslint/js';

/**
 * @type {import('@eslint/config-helpers').ConfigWithExtends}
 */
export const baseConfig = {
  name: 'riveo/base',
  extends: [{ name: '@eslint/js/recommended', ...js.configs.recommended }],
};
