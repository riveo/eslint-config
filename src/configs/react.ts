import type { ConfigWithExtendsArray } from '@eslint/config-helpers';
import { jsxA11yConfig } from '../partials/jsx-a11y.ts';
import { reactConfig } from '../partials/react.ts';

export const react: ConfigWithExtendsArray = [reactConfig, jsxA11yConfig];
