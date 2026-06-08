import { useMemo } from 'react';
import { buildFieldIndex, FieldIndex } from '../metadata/fieldIndex';
import { WorkbookNode } from '../metadata/types';

export function useFieldIndex(metadata: WorkbookNode | null): FieldIndex | null {
  return useMemo(() => {
    if (!metadata) {
      return null;
    }
    return buildFieldIndex(metadata);
  }, [metadata]);
}
