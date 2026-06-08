import { FlatWorkbookEntry, WorkbookNode } from './types';

export function walkTree(
  node: WorkbookNode,
  visitor: (node: WorkbookNode, path: string) => void,
  path = 'root'
): void {
  visitor(node, path);
  if (node.children) {
    node.children.forEach((child, index) => {
      walkTree(child, visitor, `${path}/${child.type}[${index}]`);
    });
  }
}

export function findByType(node: WorkbookNode, type: string): WorkbookNode[] {
  const matches: WorkbookNode[] = [];
  walkTree(node, (current) => {
    if (current.type === type) {
      matches.push(current);
    }
  });
  return matches;
}

export function findWorksheetByName(node: WorkbookNode, name: string): WorkbookNode | undefined {
  return findByType(node, 'worksheet').find(
    (worksheet) => worksheet.attrs?.name === name
  );
}

export function flattenWorkbook(node: WorkbookNode): FlatWorkbookEntry[] {
  const entries: FlatWorkbookEntry[] = [];
  walkTree(node, (current, path) => {
    entries.push({ path, node: current });
  });
  return entries;
}
