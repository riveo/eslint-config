import { importX } from 'eslint-plugin-import-x';
import tseslint from 'typescript-eslint';

/**
 * @type {import('@eslint/config-helpers').ConfigWithExtends}
 */
export const typescriptConfig = {
  name: 'riveo/typescript',
  extends: [tseslint.configs.recommended, tseslint.configs.stylistic],

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
    '@typescript-eslint/consistent-type-definitions': 0,
  },
};

/**
 * @type {import('@eslint/config-helpers').ConfigWithExtends}
 */
export const typescriptConfigTypeChecked = {
  name: 'riveo/typescript-type-checked',
  files: ['**/*.ts', '**/*.tsx'],
  extends: [
    tseslint.configs.recommendedTypeCheckedOnly,
    tseslint.configs.stylisticTypeCheckedOnly,
    importX.flatConfigs.typescript,
  ],
  rules: {
    // https://typescript-eslint.io/troubleshooting/typed-linting/performance/#eslint-plugin-import
    'import-x/named': 0,
    'import-x/namespace': 0,
    'import-x/default': 0,
    'import-x/no-named-as-default-member': 0,
    'import-x/no-unresolved': 0,
  },
};
