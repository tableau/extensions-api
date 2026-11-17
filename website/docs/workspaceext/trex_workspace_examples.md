---
title: Workspace Extension Examples
description: Examples of workspace extensions
---

Workspace extensions are a good fit when the thing you're building is a *tool*, not a viz and not a dashboard widget. It should still be useful after the user closes the current workbook. The extension shows up from an `<authoring-toolbar>` button or an `<authoring-menu>` item, and it draws in a side pane.

Some shapes that fit:

* A status panel that shows the active workbook and sheet (or "none") and updates on `WorkbookChanged` / `ActiveSheetChanged`.
* A session log that records those events.
* A utility that does something useful before any workbook is open — for example, a launcher or template helper.

For a manifest you can install, see [Get Started with Workspace Extensions](./trex_workspace_getstarted.md). For the page itself, see [Create a "Hello World" Workspace Extension](./trex_workspace_create.md): init, read `workspaceContent.workbook`, listen for changes.

There is not yet a `Samples/Workspace` tree in this repo to clone and run.

What *doesn't* fit: anything that belongs inside a specific dashboard or worksheet. Use a [dashboard extension](../dashext/trex_overview.md) or [viz extension](../vizext/trex_viz_overview.md) for those.
