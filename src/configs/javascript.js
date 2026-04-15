import js from '@eslint/js';
import {
  javascriptTSEslintRules,
  javascriptTSEslintTypedRulesInJs,
} from './javascript-tseslint-rules.js';

const jsExtensions = ['.js', '.cjs', '.mjs', '.jsx'];

export const javascriptTSEslintConfig = {
  files: jsExtensions.map((ext) => `**/*${ext}`),
  name: 'riveo/javascript-tseslint-restore',
  rules: javascriptTSEslintRules,
};

export const javascriptTSEslintTypedInJsConfig = {
  name: 'riveo/javascript-tseslint-typed-in-js',
  rules: javascriptTSEslintTypedRulesInJs,
};

/**
 * @type {import('@eslint/config-helpers').ConfigWithExtends}
 */
export const javascriptConfig = {
  name: 'riveo/javascript',
  extends: [
    { name: '@eslint/js/recommended', ...js.configs.recommended },
    javascriptTSEslintConfig,
    javascriptTSEslintTypedInJsConfig,
  ],
  settings: {
    // in some cases the tseslint parser fails to work with js.
    // switch js files to espree ensures that raw js files doesn't go through
    // ts parser
    'import-x/parsers': {
      espree: jsExtensions,
    },
  },
};
