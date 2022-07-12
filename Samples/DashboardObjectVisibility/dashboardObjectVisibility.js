'use strict';
/* eslint-disable */
var React;
var ReactDOM;
/* eslint-enable */

// Wrap everything in an anonymous function to avoid polluting the global namespace
(async () => {
  class DashboardObjectVisibility extends React.Component {
    constructor (props = {}) {
      super(props);
      const dashboard = tableau.extensions.dashboardContent.dashboard;
      console.log(dashboard.objects);
      this.state = { dashboardObjects: dashboard.objects, visiblityOverrides: new Map() };
      dashboard.addEventListener(tableau.TableauEventType.DashboardLayoutChanged, (event) => this.onDashboardLayoutChange(event));
    }

    static async initializeAndRender () {
      // This is the entry point into the extension.  It initializes the Tableau Extensions Api, and then
      // will create button elements to show/hide dashboard objects on the dashboard.
      console.log('Initializing extension API');
      await tableau.extensions.initializeAsync();
      ReactDOM.render(React.createElement(DashboardObjectVisibility, null), document.getElementById('dashboard-object-list'));
    }

    render () {
      return React.createElement(
        React.Fragment,
        null,
        this.state.dashboardObjects.map((dashboardObject) => this.renderListItem(dashboardObject))
      );
    }

    renderListItem (dashboardObject) {
      const isVisible = this.getCurrentIsVisible(dashboardObject);
      const buttonText = (isVisible ? 'Hide "' : 'Show "') + dashboardObject.name + '"';
      return React.createElement(
        'li',
        { className: 'list-group-item list-group-item-primary' },
        React.createElement('button', { onClick: () => this.showHideDashboardObject(dashboardObject) }, buttonText)
      );
    }

    getCurrentIsVisible (dashboardObject) {
      if (this.state.visiblityOverrides.has(dashboardObject.id)) {
        return this.state.visiblityOverrides.get(dashboardObject.id);
      } else {
        return dashboardObject.isVisible;
      }
    }

    onDashboardLayoutChange (event) {
      const dashboard = tableau.extensions.dashboardContent.dashboard;
      this.setState({ dashboardObjects: dashboard.objects, visiblityOverrides: new Map() });
    }

    showHideDashboardObject (dashboardObject) {
      const currentIsVisible = this.getCurrentIsVisible(dashboardObject);
      this.updateStateForVisiblityChange(dashboardObject, currentIsVisible);
      const dashboardObjectVisibilityMap = new Map();
      const newDashboardObjectVisibilityType = currentIsVisible
        ? tableau.DashboardObjectVisibilityType.Hide
        : tableau.DashboardObjectVisibilityType.Show;
      dashboardObjectVisibilityMap.set(dashboardObject.id, newDashboardObjectVisibilityType);
      const dashboard = tableau.extensions.dashboardContent.dashboard;
      dashboard.setDashboardObjectVisibilityAsync(dashboardObjectVisibilityMap).then(() => {
        console.log('Done changing dashboard object visiblity');
      });
    }

    updateStateForVisiblityChange (dashboardObject, currentIsVisible) {
      const id = dashboardObject.id;
      const newIsVisible = !currentIsVisible;
      this.setState((prevState) => {
        const newVisiblityOverrides = new Map(prevState.visiblityOverrides);
        newVisiblityOverrides.set(id, newIsVisible);
        return { visiblityOverrides: newVisiblityOverrides };
      });
    }
  }

  await DashboardObjectVisibility.initializeAndRender();
})();
