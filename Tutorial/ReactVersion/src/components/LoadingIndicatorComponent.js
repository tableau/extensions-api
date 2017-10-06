'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

require('styles//LoadingIndicator.css');

class LoadingIndicatorComponent extends React.Component {
  render () {
    return (
      <div className='loadingIndicator'>
        <h3>{this.props.msg}</h3>
        <Spinner name='three-bounce' fadeIn='none' />
      </div>
    );
  }
}

LoadingIndicatorComponent.displayName = 'LoadingIndicatorComponent';
LoadingIndicatorComponent.propTypes = { msg: PropTypes.string.isRequired };

export default LoadingIndicatorComponent;
