import { defineConfig } from 'eslint/config';
import { jsxA11yConfig } from '../partials/jsx-a11y.ts';
import { nextjsConfig, nextjsIgnores } from '../partials/nextjs.ts';
import { reactConfig } from '../partials/react.ts';

export const requiredPackages = [
  '@next/eslint-plugin-next',
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-react',
  'eslint-plugin-react-hooks',
];

export const nextjs = defineConfig(
  nextjsIgnores,
  nextjsConfig,
  reactConfig,
  jsxA11yConfig,
);
