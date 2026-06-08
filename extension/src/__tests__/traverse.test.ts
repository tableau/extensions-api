import workbookExport from '../../fixtures/workbook_export.json';
import { normalizeWorkbookRoot } from '../metadata/normalize';
import { findByType, findWorksheetByName, flattenWorkbook } from '../metadata/traverse';

const workbook = normalizeWorkbookRoot(workbookExport);

describe('traverse utilities', () => {
  it('findByType returns matching nodes', () => {
    const worksheets = findByType(workbook, 'worksheet');
    expect(worksheets.length).toBe(23);
  });

  it('findWorksheetByName returns the correct worksheet', () => {
    const sheet = findWorksheetByName(workbook, 'CustomerOverview');
    expect(sheet).toBeDefined();
    expect(sheet?.type).toBe('worksheet');
  });

  it('findWorksheetByName returns undefined for unknown name', () => {
    expect(findWorksheetByName(workbook, 'Missing')).toBeUndefined();
  });

  it('flattenWorkbook includes workbook root', () => {
    const flat = flattenWorkbook(workbook);
    expect(flat.length).toBeGreaterThan(100);
    expect(flat.some((entry) => entry.node.type === 'workbook')).toBe(true);
  });
});
