'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  const unregisterHandlerFunctions = [];

  $(document).ready(function () {
    tableau.extensions.initializeAsync().then(function () {
      fetchFilters();

      // Add button handlers for clearing filters.
      $('#clear').click(clearAllFilters);
    }, function (err) {
      // Something went wrong in initialization.
      console.log('Error while Initializing: ' + err.toString());
    });
  });

  function fetchFilters () {
    // While performing async task, show loading message to user.
    $('#loading').addClass('show');

    // Whenever we restore the filters table, remove all save handling functions,
    // since we add them back later in this function.
    unregisterHandlerFunctions.forEach(function (unregisterHandlerFunction) {
      unregisterHandlerFunction();
    });

    // List of all filters in a worksheet.
    const worksheetFilters = [];

    // To get filter info, first get the worksheet.
    const worksheet = tableau.extensions.worksheetContent.worksheet;

    // Get its filters, save promise for later.
    const filterFetchPromise = worksheet.getFiltersAsync();

    // Add filter event to each worksheet.  AddEventListener returns a function that will
    // remove the event listener when called.
    const unregisterHandlerFunction = worksheet.addEventListener(tableau.TableauEventType.FilterChanged, filterChangedHandler);
    unregisterHandlerFunctions.push(unregisterHandlerFunction);

    // Now, we call the filter fetch promise, and wait for all the results
    // to finish before displaying the results to the user.
    filterFetchPromise.then(function (filtersForWorksheet) {
      filtersForWorksheet.forEach(function (filter) {
        worksheetFilters.push(filter);
      });

      buildFiltersTable(worksheetFilters);
    });
  }

  // This is a handling function that is called anytime a filter is changed in Tableau.
  function filterChangedHandler (filterEvent) {
    // Just reconstruct the filters table whenever a filter changes.
    // This could be optimized to add/remove only the different filters.
    fetchFilters();
  }

  // Constructs UI that displays all the dataSources in this worksheet
  // given a mapping from dataSourceId to dataSource objects.
  function buildFiltersTable (filters) {
    // Clear the table first.
    $('#filtersTable > tbody tr').remove();
    const filtersTable = $('#filtersTable > tbody')[0];

    filters.forEach(function (filter) {
      const newRow = filtersTable.insertRow(filtersTable.rows.length);
      const nameCell = newRow.insertCell(0);
      const worksheetCell = newRow.insertCell(1);
      const typeCell = newRow.insertCell(2);
      const valuesCell = newRow.insertCell(3);

      const valueStr = getFilterValues(filter);

      nameCell.innerHTML = filter.fieldName;
      worksheetCell.innerHTML = filter.worksheetName;
      typeCell.innerHTML = filter.filterType;
      valuesCell.innerHTML = valueStr;
    });

    updateUIState(Object.keys(filters).length > 0);
  }

  // This returns a string representation of the values a filter is set to.
  // Depending on the type of filter, this string will take a different form.
  function getFilterValues (filter) {
    let filterValues = '';

    switch (filter.filterType) {
      case 'categorical':
        filter.appliedValues.forEach(function (value) {
          filterValues += value.formattedValue + ', ';
        });
        break;
      case 'range':
        // A range filter can have a min and/or a max.
        if (filter.minValue) {
          filterValues += 'min: ' + filter.minValue.formattedValue + ', ';
        }

        if (filter.maxValue) {
          filterValues += 'max: ' + filter.maxValue.formattedValue + ', ';
        }
        break;
      case 'relative-date':
        filterValues += 'Period: ' + filter.periodType + ', ';
        filterValues += 'RangeN: ' + filter.rangeN + ', ';
        filterValues += 'Range Type: ' + filter.rangeType + ', ';
        break;
      default:
    }

    // Cut off the trailing ", "
    return filterValues.slice(0, -2);
  }

  // This function removes all filters from a worksheet.
  function clearAllFilters () {
    // While performing async task, show loading message to user.
    $('#loading').removeClass('hidden').addClass('show');
    $('#filtersTable').removeClass('show').addClass('hidden');

    const worksheet = tableau.extensions.worksheetContent.worksheet;

    worksheet.getFiltersAsync().then(function (filtersForWorksheet) {
      const filterClearPromises = [];

      filtersForWorksheet.forEach(function (filter) {
        filterClearPromises.push(worksheet.clearFilterAsync(filter.fieldName));
      });

      // Same pattern as in fetchFilters, wait until all promises have finished
      // before updating the UI state.
      Promise.allSettled(filterClearPromises).then(function () {
        updateUIState(false);
      });
    });
  }

  // This helper updates the UI depending on whether or not there are filters
  // that exist in the dashboard.  Accepts a boolean.
  function updateUIState (filtersExist) {
    $('#loading').addClass('hidden');
    if (filtersExist) {
      $('#filtersTable').removeClass('hidden').addClass('show');
      $('#noFiltersWarning').removeClass('show').addClass('hidden');
    } else {
      $('#noFiltersWarning').removeClass('hidden').addClass('show');
      $('#filtersTable').removeClass('show').addClass('hidden');
    }
  }
})();
