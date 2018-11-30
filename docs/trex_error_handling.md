---
title: Error Codes for Extensions
layout: docs
---

Errors that are returned from the Extensions API are custom Tableau error objects that extends the standard JavaScript error object.

---
**In this section**

* TOC
{:toc}

## Using Extensions API error codes

The Extensions API wraps the standard error object with an `errorCode` property. You can use this error code for debugging or troubleshooting your extension. Any time you encounter an error when you are running your extension, you can look at this `errorCode` to determine the cause. See [Error Codes]({{site.baseurl}}/docs/enums/errorcodes.html). 

As you create your extension, you want to be sure to catch potential error conditions. For example, you should validate user input and make use of `try`  ... `catch` statements. The Extensions API makes use of JavaScript promises. You can use the `.catch` method to field the errors that could be returned in the promise and any subsequent `.then` methods. 



## Handle extensions.ui dialog box errors 

For an example of how to handle an extension dialog box error, see the [UINamepace](https://github.com/tableau/extensions-api/tree/master/Samples/UINamepace?=target="_blank") sample. The sample shows how you could handle the error condition that occurs if a user dismisses a modal dialog box (`DialogClosedByUser`). In this extension, the user should click the **Save** button to save the configuration settings, which then closes the dialog box. The following snippet illustrates this pattern: 

```javascript

tableau.extensions.ui.displayDialogAsync(args... ).then((args... ) => {
   //
   // code that sets up the extension in the modal dialog box
  // 
    }).catch((error) => {
      // One expected error condition is when the popup is closed by the user
      // (meaning the user clicks the 'X' in the top right of the dialog).  
      // This can be checked for with:
      switch(error.errorCode) {
        case tableau.ErrorCodes.DialogClosedByUser:
          console.log("Dialog was closed by user");
          break;
        default:
          console.error(error.message);
      }
    });

```

## Handle Extensions API errors when the dashboard is not visible 

 In Tableau 2018.3 and later, when the dashboard is not visible (that is, the dashboard is minimized or in the background), the Extensions API method calls are blocked and an error object is returned. If you have code that might run when the extension is not visible, you should add a `catch` method to handle the error. The error code returned in this case is `APINotInitialized`.

For example, the Extensions API method, `Datasources.refreshAsync()`, is intended to be used in scenarios where some manual interaction with the dashboard causes a need to refresh the data in the Tableau visualization. The method is not meant to support or emulate streaming or live visualizations. The method will be blocked when the dashboard is not visible and will return the error code. 

The following code example shows how this error could be handled in the `.catch` method. 


```javascript

  /**
   * This function sets up a JavaScript interval based on the time interval selected
   * by the user.  This interval will refresh all selected data sources.
   */
  function setupRefreshInterval(interval) {
    refreshInterval = setInterval(function() { 
      let dashboard = tableau.extensions.dashboardContent.dashboard;
      dashboard.worksheets.forEach(function (worksheet) {
        worksheet.getDataSourcesAsync().then(function (datasources) {
          datasources.forEach(function (datasource) {
             if (activeDatasourceIdList.indexOf(datasource.id) >= 0) {
               datasource.refreshAsync();
             }
          });
        });
      });
    }, interval*60*1000);
  }.catch((error) => {
      // One error condition occurs when the extension is not visible. 
      // This can be checked for like so:
      switch(error.errorCode) {
        case tableau.ErrorCodes.APINotInitialized:
          console.log("The page with the extension is not visible.");
          break;
        default:
          console.error(error.message);
      }
    });





```