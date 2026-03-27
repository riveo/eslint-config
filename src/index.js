import { baseConfig } from './configs/base.js';
import { importConfigs } from './configs/import.js';
import { prettierConfig } from './configs/prettier.js';
import { typescriptConfigs } from './configs/typescript.js';

export const recommended = [
  baseConfig,
  importConfigs,
  typescriptConfigs,
  prettierConfig,
];
