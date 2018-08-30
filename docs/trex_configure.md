---
title: Add a Configuration Popup Dialog
layout: docs
---

If you want users to be able to configure settings for your extension, you can use an optional callback function when you initialize your dashboard extension. The callback function creates a configuration option 
that can be used to open a popup window (a modal dialog box) for your extension. You can use this popup window to allow users to set and save settings for the extension. 

**In this section**

* TOC
{:toc}


## Add the context menu to the `.trex` file

The first step is to add the `<context-menu>` option to the extension's manifest file (`.trex`). The `<context-menu>` element only contains one item:  `<configure-context-menu-item />`. The context menu option must follow the `<icon>` and `<permissions>` elements in the  manifest file:
 

```xml 
<!-- add to <dashboard-extension> section
  after <icon></icon> 
  and <permissions></permissions> -->

<context-menu>
    <configure-context-menu-item />
</context-menu>

``` 


## Create a configuration function

When you initialize an extension, you can pass an optional `contextMenuCallbacks` object to the `initializeAsync()` function. 
This object maps a special ID or key (which must be `'configure'`) to a function you create.  The function you create, in conjunction 
with adding a `<context-menu>` item to the manifest, adds a new **Configure...** context menu item to the zone of the extension inside a dashboard.  When the user clicks the context menu item, the configuration function you specified is executed. 


   ![]({{site.baseurl}}/assets/extension_configure_menu.png){:height="25%" width="25%"}


For example, you could use the UI namespace and have the configuration function call the `displayDialogAsync()` function to create a dialog box that can be used to change settings for the extension. The parent (or initial window) for your extension, might have the following JavaScript code. This example uses an initial payload string value, *defaultIntervalInMin*, to pass to the configuration dialog. The payload value is modified in the configuration dialog and is returned in the `closeDialog()` method. Alternatively, you could use a `Settings` object to store the key/value pairs that configure your extension. 

```javascript


// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
const defaultIntervalInMin = '5';

$(document).ready(function () {
    // ...
    // pass the object to initializeAsync() to map 'configure' key to a function called configure()
    // ...
    tableau.extensions.initializeAsync({'configure': configure}).then(function() {     
      // ...
	  // ... code to set up event handlers for changes to configuration 
      });
    });
  });



   function configure() { 
    // ... code to configure the extension
    // for example, set up and call displayDialogAsync() to create the configuration window 
    // and set initial settings (defaultIntervalInMin)
    // and handle the return payload 
    // ...
    tableau.extensions.ui.displayDialogAsync(popupUrl, defaultIntervalInMin, { height: 500, width: 500 }).then((closePayload) => {
      // The promise is resolved when the dialog has been expectedly closed, meaning that
      // the popup extension has called tableau.extensions.ui.closeDialog.
      // ...

      // The close payload is returned from the popup extension via the closeDialog() method.
     // ....

    }).catch((error) => {
      //  ... 
      // ... code for error handling
    });
  }

})();  

```
In the JavaScript code for the popup dialog window, you would add your code for initializing the dialog and for setting and saving the configuration settings.

```javascript

  $(document).ready(function () {
    // The only difference between an extension in a dashboard and an extension
    // running in a popup is that the popup extension must use the method
    // initializeDialogAsync instead of initializeAsync for initialization.
    // This has no affect on the development of the extension but is used internally.
    tableau.extensions.initializeDialogAsync().then(function (openPayload) {
    // The openPayload sent from the parent extension in this example is the
    // default time interval for the refreshes.  This could alternatively be stored
    // in settings, but is used in this sample to demonstrate open and close payloads.
    // code goes here
    });
  }); 

```

In your code to close the popup window, you must pass a string value (or empty string `" "`) as the return payload, even if you are using the `Settings` object to pass your configuration parameters. 

```javascript
  function closeDialog() {
   // Save the settings with tableau.extensions.settings.saveAsync()
   // Or pass the new configuration setting in the close payload
     tableau.extensions.ui.closeDialog('NewInterval');
     console.log("Settings saved");
    });
  }

```

To better understand how to use the context menu, and to see it in action, check out the [UINamespace](https://github.com/tableau/extensions-api/tree/master/Samples/UINamespace?=target="_blank") sample. 

