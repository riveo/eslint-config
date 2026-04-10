import { configs } from '@riveo/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig(
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
