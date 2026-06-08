export interface WorkbookNode {
  type: string;
  attrs: Record<string, unknown>;
  children?: WorkbookNode[];
}

export interface FlatWorkbookEntry {
  path: string;
  node: WorkbookNode;
}
