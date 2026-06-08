import workbookExport from '../../fixtures/workbook_export.json';
import { findFieldByCaption } from '../metadata/fieldLookup';
import { buildFieldIndex, getDependencySubgraph } from '../metadata/fieldIndex';
import { getUsages } from '../metadata/fieldUsage';
import { searchFields } from '../metadata/omnisearch';
import { makeFieldId } from '../metadata/types';

const FEDERATED = 'federated.10nnk8d1vgmw8q17yu76u06pnbcj';

describe('buildFieldIndex', () => {
  const index = buildFieldIndex(workbookExport);

  it('builds catalog from fixture without error', () => {
    expect(index.fields.size).toBeGreaterThan(0);
  });

  it('includes parameters and calculated fields (excludes action auto-columns)', () => {
    const fieldTypes = new Set(Array.from(index.fields.values()).map((field) => field.fieldType));
    expect(fieldTypes.has('parameter')).toBe(true);
    expect(fieldTypes.has('calculated')).toBe(true);
    expect(fieldTypes.has('column')).toBe(true);
    expect(fieldTypes.has('group')).toBe(false);
    expect(index.fields.has(makeFieldId(FEDERATED, '[Action (Customer Segment)]'))).toBe(false);
    expect(index.fields.has(makeFieldId(FEDERATED, '[Action (Segment)]'))).toBe(false);
  });

  it('classifies Parameters datasource fields as parameter', () => {
    const param = index.fields.get(makeFieldId('Parameters', '[Parameter 1]'));
    expect(param?.fieldType).toBe('parameter');
  });

  it('marks hidden columns', () => {
    const orderIdReturns = index.fields.get(makeFieldId(FEDERATED, '[Order ID (Returns)]'));
    expect(orderIdReturns?.hidden).toBe(true);
  });

  it('resolves Sales Forecast upstream dependencies', () => {
    const salesForecast = findFieldByCaption(index.lookup, index.fields, 'Sales Forecast');
    expect(salesForecast).toBeDefined();

    const upstream = index.upstream.get(salesForecast!.id) ?? [];
    expect(upstream).toContain(makeFieldId(FEDERATED, '[Sales]'));
    expect(upstream).toContain(makeFieldId('Parameters', '[Parameter 1]'));
    expect(upstream).toContain(makeFieldId('Parameters', '[Parameter 2]'));
  });

  it('limits dependency subgraph to requested depth', () => {
    const sales = index.fields.get(makeFieldId(FEDERATED, '[Sales]'));
    const subgraph = getDependencySubgraph(
      index.fields,
      index.upstream,
      index.downstream,
      sales!.id,
      2
    );

    const nodeLabels = subgraph.nodes.map((node) => node.fieldName ?? node.fieldId);
    expect(nodeLabels).toContain('[Sales]');
    expect(nodeLabels.some((label) => label.includes('Sales Forecast') || label.includes('Calculation_5421109230915137'))).toBe(true);
  });

  it('includes upstream dependencies in subgraph from Sales Forecast', () => {
    const salesForecast = findFieldByCaption(index.lookup, index.fields, 'Sales Forecast');
    const subgraph = getDependencySubgraph(
      index.fields,
      index.upstream,
      index.downstream,
      salesForecast!.id,
      1
    );

    const nodeIds = subgraph.nodes.map((node) => node.id);
    expect(nodeIds).toContain(salesForecast!.id);
    expect(nodeIds).toContain(makeFieldId(FEDERATED, '[Sales]'));
    expect(nodeIds).toContain(makeFieldId('Parameters', '[Parameter 1]'));
    expect(nodeIds).toContain(makeFieldId('Parameters', '[Parameter 2]'));
  });

  it('records worksheet usage for Profit and Sales Forecast', () => {
    const profit = index.fields.get(makeFieldId(FEDERATED, '[Profit]'));
    const salesForecast = findFieldByCaption(index.lookup, index.fields, 'Sales Forecast');

    expect(getUsages(index, profit!.id).length).toBeGreaterThan(0);
    expect(getUsages(index, salesForecast!.id).length).toBeGreaterThan(0);
  });

  it('marks Segment used via sheets and parameter source-field', () => {
    const segment = index.fields.get(makeFieldId(FEDERATED, '[Segment]'));
    expect(segment?.used).toBe(true);
  });

  it('marks Segment Parameter unused when not referenced in calcs or sheets', () => {
    const segmentParam = index.fields.get(
      makeFieldId('Parameters', '[Parameter 3225702770847745]')
    );
    expect(segmentParam?.fieldName).toBe('Segment Parameter');
    expect(segmentParam?.used).toBe(false);
  });

  it('stores parameter source-field on Segment Parameter', () => {
    const segmentParam = index.fields.get(
      makeFieldId('Parameters', '[Parameter 3225702770847745]')
    );
    expect(segmentParam?.sourceFieldId).toBe(makeFieldId(FEDERATED, '[Segment]'));
    expect(segmentParam?.sourceFieldName).toBe('Segment');
  });

  it('stores column default-format and visual-totals on Profit per Order', () => {
    const profitPerOrder = findFieldByCaption(index.lookup, index.fields, 'Profit per Order');
    expect(profitPerOrder?.numberFormat).toBe('p0.00%');
    expect(profitPerOrder?.defaultAggregation).toBe('Avg');
  });

  it('leaves defaultAggregation null when column has no visual-totals', () => {
    const sales = index.fields.get(makeFieldId(FEDERATED, '[Sales]'));
    expect(sales?.numberFormat).toBe('c"$"#,##0;("$"#,##0)');
    expect(sales?.defaultAggregation).toBeNull();
  });

  it('leaves numberFormat null when column has no default-format', () => {
    const segment = index.fields.get(makeFieldId(FEDERATED, '[Segment]'));
    expect(segment?.numberFormat).toBeNull();
    expect(segment?.defaultAggregation).toBeNull();
    expect(segment?.sourceFieldId).toBeNull();
  });

  it('finds Profit per Order by format via search', () => {
    const results = searchFields(index, 'p0.00%');
    const fieldNames = results.map((field) => field.fieldName);
    expect(fieldNames).toContain('Profit per Order');
  });

  it('marks hidden Order ID (Returns) unused when only in datasource', () => {
    const orderIdReturns = index.fields.get(makeFieldId(FEDERATED, '[Order ID (Returns)]'));
    expect(orderIdReturns?.used).toBe(false);
  });

  it('marks Sales used via downstream calcs and sheet usage', () => {
    const sales = index.fields.get(makeFieldId(FEDERATED, '[Sales]'));
    expect(sales?.used).toBe(true);
  });

  it('marks State/Province used via dashboard actions', () => {
    const state = index.fields.get(makeFieldId(FEDERATED, '[State/Province]'));
    expect(state?.used).toBe(true);
  });
});

