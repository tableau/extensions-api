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

const valueStyle: React.CSSProperties = {
  ...monoStyle,
  maxWidth: '240px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

function displayFieldName(field: FieldRecord): string {
  if (field.fieldName) {
    return field.fieldName;
  }
  return field.fieldId.replace(/^\[|\]$/g, '');
}

function displayDatasource(field: FieldRecord): string {
  return field.datasourceCaption ?? field.datasource;
}

function displaySourceField(field: FieldRecord): string {
  return field.sourceFieldName ?? '—';
}

function displayFormat(field: FieldRecord): string {
  return field.numberFormat ?? 'default';
}

function displayAggregation(field: FieldRecord): string {
  return field.defaultAggregation ?? 'default';
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
            <th style={thStyle}>Field Name</th>
            <th style={thStyle}>Field ID</th>
            <th style={thStyle}>Field Type</th>
            <th style={thStyle}>Datasource</th>
            <th style={thStyle}>Role</th>
            <th style={thStyle}>Datatype</th>
            <th style={thStyle}>Hidden</th>
            <th style={thStyle}>Used</th>
            <th style={thStyle}>Source field</th>
            <th style={thStyle}>Format</th>
            <th style={thStyle}>Aggregation</th>
            <th style={thStyle}>Value</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field) => (
            <tr key={field.id}>
              <td style={tdStyle}>{displayFieldName(field)}</td>
              <td style={{ ...tdStyle, ...monoStyle }}>{field.fieldId}</td>
              <td style={tdStyle}>{field.fieldType}</td>
              <td style={tdStyle}>{displayDatasource(field)}</td>
              <td style={tdStyle}>{field.role ?? '—'}</td>
              <td style={tdStyle}>{field.datatype ?? '—'}</td>
              <td style={tdStyle}>{field.hidden ? 'yes' : 'no'}</td>
              <td style={tdStyle}>{field.used ? 'yes' : 'no'}</td>
              <td style={tdStyle}>{displaySourceField(field)}</td>
              <td style={{ ...tdStyle, ...monoStyle }} title={field.numberFormat ?? undefined}>
                {displayFormat(field)}
              </td>
              <td style={tdStyle}>{displayAggregation(field)}</td>
              <td style={tdStyle} title={field.value ?? undefined}>
                <span style={valueStyle}>{field.value ?? ''}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
