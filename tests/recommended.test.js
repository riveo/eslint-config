import assert from 'node:assert';
import path from 'node:path';
import { describe, it, before, after } from 'node:test';
import { ESLint } from 'eslint';

describe('recommended config', () => {
  let eslint;

  const smokeFiles = [
    'src/smoke/js/ok.js',
    'src/smoke/js/component.jsx',
    'src/smoke/ts/ok.ts',
    'src/smoke/ts/component.tsx',
  ];

  before(() => {
    eslint = new ESLint({
      cwd: path.join(import.meta.dirname, 'apps/recommended'),
      cache: false,
    });
  });

  after(() => {
    eslint = undefined;
  });

  it('lints smoke files without error', async () => {
    const results = await eslint.lintFiles(smokeFiles);

    results.forEach((result) => {
      const failedRules = result.messages
        .map((message) => message.ruleId ?? 'unknown')
        .join(',');

      assert.strictEqual(
        result.errorCount,
        0,
        `${result.filePath} failed on rules: ${failedRules}`,
      );
    });
  });
});
