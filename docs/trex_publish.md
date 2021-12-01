---
title: Publish a Dashboard Extension
layout: docs
---

If you want to share the dashboard extensions you create with others you have several options. 
If the dashboard extension is running on a publicly accessible web server over HTTPS, you can distribute the manifest file (`.trex`). Dashboard authors can then add the extension to their dashboards.

**In this section**

* TOC
{:toc}

## Sharing an extension by sharing the workbook 

The easiest way to share an extension with others is to share the workbook that contains the dashboard extension. If the extension is hosted on web site that is accessible and the extension is using HTTPS protocol, viewers of the dashboard will be able see and use the extension. However, if the users do not also have access to the dashboard extension manifest file (`.trex`), they will not be able to add the extension to other dashboards or to other workbooks. 

![]({{ site.baseurl }}/assets/frelard_share_twb.png){:height="75%" width="75%"}


## Publishing a dashboard extension to Tableau Server or Tableau Online

While you don't exactly publish a dashboard extension to Tableau Server or Tableau Online, you can publish the workbook that contains an extension to Tableau Server. You can also add a dashboard extension to a dashboard on Tableau Server or Tableau Online when you are in authoring mode.

However, to run on Tableau Server or Tableau Online, your extension must:

* Be hosted on a web server that uses HTTPS (`localhost` is the exception during development). Note that hosting your extension on the same computer that is running Tableau Server is not recommended.
* Declare full data access (if the extension calls any functions that access the underlying data in the dashboard). 
* Be granted permission to run on Tableau Server or Tableau Online. 

|---- | 
|**Note** If you want to test your extension with Tableau Online and you are running an extension on `http://localhost` during development, see [Load and view localhost content on sites that use secure connections]({{site.baseurl}}/docs/trex_security.html#load-and-view-localhost-content-on-sites-that-use-secure-connections)|


 Tableau Server and Tableau Online have settings that control whether dashboard extensions are allowed to run and whether specific extensions can access the underlying data in a dashboard.


 To enable a dashboard extension on Tableau Server or Tableau Online, the server administrator or the site administrator (Tableau Online) must allow extensions for the site. The administrators can then choose to enable the default policy that allows *unknown* extensions that only request summary data to run, provided users grant the extension permission. These extensions are unknown in the sense that they have not been explicitly added to the safe list or to the blocked list on Tableau Server or Tableau Online.  

 If your extension requires access to full data (underlying data) the server or site administrator must add the URL of your extension to a safe list and must explicitly grant the extension access to full data. The server or site administrator can also configure whether users of your extension will see prompts requesting permission to run.

The following flowchart shows how the settings on Tableau Server or Tableau Online determine whether an extension is allowed or denied permission to run.

 ![alt text]({{site.baseurl}}/assets/Extensions_Safe_List_Block_List_Evaluation_2x.png "Flowchart showing the process that allows or denies an extension to run on Tableau Server or Tableau Online.")
  
 See
 [Manage Dashboard Extensions on Tableau Server](https://onlinehelp.tableau.com/current/server/en-us/dashboard_extensions_server.htm) or [Manage Dashboard Extensions on Tableau Online](https://onlinehelp.tableau.com/current/online/en-us/dashboard_extensions_server.htm) for more information.





## Publishing a dashboard extension to the Tableau Exchange

If you want to make your dashboard extension readily available to a large number of people, you can take steps to have your extension added to the [Tableau Exchange](https://exchange.tableau.com/).

Publishing your extension to the Tableau Exchange means that people will be able to discover your extension, find out what it can do, and then add the extension to their dashboards, all while working within Tableau.

In addition to the requirements for all extensions to ensure security and usability, such as:
 * Using HTTPS
 * Validating user input
 * Declaring data access requirements
 * Providing a URL that customers can use to get support for your the extension
 
 Dashboard extensions that appear in the Tableau Exchange must also:

* Follow the Design Guidelines for Dashboard Extensions (user interaction and style guidelines for user interface elements).
* Ensure that the information in the extension manifest file (`.trex`) matches the content that you will publish in the Tableau Exchange. For example, the `name`, `description` fields are used to populate the name and description fields in the Tableau Exchange.  The icon you use in the manifest should also be the icon that is used in the Exchange. You need to provide a 280x280 pixel `.png` version of the icon. 

For information about getting your extension into the Tableau Exchange, see [Submitting your Extension to the Tableau Exchange]({{site.baseurl}}/docs/ux_extension_gallery.html){:target="_blank"}.

For information about designing an extension, see [Design Guidelines for Dashboard Extensions]({{site.baseurl}}/docs/ux_design.html){:target="_blank"}.

![]({{ site.baseurl }}/assets/trex_gallery.png){:height="50%" width="50%"}

## Publishing or sharing a dashboard extension on the Communities page

Another way to share your work with other developers is to add it to the [Community Portal for Dashboard Extensions]({{ site.baseurl }}/community/). You can use the portal to provide links to your source code and you can also provide a `.trex` file for users to download. To make it easier for others to use your extension, we ask that your `.trex` file specifies a link to a hosted version of your extension
See [Hosting and Contributing to the Community Portal]({{site.baseurl}}/docs/trex_contributing.html)

Submit your extension to the [Community Portal for Dashboard Extensions]({{ site.baseurl }}/community/)
