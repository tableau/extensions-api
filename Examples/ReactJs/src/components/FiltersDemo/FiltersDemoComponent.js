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
        let allSheets = tableau.addIn.dashboardContent.getDashboard().getWorksheets();
        let sheet = allSheets[0];
        sheet.getUnderlyingDataAsync().then((dataTable) => {
            let columns = dataTable.getColumns();
            let data = dataTable.getData();
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
        return (column.getDataType() === 'string') || (column.getDataType() === 'boolean');
    }

    isDate(column) {
        return (column.getDataType() === 'datetime') || (column.getDataType() === 'date');
    }

    constructFilterValues(columns, data) {
        let allFilters = {}
        columns.forEach((column) => {
            let dataValues = [];
            data.forEach((row) => {
                dataValues.push(row[column.getIndex()].value);
            })
            let uniqueDataValues = _.uniqBy(dataValues, (value) => value);
            allFilters[column.getFieldName()] = uniqueDataValues;
        });
        return allFilters;
    }

    constructDateFilters(columns, data) {
        let dateFilters = {};
        columns.forEach((column) => {
            let dataValues = [];
            data.forEach((row) => {
                dataValues.push(new Date(row[column.getIndex()].value));
            })
            let uniqueDataValues = _.uniqBy(dataValues, (value) => value);
            let minDate = _.min(uniqueDataValues);
            let maxDate = _.max(uniqueDataValues);
            dateFilters[column.getFieldName()] = {
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
                <DateRangeFilterComponent
                    filters={this.state.dateFilters}
                    workSheet={this.state.sheet}/>
                <hr/>
                <CategoricalFilterComponent
                    filters={this.state.categoricalFilters}
                    workSheet={this.state.sheet} />
            </div>
        );

    }
}

export default FiltersDemoComponent;