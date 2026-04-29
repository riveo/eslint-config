import path from 'node:path';
import { describe, it } from 'node:test';
import { createLintSuite } from './helpers/create-lint-suite.js';

describe('react config', () => {
  const { testSmokeFiles, testExpectedFailures } = createLintSuite(
    path.join(import.meta.dirname, 'apps/react'),
  );

  it(
    'lints smoke files without errors',
    testSmokeFiles(['src/smoke/component.tsx', 'src/smoke/hooks-and-a11y.tsx']),
  );

  it(
    'reports expected failures',
    testExpectedFailures({
      'src/fail/react/jsx-key.tsx': ['react/jsx-key'],
      'src/fail/react/jsx-no-target-blank.tsx': ['react/jsx-no-target-blank'],
      'src/fail/react-hooks/rules-of-hooks.tsx': ['react-hooks/rules-of-hooks'],
      'src/fail/jsx-a11y/alt-text.tsx': ['jsx-a11y/alt-text'],
    }),
  );
});
