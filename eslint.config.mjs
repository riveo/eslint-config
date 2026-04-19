// https://notesofdev.com/blog/my-eslint-config
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import { configs, ruleOptions } from './src/index.ts';

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
  globalIgnores(['var/', 'tests/', 'dist/']),
  configs.recommended,
  {
    rules: {
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            ...ruleOptions.importX.noExtraneousDependencies.devDependencies,
            './scripts/*.ts',
          ],
        },
      ],
    },
  },
);
