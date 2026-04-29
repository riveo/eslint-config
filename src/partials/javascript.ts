import js from '@eslint/js';
import type { Config, ConfigWithExtends } from '../types.ts';
import {
  javascriptTSEslintRules,
  javascriptTSEslintTypedRulesInJs,
} from './javascript-tseslint-rules.generated.ts';

const jsExtensions = ['.js', '.cjs', '.mjs', '.jsx'];

export const javascriptTSEslintConfig: ConfigWithExtends = {
  files: jsExtensions.map((ext) => `**/*${ext}`),
  name: 'riveo/javascript-tseslint-restore',
  rules: javascriptTSEslintRules,
};

export const javascriptTSEslintTypedInJsConfig: Config = {
  name: 'riveo/javascript-tseslint-typed-in-js',
  rules: javascriptTSEslintTypedRulesInJs,
};

export const javascriptConfig: ConfigWithExtends = {
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
