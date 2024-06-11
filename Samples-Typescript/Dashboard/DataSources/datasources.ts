import { DataSource } from '@tableau/extensions-api-types';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(async () => {
  class DataSources {
    // Avoid globals.
    constructor(private _$: JQueryStatic) { }

    /**
     * Refreshes the given dataSource
     * @param dataSource
     */
    private static async refreshDataSource(dataSource: DataSource) {
      await dataSource.refreshAsync();
      console.log(dataSource.name + ': Refreshed Successfully');
    }

    /**
     * Initializes the extension
     */
    public async initialize() {
      console.log('Waiting for DOM ready');
      await this._$.ready;
      console.log('Initializing extension API');
      await tableau.extensions.initializeAsync();

      // Since dataSource info is attached to the worksheet, we will perform
      // one async call per worksheet to get every dataSource used in this
      // dashboard.  This demonstrates the use of Promise.all to combine
      // promises together and wait for each of them to resolve.
      const dataSourceFetchPromises: Array<Promise<DataSource[]>> = [];

      // To get dataSource info, first get the dashboard.
      const dashboard = tableau.extensions.dashboardContent.dashboard;
      // Then loop through each worksheet and get its dataSources, save promise for later.
      dashboard.worksheets.forEach(worksheet => dataSourceFetchPromises.push(worksheet.getDataSourcesAsync()));
      const fetchResults = await Promise.all(dataSourceFetchPromises);

      // Maps dataSource id to dataSource so we can keep track of unique dataSources.
      const dataSourcesCheck = {};
      const dashboardDataSources: DataSource[] = [];

      fetchResults.forEach(dss => {
        dss.forEach(ds => {
          if (!dataSourcesCheck[ds.id]) {
            // We've already seen it, skip it.
            dataSourcesCheck[ds.id] = true;
            dashboardDataSources.push(ds);
          }
        });
      });

      this.buildDataSourcesTable(dashboardDataSources);

      // This just modifies the UI by removing the loading banner and showing the dataSources table.
      this._$('#loading').addClass('hidden');
      this._$('#dataSourcesTable')
        .removeClass('hidden')
        .addClass('show');
    }

    /**
     * Displays a modal dialog with more details about the given dataSource.
     * @param dataSource
     */
    private async showModal(dataSource: DataSource) {
      const modal = this._$('#infoModal');

      this._$('#nameDetail').text(dataSource.name);
      this._$('#idDetail').text(dataSource.id);
      this._$('#typeDetail').text((dataSource.isExtract) ? 'Extract' : 'Live');

      // Loop through every field in the dataSource and concat it to a string.
      let fieldNamesStr = '';
      dataSource.fields.forEach(function(field) {
        fieldNamesStr += field.name + ', ';
      });
      // Slice off the last ", " for formatting.
      this._$('#fieldsDetail').text(fieldNamesStr.slice(0, -2));

      // Loop through each connection summary and list the connection's
      // name and type in the info field
      const connectionSummaries = await dataSource.getConnectionSummariesAsync();
      let connectionsStr = '';
      connectionSummaries.forEach(function(summary) {
        connectionsStr += summary.name + ': ' + summary.type + ', ';
      });
      // Slice of the last ", " for formatting.
      this._$('#connectionsDetail').text(connectionsStr.slice(0, -2));

      // Loop through each table that was used in creating this datasource
      const activeTables = await dataSource.getActiveTablesAsync();
      let tableStr = '';
      activeTables.forEach(function(table) {
        tableStr += table.name + ', ';
      });
      // Slice of the last ", " for formatting.
      this._$('#activeTablesDetail').text(tableStr.slice(0, -2));

      // @ts-ignore
      modal.modal('show');
    }

    /**
     * Constructs UI that displays all the dataSources in this dashboard
     * given a mapping from dataSourceId to dataSource objects.
     * @param dataSources
     */
    private buildDataSourcesTable(dataSources: DataSource[]) {
      // Clear the table first.
      this._$('#dataSourcesTable > tbody tr').remove();
      const dataSourcesTable = this._$('#dataSourcesTable > tbody')[0];

      // Add an entry to the dataSources table for each dataSource.
      for (const dataSource of dataSources) {
        // @ts-ignore
        const newRow = dataSourcesTable.insertRow(dataSourcesTable.rows.length);
        const nameCell = newRow.insertCell(0);
        const refreshCell = newRow.insertCell(1);
        const infoCell = newRow.insertCell(2);

        const refreshButton = document.createElement('button');
        refreshButton.innerHTML = 'Refresh Now';
        refreshButton.type = 'button';
        refreshButton.className = 'btn btn-primary';
        refreshButton.addEventListener('click', () => DataSources.refreshDataSource(dataSource));

        const infoSpan = document.createElement('span');
        infoSpan.className = 'glyphicon glyphicon-info-sign';
        infoSpan.addEventListener('click', () => this.showModal(dataSource));

        nameCell.innerHTML = dataSource.name;
        refreshCell.appendChild(refreshButton);
        infoCell.appendChild(infoSpan);
      }
    }
  }

  console.log('Initializing DataSources extension.');
  await new DataSources($).initialize();
})();
