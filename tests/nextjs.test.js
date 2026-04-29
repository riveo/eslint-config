import path from 'node:path';
import { describe, it } from 'node:test';
import { createLintSuite } from './helpers/create-lint-suite.js';

describe('nextjs config', () => {
  const { testSmokeFiles, testExpectedFailures } = createLintSuite(
    path.join(import.meta.dirname, 'apps/nextjs'),
  );

  it(
    'lints smoke files without errors',
    testSmokeFiles(['src/smoke/app/page.tsx', 'src/pages/about.tsx']),
  );

  it(
    'reports expected failures',
    testExpectedFailures({
      'src/fail/nextjs/inline-script-id.tsx': ['@next/next/inline-script-id'],
      'src/fail/nextjs/no-document-import-for-pages.tsx': [
        '@next/next/no-document-import-in-page',
      ],
      'src/fail/nextjs/no-html-link-for-pages.tsx': [
        '@next/next/no-html-link-for-pages',
      ],
      'src/fail/nextjs/no-sync-scripts.tsx': ['@next/next/no-sync-scripts'],
    }),
  );
});
