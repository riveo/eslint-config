import type { ConfigWithExtends } from '@eslint/config-helpers';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export const reactConfig: ConfigWithExtends = {
  name: 'riveo/react',
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    reactPlugin.configs.flat.recommended!,
    reactPlugin.configs.flat['jsx-runtime']!,
    reactHooksPlugin.configs.flat.recommended,
  ],
};
