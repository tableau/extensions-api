import { MarksSelectedEvent, TableauEvent, Worksheet } from '@tableau/extensions-api-types';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(async () => {
  class Annotation {
    private worksheets: Worksheet[];
    private currentWorksheet: Worksheet;
    private self: Annotation;

    // Avoid globals.
    constructor(private _$: JQueryStatic) {}

    /**
     * Initializes the extension
     */
    public async initialize() {
      console.log('Waiting for DOM ready');
      await this._$.ready;
      console.log('Initializing extension API');
      await tableau.extensions.initializeAsync();

      this.worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;
      if (this.worksheets.length === 0) {
        return;
      }
      // populating selection menu with worksheets
      this.worksheets.forEach((worksheet, index) => {
        const menuOption = this._$('<option>').val(index).text(worksheet.name);
        this._$('#worksheet-selection').append(menuOption);
      });
      // selecting the first worksheet by default
      this.currentWorksheet = this.worksheets[0];
      this.currentWorksheet.addEventListener(tableau.TableauEventType.MarkSelectionChanged, this.onMarksSelectedEvent);
      // adding functionality to selection menu
      this._$('#worksheet-selection').on('click', this.onMenuSelection.bind(this));
      this._$('#worksheet-selection').prop('disabled', false);
    }

    // Upon selecting marks, the worksheet will generate annotations replacing the previous ones
    private async onMarksSelectedEvent(event: TableauEvent) {
      const markSelectedEvent = event as MarksSelectedEvent;
      const worksheet = markSelectedEvent.worksheet;
      const marksCollection = await markSelectedEvent.getMarksAsync();
      // In most cases the marksCollection will have a single data table
      const dataTable = marksCollection.data[0];
      const marksInfo = dataTable.marksInfo;
      // returning if no marks were selected
      if (marksInfo.length === 0) {
        return;
      }

      // clearing the current annotations
      const annotations = await worksheet.getAnnotationsAsync();
      for (const annotation of annotations) {
        await worksheet.removeAnnotationAsync(annotation);
      }

      // adding annotations for each of the selected marks
      marksInfo.forEach(async (markInfo, rowIndex) => {
        // getting data values corresponding to each markInfo
        const rowData = dataTable.data[rowIndex];
        // building annotation text
        let annotationText = '';
        dataTable.columns.forEach((column, colIndex) => {
          annotationText += `${column.fieldName}: ${rowData[colIndex].formattedValue}\n`;
        });
        await worksheet.annotateMarkAsync(markInfo, annotationText);
      });
    }

    // This function will clear annotations and start listening for marks on the newly selected worksheet.
    private async onMenuSelection() {
      const selectedWorksheet = this.worksheets[this._$('#worksheet-selection option:selected').val() as number];
      if (this.currentWorksheet === selectedWorksheet) {
        return;
      }
      // deactivating current worksheet and clearing annotations
      this.currentWorksheet.removeEventListener(
        tableau.TableauEventType.MarkSelectionChanged,
        this.onMarksSelectedEvent,
      );
      const annotations = await this.currentWorksheet.getAnnotationsAsync();
      for (const annotation of annotations) {
        await this.currentWorksheet.removeAnnotationAsync(annotation);
      }
      // activating selected worksheet
      selectedWorksheet.addEventListener(tableau.TableauEventType.MarkSelectionChanged, this.onMarksSelectedEvent);
      this.currentWorksheet = selectedWorksheet;
    }
  }

  console.log('Initializing Annotation extension.');
  await new Annotation($).initialize();
})();
