---
title: Get Started
layout: docs
---


The Tableau Extensions API allows developers to create extensions for Tableau. Tableau extensions are web applications that have two-way communications with Tableau.
 
For example, a dashboard extension extends Tableau by enabling an embedded `iframe` within the dashboard that you can use to host your web app. After the extension is initialized and registered, your web app has access and secure two-way communication with the dashboard objects.

This section will take you through the process of setting up Tableau to use a sample dashboard extension.

**In this section**

* TOC
{:toc}



### What's in a Tableau extension? 
A Tableau extension consists of a manifest file (`.trex`), a web page that uses a Tableau-provided JavaScript library, and the JavaScript file (or files) that contain your extension logic. The Tableau extensions are supported on Tableau Desktop and Tableau Server.



### Download and install Tableau Desktop


The version of Tableau that supports the extension API is only available from from the **Project Frelard Pre-alpha SDK** on [https://prerelease.tableau.com](https://prerelease.tableau.com). 
1. Download and install Tableau Desktop from the [Project Frelard Pre-alpha SDK](https://prerelease.tableau.com) site). 
   Under **Resources**, click **Frelard Software Downloads**. There are separate installation applications for Windows and macOS. You can also download the Frelard JavaScript library, which is needed if you are going to develop your own extensions.

2. Enable the Tableau Extensions feature in Tableau.
- (**Windows**) Download and run the Frelard Registry Script (`Addins.reg`) to enable the feature flag for Project Frelard. If you don't want the script to modify the registry, you can start `Tableau.exe` with the `-DOverride=AddIns` option.   
- (**macOS**) Start Tableau, click **Help** > **Settings and Performance** > **Feature Flags** (or press **Alt**+ **Shift** + **G**). In the Feature Flags dialog box, select **AddIns**. 


### Download the sample dashboard extension 


Every Tableau extension has a manifest file (`.trex`) that describes the extension and identifies the location of the web appliction. This sample dashboard extension is simple web application that initializes the dashboard extension and gets and displays the name of the dashboard. The web application is hosted [here]({{site.host}}{{ site.baseurl}}/Examples/HelloFrelard/)


1. Click the **HelloFrelard** button to download the manifest file for the sample dashboard extension. 

    <a class="btn btn-primary btn-lg" href="{{ site.baseurl }}/samples/gitHelloFrelard.tflx" role="button" download>HelloFrelard</a>&nbsp;&nbsp; 

2. Copy the `HelloFrelard.trex` file to the Tableau `Extensions` folder, for example, `c:\Users\Heather\Documents\My Tableau Repository (Beta)\Extensions`). The extension will appear on a dashboard sheet, under **Extensions**.

### Start Tableau and add the dashboard extension

1. Start Tableau and open a workbook that has a dashboard, or open a workbook and create a new dashboard. 
2. In the dashboard, under **Extensions**, select the Hello Frelard extension and drag it on to the dashboard. 
   ![]({{site.baseurl}}/assets/hellofrelard_sm.png)
   
   The Hello Frelard extension (web application) appears in the dashboard frame. 
3. Click the **Initialize Addin Api** button.  This action initializes the extension and web application and displays the name of the dashboard. 

   ![]({{site.baseurl}}/assets/hello_test2.gif) 

### Using dashboard extensions in a workbook
When a Tableau Extension is installed, you can use the extension like you would any other dashboard object. The settings for the extensions are saved when you save the workbook. 
You can add multiple instances of an extension to a dashboard or to multiple dashboards within a workbook. The settings for each instance are saved separately.



------------------------------------------------------------------------
  
## What's next?

For information about creating Tableau extensions, see [Creating a Tableau Extension]({{site.baseurl}}/docs/trex_create.html).
To get familiar with the programming interface for the Extensions API, see the <a href="{{site.baseurl}}/docs/index.html" target="_blank">API Reference</a>.

For more information about how you can use dashboard extensions, see the [ReactJs](https://github.com/tableau/ProjectFrelard/tree/master/Examples/ReactJs) examples or the [HelloFrelard](https://github.com/tableau/ProjectFrelard/tree/master/Examples/HelloFrelard) example.   


For information about debugging your extension, see [Debugging Your Extension]({{site.baseurl}}/docs/trex_debugging.html).
