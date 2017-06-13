'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button} from 'react-bootstrap';

require('styles//SettingsTable.css');

class SettingsTableComponent extends React.Component {
  buildSettings() {
    var settingsRows = this.props.settingsValues.map((pair, index) => {
      return (
      <tr key={index}>
        <td>{pair.key}</td>
        <td>{pair.value}</td>
        <td><Button bsStyle='danger' onClick={this.props.onDeleteClicked.bind(null, pair.key)}>Delete</Button></td>
      </tr>
      )
    });

    return settingsRows;
  }

  render() {
    return (
      <div className='settingstable-component'>
        <h4>Current Settings</h4>
        <Table className='table-striped'>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.buildSettings()}
          </tbody>
        </Table>
      </div>
    );
  }
}

SettingsTableComponent.displayName = 'SettingsTableComponent';

// Uncomment properties you need
SettingsTableComponent.propTypes = {
  settingsValues: PropTypes.array.isRequired,
  onDeleteClicked: PropTypes.func.isRequired };

export default SettingsTableComponent;
