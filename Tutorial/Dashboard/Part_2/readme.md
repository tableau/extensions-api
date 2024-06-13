## Part 2 - Ask the User to Select a Sheet

Now that our extension is initialized, we'll need to prompt the user to choose which sheet on their dashboard to get data from. We will provide the user with a list of buttons and once they select one, show the data for that sheet.

#### Showing a dialog

We make use of bootstrap's dialog functionality in this section of the tutorial by creating a new div with the id `choose_sheet_dialog`. We show and hide this dialog by call `$('#choose_sheet_dialog').modal('toggle');`

#### Getting the list of worksheets

In order to prompt the user, we first need to ask Tableau which worksheets are on the dashboard with our extension by calling [`tableau.extensions.dashboardContent.dashboard.worksheets`](https://tableau.github.io/extensions-api/docs/interfaces/worksheet.html) to get a list of all the worksheets. For each worksheet, we create a new button and add a click event handler for that button. When the button is clicked, we will take action. This action is described in a later part of the tutorial, but for now we simply display an alert with the name of the selected sheet.

#### Trying it out

When you drag out your extension, you should now see the dialog pop up. Once a sheet is selected, an alert displays the sheet's name.

![Part 2 Screenshot](../assets/Part_2.gif)

[Next Section (Part 3 - Getting and Displaying the Data)](../Part_3/readme.md)