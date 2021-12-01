---
title: Get Started with Dashboard Extensions
layout: docs
---

The Tableau Dashboard Extensions API allows developers to create extensions for Tableau. Tableau extensions are web applications that can interact and communicate with Tableau. A dashboard extension can be placed in the dashboard like any other dashboard object.

<div class="alert alert-info"><b>Note</b> If you are looking for information about how to extend Tableau calculations to include popular data science programming languages and external tools, see the <a href="https://tableau.github.io/analytics-extensions-api/" target="_blank" ref="noopener">Tableau Analytics Extensions API</a>.</div>
 
This section will take you through the process of setting up your environment to use one of the sample dashboard extensions. Using one of the sample extensions is a great way to learn and great way to get started developing your own extensions. In this section, you will start a simple web server on your computer to host the sample. You can use the same process for hosting the extension when you start developing your own.

<div class="alert alert-info"><p><b>Note</b> If you are looking for information about how to add an extension to a dashboard in Tableau, see <a href="https://onlinehelp.tableau.com/current/pro/desktop/en-us/dashboard_extensions.htm" target="_blank" ref="noopener">Use Dashboard Extensions</a>. If you are looking for extensions that you can use, see the <a href="https://extensiongallery.tableau.com/" target="_blank" ref="noopener">Tableau Extension Gallery</a>.</p>
</div>



**In this section**

* TOC
{:toc}


----
*What's in a Tableau extension? <br/>
A Tableau extension consists of a manifest file (`.trex`), a web page that uses a Tableau-provided JavaScript library, and the JavaScript file (or files) that contain your extension logic. The Tableau extensions are supported on Tableau Desktop, Tableau Server, and Tableau Online.*

---




### What you need to get started

If you want to create an extension or work with the sample code, make sure you have the following dependencies installed:

