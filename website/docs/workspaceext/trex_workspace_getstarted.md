---
title: Get Started with Workspace Extensions
description: Get started with Workspace Extensions
tags: [Getting started]
---

The Tableau Extensions API allows developers to create workspace extensions, web applications that run at the workspace level of Tableau and stay available as you open, close, and switch between workbooks.

This section takes you through setting up your environment and adding a workspace extension so you can start developing your own.

:::info

**What's in a Tableau extension?**
A Tableau extension consists of an XML manifest file (`.trex`), a web page (`.html`) that uses a Tableau-provided JavaScript library, and the JavaScript file (`.js`) (or files) that contain your extension logic.

:::

### What you need to get started

If you want to create an extension or work with sample code, make sure you have followed the instructions for [installation](../installation.md).

:::warning[TODO: REVIEW]
<mark>Confirm the Tableau version requirements for workspace extensions.</mark>

Flagged because: minimum supported versions for Tableau Desktop, Server, and Cloud are release information and are not yet confirmed.
:::

### Add a workspace extension

Every Tableau extension has a manifest file (`.trex`) that describes the extension and identifies the location of the web application. To use a workspace extension, you register it for your Tableau environment and then open it when you want to use it. Once registered, a workspace extension remains available across workbooks.

:::warning[TODO: REVIEW]
<mark>Confirm the exact steps and Tableau UI entry points for registering and opening a workspace extension, and how the running extension is presented.</mark>

Flagged because: the available source material describes adding the extension and opening it from a menu, but the specific UI navigation and the way the extension is surfaced are not yet confirmed for public documentation, and depend on the open UI-model question (see the overview).
:::

## What's next?

* For information about creating a simple workspace extension, see [Create a "Hello World" Workspace Extension](./trex_workspace_create.md).

* For details on the workspace extension manifest, see [Tableau Workspace Extension Manifest File](./trex_workspace_manifest.md).

* To get familiar with the programming interface for the Extensions API, see the [API Reference](pathname:///api/).
