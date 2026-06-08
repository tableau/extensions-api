/**
 * Alpha authoring API augmentations not yet in @tableau/extensions-api-types.
 * executeCommandAsync is available in Tableau Desktop beta with min-api-version 1.14+.
 */
interface AlphaWorkbook {
  executeCommandAsync<T = unknown>(namespace: string, commandId: string, args: object): Promise<T>;
}

interface AlphaExtensions {
  initializeAsync(options?: object): Promise<void>;
  workbook: AlphaWorkbook;
}

declare const tableau: {
  extensions: AlphaExtensions;
};
