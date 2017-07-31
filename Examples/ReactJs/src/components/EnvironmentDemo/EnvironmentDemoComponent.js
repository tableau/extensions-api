'use strict';

import React from 'react';
import { Table } from 'react-bootstrap';

require('styles//EnvironmentDemo.css');

/*global tableau*/

class EnvironmentDemoComponent extends React.Component {
  componentWillMount() {
    let properties = {
      'Api Version': tableau.addIn.environment.apiVersion,
      'Context': tableau.addIn.environment.context,
      'Language': tableau.addIn.environment.language,
      'Locale': tableau.addIn.environment.locale,
      'Mode': tableau.addIn.environment.mode,
      'Operating System': tableau.addIn.environment.operatingSystem,
      'Tableau Version': tableau.addIn.environment.tableauVersion
    };

    this.setState(() => {
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
