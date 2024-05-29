---
title: Viz Extension Samples
description: Information about using the Tableau viz extension samples
---

The best way to learn how to build your own extensions is to look at the sample code. To examine the sample source files to see how Tableau viz extensions work, you can clone or download the [Extensions API](https://github.com/tableau/extensions-api) SDK on GitHub and run the samples.

- To download the Extensions API SDK, if you have not already done so, see [Get Started](./trex_viz_getstarted).

<!--- Update the path with the viz extension sample on the release site -->
- You can browse the sample code for the extensions in the [Samples](https://github.com/tableau/extensions-api-preview/tree/master/Samples?=target="_blank") folder on GitHub.

---


The following instructions assume that you have already downloaded and extracted the files or have cloned the Extensions API SDK to your desktop.

### About the viz extension samples

The viz extension samples are in the `Samples` folder.


-   **[ConnectedScatterplot](https://github.com/tableau/extensions-api-preview/tree/main/Samples/ConnectedScatterplot?=target="_blank")**
     
    Shows how to create a viz extension. 

-   **[DataSources](https://github.com/tableau/extensions-api-preview/tree/main/Samples/DataSources?=target="_blank")** 
     
    Shows how to use the `getDataSourcesAsync` function to find the names of the data sources for the worksheet. Like the Filtering sample, the DataSources sample makes use the `Promise.all` function to combine the promises from the asynchronous calls together, and then waits for them to resolve. 
 
-   **[Filtering](https://github.com/tableau/extensions-api-preview/tree/main/Samples/Filtering?=target="_blank")** 

     Demonstrates how to use the `getFiltersAsync` function to find and display the active filters in the worksheet and calls the `addEventListener` function to set a `FilterChanged` event on the worksheet. Any time a filter value is changed, the extension refreshes the table that displays the active filters.

-   **[Parameters](https://github.com/tableau/extensions-api-preview/tree/main/Samples/Parameters?=target="_blank")**
     
    Finds and displays all the parameters in the worksheet and then sets an event listener that waits for a parameter to change, which triggers a refresh. 

-   **[Sankey](https://github.com/tableau/extensions-api-preview/tree/main/Samples/Sankey?=target="_blank")**

    Sankey diagrams or charts - named after their creator, Matthew Henry Phines Riall Sankey, who first used this chart type in 1898. Somewhat similar to the Sankey viz type  Tableau had offered in the recent Sankey and Radial new chart types pilot (June 2023).

-   **[Settings](https://github.com/tableau/extensions-api-preview/tree/main/Samples/Settings?=target="_blank")**
 
     Uses the `settings` namespace to save settings (key-value pairs) for the extension. Demonstrates how you can save settings for each instance of an extension, which enables sharing common views of a workbook.  

-   **[UINamespaces](https://github.com/tableau/extensions-api-preview/tree/main/Samples/UINamespace?=target="_blank")**

     Demonstrates how you can use the `UI` namespace to create a modal dialog box (or popup) that runs another extension, which allows users to interact and change the settings for the parent extension. This sample controls the background auto-refresh interval for data sources in a worksheet. 

-   **[VizImage](https://github.com/tableau/extensions-api-preview/tree/main/Samples/VizImage?=target="_blank")**

    Shows how you can use Tableau Viz to add visualizations to your extensions. This sample demonstrates the effects of different mark types and color palettes. For more information about Tableau Viz, see [Add Tableau Viz to Your Extensions](../core/trex_tableau_viz).


---
### Start a web server to host the sample viz extensions

To use the extension samples, you need to start up a web server on your computer to host the HTML pages. If you downloaded or cloned the Extensions API repository, you can start the web service in the root directory of the repository on your computer. These commands start the Node.js basic service `http-server`.

1. Go to the `extensions-api-preview` folder.
1. To install the web server components, run the following command:

   ```cli
   npm install
   ```

1. To start the web server, run the following command:

   ```cli
   npm start
   ```

### Instructions for starting a web server on a different port

The samples are set up so that the web server is using port `8765`.  If you need to specify a different port instead of `8765`, you can change ports using another Node.js or `http-server` command.  

From the `extensions-api-preview` folder, you can start the `http-server` using one of the following commands. Replace `PORT` with the port you are using (for example, `8000`). 

To install the `http-server`on your computer globally and to also start the server: 

```cli
npm install http-server -g && http-server -p PORT
```

If you have already installed `http-server`, you can start the server directly:

```cli
http-server -p PORT
```

The port you use for the web server also has to match the port specified in the manifest file (`.trex`) for the server.

```html

<source-location>
      <url>http://localhost:PORT/Samples/Parameters/parameters.html</url>
</source-location>

```

---

### Use the extensions in the samples folder

After you start the web server to host the sample extensions, you can try the extensions in Tableau.

1. Sign in to Tableau, open an existing workbook, click Edit and open a new worksheet. Or open a new workbook in your Personal Space.

1. In a worksheet, on the Marks card, expand the Mark Type drop-down menu.

1. Under Viz Extensions, select **Add Extension**.

1. In the Add an Extension dialog box that appears, select **Access Local Extensions**.

1. Browse to the directory where the samples are located. For example, if you downloaded or cloned the GitHub repository, go to `\extensions-api-preview\Samples`.
1. Select one of the folders for the samples and open the `.trex` file (for example, `DataSources.trex`). <br/>
Every Tableau extension has a manifest file (`.trex`) that describes the extension and identifies the location of the web application. 
 
The extension should appear in the worksheet.  Play around with the extension. Examine the HTML and JavaScript source files to see how things work.  
