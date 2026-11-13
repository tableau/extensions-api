---
title: Get Started with Data Apps
description: Vibe code a Tableau data app with Tableau MCP and the Tableau plugin, from your first prompt to a published app.
tags: [Getting started]
---

_The data apps beta is available only on Tableau Cloud._

You can create a data app by describing what you want to an AI coding assistant. You provide details like the audience, questions, data source, interactions, and visual style. The assistant uses [Tableau MCP](https://tableau.github.io/tableau-mcp/docs/getting-started) and the [Tableau plugin](https://github.com/tableau/tableau-plugin) to connect your data, write the application, and package and publish it to Tableau Cloud. You review the app in Tableau and refine it through conversation.

A data app combines a custom web interface with Tableau data access and hosting. For more about how it works, see [What are Tableau data apps?](./trex_dataapp_overview.md).

## Before you begin

You need:

- Access to a Tableau Cloud site that supports the data apps beta.
- A **Creator** or **Explorer (can publish)** site role and permission to publish to your intended destination.
- A published Tableau data source that you can access. Have its name or link ready.
- An AI client that supports [Tableau MCP](https://tableau.github.io/tableau-mcp/docs/getting-started) connections, the [Tableau plugin](https://github.com/tableau/tableau-plugin), and code execution. The assistant needs to work with local files and run the plugin's scripts.

:::note

If you're using Tableau's hosted MCP server, make sure your agent has network egress access to the blob storage that Tableau MCP uses to temporarily store workbook files. For more information, see [Hosted Tableau MCP](https://tableau.github.io/tableau-mcp/docs/hosted-tableau-mcp).

:::

The workflow uses the `scaffold-data-app`, `publish-workbook`, and `request-workbook-upload` MCP tools, along with tools for finding data sources and reading their metadata. Tool availability depends on your Tableau environment and permissions. Ask the assistant to check these capabilities before it starts building.

## Connect to Tableau MCP

Tableau MCP lets your assistant discover Tableau content, inspect data source metadata, and create and publish the app. Follow the [Tableau MCP getting started guide](https://tableau.github.io/tableau-mcp/docs/getting-started) for connection options.

For Tableau Cloud, use the [hosted Tableau MCP service](https://tableau.github.io/tableau-mcp/docs/hosted-tableau-mcp):

1. Open your AI client's MCP or connector settings and add a connection to `https://mcp.tableau.com`.
2. Complete the Tableau sign-in flow and connect to the site where you want to build the app.
3. Start a new conversation with the connection enabled.

If you install the Tableau plugin first, use its Tableau connector to complete this connection. You do not need a duplicate connection to the same service.

If your organization runs Tableau MCP locally or hosts its own service, follow the configuration instructions in the MCP getting started guide instead.

Check the connection with a prompt such as:

> Find the published data source named Sales on my Tableau site and show me its available fields. Check whether the tools required to scaffold, upload, and publish a data app are available.

If several data sources match, select the one you intend to use before continuing.

:::note

You can also clone the Tableau MCP repo and host the MCP locally instead of using the hosted MCP. Follow the [Tableau MCP getting-started guide](https://tableau.github.io/tableau-mcp/docs/getting-started) for instructions.

:::

## Get the Tableau plugin

The [Tableau plugin](https://github.com/tableau/tableau-plugin) supplies the skills and scripts that guide the assistant through building a data app. Its [data app authoring skill](https://github.com/tableau/tableau-plugin/tree/main/src/plugin/skills/tableau-data-app-authoring) covers scaffolding, connecting a published data source, writing the interface, packaging, and publishing. Install the plugin so the assistant has these resources available.

Follow the repository's [installation instructions](https://github.com/tableau/tableau-plugin#install-locally-codex-and-chatgpt-desktop) for your client. For a local installation from source, first clone the repository:

```bash
git clone https://github.com/tableau/tableau-plugin.git
cd tableau-plugin
```

Then use the installation path for your client:

- **Codex or ChatGPT desktop:** Run `./reload-plugin.sh openai`. This builds and installs the plugin, replacing an existing local Tableau plugin installation. Restart the desktop app, open **Plugins**, and select **Authenticate** or **Connect** for Tableau. Start a new task so it loads the plugin and connection.
- **Claude desktop:** Run `./reload-plugin.sh claude` to build `dist/claude-tableau.zip`. In Claude, open **Customize → Plugins → Add → Upload plugin** and select the ZIP. Open the installed Tableau plugin's **Connectors** tab and connect Tableau. Enable code execution and start a new chat.

The source installation requires Git and Python 3. The build script prepares its build dependencies. See the repository instructions for updates and other installation options.

## Describe the app you want

Tell the assistant to use the Tableau data app authoring skill. Include the app's purpose, audience, published data source, key metrics, controls, visual style, and publishing destination. For example:

> Use the Tableau plugin's data app authoring skill to build a data app called Regional Sales Explorer. Use the published Sales data source on my Tableau Cloud site. The audience is regional sales managers who need to compare sales and profit across regions. Include summary metrics, a ranked regional bar chart, and a region filter. Use a clean layout with blue accents and clear labels. Inspect the data source metadata before choosing fields, and query Tableau data at runtime. Publish it as a new workbook in the Sales Analytics project and give me the link.

Replace the example names with your own. If you do not know which data source to use, ask the assistant to find candidates and help you choose one first.

## Build and publish with the assistant

The assistant follows this workflow:

1. **Check access and tools.** Verify publishing access and the required MCP capabilities.
2. **Create the workspace.** Use `scaffold-data-app` to get a starter and apply its setup plan with the plugin's scripts.
3. **Connect the data source.** Inspect the published source's identity and fields, then connect it to the workbook. The starter alone has no data source connected.
4. **Write the app.** Implement the interface, runtime queries, filters, and loading, empty, and error states from your description.
5. **Package and publish.** Use the plugin's packaging script to create a `.twbx` and publish it through Tableau MCP to your destination.

You do not need to write the application code or assemble the workbook package yourself. If a required tool is unavailable or publishing fails, have the assistant report the missing capability or returned error so you can resolve it before continuing.

## Review and refine in Tableau

Open the published app in Tableau Cloud. Review the layout with real data, try each filter and interaction, and confirm that labels and metrics answer your original questions. Check loading, empty, and error states, and test access as an intended viewer. Visual review happens in Tableau after publishing.

Request specific changes in the same conversation:

> Sort regions by profit instead of sales, add a sales and profit toggle, and use a distinct color for negative profit. Keep the region filter. Update the app and republish it, replacing the workbook we just created.

Before sharing, review the app's code and dependencies and confirm that intended viewers can access both the workbook and its published data source. See [data app security](./trex_dataapp_security.md) for the checks to make before sharing.
