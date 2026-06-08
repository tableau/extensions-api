import { listFieldsSorted } from './fieldCatalog';
import { FieldIndex, FieldRecord, OmnisearchFilters } from './types';

export function searchFields(
  index: FieldIndex,
  query: string,
  filters: OmnisearchFilters = {}
): FieldRecord[] {
  const normalizedQuery = query.trim().toLowerCase();
  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);

  let results = Array.from(index.fields.values());

  if (filters.fieldTypes?.length) {
    results = results.filter((field) => filters.fieldTypes!.includes(field.fieldType));
  }

  if (filters.roles?.length) {
    results = results.filter(
      (field) => field.role !== null && filters.roles!.includes(field.role)
    );
  }

  if (filters.datatypes?.length) {
    results = results.filter(
      (field) => field.datatype !== null && filters.datatypes!.includes(field.datatype)
    );
  }

  if (filters.hidden === 'visible') {
    results = results.filter((field) => !field.hidden);
  } else if (filters.hidden === 'hidden') {
    results = results.filter((field) => field.hidden);
  }

  if (tokens.length > 0) {
    results = results.filter((field) =>
      tokens.every((token) => field.searchText.includes(token))
    );
  }

  return listFieldsSorted(new Map(results.map((field) => [field.id, field])));
}
