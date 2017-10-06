'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

require('styles//SheetList.css');

class SheetListComponent extends React.Component {
  makeSheetButton (sheetName) {
    return (
      <Button key={sheetName} bsStyle='default' block
        onClick={() => this.props.onSelectSheet(sheetName)}>
        {sheetName}
      </Button>
    );
  }

  render () {
    const sheetButtons = this.props.sheetNames.map(sheetName => this.makeSheetButton(sheetName));
    return (
      <div>
        {sheetButtons}
      </div>
    );
  }
}

SheetListComponent.displayName = 'SheetListComponent';

SheetListComponent.propTypes = {
  onSelectSheet: PropTypes.func,
  sheetNames: PropTypes.array
};

export default SheetListComponent;
