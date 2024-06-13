import { DashboardObject, TableauEvent } from '@tableau/extensions-api-types';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(async () => {
  interface IDashboardObjectVisibilityState {
    dashboardObjects: DashboardObject[];
    visiblityOverrides: Map<number, boolean>;
  }

  class DashboardObjectVisibility extends React.Component<{}, IDashboardObjectVisibilityState> {
    public constructor(props = {}) {
      super(props);
      const dashboard = tableau.extensions.dashboardContent.dashboard;
      console.log(dashboard.objects);
      this.state = { dashboardObjects: dashboard.objects, visiblityOverrides: new Map() };
      dashboard.addEventListener(tableau.TableauEventType.DashboardLayoutChanged,
        (event) => this.onDashboardLayoutChange(event));
    }

    public static async initializeAndRender(): Promise<void> {
      // This is the entry point into the extension.  It initializes the Tableau Extensions Api, and then
      // will create button elements to show/hide dashboard objects on the dashboard.
      console.log('Initializing extension API');
      await tableau.extensions.initializeAsync();

      ReactDOM.render(<DashboardObjectVisibility></DashboardObjectVisibility>,
        document.getElementById('dashboard-object-list'));
    }

    public render(): JSX.Element {
      return <>
        {this.state.dashboardObjects.map(dashboardObject => (
          this.renderListItem(dashboardObject)
        ))}
      </>;
    }

    private renderListItem(dashboardObject: DashboardObject): JSX.Element {
      const isVisible = this.getCurrentIsVisible(dashboardObject);
      const buttonText = (isVisible ? 'Hide "' : 'Show "') + dashboardObject.name + '"';

      return <li className='list-group-item list-group-item-primary'>
        <button onClick={() => this.showHideDashboardObject(dashboardObject)}>{buttonText}</button>
      </li>;
    }

    private getCurrentIsVisible(dashboardObject: DashboardObject): boolean {
      if (this.state.visiblityOverrides.has(dashboardObject.id)) {
        return this.state.visiblityOverrides.get(dashboardObject.id);
      } else {
        return dashboardObject.isVisible;
      }
    }

    private onDashboardLayoutChange(event: TableauEvent): void {
      const dashboard = tableau.extensions.dashboardContent.dashboard;
      this.setState({ dashboardObjects: dashboard.objects, visiblityOverrides: new Map() });
    }

    private showHideDashboardObject(dashboardObject: DashboardObject): void {
      const currentIsVisible = this.getCurrentIsVisible(dashboardObject);
      this.updateStateForVisiblityChange(dashboardObject, currentIsVisible);

      const dashboardObjectVisibilityMap = new Map();
      const newDashboardObjectVisibilityType = currentIsVisible ?
        tableau.DashboardObjectVisibilityType.Hide : tableau.DashboardObjectVisibilityType.Show;

      dashboardObjectVisibilityMap.set(dashboardObject.id, newDashboardObjectVisibilityType);
      const dashboard = tableau.extensions.dashboardContent.dashboard;
      dashboard.setDashboardObjectVisibilityAsync(dashboardObjectVisibilityMap).then(() => {
        console.log('Done changing dashboard object visiblity');
      });
    }

    private updateStateForVisiblityChange(dashboardObject: DashboardObject, currentIsVisible: boolean): void {
      const id = dashboardObject.id;
      const newIsVisible = !currentIsVisible;
      this.setState(prevState => {
        const newVisiblityOverrides = new Map(prevState.visiblityOverrides);
        newVisiblityOverrides.set(id, newIsVisible);
        return { visiblityOverrides: newVisiblityOverrides };
      });
    }
  }

  await DashboardObjectVisibility.initializeAndRender();
})();
