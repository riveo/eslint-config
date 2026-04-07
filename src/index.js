import { astroConfig } from './configs/astro.js';
import { extrasConfig } from './configs/extras.js';
import { importConfigs, baseDevDependencies } from './configs/import.js';
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

export const extras = {
  import: {
    noExtraneousDependencies: {
      baseDevDependencies,
    },
  },
};

const defaultExport = {
  configs,
  extras,
};

export default defaultExport;
