import { createLabel } from '../../support/js/shared.js';
import path from 'node:path';

export function labelFromSegments(parts) {
  return createLabel(path.join(...parts));
}
