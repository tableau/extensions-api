import React from 'react';
import { Button } from 'react-bootstrap';
import './styles/SheetList.css';

function SheetListComponent(props) {
  const makeSheetButton = (sheetName) => {
    return (
      <Button key={sheetName} variant='light' block
        onClick={() => props.onSelectSheet(sheetName)}>
        {sheetName}
      </Button>
    );
  }

  const sheetButtons = props.sheetNames.map(sheetName => makeSheetButton(sheetName));

  return (
    <div>
      {sheetButtons}
    </div>
  );
}

export default SheetListComponent;
