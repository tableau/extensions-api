import { WorkbookNode } from '../metadata/types';
import { normalizeWorkbookRoot } from '../metadata/normalize';

export interface TableauBridge {
  getWorkbookMetadata(): Promise<WorkbookNode>;
  setWorkbookMetadata(meta: WorkbookNode): Promise<void>;
  executeCommand<T>(ns: string, cmd: string, args: object): Promise<T>;
  initialize(): Promise<void>;
}

export class LiveTableauBridge implements TableauBridge {
  async initialize(): Promise<void> {
    await tableau.extensions.initializeAsync();
  }

  async getWorkbookMetadata(): Promise<WorkbookNode> {
    try {
      const result = await this.executeCommand<{ text?: string }>(
        'tabui',
        'save-underlying-metadata',
        {}
      );
      const text = typeof result.text === 'string'
        ? result.text
        : JSON.stringify(result.text ?? result);
      return normalizeWorkbookRoot(JSON.parse(text));
    } catch (error) {
      throw this.normalizeError('tabui', 'save-underlying-metadata', error);
    }
  }

  async setWorkbookMetadata(meta: WorkbookNode): Promise<void> {
    try {
      await this.executeCommand(
        'tabui',
        'load-underlying-metadata',
        { text: JSON.stringify(meta) }
      );
    } catch (error) {
      throw this.normalizeError('tabui', 'load-underlying-metadata', error);
    }
  }

  async executeCommand<T>(ns: string, cmd: string, args: object): Promise<T> {
    return tableau.extensions.workbook.executeCommandAsync(ns, cmd, args) as Promise<T>;
  }

  private normalizeError(ns: string, cmd: string, error: unknown): Error {
    const message = error instanceof Error ? error.message : String(error);
    return new Error(`Tableau command failed (${ns}/${cmd}): ${message}`);
  }
}

export function createTableauBridge(): TableauBridge {
  return new LiveTableauBridge();
}
