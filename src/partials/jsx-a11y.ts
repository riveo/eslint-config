import type { ConfigWithExtends } from '@eslint/config-helpers';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

export const jsxA11yConfig: ConfigWithExtends = {
  name: 'riveo/jsx-a11y',
  extends: [jsxA11yPlugin.flatConfigs.recommended],
};
