---
title: Debugging Extensions in Tableau Server and Tableau Online 
layout: docs
---

A dashboard extension embeds a web page inside of a dashboard on Tableau Server and Tableau Online. You can debug this embedded web browser using the debugging tools that are built into the browser that you are using.

The following section describes how you could debug your extension using the [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/){:target="_blank"}. The same principles generally apply if you are using other browsers and their developer tools. 

| For Tableau Desktop, see [Debugging Extensions in Tableau Desktop]({{site.baseurl}}/docs/trex_debugging.html).

---
**In this section**

* TOC
{:toc}



---

## Enable the debugging tools in the browser

1. Open the workbook containing the extension to Tableau Server or Tableau Online.
   <br>**Note** If the extension fails to load and you are using `localhost` to serve your extension, you might encounter the mixed content security setting. To get past this issue, see [Load and view localhost content on sites that use secure connections]({{site.baseurl}}/docs/trex_debug_server.html#load-and-view-localhost-content-on-sites-that-use-secure-connections).

1. Enable the debugging tools. The process varies by browser. If you are using the Chrome browser, enter **CTRL** + **SHIFT** + **i** (Windows) or **COMMAND** + **OPTION** + **i** (MacOS). 

2. Locate the source code for your extension. 
For example, if you were using Chrome for debugging, you can open the Source pane. Under folders shown on the navigation pane, you will find one for the extension. For example, you might see something like `extension_frame_37 (filtering.html)`.
Under this, you will find the name of the server (for example `localhost`), and you can drill down to your JavaScript source files.

---

## Set breakpoints and explore the code

If you need to debug your extension, setting a breakpoint in your source code is a good way to get started. When the breakpoint is hit, the code execution is paused in the debugger. You can then use the debugger controls to step through your code. You can use the debugging tools to see the values of local variables, and the call stack. You can also hover over in-scope variables in source window and see the current values.

1. Locate the line in your source code and set the breakpoint. For example, you want to set this early in your code after the  `initializeAsync()` function call.

2. Refresh or reload the browser window. You might see the permission dialog box prompt as the extension gets loaded.

3. Step through your code or set other breakpoints. You can examine variables to see what information the extension has access to. For example, if you step or stop on the source line where you have access to the dashboard object, you can examine the values of the available resources in the dashboard. 

    ```javascript/
    // To get filter info, first get the dashboard.
    const dashboard = tableau.extensions.dashboardContent.dashboard;
    ```

4. You can explore the dashboard extension namespace using the Console window. For example, entering the following in the Console window (while you are paused in your extension code) will print out the names of all the worksheets in the dashboard.


    ```javascript

    tableau.extensions.dashboardContent.dashboard.worksheets.forEach(function (worksheet){console.log(worksheet.name)})

    ```



![alt text]({{site.baseurl}}/assets/server_dbg_chrome.png "Chrome browser showing an extension breakpoint")



---

## Debugging during initialization 

If you need to troubleshoot or debug issues that prevent your extension from loading or initializing, you can set breakpoints that trigger when your JavaScript code is loaded. 

- In the Chrome browser, select **Event Listener Breakpoint > Script > Script First Statement**. 

After you select the breakpoint and refresh or reload the broswer window, code execution will stop when every script is loaded. This might take awhile, as code execution will stop for all the scripts in the dashboard. A better option would be to set the same breakpoint in Tableau Desktop. In Tableau Desktop, there is a debugging option you can set to pause the extension when loading. For more information, see [Debugging loading and intialization issues]({{site.baseurl}}/docs/trex_debugging.html#debugging-loading-and-inialization-issues). 

If your extension fails to load at all, it might be caused by mixed content (trying to load an HTTP web page inside of a secure HTTPS server). See [Load and view localhost content on sites that use secure connections]({{site.baseurl}}/docs/trex_debug_server.html#load-and-view-localhost-content-on-sites-that-use-secure-connections).


---

## Load and view localhost content on sites that use secure connections

If you want to test and debug your extension (running on `http://localhost`) with Tableau Online, or with Tableau Server site that is using HTTPS, the default settings of many browsers will block the extension from loading because the extension is not using a secure connection.

To temporarily get around these safety settings for the session, you can click the shield icon (or lock icon) in the browser's address bar. The alert dialog box will allow you to either load the scripts, or allow you to view the full content of the page. As soon as you load the unsafe scripts or allow the blocked content, the extension will load and will continue to be available for the duration of your session. Be sure to close the browser completely when you are finished testing. The following example shows what you might see in Chrome. 
<br/>

![alt text]({{site.baseurl}}/assets/online_blocked_extension.png "Chrome browser showing alert when extension running on a localhost server")


During the session, anytime you refresh or reload the web page, you will see the extensions dialog box requesting permission to run. And in the debugger console, you might see a warning message about mixed content.

```
Mixed Content: The page at 'https:/some_URLs#4' was loaded over HTTPS, but requested an insecure resource 'http://localhost:8765/Samples/Filtering/filtering.html'. This content should also be served over HTTPS.

```

