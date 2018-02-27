'use strict';

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
(function () {
  const defaultIntervalInMin = '5';
  let refreshInterval;
  let activeDatasourceIdList = [];

  $(document).ready(function () {
    // When initializing an extension, an optional object is passed that maps a special ID (which
    // must be 'configure') to a function.  This, in conjuction with adding the correct context menu
    // item to the manifest, will add a new "Configure..." context menu item to the zone of extension
    // inside a dashboard.  When that context menu item is clicked by the user, the function passed
    // here will be executed.
    tableau.extensions.initializeAsync({'configure': configure}).then(function() {     
      // This event allows for the parent extension and popup extension to keep their
      // settings in sync.  This event will be triggered any time a setting is
      // changed for this extension, in the parent or popup (i.e. when settings.saveAsync is called).
      tableau.extensions.settings.addEventListener(tableau.TableauEventType.SettingsChanged, (settingsEvent) => {
        updateExtensionBasedOnSettings(settingsEvent.newSettings)
      });
    });
  });

  function configure() {
    // This uses the window.location.origin property to retrieve the scheme, hostname, and 
    // port where the parent extension is currently running, so this string doesn't have
    // to be updated if the extension is deployed to a new location.
    const popupUrl = `${window.location.origin}/Samples/UINamespace/uiNamespaceDialog.html`;

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
    tableau.extensions.ui.displayDialogAsync(popupUrl, defaultIntervalInMin, { height: 500, width: 500 }).then((closePayload) => {
      // The promise is resolved when the dialog has been expectedly closed, meaning that
      // the popup extension has called tableau.extensions.ui.closeDialog.
      $('#inactive').hide();
      $('#active').show();

      // The close payload is returned from the popup extension via the closeDialog method.
      $('#interval').text(closePayload);
      setupRefreshInterval(closePayload);
    }).catch((error) => {
      // One expected error condition is when the popup is closed by the user (meaning the user
      // clicks the 'X' in the top right of the dialog).  This can be checked for like so:
      switch(error.errorCode) {
        case tableau.ErrorCodes.DialogClosedByUser:
          console.log("Dialog was closed by user");
          break;
        default:
          console.error(error.message);
      }
    });
  }

  /**
   * This function sets up a JavaScript interval based on the time interval selected
   * by the user.  This interval will refresh all selected datasources.
   */
  function setupRefreshInterval(interval) {
    refreshInterval = setInterval(function() { 
      let dashboard = tableau.extensions.dashboardContent.dashboard;
      dashboard.worksheets.forEach(function (worksheet) {
        worksheet.getDataSourcesAsync().then(function (datasources) {
          datasources.forEach(function (datasource) {
             if (activeDatasourceIdList.indexOf(datasource.id) >= 0) {
               datasource.refreshAsync();
             }
          });
        });
      });
    }, interval*60*1000);
  }

  /**
   * Helper that is called to set state anytime the settings are changed.
   */
  function updateExtensionBasedOnSettings(settings) {
    if (settings.selectedDatasources) {
      activeDatasourceIdList = JSON.parse(settings.selectedDatasources);
      $('#datasourceCount').text(activeDatasourceIdList.length);
    }
  }
})();
