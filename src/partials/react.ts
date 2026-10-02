import { fixupConfigRules } from '@eslint/compat';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import type { ConfigWithExtends } from '../types.ts';

export const reactConfig: ConfigWithExtends = {
  name: 'riveo/react',
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: fixupConfigRules([
    {
      name: 'react/recommended',
      ...reactPlugin.configs.flat.recommended,
    },
    { name: 'react/jsx-runtime', ...reactPlugin.configs.flat['jsx-runtime'] },
    {
      name: 'react-hooks/recommended',
      ...reactHooksPlugin.configs.flat.recommended,
    },
  ]),
};
