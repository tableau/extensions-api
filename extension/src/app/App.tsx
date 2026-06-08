import * as React from 'react';
import { OmnisearchPanel } from '../components/omnisearch/OmnisearchPanel';
import { useExtensionContext } from '../tableau/ExtensionContext';

const headerStyle: React.CSSProperties = {
  padding: '8px',
  borderBottom: '1px solid #ddd',
  fontWeight: 'bold',
  fontSize: '13px',
  flexShrink: 0,
};

const appStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

const contentStyle: React.CSSProperties = {
  flex: 1,
  overflow: 'hidden',
};

export function App(): JSX.Element {
  const { refresh } = useExtensionContext();

  React.useEffect(() => {
    refresh();
  }, [refresh]);

  return (
    <div style={appStyle}>
      <div style={headerStyle}>Tableau Poweruser</div>
      <div style={contentStyle}>
        <OmnisearchPanel />
      </div>
    </div>
  );
}
