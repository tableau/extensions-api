---
title:  Create and Test Sandboxed Extensions 
layout: docs
--- 

To provide security for customers, Tableau supports a type of dashboard extension that runs in a sandbox. These Sandboxed Extensions are hosted by Tableau and employ W3C standards, such as Content Security Policy (CSP), to ensure the extension can't make network calls outside of the hosting Tableau Server. This means a Sandboxed Extension can query data in the dashboard using the Extensions API, but it can't send that data anywhere outside of the sandbox. This topic provides information to help you get started creating and testing Sandboxed Extensions.


<div class="alert alert-info"><b>Note</b> If your extension requires resources of outside services, you should not create a Sandboxed Extension. Dashboard Extensions that don't run in the sandbox environment are called Network Enabled Extensions. While Sandboxed Extensions are allowed to run by default on Tableau Server and Tableau Online, Network Enabled Extensions require server and site administrator approval and need to be added to safe list for a site.
</div>

**In this section**

* TOC
{:toc}

---

## Sandboxed Extensions and Network Enabled Extensions

Tableau supports two types of dashboard extensions:

* **Network Enabled Extensions** - can access resources and applications outside of Tableau. Supported in Tableau 2018.2 and later.

* **Sandboxed Extensions** - run in a Tableau hosted environment and cannot make network calls. Supported in Tableau 2019.4 and later. Available for testing with Tableau 2019.3.


## Create Sandboxed Extensions

You can create Sandboxed Extensions from scratch, or you can port your existing (Network Enabled) extensions to work in the sandbox environment. The components of a Sandboxed Extension are the same as for a Network Enabled one. Each extension consists of a web page that calls your JavaScript code and the Extensions API JavaScript library. Each extension provides a `.trex` file.

