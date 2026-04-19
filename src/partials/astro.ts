import type { Config, ConfigWithExtends } from '@eslint/config-helpers';
import { configs as astroConfigs } from 'eslint-plugin-astro';
import { configs as tseslint } from 'typescript-eslint';
import { astroSharedRules } from './astro-shared-rules.generated.ts';
import { javascriptTSEslintTypedRulesInJs } from './javascript-tseslint-rules.generated.ts';

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
 */
const astroSharedConfig: Config = {
  name: 'riveo/astro-shared-rules',
  files: astroGlob,
  rules: astroSharedRules,
};

export const astroConfig: ConfigWithExtends = {
  name: 'riveo/astro',
  extends: [astroConfigs.recommended, astroSharedConfig],
};

/**
 * Astro's client-side processor emits synthetic `*.astro/*.ts` files.
 * These paths are not part of the TS project graph, so typed linting must
 * be disabled for them even when the host app enables project service.
 */
export const astroScriptsConfig: ConfigWithExtends = {
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
