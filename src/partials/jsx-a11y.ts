import type { ConfigWithExtends } from '@eslint/config-helpers';
import { flatConfigs as jsxA11yConfigs } from 'eslint-plugin-jsx-a11y';

export const jsxA11yConfig: ConfigWithExtends = {
  name: 'riveo/jsx-a11y',
  extends: [jsxA11yConfigs.recommended],
};
