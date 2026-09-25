import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

export const ensurePackagesAreInstalled = (packages: string[]): void => {
  const missing = [...new Set(packages)].filter((packageName) => {
    try {
      require.resolve(packageName);
      return false;
    } catch (error) {
      if (
        error instanceof Error &&
        'code' in error &&
        error.code === 'MODULE_NOT_FOUND'
      ) {
        return true;
      }

      throw error;
    }
  });

  if (missing.length > 0) {
    throw new Error(
      [`Missing required packages: ${missing.join(', ')}`].join('\n'),
    );
  }
};
