---
title: Tableau Extension Manifest File
layout: docs
---

The extension manifest file (`.trex`) contains metadata for the extension and is used for registration.

For details about a manifest or its fields, see the [Sample Manifest File](#sample-manifest-file) and [Elements of the Manifest File](#elements-of-the-manifest-file).  


**In this section**

* TOC
{:toc}

---

## Tableau TREX Generator

To create a new manifest file (`.trex`) for your extension the easy way, use the [Tableau TREX Generator](https://trex-generator.glitch.me/){:target="_blank"} on [Glitch](https://glitch.com){:target="_blank"}. The Tableau TREX Generator allows you to create the manifest file by filing in a form. You can also upload an existing `.trex` file and use that as a starting point. You can use the generator to edit and modify your `.trex` file as needed. When you are finished, just download the file to use with your extension.

## Manifest Versioning

The versioning of the manifest is designed to be semantically simple and support compatibility. The version follows the [Major].[Minor] format. Minor upgrades are backwards compatible while major upgrades involve breaking changes. 

## Error Reporting

At start up, Tableau checks the manifest file. If any errors are found while parsing the file, Tableau writes these errors to the `log.txt` file in the `My Tableau Repository/Logs` folder. This is the same location that Tableau Desktop uses to report other errors and activity.

## Sample Manifest File

```xml
        <?xml version="1.0" encoding="utf-8"?> 
        <manifest manifest-version="0.1" xmlns="http://www.tableau.com/xml/extension_manifest">
          <dashboard-extension id="com.example.extensions.name" extension-version="0.1.0">
            <default-locale>en_US</default-locale>
            <name resource-id="name"/>
            <description>Extension Description</description>
            <author name="USERNAME" email="USER@example.com" organization="My Company" website="https://www.example.com"/>
            <min-api-version>1.0</min-api-version>
            <source-location>
              <url>SCHEME://SERVER[:PORT][/PATH]</url> 
            </source-location>
            <icon>Base64-Encoded ICON</icon>
            <permissions>
    	       <permission>full data</permission>
            </permissions>
            <context-menu>
              <configure-context-menu-item />
            </context-menu>
          </dashboard-extension>
          <resources>
            <resource id="name">
              <text locale="en_US">name in English</text>
              <text locale="fr_BE">name in French</text>
              <text locale="de_DE">name in German</text>
            </resource>
          </resources>
        </manifest>
```


## Elements of the Manifest File

<table>
<colgroup>
<col width="30%" />
<col width="70%" />
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
<td>The version of the manifest. The version currently supported is 0.1. </td>
</tr>
<tr class="odd">
<td><code>dashboard-extension</code></td>
<td>The root element that contains the options for the extension. The <code>dashboard-extension</code> includes the <code>id</code> attribute, which follows the reverse domain name pattern (<code>com.example.extension</code>), and <code>extension-version</code> number attribute. These attributes are required.</td>
</tr>
<tr class="even">
<td><code>extension-version</code></td>
<td>The version of the extension. For example, <code>extension-version="0.1.0"</code></td>
</tr>
<tr class="odd">
<td><code>default-locale</code></td>
<td>Specifies the default locale to use for localized text. Here both the locale format (en_US) and language code (en) are accepted. The default locale specified here is converted to one of the supported languages in the Tableau UI. If the language is unsupported or invalid, English is set as default. </td>
</tr>
<tr class="even">
<td><code>name</code></td>
<td>The name of the extension as it appears under <strong>Extensions</strong> on a dashboard sheet. To provide localized text, specify the name of the resource-id and provide the text strings in the resources element of the manifest (see the manifest example). You can provide localized strings for name and description.</td>
</tr>
<tr class="odd">
<td><code>description</code></td>
<td>A short description of the extension.</td>
</tr>
<tr class="even">
<td><code>author</code></td>
<td>Specifies metadata about the author of the extension, including <code>name</code>, <code>email</code> address, <code>organization</code>, and <code>website</code>. The <code>name</code> and <code>website</code> attributes are required. The <code>website</code> URL must use HTTPS. The <code>website</code> URL is the target of the <b>Get Support</b> link that users see in the <b>About</b> dialog box for your extension. The URL should take users to a page where they can learn about your extension and can get help on using it. </td>
</tr>
<tr class="odd">
<td><code>source-location</code></td>
<td>Contains the <code>url</code> of the server that hosts the web page you create that interacts with Tableau.</td>
</tr>
<tr class="even">
<td><code>url</code></td>
<td>Specifies the scheme (HTTPS, HTTTP), the name of the server, the port (optional) and the path to extension (optional). The <code>url</code> must use HTTPS. For example: <code>https://example.com/extension</code>. 
The exception is for <code>localhost</code>. In this case, HTTP is allowed. For example: <code>http://localhost:8080</code>.</td>
</tr>
<tr class="even">
<td><code>icon</code></td>
<td>If specified, the icon is what appears in the <strong>About</strong> dialog box. The icon must be a 70x70 pixel PNG file that is Base64 encoded. If you need an encoder, see <a href="https://www.base64-image.de/" class="uri">https://www.base64-image.de/</a></td>
</tr>
<tr class="odd">
<td><code>permissions</code></td>
<td>Declares the types of permissions that this extension requires. The only option is <code>full data</code>. If your extension can access the underlying data or information about the data sources, you must declare full data permission in the manifest. Full data permissions are required if you use any one of the following APIs: <code>Worksheet.getUnderlyingDataAsync()</code>, <code>Datasource.getUnderlyingDataAsync()</code>, <code>Datasource.getActiveTablesAsync()</code>, <code>Datasource.getConnectionSummariesAsync()</code>. If your extension does not use one of these APIs, you do not need include permissions element.</td>
</tr>
<tr class="even">
<td><code>context-menu</code></td>
<td>Adds a context menu item in the extension zone.  This is a configuration feature that allows you to register a custom JavaScript callback function and associate it with a context menu item. The only allowed element in <code>&lt;context-menu&gt;</code> is <code>&lt;configure-context-menu-item /&gt;</code>. The menu item and your configuration callback function are mapped together in the <code>initializeAsync()</code> function. When the extension is initialized, the menu item <b>Configure...</b> appears in the drop-down menu of the dashboard extension. When the user clicks the menu item, your callback function is executed.</td>
</tr>
<tr class="odd">
<td><code>resources</code></td>
<td>Specifies the resources that can be localized.</td>
</tr>
<tr class="even">
<td><code>min-api-version</code></td>
<td>Specifies the minimum API version required to run the extension. </td>
</tr>
</tbody>
</table>

**Constraints** 

- String-based fields: 1000 characters 
- URI-based fields: 2084 characters
- Icon field: size of images are restricted to 70x70
