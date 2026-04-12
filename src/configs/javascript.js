import js from '@eslint/js';

const jsExtensions = ['.js', '.cjs', '.mjs', '.jsx'];

/**
 * @type {import('@eslint/config-helpers').ConfigWithExtends}
 */
export const javascriptConfig = {
  name: 'riveo/javascript',
  extends: [{ name: '@eslint/js/recommended', ...js.configs.recommended }],
  settings: {
    // in some cases the tseslint parser fails to work with js.
    // switch js files to espree ensures that raw js files doesn't go through
    // ts parser
    'import-x/parsers': {
      espree: jsExtensions,
    },
  },
};
