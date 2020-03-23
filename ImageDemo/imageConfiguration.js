"use strict";

/**
 * UINamespace Sample Extension
 *
 * This is the popup extension portion of the UINamespace sample, please see
 * uiNamespace.js in addition to this for context.  This extension is
 * responsible for collecting configuration settings from the user and communicating
 * that info back to the parent extension.
 *
 * This sample demonstrates two ways to do that:
 *   1) The suggested and most common method is to store the information
 *      via the settings namespace.  The parent can subscribe to notifications when
 *      the settings are updated, and collect the new info accordingly.
 *   2) The popup extension can receive and send a string payload via the open
 *      and close payloads of initializeDialogAsync and closeDialog methods.  This is useful
 *      for information that does not need to be persisted into settings.
 */

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function() {
  /**
   * This extension collects the IDs of each datasource the user is interested in
   * and stores this information in settings when the popup is closed.
   */
  const workbooksSettingsKey = "selectedWorkbooks";
  let selectedWorkbooks;

  let selectedWorkbook;
  let selectedColumn;

  $(document).ready(function() {
    // The only difference between an extension in a dashboard and an extension
    // running in a popup is that the popup extension must use the method
    // initializeDialogAsync instead of initializeAsync for initialization.
    // This has no affect on the development of the extension but is used internally.
    tableau.extensions.initializeDialogAsync().then(function(openPayload) {
      // The openPayload sent from the parent extension in this sample is the
      // default time interval for the refreshes.  This could alternatively be stored
      // in settings, but is used in this sample to demonstrate open and close payloads.

      $("#columnsList").change(updateColumnList);
      $("#closeButton").click(closeDialog);

      let dashboard = tableau.extensions.dashboardContent.dashboard;
      let visibleWorkbooks = [];
      selectedWorkbooks = parseSettingsForActiveWorkbooks();

      // Set values of inputs
      document.getElementById("title").value = selectedWorkbooks.title;
      document.getElementById("subtitle").value = selectedWorkbooks.subtitle;
      document.getElementById("descripcion").value = selectedWorkbooks.descripcion;
      console.log(selectedWorkbooks.image);
      // Loop through datasources in this sheet and create a checkbox UI
      // element for each one.  The existing settings are used to
      // determine whether a datasource is checked by default or not.
      dashboard.worksheets.forEach(function(worksheet) {
        let isActive = false;
        if (selectedWorkbooks != null) {
          isActive = selectedWorkbooks.workbook == worksheet.name;
        }
        addWorkbookItemToUI(worksheet, isActive);
        if (isActive) {
          updateWorkbookList(worksheet);
        }
        visibleWorkbooks.push(worksheet.name);
      });
    });
  });

  /**
   * Helper that parses the settings from the settings namesapce and
   * returns a list of IDs of the datasources that were previously
   * selected by the user.
   */
  function parseSettingsForActiveWorkbooks() {
    try {
      let activeWorkbookIdList = [];
      let settings = tableau.extensions.settings.getAll();

      activeWorkbookIdList = JSON.parse(settings.selectedWorkbooks);
      console.log(activeWorkbookIdList);
      return activeWorkbookIdList;
    } catch (error) {
      //console.error(error);
      console.log("No se encontró información en las configuraciones");
      // expected output: ReferenceError: nonExistentFunction is not defined
      // Note - error messages will vary depending on browser
    }
  }

  /**
   * Helper that updates the internal storage of datasource IDs
   * any time a datasource checkbox item is toggled.
   */

  function updateWorkbookList(workbook) {
    selectedWorkbook = workbook.name;
    console.log(selectedWorkbook);

    let existingColumns = [];

    workbook.getSummaryDataAsync().then(function(sumdata) {
      $("#columnsList").empty();
      const worksheetData = sumdata;
      console.log(worksheetData);

      existingColumns = worksheetData.columns;
      console.log(existingColumns);

      selectedColumn = existingColumns[0].fieldName;
      console.log("Hizo click column: " + selectedColumn);
      existingColumns.forEach(element =>
        addColumnItemToUI(element.fieldName, false)
      );
    });
  }

  function updateColumnList() {
    var sel = document.getElementById("columnsList");

    selectedColumn = sel.value;
    console.log("Hizo click column: " + selectedColumn);
  }

  /**
   * UI helper that adds a radio workbook to the UI for a workbook.
   */
  function addWorkbookItemToUI(workbook, isActive) {
    let container = $("#workbooks");

    $("<input />", {
      type: "radio",
      name: "workbook",
      id: workbook.id,
      value: workbook.name,
      checked: isActive,
      click: function() {
        updateWorkbookList(workbook);
      }
    }).appendTo(container);

    $("<label />", {
      for: workbook.name,
      text: workbook.name
    }).appendTo(container);

    $("<br />", {}).appendTo(container);
  }

  /**
   * UI helper that adds a radio variables to the UI for a columns.
   */
  function addColumnItemToUI(column, isActive) {
    let container = $("#columnsList");

    $("<option />", {
      value: column,
      text: column,
      selected: isActive
    }).appendTo(container);
  }

  /**
   * Stores the selected datasource IDs in the extension settings,
   * closes the dialog, and sends a payload back to the parent.
   */

  function closeDialog() {
    let title = document.getElementById("title").value;
    let subtitle = document.getElementById("subtitle").value;
    let descripcion = document.getElementById("descripcion").value;
    selectedWorkbooks = {
      workbook: selectedWorkbook,
      column: selectedColumn,
      title: title,
      subtitle: subtitle,
      descripcion: descripcion,
      image: selectedWorkbooks.image
    };
    console.log(selectedWorkbooks);
    console.log(JSON.stringify(selectedWorkbooks));

    tableau.extensions.settings.set(
      workbooksSettingsKey,
      JSON.stringify(selectedWorkbooks)
    );

    tableau.extensions.settings.saveAsync().then(newSavedSettings => {
      tableau.extensions.ui.closeDialog();
    });
  }
})();
