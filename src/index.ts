// @ts-check
import type { ConfigWithExtendsArray } from '@eslint/config-helpers';
import { astroConfig, astroScriptsConfig } from './configs/astro.ts';
import { importConfigs, baseDevDependencies } from './configs/import.ts';
import { javascriptConfig } from './configs/javascript.ts';
import { overridesConfig } from './configs/overrides.ts';
import { prettierConfig } from './configs/prettier.ts';
import {
  typescriptConfig,
  typescriptConfigTypeChecked,
} from './configs/typescript.ts';

export const configs: Record<string, ConfigWithExtendsArray> = {
  recommended: [
    javascriptConfig,
    importConfigs,
    typescriptConfig,
    typescriptConfigTypeChecked,
    prettierConfig,
    overridesConfig,
  ],
  astro: [astroConfig, astroScriptsConfig],
} as const;

export const ruleOptions = {
  importX: {
    noExtraneousDependencies: {
      devDependencies: baseDevDependencies,
    },
  },
} as const;
