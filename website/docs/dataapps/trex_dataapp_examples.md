---
title: Data App Samples
description: The Tableau Superstore Data App sample, a live-query data app in the Extensions API repository.
---

_The data apps beta is available only on Tableau Cloud._

The Extensions API repository includes a data app you can open, inspect, and publish.

## Tableau Superstore Data App

**[Tableau Superstore Data App](https://github.com/tableau/extensions-api/tree/main/Samples/DataApp)** rebuilds Tableau's Superstore sample workbook as a data app. The sample is in the `Samples/DataApp` folder. It is a viz extension written in plain JavaScript, and it queries the workbook's data live with `queryAsync()`.

The workbook, the extension package, and the Superstore sample data ship together. The datasource is the Superstore Excel file, stored at `Data/Datasources/Sample - Superstore.xls` and referenced by a relative path, so the workbook publishes to a Tableau Cloud site with its data included.

The app has five tabs. Region and Order Date filters scope every tab.

- **Overview** shows KPIs, a United States choropleth, monthly sales and profit, and selection-driven scope.
- **Product** shows a Category by Year heatmap and a Sub-Category by Segment scatter plot.
- **Customers** shows a region summary, a customer scatter plot, and a ranked customer list.
- **Shipping** classifies orders as Early, On Time, or Late from Order Date and Ship Date, using an expected-transit time for each Ship Mode.
- **Performance** shows Sales against the period average as bar-in-bar small multiples, and a ranked Sub-Category view colored by profit ratio.

The sample requires Tableau 2026.3.1 or later. Publishing steps are in the [sample README](https://github.com/tableau/extensions-api/blob/main/Samples/DataApp/README.md). Publishing uses the [Tableau plugin](https://github.com/tableau/tableau-plugin) and [Tableau MCP](https://github.com/tableau/tableau-mcp).
