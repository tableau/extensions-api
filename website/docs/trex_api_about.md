---
title: Tableau Extensions API Basics
description: Overview of the API
--- 

The Tableau Extensions API is organized by namespaces. The type of extension you create determines the set of namespaces the extension will have access to.


| Extension | Description|
| ----- | ------- |
| Dashboard extensions | For example, if you create and register a dashboard extension, the extension will have access to the `dashboardContent` namespace, which provides access to the dashboard object. When you have the dashboard object, you have access to all elements in the dashboard, including the worksheets, marks, filters, parameters, and data sources. |
| Viz extensions | If you create and register a viz extension, the extension will have access to the `worksheetContent` namespace, which provides access to the worksheet object. When you have the worksheet object, you have access to all elements in the worksheet, including the marks, filters, parameters, and data sources.|
| Workspace extensions | If you create a workspace extension (a `.trex` in My Tableau Repository, not in a workbook), it runs at the application level. After init it has `tableau.extensions.workspaceContent` (`workbook`, plus `WorkbookChanged` and `ActiveSheetChanged`). It does **not** get `dashboardContent` or `worksheetContent`. |
| [Data apps (Cloud-only)](./dataapps/trex_dataapp_overview.md) | Data apps are available only on Tableau Cloud. They combine a custom web interface with Tableau hosting and runtime access to Tableau data. The app's Dashboard or Viz Extension registration determines access to `dashboardContent` or `worksheetContent`. In supported environments, the `workbook` namespace provides access to workbook data sources, which the app can query using `queryAsync()`. See [Get Started with data apps](./dataapps/trex_dataapp_getstarted.md) for setup guidance. |

## Methods added for Data Apps

Data apps are available only on Tableau Cloud. Three methods added to the Extensions API for this release support data apps:

| Method | Purpose |
| --- | --- |
| `queryAsync()` | Gets data from the configured data source asynchronously. |
| `readMetadata()` | Gets a data source's metadata. |
| `fetch()` | Makes a curated set of Tableau REST API requests, subject to the site's allowed API access and the viewing user's permissions. |

See [Manage data apps](./dataapps/trex_dataapp_manage.md) and [data app security](./dataapps/trex_dataapp_security.md) for the controls that apply to these requests.

## Navigating the top-level `tableau` and `extensions` namespaces

