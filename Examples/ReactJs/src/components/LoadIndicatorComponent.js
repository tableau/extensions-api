'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

require('styles//LoadIndicator.css');

class LoadIndicatorComponent extends React.Component {
  render() {
    return (
      <div className='loadingIndicator'>
        <h3>{this.props.msg}</h3>
        <Spinner name='three-bounce' fadeIn='none' />
      </div>
    );
  }
}

LoadIndicatorComponent.displayName = 'LoadIndicatorComponent';

LoadIndicatorComponent.propTypes = { msg: PropTypes.string.isRequired };

export default LoadIndicatorComponent;
