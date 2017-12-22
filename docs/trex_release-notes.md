---
title: Release Notes for the Tableau Extensions API
layout: docs
--- 

**In this section**

* TOC
{:toc}

---

### Developer Preview (0.8.0)
*December 21, 2017*

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
