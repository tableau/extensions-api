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

1. Start Tableau and drag an extension onto the dashboard.
2. Select the extension in the dashboard. 
3. Click the **More Options** button in the upper-left or upper-right corner of the extension. Click **Debug Options** > **Enable Debugging**.
4. After enabling debugging, select **Debug Options** > **Reload** to reinitialize the browser. You might need to stop and restart Tableau for the settings to take effect. 

![Enable and reload]({{site.baseurl}}/assets/TcNTYA9566.gif)


After you've done these steps, debugging will be enabled for all extensions until you turn it off.


## Set up Tableau for debugging (macOS)

If you are using Tableau Desktop on macOS, you need to open a Terminal window and run a command to enable debugging. 

1. Open a Terminal window. 
2. Start Tableau using the following command:

   ```
   open /Applications/Tableau\ Desktop\ near.app --args --remote-debugging-port=8696
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
6. The debugger will pause each time the first statement of a script runs allowing you to debug the startup process

![Startup Debugging]({{site.baseurl}}/assets/foucUWBiUJ.gif)

## Known Issues
#### Refreshed Page Fails
Unfortunately, due to a bug with our embedded browser, refreshing a loaded page doesn't properly setup the communication between Tableau and the extension. This means that trigger a page reload will cause your extension to stop working. It's important to note that the **Reload** menu option actually tears down and re-creates the browser control, which means you'll need to establish a new debugging sessions whenever you click **Reload**.

