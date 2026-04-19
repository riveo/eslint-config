import type { ConfigWithExtendsArray } from '@eslint/config-helpers';
import { astroConfig, astroScriptsConfig } from '../partials/astro.ts';

export const astro: ConfigWithExtendsArray = [astroConfig, astroScriptsConfig];
