'use strict';

import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import { Form, FormGroup, FormControl, ControlLabel, Button, Checkbox, Radio, Modal } from 'react-bootstrap';

require('react-select/dist/react-select.css');
require('styles//GetDataConfiguration.css');

class GetDataConfigurationComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.initialSettings;
  }

  sheetNameChange(e) {
    this.setState({
      sheetName: e && e.value
    });
  }

  typeChange(e) {
    this.setState({
      type: e.target.value
    });
  }

  checkboxChange(e) {
    this.setState({
      [e.target.value]: e.target.checked
    });
  }

  maxRowsChanged(e) {
    this.setState({
      maxRows: e.target.value
    });
  }

  saveClicked() {
    const settings = this.getAndValidateSettings();
    if (settings) {
      this.props.onSaveClick(settings);
    }
  }

  getAndValidateSettings() {
    let settings = Object.assign({}, this.state);
    if (!settings.sheetName) {
      return undefined; // Invalid state
    }

    return settings;
  }

  render() {
    const sheetNames = this.props.sheetNames.map((name) => ({'value': name, 'label': name}));

    return (
      <Modal show={this.props.show} >
        <Modal.Header closeButton onHide={this.props.onCancelClick}>
          <Modal.Title>Configure getData</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup controlId="formInlineSheet">
              <ControlLabel>Target Sheet</ControlLabel>
              <Select
                placeholder='Select Sheet...'
                name="select-sheet-select"
                value={this.state.sheetName}
                options={sheetNames}
                onChange={this.sheetNameChange.bind(this)}
                />
            </FormGroup>
            <FormGroup controlId="formInlineType">
              <ControlLabel>Data Type:</ControlLabel>
              <FormGroup>
                <Radio name="dataType" value='summary' onChange={this.typeChange.bind(this)} inline checked={this.state.type == 'summary'}>Summary Data</Radio>
                  {' '}
                <Radio name="dataType" value='underlying' onChange={this.typeChange.bind(this)} inline checked={this.state.type == 'underlying'}>Underlying Data</Radio>
              </FormGroup>
            </FormGroup>
            <FormGroup controlId="checks">
              <Checkbox value='ignoreAliases' checked={this.state.ignoreAliases} onChange={this.checkboxChange.bind(this)}>Ignore Aliases</Checkbox>
              <Checkbox value='ignoreSelection' checked={this.state.ignoreSelection} onChange={this.checkboxChange.bind(this)}>Ignore Selection</Checkbox>
              <Checkbox value='includeAllColumns' checked={this.state.includeAllColumns} onChange={this.checkboxChange.bind(this)} disabled={this.state.type == 'summary'}>Include All Columns</Checkbox>
            </FormGroup>
            <FormGroup controlId="maxRows">
              <ControlLabel>Max Rows</ControlLabel>
                <FormControl
                  
                  type="number"
                  placeholder="10000"
                  value={this.state.maxRows == '0' ? '' : this.state.maxRows}
                  onChange={this.maxRowsChanged.bind(this)}
                />
              </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onCancelClick}>Close</Button>
          <Button bsStyle='primary' onClick={this.saveClicked.bind(this)}  disabled={!this.getAndValidateSettings()}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

GetDataConfigurationComponent.displayName = 'GetDataConfigurationComponent';

GetDataConfigurationComponent.propTypes = {
  sheetNames: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  initialSettings: PropTypes.object
};

GetDataConfigurationComponent.defaultProps = {
  sheetNames: ['one', 'two', 'three'],
  initialSettings: {
    sheetName: '',
    type: 'summary',
    ignoreAliases: false,
    ignoreSelection: false,
    includeAllColumns: false,
    maxRows: '0'
  }
};

export default GetDataConfigurationComponent;
