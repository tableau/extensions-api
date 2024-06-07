'use strict';
/* eslint-disable */
var React;
var ReactDOM;
/* eslint-enable */

// Wrap everything in an anonymous function to avoid polluting the global namespace
(async () => {
  // Utilizes DashboardObjectPositionAndSizeUpdate to store resizeable dashboard objects (must be floating and visible)
  // Calls moveAndResizeDashboardObjects to resize and reposition objects stored in the array
  class MoveAndResize extends React.Component {
    constructor () {
      super(...arguments);
      this.handleClickAndResizeZones = () => {
        const dashboard = tableau.extensions.dashboardContent.dashboard;
        const positionAndSizeUpdateArray = this.moveAndResizeDashboardObjects(dashboard.size);
        dashboard.moveAndResizeDashboardObjectsAsync(positionAndSizeUpdateArray);
      };
    }

    static async initialize () {
      console.log('Initializing extension API');
      await tableau.extensions.initializeAsync();
      ReactDOM.render(React.createElement(MoveAndResize, null), document.getElementById('moveAndResizeExample'));
    }

    render () {
      return React.createElement('button', { className: 'btn btn-primary', onClick: this.handleClickAndResizeZones }, 'Click to resize');
    }

    moveAndResizeDashboardObjects (dashboardSize) {
      const dashboardObjectPositionAndSizeUpdateArray = [];
      const dashboardObjects = tableau.extensions.dashboardContent.dashboard.objects;
      const floatingItems = this.getFloatingAndVisibleItemsCount(dashboardObjects);
      const squareSize = Math.ceil(Math.sqrt(floatingItems));
      const heightSize = Math.floor(dashboardSize.height / squareSize);
      const widthSize = Math.floor(dashboardSize.width / squareSize);
      let currentX = 0;
      let currentY = 0;

      dashboardObjects.forEach((dashboardObject) => {
        if (dashboardObject.isFloating && dashboardObject.isVisible) {
          const dashboardObjectPositionAndSizeUpdate = {
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

    getFloatingAndVisibleItemsCount (dashboardObjects) {
      let totalFloatingItems = 0;
      dashboardObjects.forEach((dashboardObject) => {
        if (dashboardObject.isFloating && dashboardObject.isVisible) {
          totalFloatingItems++;
        }
      });

      return totalFloatingItems;
    }
  }

  await MoveAndResize.initialize();
})();
