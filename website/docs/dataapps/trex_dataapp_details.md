---
title: Data App Details
description: The workbook, manifests, web resources, data connections, and runtime access that make up a Tableau data app.
---

_The data apps beta is available only on Tableau Cloud._

A data app is a Dashboard or Viz Extension whose web resources are packaged with a Tableau workbook. The workbook places the interface and connects its data sources; the package supplies its manifests and front-end code. Tableau serves the bundled resources when a viewer opens the published workbook. Application code runs in the viewer's browser and queries Tableau at runtime.

The examples below describe a worksheet-based app named **Regional Sales**, using a published data source named **Sales** with a **Region** field. The same package model supports Dashboard Extensions, with the corresponding dashboard placement and manifest.

## Files and package structure

An unpacked app has this structure:

```text
Regional Sales/
├── Regional Sales.twb
└── Packages/
    └── com.example.regional-sales/
        ├── manifest.json
        ├── extensions/
        │   └── data-app.trex
        └── content/
            ├── index.html
            └── src/
                ├── app.js
                ├── styles.css
                └── tableau.extensions.1.latest.js
```

| Element | Responsibility |
| --- | --- |
| `.twb` workbook | Contains the worksheet or dashboard, the extension instance and its settings, and the data-source connections. |
| `manifest.json` | Identifies the package and its version, display name, and author. |
| `.trex` extension manifest | Declares the extension's identity, placement type, entry page, minimum API version, and permissions. |
| `content/` | Contains the HTML entry page and all bundled scripts, styles, images, fonts, and other assets. |
| Extensions API library | Initializes the extension's connection to Tableau and exposes supported runtime APIs. |

The published `.twbx` is a ZIP archive with the `.twb` and `Packages/` at its root. The enclosing `Regional Sales/` directory is not an extra archive level. Resource paths must resolve inside the package; files on a developer's machine do not become available to viewers unless bundled.

## Package identity

`Packages/com.example.regional-sales/manifest.json` contains the package's display metadata:

```json
{
  "id": "com.example.regional-sales",
  "version": "1.0.0",
  "name": "Regional Sales",
  "author": "Example Company"
}
```

In this single-extension example, the package directory, package ID, and extension ID use the same unique reverse-domain identifier. The package and extension versions are `1.0.0`. A new distributed version needs consistent updated metadata. These fields describe the supplied example format; additional capabilities depend on the supported beta package schema.

## Extension manifest and entry page

`extensions/data-app.trex` describes the worksheet integration:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest manifest-version="0.1" xmlns="http://www.tableau.com/xml/extension_manifest">
  <worksheet-extension id="com.example.regional-sales" extension-version="1.0.0">
    <default-locale>en_US</default-locale>
    <name resource-id="name" />
    <description>Regions from a published Tableau data source.</description>
    <author name="Example Company" email="support@example.com"
            organization="Example Company" website="https://example.com" />
    <min-api-version>1.11</min-api-version>
    <source-location>
      <url>index.html</url>
    </source-location>
    <icon>iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=</icon>
    <permissions>
      <permission>full data</permission>
    </permissions>
    <encoding id="field">
      <display-name>Data</display-name>
      <role-spec>
        <role-type>discrete-dimension</role-type>
        <role-type>continuous-dimension</role-type>
        <role-type>discrete-measure</role-type>
        <role-type>continuous-measure</role-type>
      </role-spec>
      <fields max-count="50" />
      <encoding-icon token="level" />
    </encoding>
  </worksheet-extension>
  <resources>
    <resource id="name">
      <text locale="en_US">Regional Sales</text>
    </resource>
  </resources>
</manifest>
```

`index.html` resolves under the package's `content/` directory. The icon is a small Base64 placeholder. The `field` encoding defines a Data tile on the Marks card; `50` is this example's field count, not a platform limit. The `full data` declaration does not grant additional Tableau data permissions.

The supplied apps declare minimum API version `1.11`. This is an Extensions API version, not a Tableau product version or a guarantee that every data app API is available. The library and Tableau environment must support the methods the app uses.

For dashboard placement, the `.trex` uses the [Dashboard Extension manifest](../dashext/trex_manifest.md) and the workbook hosts the extension in a dashboard zone. The example above uses the [Viz Extension manifest](../vizext/trex_viz_manifest.md) and a worksheet pane.

## Workbook integration

A package directory alone does not place the app in a view. The `.twb` contains an extension instance, a referenced extension manifest, and the app's data-source connection. The following XML fragments show the relationships inside a worksheet workbook; they are parts of the workbook, not standalone `.twb` files.

### Extension instance

The app's worksheet contains this pane under `worksheet/table/panes`:

```xml
<pane selection-relaxation-option="selection-relaxation-allow">
  <view><breakdown value="auto" /></view>
  <mark class="VizExtension" />
  <add-in add-in-id="com.example.regional-sales"
          extension-url="tableaulocalext:///com.example.regional-sales/content/index.html"
          extension-version="1.0.0"
          instance-id="A1B2C3D4E5F60718293A4B5C6D7E8F90">
    <instance-settings />
    <type-settings><worksheet /></type-settings>
  </add-in>
  <encodings>
    <custom column="[sqlproxy.sales].[none:Region:nk]"
            custom-type-name="field"
            encoding-id="{8A740CEB-6657-25B6-6557-242364572290}" />
  </encodings>
</pane>
```

The `tableaulocalext:///` URL addresses the package's entry page. `add-in-id` and `extension-version` match the extension manifest. Instance and encoding identifiers must be unique for the instances they identify. The custom encoding refers to both the manifest's `field` encoding and the worksheet's Region column instance.

