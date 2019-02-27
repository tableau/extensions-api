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

## Handle Extensions API errors when the dashboard is not visible

 In Tableau Server or Tableau Online version 2018.3 and later, when the browser window is not visible (that is, when the browser window Tableau is running in is minimized or in the background), the Extensions API method calls are blocked and an error object is returned. If you have code that might run when the dashboard is not visible, you should add code to check if the window is visible so that you can handle the error. If you are using `tableau-extensions-1.1.0.js` or later, the error code returned in this case is `VISIBILITY_ERROR`.

### What happens when the error occurs

 This error can occur if an Extensions API method is called while Tableau is not in the foreground. For example, this could happen if the user switches tabs or minimizes the browser window and there is a timer that triggers the API call. When the user subsequently returns to the dashboard view, an error dialog box will appear.

   ![]({{site.baseurl}}/assets/ext_visibility_error_dialog.png)


### Identifying the error as a visibility-error

 To find out the cause, you can use the debugging tools in the browser. If you check the Console window, in Chrome for example, you might see an error message similar to the following.

   ![]({{site.baseurl}}/assets/ext_visibility_err_console.png)


### Add a check for visibility and add an event listener

The Extensions API methods are intended to be used in scenarios where some manual interaction is required. However, there might be cases where a method is called on an interval, or there is a delay in execution, and the browser window that contains the extension is no longer visible when the method call is made. In these cases, you could use the [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) and an event handler to avoid having your users encounter the `visibility-error`.


The following example shows how this error could be handled using an event listener for `visibilitychange`. You can create your own `visibilityhandlermethod` method if you need to wrap your Extensions API calls when the browser window is visible.


```javascript


    document.addEventListener('visibilitychange', visibilityhandlermethod, false);


    // 
    function visibilityhandlermethod() {
     if (document.hidden) {
         // do something while you pause the extension execution
      }    else  {
            // do stuff
        // call the Extensions API
      }
    }




```
