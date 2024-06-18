'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  let worksheets = [];
  let currentWorksheet;

  $(document).ready(function () {
    tableau.extensions.initializeAsync().then(function () {
      worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;
      if (worksheets.length === 0) {
        return;
      }
      // populating selection menu with worksheets
      worksheets.forEach((worksheet, index) => {
        const menuOption = $('<option>').val(index).text(worksheet.name);
        $('#worksheet-selection').append(menuOption);
      });
      // selecting the first worksheet by default
      currentWorksheet = worksheets[0];
      currentWorksheet.addEventListener(tableau.TableauEventType.MarkSelectionChanged, onMarksSelectedEvent);
      // adding functionality to selection menu
      $('#worksheet-selection').on('click', onMenuSelection);
      $('#worksheet-selection').prop('disabled', false);
    });
  });

  // Upon selecting marks, the worksheet will generate annotations replacing the previous ones
  async function onMarksSelectedEvent (event) {
    const worksheet = event.worksheet;
    const marksCollection = await event.getMarksAsync();
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
  async function onMenuSelection () {
    const selectedWorksheet = worksheets[$('#worksheet-selection option:selected').val()];
    if (currentWorksheet === selectedWorksheet) {
      return;
    }
    // deactivating current worksheet and clearing annotations
    currentWorksheet.removeEventListener(tableau.TableauEventType.MarkSelectionChanged, onMarksSelectedEvent);
    const annotations = await currentWorksheet.getAnnotationsAsync();
    for (const annotation of annotations) {
      await currentWorksheet.removeAnnotationAsync(annotation);
    }
    // activating selected worksheet
    selectedWorksheet.addEventListener(tableau.TableauEventType.MarkSelectionChanged, onMarksSelectedEvent);
    currentWorksheet = selectedWorksheet;
  }
})();
