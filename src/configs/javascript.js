import js from '@eslint/js';

/**
 * @type {import('@eslint/config-helpers').ConfigWithExtends}
 */
export const javascriptConfig = {
  name: 'riveo/javascript',
  extends: [{ name: '@eslint/js/recommended', ...js.configs.recommended }],
};
