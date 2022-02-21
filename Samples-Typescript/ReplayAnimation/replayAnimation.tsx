import { ReplaySpeedType } from '@tableau/extensions-api-types';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(async () => {
  interface IReplayAnimationState {
    speed: ReplaySpeedType;
  }

// Calls replayAnimationSync to toggle dashboard animation speed (0.5x, 1.0x, 2.0x) using ReplaySpeedType
  class ReplayAnimation extends React.PureComponent<{}, IReplayAnimationState> {
    constructor(props = {}) {
      super(props);
      this.state = { speed: tableau.ReplaySpeedType.Normal };
      this.handleChange = this.handleChange.bind(this);
    }

    public static async initialize(): Promise<void> {
      console.log('Initializing extension API');
      await tableau.extensions.initializeAsync();
      ReactDOM.render(<ReplayAnimation></ReplayAnimation>, document.getElementById('replaySelector'));
    }

    public render(): JSX.Element {
      return (
        <>
          <div>
            <select value={this.state.speed} onChange={this.handleChange}>
              <option value={tableau.ReplaySpeedType.Slow}>Slow</option>
              <option value={tableau.ReplaySpeedType.Normal}>Normal</option>
              <option value={tableau.ReplaySpeedType.Fast}>Fast</option>
            </select>
            <button className='btn btn-secondary btn-sm' onClick={this.replayAnimation}>Replay</button>
          </div>
        </>
      );
    }

    private handleChange = (event) => {
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
    }

    private replayAnimation = () => {
      tableau.extensions.dashboardContent.dashboard.replayAnimationAsync(this.state.speed).then(() => {
        console.log('done');
      });
    }
  }

  await ReplayAnimation.initialize();
})();
