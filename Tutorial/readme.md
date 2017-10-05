# Dashboard Extensions Tutorial

This project contains a tutorial designed to explain the various components of authoring nad using a Dashboard Extension in Tableau.

This tutorial demonstrates a number of different aspects of the Dashboard Extensions API. The goal of this extenison is to display a data table summarizing the selected marks on a particular worksheet on a dashboard (similar to clicking view data on a tooltip). When the selected marks change, we want to update the data table with the newly selected marks. Then we will add functionality which allows the user to click on any column of data in the selected marks and filter the viz down to the domain of that column.

### Prerequisites

- Understanding of basic web development (this tutorial makes heavy use of [jQuery](https://jquery.com/) for javascript code and [Bootstrap](http://getbootstrap.com/) for styling)
- node and npm installed on your machine ([https://nodejs.org](https://nodejs.org))
- Tableau Desktop with the Extensions feature (Alpha build)

### Set Up

- Copy the `.trex` files in the Manifests folder into your `My Tableau Repository/Extensions` folder and restart Tableau.
- In a command prompt, go to the root of the git repo (a directory above this one)
- Run `npm install`
- Run `npm start` to initialize the http server to server your content

### Tutorial

To make it easier to follow along, the tutorial is organized in six parts. Each folder in this project contains the extension's code at the end of that part. In addition, there is a corresponding extension manifest file which allows you to see the extensions progress from within Tableau as you follow along.

### Tutorial Sections

0. [Starting the Server & Registering a Manifest](./Part_0/readme.md)
1. [Initialization](./Part_1/readme.md)
2. [Ask the User to Select a Sheet](./Part_2/readme.md)
3. Getting and Displaying the Data
4. Responding to Selection Changes
5. Persisting Settings in the Workbook
6. Performing Actions

### Part 1 - Initialization

The very first thing you need to do is to provide an extension, or manifest file (`.trex`). If you cloned or downloaded the `.zip` file for the TC17demo repository, you can find the sample `MarksSelection.trex` file in the `Extensions` folder. The `.trex` file contains basic information like the name of the extensions (as it will appear in Tableau) and the url where the extension is hosted. To have the extension show up in Tableau, you must copy the `.trex` file into your `My Tableau Repository/Extensions` fodler and restart Tableau.  

The next step is to create an HTML page to host the extension. Our HTML page is called `MarksSelection.html` and it is quite basic. It includes some external JavaScript and styling libraries, the Tableau Extensions API JavaScript file, and the JavaScript file where we will write our code. The page also defines some very basic UI elements. The JavaScript libraries we included were Bootstrap, DataTables, and JQuery. Data Tables has a convenient download builder [here](https://datatables.net/download/) which we used to bundle all this together.

The final step for writing a complete extension is to call the Extension API method `initializeAsync()` when the page has loaded. This indicates to Tableau that this is a real extension and everything is working as expected. The method call also triggers Tableau to configure the rest of the Extensions API.

### Part 2 - Ask the User to Select a Sheet

Now that our extension is initialized, we'll need to prompt the user to choose which sheet on their dashboard to get data from. We will provide the user with a list of buttons and once they select one, show the data for that sheet.

In order to prompt the user, we first need to ask Tableau which worksheets are on the dashboard with our extension by calling `tableau.extensions.dashboardContent.dashboard.worksheets` to get a list of all the worksheets. For each worksheet, we create a new button and add a click event handler for that button. When the button is clicked, we will take action. This action is described in a later part of the tutorial.

### Part 3 - Getting and Displaying the Data

Now that the user has selected a sheet, we want to change the UI that is displayed. We do this by showing and hiding the divs on our page by calling the `setVisibleSection()` function that we defined. We also set up some other UI components, such as defining a new table element, and hooking up the button we defined earlier for switching which sheet to get data from.

Once the right UI is showing, we need to ask Tableau for the data of the sheet the user picked. The first step is to find the worksheet object by name inside the `tableau.extensions.dashboardContent.dashboard.worksheets` array we built the list from before. After we have the sheet, we call the `worksheet.getSummaryDataAsync({ignoreSelection: false})` API to get the data for the marks that are selected (or all the marks if there is no selection). The final step is to process the returned data into a format that Data Tables expects and pass the data over.

### Part 4 - Responding to Selection Changes

The next part of our tutorial covers responding to the user selection changes and updating the data. This is actually an extremely simple process. After we get the worksheet we are going to get data for, we call `worksheet.addEventListener(tableau.TableauEventType.MarkSelectionChanged, handler)`. Whenever this sheet has a new selection, our `handler` function will be called and we can reload the data table with new data.

The other important aspect of the `addEventListener` function is that it returns a helper function that makes it easy to remove the event listner. When we re-initialize the data table, we check to see if our `unregisterEventHandlerFunction` function is defined, if it is, we unregister it, so we are only listening to one sheet at a time.


### Part 5 - Persisting Settings in the Workbook

As you may have noticed when playing with our sample up to this point, when the extension reloads or the workbook is reloaded, we lose track of which sheet the user has selected to view data for. This creates a suboptimal user experience and would be quite unusable if your extensions had a lot of customization. Luckily, the Extensions API includes a settings API which allows you to persiste key/value pairs into a workbook to be used again when the extensions is reloaded.

To take advantage of the settings API, we add calls to `tableau.extensions.settings.set('sheet', worksheetName)` and `tableau.extensions.settings.saveAsync()` once the user has selected their sheet. These APIs together will persist the sheet name into the workbook for it to be available between reloads and will go with the workbook if you publish to server or send to another user. To retrieve these values, we add a call to `tableau.extensions.settings.get('sheet')` in our initialization code. If we have a saved sheet name, we immediately switch to the data table view instead of showing the configuration scr

### Part 6 - Performing Actions

The final step of our tutorial will be about performing actions on our dashboard. For our example, this will mean selecting a set of marks from a workbook which the user has previously bookmarked. Other examples of actions are things like filtering a viz, changing the value of a parameter, or refreshing a data source to update a viz.

To use the select marks API, we first need to get the worksheet we want to select marks for by searching for it by name. Once we have the worksheet back, we can call `worksheet.selectMarksAsync()`.