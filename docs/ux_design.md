---
title: Design Guidelines for Dashboard Extensions
layout: guide
---

With the release of dashboard extensions in Tableau 2018.2, we're unleashing the creativity and problem-solving skills of passionate developers to make extensions for Tableau dashboards. Here’s your roadmap towards designing great extensions.

### Who is this document for?

This document is focused on guiding developers towards best practices for designing extensions, including both user interaction and visual style guidelines. For more technical information about extensions, refer to our <a href="{{site.baseurl}}/docs/trex_getstarted.html" target="_blank">Extensions API Documentation</a>.


### What are Dashboard Extensions?

Tableau Dashboard Extensions are web applications that have two-way communication with the dashboard. Dashboard extensions enable all sorts of scenarios, like letting you integrate Tableau with custom applications, making possible for you to modify the data for a visualization, or even creating custom visualizations inside the dashboard. 



### How to use this document

These guidelines cover the main things you need to know about designing a great extension experience. This document is organized in three parts. We suggest you follow the guidelines sequentially your first time through, so that you gain the broadest picture of the interactive experience before you dive into the details about using the interface controls and patterns.  



### Interaction Guidelines

| ---------| ------- | 
|[Build, Test, Share]({{site.baseurl}}/docs/Interaction_Guidelines/ux_build_test.html) | The developer's roadmap for how to get started developing and designing extensions.|
|[Extension Components and Modes]({{site.baseurl}}/docs/Interaction_Guidelines/ux_components_modes.html)| The main user-facing components of an extension to create content for. Learn about modes for configuring extensions, viewing extensions, and dashboard user types. |
| [Controls and UI Patterns]({{site.baseurl}}/docs/Interaction_Guidelines/ux_controls_ui_patterns.html)| Usage and design specifications for user interface controls and patterns in your extension. |




### Style Guidelines

| ---------| ------- | 
|[Branding your Extension]({{site.baseurl}}/docs/Style_Guidelines/ux_branding.html) | How to style your extension in accordance with the Tableau brand and your personal/company brand.|
|[Layout]({{site.baseurl}}/docs/Style_Guidelines/ux_layout.html)| Details about dashboard containers and spacing in the extension container. |
|[Color]({{site.baseurl}}/docs/Style_Guidelines/ux_color.html)| Use color effectively in your extension, and an opportunity to use Tableau's colors. |
|[Fonts]({{site.baseurl}}/docs/Style_Guidelines/ux_fonts.html)| Guidelines for using fonts in extensions. |


### Deploying your Extension

| ---------| ------- | 
|[Submitting your Extension to the Extension Gallery]({{site.baseurl}}/docs/ux_extension_gallery.html) | How to style your extension in accordance with the Tableau brand and your personal/company brand.|


---
&nbsp;

![Extensions are made using a manifest file called a .trex! FreLard stands for the Seattle neighborhoods of Fremont and Wallingford, where Tableau's headquarters stands.](imgs/trex.png)

>*This document is a work-in-progress. To give feedback, ask questions, or if you have technical questions about extensions, contact [devplat@tableau.com](mailto:devplat@tableau.com).*