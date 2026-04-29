import type { Linter } from 'eslint';

type InfiniteArray<T> = T | InfiniteArray<T>[];

export type Config = Linter.Config;

export type ConfigWithExtends = Linter.Config & {
  extends?: InfiniteArray<Config>[];
};

export type ConfigWithExtendsArray = InfiniteArray<ConfigWithExtends>[];
