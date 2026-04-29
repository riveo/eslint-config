import assert from 'node:assert';
import { createRequire } from 'node:module';
import path from 'node:path';

/**
 * @param {string} appDir
 *
 * @return {{
 *   testSmokeFiles: function(string[]): function(): Promise<void>,
 *   testExpectedFailures: function(Object<string, string[]>): function(): Promise<void>
 * }}
 */
export const createLintSuite = (appDir) => {
  const requireFromApp = createRequire(path.join(appDir, 'package.json'));
  const { ESLint } = requireFromApp('eslint');
  const eslint = new ESLint({
    cwd: appDir,
    cache: false,
  });

  /**
   * @param {string[]} smokeFiles
   *
   * @return {(function(): Promise<void>)}
   */
  const testSmokeFiles = (smokeFiles) => async () => {
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
  };

  /**
   * @param {Object.<string, string[]>} expectedFailures
   *
   * @return {(function(): Promise<void>)|*}
   */
  const testExpectedFailures = (expectedFailures) => async () => {
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
  };

  return {
    testSmokeFiles,
    testExpectedFailures,
  };
};
