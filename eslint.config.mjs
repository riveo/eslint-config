// https://notesofdev.com/blog/my-eslint-config
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import { configs } from './src/index.js';

export default defineConfig(
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  globalIgnores(['var/', 'tests/']),
  configs.recommended,
);
