---
title: Error Codes for Extensions
layout: docs
---


Errors that are returned from the Extensions API are custom Tableau Error objects that extends the standard JavaScript error object.


The Extensions API wraps the standard error object with an `errorCode` property. Any time you encounter an error when you are developing your extension, you can look at this `errorCode` to determine the cause. See [Error Codes]({{site.baseurl}}/docs/enums/errorcodes.html). 

For an example of how to handle error conditions, see the [UINamepace](https://github.com/tableau/extensions-api/tree/master/Samples/UINamepace?=target="_blank") sample. The sample shows how you could handle the error condition that occurs if a user dismisses a modal dialog box (`DialogClosedByUser`).  The following snippet illustrates this pattern: 

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