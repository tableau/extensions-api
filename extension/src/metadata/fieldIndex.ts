import { buildFieldCatalog, listFieldsSorted } from './fieldCatalog';
import {
  addGroupDependencies,
  buildDependencyEdges,
  getDependencySubgraph,
} from './dependencyGraph';
import { buildFieldLookup } from './fieldLookup';
import { buildUsageMap, computeUsedFields } from './fieldUsage';
import { normalizeWorkbookRoot } from './normalize';
import {
  DependencySubgraph,
  FieldIndex,
  FieldRecord,
  WorkbookNode,
} from './types';

export function buildFieldIndex(raw: unknown): FieldIndex {
  const workbook = normalizeWorkbookRoot(raw);
  return buildFieldIndexFromWorkbook(workbook);
}

export function buildFieldIndexFromWorkbook(workbook: WorkbookNode): FieldIndex {
  const fields = buildFieldCatalog(workbook);
  const lookup = buildFieldLookup(fields);
  const { upstream, downstream } = buildDependencyEdges(fields);
  addGroupDependencies(workbook, fields, upstream, downstream);
  const usages = buildUsageMap(workbook, fields, lookup);
  computeUsedFields(fields, downstream, usages, workbook, lookup);

  return {
    fields,
    lookup,
    usages,
    upstream,
    downstream,
  };
}

export function listAllFields(index: FieldIndex): FieldRecord[] {
  return listFieldsSorted(index.fields);
}

export { getDependencySubgraph };

export type { DependencySubgraph, FieldIndex, FieldRecord };
