require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import SettingsDemoComponent from './SettingsDemo/SettingsDemoComponent';
import EnvironmentDemoComponent from './EnvironmentDemo/EnvironmentDemoComponent'

/*global tableau*/

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isInitializing: true
    };
  }

  componentWillMount() {
    // Once we have mounted, we call to initialize our add-in
    tableau.addIn.initializeAsync().then(() => {
      this.setState({
        isInitializing: false
      });
    });
  }

  render() {
    if (this.state.isInitializing) {
      return (<div className="container">
        <h1>Initializing</h1>
      </div>)
    }

    switch (this.props.hash) {
      case '#settings':
        return (
          <div className="container">
            <SettingsDemoComponent />
          </div>
        );
      case '#environment':
        return (
          <div className="container">
            <EnvironmentDemoComponent />
          </div>
        );
      default:
        return (<h1>Unknown hash {this.props.hash}</h1>);
    }

  }
}

export default AppComponent;
