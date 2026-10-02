import { defineConfig } from 'eslint/config';
import { jsxA11yConfig } from '../partials/jsx-a11y.ts';
import { reactConfig } from '../partials/react.ts';

export const react = defineConfig(reactConfig, jsxA11yConfig);
