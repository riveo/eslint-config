import { astroConfig } from './configs/astro.js';
import { extrasConfig } from './configs/extras.js';
import { importConfigs } from './configs/import.js';
import { javascriptConfig } from './configs/javascript.js';
import { prettierConfig } from './configs/prettier.js';
import {
  typescriptConfig,
  typescriptConfigTypeChecked,
} from './configs/typescript.js';

/**
 * @type {Object.<string, import('@eslint/config-helpers').ConfigWithExtendsArray>}
 */
export const configs = {
  recommended: [
    javascriptConfig,
    importConfigs,
    typescriptConfig,
    typescriptConfigTypeChecked,
    prettierConfig,
    extrasConfig,
  ],
  astro: astroConfig,
};

const defaultExport = {
  configs,
};

export default defaultExport;
