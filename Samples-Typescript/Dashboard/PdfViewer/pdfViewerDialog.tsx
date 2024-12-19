import { PdfViewerDialogComponent } from './pdfViewerDialogComponent';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(async () => {
  await PdfViewerDialogComponent.initialize();
})();
