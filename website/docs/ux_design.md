---
title: Design Guidelines for Dashboard Extensions
description: UX design guidelines for dashboard extensions
---

With the release of dashboard extensions in Tableau 2018.2, we're unleashing the creativity and problem-solving skills of passionate developers to make extensions for Tableau dashboards. Here’s your roadmap towards designing great extensions.

### Who is this document for?

This document is focused on guiding developers towards best practices for designing extensions, including both user interaction and visual style guidelines. For more technical information about extensions, refer to our <a href="../dashext/trex_getstarted.html" target="_blank">Extensions API Documentation</a>.

### What are Dashboard Extensions?

Tableau Dashboard Extensions are web applications that have two-way communication with the dashboard. Dashboard extensions enable all sorts of scenarios, like letting you integrate Tableau with custom applications, making possible for you to modify the data for a visualization, or even creating custom visualizations inside the dashboard. 

### How to use this document

These guidelines cover the main things you need to know about designing a great extension experience. This document is organized in three parts. We suggest you follow the guidelines sequentially your first time through, so that you gain the broadest picture of the interactive experience before you dive into the details about using the interface controls and patterns.  

### Interaction Guidelines

|  See      |     For information about   |
|:--------- |:------- |
|[Build, Test, Share](./Interaction_Guidelines/ux_build_test) | The developer's roadmap for how to get started developing and designing extensions.|
|[Extension Components and Modes](./Interaction_Guidelines/ux_components_modes)| The main user-facing components of an extension to create content for. Learn about modes for configuring extensions, viewing extensions, and dashboard user types. |
| [Controls and UI Patterns](./Interaction_Guidelines/ux_controls_ui_patterns)| Usage and design specifications for user interface controls and patterns in your extension. |


### Style Guidelines

| See   |  For information about |
| :---------| :------- |
|[Branding your Extension](./Style_Guidelines/ux_branding) | How to style your extension in accordance with the Tableau brand and your personal/company brand.|
|[Layout](./Style_Guidelines/ux_layout)| Details about dashboard containers and spacing in the extension container. |
|[Color](./Style_Guidelines/ux_color)| Use color effectively in your extension, and an opportunity to use Tableau's colors. |
|[Fonts](./Style_Guidelines/ux_fonts)| Guidelines for using fonts in extensions. |


### Deploying your Extension

| See       | For information about |
| :---------| :------- |
|[Submitting your Extension to the Tableau Exchange](ux_extension_gallery) | How to style your extension in accordance with the Tableau brand and your personal/company brand.|


---
&nbsp;

![Extensions are made using a manifest file called a .trex! FreLard stands for the Seattle neighborhoods of Fremont and Wallingford, where Tableau's headquarters stands.](./imgs/trex.png)

>*This document is a work-in-progress. To give feedback, ask questions, or if you have technical questions about extensions, contact [devplat@tableau.com](mailto:devplat@tableau.com).*