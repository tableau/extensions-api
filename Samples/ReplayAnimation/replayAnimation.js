'use strict';
/* eslint-disable */
var React;
var ReactDOM;
/* eslint-enable */

(async () => {
// Calls replayAnimationSync to toggle dashboard animation speed (0.5x, 1.0x, 2.0x) using ReplaySpeedType
  class ReplayAnimation extends React.PureComponent {
    constructor (props = {}) {
      super(props);
      this.handleChange = (event) => {
        switch (event.target.value) {
          case tableau.ReplaySpeedType.Slow: {
            this.setState({ speed: tableau.ReplaySpeedType.Slow });
            break;
          }
          case tableau.ReplaySpeedType.Normal: {
            this.setState({ speed: tableau.ReplaySpeedType.Normal });
            break;
          }
          case tableau.ReplaySpeedType.Fast: {
            this.setState({ speed: tableau.ReplaySpeedType.Fast });
            break;
          }
        }
      };

      this.replayAnimation = () => {
        tableau.extensions.dashboardContent.dashboard.replayAnimationAsync(this.state.speed).then(() => {
          console.log('done');
        });
      };
      this.state = { speed: tableau.ReplaySpeedType.Normal };
      this.handleChange = this.handleChange.bind(this);
    }

    static async initialize () {
      console.log('Initializing extension API');
      await tableau.extensions.initializeAsync();
      ReactDOM.render(React.createElement(ReplayAnimation, null), document.getElementById('replaySelector'));
    }

    render () {
      return (React.createElement(React.Fragment, null,
        React.createElement('div', null,
          React.createElement('select', { value: this.state.speed, onChange: this.handleChange },
            React.createElement('option', { value: tableau.ReplaySpeedType.Slow }, 'Slow'),
            React.createElement('option', { value: tableau.ReplaySpeedType.Normal }, 'Normal'),
            React.createElement('option', { value: tableau.ReplaySpeedType.Fast }, 'Fast')),
          React.createElement('button', { className: 'btn btn-secondary btn-sm', onClick: this.replayAnimation }, 'Replay')
        )
      ));
    }
  }

  console.log('Initializing Replay Animation extension.');
  await ReplayAnimation.initialize();
})();
