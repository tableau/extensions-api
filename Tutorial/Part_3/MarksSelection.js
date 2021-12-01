'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function() {
    // Use the jQuery document ready signal to know when everything has been initialized
    $(document).ready(function() {
        // Tell Tableau we'd like to initialize our extension
        tableau.extensions.initializeAsync().then(function() {
            // Once the extension is initialized, ask the user to choose a sheet
            showChooseSheetDialog();

            initializeButtons();
        });
    });

    /**
     * Shows the choose sheet UI. Once a sheet is selected, the data table for the sheet is shown
     */
    function showChooseSheetDialog() {
        // Clear out the existing list of sheets
        $('#choose_sheet_buttons').empty();

        // Set the dashboard's name in the title
        const dashboardName = tableau.extensions.dashboardContent.dashboard.name;
        $('#choose_sheet_title').text(dashboardName);

        // The first step in choosing a sheet will be asking Tableau what sheets are available
        const worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;

        // Next, we loop through all of these worksheets add add buttons for each one
        worksheets.forEach(function(worksheet) {
            // Declare our new button which contains the sheet name
            const button = createButton(worksheet.name);

            // Create an event handler for when this button is clicked
            button.click(function() {
                // Get the worksheet name which was selected
                const worksheetName = worksheet.name;

                // Close the dialog and show the data table for this worksheet
                $('#choose_sheet_dialog').modal('toggle');
                loadSelectedMarks(worksheetName);
            });

            // Add our button to the list of worksheets to choose from
            $('#choose_sheet_buttons').append(button);
        });

        // Show the dialog
        $('#choose_sheet_dialog').modal('toggle');
    }

    function createButton(buttonTitle) {
        const button =
            $(`<button type='button' class='btn btn-default btn-block'>
      ${buttonTitle}
    </button>`);

        return button;
    }

    function loadSelectedMarks(worksheetName) {
        // Get the worksheet object we want to get the selected marks for
        const worksheet = getSelectedSheet(worksheetName);

        // Set our title to an appropriate value
        $('#selected_marks_title').text(worksheet.name);

        // Call to get the selected marks for our sheet
        worksheet.getSelectedMarksAsync().then(function(marks) {
            // Get the first DataTable for our selected marks (usually there is just one)
            const worksheetData = marks.data[0];

            // Map our data into the format which the data table component expects it
            const data = worksheetData.data.map(function(row, index) {
                const rowData = row.map(function(cell) {
                    return cell.formattedValue;
                });

                return rowData;
            });

            const columns = worksheetData.columns.map(function(column) {
                return {
                    title: column.fieldName
                };
            });

            // Populate the data table with the rows and columns we just pulled out
            populateDataTable(data, columns);
        });
    }

    function populateDataTable(data, columns) {
        // Do some UI setup here to change the visible section and reinitialize the table
        $('#data_table_wrapper').empty();

        if (data.length > 0) {
            $('#no_data_message').css('display', 'none');
            $('#data_table_wrapper').append(`<table id='data_table' class='table table-striped table-bordered'></table>`);

            // Do some math to compute the height we want the data table to be
            var top = $('#data_table_wrapper')[0].getBoundingClientRect().top;
            var height = $(document).height() - top - 130;

            // Initialize our data table with what we just gathered
            $('#data_table').DataTable({
                data: data,
                columns: columns,
                autoWidth: false,
                deferRender: true,
                scroller: true,
                scrollY: height,
                scrollX: true,
                dom: "<'row'<'col-sm-6'i><'col-sm-6'f>><'row'<'col-sm-12'tr>>" // Do some custom styling
            });
        } else {
            // If we didn't get any rows back, there must be no marks selected
            $('#no_data_message').css('display', 'inline');
        }
    }

    function initializeButtons() {
        $('#show_choose_sheet_button').click(showChooseSheetDialog);
    }

    function getSelectedSheet(worksheetName) {
        // Go through all the worksheets in the dashboard and find the one we want
        return tableau.extensions.dashboardContent.dashboard.worksheets.find(function(sheet) {
            return sheet.name === worksheetName;
        });
    }
})();