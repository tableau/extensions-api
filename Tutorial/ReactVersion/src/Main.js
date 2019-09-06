import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import DataTableComponent from './DataTableComponent';
import LoadingIndicatorComponent from './LoadingIndicatorComponent';
import SheetListComponent from './SheetListComponent';
import './styles/Main.css';

// Declare this so our linter knows that tableau is a global object
/* global tableau */

function MainComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSheet, setSelectedSheet] = useState(undefined);
  const [sheetNames, setSheetNames] = useState([]);
  const [rows, setRows] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [dataKey, setDataKey] = useState(1);
  const [filteredFields, setFilteredFields] = useState([]);
  const [dashboardName, setDashboardName] = useState('');

  let unregisterEventFn = undefined;

  useEffect(() => {
    tableau.extensions.initializeAsync().then(() => {
      const selectedSheet = tableau.extensions.settings.get('sheet');
      setSelectedSheet(selectedSheet);

      const sheetNames = tableau.extensions.dashboardContent.dashboard.worksheets.map(worksheet => worksheet.name);
      setSheetNames(sheetNames);

      const dashboardName = tableau.extensions.dashboardContent.dashboard.name;
      setDashboardName(dashboardName);

      const sheetSelected = !!selectedSheet;
      setIsLoading(sheetSelected);

      if (!!selectedSheet) {
        loadSelectedMarks(selectedSheet);
      }

    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSelectedSheet = (sheet) => {
    const sheetName = sheet || selectedSheet;
    return tableau.extensions.dashboardContent.dashboard.worksheets.find(worksheet => worksheet.name === sheetName);
  }

  const onSelectSheet = (sheet) => {
    tableau.extensions.settings.set('sheet', sheet);
    setIsLoading(true);
    tableau.extensions.settings.saveAsync().then(() => {
      setSelectedSheet(sheet);
      setFilteredFields([]);
      loadSelectedMarks(sheet);
    });
  }

  const loadSelectedMarks = (sheet) => {
    if (unregisterEventFn) {
      unregisterEventFn();
    }

    const worksheet = getSelectedSheet(sheet);
    worksheet.getSelectedMarksAsync().then(marks => {
      // Get the first DataTable for our selected marks (usually there is just one)
      const worksheetData = marks.data[0];

      // Map our data into the format which the data table component expects it
      const rows = worksheetData.data.map(row => row.map(cell => cell.formattedValue));
      const headers = worksheetData.columns.map(column => column.fieldName);

      setRows(rows)
      setHeaders(headers)
      setDataKey(Date.now())
      setIsLoading(false)

    });

    unregisterEventFn = worksheet.addEventListener(tableau.TableauEventType.MarkSelectionChanged, () => {
      setIsLoading(true);
      loadSelectedMarks(sheet);
    });
  }

  const onHeaderClicked = (fieldName) => {
    const headerIndex = headers.indexOf(fieldName);
    const columnData = rows.map(row => row[headerIndex]);
    const columnDomain = columnData.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    const worksheet = getSelectedSheet();
    setIsLoading(true);
    worksheet.applyFilterAsync(fieldName, columnDomain, tableau.FilterUpdateType.Replace).then(() => {
      const updatedFilteredFields = filteredFields;
      updatedFilteredFields.push(fieldName);
      setFilteredFields(updatedFilteredFields);
      setIsLoading(false);
    });
  }

  const onResetFilters = () => {
    const worksheet = getSelectedSheet();
    setIsLoading(true);
    const promises = filteredFields.map(fieldName => worksheet.clearFilterAsync(fieldName));
    Promise.all(promises).then(() => {
      setFilteredFields([]);
      setIsLoading(false);
    });
  }

  const mainContent = rows.length > 0
    ? (<DataTableComponent rows={rows} headers={headers} dataKey={dataKey} onHeaderClicked={onHeaderClicked} />)
    : (<h4>No marks selected</h4>);

  let output =
    <div>
      <div className='summary_header'>
        <h4>
          Marks for <span className='sheet_name'>{selectedSheet}</span>
          <Button variant='link' onClick={() => setSelectedSheet(undefined)}><img className='icon' src='./setting.svg' alt='' /></Button>
          <Button variant='link' onClick={onResetFilters} disabled={filteredFields.length === 0}><img className='icon' src='./undo-arrow.svg' alt='' /></Button>
        </h4>
      </div>
      {mainContent}
    </div>

  if (isLoading) {
    output = <LoadingIndicatorComponent msg='Loading' />;
  }

  if (!selectedSheet) {
    output =
      <Modal show>
        <Modal.Header>
          <Modal.Title>Choose a Sheet from <span className='sheet_name'>{dashboardName}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SheetListComponent sheetNames={sheetNames} onSelectSheet={onSelectSheet} />
        </Modal.Body>
      </Modal>;
  }

  return (
    <>
      {output}
    </>
  );
}

export default MainComponent;
