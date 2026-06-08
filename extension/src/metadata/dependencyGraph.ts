import {
  parseGroupFilterReferences,
  parseFormulaFieldIds,
} from './fieldReferences';
import { attrString } from './nodeUtils';
import {
  DependencySubgraph,
  FieldEdge,
  FieldRecord,
  makeFieldId,
  WorkbookNode,
} from './types';

export function buildDependencyEdges(
  fields: Map<string, FieldRecord>
): { upstream: Map<string, string[]>; downstream: Map<string, string[]> } {
  const upstream = new Map<string, string[]>();
  const downstream = new Map<string, string[]>();

  for (const field of fields.values()) {
    upstream.set(field.id, []);
    downstream.set(field.id, []);
  }

  for (const field of fields.values()) {
    const deps: string[] = [];

    if (field.value) {
      deps.push(...parseFormulaFieldIds(field.value, field.datasource));
    }

    const resolvedDeps = [...new Set(deps.filter((depId) => fields.has(depId)))];
    upstream.set(field.id, resolvedDeps);

    for (const depId of resolvedDeps) {
      const existing = downstream.get(depId) ?? [];
      if (!existing.includes(field.id)) {
        downstream.set(depId, [...existing, field.id]);
      }
    }
  }

  return { upstream, downstream };
}

export function addGroupDependencies(
  workbook: WorkbookNode,
  fields: Map<string, FieldRecord>,
  upstream: Map<string, string[]>,
  downstream: Map<string, string[]>
): void {
  const datasourcesNode = workbook.children?.find((child) => child.type === 'datasources');
  if (!datasourcesNode?.children) {
    return;
  }

  for (const datasourceNode of datasourcesNode.children) {
    if (datasourceNode.type !== 'datasource') {
      continue;
    }
    const datasourceName = attrString(datasourceNode, 'name');
    if (!datasourceName) {
      continue;
    }

    for (const child of datasourceNode.children ?? []) {
      if (child.type !== 'group') {
        continue;
      }
      const groupName = attrString(child, 'name');
      if (!groupName) {
        continue;
      }
      const groupId = makeFieldId(datasourceName, groupName);
      if (!fields.has(groupId)) {
        continue;
      }

      const deps = parseGroupFilterReferences(child, datasourceName).filter((depId) =>
        fields.has(depId)
      );

      const existingUpstream = upstream.get(groupId) ?? [];
      const merged = [...new Set([...existingUpstream, ...deps])];
      upstream.set(groupId, merged);

      for (const depId of deps) {
        const down = downstream.get(depId) ?? [];
        if (!down.includes(groupId)) {
          downstream.set(depId, [...down, groupId]);
        }
      }
    }
  }
}

function bfs(
  startId: string,
  adjacency: Map<string, string[]>,
  maxDepth: number
): { visited: Set<string>; truncated: boolean } {
  const visited = new Set<string>();
  let frontier = [startId];
  let depth = 0;
  let truncated = false;

  while (frontier.length > 0 && depth < maxDepth) {
    const next: string[] = [];
    for (const id of frontier) {
      for (const neighbor of adjacency.get(id) ?? []) {
        if (neighbor === startId || visited.has(neighbor)) {
          continue;
        }
        visited.add(neighbor);
        next.push(neighbor);
      }
    }
    if (next.length > 0 && depth + 1 >= maxDepth) {
      const deeperExists = next.some((id) => (adjacency.get(id) ?? []).length > 0);
      truncated = truncated || deeperExists;
    }
    frontier = next;
    depth += 1;
  }

  return { visited, truncated };
}

export function getDependencySubgraph(
  fields: Map<string, FieldRecord>,
  upstream: Map<string, string[]>,
  downstream: Map<string, string[]>,
  fieldId: string,
  maxDepth: number
): DependencySubgraph {
  if (!fields.has(fieldId)) {
    return {
      nodes: [],
      edges: [],
      truncatedUpstream: false,
      truncatedDownstream: false,
    };
  }

  const upResult = bfs(fieldId, upstream, maxDepth);
  const downResult = bfs(fieldId, downstream, maxDepth);

  const nodeIds = new Set<string>([fieldId, ...upResult.visited, ...downResult.visited]);
  const nodes = Array.from(nodeIds)
    .map((id) => fields.get(id))
    .filter((field): field is FieldRecord => field !== undefined);

  const edges: FieldEdge[] = [];
  for (const fromId of nodeIds) {
    for (const toId of upstream.get(fromId) ?? []) {
      if (nodeIds.has(toId)) {
        const via =
          fields.get(fromId)?.fieldType === 'set' || fields.get(fromId)?.fieldType === 'group'
            ? 'set-definition'
            : 'formula';
        edges.push({ from: fromId, to: toId, via });
      }
    }
  }

  return {
    nodes,
    edges,
    truncatedUpstream: upResult.truncated,
    truncatedDownstream: downResult.truncated,
  };
}
