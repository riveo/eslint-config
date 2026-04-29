import eslintConfigPrettierFlat from 'eslint-config-prettier/flat';
import type { ConfigWithExtends } from '../types.ts';

export const prettierConfig: ConfigWithExtends = {
  name: 'riveo/prettier',
  extends: [eslintConfigPrettierFlat],
};
