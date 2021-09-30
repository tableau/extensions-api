import { DashboardLayoutChange, DashboardLayoutChangedEvent, DashboardObject, TableauEvent } from '@tableau/extensions-api-types';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(async () => {
  class DashboardLayout {
    public dashboardObjects: DashboardObject[];
    private self: DashboardLayout;

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

      const dashboard = tableau.extensions.dashboardContent.dashboard;
      this.dashboardObjects = dashboard.objects;
      console.log(this.dashboardObjects);

      // enabling dashboard event button
      this._$('#dashboard-event-btn').prop('disabled', false);
      this._$('#dashboard-event-btn').click(this.onEventButtonClick.bind(this));
    }

    // When changes are made to the dashboard we get all the details for each of the
    // dashboard objects that were changed and compare it with their previous values.
    // The dashboardLayoutChangeDetails property is a map of dashboard obj3ct ids to
    // an array of dashboard layout changes.
    // Dashboard layout change events are invoked when dashboard objects are resized,
    // repositioned, added, and more. See DashboardLayoutChange in the API documentation
    // for all possible actions.
    // Extension reloads when worksheets are added / removed.
    private onDashboardLayoutChange(event: TableauEvent) {
      console.log(event);
      const dashboardEvent = event as DashboardLayoutChangedEvent;
      const dashboardEventDetails = dashboardEvent.dashboardLayoutChangeDetails;
      const dashboard = tableau.extensions.dashboardContent.dashboard;

      // updating dashboard objects and storing the previous dashboard objects for referrence.
      const oldDashboardObjects = this.dashboardObjects;
      this.dashboardObjects = dashboard.objects;

      // An empty dashboard layout change event may be invoked when loading an extension from the manifest.
      // In this case we ignore it and return.
      if (dashboardEventDetails === undefined || dashboardEventDetails.size === 0) {
        return;
      }

      // Emptying previous content from the UI's change list.
      this._$('#dashboard-layout-change-list').empty();

      // Updating UI's change list to display information on the current dashboard event.
      dashboardEventDetails.forEach((changesMade: DashboardLayoutChange[], dashboardObjectId: number) => {
        // getting dashboard object from its id
        const dashboardObject = dashboard.getDashboardObjectById(dashboardObjectId);

        // building a div for the changes made to this dashboard object.
        const changesDiv = this._$('<div>');

        // checking if this dashboard object was added as part of the event.
        if (changesMade.includes(tableau.DashboardLayoutChange.Added)) {
          const toAppend = this._$('<h6/>');
          toAppend.text(`Dashboard Object ${dashboardObjectId} added: "${dashboardObject.name}"`);
          changesDiv.append(toAppend);
          this._$('#dashboard-layout-change-list').append(changesDiv);
          return;
        }

        // getting old dashboard object before event to compare it with the current one.
        const oldDashboardObject = oldDashboardObjects.find(o => o.id === dashboardObjectId);

        // checking if this dashboard object was removed as part of the event.
        if (changesMade.includes(tableau.DashboardLayoutChange.Removed)) {
          const toAppend = this._$('<h6/>');
          toAppend.text(`Dashboard Object ${dashboardObjectId} removed: "${oldDashboardObject.name}"`);
          changesDiv.append(toAppend);
          this._$('#dashboard-layout-change-list').append(changesDiv);
          return;
        }

        // the following dashboard changes are not mutually exclusive, so we list them together.
        const h6 = this._$('<h6/>');
        h6.text(`Dashboard Object ${dashboardObjectId}: "${dashboardObject.name}"`);
        changesDiv.append(h6);
        const ul = this._$('<ul/>');

        // checking if the dashboard object had changes to its floating state.
        if (changesMade.includes(tableau.DashboardLayoutChange.IsFloatingChanged)) {
          const li = this._$('<li/>');
          li.text(`Floating is now ${dashboardObject.isFloating}, was ${oldDashboardObject.isFloating}`);
          ul.append(li);
        }

        // checking if the dashbaord object had changes to its visibility.
        if (changesMade.includes(tableau.DashboardLayoutChange.IsVisibleChanged)) {
          const li = this._$('<li/>');
          li.text(`Visibility is now ${dashboardObject.isVisible}, was ${oldDashboardObject.isVisible}`);
          ul.append(li);
        }

        // checking if the dashboard object was repositioned.
        if (changesMade.includes(tableau.DashboardLayoutChange.PositionChanged)) {
          const li = this._$('<li/>');
          const newPos = dashboardObject.position;
          const oldPos = oldDashboardObject.position;
          li.text(`Position is now (${newPos.x},${newPos.y}), was (${oldPos.x},${oldPos.y})`);
          ul.append(li);
        }

        // checking if the dashboard object was resized.
        if (changesMade.includes(tableau.DashboardLayoutChange.SizeChanged)) {
          const li = this._$('<li/>');
          const newSize = dashboardObject.size;
          const oldSize = oldDashboardObject.size;
          li.text(`Size is now ${newSize.width}x${newSize.height}, was ${oldSize.width}x${oldSize.height}`);
          ul.append(li);
        }

        // checking if the dashboard object was renamed.
        if (changesMade.includes(tableau.DashboardLayoutChange.NameChanged)) {
          const li = this._$('<li/>');
          li.text(`Name is now "${dashboardObject.name}", was "${oldDashboardObject.name}"`);
          ul.append(li);
        }

        changesDiv.append(ul);
        this._$('#dashboard-layout-change-list').append(changesDiv);
      });
    }

    // This function adds a dashboard event if there is not one already, and removes it if there is.
    private onEventButtonClick() {
      const dashboard = tableau.extensions.dashboardContent.dashboard;
      if ($('#dashboard-event-btn').text() === 'Add Dashboard Event') {
        dashboard.addEventListener(tableau.TableauEventType.DashboardLayoutChanged,
          (event) => this.onDashboardLayoutChange(event));
        $('#dashboard-event-btn').text('Remove Dashboard Event');
      } else {
        dashboard.removeEventListener(tableau.TableauEventType.DashboardLayoutChanged,
          (event) => this.onDashboardLayoutChange(event));
        $('#dashboard-layout-change-list').empty();
        $('#dashboard-event-btn').text('Add Dashboard Event');
      }
    }
  }

  console.log('Initializing DashboardLayout extension.');
  await new DashboardLayout($).initialize();
})();