The [Extensions API Reference](pathname:///api) namespaces are like containers that comprise the classes and methods for communicating with Tableau components. At the highest-level, is the `tableau` namespace, which has no constructs, but contains the `extensions` namespace. The `tableau` namespace serves primarily as the overall container and keeps the global namespace clean.

The `extensions` namespace is the namespace for Tableau extensions. A dashboard extension is one type of extension. When a extension is registered as a dashboard extension, it has access to the `dashboardContent` namespace, and all of the objects and classes of the dashboard.

A viz extension is another type of extension. When a extension is registered as a viz extension, it has access to the `worksheetContent` namespace, and all of the objects and classes of the worksheet. A viz extension does not have access to the `dashboardContent`.

A workspace extension is the third type. It runs at the application level, so it isn't bound to a dashboard or a worksheet. After you initialize it, use `tableau.extensions.workspaceContent` for the active workbook (or none) and for workbook/sheet lifecycle events. It does not have `dashboardContent` or `worksheetContent`.

The type of extension you have registered determines what namespaces will be available. Some namespaces, like the `settings`, `environment`, and `ui` are available to all extensions. For workspace extensions, `tableau.extensions.settings` is scoped to the extension (values are not saved in a workbook).  

Call `tableau.extensions.initializeAsync()` to initialize the extension before using the Extensions API. When this method is called, it also triggers Tableau to configure the Extensions API. Like the Tableau JavaScript API, the Extensions API follows the [CommonJS Promises/A standard](http://wiki.commonjs.org/wiki/Promises/A) for asynchronous method calls.

<!-- ![]({{site.baseurl}}/assets/tab_ext_class.png) -->

```mermaid

classDiagram
    direction RL
    namespace tableau {  
        class extensions
        class dashboardContent
        class worksheetContent
        class workspaceContent
        class environment
        class settings
        class ui
    }

    class extensions
    extensions ..> dashboardContent
    extensions ..> worksheetContent
    extensions ..> workspaceContent
    extensions ..> environment
    extensions ..> settings
    extensions ..> ui
    extensions: initializeAsync()

```

## Registering and accessing dashboard extensions

The dashboard extension is one type of extension in the Tableau extensions namespace (and it is accessed using `tableau.extensions`). To register the extension, you declare the type of extension in the manifest file (`.trex`). For more information about what goes in the file, see [Tableau Manifest File](./dashext/trex_manifest.md).

```xml
<dashboard-extension id="com.example.extensions.name" extension-version="0.1.0">

```

After the extension is initialized, it provides access to the objects in the dashboard, but also has access to the namespaces that are common to all extensions. For example, you can use the `tableau.extensions.environment` to query the environment the dashboard is running in, or `tableau.extensions.settings` to set or get key-value pairs associated with a specific instance of the extension. That is, an extension that has been added to one dashboard can have different settings from another instance of the extension in another dashboard. The `tableau.extensions.settings` can be saved with the workbook, so you can configure the dashboard and the extension in specific ways and then share that configuration with others. 

To access the objects in the dashboard, you specify the namespace reserved for dashboard extensions `dashboardContent`, which then gives you access to the dashboard object. For example, the following code snippet gets the array of worksheets in the dashboard.

```javascript

window.onload = tableau.extensions.initializeAsync().then(async () => {
  // Get the array of worksheets in the dashboard
  const worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;

// ...
});

```


<!-- The following diagram shows an outline of the namespace hierarchy that you traverse to get to worksheets. -->

<!-- ![]({{site.baseurl}}/assets/tab_ext_class_worksheet.png) -->

## Registering and accessing viz extensions

The viz extension is another type of extension in the Tableau extensions namespace (and it is accessed using `tableau.extensions`). To register the viz extension, you specify the extension as a `worksheet-extension` in the manifest file (`.trex`). For more information about what goes in the file, see [Tableau Viz Manifest File](./vizext/trex_viz_manifest.md).

```xml
<worksheet-extension id="com.example.extensions.name" extension-version="0.1.0">

```

After the viz extension is initialized, it provides access to the objects in the worksheet, but also has access to the namespaces that are common to all extensions. For example, you can use the `tableau.extensions.environment` to query the environment the extension is running in, or `tableau.extensions.settings` to set or get key-value pairs associated with the extension. That is, an extension that has been added to one worksheet can have different settings from another instance of the extension in another worksheet. The `tableau.extensions.settings` can be saved with the workbook, so you can configure the viz extension in specific ways and then share that configuration with others.

To access the properties and methods in the worksheet, you specify the namespace used by viz extensions, `worksheetContent`, which then gives you access to the worksheet object. For example, the following code snippet gets the worksheet in the dashboard.

```javascript

window.onload = tableau.extensions.initializeAsync().then(async () => {
  // Get the worksheet that the Viz Extension is running in
  const worksheet = tableau.extensions.worksheetContent.worksheet;
  // ...

});

```

## Registering and accessing workspace extensions

The workspace extension is another type of extension in the Tableau extensions namespace (accessed with `tableau.extensions`). Declare it as `workspace-extension` in the manifest file (`.trex`), and put that file in **My Tableau Repository/Extensions/**. `<entry-points>` add an authoring toolbar button and an authoring menu item. Each one opens a side pane. See [Tableau Workspace Extension Manifest File](./workspaceext/trex_workspace_manifest.md).

```xml
<entry-points>
  <authoring-toolbar region="primary">
    <label resource-id="name"/>
    <on-click><side-pane/></on-click>
  </authoring-toolbar>
  <authoring-menu>
    <label resource-id="name"/>
    <on-click><side-pane/></on-click>
  </authoring-menu>
</entry-points>
```

Unlike dashboard and viz extensions, this one isn't bound to a workbook. `initializeAsync()` is the same call as for other types. After init you still get `environment`, `settings`, and `ui`. Settings live with the extension, not the workbook. The active workbook (or none) and lifecycle events are on `tableau.extensions.workspaceContent`. Those events go to every running workspace extension. When a workbook is open, `workbook.activeSheet` is a full sheet. After `ActiveSheetChanged`, read `activeSheet` again before using sheet listeners.

```javascript
await tableau.extensions.initializeAsync();

const workbook = tableau.extensions.workspaceContent.workbook;
if (workbook && workbook.activeSheet) {
  console.log(workbook.name, workbook.activeSheet.name);
}

tableau.extensions.workspaceContent.addEventListener(
  tableau.TableauEventType.WorkbookChanged,
  (event) => {
    console.log(event.workbook ? event.workbook.name : '(none)');
  }
);
```

## Using properties and methods in the `dashboard` and `worksheet` namespace

The Tableau Extensions API is similar to the Tableau Embedding API. The `dashboard` and `worksheet` class or namespace inherit from an abstract `sheet` class. You can use the [Extensions API Reference](pathname:///api/) to find the properties and methods that are available for dashboard and worksheet objects.

For example, after you access a worksheet object, you can use that worksheet to get properties. such as the name or size, or to call methods that get or apply filters, get data, or set or remove event listeners.

The following code fragment shows an example of setting an event listener `addEventListener` on a worksheet.

```javascript
    // Add an event listener for the selection changed event on this sheet.
    // Assigning the event type to a variable just to make the example fit on the page here.
    const markSelection = tableau.TableauEventType.MarkSelectionChanged;
    let unregisterEventHandlerFunction = worksheet.addEventListener( markSelection, myfunctionHandleSelectionEvent);

```

The following diagram shows the `tableau` namespace.

```mermaid

classDiagram
    namespace tableau {  
        class extensions
        class dashboardContent
        class worksheetContent
        class workspaceContent
        class worksheet
        class dashboard
        class environment
        class settings
        class ui
        class worksheets
    }

    class extensions
    extensions ..> dashboardContent
    extensions ..> worksheetContent
    extensions ..> workspaceContent
    extensions ..> environment
    extensions ..> settings
    extensions ..> ui
    extensions: initializeAsync()
    


    class worksheetContent
    worksheetContent ..> worksheet 

    class dashboardContent 
      dashboardContent ..> dashboard
      dashboard
      worksheets

      class dashboard {
        name
        sheetType
        object
        worksheets 

      }
      dashboard ..> worksheets
      worksheets ..> worksheet

     class worksheets

     class worksheet

```



