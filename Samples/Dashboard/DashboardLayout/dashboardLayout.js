'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  let dashboardObjects = [];

  $(document).ready(function () {
    tableau.extensions.initializeAsync().then(function () {
      const dashboard = tableau.extensions.dashboardContent.dashboard;
      dashboardObjects = dashboard.objects;
      console.log(dashboardObjects);

      // enabling dashboard event button
      $('#dashboard-event-btn').prop('disabled', false);
      $('#dashboard-event-btn').click(handleEventButtonClick);
    });
  });

  // When changes are made to the dashboard we get all the details for each of the
  // dashboard objects that were changed and compare it with their previous values.
  // The dashboardLayoutChangeDetails property is a map of dashboard obejct ids to an array of dashboard layout changes.
  // Dashboard layout change events are invoked when dashboard objects are resized, repositioned,
  // added, and more. See DashboardLayoutChange in the API documentation for all possible actions.
  // Extension reloads when worksheets are added / removed.
  function onDashboardLayoutChange (event) {
    console.log(event);

    // getting the dashboard event's details map
    const dashboardEventDetails = event.dashboardLayoutChangeDetails;
    const dashboard = tableau.extensions.dashboardContent.dashboard;

    // updating dashboard objects and storing the previous dashboard objects for referrence.
    const oldDashboardObjects = dashboardObjects;
    dashboardObjects = dashboard.objects;

    // An empty dashboard layout change event may be invoked when loading an extension from the manifest.
    // In this case we ignore it and return.
    if (dashboardEventDetails === undefined || dashboardEventDetails.size === 0) {
      return;
    }

    // Emptying previous content from the UI's change list.
    $('#dashboard-layout-change-list').empty();

    // Updating UI's change list to display information on the current dashboard event.
    dashboardEventDetails.forEach(function (changesMade, dashboardObjectId) {
      // getting dashboard object from its id
      const dashboardObject = dashboard.getDashboardObjectById(dashboardObjectId);

      // building a div for the changes made to this dashboard object.
      const changesDiv = $('<div>');

      // checking if this dashboard object was added as part of the event.
      if (changesMade.includes('added')) {
        const toAppend = $('<h6/>');
        toAppend.text(`Dashboard Object ${dashboardObjectId} added: "${dashboardObject.name}"`);
        changesDiv.append(toAppend);
        $('#dashboard-layout-change-list').append(changesDiv);
        return;
      }

      // getting old dashboard object before event to compare it with the current one.
      let oldDashboardObject;
      for (let i = 0; i < oldDashboardObjects.length; i++) {
        if (oldDashboardObjects[i].id === dashboardObjectId) {
          oldDashboardObject = oldDashboardObjects[i];
          break;
        }
      }

      // checking if this dashboard object was removed as part of the event.
      if (changesMade.includes('removed')) {
        const toAppend = $('<h6/>');
        toAppend.text(`Dashboard Object ${dashboardObjectId} removed: "${oldDashboardObject.name}"`);
        changesDiv.append(toAppend);
        $('#dashboard-layout-change-list').append(changesDiv);
        return;
      }

      // the following dashboard changes are not mutually exclusive, so we list them together.
      const h6 = $('<h6/>');
      h6.text(`Dashboard Object ${dashboardObjectId}: "${dashboardObject.name}"`);
      changesDiv.append(h6);
      const ul = $('<ul/>');

      // checking if the dashboard object had changes to its floating state.
      if (changesMade.includes('is-floating-changed')) {
        const li = $('<li/>');
        li.text(`Floating is now ${dashboardObject.isFloating}, was ${oldDashboardObject.isFloating}`);
        ul.append(li);
      }

      // checking if the dashbaord object had changes to its visibility.
      if (changesMade.includes('is-visible-changed')) {
        const li = $('<li/>');
        li.text(`Visibility is now ${dashboardObject.isVisible}, was ${oldDashboardObject.isVisible}`);
        ul.append(li);
      }

      // checking if the dashboard object was repositioned.
      if (changesMade.includes('position-changed')) {
        const li = $('<li/>');
        const newPos = dashboardObject.position;
        const oldPos = oldDashboardObject.position;
        li.text(`Position is now (${newPos.x},${newPos.y}), was (${oldPos.x},${oldPos.y})`);
        ul.append(li);
      }

      // checking if the dashboard object was resized.
      if (changesMade.includes('size-changed')) {
        const li = $('<li/>');
        const newSize = dashboardObject.size;
        const oldSize = oldDashboardObject.size;
        li.text(`Size is now ${newSize.width}x${newSize.height}, was ${oldSize.width}x${oldSize.height}`);
        ul.append(li);
      }

      // checking if the dashboard object was renamed.
      if (changesMade.includes('name-changed')) {
        const li = $('<li/>');
        li.text(`Name is now "${dashboardObject.name}", was "${oldDashboardObject.name}"`);
        ul.append(li);
      }

      changesDiv.append(ul);
      $('#dashboard-layout-change-list').append(changesDiv);
    });
  }

  // This function adds a dashboard event if there is not one already, and removes it if there is.
  function handleEventButtonClick () {
    const dashboard = tableau.extensions.dashboardContent.dashboard;
    if ($('#dashboard-event-btn').text() === 'Add Dashboard Event') {
      dashboard.addEventListener(tableau.TableauEventType.DashboardLayoutChanged, onDashboardLayoutChange);
      $('#dashboard-event-btn').text('Remove Dashboard Event');
    } else {
      dashboard.removeEventListener(tableau.TableauEventType.DashboardLayoutChanged, onDashboardLayoutChange);
      $('#dashboard-layout-change-list').empty();
      $('#dashboard-event-btn').text('Add Dashboard Event');
    }
  }
})();
