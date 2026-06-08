import workbookExport from '../../fixtures/workbook_export.json';
import { normalizeWorkbookRoot } from '../metadata/normalize';
import { WorkbookNode } from '../metadata/types';

describe('normalizeWorkbookRoot', () => {
  it('unwraps live export wrapper to workbook node', () => {
    const workbook = normalizeWorkbookRoot(workbookExport);
    expect(workbook.type).toBe('workbook');
    expect(workbook.attrs['source-build']).toContain('26.0531.2046');
  });

  it('returns bare workbook node unchanged', () => {
    const bare: WorkbookNode = {
      type: 'workbook',
      attrs: { name: 'Test' },
    };
    expect(normalizeWorkbookRoot(bare)).toBe(bare);
  });

  it('throws when no workbook node is present', () => {
    expect(() => normalizeWorkbookRoot({ children: [] })).toThrow(/no workbook node/i);
  });
});
