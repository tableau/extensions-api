import * as React from 'react';
import { listAllFields } from '../../metadata/fieldIndex';
import { useFieldIndex } from '../../hooks/useFieldIndex';
import { useWorkbookMetadata } from '../../hooks/useWorkbookMetadata';
import { FieldTable } from './FieldTable';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '8px',
  boxSizing: 'border-box',
};

const toolbarStyle: React.CSSProperties = {
  display: 'flex',
  gap: '8px',
  marginBottom: '8px',
  flexShrink: 0,
  alignItems: 'center',
};

const buttonStyle: React.CSSProperties = {
  padding: '4px 12px',
  fontSize: '12px',
  cursor: 'pointer',
};

const statusStyle: React.CSSProperties = {
  fontSize: '11px',
  color: '#666',
};

const errorStyle: React.CSSProperties = {
  color: '#c00',
  marginBottom: '8px',
  fontSize: '12px',
};

export function OmnisearchPanel(): JSX.Element {
  const { metadata, isLoading, error, refresh } = useWorkbookMetadata();
  const index = useFieldIndex(metadata);
  const fields = index ? listAllFields(index) : [];

  return (
    <div style={containerStyle}>
      <div style={toolbarStyle}>
        <button style={buttonStyle} onClick={refresh} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Refresh'}
        </button>
        <span style={statusStyle}>
          {isLoading
            ? 'Loading workbook…'
            : index
              ? `${fields.length} field${fields.length === 1 ? '' : 's'}`
              : 'No metadata loaded. Click Refresh to load workbook JSON.'}
        </span>
      </div>

      {error && <div style={errorStyle}>{error}</div>}

      {!isLoading && index && <FieldTable fields={fields} />}
    </div>
  );
}
