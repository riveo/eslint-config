import { astroConfig, astroScriptsConfig } from '../partials/astro.ts';
import type { ConfigWithExtendsArray } from '../types.ts';

export const astro: ConfigWithExtendsArray = [astroConfig, astroScriptsConfig];
