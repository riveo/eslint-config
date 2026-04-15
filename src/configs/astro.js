import { configs as astroConfigs } from 'eslint-plugin-astro';
import { configs as tseslint } from 'typescript-eslint';
import { javascriptTSEslintTypedRulesInJs } from './javascript-tseslint-rules.js';
import { javascriptConfig } from './javascript.js';
import { typescriptConfig } from './typescript.js';
import { extractRules } from '../helpers/rule-extractor.js';

const astroGlob = ['*.astro', '**/*.astro'];
const astroScriptGlob = [
  '**/*.astro/*.ts',
  '*.astro/*.ts',
  '**/*.astro/*.js',
  '*.astro/*.js',
];

/**
 * Reapplies the shared JS/TS rule set to Astro frontmatter so `.astro` files
 * behave as close as possible to regular source files.
 *
 * @type {import('@eslint/config-helpers').ConfigWithExtends}
 */
const astroSharedConfig = {
  name: 'riveo/astro-shared-rules',
  files: astroGlob,
  rules: extractRules([javascriptConfig, typescriptConfig], {
    filter: (config) => !!config.files || config?.name?.includes('-tseslint-'),
  }),
};

/**
 * @type {import('@eslint/config-helpers').ConfigWithExtends}
 */
export const astroConfig = {
  name: 'riveo/astro',
  extends: [astroConfigs.recommended, astroSharedConfig],
};

/**
 * Astro's client-side processor emits synthetic `*.astro/*.ts` files.
 * These paths are not part of the TS project graph, so typed linting must
 * be disabled for them even when the host app enables project service.
 *
 * @type {import('@eslint/config-helpers').ConfigWithExtends}
 */
export const astroScriptsConfig = {
  name: 'riveo/astro-scripts',
  files: astroScriptGlob,
  extends: [tseslint.disableTypeChecked],
  rules: javascriptTSEslintTypedRulesInJs,
  languageOptions: {
    parserOptions: {
      project: null,
      projectService: false,
    },
  },
};
