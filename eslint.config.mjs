// https://notesofdev.com/blog/my-eslint-config
import { defineConfig, globalIgnores } from 'eslint/config';
import { configs } from './src/index.js';

export default defineConfig(globalIgnores(['var/']), configs.recommended);
