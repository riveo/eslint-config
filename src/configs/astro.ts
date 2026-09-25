import { defineConfig } from 'eslint/config';
import { astroConfig, astroScriptsConfig } from '../partials/astro.ts';

export const astro = defineConfig(astroConfig, astroScriptsConfig);
