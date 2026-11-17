---
title: Tableau Workspace Extension Manifest File
description: Components of the workspace extension manifest file
---

The `.trex` file is how Tableau knows your extension exists. A workspace extension uses the same root wrapper as dashboard and viz extensions: `<manifest manifest-version="0.1">`. Declare `<workspace-extension>` instead of `<dashboard-extension>` or `<worksheet-extension>`.

There is no `<layout>` and no `<encoding>`. Those belong to extensions that live inside a workbook.

Desktop opens the extension from `<entry-points>`. One `<source-location>` is shared by every entry point. Inside `<on-click>`, the target is `<side-pane/>`.

## Sample manifest file

This is [hello-world-extension.trex](pathname:///assets/workspace/hello-world-extension.trex). It declares the two entry points Desktop renders, and both open a side pane.

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest manifest-version="0.1" xmlns="http://www.tableau.com/xml/extension_manifest">
  <workspace-extension id="com.tableau.examples.hello-world" extension-version="0.0.1">
    <default-locale>en_US</default-locale>
    <name resource-id="name"/>
    <description>A minimal workspace extension for Desktop entry-point testing.</description>
    <author name="Tableau" email="dev@tableau.com" organization="Tableau" website="https://www.tableau.com"/>
    <min-api-version>1.1</min-api-version>
    <source-location>
      <url>https://<YOUR-DOMAIN.com>/hello-world-extension/index.html</url>
    </source-location>
    <entry-points>
      <authoring-toolbar region="primary">
        <label resource-id="name"/>
        <icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666666">
            <path d="M3 4h2v6h4V4h2v16H9v-8H5v8H3V4zm10 0h2l2 11 2-7h2l2 7 2-11h2l-3 16h-2l-3-8-3 8h-2L13 4z"/>
          </svg>
        </icon>
        <on-click><side-pane/></on-click>
      </authoring-toolbar>
      <authoring-menu>
        <label resource-id="name"/>
        <on-click><side-pane/></on-click>
      </authoring-menu>
    </entry-points>
  </workspace-extension>
  <resources>
    <resource id="name"><text locale="en_US">Hello World</text></resource>
  </resources>
</manifest>
```

Put the `.trex` in **My Tableau Repository/Extensions/**. It is not saved into the workbook.

A hosted `<url>` is `https`, or `http://localhost` while you develop. A bundled extension uses a path relative to the package `content/` directory. The package lives under **My Tableau Repository/Packages/`<package-id>`/**, with the `.trex` in `extensions/`. The package id and the extension id are different. A `.twbx` can carry a `Packages/` copy, and that copy is the one used for that workbook. A standalone `.trex` in **Extensions/** does not travel in a `.twb` or `.twbx`.

:::note

An installed extension is identified by its `id`, `extension-version`, and source URL together. Adding the same combination replaces the installed copy. A different version or a different URL is a separate extension.

:::

## Elements of the manifest file

<table>
<colgroup>
<col width="28%" />
<col width="72%" />
</colgroup>
<thead>
<tr class="header">
<th>Name of element</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><code>manifest</code></td>
<td>The root element that contains the manifest options.</td>
</tr>
<tr class="even">
<td><code>manifest-version</code></td>
<td>The version of the manifest. The version currently supported is 0.1.</td>
</tr>
<tr class="odd">
<td><code>workspace-extension</code></td>
<td>The element that contains the workspace extension. Requires <code>id</code> (reverse domain name, for example <code>com.example.extension</code>) and <code>extension-version</code>. Do not include <code>&lt;layout&gt;</code> or <code>&lt;encoding&gt;</code>. Declare <code>&lt;entry-points&gt;</code> for the authoring toolbar button and the authoring menu item.</td>
</tr>
<tr class="even">
<td><code>extension-version</code></td>
<td>The version of the extension. For example, <code>extension-version="0.0.1"</code>. Together with <code>id</code> and the source URL, this identifies the installed extension.</td>
</tr>
<tr class="odd">
<td><code>default-locale</code></td>
<td>Specifies the default locale for localized text. Both the locale format (<code>en_US</code>) and a language code (<code>en</code>) are accepted. An unsupported or invalid language falls back to English.</td>
</tr>
<tr class="even">
<td><code>name</code></td>
<td>The name of the extension. To localize it, set <code>resource-id</code> and put the strings in <code>resources</code>. Hello World uses this resource for the toolbar and menu labels.</td>
</tr>
<tr class="odd">
<td><code>description</code></td>
<td>A short description of the extension.</td>
</tr>
<tr class="even">
<td><code>author</code></td>
<td>Metadata about the author: <code>name</code>, <code>email</code>, <code>organization</code>, and <code>website</code>. <code>name</code> and <code>website</code> are required. <code>website</code> must use HTTPS and is the <b>Get Support</b> link in the <b>About</b> dialog box.</td>
</tr>
<tr class="odd">
<td><code>source-location</code></td>
<td>Contains the single <code>url</code> loaded for every entry point.</td>
</tr>
<tr class="even">
<td><code>url</code></td>
<td>A hosted URL (<code>https://example.com/extension</code>, or <code>http://localhost:8765/...</code>), or, inside a package, a path relative to <code>content/</code>.</td>
</tr>
<tr class="odd">
<td><code>entry-points</code></td>
<td>Wraps the triggers the extension adds. Each child is one entry point with its own label and target. An extension can declare more than one. All of them load the same <code>source-location</code>.</td>
</tr>
<tr class="even">
<td><code>authoring-toolbar</code></td>
<td>A button on the authoring toolbar. Requires <code>region</code>: <code>primary</code>, <code>insights</code>, or <code>overflow</code>. Children: <code>label</code>, an optional <code>tooltip</code>, an inline SVG <code>icon</code>, and <code>on-click</code>. Opens a side pane.</td>
</tr>
<tr class="odd">
<td><code>authoring-menu</code></td>
<td>An item on the authoring menu. Children: <code>label</code> and <code>on-click</code>. Opens a side pane.</td>
</tr>
<tr class="even">
<td><code>label</code></td>
<td>The button or menu text. Use a literal string, or <code>resource-id</code> plus a <code>resources</code> entry, as Hello World does.</td>
</tr>
<tr class="odd">
<td><code>tooltip</code></td>
<td>Optional tooltip on a toolbar entry point.</td>
</tr>
<tr class="even">
<td><code>on-click</code></td>
<td>Required inside every entry point. The child element is <code>&lt;side-pane/&gt;</code>.</td>
</tr>
<tr class="odd">
<td><code>side-pane</code></td>
<td>Opens the extension in a side pane.</td>
</tr>
<tr class="even">
<td><code>icon</code></td>
<td>The optional icon inside a toolbar entry point, <code>icon</code> is an inline SVG. As a direct child of <code>workspace-extension</code>, the <code>icon</code> image should be a 70×70 PNG, Base64 encoded. Hello World uses only the toolbar SVG.</td>
</tr>
<tr class="even">
<td><code>permissions</code></td>
<td>Optional. The only value is <code>full data</code>. Declare it if the extension calls <code>Worksheet.getUnderlyingDataAsync()</code>, <code>Datasource.getUnderlyingDataAsync()</code>, <code>Datasource.getActiveTablesAsync()</code>, or <code>Datasource.getConnectionSummariesAsync()</code>.</td>
</tr>
<tr class="odd">
<td><code>context-menu</code></td>
<td>Optional. Registers a <b>Configure...</b> item. The only allowed child is <code>&lt;configure-context-menu-item /&gt;</code>. Map it to a <code>configure</code> function in <code>initializeAsync()</code>. The authoring menu entry point is a separate element.</td>
</tr>
<tr class="even">
<td><code>resources</code></td>
<td>Localized strings for <code>name</code>, <code>description</code>, and entry-point <code>label</code> text.</td>
</tr>
<tr class="odd">
<td><code>min-api-version</code></td>
<td>The minimum API version required to run the extension. Hello World uses <code>1.1</code>.</td>
</tr>
</tbody>
</table>

**Constraints**

- String-based fields: 1000 characters
- URI-based fields: 2084 characters
