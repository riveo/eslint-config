import type { ConfigWithExtendsArray } from '@eslint/config-helpers';
import { astroConfig, astroScriptsConfig } from '../partials/astro.ts';
import { jsxA11yConfig } from '../partials/jsx-a11y.ts';

export const astro: ConfigWithExtendsArray = [
  astroConfig,
  astroScriptsConfig,
  jsxA11yConfig,
];
