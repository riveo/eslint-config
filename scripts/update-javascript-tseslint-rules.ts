import path from 'node:path';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import { builtinRules } from 'eslint/use-at-your-own-risk';
import { extractRules } from '../src/internal/rule-extractor.ts';
import { writeGeneratedScriptToFile } from '../src/internal/script-writer.ts';
import {
  typescriptConfig,
  typescriptConfigTypeChecked,
} from '../src/partials/typescript.ts';

const tsEslintRulesMap = Object.fromEntries(
  Object.entries(typescriptEslintPlugin.rules).flatMap(([ruleName, rule]) => {
    const extendsBaseRule = rule.meta?.docs?.extendsBaseRule;

    if (!extendsBaseRule) {
      return [];
    }

    const eslintRuleName =
      extendsBaseRule === true ? ruleName : extendsBaseRule;

    if (!builtinRules.has(eslintRuleName)) {
      throw new Error(
        `@typescript-eslint/${ruleName} declares missing ESLint base rule "${eslintRuleName}"`,
      );
    }

    return [[`@typescript-eslint/${ruleName}`, eslintRuleName]];
  }),
);

const typescriptRules = extractRules([typescriptConfig]);
const typescriptTypeCheckedRules = extractRules([typescriptConfigTypeChecked]);

// The typescript-eslint config disables rules handled by TypeScript and turns
// on some extra. For js, we don't want to disable the ts-backed, but we want
// to use the extras.
const eslintRecommendedRules = Object.fromEntries(
  Object.entries(typescriptRules).flatMap(([ruleName, value]) => {
    if (builtinRules.has(ruleName) && value !== 'off') {
      return [[ruleName, value]];
    }

    return [];
  }),
);

// Some of the type checked typescript-eslint rules have an equivalent in
// built in rules. We want them configures for js.
const tsEslintAddonRules = Object.fromEntries(
  Object.entries(typescriptTypeCheckedRules).flatMap(([ruleName, value]) => {
    const eslintRuleName = tsEslintRulesMap[ruleName];
    return eslintRuleName ? [[eslintRuleName, value]] : [];
  }),
);

const code = `
import type { Linter } from 'eslint';

export const javascriptTSEslintRules: Record<string, Linter.RuleSeverity> = ${JSON.stringify(eslintRecommendedRules, null, 2)};

export const javascriptTSEslintTypedRulesInJs: Record<string, Linter.RuleSeverity> = ${JSON.stringify(tsEslintAddonRules, null, 2)};
`;

writeGeneratedScriptToFile(
  'scripts/javascript-tseslint-rules.generated.ts',
  path.resolve(
    import.meta.dirname,
    '../src/partials/javascript-tseslint-rules.generated.ts',
  ),
  code,
);
