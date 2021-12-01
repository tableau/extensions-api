import {
    CategoricalFilter,
    Filter,
    RangeFilter,
    RelativeDateFilter,
    TableauEvent
} from '@tableau/extensions-api-types';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(async () => {
    class Filtering {

        private unregisterHandlerFunctions = [];

        // Avoid globals
        constructor(private _$: JQueryStatic) { }

        public async initialize() {
            console.log('Waiting for DOM ready');
            await this._$.ready;

            console.log('Initializing extension API');
            await tableau.extensions.initializeAsync();

            // Fetch Filters
            this.fetchFilters();

            // Add button handlers for clearing filters.
            this._$('#clear').click(() => this.clearAllFilters());
        }

        private async fetchFilters() {
            // While performing async task, show loading message to user.
            this._$('#loading').addClass('show');

            // Since filter info is attached to the worksheet, we will perform
            // one async call per worksheet to get every filter used in this
            // dashboard.  This demonstrates the use of Promise.all to combine
            // promises together and wait for each of them to resolve.
            const filterFetchPromises: Array<Promise<Filter[]>> = [];

            // List of all filters in a dashboard.
            const dashboardfilters: Filter[] = [];

            // To get filter info, first get the dashboard.
            const dashboard = tableau.extensions.dashboardContent.dashboard;

            // Whenever we restore the filters table, remove all save handling functions,
            // since we add them back later in fetchFilters()
            this.unregisterHandlerFunctions.forEach(function(unregisterHandlerFunction) {
                unregisterHandlerFunction();
            });

            this.unregisterHandlerFunctions = [];
            // Then loop through each worksheet and get its filters, save promise for later.
            dashboard.worksheets.forEach(function(worksheet) {
                filterFetchPromises.push(worksheet.getFiltersAsync());

                // Add filter event to each worksheet.  AddEventListener returns a function that will
                // remove the event listener when called.
                const unregisterHandlerFunction =
                    worksheet.addEventListener(
                        tableau.TableauEventType.FilterChanged, (event) => this.filterChangedHandler(event));
                this.unregisterHandlerFunctions.push(unregisterHandlerFunction);
            }, this);

            // Now, we call every filter fetch promise, and wait for all the results
            // to finish before displaying the results to the user.
            const fetchResults = await Promise.all(filterFetchPromises);
            fetchResults.forEach(function(filtersForWorksheet) {
                filtersForWorksheet.forEach(function(filter) {
                    dashboardfilters.push(filter);
                });
            });

            this.buildFiltersTable(dashboardfilters);
        }

        // This is a handling function that is called anytime a filter is changed in Tableau.
        private filterChangedHandler(filterEvent: TableauEvent) {
            // Just reconstruct the filters table whenever a filter changes.
            // This could be optimized to add/remove only the different filters.
            this.fetchFilters();
        }

        // Constructs UI that displays all the dataSources in this dashboard
        // given a mapping from dataSourceId to dataSource objects.
        private buildFiltersTable(filters: Filter[]) {
            // Clear the table first.
            this._$('#filtersTable > tbody tr').remove();
            const filtersTable = this._$('#filtersTable > tbody')[0];

            filters.forEach(function(filter) {
                // @ts-ignore
                const newRow = filtersTable.insertRow(filtersTable.rows.length);
                const nameCell = newRow.insertCell(0);
                const worksheetCell = newRow.insertCell(1);
                const typeCell = newRow.insertCell(2);
                const valuesCell = newRow.insertCell(3);

                const valueStr = this.getFilterValues(filter);

                nameCell.innerHTML = filter.fieldName;
                worksheetCell.innerHTML = filter.worksheetName;
                typeCell.innerHTML = filter.filterType;
                valuesCell.innerHTML = valueStr;
            }, this);

            this.updateUIState(Object.keys(filters).length > 0);
        }

        // This returns a string representation of the values a filter is set to.
        // Depending on the type of filter, this string will take a different form.
        private getFilterValues(filter: Filter) {
            let filterValues = '';

            switch (filter.filterType) {
                case tableau.FilterType.Categorical:
                    const categoricalFilter = filter as CategoricalFilter;
                    categoricalFilter.appliedValues.forEach(function(value) {
                        filterValues += value.formattedValue + ', ';
                    });
                    break;
                case tableau.FilterType.Range:
                    // A range filter can have a min and/or a max.
                    const rangeFilter = filter as RangeFilter;
                    if (rangeFilter.minValue) {
                        filterValues += 'min: ' + rangeFilter.minValue.formattedValue + ', ';
                    }

                    if (rangeFilter.maxValue) {
                        filterValues += 'min: ' + rangeFilter.maxValue.formattedValue + ', ';
                    }
                    break;
                case tableau.FilterType.RelativeDate:
                    const relDateFilter = filter as RelativeDateFilter;
                    filterValues += 'Period: ' + relDateFilter.periodType + ', ';
                    filterValues += 'RangeN: ' + relDateFilter.rangeN + ', ';
                    filterValues += 'Range Type: ' + relDateFilter.rangeType + ', ';
                    break;
                default:
            }

            // Cut off the trailing ", "
            return filterValues.slice(0, -2);
        }

        // This function removes all filters from a dashboard.
        private clearAllFilters() {
            // While performing async task, show loading message to user.
            this._$('#loading').removeClass('hidden').addClass('show');
            this._$('#filtersTable').removeClass('show').addClass('hidden');

            const dashboard = tableau.extensions.dashboardContent.dashboard;

            dashboard.worksheets.forEach(function(worksheet) {
                worksheet.getFiltersAsync().then(async (filtersForWorksheet) => {
                    const filterClearPromises = [];

                    filtersForWorksheet.forEach(function(filter) {
                        filterClearPromises.push(worksheet.clearFilterAsync(filter.fieldName));
                    });

                    // Same pattern as in fetchFilters, wait until all promises have finished
                    // before updating the UI state.
                    await Promise.allSettled(filterClearPromises);
                    this.updateUIState(false);
                });
            }, this);
        }

        // This helper updates the UI depending on whether or not there are filters
        // that exist in the dashboard.  Accepts a boolean.
        private updateUIState(filtersExist: boolean) {
            this._$('#loading').addClass('hidden');
            if (filtersExist) {
                this._$('#filtersTable').removeClass('hidden').addClass('show');
                this._$('#noFiltersWarning').removeClass('show').addClass('hidden');
            } else {
                this._$('#noFiltersWarning').removeClass('hidden').addClass('show');
                this._$('#filtersTable').removeClass('show').addClass('hidden');
            }
        }

    }

    console.log('Initializing Filtering extension.');
    await new Filtering($).initialize();
})();
