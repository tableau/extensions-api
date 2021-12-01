import {
    DataType,
    Parameter,
    ParameterChangedEvent,
    ParameterDomainRestriction
} from '@tableau/extensions-api-types';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(async () => {

    class Parameters {
        // Avoid globals
        constructor(private _$: JQueryStatic) { }

        // This is the entry point into the extension.  It initializes the Tableau Extensions Api, and then
        // grabs all of the parameters in the workbook, processing each one individually.
        public async initialize() {
            console.log('Waiting for DOM ready');
            await this._$.ready;

            console.log('Initializing extension API');
            await tableau.extensions.initializeAsync();

            const table = this._$('#parameterTable');
            const tableBody = table.children('tbody');

            const parameters = await tableau.extensions.dashboardContent.dashboard.getParametersAsync();
            parameters.forEach(function(p) {
                p.addEventListener(tableau.TableauEventType.ParameterChanged, (event) => this.onParameterChange(event));
                this.parameterRow(p).appendTo(tableBody);
            }, this);

            // This is used to manipulate what part of the UI is visible.  If there are no parameters
            // found, we want to give you a message to tell you that you need to add one, otherwise, we
            // show the table we created.
            this._$('#loading').addClass('hidden');
            if (parameters.length === 0) {
                this._$('#addParameterWarning').removeClass('hidden').addClass('show');
            } else {
                this._$('#parameterTable').removeClass('hidden').addClass('show');
            }

        }

        // When the parameter is changed, we recreate the row with the updated values.  This keeps the code
        // clean, and emulates the approach that something like React does where it "rerenders" the UI with
        // the updated data.
        //
        // To avoid multiple layout processing in the browser, we build the new row unattached to the DOM,
        // and then attach it at the very end.  This helps avoid jank.
        private onParameterChange(parameterChangeEvent: ParameterChangedEvent) {
            parameterChangeEvent.getParameterAsync().then(function(param) {
                const newRow = this.parameterRow(param);
                // tslint:disable-next-line:quotemark
                const oldRow = this._$("tr[data-fieldname='" + param.id + "'");
                oldRow.replaceWith(newRow);
            });
        }

        //
        // DOM creation methods
        //

        // A cell in the table
        private cell(value: JQuery<HTMLElement>) {
            const row = this._$('<td>');
            row.append(value);
            return row;
        }

        // A simple cell that contains a text value
        private textCell(value: string | DataType) {
            const cellElement = this._$('<td>');
            cellElement.text(value);
            return cellElement;
        }

        // The allowable values column has a complex structure, so to make things easier/cleaner,
        // this function creates the subtree for the value of the allowable values column.
        private allowableValues(value: ParameterDomainRestriction) {
            function termKey(key: string) {
                return $('<dt>').attr('id', key).text(key);
            }

            function termValue(termVal: string | number, termDefault: string) {
                return $('<dd>').text(termVal || termDefault);
            }

            const allowable = this._$('<dl class="dl-horizontal">');

            switch (value.type) {
                case tableau.ParameterValueType.All:
                    allowable.append(termKey('Restrictions'));
                    allowable.append(termValue('None', ''));
                    break;
                case tableau.ParameterValueType.List:
                    value.allowableValues.forEach(function(allowableValue) {
                        allowable.append(termKey('List Value'));
                        allowable.append(termValue(allowableValue.formattedValue, ''));
                    });
                    break;
                case tableau.ParameterValueType.Range:
                    allowable.append(termKey('Min Value'));
                    allowable.append(termValue(value.minValue.formattedValue, 'No Min'));
                    allowable.append(termKey('Max Value'));
                    allowable.append(termValue(value.maxValue.formattedValue, 'No Max'));
                    allowable.append(termKey('Step Size'));
                    allowable.append(termValue(value.stepSize, 'default'));
                    break;
                default:
                    console.error('Unknown Parameter value type: ' + value.type);
            }

            return allowable;
        }

        // This function creates a subtree of a row for a specific parameter.
        private parameterRow(p: Parameter) {
            const row = this._$('<tr>').attr('data-fieldname', p.id);
            row.append(this.textCell(p.name));
            row.append(this.textCell(p.dataType));
            row.append(this.textCell(p.currentValue.formattedValue));
            row.append(this.cell(this.allowableValues(p.allowableValues)));

            return row;
        }
    }

    console.log('Initializing Parameters extension.');
    await new Parameters($).initialize();
})();
