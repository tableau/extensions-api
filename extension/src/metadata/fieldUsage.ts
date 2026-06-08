import {
  buildWorksheetRefContext,
  extractReferencesFromText,
  resolveReferenceString,
  WorksheetRefContext,
} from './fieldReferences';
import { findFieldByCaption, findFieldByFieldId } from './fieldLookup';
import type { FieldLookup } from './fieldLookup';
import { attrString } from './nodeUtils';
import { FieldIndex, FieldRecord, FieldUsage, WorkbookNode } from './types';
import { walkTree } from './traverse';

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
  usageContext: string,
  lookup: FieldLookup
): void {
  const cleaned = stripQuotes(text);
  const refs = extractReferencesFromText(cleaned, fields, context, lookup);
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
  usageContext: string,
  lookup: FieldLookup
): void {
  if (!ref) {
    return;
  }
  const fieldId = resolveReferenceString(stripQuotes(ref), fields, context, lookup);
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
  fields: Map<string, FieldRecord>,
  lookup: FieldLookup
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
          recordReferencesInText(node.content, fields, context, usages, node.type, lookup);
        }
        return;
      }

      if (node.type === 'encoding') {
        recordReference(attrString(node, 'field'), fields, context, usages, 'encoding', lookup);
        return;
      }

      if (node.type === 'filter' || node.type === 'manual-sort' || node.type === 'shelf-sort') {
        recordReference(attrString(node, 'column'), fields, context, usages, node.type, lookup);
        return;
      }

      if (node.type === 'groupfilter') {
        recordReference(attrString(node, 'member'), fields, context, usages, 'groupfilter', lookup);
        recordReference(attrString(node, 'level'), fields, context, usages, 'groupfilter', lookup);
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
  lookup: FieldLookup,
  fields: Map<string, FieldRecord>
): string | null {
  const trimmed = token.trim();
  if (!trimmed) {
    return null;
  }

  const byCaption = findFieldByCaption(lookup, fields, trimmed);
  if (byCaption) {
    return byCaption.id;
  }

  const bracketed = trimmed.startsWith('[') ? trimmed : `[${trimmed}]`;
  const byFieldId = findFieldByFieldId(lookup, fields, bracketed);
  if (byFieldId) {
    return byFieldId.id;
  }

  return resolveReferenceString(bracketed, fields, null, lookup);
}

function recordActionReferencesInText(
  text: string,
  fields: Map<string, FieldRecord>,
  usedIds: Set<string>,
  lookup: FieldLookup
): void {
  for (const fieldId of extractReferencesFromText(text, fields, null, lookup)) {
    markUsed(usedIds, fieldId);
  }
}

export function buildActionRefs(
  workbook: WorkbookNode,
  fields: Map<string, FieldRecord>,
  lookup: FieldLookup
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
          markUsed(usedIds, resolveFieldNameToken(token, lookup, fields));
        }
      }
      return;
    }

    if (node.type === 'link') {
      const expression = attrString(node, 'expression');
      if (expression) {
        recordActionReferencesInText(expression, fields, usedIds, lookup);
      }
      return;
    }

    if (node.attrs) {
      for (const [key, value] of Object.entries(node.attrs)) {
        if (typeof value === 'string' && (key === 'expression' || key === 'value' || key === 'column')) {
          recordActionReferencesInText(value, fields, usedIds, lookup);
        }
      }
    }

    if (typeof node.content === 'string') {
      recordActionReferencesInText(node.content, fields, usedIds, lookup);
    }
  });

  return usedIds;
}

export function computeUsedFields(
  fields: Map<string, FieldRecord>,
  downstream: Map<string, string[]>,
  usages: Map<string, FieldUsage[]>,
  workbook: WorkbookNode,
  lookup: FieldLookup
): void {
  const usedIds = new Set<string>();

  for (const field of fields.values()) {
    if ((downstream.get(field.id) ?? []).length > 0) {
      usedIds.add(field.id);
    }
    if ((usages.get(field.id) ?? []).length > 0) {
      usedIds.add(field.id);
    }
    if (field.sourceFieldId) {
      usedIds.add(field.sourceFieldId);
    }
  }

  for (const fieldId of buildActionRefs(workbook, fields, lookup)) {
    usedIds.add(fieldId);
  }

  for (const field of fields.values()) {
    field.used = usedIds.has(field.id);
  }
}
