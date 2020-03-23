"use strict";

/**
 * UINamespace Sample Extension
 *
 * This sample extension demonstrates how to use the UI namespace
 * to create a popup dialog with additional UI that the user can interact with.
 * The content in this dialog is actually an extension as well (see the
 * uiNamespaceDialog.js for details).
 *
 * This sample is an extension that auto refreshes datasources in the background of
 * a dashboard.  The extension has little need to take up much dashboard space, except
 * when the user needs to adjust settings, so the UI namespace is used for that.
 */

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function() {
  const workbooksSettingsKey = "selectedWorkbooks";
  const defaultIntervalInMin = "5";

  let infoSettings;
  let dashboard;
  let workbookSelected;
  let selectedWorkbooks;
  let numofElements;

  $(document).ready(function() {
    // When initializing an extension, an optional object is passed that maps a special ID (which
    // must be 'configure') to a function.  This, in conjuction with adding the correct context menu
    // item to the manifest, will add a new "Configure..." context menu item to the zone of extension
    // inside a dashboard.  When that context menu item is clicked by the user, the function passed
    // here will be executed.
    tableau.extensions
      .initializeAsync({ configure: configure })
      .then(function() {
        dashboard = tableau.extensions.dashboardContent.dashboard;
        // Charge settings if there's one
        try {
          updateExtensionBasedOnSettings(tableau.extensions.settings.getAll());
          console.log(infoSettings);
          $("#configListener").hide();
          $("#main").show();
          setTitles(document, infoSettings);

          dashboard.worksheets.forEach(function(worksheet) {
            if (worksheet.name == infoSettings.workbook) {
              workbookSelected = worksheet;
            }
            console.log(workbookSelected);
          });

          let options = {
            maxRows: 0, // Max rows to return. Use 0 to return all rows

            ignoreAliases: false,
            ignoreSelection: true
          };

          workbookSelected.getSummaryDataAsync(options).then(function(sumdata) {
            console.log("-------------------");
            const worksheetData = sumdata;
            console.log(worksheetData);
            numofElements = worksheetData._totalRowCount;
            console.log(numofElements);
            console.log("-------------------");
          });

          const markSelection = tableau.TableauEventType.MarkSelectionChanged;

          let unregisterEventHandlerFunction = workbookSelected.addEventListener(
            markSelection,
            function(selectionEvent) {
              console.log("Click");
              // When the selection changes, reload the data
              // Initialization succeeded! Get the dashboard

              workbookSelected.getUnderlyingDataAsync().then(dataTable => {
                let field = dataTable.columns.find(
                  column => column.fieldName === infoSettings.column
                );
                let list = [];
                for (let row of dataTable.data) {
                  list.push(row[field.index].value);
                }
                console.log("||||||||||||");
                console.log(list.length);
                console.log(numofElements);
                console.log("||||||||||||");
                if (list.length != numofElements) {
                  document.getElementById("selectedItem").src = list[0];

                  let settings = tableau.extensions.settings.getAll();
                  //selectedWorkbooks = JSON.parse(settings.selectedWorkbooks);
                  infoSettings.image = list[0];

                  console.log("Test: ");
                  console.log(infoSettings);
                  console.log(JSON.stringify(infoSettings));
                  try {
                    tableau.extensions.settings.set(
                      workbooksSettingsKey,
                      JSON.stringify(infoSettings)
                    );
                    console.log(infoSettings);
                    tableau.extensions.settings.saveAsync().then(result => {
                      console.log("Settings saved.");
                      // ... process results
                    });
                  } catch (error) {
                    console.log("No pudo guardar");
                  }
                }
              });
              // remove the event listener when done
              //unregisterEventHandlerFunction();
            }
          );
        } catch (error) {
          console.error(error);
          console.log("No hay configuraciones precargadas");
        }
        // This event allows for the parent extension and popup extension to keep their
        // settings in sync.  This event will be triggered any time a setting is
        // changed for this extension, in the parent or popup (i.e. when settings.saveAsync is called).
        tableau.extensions.settings.addEventListener(
          tableau.TableauEventType.SettingsChanged,
          settingsEvent => {
            console.log("Paso cambio de configuración");
            updateExtensionBasedOnSettings(settingsEvent.newSettings);

            setTitles(document, infoSettings);

            console.log(dashboard);

            dashboard.worksheets.forEach(function(worksheet) {
              if (worksheet.name == infoSettings.workbook) {
                workbookSelected = worksheet;
              }
              console.log("Se actualiza");
              console.log(workbookSelected);
            });
          }
        );
      });
  });

  function configure() {
    // This uses the window.location.origin property to retrieve the scheme, hostname, and
    // port where the parent extension is currently running, so this string doesn't have
    // to be updated if the extension is deployed to a new location.
    const popupUrl = `${window.location.origin}/ImageDemo/imageConfiguration.html`;

    /**
     * This is the API call that actually displays the popup extension to the user.  The
     * popup is always a modal dialog.  The only required parameter is the URL of the popup,
     * which must be the same domain, port, and scheme as the parent extension.
     *
     * The developer can optionally control the initial size of the extension by passing in
     * an object with height and width properties.  The developer can also pass a string as the
     * 'initial' payload to the popup extension.  This payload is made available immediately to
     * the popup extension.  In this example, the value '5' is passed, which will serve as the
     * default interval of refresh.
     */
    tableau.extensions.ui
      .displayDialogAsync(popupUrl, defaultIntervalInMin, {
        height: 500,
        width: 500
      })
      .then(closePayload => {
        // The promise is resolved when the dialog has been expectedly closed, meaning that
        // the popup extension has called tableau.extensions.ui.closeDialog.
        $("#configListener").hide();
        $("#main").show();
        // The close payload is returned from the popup extension via the closeDialog method.
        //$("#interval").text(closePayload);
        //setupRefreshInterval(closePayload);
      })
      .catch(error => {
        // One expected error condition is when the popup is closed by the user (meaning the user
        // clicks the 'X' in the top right of the dialog).  This can be checked for like so:
        switch (error.errorCode) {
          case tableau.ErrorCodes.DialogClosedByUser:
            console.log("Dialog was closed by user");
            break;
          default:
            console.error(error.message);
        }
      });
  }

  /**
   * Helper that is called to set state anytime the settings are changed.
   */
  function updateExtensionBasedOnSettings(settings) {
    infoSettings = JSON.parse(settings.selectedWorkbooks);
    console.log(infoSettings);
  }

  function setTitles(document, settings) {
    document.getElementById("title").innerHTML = settings.title;
    document.getElementById("subtitle").innerHTML = settings.subtitle;
    document.getElementById("descripcion").innerHTML = settings.descripcion;
    console.log("Imangen URL: " + settings.image);
    document.getElementById("selectedItem").src = settings.image;
  }
})();
