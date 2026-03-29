import eslintConfigPrettierFlat from 'eslint-config-prettier/flat';

/**
 * @type {import('@eslint/config-helpers').ConfigWithExtends}
 */
export const prettierConfig = {
  name: 'riveo/prettier',
  extends: [eslintConfigPrettierFlat],
};
