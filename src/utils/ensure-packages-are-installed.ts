import { readFileSync } from 'node:fs';

const { peerDependencies = {} } = JSON.parse(
  readFileSync(new URL('../../package.json', import.meta.url), 'utf8'),
) as { peerDependencies?: Record<string, string> };

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
    const installPackages = missing.map((packageName) => {
      const version = Object.hasOwn(peerDependencies, packageName)
        ? peerDependencies[packageName]
        : undefined;

      return version
        ? `'${`${packageName}@${version}`.replaceAll("'", "'\\''")}'`
        : packageName;
    });

    throw new Error(
      [
        `Missing required packages: ${missing.join(', ')}`,
        `Install them: ${installPackages.join(' ')}`,
      ].join('\n'),
    );
  }
};
