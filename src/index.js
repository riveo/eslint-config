import { baseConfig } from './configs/base.js';
import { extrasConfig } from './configs/extras.js';
import { importConfigs } from './configs/import.js';
import { prettierConfig } from './configs/prettier.js';
import { typescriptConfig } from './configs/typescript.js';

/**
 * @type {import('@eslint/config-helpers').ConfigWithExtendsArray}
 */
export const recommended = [
  ...baseConfig,
  ...importConfigs,
  ...typescriptConfig,
  ...typescriptConfigTypeChecked,
  ...prettierConfig,
  ...extrasConfig,
];
