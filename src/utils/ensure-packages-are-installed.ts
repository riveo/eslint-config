export const ensurePackagesAreInstalled = (packages: string[]): void => {
  const missing = [...new Set(packages)].filter((packageName) => {
    try {
      import.meta.resolve(packageName);
      return false;
    } catch (error) {
      if (
        error instanceof Error &&
        'code' in error &&
        error.code === 'ERR_MODULE_NOT_FOUND'
      ) {
        return true;
      }

      throw error;
    }
  });

  if (missing.length > 0) {
    throw new Error(`Missing required packages: ${missing.join(', ')}`);
  }
};
