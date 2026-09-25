import { defineConfig } from 'eslint/config';
import { astroConfig, astroScriptsConfig } from '../partials/astro.ts';

export const requiredPackages = [
  'eslint-plugin-astro',
  'eslint-plugin-jsx-a11y',
];

export const astro = defineConfig(astroConfig, astroScriptsConfig);
