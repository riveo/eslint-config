import { createLabel } from '../../support/ts/shared.js';
import path from 'node:path';

export function labelFromSegments(parts: string[]) {
  return createLabel(path.join(...parts));
}
