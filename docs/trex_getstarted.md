---
title: Get Started
layout: docs
---

<div class="alert alert-info">
    <i><b>Developer Preview:</b> This is preliminary documentation and is subject to change.</i> 
</div> 


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

- Open a terminal in the directory where you want to download the Tableau Extensions SDK.  Then run the following command to clone
   the Tableau Extensions API git repository:

   `git clone https://github.com/tableau/extensions-api.git`

- Download the [Tableau Extensions API SDK (.zip file)](https://github.com/tableau/extensions-api/archive/master.zip).




---
### Download and install Tableau Desktop


The version of Tableau that supports the Extension API is only available from from the **Extensions API Developer Preview** on [https://prerelease.tableau.com](https://prerelease.tableau.com). 
1. Download and install Tableau Desktop from the [Extensions API Developer Preview](https://prerelease.tableau.com) site). 
   Under **Resources**, click **Extensions API Software Downloads**. There are separate installation applications for Windows and macOS. You can also download the Extensions API JavaScript library, which is needed if you are going to develop your own extensions.

2. To avoid situations that might cause Tableau to become unresponsive, turn off accelerated graphics. From the **Help** menu, click **Settings and Performance**, and then clear the **Enable Accelerated Graphics** option. 


---
### Start a web server to host the sample dashboard extensions

To use the dashboard extension samples, you need to start up a web server on your computer to host the HTML pages. If you downloaded or cloned the Extensions API repository, you can start the web service in the root directory of the repository on your computer. 

- From the root of this directory, start an HTTP server on port 8765.
	- Python 2.x : `python -m SimpleHTTPServer 8765`
	- Python 3.x : `python -m http.server 8765`
	- Node.js : `npm install http-server -g && http-server -p 8765`




--- 
### Install the dashboard extension manifest file (`.trex`) 


Every Tableau extension has a manifest file (`.trex`) that describes the extension and identifies the location of the web application. 

1. Close Tableau, if you have it opened. 
2. Copy the `.trex` files of the samples you wish to run to `~\Documents\My Tableau Repository (Beta)\Extensions` so they are available to Tableau. 
  The `.trex` files for the samples can be found in the folder with the samples. For example, `\extensions-api\Samples\DataSources\DataSources.trex`.



---
### Start Tableau and add an extension to the dashboard

1. Start Tableau and open a workbook that has a dashboard, or open a workbook and create a new dashboard. 
2. In the dashboard, under **Extensions**, select the Hello Frelard extension and drag it on to the dashboard. 
   ![]({{site.baseurl}}/assets/hellofrelard_sm.png)
   
   The Hello Frelard extension (web application) appears in the dashboard frame. 
3. Click the **Initialize Addin Api** button.  This action initializes the extension and web application and displays the name of the dashboard. 

   ![]({{site.baseurl}}/assets/hello_test2.gif) 



---
### Using dashboard extensions in a workbook
When a Tableau Extension is installed, you can use the extension like you would any other dashboard object. The settings for the extensions are saved when you save the workbook. 
You can add multiple instances of an extension to a dashboard or to multiple dashboards within a workbook. The settings for each instance are saved separately.



------------------------------------------------------------------------
  
## What's next?

- For more information about how you can use Extensions API, go look at the [Samples](https://github.com/tableau/extensions-api/tree/master/Samples/) or follow the [Tutorial](https://github.com/tableau/extensions-api/tree/master/Tutorial/HelloFrelard) and learn how to build a dashboard extension, step by step.   

- For general information about creating Tableau extensions, see [Creating a Tableau Extension]({{site.baseurl}}/docs/trex_create.html).
- To get familiar with the programming interface for the Extensions API, see the <a href="{{site.baseurl}}/docs/index.html" target="_blank">API Reference</a>.

For more information about how you can use dashboard extensions, see the [ReactJs](https://github.com/tableau/ProjectFrelard/tree/master/Examples/ReactJs) examples or the [HelloFrelard](https://github.com/tableau/ProjectFrelard/tree/master/Examples/HelloFrelard) example.   


For information about debugging your extension, see [Remote Debugging of JavaScript and HTML]({{site.baseurl}}/docs/trex_debugging.html).
