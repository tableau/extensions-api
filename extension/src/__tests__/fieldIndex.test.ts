import workbookExport from '../../fixtures/workbook_export.json';
import { getFieldByCaption } from '../metadata/dependencyGraph';
import { buildFieldIndex, getDependencySubgraph } from '../metadata/fieldIndex';
import { getUsages } from '../metadata/fieldUsage';
import { makeFieldId } from '../metadata/types';

const FEDERATED = 'federated.10nnk8d1vgmw8q17yu76u06pnbcj';

describe('buildFieldIndex', () => {
  const index = buildFieldIndex(workbookExport);

  it('builds catalog from fixture without error', () => {
    expect(index.fields.size).toBeGreaterThan(0);
  });

  it('includes parameters, sets, groups, and calculated fields', () => {
    const kinds = new Set(Array.from(index.fields.values()).map((field) => field.kind));
    expect(kinds.has('parameter')).toBe(true);
    expect(kinds.has('calculated')).toBe(true);
    expect(kinds.has('set')).toBe(true);
    expect(kinds.has('group')).toBe(true);
    expect(kinds.has('column')).toBe(true);
  });

  it('classifies Segment Set as set', () => {
    const segmentSet = index.fields.get(makeFieldId(FEDERATED, '[Segment Set]'));
    expect(segmentSet?.kind).toBe('set');
    expect(segmentSet?.caption).toBe('Segment Set');
  });

  it('classifies Parameters datasource fields as parameter', () => {
    const param = index.fields.get(makeFieldId('Parameters', '[Parameter 1]'));
    expect(param?.kind).toBe('parameter');
  });

  it('marks hidden columns', () => {
    const productId = index.fields.get(makeFieldId(FEDERATED, '[Product ID]'));
    expect(productId?.hidden).toBe(true);
  });

  it('resolves Sales Forecast upstream dependencies', () => {
    const salesForecast = getFieldByCaption(index.fields, 'Sales Forecast');
    expect(salesForecast).toBeDefined();

    const upstream = index.upstream.get(salesForecast!.id) ?? [];
    expect(upstream).toContain(makeFieldId(FEDERATED, '[Sales]'));
    expect(upstream).toContain(makeFieldId('Parameters', '[Parameter 1]'));
    expect(upstream).toContain(makeFieldId('Parameters', '[Parameter 2]'));
  });

  it('resolves Segment Set upstream to Segment', () => {
    const segmentSet = index.fields.get(makeFieldId(FEDERATED, '[Segment Set]'));
    const upstream = index.upstream.get(segmentSet!.id) ?? [];
    expect(upstream).toContain(makeFieldId(FEDERATED, '[Segment]'));
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

    const nodeNames = subgraph.nodes.map((node) => node.caption ?? node.name);
    expect(nodeNames).toContain('[Sales]');
    expect(nodeNames.some((name) => name.includes('Sales Forecast') || name.includes('Calculation_5421109230915137'))).toBe(true);
  });

  it('records worksheet usage for Profit and Sales Forecast', () => {
    const profit = index.fields.get(makeFieldId(FEDERATED, '[Profit]'));
    const salesForecast = getFieldByCaption(index.fields, 'Sales Forecast');

    expect(getUsages(index, profit!.id).length).toBeGreaterThan(0);
    expect(getUsages(index, salesForecast!.id).length).toBeGreaterThan(0);
  });
});
