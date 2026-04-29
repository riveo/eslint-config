import type { ConfigWithExtendsArray } from '@eslint/config-helpers';
import { jsxA11yConfig } from '../partials/jsx-a11y.ts';
import { nextjsConfig, nextjsIgnores } from '../partials/nextjs.ts';
import { reactConfig } from '../partials/react.ts';

export const nextjs: ConfigWithExtendsArray = [
  nextjsIgnores,
  nextjsConfig,
  reactConfig,
  jsxA11yConfig,
];
