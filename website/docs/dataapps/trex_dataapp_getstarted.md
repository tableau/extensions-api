---
title: Get Started with Data Apps
description: Vibe code a Tableau data app with Tableau MCP and the Tableau plugin, from your first prompt to a published app.
tags: [Getting started]
---

Use natural language to prompt [Tableau Studio](%studio_dev_guide%) or the AI coding assistant of your choice to create a data app. You provide details like the audience, questions, data source, interactions, and visual style. The assistant uses [Tableau MCP](https://tableau.github.io/tableau-mcp/docs/getting-started) and the [Tableau plugin](https://github.com/tableau/tableau-plugin) to connect your data, write the application, and package and publish it to Tableau Cloud. You review the app in Tableau and refine it through conversation.

A data app combines a custom web interface with Tableau data access and hosting. For more about how it works, see [What are Tableau data apps?](./trex_dataapp_overview.md).

## Before you begin

You need:

- Access to a Tableau Cloud site that supports data apps.
- A user role that can publish content (e.g Creator) to your intended destination.
- A published Tableau data source that you can access (have view, connect, and API access permissions for). Have its name or link ready.
  - Alternatively, a local file that can be embedded in the `.twbx` that contains the data app.
- An AI client that supports [Tableau MCP](https://tableau.github.io/tableau-mcp/docs/getting-started) connections, the [Tableau plugin](https://github.com/tableau/tableau-plugin), and code execution. The assistant needs to work with local files and run the plugin's scripts.

The workflow uses the `scaffold-data-app`, `publish-workbook`, and `request-workbook-upload` MCP tools, along with tools for finding data sources and reading their metadata. Tool availability depends on your Tableau environment and permissions. Ask the assistant to check these capabilities before it starts building.

:::note

Your data app may make REST API calls to Tableau services that read and modify data and metadata. Your site administrator needs to enable access to each REST endpoint called by your data app. To provide them with a list of paths to enable, you can prompt your AI coding assistant to list the the paths of the REST methods called by the app.

If you're using Tableau's hosted MCP server, make sure your agent has network egress access to the blob storage that Tableau MCP uses to temporarily store workbook files. For more information, see the Tableau MCP [Popular Client Integrations](https://tableau.github.io/tableau-mcp/docs/hosted-tableau-mcp/client-integrations#allow-network-egress-to-tableau-file-staging-storage) page.

:::

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

The [Tableau plugin](https://github.com/tableau/tableau-plugin) gives your assistant the skills and scripts for building a data app. Those skills cover scaffolding, connecting a published data source, writing the interface, packaging, and publishing.

Codex/ChatGPT, Claude, and Claude Desktop each install a prebuilt branch from that repository. The `main` branch is only the source code.

**Codex/ChatGPT.** One install covers Codex and ChatGPT desktop. It uses the `dist/codex` branch:

```bash
codex plugin marketplace add tableau/tableau-plugin --ref dist/codex
codex plugin add Tableau@tableau-plugin
```

Restart Codex or ChatGPT. Open **Plugins** and select **Authenticate** or **Connect** for Tableau. Start a new Codex or ChatGPT task so the plugin loads.

**Claude.** Clone the `dist/claude` branch, then install it in Claude:

```bash
git clone --branch dist/claude --single-branch https://github.com/tableau/tableau-plugin.git tableau-plugin-claude
claude plugin marketplace add ./tableau-plugin-claude
claude plugin install tableau@tableau-plugin
```

Start a new Claude session and connect Tableau.

**Claude Desktop.** Clone the `dist-claude-slim` branch:

```bash
git clone --branch dist-claude-slim --single-branch https://github.com/tableau/tableau-plugin.git tableau-plugin-claude
```

Compress the `plugins/tableau` folder into a zip file. In Claude Desktop, open **Customize → Plugins → Add → Upload plugin** and select that zip. Open the Tableau plugin's **Connectors** tab and connect Tableau. Turn on code execution in Claude Desktop, then start a new Claude Desktop chat.

For the full Claude Desktop package, clone the `dist/claude` branch instead and upload `plugins/tableau` in Claude Desktop the same way.

**Clone the source.** You can also clone the repository and follow the install instructions in its [README](https://github.com/tableau/tableau-plugin#install-locally-codex-and-chatgpt-desktop). Those instructions cover Codex/ChatGPT, Claude, and Claude Desktop.

```bash
git clone https://github.com/tableau/tableau-plugin.git
cd tableau-plugin
```

## Vibe code your data app

Create your data app by describing what you want to build.

### Your initial prompt

Tell the assistant to use the Tableau data app authoring skill. Include the app's purpose, audience, published data source, key metrics, controls, visual style, and publishing destination. For example:

> Use the Tableau plugin's data app authoring skill to build a data app called Regional Sales Explorer. Use the published Sales data source on my Tableau Cloud site. The audience is regional sales managers who need to compare sales and profit across regions. Include summary metrics, a ranked regional bar chart, and a region filter. Use a clean layout with blue accents and clear labels. Inspect the data source metadata before choosing fields, and query Tableau data at runtime. Publish it as a new workbook in the Sales Analytics project and give me the link.

Replace the example names with your own. If you do not know which data source to use, ask the assistant to find candidates and help you choose one first.

### Refining your data app

Consider these strategies for crafting the data app you want.

#### Use a spec-driven approach

[Spec-driven development](https://en.wikipedia.org/wiki/Specification-driven_development) is the best way to build and iterate on your data app. Using detailed spec.md, design.md, or plan.md as the basis for building your data app is a token efficient way to build your data app while communicating your requirements in detail. These context files also get packaged and published inside the `.twbx` along with your data app, so you can easily refer back to them or share them with your organization.

#### Use sketches or design
Provide your AI coding assistant with examples of detailed figma or design references for the data app they intend to build.

#### Review and refine in Tableau

Open the published app in Tableau Cloud. Review the layout with real data, try each filter and interaction, and confirm that labels and metrics answer your original questions. Check loading, empty, and error states, and test access as an intended viewer. Visual review happens in Tableau after publishing.

Request specific changes in the same conversation:

> Sort regions by profit instead of sales, add a sales and profit toggle, and use a distinct color for negative profit. Keep the region filter. Update the app and republish it, replacing the workbook we just created.

Before sharing, review the app's code and dependencies and confirm that intended viewers can access both the workbook and its published data source. See [data app security](./trex_dataapp_security.md) for the checks to make before sharing.


## Build and publish with the assistant

The assistant follows this workflow:

1. **Check access and tools.** Verify publishing access and the required MCP capabilities.
2. **Create the workspace.** Use `scaffold-data-app` to get a starter and apply its setup plan with the plugin's scripts.
3. **Connect the data source.** Inspect the published source's identity and fields, then connect it to the workbook. The starter alone has no data source connected.
4. **Write the app.** Implement the interface, runtime queries, filters, and loading, empty, and error states from your description.
5. **Package and publish.** Use the plugin's packaging script to create a `.twbx` and publish it through Tableau MCP to your destination.

You do not need to write the application code or assemble the workbook package yourself. If a required tool is unavailable or publishing fails, have the assistant report the missing capability or returned error so you can resolve it before continuing.

