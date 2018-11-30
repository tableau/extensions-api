---
title: Get Data from the Dashboard
layout: docs
---

The Extensions API provides methods that you can use to access the data in a dashboard. 
The data you can access includes the summary or aggregated data, that is, the data visible in the worksheet, and also to the underlying data or full data, which can include data from all fields and tables in the data source. If your extension needs to access the full data, there are security implications and your extension needs to declare its intent, so that users of your extension can choose to allow or deny the extension access. See  [Accessing Underlying Data]({{ site.baseurl }}/docs/trex_data_access.html) for more information. 

---
**In this section**

* TOC
{:toc}



# Get data from a worksheet

The Extensions API provides several methods for accessing data from a dashboard. The method you use depends in part upon how you want to use the data. When you have the worksheet object, you can get the summary (aggregated) data or the full or underlying data directly from the worksheet, using these methods:  

`Worksheet.getSummaryDataAsync()`

`Worksheet.getUnderlyingDataAsync()`

The data is returned in a `DataTable` object. The object contains the columns and data values, and information about the data, whether it is underlying or summary data, and in the case of underlying data, whether there is more data than can be returned. 

You can also get the data from the selected marks in the worksheet, or the marks that are currently highlighted in the worksheet. The following two functions return a `MarksCollection`, which is an array of `DataTable`objects.

`Worksheet.getSelectedMarksAsync()`

`Worksheet.getHighlightedMarksAsync()`

## Get the worksheet object

The first step for accessing data of any kind is to get the worksheet object (or objects) that you want.

```javascript

    //  After initialization, ask Tableau what sheets are available
    const worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;

    // Find a specific worksheet 
    var worksheet = worksheets.find(function (sheet) {
      return sheet.name === "Name of Worksheet I want";
    });

    // Or iterate through the array of worksheets
    worksheets.forEach(function (worksheet) {
      //  process each worksheet...
    });

```

After you have a worksheet object, you can call one of the methods to access the data for that worksheet. For summary data, or the data from the selected or highlighted marks, the steps are straight forward. If you want access the underlying data (or full data), there are additional steps and considerations. See [Accessing Underlying Data]({{ site.baseurl }}/docs/trex_data_access.html)



## Example: Getting summary data

```javascript

 // get the summary data for the sheet
 worksheet.getSummaryDataAsync().then(function (sumdata) {

  const worksheetData = sumdata;
  // The getSummaryDataAsync() method returns a DataTable
  // Map the DataTable (worksheetData) into a format for display, etc.

 });

```

## Example: Getting full data

If your extension uses one of the functions that can access full data, you need to add an element to the manifest file (`.trex`) that declares that the extension requires `full data` permission. If the manifest file does not have this element, the extension can run, but the method to access full data will fail. See [Add permissions to access full data to manifest file]({{ site.baseurl }}/docs/trex_data_access.html#add-permissions-to-access-full-data-to-manifest-file).


```javascript

// the following example uses the Superstore workbook and gets the underlying data // for a specific worksheet. 
// The example writes the values for a single column (states names) to the console. 
tableau.extensions.dashboardContent.dashboard.worksheets.find(w => w.name === "Sale Map").getUnderlyingDataAsync().then(dataTable => {
  let field = dataTable.columns.find(column => column.fieldName === "State");
  let list = [];
  for (let row of dataTable.data) {
    list.push(row[field.index].value);
  }
  let values = list.filter((el, i, arr) => arr.indexOf(el) === i);
  console.log(values)
});


```

# Get data from a data source 

You can also get the underlying data from the data sources for the worksheet. To do that, you must acquire the data sources for the worksheet with a call to the `getDataSourcesAsync()` method, which returns an array of the primary and all the secondary data sources of a worksheet. Once you have the data source object, you can access the underlying data and access information about the data source, such as the names of tables and fields and information about the connection. Just like worksheet method, `getUnderlyingDataAsync()`, the following methods for the data source also require that your extension specifies `full data` permissions in the `trex` file. See [Add permissions to access full data to manifest file]({{ site.baseurl }}/docs/trex_data_access.html#add-permissions-to-access-full-data-to-manifest-file).

`Datasource.getUnderlyingDataAsync()`

`Datasource.getActiveTablesAsync()`

`Datasource.getConnectionSummariesAsync()`


## Example: Getting full data from a data source

The following example shows how you might find a specific data source of a worksheet, using the `getDataSourcesAsync()` method. The example then chains the data source returned in the promise to a call to the `getUnderlyingDataAsync()` method to access the data table. 

```javascript

tableau.extensions.dashboardContent.dashboard.worksheets.find(w => w.name === "Sale Map").getDataSourcesAsync().then(datasources => {
  dataSource = datasources.find(datasource => datasource.name === "Sample - Superstore");
  return dataSource.getUnderlyingDataAsync();
}).then(dataTable => {
// process the dataTable...
});



```


# When there is more data than can be returned

Some data sources can be very large and could contain thousands and thousands of rows. To minimize the impact of requests for data on Tableau performance, the `getUnderlyingDataAsync()` method is currently limited to returning 10,000 rows. If the method can't return the full number of rows in your data, the `DataTable` property `isTotalRowCountLimited` is set to TRUE. You can use this property to test whether there is more data than can be returned. Note that the limits do not apply to `getSummaryDataAsync()`.

The following table illustrates what happens to calls to `getUnderlyingDataAsync()` for various sizes of data (shown as **Data Rows**). 

* `maxRows` represents the rows requested as one of the `GetUnderlyingDataOptions`. When `maxRows = 0` the method will attempt to return all rows of data.  
* `totalRowCount` represents the number of rows returned in the `DataTable`.
* `isTotalRowCountLimited` is the Boolean that indicates if there is more rows of data than can be returned. 


**Rows of data returned from getUnderlyingDataAsync**

| Data Rows | maxRows (input)        | totalRowCount (output) | isTotalRowCountLimited | Comments                                                |
|-----------|------------------------|------------------------|------------------------|---------------------------------------------------------|
| 15,000    | 0                      | 10,000                 | TRUE                   |                                                         |
| 15,000    | any number &gt; 10,000 | 10,000                 | TRUE                   | Any number greater than 10,000 exceeds the return limit |
| 15,000    | 10,000                 | 10,000                 | FALSE                  |                                                         |
| 15,000    | 200                    | 200                    | FALSE                  |                                                         |
| 500       | 0                      | 500                    | FALSE                  |                                                         |
| 500       | any number &gt; 10,000 | 500                    | FALSE                  |                                                         |
| 500       | 200                    | 200                    | FALSE                  |                                                         |
| 10,000    | 0                      | 10,000                 | FALSE                  |                                                         |
| 10,000    | any number &gt; 10,000 | 10,000                 | FALSE                  |                                                         |
| 10,000    | 10,000                 | 10,000                 | FALSE                  |                                                         |
| 10,000    | 200                    | 200                    | FALSE                  |                                                         |








# Handle full data access and permission errors

When an extension needs full data access and the user does not have full data permission on the workbook, Tableau currently allows the extension to run, but Tableau will call the promise failure function if the extension calls `getUnderlyingData()`. This is shown in the following example. 

```Javascript
Worksheet.getUnderlyingDataAsync().then(function(success) {
    // called on success
}, function (err) {
    // called on any error, such as when the extension 
    // doesn’t have full data permission
});

```

An error is also printed to the console. If you use the `getUnderlyingData()` method, be sure to add error handling for the promise in case of failure.


