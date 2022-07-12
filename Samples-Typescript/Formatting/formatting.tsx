import { TableauEvent } from '@tableau/extensions-api-types';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(async () => {
  interface IFormattingState {
    formattingUpdated: number;
  }

  class Formatting extends React.PureComponent<{}, IFormattingState> {
    public constructor(props = {}) {
      super(props);
      this.state = { formattingUpdated: 0 };
      tableau.extensions.dashboardContent.dashboard.addEventListener(tableau.TableauEventType.WorkbookFormattingChanged,
        (event) => this.onWorkbookFormattingChanged(event));
    }

    public static async initializeAndRender(): Promise<void> {
      // This is the entry point into the extension.  It initializes the Tableau Extensions Api, and then
      // will create elements with appropriate class names to get Tableau formatting
      console.log('Initializing extension API');
      await tableau.extensions.initializeAsync();
      ReactDOM.render(<Formatting></Formatting>, document.getElementById('formattingExample'));
    }

    private onWorkbookFormattingChanged(event: TableauEvent): void {
      this.setState(prevState => {
        return { formattingUpdated: prevState.formattingUpdated + 1 };
      });
    }

    public render(): JSX.Element {
      if (tableau.extensions.environment.workbookFormatting) {
        return this.renderFormatting();
      } else {
        return this.renderInfoMissing();
      }
    }

    private renderFormatting(): JSX.Element {
      const tooltipClassNames = 'tooltiptext ' + tableau.ClassNameKey.Tooltip;
      const formattingChangedText = 'WorkbookFormattingChanged called ' + this.state.formattingUpdated + ' times';

      return <>
        <hr />
        <div>Benton Sans (regular) is the default font used for text elements in the Tableau UI.</div>
        <div className='italic-section'>Benton Sans (italic) is used for generated fields.</div>
        <div className='weight-bold-section'>Benton Sans (bold) is used for Tableau headings.</div>
        <div className='weight-100-section'>Benton Sans (100) is a lightweight alternative</div>
        <h2 className={tableau.ClassNameKey.WorksheetTitle}>Subheader, using tableau-worksheet-title class</h2>
        <text className={tableau.ClassNameKey.Worksheet}>Text, using tableau-worksheet class</text>
        <h3 className='tooltip-header'>Hover to see tooltip text, which is using tableau-tooltip class
          <span className={tooltipClassNames}>Tooltip text, using tableau-tooltip class</span>
        </h3>
        <li className={tableau.ClassNameKey.StoryTitle}>Bullet Point, using tableau-story-title class</li>
        <text className={tableau.ClassNameKey.DashboardTitle}>Text, using tableau-dashboard-title class</text>
        <text className={tableau.ClassNameKey.DashboardTitle}>{formattingChangedText}</text>
      </>;
    }

    private renderInfoMissing(): JSX.Element {
      const message = 'Tableau formatting information for extensions is missing from this version of Tableau.';

      return <div style={{ color: 'blue' }}>{message}</div>;
    }
  }

  await Formatting.initializeAndRender();
})();
