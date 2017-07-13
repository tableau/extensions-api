require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import SettingsDemoComponent from './SettingsDemo/SettingsDemoComponent';
import EnvironmentDemoComponent from './EnvironmentDemo/EnvironmentDemoComponent'
import GetDataDemoComponent from './GetDataDemo/GetDataDemoComponent';
import SelectedMarksDemoComponent from './SelectedMarksDemo/SelectedMarksDemoComponent'
import LoadIndicatorComponent from './LoadIndicatorComponent';
import FiltersDemoComponent from './FiltersDemo/FiltersDemoComponent';

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
    let initialziePromise = tableau.addIn.initializeAsync();
    if (initialziePromise) {
      initialziePromise.then(() => {
        this.setState({
          isInitializing: false
        });
      });
    } else {
      // Not running inside of Tableau
    }
  }

  render() {
    if (this.state.isInitializing) {
      return (<div className="container">
        <LoadIndicatorComponent msg={'Initializing'} />
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
      case '#getData':
        return (
          <GetDataDemoComponent />
        )
      case '#selectedMarks':
        return (
          <SelectedMarksDemoComponent />
        )
      case '#filtering':
        return (
          <FiltersDemoComponent />
        )
      default:
        return (<h1>Unknown hash {this.props.hash}</h1>);
    }
  }
}

export default AppComponent;
