import { configs } from '@riveo/eslint-config';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig(
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  configs.recommended,
);
