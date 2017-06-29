'use strict';

import React from 'react';
import { Button, Tabs, Tab } from 'react-bootstrap'

import GetDataTableComponent from '../GetDataDemo/GetDataTableComponent';

require('styles//SelectedMarksDemo.css');

/*global tabEx*/

class SelectedMarksDemoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: '',
      sheets: []
    };

    this.selectionChangedEvent = this.onSelectionChanged.bind(this);
  }

  handleSelectedMarks(selectedMarks, sheetName, forceChangeSheet) {
    const rows = selectedMarks.map((mark) => mark.getPairs());
    const cols = selectedMarks.length == 0 ? [] : selectedMarks[0].getPairs().map((pair => { return { 'label' : pair.fieldName}; }));

    const result = {
      rows: rows,
      cols: cols,
      dataKey: Math.random()
    };

    this.setState({
      [sheetName]: result,
      selectedTab: rows.length > 0 || forceChangeSheet ? sheetName : this.state.selectedTab
    });
  }

  onSelectionChanged(marksEvent) {
    console.log("changed");
    const sheetName = marksEvent.getWorksheet().getName();
    marksEvent.getMarksAsync().then((selectedMarks) => {
      this.handleSelectedMarks(selectedMarks, sheetName, true);
    });
  }

  reload() {
    let allSheets = tabEx.addIn.dashboardContent.getDashboard().getWorksheets();
    const sheets = allSheets.map((sheet) => sheet.getName());

    console.log(sheets);

    this.setState({
      sheets: sheets
    });

    // Fetch the selected marks for every sheet
    for(const sheet of allSheets) {
      const sheetName = sheet.getName();
      sheet.getSelectedMarksAsync().then((selectedMarks) => {
        this.handleSelectedMarks(selectedMarks, sheetName, false);
      });

      sheet.getEventListenerManager().addEventListener(tabEx.TableauEventName.MARKS_SELECTION, this.selectionChangedEvent);
    }
  }

  componentDidMount() {
    this.reload();
  }

  makeMarkTable(sheetName, sheetState) {
    let markCount = 0;
    let rows = [];
    let cols = [];
    let dataKey = -1;
    if (sheetState) {
      rows = sheetState.rows;
      cols = sheetState.cols;
      dataKey = sheetState.dataKey;
      markCount = rows.length;
    }

    // Build up our table
    let table = null;

    if (markCount > 0) {
      // const rows = selectedMarks.map((mark) => mark.getPairs());
      // const cols = selectedMarks[0].getPairs().map((pair => { return { 'label' : pair.fieldName}; }));
      table = (
        <div className='dataTable'>
          <GetDataTableComponent dataKey={dataKey} rows={rows} headers={cols} />
        </div>);
    } else {
      table = (<div className='dataTable'><p>No Marks Selected</p></div>);
    }

    return (
      <Tab key={sheetName} eventKey={sheetName} title={sheetName + " (" + markCount + ")"}>
        {table}
      </Tab>);
  }

  handleSelect(key) {
    this.setState({
      selectedTab: key
    });
  }

  render() {
    return (
      <div>
        <Tabs id="controlled-tab-example"  activeKey={this.state.selectedTab} onSelect={this.handleSelect.bind(this)}>
          {this.state.sheets.map(sheetName => this.makeMarkTable(sheetName, this.state[sheetName]))}
        </Tabs>
      </div>
    );
  }
}

SelectedMarksDemoComponent.displayName = 'SelectedMarksDemoComponent';

export default SelectedMarksDemoComponent;
