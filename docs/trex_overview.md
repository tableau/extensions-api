---
title: What is a Tableau Dashboard Extension
layout: docs
---

 Tableau dashboard extensions are web applications that have two-way communication with the dashboard. Dashboard extensions enable all sorts of scenarios, like letting you integrate Tableau with custom applications, making possible for you to modify the data for a viz, or even creating custom visualizations inside the dashboard. A dashboard extension is just one type of extension that can be built using the Tableau Extensions API. 

---
**In this section**

* TOC
{:toc}

## Components of a Tableau dashboard extension 
A Tableau extension consists of a manifest file (`.trex`), a web page that uses a Tableau-provided JavaScript library, and the JavaScript file (or files) that contain your extension logic. The Tableau extensions are supported on Tableau Desktop.

![]({{site.baseurl}}/assets/extensions_diagram.png) 


## Extensions API library

The Extensions API is a JavaScript library that you link to from your web application. The Extensions API library (`tableau-extensions-n.n.n.js`) gives your application access to Tableau dashboard content, including worksheets, filters, marks, and parameters. In your JavaScript code, you can set up event listeners to get notified when events occur on the dashboard. You can use the Extensions API to apply filters, or to get data back from selected marks in a worksheet. 

For more information about how you can use Extensions API, go look at the [Samples](https://github.com/tableau/extensions-api/tree/master/Samples/). 