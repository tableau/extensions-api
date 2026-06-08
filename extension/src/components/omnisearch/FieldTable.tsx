import * as React from 'react';
import { FieldRecord } from '../../metadata/types';

const tableWrapperStyle: React.CSSProperties = {
  flex: 1,
  overflow: 'auto',
  border: '1px solid #ddd',
};

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '11px',
};

const thStyle: React.CSSProperties = {
  position: 'sticky',
  top: 0,
  backgroundColor: '#f0f0f0',
  borderBottom: '1px solid #ccc',
  padding: '6px 8px',
  textAlign: 'left',
  fontWeight: 600,
  whiteSpace: 'nowrap',
};

const tdStyle: React.CSSProperties = {
  borderBottom: '1px solid #eee',
  padding: '4px 8px',
  verticalAlign: 'top',
};

const monoStyle: React.CSSProperties = {
  fontFamily: 'monospace',
  fontSize: '10px',
};

const formulaStyle: React.CSSProperties = {
  ...monoStyle,
  maxWidth: '240px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

function displayCaption(field: FieldRecord): string {
  if (field.caption) {
    return field.caption;
  }
  return field.name.replace(/^\[|\]$/g, '');
}

function displayDatasource(field: FieldRecord): string {
  return field.datasourceCaption ?? field.datasource;
}

interface FieldTableProps {
  fields: FieldRecord[];
}

export function FieldTable({ fields }: FieldTableProps): JSX.Element {
  if (fields.length === 0) {
    return <div style={{ padding: '8px', color: '#666' }}>No fields found in workbook metadata.</div>;
  }

  return (
    <div style={tableWrapperStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Caption</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Kind</th>
            <th style={thStyle}>Datasource</th>
            <th style={thStyle}>Role</th>
            <th style={thStyle}>Datatype</th>
            <th style={thStyle}>Hidden</th>
            <th style={thStyle}>Formula</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field) => (
            <tr key={field.id}>
              <td style={tdStyle}>{displayCaption(field)}</td>
              <td style={{ ...tdStyle, ...monoStyle }}>{field.name}</td>
              <td style={tdStyle}>{field.kind}</td>
              <td style={tdStyle}>{displayDatasource(field)}</td>
              <td style={tdStyle}>{field.role ?? '—'}</td>
              <td style={tdStyle}>{field.datatype ?? '—'}</td>
              <td style={tdStyle}>{field.hidden ? 'yes' : 'no'}</td>
              <td style={tdStyle} title={field.formula ?? undefined}>
                <span style={formulaStyle}>{field.formula ?? ''}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
