'use strict';

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
(function () {
  /**
   * This extension collects the IDs of each datasource the user is interested in
   * and stores this information in settings when the popup is closed.
   */
  const datasourcesSettingsKey = 'selectedDatasources';
  let selectedDatasources = [];

  $(document).ready(function () {
    // The only difference between an extension in a dashboard and an extension 
    // running in a popup is that the popup extension must use the method
    // initializeDialogAsync instead of initializeAsync for initialization.
    // This has no affect on the development of the extension but is used internally.
    tableau.extensions.initializeDialogAsync().then(function (openPayload) {
      // The openPayload sent from the parent extension in this sample is the 
      // default time interval for the refreshes.  This could alternatively be stored
      // in settings, but is used in this sample to demonstrate open and close payloads.
      $('#interval').val(openPayload);
      $('#closeButton').click(closeDialog);

      let dashboard = tableau.extensions.dashboardContent.dashboard;
      let visibleDatasources = [];
      selectedDatasources = parseSettingsForActiveDataSources();

      // Loop through datasources in this sheet and create a checkbox UI 
      // element for each one.  The existing settings are used to 
      // determine whether a datasource is checked by default or not.
      dashboard.worksheets.forEach(function (worksheet) {
        worksheet.getDataSourcesAsync().then(function (datasources) {
          datasources.forEach(function (datasource) {
            let isActive = (selectedDatasources.indexOf(datasource.id) >= 0);

            if (visibleDatasources.indexOf(datasource.id) < 0) {
              addDataSourceItemToUI(datasource, isActive);
              visibleDatasources.push(datasource.id);
            }
          });
        });
      });
    });
  });

  /**
   * Helper that parses the settings from the settings namesapce and 
   * returns a list of IDs of the datasources that were previously
   * selected by the user.
   */
  function parseSettingsForActiveDataSources() {
    let activeDatasourceIdList = [];
    let settings = tableau.extensions.settings.getAll();
    if (settings.selectedDatasources) {
      activeDatasourceIdList = JSON.parse(settings.selectedDatasources);
    }

    return activeDatasourceIdList;
  }

  /**
   * Helper that updates the internal storage of datasource IDs
   * any time a datasource checkbox item is toggled.
   */
  function updateDatasourceList(id) {
    let idIndex = selectedDatasources.indexOf(id);
    if (idIndex < 0) {
      selectedDatasources.push(id);
    } else {
      selectedDatasources.splice(idIndex, 1);
    }
  }

  /**
   * UI helper that adds a checkbox item to the UI for a datasource.
   */
  function addDataSourceItemToUI(datasource, isActive) {
    let containerDiv = $('<div />');

    $('<input />', {
      type: 'checkbox',
      id: datasource.id,
      value: datasource.name,
      checked: isActive,
      click: function() { updateDatasourceList(datasource.id) }
    }).appendTo(containerDiv);

    $('<label />', {
      'for': datasource.id,
      text: datasource.name,
    }).appendTo(containerDiv);

    $('#datasources').append(containerDiv);
  }

  /**
   * Stores the selected datasource IDs in the extension settings,
   * closes the dialog, and sends a payload back to the parent. 
   */
  function closeDialog() {
    let currentSettings = tableau.extensions.settings.getAll();
    tableau.extensions.settings.set(datasourcesSettingsKey, JSON.stringify(selectedDatasources));

    tableau.extensions.settings.saveAsync().then((newSavedSettings) => {
      tableau.extensions.ui.closeDialog($('#interval').val());
    });
  }
})();
