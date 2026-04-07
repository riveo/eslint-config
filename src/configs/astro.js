import { configs as astroConfigs } from 'eslint-plugin-astro';

/**
 * @type {import('@eslint/config-helpers').ConfigWithExtends}
 */
export const astroConfig = {
  name: 'riveo/astro',
  extends: [astroConfigs.recommended],
};
