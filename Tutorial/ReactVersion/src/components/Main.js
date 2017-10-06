import React from 'react';
import { Button, Glyphicon, Modal } from 'react-bootstrap';

import DataTableComponent from './DataTableComponent';
import LoadingIndicatorComponent from './LoadingIndicatorComponent';
import SheetListComponent from './SheetListComponent';

require('normalize.css/normalize.css');
require('styles/App.css');

// Declare this so our linter knows that tableau is a global object
/* global tableau */

class AppComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoading: true,
      selectedSheet: undefined,
      sheetNames: [],
      rows: [],
      headers: [],
      dataKey: 1,
      filteredFields: [],
      dashboardName: ''
    };

    this.unregisterEventFn = undefined;
  }

  componentWillMount () {
    tableau.extensions.initializeAsync().then(() => {
      const selectedSheet = tableau.extensions.settings.get('sheet');
      const sheetNames = tableau.extensions.dashboardContent.dashboard.worksheets.map(worksheet => worksheet.name);
      const dashboardName = tableau.extensions.dashboardContent.dashboard.name;
      const sheetSelected = !!selectedSheet;
      this.setState({
        isLoading: sheetSelected,
        selectedSheet: selectedSheet,
        sheetNames: sheetNames,
        dashboardName: dashboardName
      });

      if (sheetSelected) {
        this.loadSelectedMarks();
      }
    });
  }

  getSelectedSheet (selectedSheet) {
    const sheetName = selectedSheet || this.state.selectedSheet;
    return tableau.extensions.dashboardContent.dashboard.worksheets.find(worksheet => worksheet.name === sheetName);
  }

  onSelectSheet (sheetName) {
    tableau.extensions.settings.set('sheet', sheetName);
    this.setState({ isLoading: true });
    tableau.extensions.settings.saveAsync().then(() => {
      this.setState({ selectedSheet: sheetName, filteredFields: [] }, this.loadSelectedMarks.bind(this));
    });
  }

  loadSelectedMarks () {
    if (this.unregisterEventFn) {
      this.unregisterEventFn();
    }

    const worksheet = this.getSelectedSheet();
    worksheet.getSelectedMarksAsync().then(marks => {
      // Get the first DataTable for our selected marks (usually there is just one)
      const worksheetData = marks.data[0];

      // Map our data into the format which the data table component expects it
      const rows = worksheetData.data.map(row => row.map(cell => cell.formattedValue));
      const headers = worksheetData.columns.map(column => column.fieldName);

      this.setState({
        rows: rows,
        headers: headers,
        dataKey: Date.now(),
        isLoading: false
      });

      this.forceUpdate();
    });

    this.unregisterEventFn = worksheet.addEventListener(tableau.TableauEventType.MarkSelectionChanged, () => {
      this.setState({ isLoading: true });
      this.loadSelectedMarks();
    });
  }

  onHeaderClicked (fieldName) {
    const headerIndex = this.state.headers.indexOf(fieldName);
    const columnData = this.state.rows.map(row => row[headerIndex]);
    const columnDomain = columnData.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    const worksheet = this.getSelectedSheet();
    this.setState({ isLoading: true });
    worksheet.applyFilterAsync(fieldName, columnDomain, tableau.FilterUpdateType.Replace).then(() => {
      const updatedFilteredFields = this.state.filteredFields;
      updatedFilteredFields.push(fieldName);
      this.setState({ filteredFields: updatedFilteredFields, isLoading: false });
    });
  }

  onResetFilters () {
    const worksheet = this.getSelectedSheet();
    this.setState({ isLoading: true });
    const promises = this.state.filteredFields.map(fieldName => worksheet.clearFilterAsync(fieldName));
    Promise.all(promises).then(() => {
      this.setState({ filteredFields: [], isLoading: false });
    });
  }

  render () {
    if (this.state.isLoading) {
      return (<LoadingIndicatorComponent msg='Loading' />);
    }

    if (!this.state.selectedSheet) {
      return (
        <Modal show>
          <Modal.Header>
            <Modal.Title>Choose a Sheet from <span className='sheet_name'>{this.state.dashboardName}</span></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SheetListComponent sheetNames={this.state.sheetNames} onSelectSheet={this.onSelectSheet.bind(this)} />
          </Modal.Body>
        </Modal>);
    }

    const mainContent = this.state.rows.length > 0
      ? (<DataTableComponent rows={this.state.rows} headers={this.state.headers} dataKey={this.state.dataKey} onHeaderClicked={this.onHeaderClicked.bind(this)} />)
      : (<h4>No marks selected</h4>);

    return (
      <div>
        <div className='summary_header'>
          <h4>
          Marks for <span className='sheet_name'>{this.state.selectedSheet}</span>
            <Button bsStyle='link' onClick={() => this.setState({ selectedSheet: undefined })}><Glyphicon glyph='cog' /></Button>
            <Button bsStyle='link' onClick={this.onResetFilters.bind(this)} disabled={this.state.filteredFields.length === 0}><Glyphicon glyph='repeat' /></Button>
          </h4>
        </div>
        {mainContent}
      </div>
    );
  }
}

export default AppComponent;
