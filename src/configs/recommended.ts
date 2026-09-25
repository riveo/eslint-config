import { defineConfig } from 'eslint/config';
import { importConfigs } from '../partials/import.ts';
import { javascriptConfig } from '../partials/javascript.ts';
import { overridesConfig } from '../partials/overrides.ts';
import { prettierConfig } from '../partials/prettier.ts';
import {
  typescriptConfig,
  typescriptConfigTypeChecked,
  typescriptDisableTypeChecked,
} from '../partials/typescript.ts';

export const recommended = defineConfig(
  javascriptConfig,
  importConfigs,
  typescriptConfig,
  typescriptConfigTypeChecked,
  prettierConfig,
  overridesConfig,
);

export const disableTypeChecked = defineConfig(typescriptDisableTypeChecked);
