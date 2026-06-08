import { LiveTableauBridge } from '../tableau/TableauBridge';
import { WorkbookNode } from '../metadata/types';

const sampleMetadata: WorkbookNode = {
  type: 'workbook',
  attrs: { name: 'Test' },
  children: []
};

describe('LiveTableauBridge', () => {
  const mockExecuteCommand = jest.fn();

  beforeEach(() => {
    mockExecuteCommand.mockReset();
    (global as any).tableau = {
      extensions: {
        initializeAsync: jest.fn().mockResolvedValue(undefined),
        workbook: {
          executeCommandAsync: mockExecuteCommand
        }
      }
    };
  });

  it('initialize calls tableau.extensions.initializeAsync', async () => {
    const bridge = new LiveTableauBridge();
    await bridge.initialize();
    expect((global as any).tableau.extensions.initializeAsync).toHaveBeenCalled();
  });

  it('getWorkbookMetadata parses JSON from save-underlying-metadata', async () => {
    mockExecuteCommand.mockResolvedValue({ text: JSON.stringify(sampleMetadata) });
    const bridge = new LiveTableauBridge();
    const result = await bridge.getWorkbookMetadata();
    expect(mockExecuteCommand).toHaveBeenCalledWith('tabui', 'save-underlying-metadata', {});
    expect(result).toEqual(sampleMetadata);
  });

  it('setWorkbookMetadata calls load-underlying-metadata with stringified JSON', async () => {
    mockExecuteCommand.mockResolvedValue({});
    const bridge = new LiveTableauBridge();
    await bridge.setWorkbookMetadata(sampleMetadata);
    expect(mockExecuteCommand).toHaveBeenCalledWith(
      'tabui',
      'load-underlying-metadata',
      { text: JSON.stringify(sampleMetadata) }
    );
  });

  it('normalizes errors with namespace and command', async () => {
    mockExecuteCommand.mockRejectedValue(new Error('alpha API unavailable'));
    const bridge = new LiveTableauBridge();
    await expect(bridge.getWorkbookMetadata()).rejects.toThrow(
      'Tableau command failed (tabui/save-underlying-metadata): alpha API unavailable'
    );
  });
});
