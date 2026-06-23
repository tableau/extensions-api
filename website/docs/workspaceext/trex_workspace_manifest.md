---
title: Tableau Workspace Extension Manifest File
description: Components of the workspace extension manifest file
---

The extension manifest file (`.trex`) contains metadata for the extension and is used for registration. A workspace extension uses the same manifest format as dashboard and viz extensions, but declares the extension with the `<workspace-extension>` element.

## Registering a workspace extension

To register an extension as a workspace extension, you specify the `<workspace-extension>` element in the manifest file (`.trex`).

```xml
<workspace-extension id="com.example.extensions.name" extension-version="0.1.0">
```

Unlike dashboard and viz extensions, a workspace extension is not placed inside a dashboard zone or a worksheet, so its manifest does not include layout or encoding information.

:::warning[TODO: REVIEW]
<mark>Confirm the manifest wrapper element and manifest version for workspace extensions.</mark>

Flagged because: the existing dashboard and viz manifests use a `<manifest manifest-version="0.1">` root wrapper, while the workspace source material shows an `<extension-manifest manifest-version="1.0">` wrapper. The correct wrapper element and version value need to be confirmed before publishing.
:::

## Sample manifest file

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest manifest-version="0.1" xmlns="http://www.tableau.com/xml/extension_manifest">
  <workspace-extension id="com.example.extensions.name" extension-version="0.1.0">
    <default-locale>en_US</default-locale>
    <name resource-id="name"/>
    <description>Extension Description</description>
    <author name="USERNAME" email="USER@example.com" organization="My Company" website="https://www.example.com"/>
    <min-api-version>1.0</min-api-version>
    <source-location>
      <url>SCHEME://SERVER[:PORT][/PATH]</url>
    </source-location>
    <icon>Base64-Encoded ICON</icon>
  </workspace-extension>
  <resources>
    <resource id="name">
      <text locale="en_US">name in English</text>
    </resource>
  </resources>
</manifest>
```

The manifest fields shared with other extension types (such as `id`, `extension-version`, `name`, `description`, `author`, `source-location`, `icon`, and `min-api-version`) behave the same way as they do for dashboard extensions. For details on these shared elements, see the [Tableau Extension Manifest File](../dashext/trex_manifest.md) reference for dashboard extensions.

:::warning[TODO: REVIEW]
<mark>Confirm whether workspace extensions support any manifest elements that dashboard and viz extensions do not, or omit any that the others use.</mark>

Flagged because: only the core shared elements are confirmed from the source material; any workspace-specific manifest elements still need to be verified.
:::
