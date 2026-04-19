import path from 'node:path';
import { extractRules } from '../src/internal/rule-extractor.ts';
import { writeGeneratedScriptToFile } from '../src/internal/script-writer.ts';
import { javascriptConfig } from '../src/partials/javascript.ts';
import { typescriptConfig } from '../src/partials/typescript.ts';

const rules = extractRules([javascriptConfig, typescriptConfig], {
  filter: (config) =>
    !!config.files || !!config?.name?.match(/riveo\/.+-tseslint-.+/),
});

const code = `
import type { RuleConfig } from '@eslint/config-helpers';

export const astroSharedRules: Record<string, RuleConfig> = ${JSON.stringify(rules, null, 2)};
`;

writeGeneratedScriptToFile(
  'scripts/update-astro-shared-rules.ts',
  path.resolve(
    import.meta.dirname,
    '../src/partials/astro-shared-rules.generated.ts',
  ),
  code,
);
