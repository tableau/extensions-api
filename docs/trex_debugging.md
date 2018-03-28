---
title: Remote Debugging of JavaScript and HTML
layout: docs
---

A dashboard extension embeds a web page and runs a Chromium-based browser inside of Tableau. Fortunately, you can debug this embedded web browser using the remote debugging abilities built into Chromium.

---
**In this section**

* TOC
{:toc}

 
## Set up Tableau for debugging (Windows)


If you are using Tableau Desktop on Windows, you need to open a Command Prompt window and run a command to start Tableau with debugging enabled. 

1. Open a Command Prompt window. 
2. Start Tableau using the following command:

```
"C:\Program Files\Tableau\Tableau\bin\tableau.exe" --remote-debugging-port=8696
```

This command enables remote debugging for all extensions. 

For convenience, you could also create a shortcut for Tableau and add the remote debugging option to Properties dialog box. Select Tableau from the **Start** menu, and then right-click and select **Properties** or select **Open file location**. If you open the file location, you can create a new shortcut to `Tableau.exe` (call it something like *Tableau - Debug* ). Open the Properties for the new shortcut and append `-remote-debugging-port=8696` at the end of the command in the **Target** text box. The debugging option goes after the closing quotation mark for `"Tableau.exe"`. 

![Debug Shortcut]({{site.baseurl}}/assets/Tableau_shortcut_debug.png){:height="40%" width="40%"}

## Set up Tableau for debugging (macOS)

If you are using Tableau Desktop on macOS, you need to open a Terminal window and run a command to enable debugging. 

1. Open a Terminal window. 
2. Start Tableau using the following command:

   ```
   open /Applications/Tableau\ Desktop\ main.app --args --remote-debugging-port=8696
   ```

**Note:** The remote debugging port (for example, `8696`) must match the port address you use with Chromium for debugging. This is not the HTTP port that you are using to host your extension, the port that is specified in the manifest file (`.trex`). 


## Download the Chromium Browser
In order to actually do any debugging, you'll need to use a Chromium-based browser. You can use a normal install of Chrome, but because of some version incompatibilities in the debugging protocol, we recommend using build 47.0.2526.0 of Chromium, which matches the version of the browser running inside Tableau (just download and unzip the file).
* [Chromium for Windows (47.0.2526.0)](https://www.googleapis.com/download/storage/v1/b/chromium-browser-snapshots/o/Win%2F352221%2Fchrome-win32.zip?generation=1443839123039000&alt=media)  
* [Chromium for macOS (47.0.2526.0)](https://www.googleapis.com/download/storage/v1/b/chromium-browser-snapshots/o/Mac%2F352221%2Fchrome-mac.zip?generation=1443838516381000&alt=media) 


## Debugging using Chrome/Chromium
After you have installed the Chromium browser and have enabled debugging in Tableau, you can start debugging your extension. 

1. Start Tableau and open the dashboard with the extension you want to debug. 
2. Start Chromium and set the URL to [`http://localhost:8696`](http://localhost:8696)  
   This will bring up the page selector UI. 
3. Pick the extension you want to debug from this page, and debug just like you would any other web application.

![Remote Debugging]({{site.baseurl}}/assets/UsWdJEnOiR.gif)

### Debugging Loading / Initialization Issues
It can be difficult to hit breakpoints which occur during the loading of your page due to the remote debugging process. To help with this, we've included a menu option which causes your extension to wait to load until you trigger it to.

1. In the **Debug Options** dropdown menu, select **Pause Before Loading**.
2. Reload your extension (**Debug Options** > **Reload**)
3. In Chromium, go to the debugging homepage ([http://localhost:8696](http://localhost:8696)). 
4. To attach to the browser instance, click the first item listed (it will be completely blank, but it is really there. The cursor changes so you can select it). 
4. Click the **Sources** tab in Chromium, under **Event Listener Breakpoints**, click **Script** and enable the **Script First Statement** breakpoint.
5. Back in Tableau, click the extension zone to load your page.
6. The debugger will pause each time the first statement of a script runs, allowing you to debug the startup process. To get to your JavaScript code, click **Continue** several times. Once your JavaScript is loaded, you can set a breakpoint in your startup code. 

![Startup Debugging]({{site.baseurl}}/assets/foucUWBiUJ.gif)

## Known Issues

#### Enabling debugging from the Debug Options menu

Due to changes in the start-up sequence, you can no longer enable remote debugging by selecting **Debugging Enabled** from the **Debug Options** menu in the dashboard. To enable debugging, you must add the `--remote-debugging-port=8696` option to the command used to start Tableau. You can still select the **Pause before Loading** option and set breakpoints to debug initialization and loading issues.  

#### Refreshed Page Fails
Unfortunately, due to a bug with our embedded browser, refreshing a loaded page doesn't properly setup the communication between Tableau and the extension. This means that triggering a page reload will cause your extension to stop working. It's important to note that the **Reload** menu option actually tears down and re-creates the browser control, which means you'll need to establish a new debugging sessions whenever you click **Reload**. For more information, see [What Happens When You Reload an Extension]({{site.baseurl}}/docs/trex_reload.html).

