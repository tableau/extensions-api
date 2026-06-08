import { WorkbookNode } from './types';

export const PARAMETERS_DATASOURCE = 'Parameters';

export function attrString(node: WorkbookNode, key: string): string | null {
  const value = node.attrs[key];
  return typeof value === 'string' ? value : null;
}
