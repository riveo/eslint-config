import { defineConfig } from 'eslint/config';

/**
 * @param {import('@eslint/config-helpers').ConfigWithExtendsArray} configs
 * @param {{
 *   filter?: function(import('@eslint/config-helpers').Config): boolean
 * }} [options]
 *
 * @return {Object.<string, import('eslint').Linter.RuleEntry>}
 */
export const extractRules = (configs, options) => {
  const flattenedConfig = defineConfig(configs).filter(
    options?.filter ?? Boolean,
  );

  return Object.assign(
    {},
    ...flattenedConfig.map((entry) => entry.rules ?? {}),
  );
};
