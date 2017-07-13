'use strict'

import React from 'react';
import { Form, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import Autosuggest from 'react-bootstrap-autosuggest';

/*global tableau*/

class CategoricalFilterComponent extends React.Component {
    constructor(props) {
        super(props);
        let defaultField = Object.keys(this.props.filters)[0];
        let currValue = this.props.filters[defaultField][0];
        this.state = {
            currField: defaultField,
            currValue: currValue
        };
    }

    onFieldChanged(fieldValue) {
        this.setState({
            currField: fieldValue,
            currValue: this.state.currValue
        })
    }

    onValueChanged(filterValue) {
        this.setState({
            currField: this.state.currField,
            currValue: filterValue
        })
    }

    applyFilter() {
        this.props.workSheet.applyFilterAsync(this.state.currField, this.state.currValue, tableau.FilterUpdateType.REPLACE);
    }

    clearFilter() {
        this.props.workSheet.clearFilterAsync(this.state.currField);
    }

    getFilterValues() {
        let values = this.props.filters[this.state.currField];
        if (values == null || values == undefined) {
            return []
        }
        return values;
    }

    getFilterFields() {
        let fields = Object.keys(this.props.filters);
        return fields;
    }

    render() {
        return (
            <div>
                <h4 style={{paddingLeft:20}}> Categorical Filters With AutoCompplete </h4>
                <Form inline>
                    <FormGroup controlId="FilterField"
                        style={{paddingLeft:20, paddingRight:30}}>
                    <ControlLabel>Field</ControlLabel>
                    <Autosuggest
                        datalist={this.getFilterFields()}
                        placeholder="Select Field"
                        onSelect={(field) => this.onFieldChanged(field)}
                        />
                    </FormGroup>
                    <FormGroup controlId="FilterValue"
                        >
                    <ControlLabel>Filter Value</ControlLabel>
                    <Autosuggest
                        datalist={this.getFilterValues()}
                        placeholder="Select Value"
                        onSelect={(value) => this.onValueChanged(value)}
                        />
                    </FormGroup>
                    <FormGroup style={{paddingLeft:30, paddingRight:15, paddingTop:20}}>
                        <Button
                            bsStyle="primary"
                            onClick={() => this.applyFilter()}>
                            Apply Filter
                        </Button>
                    </FormGroup>
                    <FormGroup style={{paddingTop:20}}>
                        <Button bsStyle="warning"
                            onClick={() => this.clearFilter()}>
                            Clear Filter
                        </Button>
                    </FormGroup>
                </Form >
            </div>
        );
    }
}

export default CategoricalFilterComponent