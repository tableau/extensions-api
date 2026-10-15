---
title: What are Tableau Data Apps?
description: Learn how Data Apps combine custom web applications with Tableau hosting and governed data.
---

The data Apps beta is available only on Tableau Cloud.

A **data app** is a purpose-built interactive application built with code to help users explore data, make a decision, or complete a workflow. A data App gives your custom viz or dashboard extension runtime access to governed Tableau data sources through Extensions API and Tableau REST API methods. 

Data apps also host your extension's web resources on Tableau service. You build the interface using the Tableau Extensions API and bundle its HTML, JavaScript, CSS, and images inside a packaged workbook (`.twbx`). These resources are embedded in the workbook and published with it. Tableau hosts and serves them when users open the published content, so you do not need a separate web server for the app's front end.

Your data app appears as a workbook in the Tableau Interface. A workbook can contain more than one data app.

:::note Cloud-only Beta

These pages describe data apps for the Cloud-only Beta. Before you begin, check with your administrator that your Tableau Cloud site is configured to allow your app. Supported capabilities depend on your site configuration.

:::

## Components of a Data App

A data app includes:

- An extension manifest (`.trex`) that describes a Dashboard or Viz Extension.
- A web page and the JavaScript, CSS, images, and other resources it needs.
- The Tableau Extensions API JavaScript library, which connects the application to Tableau.
- A package that contains the extension and its resources, bundled with the workbook.

A Tableau Package (`.tpkg`) is a container for application resources and metadata. The package supplies the resources; the data dpp combines them with Tableau data to provide the user experience.

## What can you do with a Data App?

Build an interface tailored to the questions and workflows your users need. For example, you can create a business report with custom charts, a guided exploration of customer activity, or a tool for comparing scenarios.

A data app can query Tableau data at runtime rather than storing a fixed copy of the results in its source code. This lets you reuse your Tableau data layer, including extract refresh processes and row-level security. The results available to each viewer depend on their data access.

You can also adapt an existing web application to use Tableau data and package it for Tableau hosting. Plan the data connections and permissions as part of that migration.

## Extensions API methods for Data Apps

Three methods added to the Extensions API for this release support data apps:

| Method | Purpose |
| --- | --- |
| `queryAsync()` | Gets data from the configured data source asynchronously. |
| `readMetadata()` | Gets a data source's metadata. |
| `fetch()` | Makes a curated set of Tableau REST API requests, subject to the site's allowed API access and the viewing user's permissions. |

For site controls and permission considerations, see [Manage Data Apps](./trex_dataapp_manage.md) and [Data App security](./trex_dataapp_security.md).

## Who can create and view a Data App?

To view a data app, you need:

- View, full data query, and API access to the workbook containing the app
- View, Connect and API access to each published data source the workbook connects to

To create a data app, you need:

- At least Creator or Explorer (can publish) role for the site containing the data app
- Publish and Overwrite (to republish) access to the project for the data app
- View, Connect and API access to each published data source the data app uses
- Administrator site configuration allowing any Tableau REST API paths/methods the data app calls

## How do Data Apps differ from Dashboard and Viz Extensions?

A data app describes the complete application experience. Dashboard and Viz Extensions provide ways to integrate its interface with Tableau.

| Concept | Purpose |
| --- | --- |
| Dashboard Extension | Adds a custom web application to a dashboard zone. |
| Viz Extension | Adds a custom visualization to a worksheet through the Marks card. |
| Data App | Combines a custom, code-authored interface with Tableau hosting and governed data for a decision or workflow. |

Bundling the web resources with a workbook does not change where the interface appears: a packaged Dashboard Extension still appears on a dashboard, and a packaged Viz Extension still appears in a worksheet.

## Hosting and governance

Tableau-hosted front-end resources travel with the workbook, reducing the need to operate a separate web server for the app. This hosting covers the packaged web resources; it does not provide a runtime for your own server-side application code.

Administrators control which external origins and Tableau REST APIs apps can access. Plan those dependencies explicitly and request only the access your app needs. Publishing an app does not grant its viewers additional permissions to Tableau data.

## How is this different from the Tableau Embedding API?

The [Tableau Embedding API](https://help.tableau.com/current/api/embedding_api/en-us/index.html) brings Tableau views into an application or website that you host. Data apps bundle custom application resources with Tableau content so Tableau can host them. Choose the approach that matches where you want users to work and how you want to deploy your application.

## What's next?

Follow [Get Started with Data Apps](./trex_dataapp_getstarted.md), or explore the components and code examples in [Data App Details](./trex_dataapp_details.md).
