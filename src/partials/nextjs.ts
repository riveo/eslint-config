import type { ConfigWithExtends } from '@eslint/config-helpers';
import { configs as nextConfigs } from '@next/eslint-plugin-next';

export const nextjsConfig: ConfigWithExtends = {
  name: 'riveo/nextjs',
  // core-web-witals already includes recommended set
  extends: [nextConfigs['core-web-vitals']],
};
//
// {
//     name: 'nextjs',
//     // eslint-disable-next-line import-x/no-named-as-default-member
//     extends: [next.configs.recommended, next.configs['core-web-vitals']],
//   },
//   {
//     name: 'nextjs-react',
//
//     settings: {
//       react: {
//         version: 'detect',
//       },
//     },
//
//     extends: [
//       react.configs.flat.recommended,
//       react.configs.flat['jsx-runtime'],
//       reactHooks.configs.flat.recommended,
//     ],
//   },
//   {
//     name: 'jsx-a11y',
//     extends: [jsxA11yConfig.flatConfigs.recommended],
//   },
