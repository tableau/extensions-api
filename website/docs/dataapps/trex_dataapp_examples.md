---
title: Data App Samples
description: Explore application ideas and extension samples to learn patterns for Tableau data apps.
---

The data apps beta is available only on Tableau Cloud.

Start with a small application and inspect how it loads resources, initializes the Extensions API, and gets data. Then add the interactions needed for your users' workflow.

## Example Data App scenarios

The following are application ideas you can build on Tableau data:

| Scenario | Application behavior | What to test |
| --- | --- | --- |
| Business performance report | Displays custom charts and metrics with controls for region and time period. | Queries return the intended aggregations and respect each viewer's data access. |
| Customer exploration | Lets users narrow a list of customers and inspect trends for a selected customer. | Selection changes update the results and empty results have a clear explanation. |
| Existing app migration | Replaces static data in a web app with runtime queries to Tableau data sources. | The published app uses Tableau data and loads its resources from the package. |

These scenarios illustrate design patterns; they are not downloadable data app samples.

## Learn from Dashboard and Viz Extension samples

The existing Extensions API samples demonstrate useful patterns for data access, filtering, parameters, and event handling:

- [Dashboard Extension Samples](../dashext/trex_examples.md) show applications that interact with dashboard content.
- [Viz Extension Samples](../vizext/trex_viz_examples.md) show custom worksheet visualizations and interactions.

Those samples use their own hosting and installation instructions. To adapt one as a data app, package its web resources with the workbook and use the deployment workflow supported by your beta environment. Review its API usage and dependencies rather than assuming every sample works unchanged.

## Build a minimal example

See [Data App Details](./trex_dataapp_details.md) for an entry page, a runtime data query, and the manifests and workbook connections that support them.

## Review before publishing

Check the application's resource paths, data permissions, declared external origins, and Tableau API access. Test the published workbook as an intended viewer, including loading, empty, and error states.
