import { parseFormulaFieldIds, parseParameterReferences } from '../metadata/fieldReferences';
import { makeFieldId } from '../metadata/types';

const FEDERATED = 'federated.10nnk8d1vgmw8q17yu76u06pnbcj';

describe('fieldReferences', () => {
  it('parses parameter references from formulas', () => {
    const refs = parseParameterReferences(
      '[Sales]*(1-[Parameters].[Parameter 2])*(1+[Parameters].[Parameter 1])'
    );
    expect(refs).toEqual([
      makeFieldId('Parameters', '[Parameter 2]'),
      makeFieldId('Parameters', '[Parameter 1]'),
    ]);
  });

  it('parses datasource field references from formulas', () => {
    const refs = parseFormulaFieldIds(
      '[Sales]*(1-[Parameters].[Parameter 2])*(1+[Parameters].[Parameter 1])',
      FEDERATED
    );
    expect(refs).toContain(makeFieldId(FEDERATED, '[Sales]'));
    expect(refs).toContain(makeFieldId('Parameters', '[Parameter 1]'));
    expect(refs).toContain(makeFieldId('Parameters', '[Parameter 2]'));
  });
});
