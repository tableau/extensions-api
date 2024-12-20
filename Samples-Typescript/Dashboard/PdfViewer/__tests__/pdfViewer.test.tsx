import '@testing-library/jest-dom';
import { PdfViewerComponent } from '../pdfViewerComponent';

PdfViewerComponent.initialize = jest.fn();

import '../pdfViewer';

describe('PdfViewer', () => {
  it('should call PdfViewerComponent.initialize' , async () => {
    expect(PdfViewerComponent.initialize).toBeCalledTimes(1);
  });
});
