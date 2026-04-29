import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';
import type { Config, ConfigWithExtendsArray } from '../types.ts';

type Options = {
  filter?: (config: Config) => boolean;
};

type Rules = Partial<Linter.RulesRecord>;

export const extractRules = (
  configs: ConfigWithExtendsArray,
  options?: Options,
): Rules => {
  const flattenedConfig = defineConfig(configs).filter(
    options?.filter ?? Boolean,
  );

  return Object.assign(
    {},
    ...flattenedConfig.map((entry): Rules => entry.rules ?? {}),
  ) as Rules;
};
