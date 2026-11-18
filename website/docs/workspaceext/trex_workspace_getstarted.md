---
title: Get Started with Workspace Extensions
description: Get started with Workspace Extensions
tags: [Getting started]
---

Starting in %coming_release% you can build **workspace extensions** — web apps that run at the Tableau application level and stay available as you open, close, and switch workbooks.

This page gets a workspace extension running on **Tableau Desktop** by installing a manifest. The sample URL is a placeholder until you host the page.

:::info

**What's in a Tableau extension?**
A Tableau extension is a manifest file (`.trex`), a web page (`.html`) that loads a Tableau-provided JavaScript library, and the JavaScript (`.js`) that contains your logic.

:::

### The Hello World manifest

[hello-world-extension.trex](pathname:///assets/workspace/hello-world-extension.trex) is a minimal workspace extension. Its `<url>` is a placeholder (`https://<YOUR-DOMAIN.com>/...`), not a page Tableau hosts. Replace that URL with your hosted page, or with `http://localhost` while you develop, before the button can open it.

The file adds two ways to open that page. Both use `<on-click><side-pane/></on-click>`:

* `<authoring-toolbar region="primary">` adds a **Hello World** button to the authoring toolbar. The icon is an inline SVG.
* `<authoring-menu>` adds a **Hello World** item to the authoring menu.

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

The name **Hello World** comes from the `name` resource. Identity is the extension `id`, `extension-version`, and that URL together.

### Install the `.trex`

A workspace extension is not added to a workbook. Copy `hello-world-extension.trex` into **My Tableau Repository/Extensions/** (on a typical Desktop install, `Documents/My Tableau Repository/Extensions/`) and restart Tableau.

Adding the same `id`, `extension-version`, and URL again replaces the installed copy. A different version or URL is a separate extension. The file stays in that folder. It is not saved with the workbook. To remove it, delete the file and restart Tableau.

### Open Hello World

In Tableau Desktop, open **Hello World** from the authoring toolbar or from the authoring menu. Each one opens the extension in a side pane.

### Point it at your own page

To run your own page, copy the `.trex` and change `<url>`. `http://localhost` is allowed. Host the page the same way as a dashboard extension sample: from the Extensions API repo, run `npm run build` once, then `npm start`. That serves files on port `8765`. See [Get Started with Dashboard Extensions](../dashext/trex_getstarted.md).

A bundled extension is a `.tpkg` under **My Tableau Repository/Packages/`<package-id>`/**. Its `.trex` is in `extensions/`, and `<url>` is a path relative to `content/`. Tableau serves those files. The package id and the extension id are not the same thing.

There is not yet a `Samples/Workspace` tree in this repo. The page itself is in [Create a "Hello World" Workspace Extension](./trex_workspace_create.md).

## What's next?

* Build the page: [Create a "Hello World" Workspace Extension](./trex_workspace_create.md).

* Manifest fields: [Tableau Workspace Extension Manifest File](./trex_workspace_manifest.md).

* Namespaces: [Tableau Extensions API Basics](../trex_api_about.md).
