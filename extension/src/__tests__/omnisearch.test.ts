import workbookExport from '../../fixtures/workbook_export.json';
import { buildFieldIndex } from '../metadata/fieldIndex';
import { searchFields } from '../metadata/omnisearch';

describe('searchFields', () => {
  const index = buildFieldIndex(workbookExport);

  it('returns all fields for empty query', () => {
    expect(searchFields(index, '')).toHaveLength(index.fields.size);
  });

  it('matches forecast in field name or value', () => {
    const results = searchFields(index, 'forecast');
    const fieldNames = results.map((field) => field.fieldName);
    expect(fieldNames).toContain('Sales Forecast');
  });

  it('filters hidden fields', () => {
    const hidden = searchFields(index, '', { hidden: 'hidden' });
    expect(hidden.every((field) => field.hidden)).toBe(true);
    expect(hidden.some((field) => field.fieldId === '[Order ID (Returns)]')).toBe(true);
  });

  it('matches parameter source field name', () => {
    const results = searchFields(index, 'segment');
    const segmentParam = results.find((field) => field.fieldName === 'Segment Parameter');
    expect(segmentParam?.sourceFieldName).toBe('Segment');
  });
});
