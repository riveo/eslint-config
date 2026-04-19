import type {
  Config,
  ConfigWithExtendsArray,
  RuleConfig,
} from '@eslint/config-helpers';
import { defineConfig } from 'eslint/config';

type Options = {
  filter?: (config: Config) => boolean;
};

type Rules = Partial<Record<string, RuleConfig>>;

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
