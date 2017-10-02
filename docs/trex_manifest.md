---
title: Tableau Addin Manifest
layout: docs
---

The AddIn manifest (a .trex file) contains metadata for the add-in and is used for registration.  
For details about a manifest or its fields, see the [Sample Manifest File](#sample-manifest-file) and [Elements of the Manifest File](#elements-of-the-manifest-file).  
For documentation about creating a manifest file, see [Create a Tableau Add-In]({{site.baseurl}}/docs/trex_getstarted#create-a-manifest-file).

**In this section**

* TOC
{:toc}



## XSD Validation
The manifest is an XML based file. We have provided an XSD that can be used to validate the user defined XML. The XSD is available [here](https://prerelease.tableau.com/project/version/item.html?cap=52e2710a0793434d82142736c7ab3029&arttypeid={0DD668AE-472C-4E70-B465-35F7AE0DEB6D}&artid={939493D2-8000-4192-857A-67624CBCC35A}). It is highly recommended that the manifest XML is validated before use. 

## Manifest Versioning
The versioning of the manifest is designed to be semantically simple and support compatibility. The version follows the [Major].[Minor] format. Minor upgrades are backwards compatible while major upgrades involve breaking changes. 

## Error Reporting
The error reporting for the invalid XML is still work in progress. For the pre-alpha release, an invalid XML will fail silently and won't be included in the list of available AddIns. This is another important reason to use the XSD for validation before using the AddIn manifest.

## Sample Manifest File

        <?xml version="1.0" encoding="utf-8"?> 
        <manifest manifest-version="0.1" xmlns="http://wwww.tableau.com/xml/addin_manifest">
          <tableau-addin id="com.tableau.addin" addin-version="0.1.0">
            <default-locale>en_US</default-locale>
            <name resource-id="name"/>
            <description>Addin Description</description>
            <addin-type>
              <dashboard-addin/>
            </addin-type>
            <author name="USERNAME" email="USER@example.com" organization="My Company" website="www.example.com"/>
            <min-api-version>1.1</min-api-version>
            <source-location>
              <url>SERVER:PORT</url> 
            </source-location>
            <icon>Base64-Encoded ICON</icon>
          </tableau-addin>
          <resources>
            <resource id="name">
              <text locale="en_US">name in English</text>
              <text locale="fr_BE">name in French</text>
              <text locale="de_DE">name in German</text>
            </resource>
          </resources>
        </manifest>



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
<tr class="event">
<td><code>manifest-version</code></td>
<td>The version of the manifest. Currently supported version is 0.1. </td>
</tr>
<tr class="odd">
<td><code>tableau-addin</code></td>
<td>The root element that contains the options for the add-in. The <code>tableau-addin</code> includes the <code>id</code> attribute, which follows the reverse domain name pattern (<code>com.tableau.addin</code>), and add-in version number attribute. These attributes are required.</td>
</tr>
<tr class="even">
<td><code>addin-version</code></td>
<td>The user defined version of the add-in. i.e. MyAddIn-1.0</td>
</tr>
<tr class="odd">
<td><code>default-locale</code></td>
<td>Specifies the default local to use for localized text. Here both the locale format (en_US) and language code (en) are accepted. The locales here gets converted to one of the supported languages in Desktop UI. If the language is unsupported or invalid, English is set as default </td>
</tr>
<tr class="even">
<td><code>name</code></td>
<td>The name of the add-in as it appears in the under <strong>Extensions</strong> on a dashboard sheet. To provide localized text, specify the name of the resource-id and provide the text strings in the resources element of the manifest (see the manifest example). You can provide localized strings for name and description.</td>
</tr>
<tr class="odd">
<td><code>description</code></td>
<td>A short description of the add-in.</td>
</tr>
<tr class="even">
<td><code>addin-type</code></td>
<td>Specifies the type of add-in. Currently, the only type supported is <code>dashboard-addin</code>.</td>
</tr>
<tr class="odd">
<td><code>author</code></td>
<td>Specifies metadata about the author of the add-in, including <code>name</code>, <code>email</code> address, <code>organization</code>, and <code>website</code>. The <code>name</code> attribute is required.</td>
</tr>
<tr class="even">
<td><code>source-location</code></td>
<td>Contains the <code>url</code> of the server that hosts the web page you create that interacts with Tableau.</td>
</tr>
<tr class="odd">
<td><code>url</code></td>
<td>Specifies the name and port (optional) of the server, for example, <code>&lt;url&gt;http://localhost:8080&lt;/url&gt;</code>.</td>
</tr>
<tr class="even">
<td><code>icon</code></td>
<td>If specified, the icon is what appears under <strong>Extensions</strong> on a dashboard sheet. The icon must be a 64x64 pixel PNG file that is Base64 encoded. If you need an encoder, see <a href="https://www.base64-image.de/" class="uri">https://www.base64-image.de/</a></td>
</tr>
<tr class="odd">
<td><code>resources</code></td>
<td>Specifies the resources that can be localized.</td>
</tr>
<tr class="even">
<td><code>min-api-version</code></td>
<td>Specifies the minimum API version required to run the Add In. This field is not yet used in this alpha version. Versioning support is still in progress</td>
</tr>
</tbody>
</table>
