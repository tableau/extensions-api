---
title: Dashboard Extension Samples
layout: docs
---

The best way to learn how to build your own extensions is to look at the sample code. To examine the sample source files to see how Tableau dashboard extensions work, you can clone or download the [Extensions API](https://github.com/tableau/extensions-api) SDK on GitHub and run the samples. 
- To download the Extensions API SDK, if you have not already done so, see [Get Started]({{ site.baseurl }}/doc/trex_getstarted.html).

- You can browse the sample code for the dashboard extensions in the [Samples](https://github.com/tableau/extensions-api/tree/master/Samples?=target="_blank") and the [Tutorial](https://github.com/tableau/extensions-api/tree/master/Tutorial?=target="_blank") folders on GitHub. 

- You can also check out the dashboard extensions from the community, see [Community Extensions]({{ site.baseurl }}/community/).


---


**In this section**

* TOC
{:toc}


---

The following instructions assume that you have already downloaded and extracted the files or have cloned the Extensions API SDK to your desktop.



### About the dashboard extension samples

The dashboard extension samples are in the `Samples` folder. There is also a step-by-step tutorial you can follow in the `Tutorial` folder. 




-   **[DataSources](https://github.com/tableau/extensions-api/tree/master/Samples/DataSources?=target="_blank")** 
     
    Shows how to use the `getDataSourcesAsync` function to find the names of the data sources for each worksheet in the dashboard. Like the Filtering sample, the DataSources sample makes use the `Promise.all` function to combine the promises from the asynchronous calls together, and then waits for them to resolve. 
 
-   **[Filtering](https://github.com/tableau/extensions-api/tree/master/Samples/Filtering?=target="_blank")** 

     Demonstrates how to use the `getFiltersAsync` function to find and display the active filters in the dashboard and calls the `addEventListener` function to set a `FilterChanged` event on each workbook in the dashboard. Any time a filter value is changed, the extension refreshes the table that displays the active filters. 

-   **[Parameters](https://github.com/tableau/extensions-api/tree/master/Samples/Parameters?=target="_blank")**
     
    Finds and displays all the parameters in the dashboard and then sets an event listener that waits for a parameter to change, which triggers a refresh. 

-   **[Settings](https://github.com/tableau/extensions-api/tree/master/Samples/Settings?=target="_blank")**
 
     Uses the `settings` namespace to save settings (key-value pairs) for the extension. Demonstrates how you can save settings for each instance of an extension, which enables sharing common views of a workbook.  



--- 
### Install the manifest files (`.trex`) for the samples 


Every Tableau extension has a manifest file (`.trex`) that describes the extension and identifies the location of the web application. 

1. Close Tableau, if you have it opened. 
2. Copy the `.trex` files of the samples you wish to run to `~\Documents\My Tableau Repository (Beta)\Extensions` so they are available to Tableau. 
  The `.trex` files for the samples can be found in the folder with the samples. For example, `\extensions-api\Samples\DataSources\DataSources.trex`.



---
### Start a web server to host the sample dashboard extensions

To use the dashboard extension samples, you need to start up a web server on your computer to host the HTML pages. If you downloaded or cloned the Extensions API repository, you can start the web service in the root directory of the repository on your computer. 

1. Go to to the the `extensions-api` folder.
2. To install the web server components, run the following command:
   ```
   npm install
   ```
3. To start the web server, run the following command:
   ```
   npm start
   ```




### Instructions for starting a web server on a different port

The samples are set up so that the web server is using port `8765`.  If you need to specify a different port instead of `8765`, you can change ports using Python, if you have Python installed, or you can run another Node.js command.  

From the `extensions-api` folder, start an HTTP server using one of the following commands. Replace `PORT` with the port you are using (for example, `8000`):

* Python 2.x : `python -m SimpleHTTPServer PORT`
* Python 3.x : `python -m http.server PORT`
* Node.js : `npm install http-server -g && http-server -p PORT`

The port you use for the web server also has to match the port specified in the manifest file (`.trex`) for the server.

```
<source-location>
      <url>http://localhost:PORT/samples/parameters/parameters.html</url>
</source-location>

```

