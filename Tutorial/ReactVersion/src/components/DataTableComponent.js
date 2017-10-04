'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { AutoSizer, MultiGrid } from 'react-virtualized';

require('styles//DataTable.css');

class DataTableComponent extends React.Component {
  render() {
    const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
      if (rowIndex == 0) {
        return (<div className='cell header' key={key} style={style}>
          {this.props.headers[columnIndex]}
        </div>);
      } else {
        return (<div className={'cell ' + (rowIndex % 2 == 1 ? 'odd' : 'even')} key={key} style={style}>
          {this.props.rows[rowIndex - 1][columnIndex]}
        </div>);
      }
    }

    return (
      <div className="dataTable">
        <AutoSizer>
          {({ height, width }) => (
            <MultiGrid
              key={this.props.dataKey || -1}
              fixedRowCount={1}
              className='grid'
              cellRenderer={cellRenderer}
              columnCount={this.props.headers.length}
              columnWidth={150}
              height={height}
              rowCount={this.props.rows.length + 1}
              rowHeight={30}
              width={width}
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}

DataTableComponent.displayName = 'DataTableComponent';

DataTableComponent.propTypes = {
  rows: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
  dataKey: PropTypes.number
};

export default DataTableComponent;
