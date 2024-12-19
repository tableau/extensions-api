import { PdfViewerComponent } from './pdfViewerComponent';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(async () => {
  await PdfViewerComponent.initialize();
})();
