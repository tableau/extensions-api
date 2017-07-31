'use strict'

import React from 'react';
import LoadIndicatorComponent from '../LoadIndicatorComponent';
import _ from 'lodash';

import DateRangeFilterComponent from './DateRangeFilterComponent';
import CategoricalFilterComponent from './CategoricalFilterDemoComponent.js';


/*global tableau*/
class FiltersDemoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoricalFilters: {},
            dateFilters: {},
            sheet: null,
            loading: true
        };
    }

    getUnderlyingData() {
        let allSheets = tableau.addIn.dashboardContent.dashboard.worksheets;
        let sheet = allSheets[0];
        sheet.getUnderlyingDataAsync().then((dataTable) => {
            let columns = dataTable.columns;
            let data = dataTable.data;
            let categoricalColumns = [];
            let dateColumns = [];
            columns.forEach((column) => {
                if (this.isCategorical(column)) {
                    categoricalColumns.push(column);
                }
                if (this.isDate(column)) {
                    dateColumns.push(column);
                }
            });

            let allCategoricalFilters = this.constructFilterValues(categoricalColumns, data);
            let dateFilters = this.constructDateFilters(dateColumns, data);
            this.setState({
                categoricalFilters: allCategoricalFilters,
                dateFilters: dateFilters,
                sheet: sheet,
                loading: false
            });
        });
    }

    isCategorical(column) {
        return (column.dataType === 'string') || (column.dataType === 'boolean');
    }

    isDate(column) {
        return (column.dataType === 'datetime') || (column.dataType === 'date');
    }

    constructFilterValues(columns, data) {
        let allFilters = {}
        columns.forEach((column) => {
            let dataValues = [];
            data.forEach((row) => {
                dataValues.push(row[column.index].value);
            })
            let uniqueDataValues = _.uniqBy(dataValues, (value) => value);
            allFilters[column.fieldName] = uniqueDataValues;
        });
        return allFilters;
    }

    constructDateFilters(columns, data) {
        let dateFilters = {};
        columns.forEach((column) => {
            let dataValues = [];
            data.forEach((row) => {
                dataValues.push(new Date(row[column.index].value));
            })
            let uniqueDataValues = _.uniqBy(dataValues, (value) => value);
            let minDate = _.min(uniqueDataValues);
            let maxDate = _.max(uniqueDataValues);
            dateFilters[column.fieldName] = {
                minDate: minDate,
                maxDate: maxDate
            }
        });
        return dateFilters;
    }

    componentDidMount() {
        this.getUnderlyingData();
    }

    render() {
        if (this.state.loading) {
            return (
                <LoadIndicatorComponent msg='Loading Data' />
            );
        }
        return (
            <div>
                { Object.keys(this.state.dateFilters).length > 0 ?
                <DateRangeFilterComponent
                    filters={this.state.dateFilters}
                    workSheet={this.state.sheet}/>
                : null }
                <hr/>
                { Object.keys(this.state.categoricalFilters).length > 0 ?
                <CategoricalFilterComponent
                    filters={this.state.categoricalFilters}
                    workSheet={this.state.sheet} />
                : null }
            </div>
        );

    }
}

export default FiltersDemoComponent;