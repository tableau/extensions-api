import minimalWorkbook from '../../fixtures/minimal-workbook.json';
import { findByType, findWorksheetByName, flattenWorkbook } from '../metadata/traverse';
import { WorkbookNode } from '../metadata/types';

const workbook = minimalWorkbook as WorkbookNode;

describe('traverse utilities', () => {
  it('findByType returns matching nodes', () => {
    const worksheets = findByType(workbook, 'worksheet');
    expect(worksheets).toHaveLength(1);
    expect(worksheets[0].attrs.name).toBe('Sheet1');
  });

  it('findWorksheetByName returns the correct worksheet', () => {
    const sheet = findWorksheetByName(workbook, 'Sheet1');
    expect(sheet).toBeDefined();
    expect(sheet?.type).toBe('worksheet');
  });

  it('findWorksheetByName returns undefined for unknown name', () => {
    expect(findWorksheetByName(workbook, 'Missing')).toBeUndefined();
  });

  it('flattenWorkbook includes all nodes', () => {
    const flat = flattenWorkbook(workbook);
    expect(flat.length).toBeGreaterThanOrEqual(4);
    expect(flat.some((e) => e.node.type === 'workbook')).toBe(true);
    expect(flat.some((e) => e.node.type === 'rows')).toBe(true);
  });
});
