import { configs } from '@riveo/eslint-config';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
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
  configs.react,
  {
    settings: {
      react: {
        version: '19.0',
      },
    },
  },
]);
