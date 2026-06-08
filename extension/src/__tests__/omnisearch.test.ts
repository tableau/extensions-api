import workbookExport from '../../fixtures/workbook_export.json';
import { buildFieldIndex } from '../metadata/fieldIndex';
import { searchFields } from '../metadata/omnisearch';

describe('searchFields', () => {
  const index = buildFieldIndex(workbookExport);

  it('returns all fields for empty query', () => {
    expect(searchFields(index, '')).toHaveLength(index.fields.size);
  });

  it('matches forecast in caption or formula', () => {
    const results = searchFields(index, 'forecast');
    const captions = results.map((field) => field.caption);
    expect(captions).toContain('Sales Forecast');
  });

  it('filters hidden fields', () => {
    const hidden = searchFields(index, '', { hidden: 'hidden' });
    expect(hidden.every((field) => field.hidden)).toBe(true);
    expect(hidden.some((field) => field.name === '[Product ID]')).toBe(true);
  });
});
