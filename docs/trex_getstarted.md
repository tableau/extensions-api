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
A Tableau extension consists of a manifest file (`.trex`), a web page that uses a Tableau-provided JavaScript library, and the JavaScript file (or files) that contain your extension logic. The Tableau extensions are supported on Tableau Desktop and Tableau Server.*

---




### What you need to get started

If you want to create an extension or work with the sample code, make sure you have the following dependencies installed:

* [Git](https://git-scm.com/downloads)
* [Node.js and npm](https://nodejs.org/en/download/) 

You need Node.js and nmp to run the dashboard extension demos. Node.js is a JavaScript runtime. npm is a package manager for Node.js and is installed when you install Node.js.



----

### Get the Tableau Extensions API SDK

You can get the Tableau Extensions API SDK in two ways. Clone the repository if you want to contribute to the open source project or keep current with the latest changes. Download the `.zip` file if you want to view the samples and work on your own.

* Open a terminal in the directory where you want to copy the Tableau Extensions SDK.  Then run the following command to clone
   the Tableau Extensions API git repository:

   `git clone https://github.com/tableau/extensions-api.git`

* Download the [Tableau Extensions API SDK (.zip file)](https://github.com/tableau/extensions-api/archive/master.zip) and extract the files to your computer.




---
### Download and install Tableau

Dashboard extensions are supported in Tableau 2018.2 and later.  
* Download [Tableau Desktop 2018.2](https://www.tableau.com/support/releases){:target="_blank"} or [Tableau Server 2018.2](https://www.tableau.com/support/releases/server){:target="_blank"}
 


---
### Start a web server to host the sample dashboard extensions

To use the dashboard extension samples, you need to start up a web server on your computer to host the HTML pages. If you downloaded or cloned the Extensions API repository, you can start the web service in the root directory of the repository on your computer. For example, if you downloaded the `extensions-api-master.zip` file to your `Downloads` directory, after you extract the files, the path might be `Downloads\extensions-api-master\extensions-api\`. 

1. Navigate to the `extensions-api` directory.
2. To install the web server components, run the following npm command to install the package:
   ```
   npm install
   ```

3. To start the web server, run the following npm command:
   ```
   npm start
   ```
    The start command runs a script to start the web server over port `8765`.  You only need to install the web server components the first time. Subsequently, you can just start the web server. 
    


    **Note** The web server just serves the extension samples, which have URLs similar to the following: `http://localhost:8765/Samples/DataSources/datasources.html`
    This local web server is not intended to serve the Help pages. 
    View the Help on GitHub at [https://tableau.github.io/extensions-api](https://tableau.github.io/extensions-api).



---
### Start Tableau and add an extension to the dashboard

1. Start Tableau and open a workbook that has a dashboard, or open a workbook and create a new dashboard. 
2. In the dashboard, under **Objects**, select **Extension** and drag it on to the dashboard.  
   ![]({{site.baseurl}}/assets/frelard_objects_extension.png){:height="25%" width="25%"}

3. In the **Choose an Extension** dialog box, click **My Extensions**. 
 Every Tableau extension has a manifest file (`.trex`) that describes the extension and identifies the location of the web application. 
4. Browse to the directory where the samples are located. For example, if you downloaded or cloned the GitHub repository, go to `\extensions-api\Samples`. 
5. Open the `DataSources.trex` file.     
   The sample extension (web application) appears in the dashboard frame. The DataSources sample finds and displays the data source for each worksheet in the dashboard. 
6. In the DataSources extension, click the **Info** (**i**) button.  This action opens a dialog box that displays more details about the selected data source.  

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
