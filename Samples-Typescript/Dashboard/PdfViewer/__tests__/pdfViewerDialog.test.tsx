import '@testing-library/jest-dom';
import { PdfViewerDialogComponent } from '../pdfViewerDialogComponent';

PdfViewerDialogComponent.initialize = jest.fn();

import '../pdfViewerDialog';

describe('PdfViewerDialog', () => {
  it('should call PdfViewerDialogComponent.initialize' , async () => {
    expect(PdfViewerDialogComponent.initialize).toBeCalledTimes(1);
  });
});
