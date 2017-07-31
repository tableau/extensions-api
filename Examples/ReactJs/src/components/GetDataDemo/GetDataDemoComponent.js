'use strict';

import React from 'react';
import GetDataConfigurationComponent from './GetDataConfigurationComponent';
import GetDataTableComponent from './GetDataTableComponent';
import { Button, Glyphicon } from 'react-bootstrap'

import LoadIndicatorComponent from '../LoadIndicatorComponent';

require('react-virtualized/styles.css');
require('styles//GetDataDemo.css');

/*global tableau*/

class GetDataDemoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showingDialog: false,
      loading: false,
      sheets: [],
      columns: [],
      rows: []
    };
  }

  loadFromTableau() {
    let allSheets = tableau.addIn.dashboardContent.dashboard.worksheets;
    const sheetNames = allSheets.map((sheet) => sheet.name);
    var settingsString = tableau.addIn.settings.get('getDataSettings');
    if (!!settingsString) {
      const settings = JSON.parse(settingsString);
      this.setState({
        settings: settings,
        sheets: sheetNames
      });

      // Trigger getting data
      this.getData(settings);
    } else {
      // If we don't have valid configuration, show the config dialog
      this.setState({
        showingDialog: true,
        sheets: sheetNames
      });
    }
  }

  componentDidMount() {
    this.loadFromTableau();
  }

  getData(settings) {
    // Here's where we actually use the getData API

    // First find the worksheet in the list of worksheets
    const sheet = tableau.addIn.dashboardContent.dashboard.worksheets.find(
      (sheet) => sheet.name == settings.sheetName);

    if (!sheet) {
      // TODO - error
    }

    this.setState({
      loading: true
    });
    const params = Object.assign({}, settings); // Just copy over all of these to get the properties
    let promise = settings.type == 'summary' ? sheet.getSummaryDataAsync(params) : sheet.getUnderlyingDataAsync(params);
    promise.then((dataTable) => {
      const columns = dataTable.columns.map((col) => ({
        label: col.fieldName,
        dataKey: 'FormattedValue'
      }));

      const rows = dataTable.data;

      this.setState({
        columns: columns,
        rows: rows,
        loading: false
      });
    })
  }

  onConfigureClicked() {
    this.setState({
      showingDialog: true
    });
  }

  onCancelDialog() {
    this.setState({
      showingDialog: false
    });
  }

  onSaveDialog(settings) {
    // Persist the saved settings into the workbook
    tableau.addIn.settings.set('getDataSettings', JSON.stringify(settings));
    this.setState({
      showingDialog: false,
      loading: true,
      settings: settings
    }, () => this.getData(settings));

    tableau.addIn.settings.saveAsync().then(() => {
      // After we save, we should reload the data table with our settings
      this.getData(settings);
    });
  }

  buildColumns() {
    return this.state.columns.map((col) => {
      return (<Column
        key={col.label}
        label={col.label}
        dataKey={col.label}
        width={100}
        flexGrow={1}
        flexShrink={0}
      />);
    });
  }

  render() {
    if (this.state.loading) {
      return (<LoadIndicatorComponent msg='Loading Data' />);
    } else {
      const summary = (this.state.settings && this.state.settings.sheetName) ? (
        <div className='getDataSummary'>
          <Button bsSize='link' onClick={() => this.getData(this.state.settings)}><Glyphicon glyph='refresh' /></Button>
          <div className='description'>
            {'Displaying '}
            <span className='interesting'>{this.state.rows.length}</span>
            {' rows from the '}
            <span className='interesting'>{this.state.settings.sheetName}</span>
            {' worksheet'}
          </div>
          <Button bsStyle='link' onClick={this.onConfigureClicked.bind(this)}>Configure</Button>
        </div>
      ) : null;

      return (
        <div className="getdatademo-component">
          <GetDataConfigurationComponent
            show={this.state.showingDialog}
            onCancelClick={this.onCancelDialog.bind(this)}
            onSaveClick={this.onSaveDialog.bind(this)}
            initialSettings={this.state.settings}
            sheetNames={this.state.sheets} />

          {summary}

          <div className='dataTable'>
            <GetDataTableComponent
              rows={this.state.rows}
              headers={this.state.columns}
            />
          </div>
        </div>
      );
    }
  }
}

GetDataDemoComponent.displayName = 'GetDataDemoComponent';

export default GetDataDemoComponent;
