import type { Config, ConfigWithExtends } from '@eslint/config-helpers';
import nextjsPlugin from '@next/eslint-plugin-next';
import { globalIgnores } from 'eslint/config';

export const nextjsIgnores: Config = globalIgnores(
  ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  'riveo/nextjs-ignores',
);

export const nextjsConfig: ConfigWithExtends = {
  name: 'riveo/nextjs',
  // core-web-witals already includes recommended set
  extends: [nextjsPlugin.configs['core-web-vitals']],
};
