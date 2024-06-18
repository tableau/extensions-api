import { Dashboard, DashboardObject, Size } from '@tableau/extensions-api-types';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(async () => {

  interface IDashboardObjectPositionAndSizeUpdate {
    dashboardObjectID: number;
    height: number;
    width: number;
    y: number;
    x: number;
  }

// Utilizes DashboardObjectPositionAndSizeUpdate to store resizeable dashboard objects (must be floating and visible)
// Calls moveAndResizeDashboardObjects to resize and reposition objects stored in the array
  class MoveAndResize extends React.Component {

    public static async initialize() {
      console.log('Initializing extension API');
      await tableau.extensions.initializeAsync();
      ReactDOM.render(
        <MoveAndResize />, document.getElementById('moveAndResizeExample'));
    }

    private moveAndResizeDashboardObjects(dashboardSize: Size): IDashboardObjectPositionAndSizeUpdate[] {
      const dashboardObjectPositionAndSizeUpdateArray: IDashboardObjectPositionAndSizeUpdate[] = [];
      const dashboardObjects: DashboardObject[] = tableau.extensions.dashboardContent.dashboard.objects;
      const floatingItems = this.getFloatingAndVisibleItemsCount(dashboardObjects);
      const squareSize: number = Math.ceil(Math.sqrt(floatingItems));
      const heightSize: number = Math.floor(dashboardSize.height / squareSize);
      const widthSize: number = Math.floor(dashboardSize.width / squareSize);
      let currentX: number = 0;
      let currentY: number = 0;

      dashboardObjects.forEach((dashboardObject) => {
        if (dashboardObject.isFloating && dashboardObject.isVisible) {
          const dashboardObjectPositionAndSizeUpdate: IDashboardObjectPositionAndSizeUpdate = {
            dashboardObjectID: dashboardObject.id,
            height: heightSize,
            width: widthSize,
            x: currentX * widthSize,
            y: currentY * heightSize
          };
          dashboardObjectPositionAndSizeUpdateArray.push(dashboardObjectPositionAndSizeUpdate);
          currentX++;
          if (currentX >= squareSize) {
            currentX = 0;
            currentY++;
          }
        }
      });

      return dashboardObjectPositionAndSizeUpdateArray;
    }

    private getFloatingAndVisibleItemsCount(dashboardObjects: DashboardObject[]): number {
      let totalFloatingItems: number = 0;
      dashboardObjects.forEach((dashboardObject: DashboardObject) => {
        if (dashboardObject.isFloating && dashboardObject.isVisible) {
          totalFloatingItems++;
        }
      });

      return totalFloatingItems;
    }

    private handleClickAndResizeZones = (): void => {
      const dashboard: Dashboard = tableau.extensions.dashboardContent.dashboard;
      const positionAndSizeUpdateArray = this.moveAndResizeDashboardObjects(dashboard.size);
      dashboard.moveAndResizeDashboardObjectsAsync(positionAndSizeUpdateArray);
    }

    public render(): JSX.Element {
      return <button className='btn btn-primary' onClick={this.handleClickAndResizeZones}>
        Click to resize
      </button>;
    }
  }

  await MoveAndResize.initialize();
})();
