'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { AutoSizer, Grid, CellMeasurer, CellMeasurerCache } from 'react-virtualized';

require('styles//GetDataTable.css');

const cache = new CellMeasurerCache({
  defaultWidth: 150,
  minWidth: 75,
  fixedHeight: true
});

class GetDataTableComponent extends React.Component {
  render() {
    const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
      let content = null;
      if (rowIndex == 0) {
        content = (<div className='cell header' key={key} style= {style}>
          { this.props.headers[columnIndex].label }
        </div>);
      } else {
        return (<div className={'cell ' + (rowIndex %2 == 1 ? 'odd' : 'even')} key={key} style={style}>
          { this.props.rows[rowIndex - 1][columnIndex].formattedValue }
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
        <Grid
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

GetDataTableComponent.displayName = 'GetDataTableComponent';

// Uncomment properties you need
GetDataTableComponent.propTypes = {
  rows: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired
};
// GetDataTableComponent.defaultProps = {};

export default GetDataTableComponent;
