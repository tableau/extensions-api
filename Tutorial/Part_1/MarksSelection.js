'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  // Use the jQuery document ready signal to know when everything has been initialized
  $(document).ready(function () {
    // Tell Tableau we'd like to initialize our extension
    tableau.extensions.initializeAsync().then(function () {
      // Get the dashboard name from the tableau namespace and set it as our title
      const dashboardName = tableau.extensions.dashboardContent.dashboard.name;
      $('#choose_sheet_title').text(dashboardName);
    });
  });
})();
