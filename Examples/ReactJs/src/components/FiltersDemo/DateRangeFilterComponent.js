'use strict'

import React from 'react'
import { Form, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import DatePicker from  'react-bootstrap-date-picker';
import Autosuggest from 'react-bootstrap-autosuggest';

class DateRangeFilterComponent extends React.Component {
    constructor(props) {
        super(props);
        let defaultField = Object.keys(this.props.filters)[0];

        let minDate = this.props.filters[defaultField].minDate;
        let maxDate = this.props.filters[defaultField].maxDate;
        this.state = {
            startDate: minDate,
            endDate: maxDate,
            currField: defaultField
        };
    }

    applyFilter() {
        this.props.workSheet.applyRangeFilterAsync(
            this.state.currField,
            {min: this.state.startDate, max: this.state.endDate}
        );
    }

    clearFilter() {
        this.props.workSheet.clearFilterAsync(this.state.currField);
    }

    handleDateChange(startDate, dateStr) {
        let date = new Date(dateStr);
        if (startDate) {
            if (date <= this.props.filters[this.state.currField].minDate || date > this.state.endDate) {
                return;
            }
            this.setState({
                currField: this.state.currField,
                endDate: this.state.endDate,
                startDate: new Date(date)
            });
        } else {
            if (date >= this.props.filters[this.state.currField].maxDate || date < this.state.startDate) {
                return;
            }
            this.setState({
                currField: this.state.currField,
                startDate: this.state.startDate,
                endDate: new Date(date)
            });
        }
    }

    onFieldChanged(field) {
        this.setState({
            currField: field,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        })
    }

    render() {
        return(
            <div>
                <h4 style={{paddingLeft:20}}> Date Range Filters </h4>
                <Form>
                    <FormGroup controlId="FilterField"
                        style={{paddingLeft:20, paddingRight:30}}>
                    <ControlLabel>Field</ControlLabel>
                    <Autosuggest
                        datalist={Object.keys(this.props.filters)}
                        placeholder="Select Field"
                        onSelect={(field) => this.onFieldChanged(field)}
                        />
                    </FormGroup>
                </Form>
                <Form inline>
                    <FormGroup style={{paddingLeft:20, paddingRight:15}}>
                        <ControlLabel style={{paddingRight:5}}>Start Date</ControlLabel>
                        <DatePicker id="start-date" value={this.state.startDate.toISOString()} onChange={(date) => this.handleDateChange(true, date)} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel style={{paddingRight:5}}>End Date</ControlLabel>
                        <DatePicker id="end-date" value={this.state.endDate.toISOString()} onChange={(date) => this.handleDateChange(false, date)} />
                    </FormGroup>
                </Form>
                <Form inline style={{paddingTop:20}}>
                    <FormGroup style={{paddingLeft:15, paddingRight:15}}>
                        <Button
                            bsStyle="primary"
                            onClick={() => this.applyFilter()}>
                            Apply Filter
                        </Button>
                    </FormGroup>
                    <FormGroup>
                        <Button bsStyle="warning"
                            onClick={() => this.clearFilter()}>
                            Clear Filter
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default DateRangeFilterComponent;