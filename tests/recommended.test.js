import assert from 'node:assert';
import path from 'node:path';
import { describe, it, before, after } from 'node:test';
import { ESLint } from 'eslint';

describe('recommended config', () => {
  let eslint;
  const appDir = path.join(import.meta.dirname, 'apps/recommended');

  const smokeFiles = [
    'src/smoke/js/ok.js',
    'src/smoke/js/component.jsx',
    'src/smoke/ts/ok.ts',
    'src/smoke/ts/component.tsx',
  ];

  const expectedFailures = {
    'src/fail/js/import-order.js': ['import-x/order'],
    'src/fail/js/no-console.js': ['no-console'],
    'src/fail/js/no-unused-vars.js': ['@typescript-eslint/no-unused-vars'],

    'src/fail/ts/consistent-type-imports.ts': [
      '@typescript-eslint/consistent-type-imports',
    ],
    'src/fail/ts/import-order.ts': ['import-x/order'],
    'src/fail/ts/no-console.ts': ['no-console'],
    'src/fail/ts/no-unused-vars.ts': ['@typescript-eslint/no-unused-vars'],
  };

  before(() => {
    eslint = new ESLint({
      cwd: appDir,
      cache: false,
    });
  });

  after(() => {
    eslint = undefined;
  });

  it('lints smoke files without error', async () => {
    const results = await eslint.lintFiles(smokeFiles);

    assert.strictEqual(
      results.length,
      smokeFiles.length,
      `Expected ${smokeFiles.length} results, received ${results.length}.`,
    );

    results.forEach((result) => {
      const failedRules = result.messages.map(
        (message) => message.ruleId ?? 'unknown',
      );

      assert.strictEqual(
        failedRules.length,
        0,
        `Failed smoke validation in ${result.filePath}. Received ${failedRules.join(', ')}`,
      );
    });
  });

  it('reports expected failures', async () => {
    const filesToLint = Object.keys(expectedFailures);
    const results = await eslint.lintFiles(filesToLint);

    assert.strictEqual(
      results.length,
      filesToLint.length,
      `Expected ${filesToLint.length} results, received ${results.length}`,
    );

    results.forEach((result) => {
      const relativePath = path.relative(appDir, result.filePath);

      assert.strictEqual(
        filesToLint.includes(relativePath),
        true,
        `Unexpected linted file result: ${relativePath}.`,
      );

      const expectedFailedRules = expectedFailures[relativePath] ?? [];
      const failedRules = result.messages.map(
        (message) => message.ruleId ?? 'unknown',
      );

      const missingRules = expectedFailedRules.filter(
        (failedRule) => !failedRules.includes(failedRule),
      );

      const extraRules = failedRules.filter(
        (failedRule) => !expectedFailedRules.includes(failedRule),
      );

      assert.strictEqual(
        missingRules.length + extraRules.length,
        0,
        `Failed rules mismatch in ${relativePath}. Expected ${expectedFailedRules.join(', ')}, received ${failedRules.join(', ')}`,
      );
    });
  });
});
