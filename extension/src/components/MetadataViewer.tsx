import * as React from 'react';
import { useWorkbookMetadata } from '../hooks/useWorkbookMetadata';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '8px',
  boxSizing: 'border-box'
};

const toolbarStyle: React.CSSProperties = {
  display: 'flex',
  gap: '8px',
  marginBottom: '8px',
  flexShrink: 0
};

const buttonStyle: React.CSSProperties = {
  padding: '4px 12px',
  fontSize: '12px',
  cursor: 'pointer'
};

const preStyle: React.CSSProperties = {
  flex: 1,
  margin: 0,
  padding: '8px',
  overflow: 'auto',
  backgroundColor: '#f5f5f5',
  border: '1px solid #ddd',
  fontSize: '11px',
  fontFamily: 'monospace',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word'
};

const errorStyle: React.CSSProperties = {
  color: '#c00',
  marginBottom: '8px',
  fontSize: '12px'
};

const statusStyle: React.CSSProperties = {
  fontSize: '11px',
  color: '#666',
  marginBottom: '4px'
};

export function MetadataViewer(): JSX.Element {
  const { metadata, isLoading, isDirty, error, refresh, save } = useWorkbookMetadata();
  const [confirmSave, setConfirmSave] = React.useState(false);

  const handleSave = async () => {
    if (!confirmSave) {
      setConfirmSave(true);
      return;
    }
    setConfirmSave(false);
    await save();
  };

  const handleRefresh = async () => {
    setConfirmSave(false);
    await refresh();
  };

  return (
    <div style={containerStyle}>
      <div style={toolbarStyle}>
        <button style={buttonStyle} onClick={handleRefresh} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Refresh'}
        </button>
        <button
          style={buttonStyle}
          onClick={handleSave}
          disabled={isLoading || !metadata || !isDirty}
        >
          {confirmSave ? 'Confirm Save to Tableau' : 'Apply to Tableau'}
        </button>
      </div>

      {confirmSave && (
        <div style={errorStyle}>
          Warning: saving will immediately write metadata to the workbook. Click again to confirm.
        </div>
      )}

      {error && <div style={errorStyle}>{error}</div>}

      <div style={statusStyle}>
        {metadata
          ? `${isDirty ? 'Modified — unsaved changes' : 'Loaded from Tableau'}`
          : 'No metadata loaded. Click Refresh to load workbook JSON.'}
      </div>

      <pre style={preStyle}>
        {metadata ? JSON.stringify(metadata, null, 2) : ''}
      </pre>
    </div>
  );
}
