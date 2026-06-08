import { FieldKind, FieldRecord, makeFieldId, WorkbookNode } from './types';

const PARAMETERS_DATASOURCE = 'Parameters';

function attrString(node: WorkbookNode, key: string): string | null {
  const value = node.attrs[key];
  return typeof value === 'string' ? value : null;
}

function getFormula(node: WorkbookNode): string | null {
  const calculation = node.children?.find((child) => child.type === 'calculation');
  if (!calculation) {
    return null;
  }
  return attrString(calculation, 'formula');
}

function classifyFieldKind(
  datasourceName: string,
  node: WorkbookNode
): FieldKind {
  if (datasourceName === PARAMETERS_DATASOURCE) {
    return 'parameter';
  }
  if (node.type === 'group') {
    if (node.attrs['user:ui-builder'] === 'filter-group') {
      return 'set';
    }
    return 'group';
  }
  if (getFormula(node)) {
    return 'calculated';
  }
  return 'column';
}

function buildSearchText(field: Omit<FieldRecord, 'searchText'>): string {
  return [
    field.caption,
    field.name,
    field.formula,
    field.datasourceCaption,
    field.datasource,
    field.kind,
    field.role,
    field.datatype,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

function fieldRecordFromNode(
  node: WorkbookNode,
  datasourceName: string,
  datasourceCaption: string | null
): FieldRecord {
  const name = attrString(node, 'name') ?? '';
  const kind = classifyFieldKind(datasourceName, node);
  const roleAttr = attrString(node, 'role');
  const role =
    roleAttr === 'dimension' || roleAttr === 'measure' ? roleAttr : null;

  const base: Omit<FieldRecord, 'searchText'> = {
    id: makeFieldId(datasourceName, name),
    kind,
    name,
    caption: attrString(node, 'caption'),
    datasource: datasourceName,
    datasourceCaption,
    role,
    datatype: attrString(node, 'datatype'),
    formula: getFormula(node),
    hidden: node.attrs.hidden === 'true',
  };

  return {
    ...base,
    searchText: buildSearchText(base),
  };
}

export function buildFieldCatalog(workbook: WorkbookNode): Map<string, FieldRecord> {
  const fields = new Map<string, FieldRecord>();
  const datasourcesNode = workbook.children?.find((child) => child.type === 'datasources');

  if (!datasourcesNode?.children) {
    return fields;
  }

  for (const datasourceNode of datasourcesNode.children) {
    if (datasourceNode.type !== 'datasource') {
      continue;
    }

    const datasourceName = attrString(datasourceNode, 'name');
    if (!datasourceName) {
      continue;
    }

    const datasourceCaption = attrString(datasourceNode, 'caption');

    for (const child of datasourceNode.children ?? []) {
      if (child.type !== 'column' && child.type !== 'group') {
        continue;
      }

      const record = fieldRecordFromNode(child, datasourceName, datasourceCaption);
      if (!record.name) {
        continue;
      }
      fields.set(record.id, record);
    }
  }

  return fields;
}

export function listFieldsSorted(fields: Map<string, FieldRecord>): FieldRecord[] {
  return Array.from(fields.values()).sort((a, b) => {
    const labelA = (a.caption ?? a.name).toLowerCase();
    const labelB = (b.caption ?? b.name).toLowerCase();
    return labelA.localeCompare(labelB);
  });
}

export function findFieldByName(
  fields: Map<string, FieldRecord>,
  name: string,
  datasource?: string
): FieldRecord | undefined {
  if (datasource) {
    return fields.get(makeFieldId(datasource, name));
  }
  return Array.from(fields.values()).find((field) => field.name === name);
}
