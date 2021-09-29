import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(async () => {

  class Formatting {
    // This is the entry point into the extension.  It initializes the Tableau Extensions Api, and then
    // will create elements with appropriate class names to get Tableau formatting
    public async initialize() {
      console.log('Initializing extension API');
      await tableau.extensions.initializeAsync();
      await this.Render();
    }

    private async Render() {
      const tooltipClassNames = 'tooltiptext ' + tableau.ClassNameKey.Tooltip;

      ReactDOM.render(<>
        <h2 className={tableau.ClassNameKey.WorksheetTitle}>Subheader, using tableau-worksheet-title class</h2>
        <text className={tableau.ClassNameKey.Worksheet}>Text, using worksheet class</text>
        <h3 className='tooltip-header'>Hover to see tooltip text, which is using tableau-tooltip class
            <span className={tooltipClassNames}>Tooltip text, using tableau-tooltip class</span>
        </h3>
        <li className={tableau.ClassNameKey.StoryTitle}>Bullet Point, using tableau-story-title class</li>
        <text className={tableau.ClassNameKey.DashboardTitle}>Text, using tableau-dashboard-title class</text>
      </>, document.getElementById('formattingExample'));
    }
  }

  console.log('Initializing Formatting extension.');
  await new Formatting().initialize();
})();
