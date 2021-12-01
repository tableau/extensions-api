---
title: Known Issues for the Tableau Extensions API
layout: docs
--- 

The following section describes some issues in the current release of the Extensions API where the API or the platform does not behave as expected.

For information about what is new or has changed in each release, see the [Release Notes for the Tableau Extensions API]({{site.baseurl}}/docs/trex_release-notes.html).

**In this section**

* TOC
{:toc}

### Tableau Viz - Known Issues

Tableau Viz provides a way to create visualizations in dashboard extensions. The following is a list of issues with the current release of Tableau Viz.

* The vertical header text appears slightly cropped in the SVG output.
* Tableau fonts are not available in the SVG output.

For information about Tableau Viz, see [Add Tableau Viz to Your Dashboard Extension]({{site.baseurl}}/docs/trex_tableau_viz.html).

### Unable to debug extensions using Chrome version 80 or later

Because of incompatibilities between Chrome and the internal Chromium-based browser used in Tableau, you can't use Chrome version 80 or later to debug your extensions. If you are using Tableau Desktop 2019.1 or later, you can debug extensions using Chrome version 79 or Chromium version 79. If you are using Tableau Desktop versions 2018.2 or 2018.3, you can use Chromium version 47. For more information about debugging extensions and using the Chromium browser, see [Debug Extensions in Tableau Desktop]({{site.baseurl}}/docs/trex_debugging.html) and [Download the Chromium Browser]({{site.baseurl}}/docs/trex_debugging.html#download-the-chromium-browser).


### Unable to run dashboard extension using self-signed certificates

Tableau now uses Qt WebEngine 5.15, which is based on Chromium version 87.0.4280, with additional security fixes from newer versions of Chromium. Because of this update, dashboard extensions hosted on web servers that use self-signed certificates (SSL) might not work in Tableau 2021.1, or in the most recent Tableau maintenance releases: 2020.2.7+, 2020.3.6+, and 2020.4.2+.
You might see one of the following errors:

* `Failed to load resource: net::ERR_CERT_COMMON_NAME_INVALID`
 
* `Error: Subject Alternative Name Missing`

* `Your connection is not private`

You can avoid these errors if you specify the `subjectAlternativeName` (SAN) in the extended certificate parameters when you sign your certificate.

For more information, see [Google Chromium Enterprise Known Issues - Error "Subject Alternative Name Missing"](https://support.google.com/chrome/a/answer/9813310?hl=en#zippy=%2Cerror-subject-alternative-name-missing-or-neterr-cert-common-name-invalid-or-your-connection-is-not-private){:target="_blank"} and the following discussion on Stack Overflow: [Invalid self signed SSL cert - “Subject Alternative Name Missing” on StackOverflow](https://stackoverflow.com/questions/43665243/invalid-self-signed-ssl-cert-subject-alternative-name-missing){:target="_blank"}.


### Time zone not persisted when updating date parameter

When you update a date or date-time parameter using `changeValueAsync()`, the time zone information is not kept. The date/time is still correct, however, it is just that the data/time is converted to UTC.

### The getDataSourcesAsync method is slow

If your extension uses the `getDataSourcesAsync()` method, calling this method might negatively impact performance and responsiveness of the viz that your extension is added to. The method is not entirely asynchronous and includes some serial operations.

### Unable to print or save image of the extension in a dashboard

- If you print a dashboard to a `.pdf` file, or save the dashboard as an image (or receive an image of the dashboard, as part of subscription) the zone that contains the extension will be blank.

### HTML drop-down menus in popup dialog windows

- **Fixed in Tableau 2019.1** HTML drop-down menus in popup dialog windows do not work as expected on MacOS. Users will not be able to select menu items using the mouse. They can select items with the cursor keys. To avoid issues on MacOS, use radio buttons or another method for user selection in the popup dialog. 

### Decimal separators in parameters

- Decimal separators in parameters are not handled as expected for some locales. If your operating system locale uses commas for decimal separators, the `parameter.changeValueAsync` function expects a string that uses a comma as the decimal separator; however, the `parameter.currentValue` function will return a string using a period as the decimal separator, regardless of locale settings. 

### Full data access and permission errors

When an extension needs full data access and the user does not have full data permission on the workbook, Tableau currently allows the extension to run. However, Tableau will throw a console error when the extension calls `getUnderlyingData()` method. See [Handle full data access and permission errors]({{site.baseurl}}/docs/trex_getdata.html#handle-full-data-access-and-permission-errors).


### Tableau Extensions API library version 1.0.0 

If you are debugging your extension, you might see this message in the Debugging Tools console window if you are using the released version of the 1.0.0 library (for example, `tableau-extensions-1.0.0.js`) with a version of Tableau that is newer than Tableau 2018.2.

```
This is an alpha version of the Extensions API. Please upgrade to an official release.

```

You can safely ignore this warning. However, if you are using the 1.0.0 library, be sure to upgrade to the latest version.

To avoid having to update your code to reference a new version of the 1.x library every time you download a new version, you can specify `tableau.extensions.1.latest.js`. That way, when you replace the previous version of the library with the most recent update, your extension should just work.

```
 <script src="../../lib/tableau.extensions.1.latest.js"></script>

```
