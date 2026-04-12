import path from 'node:path';
import { describe, it } from 'node:test';
import { createLintSuite } from './helpers/create-lint-suite.js';

describe('recommended config', () => {
  const { testSmokeFiles, testExpectedFailures } = createLintSuite(
    path.join(import.meta.dirname, 'apps/recommended'),
  );

  it(
    'lints smoke files without errors',
    testSmokeFiles([
      'src/smoke/js/ok.js',
      'src/smoke/js/component.jsx',
      'src/smoke/ts/ok.ts',
      'src/smoke/ts/component.tsx',
    ]),
  );

  it(
    'reports expected failures',
    testExpectedFailures({
      'src/fail/js/import-order.js': ['import-x/order'],
      'src/fail/js/no-console.js': ['no-console'],
      'src/fail/js/no-unused-vars.js': ['@typescript-eslint/no-unused-vars'],

      'src/fail/ts/consistent-type-imports.ts': [
        '@typescript-eslint/consistent-type-imports',
      ],
      'src/fail/ts/import-order.ts': ['import-x/order'],
      'src/fail/ts/no-console.ts': ['no-console'],
      'src/fail/ts/no-unused-vars.ts': ['@typescript-eslint/no-unused-vars'],
    }),
  );
});
