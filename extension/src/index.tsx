import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app/App';
import { ExtensionProvider } from './tableau/ExtensionContext';
import { createTableauBridge } from './tableau/TableauBridge';

async function main(): Promise<void> {
  const bridge = createTableauBridge();
  await bridge.initialize();

  ReactDOM.render(
    <ExtensionProvider bridge={bridge}>
      <App />
    </ExtensionProvider>,
    document.getElementById('root')
  );
}

main().catch((error) => {
  const root = document.getElementById('root');
  if (root) {
    root.textContent = `Extension failed to initialize: ${error instanceof Error ? error.message : String(error)}`;
  }
});
