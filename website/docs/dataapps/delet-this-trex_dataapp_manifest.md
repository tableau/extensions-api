---
title: Tableau Data App Manifests
description: Understand the role of extension and package manifests when bundling an extension with a workbook.
---

The data apps beta is available only on Tableau Cloud.

A data app includes metadata for the extension and for its package. The extension manifest describes how Tableau loads the extension; package metadata describes the bundle that contains its resources.

## Typical package layout

The Bird Strikes Analysis, Churn Radar, and Championship Timeline examples contain a `Packages` directory alongside the workbook. Each application has its own package directory:

```text
My data app/
├── My data app.twb
└── Packages/
    └── com.example.my-data-app/
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

This shows the unpacked files, not a separate deployment server. The workbook and package resources are bundled into the `.twbx` you publish. Churn Radar names its extension manifest `data-app.trex`; the other two examples use `toolbar.trex`. Use the filename referenced by your workbook and packaging tools.

### Package manifest example

The examples use `manifest.json` for the package's identity and display metadata. Here is a version with generic values:

```json
{
  "id": "com.example.my-data-app",
  "version": "1.0.0",
  "name": "My data app",
  "author": "Example Company"
}
```

Use a unique package ID in reverse domain name notation, and keep it consistent with the package directory and extension identity. Update the version when distributing a new app version. These fields represent the common metadata in the supplied apps; they are not an exhaustive package schema.

## Extension manifest

The extension manifest is an XML file with the `.trex` extension. Use the manifest type that matches your application's placement:

- A Dashboard Extension uses a dashboard extension manifest. See [Tableau Extension Manifest File](../dashext/trex_manifest.md).
- A Viz Extension uses a worksheet extension manifest. See [Tableau Viz Extension Manifest File](../vizext/trex_viz_manifest.md).

These manifests describe the extension's identity, version, name, author, minimum API version, and entry page. Viz Extension manifests can also define encodings used on the Marks card.

Embedding is a packaging choice, rather than a separate placement type. Start from the appropriate Dashboard or Viz Extension manifest and use the entry-page reference required by your packaging workflow.

### Worksheet extension manifest example

All three apps use a worksheet extension manifest. The following example follows their structure with generic names and author details:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest manifest-version="0.1" xmlns="http://www.tableau.com/xml/extension_manifest">
  <worksheet-extension id="com.example.my-data-app" extension-version="1.0.0">
    <default-locale>en_US</default-locale>
    <name resource-id="name" />
    <description>A data app that queries Tableau data at runtime.</description>
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
      <text locale="en_US">My data app</text>
    </resource>
  </resources>
</manifest>
```

| Element | How it is used in these examples |
| --- | --- |
| `worksheet-extension` | Identifies the app's worksheet integration. Replace the ID and version with your values. |
| `min-api-version` | The supplied apps specify `1.11`. Set the minimum to match the APIs your app requires; this is not a Tableau product version. |
| `source-location` | `index.html` identifies the entry page under the package's `content/` directory. It is a packaged resource reference, rather than an external HTTPS hosting URL. |
| `icon` | Contains a small Base64-encoded placeholder image from the samples. Replace it with your app's icon using the requirements for your extension type. |
| `permissions` | The apps declare `full data` for their data access. This declaration does not override the viewer's Tableau permissions. |
| `encoding` | Defines a field tile named Data on the Marks card. The value `50` is the examples' chosen field count, not a platform-wide limit. |
| `resources` | Supplies the localized display name referenced by `name`. |

Use the Dashboard Extension manifest format instead when building a dashboard interface. Packaging the app does not change which manifest type its Tableau placement requires.

## Package metadata and resources

The package identifies the bundled application and contains its front-end resources. Keep the package identity and version consistent with the application you are distributing.

When preparing the bundle:

1. Include the entry page and all required JavaScript, CSS, images, and other assets.
2. Check that resource paths resolve inside the packaged application.
3. Include the Extensions API library required by the app.
4. Review third-party dependencies and the access they require.

Use the manifest format and packaging tools supplied for your supported beta environment. The Dashboard and Viz Extension examples describe their `.trex` files; they do not define the complete package format for a data app.

## External origins and Tableau API access

Apps must declare their required external origins and Tableau REST API access for administrator review. An external origin is the combination of protocol, host, and port used by an outside resource or service, such as a CDN or a third-party API.

Request only the origins and APIs your app needs. Bundle resources where practical to reduce external dependencies. If an app depends on an external service, explain that dependency to the administrator before publishing.

The site's controls determine which declared access is allowed. Manifest declarations do not replace a viewer's Tableau data permissions.

For guidance on reviewing these requests and managing app access, see [Manage data apps](./trex_dataapp_manage.md) and [data app security](./trex_dataapp_security.md).

## Validate before sharing

Test the packaged workbook after publishing. Confirm that it loads without relying on local files or your development server, and that its declared dependencies work under the intended site settings.

See [Data App Details](./trex_dataapp_details.md) for the complete app structure, or [Get Started](./trex_dataapp_getstarted.md) for the AI-assisted workflow.
