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

The Extensions API wraps the standard error object with an `errorCode` property. You can use this error code for debugging or troubleshooting your extension. Any time you encounter an error when you are running your extension, you can look at this `errorCode` to determine the cause. See [Error Codes]({{site.baseurl}}/docs/enums/tableau.errorcodes.html){:target="_blank"}.

As you create your extension, you want to be sure to catch potential error conditions. For example, you should validate user input and make use of `try`  ... `catch` statements. The Extensions API makes use of JavaScript promises. You can use the `.catch` method to field the errors that could be returned in the promise and any subsequent `.then` methods. 


## Handle extensions.ui dialog box errors

For an example of how to handle an extension dialog box error, see the [UINamepace](https://github.com/tableau/extensions-api/tree/master/Samples/UINamepace?=target="_blank") sample. The sample shows how you could handle the error condition that occurs if a user dismisses a modal dialog box (`DialogClosedByUser`). In this extension, the user is expected to click the **Start Auto Refresh** button, which saves the configuration settings and closes the dialog box, by calling the `tableau.extensions.ui.closeDialog()` method with the return payload. If a user clicks the dialog box control (the **X** in the upper-right corner) instead, the error occurs. The following snippet illustrates how you could handle this error: 

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


