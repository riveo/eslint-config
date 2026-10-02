import type { Config } from '../types.ts';

export const scopeParser = (
  configs: Config[],
  { files }: { files: NonNullable<Config['files']> },
): Config[] => {
  return configs.flatMap((config) => {
    if (!config.languageOptions?.parser) {
      return [config];
    }

    const { parser, ...languageOptions } = config.languageOptions;

    return [
      { ...config, languageOptions },
      {
        ignores: config.ignores ?? [],
        name: `${config.name}/riveo-scoped-parser`,
        files,
        languageOptions: { parser },
      },
    ];
  });
};
