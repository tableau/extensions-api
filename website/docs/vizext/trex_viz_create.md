---
title: Create a "Hello World" Viz Extension
description: How to create a simple "Hello World" viz extension
tags: [Getting started]
---

To create a Tableau viz extension you need the following components.

- A manifest file that identifies and describes the viz extension.
- The Tableau Extensions API JavaScript library (`tableau.extensions.N.N.N.js`)
- A web page that hosts the viz and uses the library. The web page provides a viz specification that interacts with Tableau and data in the worksheet.
- Additional JavaScript and HTML and CSS files as needed for your web app.
- A web server to host your web app.

---




### What you need to get started

These instructions assume that you have already cloned or download the Extensions API SDK. For information about setting up your environment and the Tableau requirements, see [Get Started](./trex_viz_getstarted).

For convenience, you might want to create a folder for your "Hello World" viz extension in the same location where you installed or cloned the GitHub repository. Create your folder, for example, **HelloVizExtension** in the Samples folder, under `/extensions-api-preview`. That way, you can use the same web server (`http-server`) that is used for the samples.

---

### Create a manifest file

The manifest file (`EXTENSION-NAME.trex`) is an XML file that describes the extension and provides information to register the extension with Tableau. For a description of the contents of this file, see [Elements of the viz manifest file](./trex_viz_manifest#elements-of-the-viz-manifest-file).

1. In the HelloVizExtension folder, create a manifest file for your extension.
Name the manifest file for your extension (for example, `HelloVizExtension` and save it with the file name extension `.trex`).

1. Copy the following XML code into your new file. Make sure that the `<?xml ...>` declaration appears as the first element in the file (line 1, column 1). Any blank spaces in front of the declaration will cause an error when you load the extension.  

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest manifest-version="0.1" xmlns="http://www.tableau.com/xml/extension_manifest">
  <worksheet-extension id="com.tableau.extension.demo.hello.viz" extension-version="0.1.0">
    <default-locale>en_US</default-locale>
    <name resource-id="name"/>
    <description>Hello Viz Extension</description>
    <author name="tableau" email="projectfrelard@tableau.com" organization="tableau" website="https://www.tableau.com"/>
    <min-api-version>1.1</min-api-version>
    <source-location>
      <url>http://localhost:8765/Samples/HelloVizExtension/HelloVizExtension.html</url>
    </source-location>
    <icon/>
    <encoding id="drop">
      <display-name>Drop...</display-name>
    </encoding>
  </worksheet-extension>
  <resources>
    <resource id="name">
      <text locale="en_US">Hello Viz Extension</text>
    </resource>
  </resources>
</manifest>

``````


- In this file, you need to provide values for a few elements. Some key pieces are:
- For `<worksheet-extension id=" ">` use reverse domain name notation to uniquely identify the extension (`com.example.extension.hello.demo`)
- For `<source-location>` make sure that this specifies the URL of your web application. You must use the HTTPS protocol. The exception to this requirement is `localhost`, where you can use HTTP. For example, if you created a `HelloVizDemo` folder and want to host the file locally on your computer using port 8765, you might use: `http://localhost:8765/HelloVizDemo/HelloVizExtension.html`
- The `<min-api-version>` element that specifies the minimum version of the Extensions API library that is required to run the extension.
- The `<icon>` element currently isn't implemented for viz extensions. This metadata is used to provide branding for the extension, as would be shown in an About dialog box.
- Provide the `name` for your extension (`Hello Viz Extensions!`). The manifest file can be localized, so provide the name (or names) in the appropriate `<text>` elements in the `<resources>` section.  

- After you have created the HTML and JavaScript files for your extension, you use this `.trex` file to add the extension to a Tableau worksheet. To do that, open a worksheet, on the **Marks** card, expand the Mark Type drop-down menu. Under Viz Extensions, select **Add Extensions**. In the **Add an Extension** dialog box that appears, select **Access Local Extensions**. Browse to the location where you put the manifest file you just created, for example, the `HelloVizExtension` folder and select the `HelloVizExtensions.trex` file.

- For information about the manifest file and about adding version information, see the [Tableau Viz Extension Manifest](./trex_viz_manifest).


---

### Create your web app

The web app you create provides the code to create the visualization interacts with the Tableau worksheet to get data and the encoding. The web app consists of an HTML file and the supporting JavaScript code that initializes and accesses the worksheet using the Extensions API. You host this web app on a web server (the server specified in the manifest file). In this case, we are using a web server running on your local computer.


#### Create the HTML page

Your web application must include an HTML page. This page should link to the Extensions API JavaScript library and to any other JavaScript, CSS, or HTML resources your web app requires. You could add the JavaScript code to initialize and call Extensions API functions directly in the HTML page. However, in most cases you want to keep this code in a separate file.

1. In the `HelloVizExtensions` folder (or wherever you put your `.trex` file), create a file called `HelloVizExtension.html`.

1. You can copy and paste the following code into your file. This code creates a very simple page that displays a single line of text. This HTML code assumes that you copied or cloned the `extensions-api-preview` repository and are creating your extension in a HelloVizExtension folder, under Samples.

  ```html
   <!DOCTYPE html>
   <html>
     <head>
      <title>Hello Viz Extensions</title>

      <!-- Tableau Extensions API Library  -->
      <script src="../../lib/tableau.extensions.1.latest.js"></script>

      <!-- Our extension's code -->
      <script src="./HelloVizExtension.js"></script>
     </head>

     <body>
      <div style="width: 100%; height: 100%; position: fixed" id="content">
         <p>Drag a field on to the tile labeled <b>Drop</b> on the Marks card.</p>
      </div>
     </body>
   </html>
  
  ```

   The sample code includes a link to the JavaScript library (`tableau.extensions.1.latest.js`), which is available in the `/lib` folder. The sample code also includes links to jQuery and Bootstrap libraries.

1. If necessary, adjust the relative path to the Extensions API JavaScript library (`tableau.extensions.1.latest.js`), which is available in the `/lib` folder.

   ```html

   <!-- Tableau Extensions API Library  -->
   <script src="../../lib/tableau.extensions.1.latest.js"></script>

   ```

1. The sample code also includes a link to `HelloVizExtension.js`, this is a JavaScript file that you will need to create. The path assumes that the JavaScript file is in the same directory as your HTML file. Adjust the path and name as necessary and save the file.

   ```html

   <!-- Your JavaScript code that uses the Extensions API goes here -->
   <script src="./HelloVizExtension.js"></script>

   ```

**Note**:
For this developer preview, it makes your life easier if you place your own extensions in the Samples folder. The first reason is that you can host the extensions using the same web server you started with `npm start` command described in the Get Started with Viz Extensions topic. The second reason is that the Tableau preview test site has been configured so that all extensions that use the path `http://localhost:8765/Samples` are included on the safe list (or allowlist). Because the extension is running on your local computer (`http://localhost`) and uses the URL that is allowed on the site, you are good to go. In general, when you are creating your own viz extensions, you will need to ensure that that the extension URL has been added to the safe list for the Tableau site. For more information, see
[Add extensions to the safe list and configure user prompts](https://help.tableau.com/current/online/en-us/dashboard_extensions_server.htm#add-extensions-to-the-safe-list-and-configure-user-prompts).

---

#### Start the web service to host the extension

1. Start the web service to verify you have the web app and files configured. <br/> The URL of the server must match the `SERVER` in the manifest file for the extension. Be sure to include the `http://` or `https://` in the URL. If you are using your `localhost` for development work, you might want to use the same lightweight web server that is used for the Extensions API samples and tutorial. Assuming that you've cloned or downloaded the repository, and that you've created a folder under `/extensions-api-preview`, you can start the server by using the `npm start` command. Or if you need to use a different port and location, you can install and start the `http-server` yourself (replacing PORT with the port you need and that matches the port you specified in the manifest file):

   ```bash

      npm install http-server -g && http-server -p PORT

   ```

1. Check the HTML page to make sure that your web server is working. Place the URL in the address bar of your browser. This is the URL from the `<source-location>` you specified in the manifest file. Make sure the PORT in your URL matches the PORT you specified in the command to start the http-server. Be sure to include the full path to the web page.  

   ```html

     http://localhost:8765/Samples/HelloVizExtension/HelloVizExtension.html

   ```

1. If your web page appears, great. Close the browser window and test the extension in Tableau. If it doesn't, verify that you specified the correct URL. The URL path and port number should match what you specify in your `.trex` file. Verify that the local web server is using the correct port. In the Terminal or Console window where you started the web server, check for any error messages. And try again.

---

### Test your extension in Tableau

After you have created the manifest file (`.trex`) and have hosted your web app you can test it in Tableau. It's a good idea to do this even if your application isn't completed.

1. Start up your web page or application (or make sure it is running).

1. Log on to Tableau Cloud [https://us-west-2a.online.tableau.com](https://us-west-2a.online.tableau.com) and open a workbook, for example, Superstore. Click **Edit** and create a new worksheet (from the Worksheet menu, select **New Worksheet**), or open a new workbook in your Personal Space and connect to the **Superstore Datasource**.

1. On the **Marks** card, expand the Mark Type drop-down menu. Under Viz Extensions, select **Add Extensions**.

1. In the **Add an Extension** dialog box that appears, select **Access Local Extensions**. Browse to the location where you put the manifest file you just created, `HelloVizExtension`.  Select the `HelloVizExtension.trex` file.

   After you select the manifest file, your web page should appear in the worksheet zone, as a blank page.

   - If not, and you see a 404 error, verify that you specified the correct URL to serve the page in the `.trex` file.

   - Tableau parses the `.trex` file when you add the extension to the worksheet. If you make changes to the `.trex` file after you have added it to the worksheet, you need to remove the extension from the worksheet and then add it back again.

1. From the Data pane, drag a field onto to the **Drop** encoding tile on the Marks card.

1. The message "Drag a field on to the tile labeled Drop on the Marks card." should appear. Close the worksheet without publishing (from the File menu, select **Close**).

---


### Add code to initialize the extension and call Tableau Extensions API functions

The next step is to create the JavaScript that calls the Extensions API. In your JavaScript code (either in your HTML page or in a separate JavaScript file), you first need to initialize the extension. To do this, you call `tableau.extensions.initializeAsync()`. The function returns after the initial bootstrap operation is complete and the extension is available for use. The Extensions API follows the [CommonJS Promises/A standard](http://wiki.commonjs.org/wiki/Promises/A) for asynchronous method calls.

1. In the same directory as your HTML page, create a file called `HelloVizExtension.js`.  The name just needs to match the name of the file that you specified in your HTML page 
(`<script src="./HelloVizExtension.js"></script>`).

2. Copy the following example code and paste it into the file.

```javascript

'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  window.onload = tableau.extensions.initializeAsync().then(() => {
    // Get the worksheet that the Viz Extension is running in
    const worksheet = tableau.extensions.worksheetContent.worksheet;
    console.log(worksheet);

    console.log(`The name of the worksheet is ${worksheet.name}`);

    // Listen to event for when the summary data backing the worksheet has changed.
    // This tells us that we should refresh the data and encoding map.
    worksheet.addEventListener(
      tableau.TableauEventType.SummaryDataChanged,
      updateDataAndRender
    );
  }, function (err) {
    // Something went wrong in initialization.
    console.log('Error while Initializing: ' + err.toString());
  });

  // Uses getVisualSpecificationAsync to build a map of encoding identifiers (specified in the .trex file)
  // to fields that the user has placed on the encoding's shelf.
  // Only encodings that have fields dropped on them will be part of the encodingMap.
  async function getFieldsOnEncoding (worksheet) {
    const visualSpec = await worksheet.getVisualSpecificationAsync();
    const marksCard =
      visualSpec.marksSpecifications[visualSpec.activeMarksSpecificationIndex];
    const encodings = [];
    for (const encoding of marksCard.encodings) {
      if (encoding.id === 'drop') {
        encodings.push(encoding.field.name);
      }
    }

    return encodings;
  }

  async function updateDataAndRender () {
    const fields = await getFieldsOnEncoding(tableau.extensions.worksheetContent.worksheet);

    // Clear the content region before we render
    const content = document.getElementById('content');
    content.innerHTML = '';

    const msg = JSON.stringify(fields);

    // Display the array of fields mapped to the encoding ("drop")
    content.innerHTML = msg;


    // To do: 
    // Add encodings to Marks card (for example, x, y, and r coordinates)
    // Call worksheet.getSummaryDataReaderAsync() to get worksheet data
    // Combine the worksheet data with the encodings (x, y, r)
    // Pass the coordinates and data to code that generates visualization
    // See the connectedScatterplot sample for an example
  }
 })();


```

### Try it out in Tableau

1. Sign into Tableau and open the Superstore workbook, click edit and open an new worksheet. Alternatively, open a new workbook in your Personal Space and connect to a data source.

1. In a worksheet, on the Marks card, expand the Mark Type drop-down menu.

1. Under Viz Extensions, select **Add Extension**.

1. In the Add an Extension dialog box that appears, select **Access Local Extensions**.

1. Browse to the directory where your extension is located. For example, if you downloaded or cloned the GitHub repository, go to `\extensions-api-preview\Samples\HelloVizExtension` and select the `HelloVizExtension.trex file`.

1. Drag some fields on to the **Drop** tile on the Marks card. The name of the fields that you've added to the Marks card are displayed in the worksheet. Every time you add or remove a field, the names are updated.

### About the example code

This example illustrates some of the components that are common need to include in your viz extension.

1. Initialize the Extensions API

   When the HTML page is added to the worksheet, the `window.onload` event calls the code to initialize the Extensions API (`initializeAsync`). During the viz extension initialization, the code uses the `worksheetContent` object to access the current `worksheet`. The `worksheet` object is used in subsequent calls. If the initialization fails for some reason, for example, you are using the older version of the library that does not support viz extensions (`<worksheet-extension>`), the error is written to console log.

2. Add an event listener to catch changes in the worksheet

   In the initialization code, the code adds an event listener for the `tableau.TableauEventType.SummaryDataChanged` event and specifies an event handler called `updateDataAndRender`.  Whenever the backing data for the worksheet changes, the event handler is called to redraw the viz. For example, whenever you drop a field onto the encoding tile on the Marks card the worksheet data changes. 

3. Create the event handler to fetch the data and the encodings and render the viz

   This is the code that draws the viz based on the current encodings and data. This example is extremely simplified and just uses the method called to retrieve the encoding, `worksheet.getVisualSpecificationAsync()`. From the `visualSpec`, the list of encodings is collected from the Marks card. The HelloVizExtensions example just has one encoding tile labeled "Drop..." The list of fields that are dropped on the tile are displayed in the content area of the worksheet. In real life, you would use multiple encodings that would correspond to the coordinates in your visualization (for example, x, y, and r). 

   The other missing piece from this code example is the data. To retrieve the data from the worksheet, you call the `worksheet.getSummaryDataReaderAsync()` method. This method returns a `DataTableReader`, which you use to page through the summary data in the worksheet, to extract the rows of data. See the conncecteScatterplot viz extension sample to see an example of how this is done. 

  Finally, after you have the data and the map of encodings to fields you can pass this to code that can generate a scatterplot, a Sankey diagram, or network visualization. This example just prints the fields to the content area of the worksheet. But it's a start.

---

### Debugging and testing your extension in Tableau

For information about debugging your extension, see [Debug Extensions in Tableau Server and Tableau Cloud](../debug/trex_debug_server).

### Code Style

Our sample code follows the [Semi-Standard Style](https://github.com/Flet/semistandard) for JavaScript samples linting. If you create your own extension code, you can run `npm run lint` to validate the style of your code.

`npx semistandard --fix` to fix linting issues, which can be fixed automatically.

---

## What's next?

- For more information about how you can use the Extensions API, go look at the [Samples](https://github.com/tableau/extensions-api-preview/tree/main/Samples/). Study the sample, connectedScatterPlot, to see a full implementation of a viz extension.

- Get familiar with the programming interface of the Extensions API, see [API Reference](pathname:///api/).

- If you use the local web server in the Extensions API SDK to host your own viz extensions, you can take advantage of the [d3](https://d3js.org/) libraries that are installed locally. When you run the **npm run build** command in the root directory of the repo, the d3 libraries are installed the `node_modules` directory. To use the libraries, add the path to your HTML file. For example, the `ConnectedScatterplot` and `Sankey` samples are in the Samples directory and include the following relative path to the d3 library:  

  ```html

  <script src="../../node_modules/d3/dist/d3.min.js"></script>

  ```
