import { resolveReferenceString } from './fieldReferences';
import { buildFieldLookup, fieldDisplayLabel } from './fieldLookup';
import type { FieldLookup } from './fieldLookup';
import { attrString, PARAMETERS_DATASOURCE } from './nodeUtils';
import { FieldRecord, FieldType, makeFieldId, WorkbookNode } from './types';

function getColumnValue(node: WorkbookNode): string | null {
  const calculation = node.children?.find((child) => child.type === 'calculation');
  if (!calculation) {
    return null;
  }
  return attrString(calculation, 'formula');
}

function isActionAutoColumn(node: WorkbookNode): boolean {
  return node.type === 'group' && node.attrs['user:auto-column'] === 'sheet_link';
}

function classifyFieldType(
  datasourceName: string,
  node: WorkbookNode
): FieldType {
  if (datasourceName === PARAMETERS_DATASOURCE) {
    return 'parameter';
  }
  if (node.type === 'group') {
    if (node.attrs['user:ui-builder'] === 'filter-group') {
      return 'set';
    }
    return 'group';
  }
  if (getColumnValue(node)) {
    return 'calculated';
  }
  return 'column';
}

function buildSearchText(field: Omit<FieldRecord, 'searchText'>): string {
  return [
    field.fieldName,
    field.fieldId,
    field.value,
    field.datasourceCaption,
    field.datasource,
    field.fieldType,
    field.role,
    field.datatype,
    field.sourceFieldName,
    field.numberFormat,
    field.defaultAggregation,
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
  const fieldId = attrString(node, 'name') ?? '';
  const fieldType = classifyFieldType(datasourceName, node);
  const roleAttr = attrString(node, 'role');
  const role =
    roleAttr === 'dimension' || roleAttr === 'measure' ? roleAttr : null;

  const base: Omit<FieldRecord, 'searchText'> = {
    id: makeFieldId(datasourceName, fieldId),
    fieldType,
    fieldId,
    fieldName: attrString(node, 'caption'),
    datasource: datasourceName,
    datasourceCaption,
    role,
    datatype: attrString(node, 'datatype'),
    value: getColumnValue(node),
    hidden: node.attrs.hidden === 'true',
    used: false,
    sourceFieldId: null,
    sourceFieldName: null,
    numberFormat: attrString(node, 'default-format'),
    defaultAggregation: attrString(node, 'visual-totals'),
  };

  return {
    ...base,
    searchText: buildSearchText(base),
  };
}

function resolveParameterSourceFields(
  fields: Map<string, FieldRecord>,
  parametersDatasource: WorkbookNode,
  lookup: FieldLookup
): void {
  for (const child of parametersDatasource.children ?? []) {
    if (child.type !== 'column') {
      continue;
    }

    const fieldId = attrString(child, 'name');
    if (!fieldId) {
      continue;
    }

    const field = fields.get(makeFieldId(PARAMETERS_DATASOURCE, fieldId));
    if (!field) {
      continue;
    }

    const sourceFieldRef = attrString(child, 'source-field');
    if (!sourceFieldRef) {
      continue;
    }

    const sourceFieldId = resolveReferenceString(sourceFieldRef, fields, null, lookup);
    field.sourceFieldId = sourceFieldId;
    if (sourceFieldId) {
      const sourceField = fields.get(sourceFieldId);
      field.sourceFieldName = sourceField
        ? fieldDisplayLabel(sourceField.fieldName, sourceField.fieldId)
        : null;
    }

    field.searchText = buildSearchText(field);
  }
}

export function buildFieldCatalog(workbook: WorkbookNode): Map<string, FieldRecord> {
  const fields = new Map<string, FieldRecord>();
  const datasourcesNode = workbook.children?.find((child) => child.type === 'datasources');

  if (!datasourcesNode?.children) {
    return fields;
  }

  let parametersDatasource: WorkbookNode | null = null;

  for (const datasourceNode of datasourcesNode.children) {
    if (datasourceNode.type !== 'datasource') {
      continue;
    }

    const datasourceName = attrString(datasourceNode, 'name');
    if (!datasourceName) {
      continue;
    }

    if (datasourceName === PARAMETERS_DATASOURCE) {
      parametersDatasource = datasourceNode;
    }

    const datasourceCaption = attrString(datasourceNode, 'caption');

    for (const child of datasourceNode.children ?? []) {
      if (child.type !== 'column' && child.type !== 'group') {
        continue;
      }

      if (isActionAutoColumn(child)) {
        continue;
      }

      const record = fieldRecordFromNode(child, datasourceName, datasourceCaption);
      if (!record.fieldId) {
        continue;
      }
      fields.set(record.id, record);
    }
  }

  if (parametersDatasource) {
    const lookup = buildFieldLookup(fields);
    resolveParameterSourceFields(fields, parametersDatasource, lookup);
  }

  return fields;
}

export function listFieldsSorted(fields: Map<string, FieldRecord>): FieldRecord[] {
  return Array.from(fields.values()).sort((a, b) => {
    const labelA = (a.fieldName ?? a.fieldId).toLowerCase();
    const labelB = (b.fieldName ?? b.fieldId).toLowerCase();
    return labelA.localeCompare(labelB);
  });
}
