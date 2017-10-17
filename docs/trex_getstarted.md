---
title: Get Started
layout: docs
---

The Tableau Extensions API allows developers to create extensions for Tableau. Tableau extensions are web applications that can interact and communicate with Tableau. 
 
This section will take you through the process of setting up Tableau to use one of the sample dashboard extensions. A dashboard extension is a web application that can be placed in the dashboard like any other dashboard object.




**In this section**

* TOC
{:toc}


----
*What's in a Tableau extension? <br/>
A Tableau extension consists of a manifest file (`.trex`), a web page that uses a Tableau-provided JavaScript library, and the JavaScript file (or files) that contain your extension logic. The Tableau extensions are supported on Tableau Desktop.*

---




### What you need to get started

If you want to create an extension or work with the sample code, make sure you have the following dependencies installed:

* [Git](https://git-scm.com/downloads)
* [Node.js and npm](https://nodejs.org/en/download/) - needed to run the Dashboard Extension demos



----

### Get the Tableau Extensions API SDK

You can get the Tableau Extensions API SDK in two ways. Clone the repository if you want to contribute to the open source project or keep current with the latest changes. Download the `.zip` file if you want to view the samples and work on your own.

- Open a terminal in the directory where you want to copy the Tableau Extensions SDK.  Then run the following command to clone
   the Tableau Extensions API git repository:

   `git clone https://github.com/tableau/extensions-api.git`

- Download the [Tableau Extensions API SDK (.zip file)](https://github.com/tableau/extensions-api/archive/master.zip) and extract the files to your computer.




---
### Download and install Tableau Desktop


The version of Tableau that supports the Extension API is only available from from the **Extensions API Developer Preview** on [https://prerelease.tableau.com](https://prerelease.tableau.com). 
1. Download and install Tableau Desktop from the [Extensions API Developer Preview](https://prerelease.tableau.com) site). 
   Under **Resources**, click **Extensions API Software Downloads**. There are separate installation applications for Windows and macOS. You can also download the Extensions API JavaScript library, which is needed if you are going to develop your own extensions.

2. To avoid situations that might cause Tableau to become unresponsive, turn off accelerated graphics. From the **Help** menu, click **Settings and Performance**, and then clear the **Enable Accelerated Graphics** option. 


---
### Start a web server to host the sample dashboard extensions

To use the dashboard extension samples, you need to start up a web server on your computer to host the HTML pages. If you downloaded or cloned the Extensions API repository, you can start the web service in the root directory of the repository on your computer. For example, if you downloaded the `extensions-api-master.zip` file to your `Downloads` directory, after you extract the files, the path might be `Downloads\extensions-api-master\extensions-api\`.

1. Navigate to the the `extensions-api` directory.
2. To install the web server components, run the following command:
   ```
   npm install
   ```
3. To start the web server, run the following command:
   ```
   npm start
   ```



--- 
### Install the dashboard extension manifest file (`.trex`) 


Every Tableau extension has a manifest file (`.trex`) that describes the extension and identifies the location of the web application. 

1. Close Tableau, if you have it opened. 
2. Copy the `.trex` files of the samples you wish to run to `~\Documents\My Tableau Repository (Beta)\Extensions` so they are available to Tableau. 
  The `.trex` files for the samples can be found in the folder with the samples. For example, `\extensions-api\Samples\DataSources\DataSources.trex`.



---
### Start Tableau and add an extension to the dashboard

1. Start Tableau and open a workbook that has a dashboard, or open a workbook and create a new dashboard. 
2. In the dashboard, under **Extensions**, select one of the sample extensions and drag it on to the dashboard. For example, drag **DataSources Sample** to the dashboard.  
   ![]({{site.baseurl}}/assets/frelard_extensions1.png)
   
   The sample extension (web application) appears in the dashboard frame. The DataSources sample finds and displays the data source for each worksheet in the dashboard. 
3. In the DataSources extension, click the **Info** (**i**) button.  This action opens a dialog box that displays more details about the selected data source.  

   ![]({{site.baseurl}}/assets/data_source.gif) 



---
### Using dashboard extensions in a workbook
When a Tableau Extension is installed, you can use the extension like you would any other dashboard object. The settings for the extensions are saved when you save the workbook. 
You can add multiple instances of an extension to a dashboard or to multiple dashboards within a workbook. The settings for each instance are saved separately.



------------------------------------------------------------------------
  
## What's next?

- For more information about how you can use Extensions API, go look at the [Samples (GitHub)](https://github.com/tableau/extensions-api/tree/master/Samples/), or follow the [Tutorial (GitHub)](https://github.com/tableau/extensions-api/tree/master/Tutorial) and learn how to build a dashboard extension, step by step. If you downloaded or cloned the repository, look in the `Samples` and `Tutorial` folder on your computer.  

- For general information about creating Tableau extensions, see [Creating a Tableau Extension]({{site.baseurl}}/docs/trex_create.html).
- To get familiar with the programming interface for the Extensions API, see the <a href="{{site.baseurl}}/docs/index.html" target="_blank">API Reference</a>.


For information about debugging your extension, see [Remote Debugging of JavaScript and HTML]({{site.baseurl}}/docs/trex_debugging.html).
