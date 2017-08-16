'use strict';

import React from 'react';
import { Button, Panel, PanelGroup } from 'react-bootstrap';

/*global tableau*/

class ParametersDemoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paramNames: [],
      paramData: {},
      isLoading: true
    };
  }

  componentDidMount() {
    this.loadParameters();
  }

  extractParameterData(p) {
    const result = {};
    Object.keys(Object.getPrototypeOf(p)).forEach(k => result[k] = p[k]);
    return result;
  }

  loadParameters() {
    this.setState({
      isLoading: true
    });

    tableau.addIn.dashboardContent.dashboard.getParametersAsync().then(parameters => {
      parameters.forEach(p => {
        p.addEventListener('parameter-changed', (evt) => {
          evt.getParameterAsync().then(param => {
            debugger;
            const data = this.extractParameterData(param);
            this.setState(prevState => {
              const newState = Object.assign({}, prevState);
              newState.paramData[data.name] = data;
              return newState;
            });
          })
        })
      });

      const paramNames = parameters.map(p => p.name);
      const paramData = {};
      parameters.forEach(p => {
        paramData[p.name] = this.extractParameterData(p);
      });
      
      this.setState({
        paramNames: paramNames,
        paramData: paramData
      });
    });
  }

  buildParameterControl(parameter) {
    let allowableValues = (<div></div>);
    if (parameter.allowableValues.type === 'list') {
      const valueList = parameter.allowableValues.allowableValues.map(v => v._value).join(', ');
      allowableValues = (<dl className='dl-horizontal'>
        <dt key='Options'>Options</dt><dd>{valueList}</dd>
      </dl>);
    } else if (parameter.allowableValues.type === 'range') {
      allowableValues = (<dl className='dl-horizontal'>
        <dt key='Min Value'>Min Value</dt><dd>{parameter.allowableValues.minValue._value || 'No Min'}</dd>
        <dt key='Max Value'>Max Value</dt><dd>{parameter.allowableValues.maxValue._value || 'No Max'}</dd>
        <dt key='Step Size'>Step Size</dt><dd>{parameter.allowableValues.maxValue.stepSize || 'default'}</dd>
      </dl>);
    }

    const values = (<dl className='dl-horizontal'>
      <dt key='Name'>Name</dt><dd>{parameter.name}</dd>
      <dt key='Data Type'>Data Type</dt><dd>{parameter.dataType}</dd>
      <dt key='Current Value Alias'>Current Value Alias</dt><dd>{parameter.currentValue._formattedValue}</dd>
      <dt key='Current Value'>Current Value</dt><dd>{parameter.currentValue._value}</dd>
      <dt key='Allowable Values'>Allowable Values</dt><dd>{parameter.allowableValues.type}</dd>
      {allowableValues}
    </dl>);

    return (<Panel header={parameter.name} eventKey={parameter.name}>
     {values}
    </Panel>);
  }

  render() {
    let parameterControls = this.state.paramNames.map(name => this.buildParameterControl(this.state.paramData[name]));
    // let parameterControls = [];
    return (
      <div className="container">
        <div>
          <h2>Frelard Parameters Demo</h2>
          <p>Shows which parameters are in a workbook.</p>
          <Button onClick={this.loadParameters.bind(this)} >Refresh</Button>
        </div>
        <PanelGroup accordion>
          {parameterControls}
        </PanelGroup>
      </div>
    );
  }
}

ParametersDemoComponent.displayName = 'ParametersDemoComponent';

export default ParametersDemoComponent;
