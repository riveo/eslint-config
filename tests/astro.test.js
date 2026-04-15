import path from 'node:path';
import { describe, it, before } from 'node:test';
import { createLintSuite } from './helpers/create-lint-suite.js';

describe('astro config', () => {
  const appDir = path.join(import.meta.dirname, 'apps/astro');

  const { testSmokeFiles, testExpectedFailures } = createLintSuite(appDir);

  // astro plugin has some strange way of finding if @typescript-eslint/parser
  // is available. With the pnpm setup we need to be in the app's dir and the app
  // has to use `@typescript-eslint/parser` as a direct dependency. In the release
  // this is not needed.
  before(() => {
    process.chdir(appDir);
  });

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
