import { FieldRecord, makeFieldId } from './types';

export interface FieldLookup {
  byFieldId: Map<string, string>;
  byCaption: Map<string, string>;
}

export function buildFieldLookup(fields: Map<string, FieldRecord>): FieldLookup {
  const byFieldId = new Map<string, string>();
  const byCaption = new Map<string, string>();

  for (const field of fields.values()) {
    if (!byFieldId.has(field.fieldId)) {
      byFieldId.set(field.fieldId, field.id);
    }
    if (field.fieldName && !byCaption.has(field.fieldName)) {
      byCaption.set(field.fieldName, field.id);
    }
  }

  return { byFieldId, byCaption };
}

export function fieldDisplayLabel(fieldName: string | null, fieldId: string): string {
  if (fieldName) {
    return fieldName;
  }
  return fieldId.replace(/^\[|\]$/g, '');
}

export function findFieldByFieldId(
  lookup: FieldLookup,
  fields: Map<string, FieldRecord>,
  fieldId: string,
  datasource?: string
): FieldRecord | undefined {
  if (datasource) {
    return fields.get(makeFieldId(datasource, fieldId));
  }
  const id = lookup.byFieldId.get(fieldId);
  return id ? fields.get(id) : undefined;
}

export function findFieldByCaption(
  lookup: FieldLookup,
  fields: Map<string, FieldRecord>,
  caption: string
): FieldRecord | undefined {
  const id = lookup.byCaption.get(caption);
  return id ? fields.get(id) : undefined;
}
