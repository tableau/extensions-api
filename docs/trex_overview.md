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
A Tableau extension consists of a manifest file (`.trex`), a web page that uses a Tableau-provided JavaScript library, and the JavaScript file (or files) that contain your extension logic. The Tableau extensions are supported on Tableau Desktop, Tableau Server, and Tableau Online.

![]({{site.baseurl}}/assets/extensions_dashboard_diagram.png) 

## What can you do with a dashboard extension? 

Plenty! Using the Extensions API, you can create dashboard extensions that enable customers to integrate and interact with data from other applications directly in Tableau.

* Integrate with third-party APIs inside the dashboard.
* Use third-party charting libraries like `d3.js` to add custom visualizations.
* Create an extension that has write-back functionality, so users can modify data in a viz and have that change automatically update the source data in the database or web application.
* Build custom viz and interactivity types, such as a filter replacement with a custom interface and network diagram.


## Extensions API library

The Extensions API is a JavaScript library that you link to from your web application. The Extensions API library (`tableau.extensions.n.n.n.js`) gives your application access to Tableau dashboard content, including worksheets, filters, marks, and parameters. In your JavaScript code, you can set up event listeners to get notified when events occur on the dashboard. You can use the Extensions API to apply filters, or to get data back from selected marks in a worksheet. 

For more information about how you can use Extensions API, go look at the [Samples](https://github.com/tableau/extensions-api/tree/master/Samples/). 

## Comparing the Extensions API and the Embedding JavaScript API 

The Extensions API and the Embedding JavaScript API (also known as the [JavaScript API](https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api.htm){:target="_blank"}) are both JavaScript libraries that allow you to interact with Tableau, but they do so in two fundamental ways:  
* You can use the Embedding JavaScript API for embedding Tableau dashboards in web pages (for example, blog posts), or in line of business applications.
* You can use the Extensions API for integrating web applications into zones in Tableau dashboards. 



The Extensions API and Embedding JavaScript API share a similar programming model, but there are differences. 

| Embedding JavaScript API | Extensions API |
|------------| ---------------|
|Brings Tableau into other web applications | Brings other web applications into Tableau |
| Requires embedding Tableau dashboard into a web page | Can be used in Desktop, Server, Online, or embedded dashboard |
| Custom-built for each embedded scenario	| Can be made as a re-usable, generic-built dashboard component |
| Written in JavaScript | Written in JavaScript (similar calls) |



