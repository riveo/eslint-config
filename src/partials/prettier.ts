import type { ConfigWithExtends } from '@eslint/config-helpers';
import eslintConfigPrettierFlat from 'eslint-config-prettier/flat';

export const prettierConfig: ConfigWithExtends = {
  name: 'riveo/prettier',
  extends: [eslintConfigPrettierFlat],
};
