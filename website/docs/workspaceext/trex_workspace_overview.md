---
title: What is a Tableau Workspace Extension
description: Describes a workspace extension and how it differs from dashboard and viz extensions
---

A workspace extension is a web application that runs at the *workspace* level of Tableau, the overall authoring and viewing environment, rather than inside a single workbook. Unlike a dashboard extension (which lives in a dashboard) or a viz extension (which lives in a worksheet), a workspace extension is not tied to one workbook. It stays available as you open, close, and switch between workbooks. A workspace extension is one type of extension that can be built using the Tableau Extensions API.

---

## Components of a Tableau workspace extension

A Tableau extension consists of a manifest file (`.trex`), a web page (`.html`) that uses a Tableau-provided JavaScript library, and the JavaScript file (or files) that contain your extension logic.

## What can you do with a workspace extension?

Because a workspace extension is not bound to a single workbook, it is well suited to tools and utilities that need to be available throughout a Tableau session:

* Provide persistent tooling or utilities that stay available regardless of which workbook is open.
* Respond to workbook lifecycle changes, such as when a workbook is opened, closed, or switched.
* Work with the currently active workbook when there is one, and continue to run when there is none.

:::warning[TODO: REVIEW]
<mark>Confirm the surface(s) a workspace extension can present in the Tableau UI (for example, persistent toolbars and menus versus a standalone extension window).</mark>

Flagged because: the available source material describes the workspace extension being opened from a menu and shown in its own window, but the intended feature description also mentions persistent toolbars and menus. These need to be reconciled before this section can state what authors can build.
:::

## How a workspace extension differs from dashboard and viz extensions

All three extension types are web applications built on the same Tableau Extensions API and share a common library, but they operate at different scopes:

* A **dashboard extension** runs inside a dashboard and is saved as part of the workbook.
* A **viz extension** runs inside a worksheet and is added from the Marks card.
* A **workspace extension** runs at the workspace level, independent of any single workbook, and remains available as you move between workbooks.

A few distinctions:

* A workspace extension can run with or without an active workbook. When a workbook is open, the extension can access information about it; when no workbook is open, the extension continues to run.

* A workspace extension is registered for your Tableau environment rather than being saved inside a specific workbook.

* A workspace extension receives notifications when the active workbook changes, so it can update itself as you open, close, or switch workbooks.

:::warning[TODO: REVIEW]
<mark>Confirm where workspace extensions are supported (Tableau Desktop, Server, Cloud) and any availability requirements.</mark>

Flagged because: supported-environment details are release information and are not yet confirmed for public documentation.
:::
