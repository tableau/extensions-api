import { WorkbookNode } from './types';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isWorkbookNode(value: unknown): value is WorkbookNode {
  return isRecord(value) && typeof value.type === 'string';
}

/**
 * Unwraps live save-underlying-metadata export ({ _comment, children: [workbook] })
 * or returns a bare workbook node unchanged.
 */
export function normalizeWorkbookRoot(raw: unknown): WorkbookNode {
  if (!isRecord(raw)) {
    throw new Error('Invalid workbook metadata: expected an object');
  }

  if (isWorkbookNode(raw) && raw.type === 'workbook') {
    return raw;
  }

  const children = raw.children;
  if (Array.isArray(children)) {
    const workbook = children.find(
      (child): child is WorkbookNode => isWorkbookNode(child) && child.type === 'workbook'
    );
    if (workbook) {
      return workbook;
    }
  }

  throw new Error('Invalid workbook metadata: no workbook node found in export root');
}
