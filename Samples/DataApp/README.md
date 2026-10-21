# Tableau Superstore Data App

Tableau's Superstore sample workbook, rebuilt as a live-query Tableau data app in plain JavaScript with no build step.

Tableau data apps let you build a dashboard as a web app that runs inside a Tableau workbook and queries its data live. This sample has five tabs that query the Superstore sample data through the Tableau Extensions API and VizQL Data Service:

- **Overview:** KPIs, a US choropleth map, monthly sales/profit panels, and selection-driven scope.
- **Product:** a Category × Year heatmap and a Sub-Category × Segment scatter.
- **Customers:** a region summary, a customer scatter, and a ranked customer list.
- **Shipping:** an Early / On Time / Late classification, derived client-side from Order and Ship dates against a per-Ship-Mode expected-transit table.
- **Performance:** Sales vs. period-average bar-in-bar small multiples and a ranked Sub-Category view colored by profit ratio.

The Region and Order Date filters scope every tab. Requires Tableau 2026.3.1 or later.

## The data ships in the workbook

The workbook's datasource is `Tableau Superstore Data App/Data/Datasources/Sample - Superstore.xls`, the Superstore sample that Tableau installs in My Tableau Repository, referenced by relative path, so no datasource needs to exist on your site.

## Publish to Tableau Cloud

Use the [Tableau plugin](https://github.com/tableau/tableau-plugin), which brings the [Tableau MCP](https://github.com/tableau/tableau-mcp) and its data-app skill, in Codex or Claude Code.
