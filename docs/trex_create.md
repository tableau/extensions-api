---
title: Create a Tableau Extension
layout: docs
---

To create a Tableau extension you need the following components.

-   A manifest file that identifies and describes the extension.
-   The Tableau Extensions API JavaScript library (`tableau-extensions-N.N.N.js`)
-   A web page that uses the library. The web page provides controls that interact with Tableau objects and data in the dashboard.
-   Additional JavaScript and HTML and CSS files as needed for your web app.
-   A web server to host your web app. 

---
**In this section**

* TOC
{:toc}


### What you need to get started

These instructions assume that you already have cloned or download the Extensions API SDK. For information about setting up your environment and downloading Tableau Desktop for the Developer Preview, see [Get Started]({{site.baseurl}}/docs/trex_getstarted.html).



### Create a manifest file

The manifest file (`EXTENSION-NAME.trex`) is an XML file that describes the extension and provides information to register the extension with Tableau. When they are installed, the registered extensions appear under **Extensions** on the left side of the dashboard.

-  Create a manifest file for your extension.  
Name the manifest file for your extension (for example, `HelloExtensions` and save it with the file name extension `.trex`. The manifest file is an XML file that contains elements and attributes that describe the extension. For a description of the contents of this file, see [Elements of the manifest file]({{site.baseurl}}/docs/trex_manifest#elements-of-the-manifest-file). An XSD is available for validation on the pre-release website [here](https://prerelease.tableau.com/project/version/item.html?cap=52e2710a0793434d82142736c7ab3029&arttypeid={0DD668AE-472C-4E70-B465-35F7AE0DEB6D}&artid={939493D2-8000-4192-857A-67624CBCC35A}).

   ```xml
        <?xml version="1.0" encoding="utf-8"?> 
        <manifest manifest-version="0.1" xmlns="http://www.tableau.com/xml/extension_manifest">
          <dashboard-extension id="com.example.extensions.name" extension-version="0.1.0">
            <default-locale>en_US</default-locale>
            <name resource-id="name"/>
            <description>Extension Description</description>
            <author name="USERNAME" email="USER@example.com" organization="My Company" website="www.example.com"/>
            <min-api-version>0.8</min-api-version>
            <source-location>
              <url>SERVER:PORT/PATH</url> 
            </source-location>            <icon>iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAlhJREFUOI2Nkt9vy1EYh5/3bbsvRSySCZbIxI+ZCKsN2TKtSFyIrV2WuRCJuBiJWxfuxCVXbvwFgiEtposgLFJElnbU1SxIZIIRJDKTrdu+53Uhra4mce7Oe57Pcz7JOULFisViwZ+29LAzOSjQYDgz1ZcCvWuXV11MJpN+OS/lm6179teqH0yDqxPTCyKSA8DcDsyOmOprnCaeP7459pdgy969i0LTC3IO/RQMyoHcQN+3cnljW3dNIFC47qDaK3g7BwdTkwBaBELT4ZPOUVWgKl4ZBnjxJPUlMDnTDrp0pmr6RHFeEjjcUUXPDGeSEwDN0Xg8sivxMhJNjGzbHd8PkM3eHRfkrBM5NkcQaY2vUnTlrDIA0NoaX+KLXFFlowr14tvVpqb2MICzmQcKqxvbumv+NAhZGCCIPwEw6QWXKYRL/VUXO0+rAUJiPwAk5MIlgVfwPjjHLCL1APmHN94ZdqeYN+NW/mn6I4BvwQYchcLnwFhJMDiYmlRxAzjpKWZkYkUCcZ2I61wi37tLbYyjiN0fHk5Oz3nGSLSzBbNHCF35R7f6K1/hN9PRhek11FrymfQQQKB4+Gl05P2qNRtmETlXW7e+b2z01dfycGNbfFMAbqNyKp9Jp4rzOT8RYFs0njJkc2iqsCObvTsOsDWWqA5C1uFy+Uz/oXJeKwVT4h0RmPUXhi79vuC0Ku6yOffTK3g9lfxfDQAisY516sg5kfOCiJk7HoLt2cf9b/9LANAc7dznm98PagG1fUOZ9IP5uMB8Q4CPoyNvausapkTt3rNMuvdf3C/o6+czhtdwmwAAAABJRU5ErkJggg==
            </icon>
          </dashboard-extension>
          <resources>
            <resource id="name">
              <text locale="en_US">name in English</text>
              <text locale="fr_BE">name in French</text>
              <text locale="de_DE">name in German</text>
            </resource>
          </resources>
        </manifest>
   ``` 

- In this file, you need to provide values for a few elements. Some key pieces are:
- For `<dashboard-extension id=" ">` use reverse domain name notation to uniquely identify the extension (`com.example.extension.demo`)
- For `<source-location>` make sure that this specifies the URL of your web application. You must use the HTTPS protocal. The exception to this requirement is `localhost`, where you can use HTTP. For example, if you are doing development work and want to host the file locally on your computer using port 8765, you might use: `http://localhost:8765/myExtension.html` 
- The `<min-api-version>` element that specifies the minimum version of the Extensions API library that is required to run the extension.  
- For `<icon>` you must use a Base64-encoded icon. To use the default icon, copy and paste the `<icon>` example here, or copy one of the manifest files (`.trex`) from the samples. 




- To add the extension to a Tableau dashboard, you need to drag the **Extension** object on to the dashboard, and then use the **Choose an Extension** dialog box to locate and open the manifest file. For information about validating the manifest and adding version information, see the [Tableau Extension Manifest]({{site.baseurl}}/docs/trex_manifest.html).





### Create your web app

The web app you create controls and interacts with the Tableau dashboard objects. The web app consists of one or more HTML files (one is the minimum). You host this web app on a web server (the server specified in the manifest file). 



#### Create the HTML page

Your web application must include an HTML page. This page should link to the Extensions API JavaScript library and to any other JavaScript, CSS, or HTML resources your web app requires.

1.  In the HTML page, add a link to the JavaScript library (for example, `tableau-extensions-0.latest.js`).
 ```
       <!-- Tableau Extensions API Library  -->
       <script src="./tableau-extensions-0.latest.js"></script>
```
2.  Add links to additional JavaScript files and code that you need. You could add the JavaScript code to initialize and call Extensions API functions directly in the HTML page. However, in most cases you want to keep this code in a separate file. The following code is from a simple sample.
       ```html 
       <!DOCTYPE html>
       <html>
         <head>
           <meta charset="utf-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1">
           `<title>Hello Extensions</title>`

           <!-- jQuery -->
           <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

           <!-- Bootstrap -->
           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >
           <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" ></script>

           <!-- Tableau Extensions API Library  -->
           <script src="./tableau-extensions-0.latest.js"></script>

           <!-- Your JavaScript code that uses the Extensions API goes here -->
           <script src="./hello-extension.js"></script>
           </head>
           <body>
             <div class="container">
               <div>
                 <h1>Hello Extensions!</h1>
                 <p id="resultBox" class="lead">Not Initialized</p>
                 <button id="initializeButton" class="btn btn-primary">Initialize Extensions Api</button>
               </div>
             </div>
           </body>
       </html>
       ```

3. Save the HTML file and any other files your web app needs.  

4. Start the web service to verify you have the web app and files configured. The URL of the server must match the `SERVER` in the manifest file for the add-in. Be sure to include the `http://` or `https` in the URL. If you are using your `localhost` for development work, you might want to set up a lightweight web server, for example, you could use Python 2.7 and the SimpleHTTPServer module:

        python -m SimpleHTTPServer [PORT]


### Test your extension in Tableau

After you have created the manifest file (`.trex`) and have hosted your web app you can test it in Tableau. It's a good idea to do this even if your application isn't completed.   


1. Start up your web page or application (or make sure it is running). 

2. Start Tableau and open a workbook with a dashboard or create a new dashboard. 
3. In the dashboard, under **Objects**, select **Extension** and drag it on to the dashboard. In the **Choose an Extension** dialog box, click **Choose** and browse to directory where you have your manifest file.  
    
   After you select the manifest file, your web page should appear in the dashboard zone. 

   - If not, and you see a 404 error, verify that you specified the correct URL to serve the page in the `.trex` file.

   - Tableau parses the `.trex` file when you add the extension to the dashboard. If you make changes to the `.trex` file after you have added it to the dashboard, you need to remove the extension and re-add it. See [What Happens When you Reload an Extension]({{site.baseurl}}/docs/trex_reload.html)




### Add code to initialize the extension and call Tableau Extensions API functions

In your JavaScript code (either in your HTML page or in a separate JavaScript file), you first need to initialize the extension. To do this, you call `tableau.extensions.initializeAsync()`. The function returns after the initial bootstrap operation is complete and the extension is available for use. The Extensions API follows the [CommonJS Promises/A standard](http://wiki.commonjs.org/wiki/Promises/A) for asynchronous method calls. 

**Syntax:**

`tableau.extensions.initializeAsync()`

**Example**

The following code example uses the jQuery document ready function to detect when the web page is loaded and ready. The code also uses an event handler to delay the initialization until the user clicks the `initializeButton`. When the page is ready and the user clicks the button, the initialization function (`initializeAsync`) instantiates a dashboard extension. To handle the promise, the `then` method calls two callback functions to handle successful initialization or failure. In case of success, the example gets the dashboard object from the extension, and then accesses the `name` property  to display the name of the dashboard sheet in the hosting web page. In case of an error, the error message is displayed.
```javascript    
$(document).ready(function() {
  
  // Hook up an event handler for the load button click.
  // Wait to initialize until the button is clicked.
  $("#initializeButton").click(function() {

    // Disable the button after it's been clicked
    $("#initializeButton").prop('disabled', true);

    tableau.extensions.initializeAsync().then(function() {

      // Initialization succeeded! Get the dashboard
      var dashboard = tableau.extensions.dashboardContent.dashboard; 

      // Display the name of dashboard in the UI
      $("#resultBox").html("I'm running in a dashboard named <strong>" + dashboard.name + "</strong>");
    }, function(err) {

      // something went wrong in initialization
      $("#resultBox").html("Error while Initializing: " + err.toString());
    });
  });
});
```


### Debugging and testing your extension in Tableau

After you have your extension installed and showing up in Tableau, you can continue to work on your web application and see the changes without leaving Tableau. 
Reload the extension in Tableau. 

Use the **Reload** option to refresh and reload the extension in the dashboard. 


![]({{site.baseurl}}/assets/extension_reload.png) 
 

For information about debugging your extension, see [Remote Debugging of JavaScript and HTML]({{site.baseurl}}/docs/trex_debugging.html). 

You can also use the Tableau log files to identify issues, see [Use Log files to Troubleshoot Dashboard Extensions]({{site.baseurl}}/docs/trex_logging.html).

------------------------------------------------------------------------
  
## What's next?

- For more information about how you can use the Extensions API, go look at the [Samples](https://github.com/tableau/extensions-api/tree/master/Samples/) or follow the [Tutorial](https://github.com/tableau/extensions-api/tree/master/Tutorial/) and learn how to build a dashboard extension, step by step.   

- Get familiar with the programming interface of the Extensions API, see <a href="{{site.baseurl}}/docs/index.html" target="_blank">API Reference</a>.


