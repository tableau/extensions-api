---
title: Get Started with Data Apps — Extension Packaging
description: Package and publish a working Viz or Dashboard Extension as a Tableau data app.
tags: [Getting started]
---

_The data apps beta is available only on Tableau Cloud._

Start with a working Viz or Dashboard Extension. To create one, follow [Get Started with Viz Extensions](../vizext/trex_viz_getstarted.md) or [Get Started with Dashboard Extensions](../dashext/trex_getstarted.md).

A data app combines your custom interface with Tableau hosting and runtime access to Tableau data. You package the extension's web resources with a workbook so Tableau can host and serve them. For more about these concepts, see [What are Tableau data apps?](./trex_dataapp_overview.md).

## Prepare your Tableau environment

Confirm that your environment meets the [data apps beta requirements](../installation.md#requirements-for-using-extensions-in-tableau). You need permission to access the app's data and publish the workbook to the intended location.

Work with your administrator to enable the required site settings and review the app's external origins and Tableau REST API access. See [Manage data apps](./trex_dataapp_manage.md) for site preparation, access review, and publishing guidance.

## Use the Data Apps API methods

Three methods added to the Extensions API for this release support data apps:

| Method | Purpose |
| --- | --- |
| `queryAsync()` | Gets data from the configured data source asynchronously. |
| `readMetadata()` | Gets a data source's metadata. |
| `fetch()` | Makes a curated set of Tableau REST API requests, subject to the site's allowed API access and the viewing user's permissions. |

Use these methods in your working Viz or Dashboard Extension as needed for its data and workflow. For an overview, see [Extensions API methods for data apps](./trex_dataapp_overview.md#extensions-api-methods-for-data-apps).

## Review security and dependencies

Review the working extension's code, libraries, data queries, and external services before packaging it. Request only the access the app needs, and keep secrets and fixed copies of sensitive data out of its front-end resources.

See [data app security](./trex_dataapp_security.md) for guidance on data permissions, hosted code, external origins, and Tableau API access.

## Package and publish

Include the extension manifest, entry page, Extensions API library, and all required JavaScript, CSS, images, and other resources in the workbook package. Check that the entry page's resource paths resolve inside the package. See [Data App Details](./trex_dataapp_details.md) for the package layout and manifest examples.

Use the packaging workflow available in your beta environment, then publish the packaged workbook to a location where the intended viewers have access. Tableau serves the packaged front-end resources; any external services the app uses still need to be available and approved.

Follow the review and publishing guidance in [Manage data apps](./trex_dataapp_manage.md).

## Verify the published app

Open the published app as an intended viewer. Confirm that its packaged resources load, its controls work, and its queries respect the viewer's data access. Test loading, empty, and error states as well.

Use the checks in [data app security](./trex_dataapp_security.md#test-security-before-sharing) before sharing the app.
