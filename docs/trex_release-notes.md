---
title: Release Notes for the Tableau Extensions API
layout: docs
--- 

**In this section**

* TOC
{:toc}

### Tableau 2018.2 (Beta 2)
*June 4, 2018*

Update of the Tableau Extensions API

- Tableau Extensions API library: tableau-extensions-0.16.0.js
- Download Tableau Desktop, Tableau Server from [Tableau 2018.2 Beta](https://prerelease.tableau.com/project/home.html?cap=c43269484c1f45a68f5ad4fc4660b2ab){:target="_blank"}


Changes in this release:

- XML Schema: This release introduces two changes to the XML schema for the extensions manifest file (`.trex`). If you have an existing `.trex` file, you need to make a couple of corrections. 
<br />
- The first change is to the URL of the extensions namespace (`xmlns`). The URL is now `www.tableau.com...` instead of `wwww.tableau.com...`

```xml
  <manifest manifest-version="0.1" xmlns="http://www.tableau.com/xml/extension_manifest">
  ...      

  </manifest>   
```
- The second change is to the author's web site. This link to your web site must now be over HTTPS for security. This link to your web site will become the **Get Support** link in the **About** dialog box for your extension. Users will be able to click the link to get to the help page that you provide. 

```xml
<author name="tableau" email="github@tableau.com" organization="tableau" website="https://www.tableau.com"/>
```

- Extensions settings and permissions in Tableau Server <br />
Server administrators can manage dashboard extensions on the **Settings > Extensions** tab (for each site and for the server). By default, only extensions that do not require full data access are allowed to run. HTTPS is required. Server administrators can enable dashboard extensions that are trusted to access full data by adding them to a safe list for a site. Server administrators can control whether or not the users will see prompts (asking them to allow the extension to access data) when users are adding an extension to a dashboard, or when they are interacting with a view that has an extension.  For more information, see [Dashboard Extensions in Tableau Server](https://onlinehelp.tableau.com/v2018.2/server/en-us/dashboard_extensions_server.htm){:target="_blank"}

- The **About** dialog box. Users can now find out about an extension in the dashboard by selecting the layout container and then clicking **About** from the **More Options** menu. Information from the extension manifest file (`.trex`) is used to populate a dialog box. (Note that the dialog box you see might look slightly different from this example.) 

   ![]({{site.baseurl}}/assets/about_extension_dialog.png){:height="33%" width="33%"}



---

### Tableau 2018.2 (Beta 1)
*April 26, 2018*

Download Tableau Desktop, Tableau Server from [Tableau 2018.2 Beta](https://prerelease.tableau.com/project/home.html?cap=c43269484c1f45a68f5ad4fc4660b2ab){:target="_blank"}

--- 

### Developer Preview (0.12.8)
*April 13, 2018*

Update of the Tableau Extensions API 
- Tableau Extensions API library: `tableau-extensions-0.12.8.js`
- Tableau Desktop, Tableau Server (from [Extensions API Developer Preview](https://prerelease.tableau.com/project/home.html?cap=52e2710a0793434d82142736c7ab3029){:target="_blank"})

Changes in this release:

- This release of Tableau introduces a minor change in the workbook format that affects extensions. If you saved a workbook with an extension using an earlier version of Tableau, and then open the workbook with this current Tableau release, the workbook will open, but it will not have the extension. You will have to add the extension back in using the latest release of Tableau.

Bugs fixed in this release:

- Certain keyboard shortcuts were intercepted by Tableau and not passed on to the extension. This is now fixed, with the excecption of **cmd + V** on Mac, which will be fixed in a later release. ([Issues #76](https://github.com/tableau/extensions-api/issues/76))
- Calls to `getSummaryDataAsync()` or `getUnderlyingDataAsync()` would not return the correct data types for the columns. Column property `datatype` returned `string` for all columns, regardless of actual data type of column. 
- Web Authoring would throw an exception when an extension is added. 
- XSD validation of `minApiVersion` accepted only single digit version numbers  (for example, `0.12` would fail).
- Permissions denied error message would disappear after the dashboard zone was reloaded. 

### Developer Preview (0.12.8)
*April 13, 2018*

Update of the Tableau Extensions API 
- Tableau Extensions API library: `tableau-extensions-0.12.8.js`
- Tableau Desktop, Tableau Server (from [Extensions API Developer Preview](https://prerelease.tableau.com/project/home.html?cap=52e2710a0793434d82142736c7ab3029){:target="_blank"})

Changes in this release:

- This release of Tableau introduces a minor change in the workbook format that affects extensions. If you saved a workbook with an extension using an earlier version of Tableau, and then open the workbook with this current Tableau release, the workbook will open, but it will not have the extension. You will have to add the extension back in using the latest release of Tableau.

Bugs fixed in this release:

- Certain keyboard shortcuts were intercepted by Tableau and not passed on to the extension. This is now fixed, with the excecption of **cmd + V** on Mac, which will be fixed in a later release. ([Issues #76](https://github.com/tableau/extensions-api/issues/76))
- Calls to `getSummaryDataAsync()` or `getUnderlyingDataAsync()` would not return the correct data types for the columns. Column property `datatype` returned `string` for all columns, regardless of actual data type of column. 
- Web Authoring would throw an exception when an extension is added. 
- XSD validation of `minApiVersion` accepted only single digit version numbers  (for example, `0.12` would fail).
- Permissions denied error message would disappear after the dashboard zone was reloaded. 

--- 

### Developer Preview (0.12.7)
*March 28, 2018*

Update of the Tableau Extensions API 
- Tableau Extensions API library: `tableau-extensions-0.12.7.js`
- Tableau Desktop, Tableau Server (from [Extensions API Developer Preview](https://prerelease.tableau.com){:target="_blank"})

Updated in this release:

- Extensions API library goes to `12` (one better than `11`). The library has been refactored to be smaller, faster, lighter. 

- Dashboard authors and users of your extension can decide whether to allow the extension to run or not. When users add an extension that can access the underlying data in a dashboard, they now see a prompt that lets them allow the extension to run. In addition, when someone opens a dashboard that contains extensions, they see a dialog box that lists information about all the extensions in the dashboard, and a prompt to allow the extensions to run. For more information, see [Accessing Underlying Data]({{site.baseurl}}/docs/trex_data_access.html)

- Starting with the `0.12.7` release, the Extensions API library supports versioning. Future versions of Tableau will be able to run extensions that use earlier versions of the Extensions API library (`0.12.7` and later). You will no longer need to roll the version number of the library in your extension at every release just to enable it to run in Tableau.  For example, a dashboard extension that uses the Extensions API `0.12.7` library should run in a future release of Tableau without modification. And Tableau will provide a meaningful error message if you try to run an extension that requires a later version of the Extensions API library than the version of the API that a particular Tableau release supports. For example, if the extension uses the `0.14.0` library but the version of Tableau only supports an earlier version (`0.12.7`), users of the extension will see a message informing them that they need a later version of Tableau. 


Bug fixes:

- Canceling extensions selection causes error	 

- Parameters (Desktop): Tableau crashes if you add a filter based off of a parameter to a dashboard		 	 
	 	 
- Saving and opening a workbook that has an extension throws error	

- Parameter Changed Notification not working on server	

- Extension dialog box height and width are reversed	


---

### Developer Preview (0.10.0)
*February 28, 2018*

- Update of the Tableau Extensions API 
- Tableau Extensions API library: `tableau-extensions-0.10.0.js`
- Tableau Desktop, Tableau Server (from [Extensions API Developer Preview](https://prerelease.tableau.com){:target="_blank"})

Updates in this release:

- New *configure feature*, which allows you to register a custom JavaScript callback for a context menu item in the extension zone. See [Adding a configuration dialog box](#adding-a-configuration-menu-item) and the [UINamespace](https://github.com/tableau/extensions-api/tree/master/Samples/UINamespace?=target="_blank") sample.

-	A fix for a problem that existed in the 0.9.0 release that caused extension initialization to break on Tableau Server.  


For other changes with this release, see [Known Issues](https://prerelease.tableau.com/project/article/default.html?cap=52e2710a0793434d82142736c7ab3029&arttypeid=f592dc03830d480a862740e4a6bde998) on the [Extensions API Developer Preview](https://prerelease.tableau.com){:target="_blank"} site.

--- 

#### Adding a configuration menu item 

You can use a new callback function option to `initializeAsync()` as a way to create a configuration option that opens a window or dialog box for your extension. To do this you first add the context-menu option to the extensions manifest file (`.trex`). 
 
 

**Add `<context-menu>` to the .trex file** 

```xml 
<!-- add to <dashboard-extension> section
  after <icon> and <permissions> -->

<context-menu>
    <configure-context-menu-item />
</context-menu>

``` 


**Create a configuration function** 

When you initialize an extension, you can now pass an optional `contextMenuCallbacks` object to the `initializeAsync()` function. This object  maps a special ID or key (which must be `'configure'`) to a function you create.  The function you create, in conjunction with adding a `<context-menu>` item to the manifest, adds a new **Configure...** context menu item to the zone of the extension inside a dashboard.  When the user clicks the context menu item, the configuration function you specified is executed. 

For example, you could use the UI namespace and have the configuration function call the `displayDialogAsync()` function to create a dialog box that can be used to change settings for the extension. The parent (or initial window) for your extension, might have the following JavaScript code. 

```javascript

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
	// and set initial settings and handle the return payload 
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
```
To better understand how to use the context menu, and to see it in action, check out the updated [UINamespace](https://github.com/tableau/extensions-api/tree/master/Samples/UINamespace?=target="_blank") sample. 


--- 

### Developer Preview (0.9.0)
*February 14, 2018*

- Update of the Tableau Extensions API 
- Tableau Extensions API library: `tableau-extensions-0.9.0.js`
- Tableau Desktop (from [Extensions API Developer Preview](https://prerelease.tableau.com){:target="_blank"})

Updates in this release:
- [Updates to the UI namespace](#updates-to-the-ui-namespace) 
- [Permissions added to access full data](#permissions-added-to-access-full-data)
- [Error codes for extensions](#error-codes-for-extensions)



#### Updates to the UI namespace

 This preview release introduces more options for the UI namespace. You can now control the initial sizing (height, width) of a modal dialog box (or *popup*). The modal dialog itself is an extension. Using the `displayDialogAsync()` and `closeDialog()` methods you can pass payloads between the calling extension and the extension running in the modal dialog box. For an example of how you can use the UI namespace to create a configuration dialog box, see the [UINamespace](https://github.com/tableau/extensions-api/tree/master/Samples/UINamespace?=target="_blank") sample.  The sample also shows how to use the settings event to capture the new configuration. The sample source code has extensive comments that describe how to use these new features in the Extensions API. 

- New sample: [UINamespace](https://github.com/tableau/extensions-api/tree/master/Samples/UINamespace?=target="_blank")


#### Permissions added to access full data

To access the underlying data along with information about the data source, the extension must declare that it requires full data access in the extension manifest file (`.trex`).


An extension requires full data access, if the extension uses any of the following four APIs:
 
`Worksheet.getUnderlyingDataAsync()`

`Datasource.getUnderlyingDataAsync()`

`Datasource.getActiveTablesAsync()`

`Datasource.getConnectionSummariesAsync()`


If you use any of these APIs, you need to add a `<permissions>` element to the manifest file (`.trex`) and specify full data permission. The XML looks like the following: 

```xml

<permissions>
    <permission>full data</permission>
</permissions>

```

The `<permissions>` element must be added under `<dashboard-extension>` in the manifest file. For a complete description of the manifest, see the [Tableau Extensions Manifest File]({{site.baseurl}}/docs/trex_manifest.html).

If full data is not declared in the manifest file, and the extensions calls one of the APIs that accesses any underlying data or data source information, the API call fails. In addition, an error is written to the Tableau log file (`log.txt`). If you are debugging the extension with the Chromium web browser, an error is reported the console pane. The error message would look similar to the following:

```
PermissionValidation.ts:26 Extension (name = DataSources Sample, ID = com.tableau.extensions.demo.local) is missing required permission: full-data
Error: internal-error: permission-denied: Missing required permission to run get-underlying-data(...)

```


#### Error codes for extensions  

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

---


### Developer Preview (0.8.0)
*January 10, 2017*

- Update of the Tableau Extensions API. 
- Tableau Extensions API library: `tableau-extensions-0.8.0.js`
- Tableau Desktop 10.5 RC, Tableau Server 10.5 (from [Extensions API Developer Preview](https://prerelease.tableau.com){:target="_blank"})


**New desktop authoring experience** 

You no longer need to place the `.trex` file for the extension in a predetermined folder, you now do the following:

 1. In the dashboard, under **Objects** on the left, select **Extension** and drag it to the dashboard sheet on the right.
   The **Select an Extension** dialog box appears. 
 2. The first time you open the dialog box to add an extension, you will see a link to **Choose an Extension**. Click the link and browse to the directory where you have the `.trex` file. 
Subsequently, when you drag the **Extension** on the dashboard, the dialog box shows you the most recently used list, choose from the list, or click **Browse** to select another extension.

**New UI namespace** 
  
- You can now launch a new modal dialog using the function: `tableau.extensions.ui.displayDialogAsync(dialonExtensionURL)`.
- The URL you want to load (`dialonExtensionURL`) will be an extension itself.  
- The extension in the dialog will have full access to the extensions API.  When ready to close to the dialog, from the dialog extension you can call `tableau.extensions.ui.closeDialog(string)`. See the documentation for details.
- Note that the UI namespace is work is still in progress and has some upcoming additions. *Stay tuned for more.*

**HTTPS and security**  

For information about the HTTPS requirements for extensions, see [Security and Tableau Extensions]({{site.baseurl}}/docs/trex_security.html)

**Remote Debugging** 

Due to changes in this release, remote debugging does not work as expected in Tableau Desktop. To enable debugging, you must add the `--remote-debugging-port=8696` option to the command used to start Tableau. The easiest way to do this is to open the Tableau shortcut on the **Start** menu. Open the file location of the Tableau shortcut. Right-click the Tableau shortcut and click **Properties**. In the Target text box, append the remote debugging option to the command. Do not enclose the option in quotation marks. 
```
   "C:\Program Files\Tableau\Tableau main\bin\tableau.exe" --remote-debugging-port=8696
```
For information about debugging extensions, see [Remote Debugging of JavaScript and HTML]({{site.baseurl}}/docs/trex_debugging.html).


---

### Developer Preview (0.7.0)
*November 29, 2017*

- Update of the Tableau Extensions API. 
- Tableau Extensions API library: `tableau-extensions-0.7.0.js`
- Tableau Desktop 10.5 RC, Tableau Server 10.5 (from [Extensions API Developer Preview](https://prerelease.tableau.com){:target="_blank"})

**Breaking change** 

- Schema change - Updated XSD file for the dashboard extensions manifest file (`.trex`). 
  If you have an existing extension, you must update the `.trex` file to follow the new schema. There is a script you can run that converts the manifest file for you. Or you can manually make the changes. For more information about the manifest, see [Tableau Extension Manifest File]({{ site.baseurl }}\docs\trex_manifest.html). You can download the manifest conversion script from the **Extensions API Developer Preview** on [https://prerelease.tableau.com](https://prerelease.tableau.com){:target="_blank"}.
- Existing workbooks - if you have an existing workbook that uses a dashboard extension, you will not be able to open it with this (`0.7.0`) release. To get around this issue, update the manifest file (`.trex`), update your extension to use `tableau-extensions-0.7.0.js`, and then open a new workbook and re-create the dashboard.  


**New features**  

-	Tableau Server.  You can publish dashboards containing extensions and run them on Tableau Server. You can download a version of Tableau Server 10.5 that supports dashboard extensions from the **Extensions API Developer Preview** on [https://prerelease.tableau.com](https://prerelease.tableau.com){:target="_blank"}.
-  Security - Your dashboard extension must use an HTTPS connection. If you are using `localhost` for development, you can still use HTTP. 
- Sharing dashboards  -  the dashboard extension now gets saved with the workbook, so you can share your workbooks that use the extension with others. 
-	New method `DataSource.getConnectionSummariesAsync`  gets a summary object for each underlying connection in a data source.
-	New method `DataSource.getActiveTablesAsync` gets all tables used to create the data source (what you would see in the join canvas).

- Logging - You can view dashboard extension activity in Tableau log files. Tableau records extension events that you can use to troubleshoot registration errors and command execution. See [Use Log files to Troubleshoot Dashboard Extensions]({{site.baseurl}}/docs/trex_logging.html).  


**Bug fixes** 

-	The `Worksheet.clearFiltersAsync` method no longer removes filters from your worksheets, but properly resets the filters to a default state.
- The name of the selected dashboard extension now appears instead of "other" in the dashboard Layout pane.



--- 

### Developer Preview (0.6.0) 
*Oct 10, 2017*

Initial release of the Tableau Extensions API. Provides support for dashboard extensions. 

Tableau Extensions API library: `tableau-extensions-0.6.0.js`

Tableau Desktop 10.5 beta
