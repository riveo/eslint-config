import { importX } from 'eslint-plugin-import-x';
import { configs as tseslint } from 'typescript-eslint';
import type { Config, ConfigWithExtends } from '../types.ts';

const typescriptFilesGlobs = ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts'];

export const typescriptImportConfig: Config = {
  name: 'riveo/typescript-import',
  files: typescriptFilesGlobs,
  rules: {
    // https://typescript-eslint.io/troubleshooting/typed-linting/performance/#eslint-plugin-import
    'import-x/named': 0,
    'import-x/namespace': 0,
    'import-x/default': 0,
    'import-x/no-named-as-default-member': 0,
    'import-x/no-unresolved': 0,
  },
};

export const typescriptConfig: ConfigWithExtends = {
  name: 'riveo/typescript',
  extends: [
    tseslint.recommended,
    tseslint.stylistic,
    importX.flatConfigs.typescript,
    typescriptImportConfig,
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/consistent-type-definitions': 'off',
  },
};

export const typescriptConfigTypeChecked: ConfigWithExtends = {
  name: 'riveo/typescript-type-checked',
  files: typescriptFilesGlobs,
  extends: [
    tseslint.recommendedTypeCheckedOnly,
    tseslint.stylisticTypeCheckedOnly,
  ],
};
