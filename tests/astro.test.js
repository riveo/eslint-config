import path from 'node:path';
import { describe, it } from 'node:test';
import { createLintSuite } from './helpers/create-lint-suite.js';

describe('astro config', () => {
  const appDir = path.join(import.meta.dirname, 'apps/astro');

  const { testSmokeFiles, testExpectedFailures } = createLintSuite(appDir);

  it(
    'lints smoke files without errors',
    testSmokeFiles([
      'src/smoke/virtual-module.astro',
      'src/smoke/client-script.astro',
    ]),
  );

  it(
    'reports expected failures',
    testExpectedFailures({
      'src/fail/frontmatter/import-order.astro': ['import-x/order'],
      'src/fail/frontmatter/no-unused-vars.astro': [
        '@typescript-eslint/no-unused-vars',
      ],
      'src/fail/client-script/no-console.astro': ['no-console'],
      'src/fail/client-script/require-await.astro': ['require-await'],
    }),
  );
});