* [Git](https://git-scm.com/downloads)
* [Node.js and npm](https://nodejs.org/en/download/) 

You need Node.js and npm to run the dashboard extension demos. Node.js is a JavaScript runtime. npm is a package manager for Node.js and is installed when you install Node.js.

Requirements for using dashboard extensions in Tableau:

* Tableau Desktop 2018.2 and later
* Tableau Server 2018.2 and later
* Tableau Online

To run extensions on Tableau Server or Tableau Online, support for extensions must be enabled, and depending upon the extension and the data access it requires, the extension might need to be added to the safe list for the site. See
 [Manage Dashboard Extensions on Tableau Server](https://onlinehelp.tableau.com/current/server/en-us/dashboard_extensions_server.htm) or [Manage Dashboard Extensions on Tableau Online](https://onlinehelp.tableau.com/current/online/en-us/dashboard_extensions_server.htm) for more information.

----

### Get the Tableau Extensions API SDK

You can get the Tableau Extensions API SDK in two ways. Clone the repository if you want to contribute to the open source project or keep current with the latest changes. Download the `.zip` file if you want to view the samples and work on your own.

* Open a terminal in the directory where you want to copy the Tableau Extensions SDK.  Then run the following command to clone
   the Tableau Extensions API git repository:

   `git clone https://github.com/tableau/extensions-api.git`

* Download the [Tableau Extensions API SDK (.zip file)](https://github.com/tableau/extensions-api/archive/main.zip) and extract the files to your computer.



---
### Start a web server to host the sample dashboard extensions

To use the dashboard extension samples, you need to start up a web server on your computer to host the HTML pages. If you downloaded or cloned the Extensions API repository, you can start the web service in the root directory of the repository on your computer. For example, if you downloaded the `extensions-api-main.zip` file to your `Downloads` directory, after you extract the files, the path might be `Downloads\extensions-api-main\extensions-api\`. 

1. Navigate to the `extensions-api` directory.

2. To install the web server components, run the following npm commands to install the package:

   **npm install**

   **npm run build**

  
3. To start the web server, run the following npm command:
 
   **npm start**

    The start command runs a script to start the web server over port `8765`. You only need to install the web server components the first time. Subsequently, you can just start the web server, using **npm start**.
    The start commands uses the npm [http-server](https://www.npmjs.com/package/http-server){:target="_blank"} package, a simple HTTP server that uses Node.js for serving static files to the browser.


    | **Note:**  The web server just serves the extension samples, which have URLs similar to the following: `http://localhost:8765/Samples/DataSources/datasources.html` This local web server is not intended to serve the Extensions API Help pages. View the Help on GitHub at [https://tableau.github.io/extensions-api](https://tableau.github.io/extensions-api).



---
### Start Tableau and add an extension to the dashboard

1. Start Tableau and open a workbook that has a dashboard, or open a workbook and create a new dashboard.

2. In the dashboard, under **Objects**, select **Extension** and drag it on to the dashboard.

   ![]({{site.baseurl}}/assets/frelard_objects_extension.png){:height="25%" width="25%"}

3. In the **Choose an Extension** dialog box, click **My Extensions**.
   Every Tableau extension has a manifest file (`.trex`) that describes the extension and identifies the location of the web application.

4. Browse to the directory where the samples are located. For example, if you downloaded or cloned the GitHub repository, go to `\extensions-api\Samples\DataSources`.

5. Open the `DataSources.trex` file.
   The sample extension (web application) appears in the dashboard frame. The DataSources sample finds and displays the data source for each worksheet in the dashboard.

6. In the DataSources extension, click the **Info** (**i**) button.  This action opens a dialog box that displays more details about the selected data source.  

   ![]({{site.baseurl}}/assets/data_source.gif)

----

### Examine the source code for the extension

Looking at the files that make up an extension will give you an idea of how an extension is constructed.

1. Browse to the directory where the DataSources sample is located. For example, if you downloaded or cloned the GitHub repository, go to `\extensions-api\Samples\DataSources`.

2. Open the `datasources.html` file in your favorite Text or Code editor. This HTML page provides the interface that users see when they load the extension. This file includes links to the Extensions API library file and to the file that contains all the JavaScript code for the extension.

    ```html
    <!-- Extensions Library  -->
    <script src="../../lib/tableau.extensions.1.latest.js"></script>

    <!-- Our extension's code -->
    <script src="./datasources.js"></script>
    ```

3. Open the `datasources.js` file. This file contains code to initialize the Extensions API, and contains functions to gather all the data sources used by the workbooks in the dashboard. Read through the code and the code comments to get an understanding about how this extension works. The Extensions API makes use of JavaScript Promises to collect the data returned from the asynchronous function calls. Look for the code that initializes the extension. An extension will often place the initialization code in the JQuery `$(document).ready()` function so that it will run when the page is loaded.

    ```javascript
    (function () {
      $(document).ready(function () {
        tableau.extensions.initializeAsync().then(function () {
        /* body of function  */
        /* controls what the extension does */
        /* extension calls other functions here */ 
        } function (err) {
        // Something went wrong in initialization.
           console.log('Error while Initializing: ' + err.toString());
        });
      });
    /*  extension can define other functions here as needed */
    })();
    
    ```
  
4. Open the `DataSources.trex` file. This is the manifest file for the extension. This is the file that you selected to add the extension to the dashboard. This file defines certain properties for the extension, such as the name, and author, and the location (URL) of the extension.

    ```xml
    <source-location>
      <url>http://localhost:8765/Samples/DataSources/datasources.html</url>
    </source-loc>
    ```

    If you make a copy of the sample directory so that you can start to modify the code and experiment with the Extensions API, you just need to modify this path so that the URL reflects the new location.

    ```xml
    <source-location>
      <url>http://localhost:8765/_your-new-folder-here_/DataSources/datasources.html</url>
    </source-loc>
    ```


<!-- ### Using dashboard extensions in a workbook
When a Tableau Extension is installed, you can use the extension like you would any other dashboard object. The settings for the extensions are saved when you save the workbook. 
You can add multiple instances of an extension to a dashboard or to multiple dashboards within a workbook. The settings for each instance are saved separately.
 
 -->

----
  
## What's next?

* Start developing your extension by modifying an existing sample. See [samples (GitHub)](https://github.com/tableau/extensions-api/tree/master/Samples/). If you cloned or downloaded the repository, create a copy of the Samples directory. For example, if you make the copy in `\extensions-api\` directory, and call it `MySamples`, you just need to modify the URL in the `.trex` files so that you host the extensions using the same web server you created with `npm start` command.

* Follow the [Tutorial (GitHub)](https://github.com/tableau/extensions-api/tree/master/Tutorial) and learn how to build a dashboard extension, step by step. If you downloaded or cloned the repository, look in the `Tutorial` folder on your computer.

* For information about creating a simple "Hello World" Tableau extension, see [Create a "Hello World" Dashboard Extension]({{site.baseurl}}/docs/trex_create.html).

* To get familiar with the programming interface for the Extensions API, see the <a href="{{site.baseurl}}/docs/index.html" target="_blank">API Reference</a>.

* For information about debugging your extension, see [Debug Extensions in Tableau Desktop]({{site.baseurl}}/docs/trex_debugging.html) and [Debug Extensions in Tableau Server and Tableau Online]({{site.baseurl}}/docs/trex_debug_server.html).