To port an existing extension, make sure all resources and libraries are local to your extension source code. No network access outside the sandbox container is allowed. And you need to modify the path to your extension in the `.trex` file to have it load in the sandbox environment. Information about changing your `.trex` file is described in [Test your own Sandboxed Extensions in the local sandbox](#test-your-own-sandboxed-extensions-in-the-local-sandbox).


### Requirements for Sandboxed Extensions

* Sandboxed Extensions cannot make calls to remote or external resources or libraries. All content must be local to the extension. For example, if your extension uses the JQuery library, the library can't be accessed via HTTPS (`src="https://code.jquery.com/jquery-3.2.1.min.js"`). The library must be downloaded and on the same computer as the extension. All links must be relative (`src="./jquery-3.2.1.min.js`).

* All resources must be static files (`.js`, `.css`, images, etc.).

* Resources should be placed in the same folder as your extension web page(s), or in a sub-folder of that directory. All references must be relative.

* Review the suggested guidelines that all extensions should follow to reduce XSS vulnerabilities, see [Cross-Site Scripting and Extension Security]({{site.baseurl}}/docs/trex_xss_guidance.html).

* Sandboxed Extensions cannot connect to sites outside of the sandbox and cannot transfer data. For example, a Sandboxed extension cannot transfer data to be processed by other applications. If you need to connect to outside services or resources, you can create a Network Enabled extension. Network Enabled extensions can't run in the local sandbox environment or in the Tableau Hosting Cloud Service for Sandboxed Extensions.

* **React.js** - If you are creating your Sandboxed Extension using React.js, routing will not work, including hash-based routing (`.../index.html#/configDialog`) in your URL. If you want to use multiple pages in your extension, the alternatives to routing in React.js include using [react-app-rewired](https://www.npmjs.com/package/react-app-rewired){:target="_blank"}{:ref="noopener"} and [react-app-rewire-multiple-entry](https://www.npmjs.com/package/react-app-rewire-multiple-entry){:target="_blank"}{:ref="noopener"}, or [Gatsby](https://www.gatsbyjs.org/){:target="_blank"}{:ref="noopener"}.

* Sandboxed Extensions must be tested in the local sandbox environment. Issues discovered with the extension must be fixed and verified before submitting the Sandboxed Extension package to Tableau.

---

## Sandboxed Extensions development environment

The Extensions API SDK provides a local development environment that replicates the Tableau Hosting Cloud Service for Sandboxed Extensions. You can test your Sandboxed extensions locally with the same sandbox policies before submitting the extension to Tableau for publication. See [Publish Sandboxed Extensions]({{site.baseurl}}/docs/trex_sandbox_publish.html) for information about making your extension available to others in the cloud service for Sandboxed Extensions. The local development environment can't be used to deploy or publish your extension.

---

## Install and start the local sandbox environment

The following instructions assume that you have downloaded or cloned the Extensions API GitHub project.

1. Go to the `extensions-api` folder.

2. If you haven't done so already, install the web server the sandbox test components:

   **npm install**

3. Start the sandbox server:

   **npm run start-sandbox**

---

## Test the sample Sandboxed Extension

The Extensions API GitHub project provides an example of a Sandboxed Extension. The Sandboxed Extension is configured to run in the test sandbox environment.

1. After you start the local sandbox environment, start Tableau Desktop or Tableau Server 2019.3 (or later) and open a workbook that has a dashboard, or open a workbook and create a new dashboard.

2. In the dashboard, under **Objects**, select **Extension** and drag it on to the dashboard.  

3. In the **Choose an Extension** dialog box, click **My Extensions**, and then navigate to the `Extensions API\Samples\UINamespace-sandboxed` folder. Open the `uiNamespace.trex` file.  

    The sample extension (web application) appears in the dashboard frame. The UINamespace-sandboxed sample finds and displays the data source for each worksheet in the dashboard and lets you configure the refresh rate. The **UINamespace-sandboxed** sample is a *sandboxed* version of the Network Enabled Extension, UINamespace sample.  You can compare the source files for both extensions to better understand the differences and to see what it takes to port existing extensions (Network Enabled) to be Sandboxed Extensions. The sample extension makes use of a popup dialog box for configuration.




## Test your own Sandboxed Extensions in the local sandbox

When you start the local sandbox server (**npm run start-sandbox**), the server reads from the `sandbox-config.json` file. This sandbox configuration file defines the port the server uses (the default is set to `8765`) and provides the names and locations of the Sandboxed Extension web pages. You can modify the file to change the port or to add your own Sandboxed Extensions for testing.

Before testing your extension in the sandbox, check to make sure that you are only loading resources and libraries from the folder that contains your extension's web page. See [Requirements](#requirements-for-sandboxed-extensions).

### Add your extension to the sandbox-config.json file

If you have an extension that is ready to test in the sandbox, follow these instructions.


1. Open the `sandbox-config.json` file.

   The configuration file has two main entries. The first, specifies the `port` that the sandbox web server will use. You can change this as needed, however, it must match the port you specify in the `.trex` file for your extension. The `sandbox-config.json` file has one entry for the sandboxed version of the UINamespace sample. The file looks like the following:

    ```json
    {   
        "port": 8765,

        "extensions": {
            "uinamespace": {
                "path": "./Samples/UINamespace-sandboxed"
            }
        }
    }

    ```

2. Add an new entry under `"extensions"`, for your extension. The syntax for an entry is as follows.

    ```json
    
        "name": {
            "path": "relative-or-absolute-path-to-extensions-folder-on-disk"
        }

    ```
    Replace `name` with the name of your extension. This name is the ID for the extension and becomes part of the URL. The local server for Sandboxed Extensions hosts pages with the following syntax.

    ```

    http://localhost[:port]/sandbox/[name]

    ```

    For example, the default value for port is `8765`. If the name of the extension is `uninamespace`, that name becomes part of the URL that you specify in the `.trex` file: `http://localhost:8765/sandbox/uinamespace/`. Note that in the `.trex` file the full URL also includes the name of the web page in the URL. An implied `index.html` does not work.

    For the `"path"` value, provide the relative or absolute path to the folder on your computer that contains your extension web page and source files. The path is relative to the `extensions-api` parent folder. For example, the `uinamespace` sample is in the `.\Samples\UINamespace-sandboxed` folder.

    The following example adds an extension called `helloworld` that has its source files in the `./mySamples/HelloWorld` folder. You can enter multiple extensions. Be sure to separate each entry with a comma (,).


    ```json
    {   
        "port": 8765,

        "extensions": {
            "uinamespace": {
                "path": "./Samples/UINamespace-sandboxed"
            },
            "helloworld": {
                "path": "./mySamples/HelloWorld"
            }

        }
    }

    ```


3. Restart the local server (**npm run start-sandbox**). The local Sandboxed Extensions server only reads the configuration file at start up. Anytime you make changes to the `sandbox-config.json` file you need to stop and restart the server.


### Use the local sandbox path to the extension in the .trex file

In the `.trex` file for your extension you need to specify the URL of extension as it will appear on the local sandbox web server. The URL is constructed from several parts.  

The `<url>` for `<source-location>` must use the name of local server (`localhost`) and port setting assigned in the `sandboxed-config.json` file (`8765` is the default). This is followed by `sandbox` and the name of your extension, as you specified in the `sandbox-config.json` file. Finally, you specify the name of the HTML page that serves as the home page for your extension. The following example shows the URL for the UINamespace-sandboxed extension.

```xml

    <source-location>
      <url>http://localhost:8765/sandbox/uinamespace/uinamespace.html</url>
    </source-location>

```

After you update the `.trex` file to point to the sandboxed instance, you can start the local sandbox sever (**npm run start-sandbox**), and then open Tableau and try it out.

For information about making your Sandboxed Extension available to others, see [Publish Sandboxed Extensions]({{site.baseurl}}/docs/trex_sandbox_publish.html).
The local development environment can't be used to deploy or publish your extension.


## Troubleshoot the test environment

To troubleshoot issues with your Sandboxed Extension in the test environment, you should start a debugger so you can observe if there are any problems with your setup, such as missing files and resources, and to see if there are any instances where your extension generates any CSP errors and warnings. For information about using debugging tools, see [Debug Extensions in Tableau Desktop]({{site.baseurl}}\docs\trex_debugging.html).

Error `Cannot find extension with id: <xxxxxx>`

If you see this error in the console of your debugging tools, be sure the name (or ID) of the extension in the `sandbox-config.json` file matches the name you specified in the `<url>` in the `.trex` file.

