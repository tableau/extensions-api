---
title: Release Notes for the Tableau Extensions API
layout: docs
--- 

**In this section**

* TOC
{:toc}


--- 

### Developer Preview (0.9.0)
*February 14, 2018*

- Update of the Tableau Extensions API 
- Tableau Extensions API library: `tableau-extensions-0.9.0.js`
- Tableau Desktop, Tableau Server (from [Extensions API Developer Preview](https://prerelease.tableau.com){:target="_blank"})

Updates in this release:
- [Updates to the UI namespace](#updates-to-the-ui-namespace) 
- [Permissions added to access full data](#permissions-added-to-access-full-data)
- [Error codes for extensions](#error-codes-for-extensions)



#### Updates to the UI namespace

 This preview release introduces more options for the UI namespace. You can now control the initial sizing (height, width) of a modal dialog box (or *popup*). The modal dialog itself is an extension. Using the `displayDialogAsync()` and `closeDialog()` methods you can pass payloads between the calling extension and the extension running in the modal dialog box. For an example of how you can use the UI namespace to create a configuration dialog box, see the [UINamepace](https://github.com/tableau/extensions-api/tree/master/Samples/UINamepace?=target="_blank") sample.  The sample also shows how to use the settings event to capture the new configuration. The sample source code has extensive comments that describe how to use these new features in the Extensions API. 

- New sample: [UINamepace](https://github.com/tableau/extensions-api/tree/master/Samples/UINamepace?=target="_blank")


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
