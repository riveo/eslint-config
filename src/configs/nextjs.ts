import { defineConfig } from 'eslint/config';
import { jsxA11yConfig } from '../partials/jsx-a11y.ts';
import { nextjsConfig, nextjsIgnores } from '../partials/nextjs.ts';
import { reactConfig } from '../partials/react.ts';

export const nextjs = defineConfig(
  nextjsIgnores,
  nextjsConfig,
  reactConfig,
  jsxA11yConfig,
);
