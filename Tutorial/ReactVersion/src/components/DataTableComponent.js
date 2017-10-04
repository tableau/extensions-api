'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { AutoSizer, MultiGrid, CellMeasurer, CellMeasurerCache } from 'react-virtualized';

require('styles//DataTable.css');

const cache = new CellMeasurerCache({
  defaultWidth: 150,
  minWidth: 75,
  fixedHeight: true
});

class DataTableComponent extends React.Component {
  render() {
    const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
      let content = null;
      if (rowIndex == 0) {
        content = (<div className='cell header' key={key} style={style}>
          {this.props.headers[columnIndex]}
        </div>);
      } else {
        return (<div className={'cell ' + (rowIndex % 2 == 1 ? 'odd' : 'even')} key={key} style={style}>
          {this.props.rows[rowIndex - 1][columnIndex]}
        </div>);
      }

      return (
        <CellMeasurer
          cache={cache}
          columnIndex={columnIndex}
          key={key}
          parent={parent}
          rowIndex={rowIndex}
        >
          {content}
        </CellMeasurer>
      );
    }

    return (
      <AutoSizer>
        {({ height, width }) => (
          <MultiGrid
            key={this.props.dataKey || -1}
            fixedRowCount={1}
            className='grid'
            cellRenderer={cellRenderer}
            columnCount={this.props.headers.length}
            columnWidth={cache.columnWidth}
            height={height}
            rowCount={this.props.rows.length + 1}
            rowHeight={30}
            width={width}
          />
        )}
      </AutoSizer>
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
