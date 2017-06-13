'use strict';

import React from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

require('styles//EnvironmentDemo.css');

class EnvironmentDemoComponent extends React.Component {
  componentWillMount() {
    let properties = {
      'Api Version' : tableau.addIn.environment.getApiVersion(),
      'Context' : tableau.addIn.environment.getContext(),
      'Language' : tableau.addIn.environment.getLanguage(),
      'Locale' : tableau.addIn.environment.getLocale(),
      'Mode' : tableau.addIn.environment.getMode(),
      'Operating System' : tableau.addIn.environment.getOperatingSystem(),
      'Tableau Version' : tableau.addIn.environment.getTableauVersion()
    };

    this.setState((prevState, props) => {
      return { properties: properties };
    })
  }

  buildSetting(label, value) {
    return (<tr>
      <td>{label}</td>
      <td>{value}</td>
    </tr>);  
  }

  render() {
    let values = [];
    for (const key in this.state.properties) {
      values.push(this.buildSetting(key, this.state.properties[key]));
    }

    return (
      <div className="container">
        <div>
          <h2>Frelard Environment Demo</h2>
          <p>This sample demonstrates the ability to get information about the environment an add-in is running in.</p>
        </div>
        <Table className='table-striped'>
          <tbody>
            {values}
          </tbody>
        </Table>
      </div>
    );
  }
}

EnvironmentDemoComponent.displayName = 'EnvironmentDemoComponent';

export default EnvironmentDemoComponent;
