import React from 'react';
import Spinner from 'react-spinkit';
import './styles/LoadingIndicator.css';

function LoadingIndicatorComponent(props) {
  return (
    <div className='loadingIndicator'>
      <h3>{props.msg}</h3>
      <Spinner name='three-bounce' fadeIn='none' />
    </div>
  );
}

export default LoadingIndicatorComponent;
