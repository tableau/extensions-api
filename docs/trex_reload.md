---
title: What Happens When you Reload an Extension 
layout: docs
--- 

When you create an extension, you are often making frequent changes to the JavaScript code, the HTML pages, or the manifest file. It is helpful to see the results of those changes while you are working. Because dashboard extensions are essentially web applications, you can do most of this quickly, without jumping through the hoops of building or compiling your code. However, because the extension is running inside a Tableau dashboard, there are some differences you need to be aware of. 

**In this section**

* TOC
{:toc}


## What happens at start up
When you first add an extension to a dashboard, Tableau reads the extension's manifest file (`.trex`) and checks for errors. If the manifest file passes validation, Tableau registers the extension, loads the web page specified in the URL, and then caches information about the extension, such as the URL, the name of the extension, and the version number. Upon loading the web page, the extension runs the initialization code (`tableau.extensions.initializeAsync()`) that initializes the Extension API and then runs any JavaScript promise specified by the extension. 

## Making changes to the manifest file
If you make changes to the manifest file after the extension is loaded and you want to see the results those changes, you need to remove the extension from the dashboard and then add it again. For example, if you were to change permissions for data access, or to add a configuration menu to your extension, you need to do the following: 
1.	Remove the extension from the dashboard.  
2.	Drag the Extension object on to the dashboard and select your extension again. 
Tableau loads the extension using the settings from the updated manifest file. 

## What happens when you reload the extension in Tableau
You can reload the extension’s initial web page and state when you select **Reload** from the **More Options** menu in upper-right corner of the dashboard container. This is equivalent to performing a hard-refresh in a browser. This is useful if you are making changes to the HTML pages or JavaScript code and you want to check your progress and see your changes in action. When you reload the extension this way, it does not pick up any changes you might have made to manifest file. For that, you need to remove the extension and add it back again. 

Note that if you want to reload the page and you are using Chromium or another browser to debug your web application, you will need to close the browser and restart the session. This is because of a bug with our embedded browser. The **Reload** option actually tears down and re-creates the browser control, which means you’ll need to establish a new debugging session whenever you click **Reload**.

## Making changes to a configuration dialog box
If your extension opens a configuration dialog box, or otherwise calls the `tableau.extensions.initializeDialogAsync()` method, you don't need to use the **Reload** option to see updates to your dialog box. You just need to close the dialog box and then either use the **Configure...** menu or click the control in the parent window that reopens the dialog box. 
