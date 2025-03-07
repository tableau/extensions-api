---
title: Release Notes for the Tableau Extensions API
description: What's new for each release of the Tableau Extensions API
--- 

[Previous Releases](#previous-releases) <br/>
[Known Issues](./trex_known_issues)

---

### Tableau Extensions API version 1.13.0

*March 2025*

* Tableau Dashboard Extensions API library: `tableau.extensions.1.13.0.js` <br />(download or clone the Extensions API repository on [GitHub](https://github.com/tableau/extensions-api)) <br/>

* Certain features in this release are only available in Tableau 2025.1 or later. Download [Tableau Desktop](https://www.tableau.com/support/releases) or [Tableau Server](https://www.tableau.com/support/releases/server).

* To preview new features and test your extension with the latest version of Tableau in the Developer Sandbox, join the [Tableau Developer Program](http://www.tableau.com/developer) and request your own Tableau Cloud developer site.

What's new in this release:

* (Viz Extensions) Added the [`WorksheetFormattingChanged`](pathname:///api/interfaces/worksheetformattingchangedevent.html) event to the [`worksheet`](pathname:///api/interfaces/worksheet.html). Use this event to take action whenever the worksheet's formatting changes. Note that this event is also raised when the workbook's formatting changes.

* Added [`backgroundColor`](pathname:///api/interfaces/worksheet.html#backgroundcolor) and [`formatting`](pathname:///api/interfaces/worksheet.html#formatting) properties to the [`worksheet`](pathname:///api/interfaces/worksheet.html). These properties return the background color and formatting of the worksheet (that is, the formatting sheets that contain the CSS properties).

* Added `applyWorksheetFormatting` as a property of [`GetSummaryDataOptions`](pathname:///api/interfaces/getsummarydataoptions.html#applyworksheetformatting) and [`GetUnderlyingDataOptions`](pathname:///api/interfaces/getunderlyingdataoptions.html#applyworksheetformatting). This property specifies whether to apply worksheet-level formatting to numbers and dates. You can use this option with the get summary and get underlying data APIs (such as, [`getSummaryDataReaderAsync`](pathname:///api/interfaces/worksheet.html#getsummarydatareaderasync), [`getUnderlyingTableDataReaderAsync`](pathname:///api/interfaces/worksheet.html#getunderlyingtabledatareaderasync)).


---

## Previous Releases

---

### Tableau Extensions API version 1.12.0

*May 2024*

* Tableau Dashboard Extensions API library: `tableau.extensions.1.12.0.js` <br />(download or clone the Extensions API repository on [GitHub](https://github.com/tableau/extensions-api)..) <br/>

* Certain features in this release are only available in Tableau 2024.2 or later. Download [Tableau Desktop](https://www.tableau.com/support/releases) or [Tableau Server](https://www.tableau.com/support/releases/server).

* To preview new features and test your extension with the latest version of Tableau in the Developer Sandbox, join the [Tableau Developer Program](http://www.tableau.com/developer). and request your own Tableau Cloud developer site.

What's new in this release:

* Support for Viz Extensions. Viz Extensions is a new feature that allows developers to create new viz types that Tableau users can access through the worksheet Marks card. See [Getting Started with Viz Extensions](./vizext/trex_viz_getstarted.md).

* Updated the [`Worksheet.selectTuplesAsync`](pathname:///api/interfaces/worksheet.html#selecttuplesasync) method to now support multiple tuple values. This means you can enable multi-selection scenarios. For example, the viz extension can support mark selection for rectangular, lasso, or other shaped multi-mark selections. You can use this method for marks or zones that represent multiple values.

* Added [Keyboard Accessible](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation.html) navigation methods.
  * You can use the [`Worksheet.getTooltipTextAsync`](pathname:///api/interfaces/worksheet.html#gettooltiptextasync) method to grab the data of the navigated tuple to read out to a screen reader.

  * Use the [`Worksheet.leaveMarkNavigationAsync`](pathname:///api/interfaces/worksheet.html#leavemarknavigationasync) method to escape focus back over to Tableau when you're done with mark navigation.

* (Viz Extensions) You can now specify the encoding icons used on the Marks card and provide for localization. You set these options in the `.trex` manifest file. See [Add encoding to the viz manifest](./vizext/trex_viz_manifest.md#add-encoding-in-the-viz-manifest).

* (Viz Extensions) Added support for a **Format Extension** button on the Marks card. You can use the Format Extension button to open a configuration popup window to let your users customize your viz extension. You create the button by adding a `<context-menu>` element to your `.trex` manifest file and then creating a `configure()` callback function. For more information, see [Add a Configuration Popup Dialog](./core/trex_configure.md).

  ```xml
 
  <context-menu>
      <configure-context-menu-item />
  </context-menu>

  ```

* Added support for interactivity in viz extensions. You can add actions and tooltips based on marks selection or hover over interactions. This release includes two new `worksheet` methods.

    * Use the [`Worksheet.selectTuplesAsync`](pathname:///api/interfaces/worksheet.html#selecttuplesasync) method to display the Tableau tooltip for the selected marks, or to take some other action based upon the marks selection.

    * Use the [`Worksheet.hoverTupleAsync`](pathname:///api/interfaces/worksheet.html#hovertupleasync) method to display a tooltip for the marks currently hovered over.

    For an example of how you can use these methods, see the [Sankey](https://github.com/tableau/extensions-api/tree/main/Samples/Viz/Sankey?=target="_blank") viz extension sample.

Also in this release:

* Added `Field.ColumnType`.

* Fixed a bug to allow a Field to have `datatype = DataType.Spatial`.

* Added an attribute `isGeospatial` to `Field`.

---

### Tableau Dashboard Extensions API version 1.11.0

*April 2024*

* Tableau Dashboard Extensions API library: `tableau.extensions.1.11.0.js` <br />(download or clone the Extensions API repository on [GitHub](https://github.com/tableau/extensions-api)..) <br/>

* Certain features in this release are only available in Tableau 2024.1 or later. Download [Tableau Desktop](https://www.tableau.com/support/releases). or [Tableau Server](https://www.tableau.com/support/releases/server).

* To preview new features and test your extension with the latest version of Tableau in the Developer Sandbox, join the [Tableau Developer Program](http://www.tableau.com/developer). and request your own Tableau Cloud developer site.

About this release:

* Adds the `Environment.uniqueUserId` property.

* Adds the `SummaryDataChanged` event type.

* Adds the `Worksheet.getVisualSpecificationAsync` method.

* Fixes a bug in the `getSelectedMarksAsync` method that would cause `formattedValue` to be incorrect in multi-pane scenarios.

* Adds experimental features as part of Viz Extensions Pre-Release. See the blog post [Extend Your Visual Analytics with Tableau Viz Extensions](https://www.tableau.com/blog/visual-analytics-tableau-viz-extensions).

    The Viz Extensions API is currently under development. Tableau is working to offer the feature in general availability later in 2024.

    We encourage anyone interested in developing viz extensions to contact Wilson Po at [wpo@salesforce.com](mailto:wpo@salesforce.com). We’re running a program by invitation that focuses on the developer experience for those interested in exploring those tools. An active NDA must be in place to requests access to the preview at this time.

    Sign up to test Tableau Viz Extensions in the [Tableau Beta Preview](https://prerelease.tableau.com/welcome/), as part of the web authoring experience when you register for a Tableau Cloud Beta Site.

---

### Tableau Dashboard Extensions API version 1.10.0

*December 2022*

* Tableau Dashboard Extensions API library: `tableau.extensions.1.10.0.js` <br/>(download or clone the Extensions API repository on [GitHub](https://github.com/tableau/extensions-api)..) <br/>

* Certain features in this release are only available in Tableau 2022.4 or later. Download [Tableau Desktop](https://www.tableau.com/support/releases). or [Tableau Server](https://www.tableau.com/support/releases/server).

* To preview new features and test your extension with the latest version of Tableau in the Developer Sandbox, join the [Tableau Developer Program](http://www.tableau.com/developer). and request your own Tableau Cloud developer site.

About this release:

* Updates for Tableau Viz, an easy way for you to add visualizations to your dashboard extensions using a declarative description. This release includes support for combination charts, charts with multiple mark types in the same visualization. Tableau Viz has a new input specification that support these new visualizations, see the [Tableau Viz v2 inputSpec](./trex_tableau_viz_ref_v2.md). For information about using Tableau Viz in your extensions, see [Add Tableau Viz to your Dashboard Extensions](./core/trex_tableau_viz.md).

    ![Tableau Viz v2 SVG image](./assets/vizapiV2.svg)

----

* Adds support for a [DataTableReader](pathname:///api/interfaces/datatablereader.html) to support pagination. Created with [Worksheet.getSummaryDataReaderAsync](pathname:///api/interfaces/worksheet.html#getsummarydatareaderasync),
[Worksheet.getUnderlyingTableDataReaderAsync](pathname:///api/interfaces/worksheet.html#getunderlyingtabledatareaderasync), and [DataSource.getLogicalTableDataReaderAsync](pathname:///api/interfaces/datasource.html#getlogicaltabledatareaderasync).
For more information, see [Get Data from the View](./core/trex_getdata.md).

* Deprecated `getSummaryDataAsync`. Use [Worksheet.getSummaryDataReaderAsync](pathname:///api/interfaces/worksheet.html#getsummarydatareaderasync) instead.

* The [UI.displayDialogAsync](pathname:///api/interfaces/ui.html#displaydialogasync) now supports different dialog styles (window, modal or modeless dialog boxes).

* Adds support for annotating marks with [Worksheet.annotateMarkAsync](pathname:///api/interfaces/worksheet.html#annotatemarkasync), [Worksheet.getAnnotationsAsync](pathname:///api/interfaces/worksheet.html#getannotationsasync), and [Worksheet.removeAnnotationAsync](pathname:///api/interfaces/worksheet.html#removeannotationasync). See the code sample, [Annotation](https://github.com/tableau/extensions-api/tree/dev/Samples/Dashboard/Annotation) (on GitHub).

---

### Tableau Dashboard Extensions API version 1.9.0

*June 2022*

* Tableau Dashboard Extensions API library: `tableau.extensions.1.9.0.js` <br />(download or clone the Extensions API repository on [GitHub](https://github.com/tableau/extensions-api)..) <br/>

* Download [Tableau Desktop](https://www.tableau.com/support/releases) or [Tableau Server](https://www.tableau.com/support/releases/server).

* To preview new features and test your extension with the latest version of Tableau in the Developer Sandbox, join the [Tableau Developer Program](http://www.tableau.com/developer) and request your own Tableau Cloud developer site.

About this release:

* Added support for [`Filter.getAppliedWorksheets()`](pathname:///api//interfaces/filter.html#getappliedworksheetsasync) and [`Filter.setAppliedWorksheets()`](pathname:///api/interfaces/filter.html#setappliedworksheetsasync).

* Added support for [`Dashboard.getFiltersAsync()`](pathname:///api/interfaces/dashboard.html#getfiltersasync) and [`Dashboard.applyFilterAsync()`](pathname:///api/interfaces/dashboard.html#applyfilterasync).

* Added support for [`Worksheet.applyRelativeDateFilterAsync()`](pathname:///api/interfaces/worksheet.html#applyrelativedatefilterasync).

* Starting with this release, you can now load Benton Sans fonts and Tableau fonts by default during extension initialization. You can set the Tableau and Benton Sans fonts in the style portion of your extension. To see how you can use the fonts in a dashboard extension, see the [Formatting](https://github.com/tableau/extensions-api/tree/master/Samples/Dashboard/Formatting?=target="_blank") sample.

    ```css

    body {
        font-family: 'Benton Sans', Arial, Helvetica, sans-serif;
      }
    ```

----

### Tableau Dashboard Extensions API version 1.8.1

*February 2022*

* Tableau Dashboard Extensions API library: `tableau.extensions.1.8.1.js` <br />(download or clone the Extensions API repository on [GitHub](https://github.com/tableau/extensions-api)..) <br/>

* Download [Tableau Desktop 2021.4](https://www.tableau.com/support/releases). or [Tableau Server 2021.4](https://www.tableau.com/support/releases/server)..

* To preview new features and test your extension with the latest version of Tableau in the Developer Sandbox, join the [Tableau Developer Program](http://www.tableau.com/developer). and request your own Tableau Cloud developer site.

About this release:

* Minor updates and bug fixes.

* Minor corrections and updates to the documentation. See [Add Tableau Workbook Formatting](./core/trex_format.md).

* New versions of the JavaScript library and TypeScript types (`1.8.1`). See [Use TypeScript with the Extensions API](./core/trex_typescript.md).

----


### Tableau Dashboard Extensions API version 1.8

*November 2021*

* Tableau Dashboard Extensions API library: `tableau.extensions.1.8.0.js` <br />(download or clone the Extensions API repository on [GitHub](https://github.com/tableau/extensions-api)..) <br/>

* Certain features in this release are only available in Tableau 2021.4 or later. Preview the features and test your extension with the latest version of Tableau in the Developer Sandbox. To gain access to the Developer Sandbox, join the [Tableau Developer Program](http://www.tableau.com/developer). and request your own Tableau Cloud developer site.

About this release:

This release contains updates for [Tableau Viz](./core/trex_tableau_viz.md)., including:



* Added support for setting the size of a bar mark to be manual (`VizImageSizeSettingType.Manual`) or fixed (`VizImageSizeSettingType.Fixed`). If the type is manual, you can set the mark’s size. If the type is fixed, you can set the alignment (`VizImageSizeSettingAlignmentType`).

* Added support for sorting. You can sort a field (continuous or discrete) by ascending or descending values (`VizImageSortDirectionType.Ascending`, `VizImageSortDirectionType.Descending`).

  ```javascript
  sort: { field: "Category", sortby: "Weather", direction: tableau.VizImageSortDirectionType.Ascending }
  ```

* For continuous fields, you can set the color palette to a custom-diverging, or custom-sequential color palette. You are not restricted to using only a Tableau defined palate, such as, `green_blue_white_diverging_10_0`.
For example, you could set the custom palette as shown in the following examples:

  ```javascript

    palette: tableau.VizImagePaletteType.CustomDiverging, start: "#FFB6C1", end: "#90ee90"

  ```

  Or

  ```javascript

   palette: tableau.VizImagePaletteType.CustomSequential,  end: "#FFB6C1"

  ```

* Added support to show or hide grid lines in the view for rows or columns, or both.

* Starting with the v1.8 release of the Dashboard Extensions API library and Tableau 2021.4, Tableau Viz now uses Tableau fonts as the default font for text in the output SVG image.

For more information, see [Tableau Viz Reference](./trex_tableau_viz_ref.md).

----

### Tableau Dashboard Extensions API version 1.7

*October 2021*


* Tableau Dashboard Extensions API library: `tableau.extensions.1.7.0.js` <br />(download or clone the Extensions API repository on [GitHub](https://github.com/tableau/extensions-api)..) <br/>

* Certain features in this release are only available in Tableau 2021.4 or later. Preview the features and test your extension with the latest version of Tableau in the Developer Sandbox. To gain access to the Developer Sandbox, join the [Tableau Developer Program](http://www.tableau.com/developer). and request your own Tableau Cloud developer site.

About this release:

* Added a new method, [`moveAndResizeDashboardObjectsAsync`](pathname:///api/interfaces/dashboard.html#dashboard.html#moveandresizedashboardobjectsasync). you can use to set the position and size of one or more floating dashboard objects. This can be useful for creating overlays, annotations, popups, or dynamic layouts.
  
* Added a new method that can replay an animation in a dashboard. You can control the replay speed (`tableau.ReplaySpeedType.Slow`, `tableau.ReplaySpeedType.Normal`, or `tableau.ReplaySpeedType.Fast`). For more information see the [`replayAnimationAsync`](pathname:///api/interfaces/dashboard.html#replayanimationasync). method.

* Dashboard extensions can now use workbook formatting by setting the appropriate class on the HTML elements. The specific Tableau classes to use are defined in the [`ClassNameKey`](pathname:///api/enums/tableau.classnamekey.html). enum. To apply the formatting in the body of your HTML page, use the string literal `tableau-*` for the enum. For example, to apply the worksheet title formatting you set the `class` for the HTML element in your extension (`div`, `h2`, etc.) to `"tableau-worksheet-title"`.  

     ```html
     <h2 class="tableau-worksheet-title">Subheader, using tableau-worksheet-title class</h2>
     
     ```

  To reference the workbook formatting in places outside of the HTML body, use the enum directly (for example, `tableau.ClassNameKey.WorksheetTitle`).

    ```html
   <script>
     ...
     someFunction(tableau.ClassNameKey.WorksheetTitle);
     ...
    </script>
    ```

  You can access the formatting in the Tableau workbook from `tableau.extensions.environment.workbookFormatting`. The property `formattingSheets` contains the array of CSS properties for the workbook, organized by `ClassNameKey`. For more information about using workbook formatting, see the [Formatting](https://github.com/tableau/extensions-api/tree/main/Samples/Dashboard/Formatting). sample in the Samples folder. Also see [Add Tableau Workbook Formatting](./core/trex_format.md).

* You can now set an event listener on changes to the dashboard layout and to the dashboard formatting. The new event types are `DashboardLayoutChanged` and `WorkbookFormattingChanged`. 

  The `DashboardLayoutChanged` event is triggered whenever a dashboard object is added, removed, repositioned or resized, or whenever the floating state, visibility, object name, or dashboard size changes. See the [DashboardLayoutChanged](pathname:///api/interfaces/dashboard.html#dashboardlayoutchanged). event. 

  The `WorkbookFormattingChanged` event is triggered whenever the workbook text formatting is changed in Tableau authoring mode. This includes changes in the font, the font size, whether it is bold, italic, or underlined, and the color. For more information about workbook formatting, see [workbookFormatting](pathname:///api/interfaces/environment.html#workbookformatting).

* Transparency - Tableau now supports dashboard extension transparency for Sandboxed extensions. To take advantage of extension transparency, set your background style to a transparent or partially transparent color.

* Added a new method (`setClickThroughAsync`) that allows clicks to pass through the dashboard extension window. You can use this method in conjunction with transparency. See the [setClickThroughAsync](pathname:///api/interfaces/extensions.html#setclickthroughasync). method.





----

### Tableau Dashboard Extensions API version 1.6

*September 2021*

* Tableau Dashboard Extensions API library: `tableau.extensions.1.6.0.js` <br />(download or clone the Extensions API repository on [GitHub](https://github.com/tableau/extensions-api)..) <br/>

* Download [Tableau Desktop 2021.3](https://www.tableau.com/support/releases). or [Tableau Server 2021.3](https://www.tableau.com/support/releases/server)..

About this release:

* Tableau Viz is here! <br/>

![Tableau Viz SVG image](./assets/vizapi_demo3.svg)

Starting with version 1.6 of the Dashboard Extensions API library and Tableau 2021.3, you can now add Tableau visualizations to your dashboard extensions. Tableau Viz takes a declarative description of your visualization and renders it as an SVG image that you can embed in your extension.  Version 1.6 of the Dashboard Extensions library adds the [`tableau.extensions.createVizImageAsync`](pathname:///api/interfaces/extensions.html#createvizimageasync). method, which takes a JavaScript object describing the image as an input.<br/> 
For more information about using Tableau Viz, see: <br/>
  - [Add Tableau Viz to Your Dashboard Extensions](./core/trex_tableau_viz.md)
  - [Tableau Viz Reference](./trex_tableau_viz_ref.md)
  - [Tableau Viz Sample - VizImage](https://github.com/tableau/extensions-api/tree/main/Samples/Dashboard/VizImage).

New Dashboard Extension API methods in this release:

* Added the `getAllDataSourcesAsync()` method to get the data sources for a workbook.
* Added the `createVizImageAsync()` method to support Tableau Viz.

----

### Tableau Dashboard Extensions API version 1.5

*June 2021*

* Tableau Dashboard Extensions API library: `tableau.extensions.1.5.0.js` <br />(download or clone the Extensions API repository on [GitHub](https://github.com/tableau/extensions-api)..) <br/>

About this release:

* The `Filter.getFieldAsync` method now works as expected and properly returns the field. This fix requires Tableau 2019.2 and later.

* Show/Hide (`setZoneVisibilityAsync`) can now be applied to any dashboard zone.

* The `selectMarksByValueAsync` method now supports combined selection criteria types (bug fixed).

* The following are all improvements to the [`getSummaryDataAsync`](pathname:///api/interfaces/worksheet.html#getsummarydataasync). method:

  * `getSummaryDataAsync` now has a smaller and faster payload.

  * `maxRows` can be applied to `getSummaryDataAsync` to restrict the number of rows fetched.

  * `columnsToIncludeById` can be applied to `getSummaryDataAsync` to restrict the columns fetched.

  * `includeDataValuesOnly` or `includeFormattedValuesOnly` can be applied to `getSummaryDataAsync` to restrict the amount of information returned to what you really need.

  * The `getSummaryColumnsInfoAsync` method is new in this release. It returns the column information for each column that will be returned in `getSummaryDataAsync`.

* The column information now includes the `fieldId` as well as the field name.

For more information about changes in this release, see [Tableau Extensions v1.5.0](https://github.com/tableau/extensions-api/releases/tag/v1.5.0)..



----

### Tableau 2021.1 Updates

*March 2021*

* You can now use Chrome version 80 and later to debug your dashboard extension in Tableau Desktop. If you are using Tableau 2021.1, or the latest maintenance releases of Tableau 2020.2, 2020.3, or 2020.4, you no longer need to use Chromium (version 79 or earlier) for debugging. For more information, see [Debug Extensions in Tableau Desktop](./debug/trex_debugging.md) and [Download the Chromium Browser](./debug/trex_debugging.md#download-the-chromium-browser).

* If you plan to implement OAuth in your dashboard extension, you'll want to check out [Add OAuth to Dashboard Extensions](./security/trex_oauth.md), and the OAuth sample ([datadev-oauth-sign-in](https://glitch.com/~datadev-oauth-sign-in).) on Glitch.

* Because of browser changes in Tableau, dashboard extensions running with self-signed certificates (SSL) might not work in Tableau 2021.1, or in the most recent Tableau maintenance releases: 2020.2.7+, 2020.3.6+, and 2020.4.2+. For more information, see [Known Issues](./trex_known_issues.md#unable_self_signed_cert).

### Tableau Dashboard Extensions API version 1.4
*May 2020*

* Tableau Dashboard Extensions API library: `tableau.extensions.1.4.0.js` <br />(download or clone the Extensions API repository on [GitHub](https://github.com/tableau/extensions-api).). <br/>

About this release:

* To support the logical and physical tables introduced in Tableau 2020.2, the Tableau Dashboard Extensions API (version 1.4) provides new APIs and data structures. Use these new methods to get the underlying data from data sources and worksheets. The new methods replace `getUnderlyingDataAsync`. Starting in Tableau 2020.2, a data source could have multiple logical tables, and logical tables can contain one or more physical tables. If you have an existing extension that uses one of the deprecated methods to get underlying data, the method call could fail if the data source contains more than one logical table. You should update your extensions to use these new methods. The new methods are backward compatible with previous versions of Tableau.

    | Interface | Deprecated method (v1.3 and earlier) | New method (v1.4 and later) |
    | :------------------| :-------------- |:-----------|
    | `Datasource` | `datasource.getActiveTablesAsync` |  `datasource.getLogicalTablesAsync` |
    | `Datasource` | `datasource.getUnderlyingDataAsync` | `datasource.getLogicalTableDataAsync` |
    | `Worksheet` |   Not Applicable                     | `worksheet.getUnderlyingTablesAsync`  |
    | `Worksheet` | `worksheet.getUnderlyingDataAsync` | `worksheet.getUnderlyingTableDataAsync` |

   To support the data model, the API also includes the `LogicalTable` object that has two properties: `caption` and `id`. The `caption` is the name of the logical table as it appears in Tableau.

   For more information about getting underlying data from data sources and worksheets, see [Get Data from the Dashboard](./core/trex_getdata.md).

   For information about the data model, see [The Tableau Data Model](https://help.tableau.com/current/pro/desktop/en-us/datasource_datamodel.htm).

* `DataValue` now has a `nativeValue` member. This member represents the raw native value as a JavaScript type, which is one of string, number, boolean, or Date object. Note that special values are returned as null. The `nativeValue` helps simplify error checking as all values will either be their native type value or null. The `nativeValue` exists for *ALL* `DataValue` objects, including those returned from parameters, filters, selections, and underlying or summary data. Dates values are in UTC.

* Added documentation for the [clearSelectedMarksAsync()](pathname:///api/interfaces/worksheet.html#clearselectedmarksasync) method, which clears the selected marks in the current worksheet.

Bugs fixed in this release:

* Range filters now work correctly when the minimum or maximum values are equal to zero (0). Previously, calls to the `applyRangeFilterAsync()` method would ignore the `RangeFilterOptions` if the `min` or `max` properties were equal to zero (0).

* The `isVisible` attribute for dashboard zones is now set properly to true or false when the extension is initialized.

* The `setZoneVisibilityAsync()` method now supports ES6 map objects for the `zoneVisibilityMap` parameter.  

----

### Tableau Sandboxed Extensions Development Environment
*September 2019*

* Sandboxed Extensions are Tableau dashboard extensions that are not permitted to make external network requests. Available for testing with Tableau 2019.3. Fully supported in Tableau 2019.4.

* The Extensions API SDK provides a local development environment that replicates the Tableau Hosting Cloud Service for Sandboxed Extensions. You can test your Sandboxed extensions locally with the same sandbox policies before submitting the extension to Tableau for publication. See [Create and Test Sandboxed Extensions](./security/trex_sandbox_test.md) and [Publish Sandboxed Extensions](./publish/trex_sandbox_publish.md).

----

### Extensions API library v1.3
*July 2019*

- Tableau Extensions API library: `tableau.extensions.1.3.0.js` <br />(download or clone the Extensions API repository on [GitHub](https://github.com/tableau/extensions-api).) <br/>

About this release:

- The Extensions API library version 1.3 (`tableau.extensions.1.3.0.js`) is backward compatible with previous releases of the library.

- Now available: Extensions API type definitions and new TypeScript samples. The latest release provides the TypeScript type definitions so that you can author your extension using TypeScript. See [Use TypeScript with the Extensions API](./core/trex_typescript.md) and [TypeScript Sample Extensions](https://github.com/tableau/extensions-api/tree/master/Samples-Typescript). on GitHub.

- New all-values-selected property for categorical filters (`filter.isAllSelected`). You can use this new property to determine when all values of categorical filters are selected. The `isAllSelected` property is a Boolean and returns True or False. Prior to this release, there was no way to tell if all values of categorical filters were selected. The `filter.appliedValues` method returns empty array when **(All)** is selected, so there is no way to use that method to determine if all values are selected or if no values are selected. The `isAllSelected` property is available starting with Tableau 2019.2 and the Extensions API library version 1.3 (`tableau.extensions.1.3.0.js`).

    ```javascript
    worksheet.getFiltersAsync().then((filters) => {
        let filter = filters[0];
        if (filter.filterType === tableau.filterType.Categorical)
        {
           console.log(filter.isAllSelected);
        }
    }
    
    ```




----
### Extensions API library v1.2
*April 2019*

* Tableau Extensions API library: `tableau.extensions.1.2.0.js` <br />(download or clone the Extensions API repository on [GitHub](https://github.com/tableau/extensions-api).) <br/>



About this release:

* The Extensions API library version 1.2 (`tableau.extensions.1.2.0.js`) is backward compatible with previous releases of the library. You can use the Extensions API library version 1.2 for extensions on Tableau 2018.2 and later. The library contains logic to handle any necessary conversions for the supported version of Tableau the extension is running in. For the best experience, you should always use the latest version of the library with the extensions you create. 

* The names of the Extension API library files have changed. The hypens (-) have been removed from the file name (was `tableau-extensions-*`, now `tableau.extensions.*`). Starting with the 1.2 library, the names of the library files are as follows: 
```
tableau.extensions.1.2.0.js
tableau.extensions.1.2.0.min.js
tableau.extensions.1.latest.js
tableau.extensions.1.latest.min.js
```
**Note** If you have previously been referencing `tableau-extensions-1.latest.js` in your code, you will need to use the new naming convention when you upgrade to the 1.2 library (`tableau.extensions.1.latest.js`). 


Bugs fixed in this release:

* Fixed in the Extensions API library 1.2, the type of `DataValue.value` is now the raw native value as a JavaScript type, rather than always defaulting to **String**. A `DataValue.value` can be one of the following JavaScript types: **String**, **Number**, **Boolean**, or **Date**.
 A `DataValue` is returned as a property of a `DataTable` in methods, such as `getSummaryDataAsync()` or `getUnderlyingDataAsync()`.  Note that special values, regardless of type, are always returned as **String** values surrounded by percent signs, such as `%null%`, or `%no-access%`. <br/>**Important!** If your code depended on the type of `DataValue.value` always being a **String**, that code will now break with this fix.

* The `environment.apiVersion` property now correctly reports the version of the Extensions API library that the extension is using.

* The documentation for the <a href="pathname:///api/interfaces/worksheet#selectmarksbyvalueasync" target="_blank"><code>selectMarksByValueAsync</code></a> method has been corrected. If you are calling the method, be sure to specify the complete namespace for the `SelectionUpdateType` enum that is passed to the method as the `updateType` parameter.  For example, use `tableau.SelectionUpdateType.Replace`, to replace the currently selected marks with the values you specify in the method call.

----


### Tableau 2019.1
*February 2019*

* Tableau Extensions API library: `tableau-extensions-1.1.0.js` <br />(download or clone the Extensions API repository on [GitHub](https://github.com/tableau/extensions-api).) <br/>

* Download [Tableau Desktop 2019.1](https://www.tableau.com/support/releases). or [Tableau Server 2019.1](https://www.tableau.com/support/releases/server).

Changes in this release: 

* Upgrade to the Chromium browser, which allows modern web technologies to be used with dashboard extensions (HTML 5, CSS, native ES6 support). Tableau 2019.1 now uses Qt 5.10, The Qt WebEngine is based upon Chromium 61.0.3163.99, with additional security fixes from newer versions. With this update, you no longer need to download and use a specific version of Chromium (47.0.2526.0) to debug dashboard extensions on Tableau Desktop. You can now debug extensions in Tableau Desktop using Chrome. 

* Show and hide capabilities for extensions (now you see it, now you don't). For more information, see [Show and Hide Objects in the Dashboard](./core/trex_show_hide.md).





Bugs fixed in this release: 

* Select dropdown fixed on Macintosh. (TFSID 758234)
* The `applyRangeFilterAsync` method allows full range of options, and doesn't break when a user selects "all". (TFSID 766488)
* Fixed “Access is denied” error encountered when switching from a sheet containing an extension to any other sheet on a tabbed workbook on server (fixed in Tableau 2019.1, 2018.3.2, 2018.2.5).

* Full support for IE11 now starts in 2018.2.3, 2018.2.3. 

* Fixed in Tableau Desktop 2019.1: Extension API synchronization issue.<br/>
 In previous version of Tableau Desktop (2018.2, 2018.3), the execution of extension API calls was not properly synchronized with longer running actions. These issues would most often occur with a worksheet that took multiple seconds to refresh. This could manifest itself in various ways:
   *	The `intializeAsync` method could return the promise before the dashboard was properly loaded in Tableau.
   *	A `FilterChanged` event could be triggered before the data was actually refreshed. As a result, calls to `getSummaryDataAsync` could return the data before the filter was changed.
   * If an extension API was called from a `setInterval` or similar function, while other actions were going on, Tableau could occasionally crash.

  Customers who upgrade to Tableau Desktop 2019.1 will not have these synchronization issues with extensions.  



 



---

### Tableau 2018.3
*November 2018*

- Tableau Extensions API library: `tableau-extensions-1.0.0.js` *No change for this release*<br />(download or clone the Extensions API repository on [GitHub](https://github.com/tableau/extensions-api).)

- Download [Tableau Desktop 2018.3](https://www.tableau.com/support/releases). or [Tableau Server 2018.3](https://www.tableau.com/support/releases/server).




New in this release:

- Updated documentation. [Getting Started](./dashext/trex_getstarted.md), [Create a "Hello World" Dashboard Extension](./dashext/trex_create.md), <br/>[Debugging Extensions on Tableau Desktop](./debug/trex_debugging.md), [Debugging Extensions on Tableau Server and Tableau Cloud](./debug/trex_debug_server.md), [Error Codes and Error Handling for Extensions](./debug/trex_error_handling.md). 

---


### TC18
*October 2018*

- Tableau Extensions API library: `tableau-extensions-1.0.0.js` *No change for this release*<br />

New in this release: 


- Use the [Design Guidelines for Dashboard Extensions](./ux_design.md). as a roadmap for designing great dashboard extensions. 


- Create extensions with the look-and-feel of Tableau, using the [Tableau UI](https://tableau.github.io/tableau-ui/.md)., a React component library.  

- New and updated documentation. See [Publishing a Dashboard Extension](./publish/trex_publish.md). <br/>
For information about developing and running an extension locally on `http://localhost` and testing it on Tableau Cloud or Tableau Server (over HTTPS), see [Load and view localhost content on sites that use secure connections](./security/trex_security.md#load-and-view-localhost-content-on-sites-that-use-secure-connections).

Bugs fixed in this release:

- Extensions are now fully supported in Internet Explorer (IE 11). 

---

### Tableau 2018.2
*July 2018*

Release of the Tableau Extensions API

- Tableau Extensions API library: `tableau-extensions-1.0.0.js` <br />
  (download or clone the Extensions API repository on [GitHub](https://github.com/tableau/extensions-api).)
- Download [Tableau Desktop 2018.2](https://www.tableau.com/support/releases). or [Tableau Server 2018.2](https://www.tableau.com/support/releases/server).
 
 Bugs fixed in this release:

 - Extensions are now fully supported in Internet Explorer (IE 11). 

### Tableau 2018.2 (Beta 2)
*June 4, 2018*

Update of the Tableau Extensions API

- Tableau Extensions API library: `tableau-extensions-0.16.0.js`
- Download Tableau Desktop, Tableau Server from [Tableau 2018.2 Beta](https://prerelease.tableau.com/project/home.html?cap=c43269484c1f45a68f5ad4fc4660b2ab).


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
Server administrators can manage dashboard extensions on the **Settings > Extensions** tab (for each site and for the server). By default, only extensions that do not require full data access are allowed to run. HTTPS is required. Server administrators can enable dashboard extensions that are trusted to access full data by adding them to a safe list for a site. Server administrators can control whether or not the users will see prompts (asking them to allow the extension to access data) when users are adding an extension to a dashboard, or when they are interacting with a view that has an extension.  For more information, see [Dashboard Extensions in Tableau Server](https://onlinehelp.tableau.com/current/server/en-us/dashboard_extensions_server.htm).

- The **About** dialog box. Users can now find out about an extension in the dashboard by selecting the layout container and then clicking **About** from the **More Options** menu. Information from the extension manifest file (`.trex`) is used to populate a dialog box. (Note that the dialog box you see might look slightly different from this example.) 

   ![](./assets/about_extension_dialog.png)



---

### Tableau 2018.2 (Beta 1)
*April 26, 2018*

Download Tableau Desktop, Tableau Server from [Tableau 2018.2 Beta](https://prerelease.tableau.com/project/home.html?cap=c43269484c1f45a68f5ad4fc4660b2ab).

--- 

### Developer Preview (0.12.8)
*April 13, 2018*

Update of the Tableau Extensions API 
- Tableau Extensions API library: `tableau-extensions-0.12.8.js`
- Tableau Desktop, Tableau Server (from [Extensions API Developer Preview](https://prerelease.tableau.com/project/home.html?cap=52e2710a0793434d82142736c7ab3029).)

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
- Tableau Desktop, Tableau Server (from [Extensions API Developer Preview](https://prerelease.tableau.com/project/home.html?cap=52e2710a0793434d82142736c7ab3029).)

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
- Tableau Desktop, Tableau Server (from [Extensions API Developer Preview](https://prerelease.tableau.com).)

Updated in this release:

- Extensions API library goes to `12` (one better than `11`). The library has been refactored to be smaller, faster, lighter. 

- Dashboard authors and users of your extension can decide whether to allow the extension to run or not. When users add an extension that can access the underlying data in a dashboard, they now see a prompt that lets them allow the extension to run. In addition, when someone opens a dashboard that contains extensions, they see a dialog box that lists information about all the extensions in the dashboard, and a prompt to allow the extensions to run. For more information, see [Accessing Underlying Data](./security/trex_data_access.md)

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
- Tableau Desktop, Tableau Server (from [Extensions API Developer Preview](https://prerelease.tableau.com).)

Updates in this release:

- New *configure feature*, which allows you to register a custom JavaScript callback for a context menu item in the extension zone. See [Adding a configuration dialog box](#adding-a-configuration-menu-item) and the [UINamespace](https://github.com/tableau/extensions-api/tree/master/Samples/Dashboard/UINamespace?=target="_blank") sample.

-	A fix for a problem that existed in the 0.9.0 release that caused extension initialization to break on Tableau Server.  


For other changes with this release, see [Known Issues](https://prerelease.tableau.com/project/article/default.html?cap=52e2710a0793434d82142736c7ab3029&arttypeid=f592dc03830d480a862740e4a6bde998) on the [Extensions API Developer Preview](https://prerelease.tableau.com). site.

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
To better understand how to use the context menu, and to see it in action, check out the updated [UINamespace](https://github.com/tableau/extensions-api/tree/master/Samples/Dashboard/UINamespace?=target="_blank") sample. 


--- 

### Developer Preview (0.9.0)
*February 14, 2018*

- Update of the Tableau Extensions API 
- Tableau Extensions API library: `tableau-extensions-0.9.0.js`
- Tableau Desktop (from [Extensions API Developer Preview](https://prerelease.tableau.com).)

Updates in this release:
- [Updates to the UI namespace](#updates-to-the-ui-namespace) 
- [Permissions added to access full data](#permissions-added-to-access-full-data)
- [Error codes for extensions](#error-codes-for-extensions)



#### Updates to the UI namespace

 This preview release introduces more options for the UI namespace. You can now control the initial sizing (height, width) of a modal dialog box (or *popup*). The modal dialog itself is an extension. Using the `displayDialogAsync()` and `closeDialog()` methods you can pass payloads between the calling extension and the extension running in the modal dialog box. For an example of how you can use the UI namespace to create a configuration dialog box, see the [UINamespace](https://github.com/tableau/extensions-api/tree/master/Samples/Dashboard/UINamespace?=target="_blank") sample.  The sample also shows how to use the settings event to capture the new configuration. The sample source code has extensive comments that describe how to use these new features in the Extensions API. 

- New sample: [UINamespace](https://github.com/tableau/extensions-api/tree/master/Samples/Dashboard/UINamespace?=target="_blank")


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

The `<permissions>` element must be added under `<dashboard-extension>` in the manifest file. For a complete description of the manifest, see the [Tableau Extensions Manifest File](./dashext/trex_manifest.md).

If full data is not declared in the manifest file, and the extensions calls one of the APIs that accesses any underlying data or data source information, the API call fails. In addition, an error is written to the Tableau log file (`log.txt`). If you are debugging the extension with the Chromium web browser, an error is reported the console pane. The error message would look similar to the following:

```
PermissionValidation.ts:26 Extension (name = DataSources Sample, ID = com.tableau.extensions.demo.local) is missing required permission: full-data
Error: internal-error: permission-denied: Missing required permission to run get-underlying-data(...)

```


#### Error codes for extensions  

Errors that are returned from the Extensions API are custom Tableau Error objects that extends the standard JavaScript error object.


The Extensions API wraps the standard error object with an `errorCode` property. Any time you encounter an error when you are developing your extension, you can look at this `errorCode` to determine the cause. See [Error Codes](pathname:///api/enums/tableau.errorcodes.html).

For an example of how to handle error conditions, see the [UINamespace](https://github.com/tableau/extensions-api/tree/main/Samples/Dashboard/UINamespace?=target="_blank") sample. The sample shows how you could handle the error condition that occurs if a user dismisses a modal dialog box (`DialogClosedByUser`).  The following snippet illustrates this pattern:

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
- Tableau Desktop 10.5 RC, Tableau Server 10.5 (from [Extensions API Developer Preview](https://prerelease.tableau.com).)


**New desktop authoring experience** 

You no longer need to place the `.trex` file for the extension in a predetermined folder, you now do the following:

 1. In the dashboard, under **Objects** on the left, select **Extension** and drag it to the dashboard sheet on the right.
   The **Select an Extension** dialog box appears. 
 2. The first time you open the dialog box to add an extension, you will see a link to **Choose an Extension**. Click the link and browse to the directory where you have the `.trex` file. 
Subsequently, when you drag the **Extension** on the dashboard, the dialog box shows you the most recently used list, choose from the list, or click **Browse** to select another extension.

**New UI namespace** 
  
- You can now launch a new modal dialog using the function: `tableau.extensions.ui.displayDialogAsync(dialogExtensionURL)`.
- The URL you want to load (`dialogExtensionURL`) will be an extension itself.  
- The extension in the dialog will have full access to the extensions API.  When ready to close to the dialog, from the dialog extension you can call `tableau.extensions.ui.closeDialog(string)`. See the documentation for details.
- Note that the UI namespace is work is still in progress and has some upcoming additions. *Stay tuned for more.*

**HTTPS and security**  

For information about the HTTPS requirements for extensions, see [Security and Tableau Extensions](./security/trex_security)

**Remote Debugging** 

Due to changes in this release, remote debugging does not work as expected in Tableau Desktop. To enable debugging, you must add the `--remote-debugging-port=8696` option to the command used to start Tableau. The easiest way to do this is to open the Tableau shortcut on the **Start** menu. Open the file location of the Tableau shortcut. Right-click the Tableau shortcut and click **Properties**. In the Target text box, append the remote debugging option to the command. Do not enclose the option in quotation marks. 
```
   "C:\Program Files\Tableau\Tableau main\bin\tableau.exe" --remote-debugging-port=8696
```
For information about debugging extensions, see [Remote Debugging of JavaScript and HTML](./debug/trex_debugging.md).


---

### Developer Preview (0.7.0)
*November 29, 2017*

- Update of the Tableau Extensions API. 
- Tableau Extensions API library: `tableau-extensions-0.7.0.js`
- Tableau Desktop 10.5 RC, Tableau Server 10.5 (from [Extensions API Developer Preview](https://prerelease.tableau.com).)

**Breaking change**

- Schema change - Updated XSD file for the dashboard extensions manifest file (`.trex`). 
  If you have an existing extension, you must update the `.trex` file to follow the new schema. There is a script you can run that converts the manifest file for you. Or you can manually make the changes. For more information about the manifest, see [Tableau Extension Manifest File](./dashext/trex_manifest.md). You can download the manifest conversion script from the **Extensions API Developer Preview** on [https://prerelease.tableau.com](https://prerelease.tableau.com)..
- Existing workbooks - if you have an existing workbook that uses a dashboard extension, you will not be able to open it with this (`0.7.0`) release. To get around this issue, update the manifest file (`.trex`), update your extension to use `tableau-extensions-0.7.0.js`, and then open a new workbook and re-create the dashboard.  


**New features**  

-	Tableau Server.  You can publish dashboards containing extensions and run them on Tableau Server. You can download a version of Tableau Server 10.5 that supports dashboard extensions from the **Extensions API Developer Preview** on [https://prerelease.tableau.com](https://prerelease.tableau.com)..
-  Security - Your dashboard extension must use an HTTPS connection. If you are using `localhost` for development, you can still use HTTP. 
- Sharing dashboards  -  the dashboard extension now gets saved with the workbook, so you can share your workbooks that use the extension with others. 
-	New method `DataSource.getConnectionSummariesAsync`  gets a summary object for each underlying connection in a data source.
-	New method `DataSource.getActiveTablesAsync` gets all tables used to create the data source (what you would see in the join canvas).

- Logging - You can view dashboard extension activity in Tableau log files. Tableau records extension events that you can use to troubleshoot registration errors and command execution. See [Use Log files to Troubleshoot Dashboard Extensions](./debug/trex_logging.md).  


**Bug fixes** 

-	The `Worksheet.clearFiltersAsync` method no longer removes filters from your worksheets, but properly resets the filters to a default state.
- The name of the selected dashboard extension now appears instead of "other" in the dashboard Layout pane.



--- 

### Developer Preview (0.6.0) 
*Oct 10, 2017*

Initial release of the Tableau Extensions API. Provides support for dashboard extensions. 

Tableau Extensions API library: `tableau-extensions-0.6.0.js`

Tableau Desktop 10.5 beta
