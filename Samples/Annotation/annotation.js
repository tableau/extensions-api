'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  let worksheets = [];
  let currentWorksheet = undefined;

  $(document).ready(function () {
    tableau.extensions.initializeAsync().then(function () {
      worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;
      if (worksheets.length === 0) {
        return;
      }
      // populating selection menu with worksheets and selecting first worksheet
      for (let i = 0; i < worksheets.length; i++) {
        const worksheet = worksheets[i];
        $('#worksheet-selection').append($('<option>').val(i).text(worksheet.name));
      }
      currentWorksheet = worksheets[0];
      currentWorksheet.addEventListener(tableau.TableauEventType.MarkSelectionChanged, onMarksSelectionChange);
      // adding functionality to selection menu
      $('#worksheet-selection').on('click', handleSelectionEvent);
      $('#worksheet-selection').prop('disabled', false);
    });
  });

  // Upon selecting marks, the worksheet will clear all annotations and add annotations to the newly selected marks.
  async function onMarksSelectionChange (event) {
    const worksheet = event.worksheet;
    const marksCollection = await worksheet.getSelectedMarksAsync();
    // In most cases the marksCollection will have a single data table
    const dataTable = marksCollection.data[0];
    const marksInfo = dataTable.marksInfo;

    // returning if no marks were selected
    if (marksInfo.length === 0) {
      return;
    }

    // removing annotations
    const annotations = await worksheet.getAnnotationsAsync();
    for (const annotation of annotations) {
        await worksheet.removeAnnotationAsync(annotation);
    }
    
    // adding annotations to the selected marks
    for (let i = 0; i < marksInfo.length; i++) {
      let markInfo = marksInfo[i];
      let rowData = dataTable.data[i];

      // building annotation text
      let annotationText = '';
      for (let j = 0; j < dataTable.columns.length; j++) {
        // example text: "Country/Region: Canada\n"
        annotationText += `${dataTable.columns[j].fieldName}: ${rowData[j].formattedValue}\n`;
      }
      await worksheet.annotateMarkAsync(markInfo, annotationText);
    }
  }

  // This function will clear annotations and start listening for marks on the newly selected worksheet.
  function handleSelectionEvent (event) {
    const selectedWorksheet = worksheets[$("#worksheet-selection option:selected").val()];
    if (currentWorksheet === selectedWorksheet) {
      return;
    }
    // deactivating current worksheet and clearing annotations
    currentWorksheet.removeEventListener(tableau.TableauEventType.MarkSelectionChanged, onMarksSelectionChange);
    currentWorksheet.getAnnotationsAsync().then((annotations) => {
      for (const annotation of annotations) {
        currentWorksheet.removeAnnotationAsync(annotation);
      }
    });
    // activating selected worksheet
    selectedWorksheet.addEventListener(tableau.TableauEventType.MarkSelectionChanged, onMarksSelectionChange);
    currentWorksheet = selectedWorksheet;
  }
})();
