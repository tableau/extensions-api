'use strict';

require('styles//SettingsDemo.css');

import React from 'react';
import AddSettingsComponent from './AddSettingsComponent';
import SettingsTableComponent from './SettingsTableComponent';
import { Button } from 'react-bootstrap';

/*global tableau*/

class SettingsDemoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModified: false,
      settingsValues: []
    }
  }

  computeSettingsState() {
    var allSettings = tableau.addIn.settings.getAll();
    var rows = [];
    for (var key in allSettings) {
      rows.push({
        key: key,
        value: allSettings[key]
      });
    }

    this.setState({
      settingsValues: rows,
      isModified: tableau.addIn.settings.isModified
    });
  }

  componentWillMount() {
    this.computeSettingsState();
  }

  addOrUpdateNewSetting(key, value) {
    tableau.addIn.settings.set(key, value);
    this.computeSettingsState();
  }

  deleteSetting(key) {
    tableau.addIn.settings.erase(key);
    this.computeSettingsState();
  }

  saveSettings() {
    tableau.addIn.settings.saveAsync().then(() => {
      this.computeSettingsState();
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <h2>Frelard Settings Demo</h2>
          <p>This sample demonstrates the ability to add, update, delete, and save the settings values of an add-in instance.</p>
        </div>
        <SettingsTableComponent settingsValues={this.state.settingsValues} onDeleteClicked={this.deleteSetting.bind(this)} />

        <AddSettingsComponent onAddOrUpdateSetting={this.addOrUpdateNewSetting.bind(this)} />

        <br />
        <Button bsStyle='primary' onClick={this.saveSettings.bind(this)} block disabled={!this.state.isModified}>
          {this.state.isModified ? 'Save Changes' : 'No Changes To Save'}
        </Button>

      </div>
    );
  }
}

export default SettingsDemoComponent;
