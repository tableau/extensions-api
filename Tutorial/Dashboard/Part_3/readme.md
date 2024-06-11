## Part 3 - Getting and Displaying the Data

Now that the user has selected a sheet, we want to change the UI that is displayed and populate a data grid with the data for the selected marks, or a message indicating no marks are selected. We also want to set up some other UI components, such as hooking up a button for switching which sheet to get data from.

#### Getting the Data

Once the right UI is showing, we need to ask Tableau for the data of the sheet the user picked. The first step is to find the worksheet object by name inside the `tableau.extensions.dashboardContent.dashboard.worksheets` array. After we have the sheet, we call the `worksheet.getSelectedMarksAsync()` API to get the data for the marks that are selected. This is an asynchronous call which returns a promise. We can consult the [Extensions API documentation]({{site.baseurl}}\docs\index.html) to find out what format the returned data will have.

#### Displaying the Data

The final step is to process the returned data into a format that the Data Tables jQuery plugin expects and pass the data over. We do this by mapping the data into rows and column headers before initializing the data table component. [DataTables](https://datatables.net/) has great documentation, so we won't go into details about how we configured the table.

#### Trying it out

![Part 3 Screenshot](../assets/Part_3.gif)

[Next Section (Part 4 - Responding to Selection Changes)](../Part_4/readme.md)