Under `workbook/referenced-extensions`, the corresponding `referenced-extension` contains a copy of the extension manifest and a `referenced-views` element:

```xml
<referenced-views>
  <referenced-view instances="1" viewId="Regional Sales" />
</referenced-views>
```

In the workbook's manifest copy, the display name is resolved to `<name>Regional Sales</name>` and the source URL is the full `tableaulocalext:///com.example.regional-sales/content/index.html` URL. The worksheet's `name`, its `window` name under `workbook/windows`, and this `viewId` all identify **Regional Sales**.

### Published data-source connection

The workbook's top-level `datasources` contains the published source. This example uses site content URL `sales-site`, published data-source content URL `Sales`, and a placeholder Tableau Cloud host:

```xml
<datasource caption="Sales" inline="true" name="sqlproxy.sales" version="18.1">
  <repository-location id="Sales" path="/t/sales-site/datasources" site="sales-site" />
  <connection channel="https" class="sqlproxy" dbname="Sales"
              directory="/dataserver" port="443"
              server="your-pod.online.tableau.com"
              server-ds-friendly-name="Sales" username="">
    <relation name="sqlproxy" table="[sqlproxy]" type="table" />
  </connection>
  <column aggregation="Count" caption="Region" datatype="string"
          name="[Region]" role="dimension" type="nominal" />
</datasource>
```

The source's content URL is its repository identity; it is distinct from the display caption and REST API LUID. Host, site, repository identity, and field definitions must match the actual published source. Workbook format version `18.1` follows the supplied beta example and must be supported by the target environment.

The app's worksheet also lists that source and its field dependencies under `worksheet/table/view`:

```xml
<datasources>
  <datasource caption="Sales" name="sqlproxy.sales" />
</datasources>
<datasource-dependencies datasource="sqlproxy.sales">
  <column aggregation="Count" caption="Region" datatype="string"
          name="[Region]" role="dimension" type="nominal" />
  <column-instance column="[Region]" derivation="None"
                   name="[none:Region:nk]" pivot="key" type="nominal" />
</datasource-dependencies>
```

`sqlproxy.sales` is the workbook-local connection key shared by the source definition, worksheet source, dependencies, and encoding reference. Each additional source needs its own consistent key and a connection on the app's worksheet. An empty `datasources` element leaves the app without a source to query.

## Front-end resources and runtime data

`content/index.html` loads bundled resources using paths relative to itself:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Regional Sales</title>
    <link rel="stylesheet" href="./src/styles.css" />
    <script src="./src/tableau.extensions.1.latest.js" defer></script>
    <script src="./src/app.js" defer></script>
  </head>
  <body>
    <main>
      <h1>Regional Sales</h1>
      <pre id="result" role="status">Connecting to Tableau…</pre>
    </main>
  </body>
</html>
```

`content/src/app.js` initializes Tableau, selects the connected source by name, and requests Region values at runtime:

```javascript
async function render() {
  const output = document.getElementById('result');
  try {
    await tableau.extensions.initializeAsync();
    const sources = await tableau.extensions.workbook.getAllDataSourcesAsync();
    const source = sources.find((item) => item.name === 'Sales');
    if (!source) throw new Error('The Sales data source is not connected.');

    const result = await source.queryAsync({
      fields: [{ fieldCaption: 'Region' }],
    });
    output.textContent = JSON.stringify(result, null, 2);
  } catch (error) {
    output.textContent = 'Unable to load regions. Check the data connection and access.';
    console.error(error);
  }
}

render();
```

The example displays the query response for inspection. A finished interface renders the returned rows, handles empty results, and updates queries as controls change. A minimal `styles.css` can contain `body { font-family: system-ui, sans-serif; margin: 1.5rem; }`.

| Runtime API | Role |
| --- | --- |
| `initializeAsync()` | Establishes the extension's Tableau context before other API calls. |
| `workbook.getAllDataSourcesAsync()` | Finds sources connected to the workbook in supported data app environments. |
| Data source `queryAsync()` | Queries Tableau data using the requested fields, aggregations, and filters. |
| Data source `readMetadata()` | Exposes data-source metadata. |
| Extensions API `fetch()` | Makes supported Tableau REST API requests within the site's allowed methods and paths and the viewer's permissions. |

Dashboard placement provides `dashboardContent`; worksheet placement provides `worksheetContent`. The workbook namespace in supported environments supplies workbook-level data access. Opening the HTML outside Tableau does not establish this runtime connection. See the [Extensions API reference](pathname:///api/) for supported method signatures.

## Hosting and access

Tableau hosts the packaged front end; external services remain separate dependencies. The app executes as the viewer, so access to the workbook and access to each published data source are both required. Manifest permissions do not override Tableau permissions or row-level security.

Site controls govern packages, external origins, and Tableau REST API methods and paths. An app's access requirements should identify every external origin and REST operation it needs for administrator review. Passwords, tokens, and fixed copies of sensitive data do not belong in browser resources.

A complete app loads entirely from its published package, reaches its connected sources, and handles loading, empty, error, and restricted-access states. Publishing and subsequent updates require the appropriate destination permissions. Details of site controls and access review are in [Manage Data Apps](./trex_dataapp_manage.md) and [Data App security](./trex_dataapp_security.md). The [Get Started guide](./trex_dataapp_getstarted.md) covers creating the same components with an AI coding assistant.
