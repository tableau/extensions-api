---
title: Create a Tableau Extension
layout: docs
---

To create a Tableau extension you need the following components.

-   A manifest file that identifies and describes the extension.
-   The Tableau Extensions API JavaScript library (`tableau-addin-N.N.N.js`)
-   A web page that uses the library. The web page provides controls that interact with Tableau objects and data in the dashboard.
-   Additional JavaScript and HTML and CSS files as needed for your web app.
-   A web server to host your web app. 

---
**In this section**

* TOC
{:toc}


### What you need to get started

Make sure you have the following dependencies installed:

* [Git](https://git-scm.com/downloads)
* [node and npm](https://nodejs.org/en/download/) - needed to run the Dashboard Extension demos (that use ReactJS)

### Get the Tableau Extensions API SDK

- Open a terminal in the directory where you want to download the Tableau Extensions SDK.  Then run the following command to clone
   the Tableau Extensions API git repository:

   `git clone https://github.com/tableau/extensionsapi.git`



### Create a manifest file

The manifest file (`ADDIN-NAME.trex`) is an XML file that describes the add-in and provides information to register the extension with Tableau. When they are installed, the registered add-ins appear in the **Add-in** pane of the dashboard.

-  Create a manifest file for your extension.  
Name the manifest file for your extension (for example, `data-table` and save it with the file name extension `.trex`. The manifest file is an XML file that contains elements and attributes that describe the extension. For a description of the contents of this file, see [Elements of the manifest file]({{site.baseurl}}/docs/trex_manifest#elements-of-the-manifest-file). An XSD is available for validation on the pre-release website [here](https://prerelease.tableau.com/project/version/item.html?cap=52e2710a0793434d82142736c7ab3029&arttypeid={0DD668AE-472C-4E70-B465-35F7AE0DEB6D}&artid={939493D2-8000-4192-857A-67624CBCC35A}).

   ```xml
        <?xml version="1.0" encoding="utf-8"?> 
        <manifest manifest-version="0.1" xmlns="http://wwww.tableau.com/xml/addin_manifest">
          <tableau-addin id="com.tableau.addin" addin-version="0.1.0">
            <default-locale>en_US</default-locale>
            <name resource-id="name"/>
            <description>Addin Description</description>
            <addin-type>
              <dashboard-addin/>
            </addin-type>
            <author name="USERNAME" email="USER@example.com" organization="My Company" website="www.example.com"/>
            <min-api-version>1.1</min-api-version>
            <source-location>
              <url>SERVER:PORT</url> 
            </source-location>
            <icon>Base64-Encoded ICON</icon>
          </tableau-addin>
          <resources>
            <resource id="name">
              <text locale="en_US">name in English</text>
              <text locale="fr_BE">name in French</text>
              <text locale="de_DE">name in German</text>
            </resource>
          </resources>
        </manifest>
   ``` 

-  To make the add-in available in Tableau, you need to place the manifest file in an `Addins` folder in the `My Tableau Repository (Beta)` folder (for example, `c:\User\Name\Documents\My Tableau Repository (Beta)\Addins`). The add-in will appear on a dashboard sheet, under **Add-Ins**. For information about validating the manifest and adding version information, see [Tableau AddIn Manifest]({{site.baseurl}}/docs/trex_manifest.html).


   ![]({{site.baseurl}}/assets/frelard_addins1.png)  



### Create your web app

The web app you create controls and interacts with the Tableau dashboard objects. The web app consists of one or more HTML files (one is the minimum). You host this web app on a web server (the server specified in the manifest file).

#### Download the Tableau Extensions API JavaScript library

1.  Download the JavaScript library (for example, `tableau-addin-0.3.0.js`).  If you clone or download the ProjectFrelard repository, you can find the library in the examples folder (`ProjectFrelard/Examples/ReactJs/src/addin/` or `ProjectFrelard/Examples/HelloFrelard/`). The Frelard JavaScript library is also available from from the **Project Frelard Pre-alpha SDK** on [https://prerelease.tableau.com](https://prerelease.tableau.com). 
2.  Save the file so that it is available and can be referenced on the hosting HTML page on your web server.

#### Create the host HTML page

Your web application must include an HTML page. This page should link to the Frelard JavaScript library and to any other JavaScript, CSS, or HTML resources your web app requires.

1.  In the HTML page, add a link to the JavaScript library (for example, `tableau-addin-0.3.0.js`).
    
       <!-- Tableau Extensions API Library  -->
        <script src="./tableau-addin-0.3.0.js"></script>

2.  Add links to additional JavaScript files and code that you need. You could add the JavaScript code to initialize and call Frelard functions directly in the HTML page. However, in most cases you want to keep this code in a separate file.
The following is the `index.hml` from the HelloFrelard example.
       ```html 
       <!DOCTYPE html>
       <html>
         <head>
           <meta charset="utf-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1">
           `<title>Hello Frelard</title>`

           <!-- jQuery -->
           <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

           <!-- Bootstrap -->
           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >
           <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" ></script>

           <!-- Frelard AddIn Library  -->
           <script src="./tableau-addin-0.3.0.js"></script>

           <!-- Our add-in's code -->
           <script src="./hello-frelard.js"></script>
           </head>
           <body>
             <div class="container">
               <div>
                 <h1>Hello Frelard</h1>
                 <p id="resultBox" class="lead">Not Initialized</p>
                 <button id="initializeButton" class="btn btn-primary">Initialize AddIn Api</button>
               </div>
             </div>
           </body>
       </html>
       ```

3.  Save the HTML file and any JavaScript files on the web server. Start the web service to verify you have the web page configured. The URL of the server must match the `SERVER` in the manifest file for the add-in. Be sure to include the `http://` or `https` in the URL. If you are using your `localhost` for development work, you might want to set up a lightweight web server, for example, you could use Python 2.7 and the SimpleHTTPServer module:

        python -m SimpleHTTPServer [PORT]

#### Initialize the add-in and call Tableau Extensions API functions

In your JavaScript code (either in your HTML page or in a separate JavaScript file), you first need to initialize the add-in. To do this, you call `tableau.addin.initializeAsync()`. The function returns after the initial bootstrap operation is complete and the add-in is available for use.

**Syntax:**

`tableau.addin.initializeAsync()`

**Example**

In this code snippet from the [HelloFrelard add-in](https://github.com/tableau/ProjectFrelard/tree/master/Examples/HelloFrelard) example, the initialization function instantiates a dashboard add-in. The `then` method calls two callback functions to handle successful initialization or failure. In case of success, the example gets the dashboard object from the add-in, and then accesses the `name` property  to display the name of the dashboard sheet in the hosting web page. In case of an error, the error message is displayed.
```javascript    
    // ... 

    tableau.addIn.initializeAsync().then(function() {

      // Initialization succeeded! Get the dashboard's name
      var dashboard = tableau.addIn.dashboardContent.dashboard; 

      // Display the results in the UI
      $("#resultBox").html("I'm running in a dashboard named <strong>" + dashboard.name + "</strong>");
    }, function(err) {

      // something went wrong in initialization
      $("#resultBox").html("Error while Initializing: " + err.toString());
    }); 
    //  ...  
```
------------------------------------------------------------------------
  
## What's next?

Get familiar with the programming interface for Frelard, see <a href="{{site.baseurl}}/docs/index.html" target="_blank">API Reference</a>.

For more information about how you can use Project Frelard, see the [React Example](https://github.com/tableau/ProjectFrelard/tree/master/Examples/ReactJs) add-ins or the [HelloFrelard add-in](https://github.com/tableau/ProjectFrelard/tree/master/Examples/HelloFrelard) example.   


For information about debugging your add-in, see [Debugging Your Add-In]({{site.baseurl}}/docs/trex_debugging.html).
