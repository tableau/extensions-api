import {
  buildWorksheetRefContext,
  extractReferencesFromText,
  resolveReferenceString,
  WorksheetRefContext,
} from './fieldReferences';
import { FieldIndex, FieldRecord, FieldUsage, WorkbookNode } from './types';
import { walkTree } from './traverse';

const PARAMETERS_DATASOURCE = 'Parameters';

function attrString(node: WorkbookNode, key: string): string | null {
  const value = node.attrs[key];
  return typeof value === 'string' ? value : null;
}

const USAGE_NODE_TYPES = new Set([
  'filter',
  'encoding',
  'rows',
  'cols',
  'manual-sort',
  'shelf-sort',
  'groupfilter',
]);

function usageKey(usage: FieldUsage): string {
  return `${usage.sheetType}:${usage.sheet}:${usage.context}`;
}

function addUsage(
  usages: Map<string, FieldUsage[]>,
  fieldId: string,
  usage: FieldUsage
): void {
  const existing = usages.get(fieldId) ?? [];
  const key = usageKey(usage);
  if (existing.some((entry) => usageKey(entry) === key)) {
    return;
  }
  usages.set(fieldId, [...existing, usage]);
}

function stripQuotes(value: string): string {
  return value.replace(/^"+|"+$/g, '').replace(/\\"/g, '"');
}

function recordReferencesInText(
  text: string,
  fields: Map<string, FieldRecord>,
  context: WorksheetRefContext,
  usages: Map<string, FieldUsage[]>,
  usageContext: string
): void {
  const cleaned = stripQuotes(text);
  const refs = extractReferencesFromText(cleaned, fields, context);
  for (const fieldId of refs) {
    addUsage(usages, fieldId, {
      sheet: context.sheetName,
      sheetType: context.sheetType,
      context: usageContext,
    });
  }
}

function recordReference(
  ref: string | null,
  fields: Map<string, FieldRecord>,
  context: WorksheetRefContext,
  usages: Map<string, FieldUsage[]>,
  usageContext: string
): void {
  if (!ref) {
    return;
  }
  const fieldId = resolveReferenceString(stripQuotes(ref), fields, context);
  if (!fieldId) {
    return;
  }
  addUsage(usages, fieldId, {
    sheet: context.sheetName,
    sheetType: context.sheetType,
    context: usageContext,
  });
}

export function buildUsageMap(
  workbook: WorkbookNode,
  fields: Map<string, FieldRecord>
): Map<string, FieldUsage[]> {
  const usages = new Map<string, FieldUsage[]>();
  for (const field of fields.values()) {
    usages.set(field.id, []);
  }

  const sheets: WorkbookNode[] = [];
  for (const sectionType of ['worksheets', 'dashboards'] as const) {
    const section = workbook.children?.find((child) => child.type === sectionType);
    for (const sheet of section?.children ?? []) {
      if (sheet.type === 'worksheet' || sheet.type === 'dashboard') {
        sheets.push(sheet);
      }
    }
  }

  for (const sheet of sheets) {
    const sheetType = sheet.type === 'dashboard' ? 'dashboard' : 'worksheet';
    const context = buildWorksheetRefContext(sheet, sheetType);

    walkTree(sheet, (node) => {
      if (!USAGE_NODE_TYPES.has(node.type)) {
        return;
      }

      if (node.type === 'rows' || node.type === 'cols') {
        if (typeof node.content === 'string') {
          recordReferencesInText(node.content, fields, context, usages, node.type);
        }
        return;
      }

      if (node.type === 'encoding') {
        recordReference(attrString(node, 'field'), fields, context, usages, 'encoding');
        return;
      }

      if (node.type === 'filter' || node.type === 'manual-sort' || node.type === 'shelf-sort') {
        recordReference(attrString(node, 'column'), fields, context, usages, node.type);
        return;
      }

      if (node.type === 'groupfilter') {
        recordReference(attrString(node, 'member'), fields, context, usages, 'groupfilter');
        recordReference(attrString(node, 'level'), fields, context, usages, 'groupfilter');
      }
    });
  }

  return usages;
}

export function getUsages(index: FieldIndex, fieldId: string): FieldUsage[] {
  return index.usages.get(fieldId) ?? [];
}

function markUsed(usedIds: Set<string>, fieldId: string | null | undefined): void {
  if (fieldId) {
    usedIds.add(fieldId);
  }
}

function resolveFieldNameToken(
  token: string,
  fields: Map<string, FieldRecord>
): string | null {
  const trimmed = token.trim();
  if (!trimmed) {
    return null;
  }

  const byFieldName = Array.from(fields.values()).find(
    (field) => field.fieldName === trimmed
  );
  if (byFieldName) {
    return byFieldName.id;
  }

  const bracketed = trimmed.startsWith('[') ? trimmed : `[${trimmed}]`;
  const byFieldId = Array.from(fields.values()).find((field) => field.fieldId === bracketed);
  if (byFieldId) {
    return byFieldId.id;
  }

  return resolveReferenceString(bracketed, fields, null);
}

function recordActionReferencesInText(
  text: string,
  fields: Map<string, FieldRecord>,
  usedIds: Set<string>
): void {
  for (const fieldId of extractReferencesFromText(text, fields, null)) {
    markUsed(usedIds, fieldId);
  }
}

export function buildParameterSourceRefs(
  workbook: WorkbookNode,
  fields: Map<string, FieldRecord>
): Set<string> {
  const usedIds = new Set<string>();
  const datasourcesNode = workbook.children?.find((child) => child.type === 'datasources');
  if (!datasourcesNode?.children) {
    return usedIds;
  }

  const parametersDs = datasourcesNode.children.find(
    (child) =>
      child.type === 'datasource' && child.attrs.name === PARAMETERS_DATASOURCE
  );
  if (!parametersDs) {
    return usedIds;
  }

  for (const child of parametersDs.children ?? []) {
    if (child.type !== 'column') {
      continue;
    }
    const sourceField = attrString(child, 'source-field');
    if (!sourceField) {
      continue;
    }
    markUsed(usedIds, resolveReferenceString(sourceField, fields, null));
  }

  return usedIds;
}

export function buildActionRefs(
  workbook: WorkbookNode,
  fields: Map<string, FieldRecord>
): Set<string> {
  const usedIds = new Set<string>();
  const actionsNode = workbook.children?.find((child) => child.type === 'actions');
  if (!actionsNode?.children) {
    return usedIds;
  }

  walkTree(actionsNode, (node) => {
    if (node.type === 'param') {
      const paramName = attrString(node, 'name');
      const value = attrString(node, 'value');
      if (paramName === 'field-captions' && value) {
        for (const token of value.split(',')) {
          markUsed(usedIds, resolveFieldNameToken(token, fields));
        }
      }
      return;
    }

    if (node.type === 'link') {
      const expression = attrString(node, 'expression');
      if (expression) {
        recordActionReferencesInText(expression, fields, usedIds);
      }
      return;
    }

    if (node.attrs) {
      for (const [key, value] of Object.entries(node.attrs)) {
        if (typeof value === 'string' && (key === 'expression' || key === 'value' || key === 'column')) {
          recordActionReferencesInText(value, fields, usedIds);
        }
      }
    }

    if (typeof node.content === 'string') {
      recordActionReferencesInText(node.content, fields, usedIds);
    }
  });

  return usedIds;
}

export function computeUsedFields(
  fields: Map<string, FieldRecord>,
  downstream: Map<string, string[]>,
  usages: Map<string, FieldUsage[]>,
  workbook: WorkbookNode
): void {
  const usedIds = new Set<string>();

  for (const field of fields.values()) {
    if ((downstream.get(field.id) ?? []).length > 0) {
      usedIds.add(field.id);
    }
    if ((usages.get(field.id) ?? []).length > 0) {
      usedIds.add(field.id);
    }
  }

  for (const fieldId of buildParameterSourceRefs(workbook, fields)) {
    usedIds.add(fieldId);
  }

  for (const fieldId of buildActionRefs(workbook, fields)) {
    usedIds.add(fieldId);
  }

  for (const field of fields.values()) {
    field.used = usedIds.has(field.id);
  }
}
