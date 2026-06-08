import { findFieldByName } from './fieldCatalog';
import { FieldRecord, makeFieldId, WorkbookNode } from './types';

const PARAM_REF_PATTERN = /\[Parameters\]\.\[([^\]]+)\]/g;
const QUALIFIED_REF_PATTERN = /\[([^\]]+)\]\.\[([^\]]+)\]/g;
const SIMPLE_REF_PATTERN = /\[([^\]]+)\]/g;

export interface WorksheetRefContext {
  sheetName: string;
  sheetType: 'worksheet' | 'dashboard';
  datasource: string | null;
  instanceToColumn: Map<string, string>;
}

function attrString(node: WorkbookNode, key: string): string | null {
  const value = node.attrs[key];
  return typeof value === 'string' ? value : null;
}

export function parseParameterReferences(formula: string): string[] {
  const refs: string[] = [];
  let match: RegExpExecArray | null;
  const pattern = new RegExp(PARAM_REF_PATTERN.source, 'g');
  while ((match = pattern.exec(formula)) !== null) {
    refs.push(makeFieldId('Parameters', `[${match[1]}]`));
  }
  return refs;
}

export function parseSimpleFieldReferences(formula: string, datasource: string): string[] {
  let stripped = formula.replace(PARAM_REF_PATTERN, ' ');
  stripped = stripped.replace(QUALIFIED_REF_PATTERN, ' ');

  const refs: string[] = [];
  let match: RegExpExecArray | null;
  const pattern = new RegExp(SIMPLE_REF_PATTERN.source, 'g');
  while ((match = pattern.exec(stripped)) !== null) {
    const token = match[1];
    if (token === 'Parameters') {
      continue;
    }
    const name = `[${token}]`;
    refs.push(makeFieldId(datasource, name));
  }
  return refs;
}

export function parseFormulaFieldIds(formula: string, datasource: string): string[] {
  const combined = [
    ...parseParameterReferences(formula),
    ...parseSimpleFieldReferences(formula, datasource),
  ];
  return [...new Set(combined)];
}

export function parseGroupFilterReferences(
  node: WorkbookNode,
  datasource: string
): string[] {
  const refs: string[] = [];

  function walkGroupFilter(filterNode: WorkbookNode): void {
    const level = attrString(filterNode, 'level');
    if (level && level.startsWith('[')) {
      refs.push(makeFieldId(datasource, level));
    }
    for (const child of filterNode.children ?? []) {
      if (child.type === 'groupfilter') {
        walkGroupFilter(child);
      }
    }
  }

  for (const child of node.children ?? []) {
    if (child.type === 'groupfilter') {
      walkGroupFilter(child);
    }
  }

  return [...new Set(refs)];
}

function resolveQualifiedReference(
  ref: string,
  fields: Map<string, FieldRecord>,
  context: WorksheetRefContext | null
): string | null {
  const qualifiedMatch = ref.match(/^\[([^\]]+)\]\.\[([^\]]+)\]$/);
  if (!qualifiedMatch) {
    return null;
  }

  const datasource = qualifiedMatch[1];
  const instanceOrName = `[${qualifiedMatch[2]}]`;

  if (context?.instanceToColumn.has(instanceOrName)) {
    const baseColumn = context.instanceToColumn.get(instanceOrName)!;
    const resolved = makeFieldId(datasource, baseColumn);
    if (fields.has(resolved)) {
      return resolved;
    }
  }

  const direct = makeFieldId(datasource, instanceOrName);
  if (fields.has(direct)) {
    return direct;
  }

  const byInstanceColumn = findFieldByName(fields, instanceOrName, datasource);
  return byInstanceColumn?.id ?? null;
}

function resolveSimpleReference(
  ref: string,
  fields: Map<string, FieldRecord>,
  context: WorksheetRefContext | null
): string | null {
  const nameMatch = ref.match(/^\[([^\]]+)\]$/);
  if (!nameMatch) {
    return null;
  }

  const name = ref;
  const datasource = context?.datasource;

  if (datasource) {
    const inContext = makeFieldId(datasource, name);
    if (fields.has(inContext)) {
      return inContext;
    }

    if (context.instanceToColumn.has(name)) {
      const base = context.instanceToColumn.get(name)!;
      const resolved = makeFieldId(datasource, base);
      if (fields.has(resolved)) {
        return resolved;
      }
    }
  }

  const found = findFieldByName(fields, name);
  return found?.id ?? null;
}

export function resolveReferenceString(
  ref: string,
  fields: Map<string, FieldRecord>,
  context: WorksheetRefContext | null
): string | null {
  const trimmed = ref.trim();
  if (!trimmed) {
    return null;
  }

  if (trimmed.includes('].[')) {
    return resolveQualifiedReference(trimmed, fields, context);
  }

  const bracketed = trimmed.startsWith('[') ? trimmed : `[${trimmed}]`;
  return resolveSimpleReference(bracketed, fields, context);
}

export function extractReferencesFromText(
  text: string,
  fields: Map<string, FieldRecord>,
  context: WorksheetRefContext | null
): string[] {
  const refs: string[] = [];

  let match: RegExpExecArray | null;
  const paramPattern = new RegExp(PARAM_REF_PATTERN.source, 'g');
  while ((match = paramPattern.exec(text)) !== null) {
    const id = makeFieldId('Parameters', `[${match[1]}]`);
    if (fields.has(id)) {
      refs.push(id);
    }
  }

  const qualifiedPattern = new RegExp(QUALIFIED_REF_PATTERN.source, 'g');
  while ((match = qualifiedPattern.exec(text)) !== null) {
    const full = `[${match[1]}].[${match[2]}]`;
    const resolved = resolveReferenceString(full, fields, context);
    if (resolved) {
      refs.push(resolved);
    }
  }

  let stripped = text.replace(PARAM_REF_PATTERN, ' ');
  stripped = stripped.replace(QUALIFIED_REF_PATTERN, ' ');

  const simplePattern = new RegExp(SIMPLE_REF_PATTERN.source, 'g');
  while ((match = simplePattern.exec(stripped)) !== null) {
    if (match[1] === 'Parameters') {
      continue;
    }
    const resolved = resolveReferenceString(`[${match[1]}]`, fields, context);
    if (resolved) {
      refs.push(resolved);
    }
  }

  return [...new Set(refs)];
}

export function buildWorksheetRefContext(
  sheetNode: WorkbookNode,
  sheetType: 'worksheet' | 'dashboard'
): WorksheetRefContext {
  const sheetName = attrString(sheetNode, 'name') ?? '';
  const instanceToColumn = new Map<string, string>();
  let datasource: string | null = null;

  function walk(node: WorkbookNode): void {
    if (node.type === 'datasource-dependencies') {
      datasource = attrString(node, 'datasource') ?? datasource;
    }
    if (node.type === 'column-instance') {
      const instanceName = attrString(node, 'name');
      const column = attrString(node, 'column');
      if (instanceName && column) {
        instanceToColumn.set(instanceName, column);
      }
    }
    for (const child of node.children ?? []) {
      walk(child);
    }
  }

  walk(sheetNode);

  return {
    sheetName,
    sheetType,
    datasource,
    instanceToColumn,
  };
}
