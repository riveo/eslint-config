import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import type { ConfigWithExtends } from '../types.ts';

export const jsxA11yConfig: ConfigWithExtends = {
  name: 'riveo/jsx-a11y',
  extends: [jsxA11yPlugin.flatConfigs.recommended],
};
