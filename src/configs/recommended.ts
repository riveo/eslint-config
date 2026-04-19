import type { ConfigWithExtendsArray } from '@eslint/config-helpers';
import { importConfigs } from '../partials/import.ts';
import { javascriptConfig } from '../partials/javascript.ts';
import { overridesConfig } from '../partials/overrides.ts';
import { prettierConfig } from '../partials/prettier.ts';
import {
  typescriptConfig,
  typescriptConfigTypeChecked,
} from '../partials/typescript.ts';

export const recommended: ConfigWithExtendsArray = [
  javascriptConfig,
  importConfigs,
  typescriptConfig,
  typescriptConfigTypeChecked,
  prettierConfig,
  overridesConfig,
];
