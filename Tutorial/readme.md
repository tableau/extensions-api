# Dashboard Extensions Tutorial

This project contains a tutorial designed to explain the various components of authoring and using a Dashboard Extension in Tableau.

This tutorial demonstrates a number of different aspects of the Dashboard Extensions API. The goal of this extension is to display a data table summarizing the selected marks on a particular worksheet on a dashboard (similar to clicking view data on a tooltip). When the selected marks change, we want to update the data table with the newly selected marks. Then we will add functionality which allows the user to click on any column of data in the selected marks and filter the viz down to the domain of that column.

### Prerequisites

- Understanding of basic web development (this tutorial makes heavy use of [jQuery](https://jquery.com/) for javascript code and [Bootstrap](https://getbootstrap.com/) for styling).
- Node and npm installed on your machine ([https://nodejs.org](https://nodejs.org)).
- Tableau Desktop 2018.2 or higher. Can also use web authoring in Tableau Server or Online. Join our [developer program](https://developer.tableau.com) for a free Online developer sandbox site.

### Set Up

- In a command prompt, go to the root of the git repo (a directory above this one).
- Run `npm install`.
- Run `npm start` to initialize the http server to server your content.

### Tutorial

To make it easier to follow along, the tutorial is organized in seven parts. Each folder in this project contains the extension's code at the end of that part. In addition, there is a corresponding extension manifest file which allows you to see the extension's progress from within Tableau as you follow along.

### Tutorial Sections

0. [Starting the Server & Registering a Manifest](./Part_0/readme.md)
1. [Initialization](./Part_1/readme.md)
2. [Ask the User to Select a Sheet](./Part_2/readme.md)
3. [Getting and Displaying the Data](./Part_3/readme.md)
4. [Responding to Selection Changes](./Part_4/readme.md)
5. [Persisting Settings in the Workbook](./Part_5/readme.md)
6. [Performing Actions](./Part_6/readme.md)

### Completed Extension

If you just want to jump to the end, follow the set up steps, then inside of Tableau drag out a new extension object. Find the "Tutorial - Complete" dashboard extension in the Manifest file and allow it to run.

![Completed Screenshot](./assets/Completed.gif)

### React Version

Included is also a functionally equivalent version of this sample written using React instead of jQuery and DataTables. It can be found in the ReactVersion folder (it has its own setup steps).

