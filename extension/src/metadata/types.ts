export interface WorkbookNode {
  type: string;
  attrs: Record<string, unknown>;
  children?: WorkbookNode[];
  content?: string;
}

export interface FlatWorkbookEntry {
  path: string;
  node: WorkbookNode;
}

export type FieldType = 'column' | 'calculated' | 'parameter' | 'set' | 'group';

export interface FieldRecord {
  id: string;
  fieldType: FieldType;
  fieldId: string;
  fieldName: string | null;
  datasource: string;
  datasourceCaption: string | null;
  role: 'dimension' | 'measure' | null;
  datatype: string | null;
  value: string | null;
  hidden: boolean;
  used: boolean;
  sourceFieldId: string | null;
  sourceFieldName: string | null;
  numberFormat: string | null;
  defaultAggregation: string | null;
  searchText: string;
}

export interface FieldUsage {
  sheet: string;
  sheetType: 'worksheet' | 'dashboard';
  context: string;
}

export interface FieldEdge {
  from: string;
  to: string;
  via: 'formula' | 'set-definition' | 'group-definition';
}

export interface DependencySubgraph {
  nodes: FieldRecord[];
  edges: FieldEdge[];
  truncatedUpstream: boolean;
  truncatedDownstream: boolean;
}

export interface FieldIndex {
  fields: Map<string, FieldRecord>;
  usages: Map<string, FieldUsage[]>;
  upstream: Map<string, string[]>;
  downstream: Map<string, string[]>;
}

export interface OmnisearchFilters {
  fieldTypes?: FieldType[];
  roles?: ('dimension' | 'measure')[];
  datatypes?: string[];
  hidden?: 'all' | 'visible' | 'hidden';
}

export function makeFieldId(datasource: string, fieldId: string): string {
  return `${datasource}::${fieldId}`;
}
