// https://notesofdev.com/blog/my-eslint-config
import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import { configs as astroConfigs } from 'eslint-plugin-astro';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

defineConfig([
  () => {
    return {};
  },
]);

const baseConfig = defineConfig(
  globalIgnores(['var/']),
  js.configs.recommended,
);

const importConfig = defineConfig(
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    settings: {
      'import/parsers': {
        espree: ['.js', '.mjs', '.cjs'],
      },
    },
    rules: {
      // https://typescript-eslint.io/troubleshooting/typed-linting/performance/#eslint-plugin-import
      'import/named': 0,
      'import/namespace': 0,
      'import/default': 0,
      'import/no-named-as-default-member': 0,
      'import/no-unresolved': 0,
      'import/prefer-default-export': 0,

      'import/no-anonymous-default-export': 'error',

      'import/no-commonjs': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          alphabetize: {
            order: 'asc',
          },
        },
      ],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['**/*.test.ts', 'tests/**/*.ts', '*.config.mjs'],
        },
      ],
      'import/no-cycle': ['error'],
      'import/no-duplicates': ['error', { 'prefer-inline': true }],
    },
  },
);

const tsEslintConfig = defineConfig(
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      tseslint.configs.recommendedTypeCheckedOnly,
      tseslint.configs.stylisticTypeCheckedOnly,
    ],
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/consistent-type-definitions': 0,
    },
  },
);

const customConfig = defineConfig({
  rules: {
    'no-console': ['error', { allow: ['error', 'warn', 'info'] }],
    'class-methods-use-this': 0,
  },
});

const config = defineConfig([
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  baseConfig,
  importConfig,
  tsEslintConfig,
  prettierConfig,
  customConfig,
]);

export default config;
