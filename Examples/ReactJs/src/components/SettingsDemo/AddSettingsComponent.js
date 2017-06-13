'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

require('styles//AddSettings.css');

class AddSettingsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      value: ''
    };
  }

  handleChange(e) {
     const name = e.target.name;

    this.setState({
      [name]: e.target.value
    });
  }

  handleAddClicked() {
    this.props.onAddOrUpdateSetting(this.state.key, this.state.value);
    this.setState({
      key: '',
      value: ''
    })
  }

  render() {
    return (
      <div className="addsettings-component">
        <Form inline>
          <h4>Add / Update Setting Value</h4>
          <FormGroup controlId="formInlineKey">
            <ControlLabel>Key</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="foo" name='key' value={this.state.key} onChange={this.handleChange.bind(this)} />
          </FormGroup>
          {' '}
          <FormGroup controlId="formInlineValue">
            <ControlLabel>Value</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="bar" name='value' value={this.state.value} onChange={this.handleChange.bind(this)} />
          </FormGroup>
          {' '}
          <Button disabled={!this.state.key || !this.state.value} bsStyle='success' type="button" onClick={this.handleAddClicked.bind(this)}>
            Add / Update
          </Button>
        </Form>
      </div>
    );
  }
}

AddSettingsComponent.displayName = 'AddSettingsComponent';

AddSettingsComponent.propTypes = { onAddOrUpdateSetting: PropTypes.func.isRequired };

export default AddSettingsComponent;
