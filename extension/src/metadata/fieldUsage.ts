import {
  buildWorksheetRefContext,
  extractReferencesFromText,
  resolveReferenceString,
  WorksheetRefContext,
} from './fieldReferences';
import { FieldIndex, FieldRecord, FieldUsage, WorkbookNode } from './types';
import { walkTree } from './traverse';

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
